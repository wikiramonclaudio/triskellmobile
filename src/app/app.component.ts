import { Component, OnInit } from '@angular/core';
import { ColorPickerService } from  './services/color-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themeClass;
  constructor(private colorPicker: ColorPickerService) {
    this.themeClass = this.colorPicker.getColorClass();
  }
  ngOnInit(): void {}
}
