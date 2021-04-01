import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstLogPage } from './first-log.page';

describe('FirstLogPage', () => {
  let component: FirstLogPage;
  let fixture: ComponentFixture<FirstLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
