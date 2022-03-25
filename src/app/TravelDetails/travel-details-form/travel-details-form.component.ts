import { Component, OnInit } from '@angular/core';
import { TravelDetailsService } from 'src/app/shared/travel-details.service';
import { TravelDetails } from 'src/app/shared/travel-details.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-travel-details-form',
  templateUrl: './travel-details-form.component.html',
  styles: [
  ]
})
export class TravelDetailsFormComponent implements OnInit {

  constructor(public service:TravelDetailsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if(this.service.formData.id==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postTravelDetail().subscribe(
      res=>{
       this.resetForm(form);
       this.service.refreshlist();
       this.toastr.success('Submitted Successfully','Travel Detail Register')
      },
      err=> {console.log(err); }
    );
  }
  
  updateRecord(form:NgForm){
      this.service.putTravelDetail().subscribe(
        res=>{
         this.resetForm(form);
         this.service.refreshlist();
         this.toastr.info('updated Successfully','Travel Detail Register')
        },
        err=> {console.log(err);}
      );

  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new TravelDetails();
  }

}
