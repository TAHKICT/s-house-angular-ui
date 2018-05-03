import {Injectable} from '@angular/core';

import * as socketIo from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import { WebSocketMessage } from '../../model/WebSocketMessage';

const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class WebSocketService {

  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: WebSocketMessage): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<WebSocketMessage> {
    return new Observable<WebSocketMessage>(observer => {
      this.socket.on('message', (data: WebSocketMessage) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
