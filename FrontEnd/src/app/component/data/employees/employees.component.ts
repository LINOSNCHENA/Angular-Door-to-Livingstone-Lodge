import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../../datasources/models/employess';
import { EmpserviceService } from '../../datasources/serviceApi/empservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title: string;
  rows: Employee[] = [];

  p: number = 1;
  limit: number = 2;
  total: number;
  finalresults: Object;

  msgs: any;
  deletemsg: any;
  btnsubmit = true;
  btnupdate = false;

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    office: new FormControl(''),
    createdat: new FormControl('')
  });

  constructor(private service: EmpserviceService) { }

  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.finalresults = data;
    });
  }

  onsubmit() {
    this.service.insertData(this.profileForm.value).subscribe(data => {
      this.msgs = data;
      this.ngOnInit();
    });
  }

  deletefnc(id: string) {
    this.service.deleteData(id).subscribe(() => {
      this.deletemsg = "1 Record Deleted";
      this.ngOnInit();
    });
  }

  editData(id: string) {
    this.service.editValue(id).subscribe(data => {
      this.profileForm.patchValue(data[0]);
      this.ngOnInit();
      this.btnsubmit = false;
      this.btnupdate = true;
    });
  }

  onUpdate(id: string) {
    this.service.updateData(id, this.profileForm.value).subscribe(data => {
      this.msgs = data;
      this.ngOnInit();
      this.profileForm.reset();
    });
  }
}
