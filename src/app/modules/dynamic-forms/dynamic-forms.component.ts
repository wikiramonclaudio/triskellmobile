import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './dynamic-forms.component.html'
  // styleUrls: ['./attributes.component.scss']
  // template: `
  //   <form (ngSubmit)="onSubmit.emit(this.form.value)" [formGroup]="form" class="form-horizontal mt-3 tk-dynamic-form" style="max-width:90%; margin: 14px auto;">
  //     <div *ngFor="let field of fields">
  //         <field-builder [field]="field" [form]="form"></field-builder>
  //     </div>
  //     <div class="form-row"></div>
  //     <div class="form-group row">
  //       <div class="col-md-3"></div>
  //       <div class="col-md-9">
  //         <!-- <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Save</button> -->
  //         <button mat-raised-button color="primary" [disabled]="!form.valid"></button>
  //         <button mat-raised-button color="primary" type="submit" class="button" [disabled]="!form.valid">
  //           Save
  //         </button>
  //       </div>
  //     </div>
  //   </form>
  // `,
})
export class DynamicFormsComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    const fieldsCtrls = {};
    for (const f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
      } else {
        const opts = {};
        for (const opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts);
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }
}
