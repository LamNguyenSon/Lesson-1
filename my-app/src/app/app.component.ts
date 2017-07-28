import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  templateUrl: `./app.component.html`,
//  styleUrls: ['./app.component.css']
 template:`
 <my-header></my-header>
 <my-left-sidebar></my-left-sidebar>
 <my-content-right></my-content-right>
 <my-footer></my-footer>
 `
})
export class AppComponent {
  title = 'app';
}
