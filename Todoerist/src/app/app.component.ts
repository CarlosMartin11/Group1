import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalExam';

  readonly APIUrl="http://localhost:5038/api/todo/";
  

  constructor(private http:HttpClient){
  }
  
  todo:any=[];

  refreshTodo(){
    this.http.get(this.APIUrl+'GetTodo').subscribe(data=>{
      this.todo=data;
    })
  }
  ngOnInit(){
    this.refreshTodo();
  }

  addTodo(){
    var newTask=(<HTMLInputElement>document.getElementById("newTodo")).value;
    var newDescription=(<HTMLInputElement>document.getElementById("newDescription")).value;
    var newDue=(<HTMLInputElement>document.getElementById("newDue")).value;
    var formData=new FormData();
    formData.append("task", newTask);
    formData.append("description", newDescription);
    formData.append("due", newDue.toString());
    this.http.post(this.APIUrl+'AddTodo', formData).subscribe(data=>{
      alert(data);
      this.refreshTodo()
    })
  }
  
  deleteTodo(id:any){
      this.http.delete(this.APIUrl+'DeleteTodo?id='+id).subscribe(data=>{
      alert(data);
      this.refreshTodo()
    })
  }
}


