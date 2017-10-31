import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PigLatinTranslatorComponent } from './pig-latin-translator.component';

describe('PigLatinTranslatorComponent', () => {
  let component: PigLatinTranslatorComponent;
  let fixture: ComponentFixture<PigLatinTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigLatinTranslatorComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigLatinTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call translate on form changes', () => {
    const testValue = {
      text: 'test text',
      useHyphens: false,
    };
    spyOn(component, 'translate');

    component.translationForm.setValue(testValue);
    expect(component.translate).not.toHaveBeenCalled();
    jasmine.clock().tick(199);
    jasmine.clock().tick(200);
    expect(component.translate).toHaveBeenCalledWith(testValue.text, testValue.useHyphens);
  });

  describe('translate', () => {
    const testStrings = [
      `beast. dough; happy! question star, three`,
      `multi
line`,
      `ddoouubbllee aabbcc`
    ];

    it('should translate without hyphens' , () => {
      const expectedStrings = [
        `eastbay. oughday; appyhay! estionquay arstay, eethray`,
        `ultimay
inelay`,
        `oouubblleedday aabbccay`
      ];

      expect(testStrings.every((string, i) => component.translate(string, false) === expectedStrings[i])).toBeTruthy();
    });

    it('should translate with hyphens' , () => {
      const expectedStrings = [
        `east-bay. ough-day; appy-hay! estion-quay ar-stay, ee-thray`,
        `ulti-may
ine-lay`,
        `oouubbllee-dday aabbcc-ay`
      ];

      expect(testStrings.every((string, i) => component.translate(string, true) === expectedStrings[i])).toBeTruthy();
    });
  });
});
