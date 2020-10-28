import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Booking } from '../../datasources/models/bookings';
import { BkgserviceService } from '../../datasources/serviceApi/bkgservice.service';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  title: string;
  rows: Booking[] = [];

  p: number = 1;
  limit: number = 2;
  total: number;
  finalresults: Object;

  msgs : any;
  deletemsg : any;
  btnsubmit = true;
  btnupdate = false;

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    town: new FormControl(''),
    hotel: new FormControl(''),
    is_active: new FormControl(''),
    createdat: new FormControl('')
  });

  constructor( private service: BkgserviceService) { }

  ngOnInit(){
    this.service.getData().subscribe(data => { 
      this.finalresults = data ;
    });
  }

  onsubmit()
  {
    this.service.insertData(this.profileForm.value).subscribe(data =>{
      this.msgs = data;
      this.ngOnInit();
    });
  }
  
  deletefnc(id)
  {
      this.service.deleteData(id).subscribe(() => { 
      this.deletemsg = "1 Record Deleted" ;
      this.ngOnInit();
    });
  }

  editData(id)
  {
      this.service.editValue(id).subscribe(data => { 
      this.profileForm.patchValue(data[0]);
      this.ngOnInit();
      this.btnsubmit = false ;
      this.btnupdate = true;
    });
  }
  
  onUpdate(id)
  {
    this.service.updateData(id,this.profileForm.value ).subscribe(data =>{
      this.msgs = data;
      this.ngOnInit();
      this.profileForm.reset();
        });
  }


}
