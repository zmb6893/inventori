import { Component } from '@angular/core';

@Component({
  selector: 'app-input-new-item',
  templateUrl: './input-new-item.component.html',
  styleUrls: ['./input-new-item.component.css']
})
export class InputNewItemComponent {
  showingInputItemBox: boolean = true;
  useScale: boolean = false;

  exitInputItemBox = () => {
    this.showingInputItemBox=false;
    console.log(this.showingInputItemBox)
  }

  toggleUseScale = () => {
    this.useScale = !this.useScale;
    console.log(this.useScale)
  }

  // send in body, header application/json
  submitForm = () => {
    let body = {
      productName: (<HTMLInputElement>document.getElementById("itemName")).value,
      currentQuantity: (<HTMLInputElement>document.getElementById("itemQuantity")).value,
      initialQuantity: (<HTMLInputElement>document.getElementById("itemQuantity")).value,
      limit: (<HTMLInputElement>document.getElementById("itemLimit")).value,
    }
    console.log(body);
  }
}
