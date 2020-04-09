import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  data = {
    labels: ['January3', 'February', 'March', 'April3', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
      }
    ]
  };

  constructor() {
    // this.data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40]
    //     },
    //     {
    //       label: 'Second Dataset',
    //       data: [28, 48, 40, 19, 86, 27, 90]
    //     }
    //   ]
    // }
  }


  ngOnInit() {
  }
  update(event: Event) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [165, 59, 180, 81, 156, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [128, 48, 140, 19, 186, 217, 90]
        }
      ]
    }
  }

}
