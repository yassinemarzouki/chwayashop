import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-button',
  imports: [CommonModule],
  templateUrl: './store-button.component.html',
  styleUrl: './store-button.component.scss'
})
export class StoreButtonComponent {
  @Input() itemCount: number = 0;
}
