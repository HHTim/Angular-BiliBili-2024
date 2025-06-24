import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Child } from './course';


@Component({
  selector: 'app-card',
  imports: [
    NzCardModule,
    NzFlexModule,
    NzIconModule,
    NzGridModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less'
})
export class CardComponent {
  @Input() courseObj!: Child
  @Output() messageEvent = new EventEmitter<any>();


  sendMessage(): void {
    this.messageEvent.emit('Hello from CardComponent!');
  }


}
