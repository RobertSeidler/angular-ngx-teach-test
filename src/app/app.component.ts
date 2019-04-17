    
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html'
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'card',
      fieldGroup: [
        {
          template: '<h4>Aufgabe 1:</h4>Welche Antworten sind richtig?'
        },
        {
          key: 'a1',
          type: 'multicheckbox',
          templateOptions: {
            label: '',
            description: 'Es kann 0-4 richtige Antworten geben.',
            options: [
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
              { value: 4, label: 'Option 4' },
            ],
          },
        },
      ]
    },
    {
      fieldGroupClassName: 'card',
      fieldGroup: [
        {
          template: '<h4>Aufgabe 2:</h4>Welche Antworten sind richtig?'
        },
        {
          key: 'a2',
          type: 'radio',
          templateOptions: {
            label: '',
            description: 'Es ist genau eine Antwort richtig.',
            options: [
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
              { value: 4, label: 'Option 4' },
            ],
          },
        },
      ]
    }
  ];

  submit(model: any){
    console.log(model);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */