import { Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

submitted = false;

  signupForm: FormGroup;


  constructor(
  private toastr: ToastrService,
   public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) 

  {
      this.mainForm();
  }


 ngOnInit() 
 {

  }

mainForm() 
{
    this.signupForm = this.fb.group({
     
      name: ['', [Validators.required]],
       email: ['', [Validators.required]],
        username: ['', [Validators.required]],
         password: ['', [Validators.required]]

    })
  }



  onSubmit(form: FormGroup) 
   {
        
    this.submitted = true;
    if (!this.signupForm.valid) {
      return false;
    } else {
      this.apiService.createuser(this.signupForm.value).subscribe(
        (res) => {
          console.log('User successfully created!')
 this.toastr.success('Title!', 'successfully registred....!', {
  timeOut: 3000
});
          this.ngZone.run(() => this.router.navigateByUrl('/signin'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
