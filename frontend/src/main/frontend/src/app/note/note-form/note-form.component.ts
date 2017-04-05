import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Note} from '../note';

@Component({
    selector: 'note-form',
    templateUrl: './note-form.component.html'
})
export class NoteFormComponent {
    @Input() note: Note;
    tagsString: string;

    ngOnChanges() {
        this.tagsString = this.note.tags.join(", ");
    }

    tagsChanged() {
        this.note.tags = this.tagsString.split(/[, ]+/);
    }
}
