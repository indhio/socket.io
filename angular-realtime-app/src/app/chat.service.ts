import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socketConnected$ = new BehaviorSubject<boolean>(false);

  constructor(private socket: Socket) {
    this.socket.on('connect', () => this.socketConnected$.next(true));
    this.socket.on('disconnect', () => this.socketConnected$.next(false));
    this.socketConnected$.asObservable().subscribe(connected => {
      console.log('Socket connected: ', connected);
    });
  }

  public sendMessage(message) {
    // this.socket.emit('new-message', message);
    this.socket.emit('new_message', { text: message });
  }

  public getMessages = () => {
    return this.listen('messages');
  }

  listen(event: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, data => {
        console.log('incoming for', event, data);
        observer.next(data);
      });
      // observable is disposed
      return () => {
        this.socket.disconnect(event);
      }
    });
  }

}