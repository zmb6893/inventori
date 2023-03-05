import { Component } from '@angular/core';
import { Item } from './inventori-table/inventori-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventori';
  productInfoList: Item[] = [];

  ngOnInit = () => {
    let request = new Request("http://localhost:3000/product-list");
    fetch(request).then(response => {
      // response.forEach(element => {
      //   let productInfo: Item = {
      //     'productName': element.productName,
      //     'quantity': Number(element.currentQuantity),
      //     'quantityType': element.quantityType,
      //     'status': element.currentQuantity / element.initialQuantity,
      //   }
      //   console.log(productInfo);
      // });
      console.log(response);
    });
  }
}
