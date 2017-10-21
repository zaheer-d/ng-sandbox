import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class TestModel {
  id: string;
  name: string;
}

export class SomeThingModule implements OnInit {
  public myTestObservable: Observable<any>;

  ngOnInit(): void {
  }

  someOtherMethod() {
    return 'Whats up method';
  }

  thisIsMyNewMethod(someWords) {
    this.myTestObservable = Observable.create((o: Observer<TestModel>) => {
      const dataPackage = new TestModel();
      dataPackage.id = '1';
      dataPackage.name = 'hello';
      o.next(dataPackage);
    });
    console.log('Hello Method');
    return someWords;
  }
}
