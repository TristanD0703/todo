import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { TodoItem, todoItem } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItem, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  todos: todoItem[] = [{
        title: 'test',
        id: 0,
        description: 'none',
        dueMin: 0,
        dueHour: 0,
        completed: false, 
    }
  ];

  handleComplete(itemId: number) {
    console.log(itemId);
    this.todos[itemId].completed = true;
  }

  addTodo() {
    this.todos.push({
        title: 'test',
        id: this.todos.length,
        description: 'none',
        dueMin: 0,
        dueHour: 0,
        completed: false
    })
  }
}