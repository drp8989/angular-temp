import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'bwm-ng';
  componentTitle="I am component";
  clickHandler()
  {
    alert("I am clicked");
  }
}
