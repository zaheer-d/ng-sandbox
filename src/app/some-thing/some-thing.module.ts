import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SomeThingModule {

  public static someOtherMethod() {
    return 'Whats up method';
  }

  public static thisIsMyNewMethod(someWords) {
    console.log('Hello Method');
    return someWords;
  }
}
