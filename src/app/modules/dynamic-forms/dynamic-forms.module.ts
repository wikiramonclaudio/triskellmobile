import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldBuilderComponent } from './components/field-builder/field-builder.component';
import { FileComponent } from './components/file/file.component';
import { RadioComponent } from './components/radio/radio.component';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { TextBoxComponent } from './components/textbox/textbox.component';
import { DropDownComponent } from './components/dropdown/dropdown.component';
import { CheckBoxComponent } from './components/checkbox/checkbox.component';

// components

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFormsComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    FileComponent,
    RadioComponent
  ],
  exports: [DynamicFormsComponent],
  providers: []
})
export class DynamicFormsModule { }
