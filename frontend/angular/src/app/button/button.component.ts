import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() type: 'add' | 'edit' | 'delete' | 'save' | 'restart' | 'complete' = 'add';
    @Input() onClick: () => void = () => { };

    getButtonClasses(): string {
        switch (this.type) {
            case 'add':
                return 'w-12 text-zinc-900 bg-zinc-400 h-10 flex justify-center items-center rounded-r-md';
            case 'edit':
            case 'delete':
            case 'restart':
            case 'complete':
                return 'w-8 h-8 flex justify-center items-center';
            case 'save':
                return 'w-24 text-zinc-50 bg-blue-500 h-10 flex justify-center items-center rounded-r-md';
            default:
                return '';
        }
    }
}
