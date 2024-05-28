import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css',
    standalone: true,
    outputs: ['completeItem']
})
export class TodoItem {
    @Input() todoData: todoItem = {
        title: 'none',
        description: 'none',
        id: -1,
        dueMin: 0,
        dueHour: 0,
        completed: true
    }

    @Output() completeItem = new EventEmitter<number>(); 

    markComplete() {
        console.log(this.todoData.id);
        
        this.completeItem.emit(this.todoData.id);
    }
}

export interface todoItem {
  title: string,
  id: number,
  description: string,
  dueMin: number,
  dueHour: number
  completed: boolean
}