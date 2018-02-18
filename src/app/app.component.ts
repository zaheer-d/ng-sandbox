import { Component, OnInit } from '@angular/core';
import { SomeThingModule, TestModel } from './some-thing/some-thing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    myModule;
    textFromModule = '';
    messageText = '';




    

    constructor(myModule: SomeThingModule) {
        this.myModule = myModule;
    }

    ngOnInit(): void {
        this.textFromModule = this.myModule.thisIsMyNewMethod(
            'words of wisdom'
        );

        this.myModule.myTestObservable.subscribe((data: TestModel) => {
            this.messageText = data.name;
        });
    }
}
