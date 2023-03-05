import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-weight-confirmation',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class WeightConfirmationComponent {
  weight: number = 0;
  showingWeightBox: boolean = true;

  exitWeightBox = () => {
    this.showingWeightBox=false;
    console.log(this.showingWeightBox)
  }
  
}