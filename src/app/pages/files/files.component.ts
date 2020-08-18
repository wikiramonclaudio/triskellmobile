import { MainTitleService } from './../../services/main-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tk-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  files: any [];
  constructor(
    private mainTitleService: MainTitleService
  ) { }

  ngOnInit(): void {
    this.getFiles();
    this.mainTitleService.setTitle(this.mainTitleService.getTitle('i') + ' (Files)');
  }

  getFiles() {
    this.files = [
      {
        name: 'Attachment name 1',
        type: 'pdf',
        uploadedBy: '** Global Configurator',
        createdDate: new Date()
      },
      {
        name: 'Attachment name 2',
        type: 'xls',
        uploadedBy: '** Global Configurator',
        createdDate: new Date()
      },
      {
        name: 'Attachment name 3',
        type: 'jpg',
        uploadedBy: '** Global Configurator',
        createdDate: new Date()
      }
    ]
  }

}
