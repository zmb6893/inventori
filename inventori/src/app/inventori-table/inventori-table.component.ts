import { Component } from '@angular/core';

export interface Item {
  quantity: number;
  productName: string;
  quantityType: string;
  status: number;
}

const inventory: Item[] = [
  {productName: 'Apples', quantity: 15, quantityType: 'Whole Number', status: 1},
  {productName: 'Oranges', quantity: 12, quantityType: 'Whole Number', status: .5},
  {productName: 'Flour', quantity: 130, quantityType: 'g', status: .25},
  {productName: 'Potatoes', quantity: 3, quantityType: 'Whole Number', status: .75},
];



@Component({
  selector: 'app-inventori-table',
  templateUrl: './inventori-table.component.html',
  styleUrls: ['./inventori-table.component.css']
})
export class InventoriTableComponent {
  displayedColumns: string[] = ['productName', 'quantity', 'quantityType', 'status', 'add', 'use'];
  dataSource = inventory;

  openAddModal = (item: any) => {
    console.log(`Adding to the item ${item.productName}`);
  };

  openUseModal = (item: any) => {
    console.log(`Adding to the item ${item.productName}`);
  };
}

