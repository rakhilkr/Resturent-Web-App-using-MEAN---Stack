import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Menu } from '../../service/adminmenu.model';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.css']
})
export class ViewmenuComponent implements OnInit {

 menuForm: FormGroup;
menutypes:any = ["Arabian", "Chinese", "Continental"];
submitted = false;

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
      
    })
  }

refreshEmployeeList() {
    this.apiService.Getmenu().subscribe((res) => {
      this.apiService.menus = res as Menu[];
    });
  }

onSubmit(form: FormGroup) 
   {
       this.submitted = true;

    if (!this.menuForm.valid) {
      return false;
    }
     else 
    {
    console.log("working..",this.menuForm.get('typeoffood').value);
  } 
  }
}
