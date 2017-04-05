import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NoteComponent} from './note/note.component';
import {NoteFormComponent} from './note/note-form/note-form.component';
import {NoteDetailComponent} from './note/note-detail/note-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        NoteComponent,
        NoteFormComponent,
        NoteDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
