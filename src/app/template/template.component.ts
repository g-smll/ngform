import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  records = {};

  constructor(private recordsService: RecordsService, private http: HttpClient) { }

  ngOnInit() {
  }

  //RxJS demonstration
  RSExample(){
    //定义数组
    const source = from([{name: 'Joe', age: 20},{name: 'Frank', age: 18}]);

    //提取每个 person 的 name
    const example = source.pipe(map(({ name }) => name));

    //输出每个人的名字
    example.subscribe( val => console.log(val));

  }

  //Do request to login interface
  login(){
    this.http
      .post('http://localhost:8080/api/authenticate', {'username': 'admin', 'password': 'admin'})
      .subscribe(
        data =>{
          console.log(data)
        },
        err =>{
          console.log(err);
        });
  }

  createUser(customer: any) {
    console.log(customer);

    this.records = this.recordsService.getData();
    console.log('records =', this.records);

    this.login();

    this.RSExample();
  }
}
