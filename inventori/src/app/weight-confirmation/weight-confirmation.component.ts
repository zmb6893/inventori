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

  getWeight = () => {
    //this.weight = this.weight+1;
    let request = new Request('http://localhost:3000/get-weight');
    fetch(request).then(response=>response.json()).then((json)=>{
      this.weight = json.value;
    });
  }
  
}
