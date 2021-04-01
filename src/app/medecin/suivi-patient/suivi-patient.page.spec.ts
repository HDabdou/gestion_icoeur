import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuiviPatientPage } from './suivi-patient.page';

describe('SuiviPatientPage', () => {
  let component: SuiviPatientPage;
  let fixture: ComponentFixture<SuiviPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviPatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuiviPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
