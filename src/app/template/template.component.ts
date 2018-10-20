import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  records = {};

  constructor(private recordsService: RecordsService) { }

  ngOnInit() {
  }


  createUser(customer: any) {
    console.log(customer);

    this.records = this.recordsService.getData();
    console.log('records =', this.records)
  }
}
