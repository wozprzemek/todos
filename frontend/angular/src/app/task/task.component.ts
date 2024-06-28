import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { deleteTask } from '../../api/deleteTask';
import { editTask } from '../../api/editTask';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    standalone: true,
    imports: [FormsModule, CommonModule],
})
export class TaskComponent {
    @Input() task: any;
    @Output() requestSuccess: EventEmitter<void> = new EventEmitter<void>();

    title: string = '';
    enableEdit: boolean = false;

    ngOnInit() {
        this.title = this.task.title;
    }

    handleTitleChange(event: Event): void {
        this.title = (event.target as HTMLInputElement).value;
    }

    async handleEditTask(id: string, title?: string, is_completed?: boolean): Promise<void> {
        const data = {
            title: title ?? this.task.title,
            is_completed: is_completed ?? this.task.is_completed,
        };
        await editTask(id, data);
        this.requestSuccess.emit();
        this.enableEdit = false;
    }

    async handleDeleteTask(id: string): Promise<void> {
        await deleteTask(id);
        this.requestSuccess.emit();
    }

    setEnableEdit(value: boolean): void {
        this.enableEdit = value;
    }
}
