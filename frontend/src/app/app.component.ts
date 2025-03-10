import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-python';
  form: FormGroup = new FormGroup({});
  tasks: Task[] = [];

  constructor(private dataService: DataService) {} 
  
  ngOnInit(): void {
    this.form = new FormGroup({
      item: new FormControl('', Validators.required),
    });
    this.dataService.getData().subscribe(data => {
      console.log('data', data);
      this.tasks = data.data;
    });
  }

  onSubmit(event: Event ) {
    event.preventDefault();
    if (!this.tasks.find(task => task.id === this.form.value.item)) {
      this.tasks.push({title: this.form.value.item, completed: false, id: this.form.value.item});
    }
  }

  deleteTask(item: Task) {
    this.tasks = this.tasks.filter(task => task.id !== item.id);
  }

  deleteAllTasks() {
    this.tasks = [];
  }

  saveTasks() {
    console.log(this.tasks)
    this.dataService.writeData(this.tasks).subscribe(data => {
      console.log('data', data);
    });
  }
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
}
