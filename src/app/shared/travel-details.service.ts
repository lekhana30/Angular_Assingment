import { Injectable } from '@angular/core';
import { TravelDetails } from './travel-details.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TravelDetailsService {
  constructor(private http:HttpClient) {}
 formData: TravelDetails= new TravelDetails();
 readonly baseURL ='https://localhost:44391/api/TravelDetails'
 list :TravelDetails[];
 
 postTravelDetail() {
  return this.http.post(this.baseURL, this.formData);
}
putTravelDetail() {
  return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
}
deleteTravelDetail(id:number){
  return this.http.delete(`${this.baseURL}/${id}`);
}
 refreshlist(){
   this.http.get(this.baseURL)
   .toPromise()
   .then(res=>this.list=res as TravelDetails[]);
 }

}
