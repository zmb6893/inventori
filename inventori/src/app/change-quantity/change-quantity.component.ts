import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-change-quantity',
  templateUrl: './change-quantity.component.html',
  styleUrls: ['./change-quantity.component.css']
})
export class ChangeQuantityComponent {
  showModal: boolean = true;
  weighing = false;
  @Input() adding!: boolean;
  @Input() id!: number;
  weight: Number = 0;
  exit = () => {
    this.showModal = false;
  }

  openWeightModal = () => {
    this.weighing = true;
    console.log(this.weighing);
  }

  modifyWeight = () => {
    var body = {
      "id": this.id,
      "weight": this.weight,
    }

    fetch(new Request(this.adding ? "http://localhost:3000/increase-product" : "http://localhost:3000/decrease-product"), {
      "method": "PUT",
      "headers": {
        'Content-Type': "application/json"
      },
      "body": JSON.stringify(body)
    });
  }

  newWeight = (weight: Number) => {
    this.weight = weight;
    console.log(this.weight)
  }
}
