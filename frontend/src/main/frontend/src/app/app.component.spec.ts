/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture, ComponentFixtureAutoDetect} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NoteComponent} from './note/note.component';
import {NoteFormComponent} from './note/note-form/note-form.component';
import {NoteDetailComponent} from './note/note-detail/note-detail.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let root: HTMLElement;
    let debug: DebugElement;

    // test double
    /*let userServiceStub = {
        isLoggedIn: true,
        user: {name: 'Test User'}
    };*/

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
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
                // test double
                //,{provide: UserService, useValue: userServiceStub }
            ]
        });
        //TestBed.compileComponents(); // not necessary, code is compiled on save
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        root = fixture.nativeElement;
        debug = fixture.debugElement;

        // UserService actually injected into the component
        //userService = fixture.debugElement.injector.get(UserService);
        // UserService from the root injector
        //userService = TestBed.get(UserService);
    }));

    it('should create the component', async(() => {
        expect(component).toBeTruthy();
    }));

    it(`should have as title 'Devnote app works!'`, async(() => {
        expect(component.title).toEqual('Devnote app works!');
    }));

    it('should render title in a h1 tag', async(() => {
        expect(root.querySelector('h1').textContent).toContain(component.title);
        expect(debug.query(By.css('h1')).nativeElement.textContent).toContain(component.title);
    }));
});
