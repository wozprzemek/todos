import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

import { AddTaskComponent } from './add-task/add-task.component'; // Adjust the path as needed

@NgModule({
    declarations: [
        AddTaskComponent
        // Other components
    ],
    imports: [
        CommonModule,
        FormsModule // Ensure FormsModule is included here
    ],
    exports: [
        AddTaskComponent
        // Other components if needed
    ]
})
export class AppModule { }
