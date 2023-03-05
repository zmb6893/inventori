import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ItemCSV } from '../app.component';

export interface Item {
  quantity: number;
  productName: string;
  quantityType: string;
  status: number;
  limit: number;
  id: number;
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
export class InventoriTableComponent implements OnChanges {
  @Input() products: ItemCSV[] = [];
  
  displayedColumns: string[] = ['productName', 'quantity', 'limit', 'quantityType', 'status', 'add', 'use'];
  dataSource : Item[] = inventory;
  changeQuantity: boolean = false;
  adding: boolean = true;
  currentId: number = 0;
  clickChange: boolean = false;

  constructor(){
    this.ngOnInit();
  }

  ngOnInit(){
    this.pleaseWork();
  }

  ngOnChanges(changes: SimpleChanges){
    this.pleaseWork();
  }

  openChangeModal = (item: any, adding: boolean) => {
    this.clickChange = true;
    //console.log(this.products);
    this.adding = adding;
    console.log(`${adding? 'Adding to ' : 'Subtracting from '}the item ${item.productName}`);
    this.changeQuantity = true;
    this.currentId = item.id;
  };

  openUseModal = (item: any) => {
    console.log(`Using the item ${item.productName}`);
  };

  pleaseWork = () => {
    let newArray: Item[]= [];
    this.products.forEach(i => {
      newArray.push({
        productName: i.productName, 
        quantity: i.currentQuantity, 
        quantityType: i.quantityType, 
        status: i.currentQuantity / i.limit,
        limit: i.limit,
        id: i.id
      })
    });
    this.dataSource = newArray;
  }

}

