import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ocpp-websocket';

  url = 'wss://154759e9235e.ngrok.io?userID=159487909369334';

  response: Subject<any>;
  data: any;
  mainData: any;
  constructor(
    private socketSrv: WebsocketService
  ) {
    this.response = this.socketSrv
      .connect(this.url);

    this.response.subscribe(res => {
      this.mainData = res;
      console.log(this.mainData.data);
      this.data = JSON.parse(this.mainData.data);
      console.log(JSON.parse(this.mainData.data));
    })
  }
}
