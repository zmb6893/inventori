import { Component } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weight-confirmation',
  templateUrl: './weight-confirmation.component.html',
  styleUrls: ['./weight-confirmation.component.css']
})
export class WeightConfirmationComponent {
  weight: number = 0;
  showingWeightBox: boolean = true;
  getWeightClicked: boolean = false;

  //icons
  faX = faX;

  exitWeightBox = () => {
    this.showingWeightBox=false;
    console.log(this.showingWeightBox)
  }

  getWeight = () => {
    this.getWeightClicked = true
    let request = new Request('http://localhost:3000/get-weight');
    fetch(request).then(response=>response.json()).then((json)=>{
      this.weight = json.value;
      console.log(json.value);
      this.getWeightClicked = false;
    });
  }
  
}