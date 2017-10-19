import { Component, OnInit } from '@angular/core';
import {SomeThingModule} from './some-thing/some-thing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  myModule;
  textFromModule = '';

  constructor(myModule: SomeThingModule) {
    this.myModule = myModule;
  }

  ngOnInit(): void {
    this.textFromModule = this.myModule.thisIsMyNewMethod();
  }






}
