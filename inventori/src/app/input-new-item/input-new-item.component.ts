import { Component } from '@angular/core';

@Component({
  selector: 'app-input-new-item',
  templateUrl: './input-new-item.component.html',
  styleUrls: ['./input-new-item.component.css']
})
export class InputNewItemComponent {
  showingInputItemBox: boolean = true;
  useScale: boolean = false;
  weight: Number = 0;

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
    let test = {
      productName: (<HTMLInputElement>document.getElementById("itemName")).value,
      currentQuantity: Number((<HTMLInputElement>document.getElementById("itemQuantity")).value),
      initialQuantity: Number((<HTMLInputElement>document.getElementById("itemQuantity")).value),
      limit: Number((<HTMLInputElement>document.getElementById("itemLimit")).value),
    }


    fetch(new Request("http://localhost:3000/add-product"), {
      "method": "POST",
      "headers": {
        'Content-Type': "application/json"
      },
      "body": JSON.stringify(test)
    });

  }

  newWeight = (weight: Number) => {
    this.weight = weight;
    console.log(this.weight)
  }
}
