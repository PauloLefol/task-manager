import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [AppModule, ReactiveFormsModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-python';
  form: FormGroup = new FormGroup({});
  tasks: Task[] = [];
  
  ngOnInit(): void {
    this.form = new FormGroup({
      item: new FormControl('', Validators.required),
    });
  }

  onSubmit(event: Event ) {
    event.preventDefault();
    console.log('Form submitted:', this.form.value.item);
    this.tasks.push(this.form.value.item);
  }

  deleteTask(item: Task) {
    this.tasks = this.tasks.filter(task => task.title !== item.title);
  }

  deleteAllTasks() {
    this.tasks = [];
  }

  saveTasks() {
    console.log(this.tasks);
  }
}

interface Task {
  title: string;
  completed: boolean;
}
