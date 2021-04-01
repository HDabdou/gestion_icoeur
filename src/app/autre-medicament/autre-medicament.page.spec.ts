import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutreMedicamentPage } from './autre-medicament.page';

describe('AutreMedicamentPage', () => {
  let component: AutreMedicamentPage;
  let fixture: ComponentFixture<AutreMedicamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutreMedicamentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutreMedicamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
