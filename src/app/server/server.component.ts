import {Component} from '@angular/core';

// Decorator always have @ and pass a js object
@Component({
  selector: 'app-server', // html by which we use the component
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
