import { Component, Input } from '@angular/core';
import { ItemCSV } from '../app.component';

export interface Item {
  quantity: number;
  productName: string;
  quantityType: string;
  status: number;
}

var inventory: Item[] = [
  // {productName: 'Apples', quantity: 15, quantityType: 'Whole Number', status: 1},
  // {productName: 'Oranges', quantity: 12, quantityType: 'Whole Number', status: .5},
  // {productName: 'Flour', quantity: 130, quantityType: 'g', status: .25},
  // {productName: 'Potatoes', quantity: 3, quantityType: 'Whole Number', status: .75},
];



@Component({
  selector: 'app-inventori-table',
  templateUrl: './inventori-table.component.html',
  styleUrls: ['./inventori-table.component.css']
})
export class InventoriTableComponent {
  @Input() products: ItemCSV[] = [];

  displayedColumns: string[] = ['productName', 'quantity', 'quantityType', 'status', 'add', 'use'];
  dataSource : Item[] = inventory;

  ngOnInit(){
  }

  openAddModal = (item: any) => {
    console.log(this.products);
    console.log(`Adding to the item ${item.productName}`);
  };

  openUseModal = (item: any) => {
    console.log(`Adding to the item ${item.productName}`);
  };

  pleaseWork = () => {
    let newArray: Item[]= [];
    this.products.forEach(i => {
      newArray.push({
        productName: i.productName, 
        quantity: i.currentQuantity, 
        quantityType: i.quantityType, 
        status: i.currentQuantity / i.initialQuantity,
      })
    });
    this.dataSource = newArray;
  }

}

