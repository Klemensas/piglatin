import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigLatinTranslatorComponent } from './pig-latin-translator.component';

describe('PigLatinTranslatorComponent', () => {
  let component: PigLatinTranslatorComponent;
  let fixture: ComponentFixture<PigLatinTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigLatinTranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigLatinTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call translate on form changes', () => {

  })
});
