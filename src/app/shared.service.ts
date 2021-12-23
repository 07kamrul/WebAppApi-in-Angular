import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:11402/api";
  readonly PhotosUrl = "http://localhost:11402/Photos";

  constructor(private http:HttpClient) { }

  getDepList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val:any){
    return this.http.post<any>(this.APIUrl+'/Department', val);
  }

  updateDepartment(val:any){
    return this.http.put<any>(this.APIUrl+'/Department', val);
  }

  deleteDepartment(val:any){
    return this.http.get<any>(this.APIUrl+'/Department', val);
  }


  getEmpList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post<any>(this.APIUrl+'/Employee', val);
  }

  updateEmployee(val:any){
    return this.http.put<any>(this.APIUrl+'/Employee', val);
  }

  deleteEmployee(val:any){
    return this.http.get<any>(this.APIUrl+'/Employee', val);
  }


  uploadPhoto(val:any){
    return this.http.post<any>(this.APIUrl+'/Employee/SaveFile', val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}
