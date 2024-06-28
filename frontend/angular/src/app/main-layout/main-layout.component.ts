import { Component, OnInit } from '@angular/core';
import { getAllTasks } from '../../api/getAllTasks'; // Import your API function for fetching tasks
import { Task } from '../../types';
import { HeaderComponent } from '../header/header.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-main-layout',
    imports: [HeaderComponent, AddTaskComponent, TaskListComponent, CommonModule],
    standalone: true,
    templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
    tasks: Task[] = [];
    loading = true;

    constructor() { }

    ngOnInit(): void {
        this.fetchTasks();
    }

    fetchTasks(): void {
        this.loading = true;
        getAllTasks().then(
            (data: Task[]) => {
                this.tasks = data;
                this.loading = false;
            },
            (error) => {
                console.error('Error fetching tasks:', error);
                this.loading = false;
            }
        );
    }

    handleRequestSuccess(): void {
        this.fetchTasks();
    }
}
