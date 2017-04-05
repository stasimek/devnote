import {Component} from '@angular/core';

import {Note} from './note/note';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Devnote app works!';
}
