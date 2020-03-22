import { Component } from '@angular/core';
import { WebSocketsService } from './services/web-sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Muestra';

  constructor(public wsService: WebSocketsService){
    
  }
}
