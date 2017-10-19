import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SomeThingModule } from './some-thing/some-thing.module';

describe('AppComponent', () => {

  let somethingModuleMock;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: SomeThingModule,
                  useValue: class {
                    thisIsMyNewMethod = jasmine.createSpy('thisIsMyNewMethod');
                  }
      }],
      declarations: [
        AppComponent
      ],
    }).compileComponents();



  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  describe('SomethingModule works', () => {
    beforeEach(() => {
      somethingModuleMock = TestBed.get(SomeThingModule);
    });

    it('should return whats up module', () => {
      const spyMock = spyOn(somethingModuleMock, 'thisIsMyNewMethod').and.callFake(() => {
        return 'whats up modulewww';
      });
      expect(spyMock).toContain('modulewww');
  });
  });
});
