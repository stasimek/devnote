/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture, ComponentFixtureAutoDetect} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {NoteComponent} from './note.component';
import {NoteFormComponent} from './note-form/note-form.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';

describe('NoteComponent', () => {
    let component: NoteComponent;
    let fixture: ComponentFixture<NoteComponent>;
    let root: HTMLElement;
    let debug: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NoteComponent,
                NoteFormComponent,
                NoteDetailComponent
            ],
            imports: [
                FormsModule
            ],
            providers: [
                // fixture.detectChanges() is automatic
                {provide: ComponentFixtureAutoDetect, useValue: true}
            ]
        });
        fixture = TestBed.createComponent(NoteComponent);
        component = fixture.componentInstance;
        root = fixture.nativeElement;
        debug = fixture.debugElement;
    }));

    it('should create the component', async(() => {
        expect(component).toBeTruthy();
    }));

    it(`should have a note with empty title`, async(() => {
        expect(component.note.title).toBeUndefined();
    }));

    it('should render title of note in a h3 tag when title is written to form', async(() => {
        expect(root.querySelector('h3').textContent).toEqual("");
        let input = root.querySelector('input[name=title]');
        if (input instanceof HTMLInputElement) {
            input.value = 'New title';
            input.dispatchEvent(new Event('input'));
        }
        expect(root.querySelector('h3').textContent).toEqual("New title");
    }));

    it('should render body of note in div.note-body when body is written to form', async(() => {
        expect(root.querySelector('div.note-body').textContent).toEqual("");
        let textarea = root.querySelector('textarea[name=body]');
        if (textarea instanceof HTMLTextAreaElement) {
            textarea.value = 'New body';
            textarea.dispatchEvent(new Event('input'));
        }
        expect(root.querySelector('div.note-body').textContent).toEqual("New body");
    }));

    it('should render 3 tags in ul>li when 3 tags are written to form', async(() => {
        expect(root.querySelector('ul>li')).toBeNull();
        let input = root.querySelector('input[name=tagsString]');
        if (input instanceof HTMLInputElement) {
            input.value = 'tag1 tag2, tag3';
            input.dispatchEvent(new Event('input'));
        }
        expect(root.querySelectorAll('ul>li')[0].textContent).toEqual("tag1");
        expect(root.querySelectorAll('ul>li')[1].textContent).toEqual("tag2");
        expect(root.querySelectorAll('ul>li')[2].textContent).toEqual("tag3");
    }));

});
