import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TpInrPage } from './tp-inr.page';

describe('TpInrPage', () => {
  let component: TpInrPage;
  let fixture: ComponentFixture<TpInrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpInrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TpInrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
