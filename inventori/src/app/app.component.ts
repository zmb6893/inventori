import { Component, Output } from '@angular/core';
import { Item } from './inventori-table/inventori-table.component';

export interface ItemCSV {
  "productName": string,
  "initialQuantity": number,
  "currentQuantity": number,
  "quantityType": string,
  "limit": number
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'inventori';

  @Output() productInfoList : ItemCSV[] = [
    {
    'productName': 'potato',
    'initialQuantity': 1,
    'currentQuantity': 1,
    'quantityType': 'c',
    'limit': 0,
  }
];

  constructor(){
    this.ngOnInit();
    console.log(this.productInfoList);
  }

  ngOnInit = () => {
    console.log("running");
    let request = new Request("http://localhost:3000/product-list");
    fetch(request).then(response=>response.json()).then((json)=>{

      json.forEach((element: ItemCSV) => {
        let productInfo: ItemCSV = {
          'productName': element.productName,
          'initialQuantity': Number(element.initialQuantity),
          'currentQuantity': Number(element.currentQuantity),
          'quantityType': element.quantityType,
          'limit': Number(element.limit),
          // 'status': element.currentQuantity / element.initialQuantity
        }
        this.productInfoList.push(productInfo);
      });
    });

  showInputNewItem = false;

  openInputNewItem = () => {
    this.showInputNewItem = true;

  }
}
