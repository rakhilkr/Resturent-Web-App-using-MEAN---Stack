import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


submitted = false;
username='';
  password='';


  constructor( private toastr: ToastrService,public fb: FormBuilder,    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) 

  { 

 this.mainForm();

  }

  ngOnInit() 
  {
  }

mainForm() 
{
    this.signinForm = this.fb.group({
        username: ['', [Validators.required]],
         password: ['', [Validators.required]],
    })
  }


onSubmit(form: FormGroup) 
   {

this.username = this.signinForm.controls['username'].value;
this.password = this.signinForm.controls['password'].value;


    if (!this.signinForm.valid)
    {
      return false;
    } 
    else if (this.username=="admin" && this.password=="admin")
    {
    	 this.submitted = true;


  console.log("insert submit method");

    	this.ngZone.run(() => this.router.navigateByUrl('/admin-home'))
    }

    else {

     this.submitted = true;

 console.log("insert submit method");
      this.apiService.getvaliduser(this.username,this.password).subscribe(
        (res: any) => {
          console.log('login successfull')
 this.toastr.success('Title!', 'successfully login....!', {
  timeOut: 3000
});
          this.ngZone.run(() => this.router.navigateByUrl('/user'))
        }, (error) => {
         this.toastr.error('Error!', 'You are not valid....!', {
  timeOut: 3000
});
          console.log(error);
        });
    }
 

			   }
    }

