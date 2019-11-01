import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})

export class AdminMenuComponent implements OnInit 
 {

 submitted = false;

 menuForm: FormGroup;

fileData: File = null;

url = "";

previewUrl:any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;

menutypes:any = ["Arabian", "Chinese", "Continental"];
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
    this.menuForm = this.fb.group({
     
      typeoffood: ['', [Validators.required]],
      foodname: ['', [Validators.required]],
      image: ['', [Validators.required]],
       quantity: ['', [Validators.required]],
		price: ['', [Validators.required]]
    })
  }

fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
}
 
preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null)
     {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result;
      
       
    }
}



	onSubmit(form: FormGroup) 
   {
        
    this.submitted = true;

    if (!this.menuForm.valid) {
      return false;
    } else {
    console.log("working..",this.fileData);
 console.log("type",this.menuForm.controls['typeoffood'].value); 
 

      this.apiService.createadminmenu(this.menuForm.value).subscribe(
        (res) => {

          console.log('Menus successfully added!')
 this.toastr.success('Title!', 'successfully added....!', {
  timeOut: 3000
});
          this.ngZone.run(() => this.router.navigateByUrl('/admin-menu'))
        }, (error) => {
          console.log(error);
        });

                  
    }
  }

}
