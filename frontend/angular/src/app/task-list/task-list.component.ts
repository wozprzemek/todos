import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task-list',
    imports: [TaskComponent, CommonModule],
    standalone: true,
    templateUrl: './task-list.component.html',
})
export class TaskListComponent {
    @Input() tasks: Task[] = [];
    @Output() requestSuccess: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    handleRequestSuccess(): void {
        this.requestSuccess.emit();
    }
}
