import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccidentAvkPage } from './accident-avk.page';

describe('AccidentAvkPage', () => {
  let component: AccidentAvkPage;
  let fixture: ComponentFixture<AccidentAvkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentAvkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccidentAvkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
