import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
    <header>
        <h1>City Gallery</h1>
    </header>
`,
styles:[`header {
    padding: 1em;
    color: white;
    background-color: black;
    clear: left;
    text-align: center;
}`]
})

export class HeaderComponent {

 }