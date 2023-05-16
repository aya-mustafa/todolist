import { Component } from '@angular/core';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.css']
})
export class EnterTaskComponent {

  value:string = "";
  tasks:any[] = [];
  addTask()
  {
    let  task =
    {
      taskName : this.value,
    } 
    this.tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
    this.reset();
  }
  delete(i:number)
  {
    this.tasks.splice(i,1);
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  finished(e:any)
  {
    e.target.classList.add('test');
  }
  reset()
  {
    this.value="";
  }
}

