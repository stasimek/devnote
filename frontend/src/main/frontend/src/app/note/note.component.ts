import {Component} from '@angular/core';

import {Note} from './note';

@Component({
    selector: 'note',
    templateUrl: './note.component.html'
})
export class NoteComponent {
    note: Note = new Note();
}
