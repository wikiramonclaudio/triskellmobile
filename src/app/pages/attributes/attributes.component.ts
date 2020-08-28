import { Component, OnInit } from '@angular/core';
import { MainTitleService } from '@src/app/services/main-title.service';

@Component({
  selector: 'app-tk-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  attrs: any[];
  constructor(
    private mainTitleService: MainTitleService
  ) { }

  ngOnInit(): void {
    this.getAttrs();
    this.mainTitleService.setSubTitle('Attributes');
  }

  getAttrs() {
    this.attrs = [
      {
        name: 'Definition',
        fields: [
          {
            type: 'text',
            name: 'firstName',
            label: 'First Name',
            value: '',
            required: true,
          },
          {
            type: 'text',
            name: 'lastName',
            label: 'Last Name',
            value: '',
            required: true,
          },
          {
            type: 'text',
            name: 'email',
            label: 'Email',
            value: '',
            required: true,
          },
          // {
          //   type: 'file',
          //   name: 'picture',
          //   label: 'Picture',
          //   required: true,
          //   onUpload: this.onUpload.bind(this)
          // },
          {
            type: 'dropdown',
            name: 'country',
            label: 'Country',
            value: 'in',
            required: true,
            options: [
              { key: 'in', label: 'India' },
              { key: 'us', label: 'USA' }
            ]
          },
          {
            type: 'radio',
            name: 'country',
            label: 'Country',
            value: 'in',
            required: true,
            options: [
              { key: 'm', label: 'Male' },
              { key: 'f', label: 'Female' }
            ]
          },
          {
            type: 'checkbox',
            name: 'hobby',
            label: 'Hobby',
            required: true,
            options: [
              { key: 'f', label: 'Fishing' },
              { key: 'c', label: 'Cooking' }
            ]
          }
        ]
      },
      {
        name: 'Justification',
        fields: [
          {
            type: 'text',
            name: 'firstName',
            label: 'First Name',
            value: '',
            required: true,
          },
          {
            type: 'text',
            name: 'lastName',
            label: 'Last Name',
            value: '',
            required: true,
          },
          {
            type: 'text',
            name: 'email',
            label: 'Email',
            value: '',
            required: true,
          },

          {
            type: 'file',
            name: 'picture',
            label: 'Picture',
            required: true,
            // onUpload: this.onUpload.bind(this)
          },
          {
            type: 'dropdown',
            name: 'country',
            label: 'Country',
            value: 'in',
            required: true,
            options: [
              { key: 'in', label: 'India' },
              { key: 'us', label: 'USA' }
            ]
          },
          {
            type: 'radio',
            name: 'country',
            label: 'Country',
            value: 'in',
            required: true,
            options: [
              { key: 'm', label: 'Male' },
              { key: 'f', label: 'Female' }
            ]
          },
          {
            type: 'checkbox',
            name: 'hobby',
            label: 'Hobby',
            required: true,
            options: [
              { key: 'f', label: 'Fishing' },
              { key: 'c', label: 'Cooking' }
            ]
          }
        ]
      },
      {
        name: 'Dates',
        fields: [
          {
            type: 'text',
            name: 'firstName',
            label: 'First Name',
            value: '',
            required: true,
          },
          {
            type: 'text',
            name: 'lastName',
            label: 'Last Name',
            value: '',
            required: true,
          },
          {
            type: 'text',
            name: 'email',
            label: 'Email',
            value: '',
            required: true,
          },

          // {
          //   type: 'file',
          //   name: 'picture',
          //   label: 'Picture',
          //   required: true,
          //   onUpload: this.onUpload.bind(this)
          // },
          {
            type: 'dropdown',
            name: 'country',
            label: 'Country',
            value: 'in',
            required: true,
            options: [
              { key: 'in', label: 'India' },
              { key: 'us', label: 'USA' }
            ]
          },
          {
            type: 'radio',
            name: 'country',
            label: 'Country',
            value: 'in',
            required: true,
            options: [
              { key: 'm', label: 'Male' },
              { key: 'f', label: 'Female' }
            ]
          },
          {
            type: 'checkbox',
            name: 'hobby',
            label: 'Hobby',
            required: true,
            options: [
              { key: 'f', label: 'Fishing' },
              { key: 'c', label: 'Cooking' }
            ]
          }
        ]
      }
    ];
  }

}
