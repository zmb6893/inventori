import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-confirmation',
  templateUrl: './weight-confirmation.component.html',
  styleUrls: ['./weight-confirmation.component.css']
})
export class WeightConfirmationComponent {
  weight: number = 0;
  showingWeightBox: boolean = true;

  exitWeightBox = () => {
    this.showingWeightBox=false;
    console.log(this.showingWeightBox)
  }
  
}
