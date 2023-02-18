import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department/GetAllDepartment');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department/AddDepartment',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department/UpdateDepartment',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/DeleteDepartment/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee/GetAllEmployee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee/AddEmployee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee/UpdateEmployee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/DeleteEmployee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}
