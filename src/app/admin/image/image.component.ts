import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Menu } from '../../service/adminmenu.model';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
    
submitted = false;

ok = false;

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

    this.refreshEmployeeList();
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


refreshEmployeeList() {
    this.apiService.Getmenu().subscribe((res) => {
      this.apiService.menus = res as Menu[];
    });
  }


 

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.apiService.deletemenu(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.toastr.success('Title!', 'successfully deleted....!', {
  timeOut: 3000
});
      });
    }
  }


}
