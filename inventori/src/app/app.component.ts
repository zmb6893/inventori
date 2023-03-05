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

  products : ItemCSV[] = [];

  constructor(){
    this.ngOnInit();
  }

  ngOnInit = () => {
    console.log("running");
    let request = new Request("http://localhost:3000/product-list");
    fetch(request).then(response=>response.json()).then((json)=>{
      json.forEach((element: ItemCSV) => {
        let product: ItemCSV = {
          'productName': element.productName,
          'initialQuantity': Number(element.initialQuantity),
          'currentQuantity': Number(element.currentQuantity),
          'quantityType': element.quantityType,
          'limit': Number(element.limit),
          // 'status': element.currentQuantity / element.initialQuantity
        }
        this.products.push(product);
      });
    });
  }

  showInputNewItem = false;
  openInputNewItem = () => {
    this.showInputNewItem = true;
  }
}
