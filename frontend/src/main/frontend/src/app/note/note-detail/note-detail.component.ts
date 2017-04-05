import {Component, Input} from '@angular/core';

import {Note} from '../note';

@Component({
    selector: 'note-detail',
    templateUrl: './note-detail.component.html'
})
export class NoteDetailComponent {
    @Input() note: Note = new Note();
}
