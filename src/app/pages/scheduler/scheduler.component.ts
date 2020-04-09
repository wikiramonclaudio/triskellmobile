import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import { mobiscroll, MbscEventcalendarOptions, MbscRangeOptions, MbscFormOptions, MbscEventcalendar, MbscPopupOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  events: any;

  eventSettings: MbscEventcalendarOptions = {
    theme: 'ios',
    themeVariant: 'light',
    display: 'inline',
    calendarHeight: 513,
    view: {
      calendar: {
        labels: true,
        popover: true
      }
    }
  };

  // let preventSet = false;
  // let id = 5;

  now:any = new Date();
  btn = '<button class="mbsc-btn mbsc-btn-outline mbsc-btn-danger md-delete-btn mbsc-ios">Delete</button>';
  allDay = false;
  eventDate;
  // eventDate = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
  isFree = 'busy';
  eventText = '';
  eventDesc = '';
  control: string [];
  wheels: string;

  // date: any = new jqx.date(2020, 11, 23);

  // source: any =
  //   {
  //     dataType: 'json',
  //     dataFields: [
  //       { name: 'id', type: 'string' },
  //       { name: 'status', type: 'string' },
  //       { name: 'about', type: 'string' },
  //       { name: 'address', type: 'string' },
  //       { name: 'company', type: 'string' },
  //       { name: 'name', type: 'string' },
  //       { name: 'style', type: 'string' },
  //       { name: 'calendar', type: 'string' },
  //       { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
  //       { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' }
  //     ],
  //     id: 'id',
  //     localData: this.generateAppointments()
  //     // url: './../../../sampledata/appointments.txt'
  //   };
  // dataAdapter: any = new jqx.dataAdapter(this.source);
  // resources: any =
  //   {
  //     colorScheme: 'scheme05',
  //     dataField: 'calendar',
  //     source: new jqx.dataAdapter(this.source)
  //   };
  // appointmentDataFields: any =
  //   {
  //     from: 'start',
  //     to: 'end',
  //     id: 'id',
  //     description: 'about',
  //     location: 'address',
  //     subject: 'name',
  //     style: 'style',
  //     status: 'status'
  //   };
  // views: any[] =
  //   [
  //     'dayView',
  //     'weekView',
  //     'monthView',
  //     'agendaView'
  //   ];

  constructor(
    private httpService: HttpClient
  ) {}

  ngOnInit() {
    this.httpService.jsonp('https://trial.mobiscroll.com/events/', 'callback').subscribe((resp: any) => {
      this.events = resp;
    });
  }
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

  generateAppointments() {
    const appointments = new Array();
    const appointment1 = {
      id: 'id1',
      description: 'George brings projector for presentations.',
      location: '',
      subject: 'Quarterly Project Review Meeting',
      calendar: 'Room 1',
      start: new Date(2020, 10, 23, 9, 0, 0),
      end: new Date(2020, 10, 23, 16, 0, 0)
    };
    const appointment2 = {
      id: 'id2',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 2',
      start: new Date(2020, 10, 24, 10, 0, 0),
      end: new Date(2020, 10, 24, 15, 0, 0)
    };
    const appointment3 = {
      id: 'id3',
      description: '',
      location: '',
      subject: 'Course Social Media',
      calendar: 'Room 3',
      start: new Date(2020, 10, 21, 11, 0, 0),
      end: new Date(2020, 10, 21, 13, 0, 0)
    };
    const appointment4 = {
      id: 'id4',
      description: '',
      location: '',
      subject: 'New Projects Planning',
      calendar: 'Room 2',
      start: new Date(2020, 10, 23, 16, 0, 0),
      end: new Date(2020, 10, 23, 18, 0, 0)
    };
    const appointment5 = {
      id: 'id5',
      description: '',
      location: '',
      subject: 'Interview with James',
      calendar: 'Room 1',
      start: new Date(2020, 10, 25, 15, 0, 0),
      end: new Date(2020, 10, 25, 17, 0, 0)
    };
    const appointment6 = {
      id: 'id6',
      description: '',
      location: '',
      subject: 'Interview with Nancy',
      calendar: 'Room 4',
      start: new Date(2020, 10, 26, 14, 0, 0),
      end: new Date(2020, 10, 26, 16, 0, 0)
    };
    appointments.push(appointment1);
    appointments.push(appointment2);
    appointments.push(appointment3);
    appointments.push(appointment4);
    appointments.push(appointment5);
    appointments.push(appointment6);
    return appointments;
  }

}
