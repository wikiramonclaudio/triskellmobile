import { MainTitleService } from './../../services/main-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tk-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  files: any [];
  navType: any = '';
  constructor(
    private mainTitleService: MainTitleService
  ) { 
    this.navType = this.mainTitleService.getNavType();
  }

  ngOnInit(): void {
    this.getFiles();
    this.mainTitleService.setSubTitle('Files');
  }

  getFiles() {
    this.files = [
      {
        name: 'Attachment name 1',
        picture: 'assets/images/no-image.png',
        type: 'pdf',
        uploadedBy: '** Global Configurator',
        createdDate: new Date()
      },
      {
        name: 'Attachment name 2',
        picture: 'assets/images/batman.png',
        type: 'xls',
        uploadedBy: '** Global Configurator',
        createdDate: new Date()
      },
      {
        name: 'Attachment name 3',
        picture: 'assets/images/test.jpg',
        type: 'jpg',
        uploadedBy: '** Global Configurator',
        createdDate: new Date()
      }
    ]
  }

}
