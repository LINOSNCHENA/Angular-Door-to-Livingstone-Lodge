import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicesUtilities/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ngOnInit(): void {
  }
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;

  constructor(
    private _ApiService: ApiService,
   // private _route: Router
  ) {}

  setUser(formData: any) {
    this.dataLoading = true;
    this.querySubscription = this._ApiService.setUser(formData).subscribe((res) => {
      if (res["errorCode"] > 0) {
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.savedChanges = true;
      } else {
        this.error = true;
        this.errorMessage = res["errorMessage"];
        this.dataLoading = false;
      }
    },
      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {
        this.dataLoading = false;
      });
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}

