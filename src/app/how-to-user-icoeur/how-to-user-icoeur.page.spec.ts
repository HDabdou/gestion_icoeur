import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowToUserIcoeurPage } from './how-to-user-icoeur.page';

describe('HowToUserIcoeurPage', () => {
  let component: HowToUserIcoeurPage;
  let fixture: ComponentFixture<HowToUserIcoeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToUserIcoeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToUserIcoeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
