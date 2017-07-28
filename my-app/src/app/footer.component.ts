import { Component } from '@angular/core';

@Component({
    selector: 'my-footer',
    template: `
    <footer>
        Copyright &copy; W3Schools.com
    </footer>
    `,
    styles:[`footer {
    padding: 1em;
    color: white;
    background-color: black;
    clear: left;
    text-align: center;
}`]

})

export class FooterComponent {

}