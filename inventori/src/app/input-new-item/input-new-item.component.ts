import { Component } from '@angular/core';

@Component({
  selector: 'app-input-new-item',
  templateUrl: './input-new-item.component.html',
  styleUrls: ['./input-new-item.component.css']
})
export class InputNewItemComponent {
  showingInputItemBox: boolean = true;

  exitInputItemBox = () => {
    this.showingInputItemBox=false;
    console.log(this.showingInputItemBox)
  }
}
