import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-pig-latin-translator',
  templateUrl: './pig-latin-translator.component.html',
  styleUrls: ['./pig-latin-translator.component.scss']
})
export class PigLatinTranslatorComponent implements OnInit {
  public translatedText = '';
  public translationForm = new FormGroup({
    text: new FormControl('', Validators.required),
    useHyphens: new FormControl(true)
  });

  constructor() { }

  ngOnInit() {
    this.translationForm.valueChanges
      .debounceTime(200)
      .subscribe(({ text, useHyphens }) => this.translate(text, useHyphens));
  }

  private translate(text, useHyphens) {
    const prefix = useHyphens ? '-' : '';
    this.translatedText = text.split(' ')
      .map((string) => {
        return string
          .replace(/^([aeiou])(\w*)/igm, `$1$2${prefix}ay`)
          .replace(/^([qu]+|[^aeiou]+)(\w*)/igm, `$2${prefix}$1ay`);
      }).join(' ');
  }

}
