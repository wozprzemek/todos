import { Component, EventEmitter, Output } from '@angular/core';
import { addTask } from '../../api/addTask';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-task',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
    title: string = '';

    @Output() requestSuccess: EventEmitter<void> = new EventEmitter<void>();

    handleTitleChange(event: Event): void {
        this.title = (event.target as HTMLInputElement).value;
    }

    async handleAddTask(): Promise<void> {
        if (this.title.length > 0) {
            try {
                await addTask({
                    title: this.title,
                    is_completed: false
                });
                this.requestSuccess.emit();
                this.title = '';
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    }
}
