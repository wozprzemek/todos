import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AddTaskComponent
    // Other components if needed
  ],
})
export class AppRoutingModule { }
