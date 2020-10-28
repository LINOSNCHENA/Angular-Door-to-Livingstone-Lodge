import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WrkserviceService } from '../../datasources/serviceApi/wrkservice.service';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  title: string;
  rows: Worker[] = [];

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
    department: new FormControl(''),
    salary: new FormControl(''),
    is_active: new FormControl(''),
    createdat: new FormControl('')

  });

  constructor( private service: WrkserviceService) { }

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
