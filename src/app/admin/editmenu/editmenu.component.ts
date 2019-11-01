import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Menu } from '../../service/adminmenu.model';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent implements OnInit {

submitted = false;

menuForm: FormGroup;

fileData: File = null;

previewUrl:any = null;

menutypes:any = ["Arabian", "Chinese", "Continental"];

url = "";

id = "";

fileUploadProgress: string = null;
uploadedFilePath: string = null;


  constructor(
 private actRoute: ActivatedRoute,
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


let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.id = id;
    window.alert(id);
  }

mainForm() 
{
    this.menuForm = this.fb.group({
      typeoffood: ['', [Validators.required]],
      foodname: ['', [Validators.required]],
      image: ['', [Validators.required]],
       quantity: ['', [Validators.required]],
    price: ['', [Validators.required]]
    })
  }

 getEmployee(id) {
    this.apiService.getmenuid(id).subscribe(data => {
      this.menuForm.setValue({
      typeoffood: data['typeoffood'],
        foodname: data['foodname'],
        quantity: data['quantity'],
        price: data['price'],
        image:""
      });
    });
  }

onSubmit(form: FormGroup) 
   {
        
    this.submitted = true;

    if (!this.menuForm.valid) {
      return false;
    } else {
    
 

      this.apiService.updatemenu(this.id, this.menuForm.value).subscribe(
        (res) => {

          console.log('Menus successfully added!')
 this.toastr.success('Title!', 'successfully updated....!', {
  timeOut: 3000
});
          this.ngZone.run(() => this.router.navigateByUrl('/image'))
        }, (error) => {
          console.log(error);
        });

                  
    }
  }


}
