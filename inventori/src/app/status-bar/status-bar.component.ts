import { Component, Input } from '@angular/core';
import { Item } from '../inventori-table/inventori-table.component';


@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent {
  // @Input() status!: number;
  // @Input() limit!: number;
  @Input() item!: Item;
}
