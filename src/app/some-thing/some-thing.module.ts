import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SomeThingModule {

  public someOtherMethod() {
    return 'Whats up method';
  }


  public thisIsMyNewMethod(someWords) {
    console.log('Hello Method');
    return someWords;
  }
}
