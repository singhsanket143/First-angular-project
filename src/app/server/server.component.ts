import { Component } from '@angular/core';

// Decorator always have @ and pass a js object
@Component({
  selector: 'app-server', // html by which we use the component
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
