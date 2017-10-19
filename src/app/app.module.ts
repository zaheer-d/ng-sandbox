import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SomeThingModule} from './some-thing/some-thing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SomeThingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
