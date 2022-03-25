import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TravelDetails } from '../shared/travel-details.model';
import { TravelDetailsService } from '../shared/travel-details.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styles: [
  ]
})
export class TravelDetailsComponent implements OnInit {

  constructor(public service:TravelDetailsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
populateForm(selectedRecord:TravelDetails){
  this.service.formData= Object.assign({},selectedRecord);
}
onDelete(id:number){
  if(confirm('Are you sure to delete this record?'))
  {
    this.service.deleteTravelDetail(id)
  .subscribe(
    res=>{
      this.service.refreshlist();
      this.toastr.error('Deleted Successfully','Travel Detail Register');
      
    },
    err=>{console.log(err)}
  )
  }
}
}
