import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationTherapeutiquePage } from './education-therapeutique.page';

describe('EducationTherapeutiquePage', () => {
  let component: EducationTherapeutiquePage;
  let fixture: ComponentFixture<EducationTherapeutiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationTherapeutiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationTherapeutiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
