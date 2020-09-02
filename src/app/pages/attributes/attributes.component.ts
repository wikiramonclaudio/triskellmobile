import { Component, OnInit } from '@angular/core';
import { MainTitleService } from '@src/app/services/main-title.service';

@Component({
  selector: 'app-tk-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  navType: any = '';
  attrs: any[];
  constructor(
    private mainTitleService: MainTitleService
  ) {
    this.navType = this.mainTitleService.getNavType();
  }

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
            label: 'Name',
            value: '',
            required: true,
          },
          // {
          //   type: 'text',
          //   name: 'lastName',
          //   label: 'Last Name',
          //   value: '',
          //   required: true,
          // },
          // {
          //   type: 'text',
          //   name: 'email',
          //   label: 'Email',
          //   value: '',
          //   required: true,
          // },
          // {
          //   type: 'file',
          //   name: 'picture',
          //   label: 'Picture',
          //   required: true,
          //   onUpload: this.onUpload.bind(this)
          // },
          {
            type: 'dropdown',
            name: 'agile',
            label: 'Agile',
            value: 'in',
            required: true,
            options: [
              { key: 'in', label: 'Yes' },
              { key: 'us', label: 'no' }
            ]
          },
          {
            type: 'dropdown',
            name: 'platform',
            label: 'Platform',
            value: 'in',
            required: true,
            options: [
              { key: 'in', label: 'Web' },
              { key: 'us', label: 'Client-Server' },
              { key: 'el', label: 'Office Tools' }
            ]
          },
          {
            type: 'dropdown',
            name: 'region',
            label: 'Region',
            value: 'in',
            required: true,
            options: [
              { key: 'in', label: 'Europe' },
              { key: 'us', label: 'USA' },
              { key: 'el', label: 'Japan' },
              { key: 'ut', label: 'Others' }
            ]
          },
          // {
          //   type: 'radio',
          //   name: 'country',
          //   label: 'Country',
          //   value: 'in',
          //   required: true,
          //   options: [
          //     { key: 'm', label: 'Male' },
          //     { key: 'f', label: 'Female' }
          //   ]
          // },
          {
            type: 'checkbox',
            name: 'published',
            label: 'Published?',
            required: true,
            options: [
              { key: 'f', label: 'Published' },
              // { key: 'c', label: 'Cooking' }
            ]
          }
        ]
      },
      {
        name: 'Justification',
        fields: [
          // {
          //   type: 'text',
          //   name: 'firstName',
          //   label: 'First Name',
          //   value: '',
          //   required: true,
          // },
          // {
          //   type: 'text',
          //   name: 'lastName',
          //   label: 'Last Name',
          //   value: '',
          //   required: true,
          // },
          // {
          //   type: 'text',
          //   name: 'email',
          //   label: 'Email',
          //   value: '',
          //   required: true,
          // },

          // {
          //   type: 'file',
          //   name: 'picture',
          //   label: 'Picture',
          //   required: true,
          //   onUpload: this.onUpload.bind(this)
          // },
          {
            type: 'dropdown',
            name: 'activity',
            label: 'Activity type',
            value: 'in',
            required: true,
            options: [
              { key: 'in', label: 'Corporate projects' },
              { key: 'us', label: 'Bus improvements' },
              { key: 'el', label: 'It improvements' },
              { key: 'ut', label: 'Others' }
            ]
          },
          {
            type: 'dropdown',
            name: 'impact',
            label: 'Strategic impact',
            value: 'in',
            required: true,
            options: [
              { key: 'in', label: 'High' },
              { key: 'us', label: 'Medium' },
              { key: 'lo', label: 'Low' }
            ]
          },
          // {
          //   type: 'radio',
          //   name: 'country',
          //   label: 'Country',
          //   value: 'in',
          //   required: true,
          //   options: [
          //     { key: 'm', label: 'Male' },
          //     { key: 'f', label: 'Female' }
          //   ]
          // },
          // {
          //   type: 'checkbox',
          //   name: 'hobby',
          //   label: 'Hobby',
          //   required: true,
          //   options: [
          //     { key: 'f', label: 'Fishing' },
          //     { key: 'c', label: 'Cooking' }
          //   ]
          // }
        ]
      },
      {
        name: 'Project contact',
        fields: [
          {
            type: 'text',
            name: 'firstName',
            label: 'Name',
            value: '',
            required: true,
          },
          {
            type: 'text',
            name: 'lastName',
            label: 'Desc',
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
          // {
          //   type: 'dropdown',
          //   name: 'country',
          //   label: 'Country',
          //   value: 'in',
          //   required: true,
          //   options: [
          //     { key: 'in', label: 'India' },
          //     { key: 'us', label: 'USA' }
          //   ]
          // },
        ]
      }
    ];
  }

}
