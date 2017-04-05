/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture, ComponentFixtureAutoDetect} from '@angular/core/testing';
import {DebugElement} from '@angular/core';

import {NoteDetailComponent} from './note-detail.component';

describe('NoteDetailComponent', () => {
    let component: NoteDetailComponent;
    let fixture: ComponentFixture<NoteDetailComponent>;
    let root: HTMLElement;
    let debug: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NoteDetailComponent
            ],
            imports: [
            ],
            providers: [
                // fixture.detectChanges() is automatic
                {provide: ComponentFixtureAutoDetect, useValue: true}
            ]
        });
        fixture = TestBed.createComponent(NoteDetailComponent);
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

    it('should render title of note in a h3 tag', async(() => {
        expect(root.querySelector('h3').textContent).toEqual("");
        component.note.title = "New title";
        fixture.detectChanges()
        expect(root.querySelector('h3').textContent).toContain(component.note.title);
    }));

    it('should render body of note in div.note-body', async(() => {
        expect(root.querySelector('div.note-body').textContent).toEqual("");
        component.note.body = "New body";
        fixture.detectChanges()
        expect(root.querySelector('div.note-body').textContent).toContain(component.note.body);
    }));

});
