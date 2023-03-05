import { Component } from '@angular/core';
import { Item } from './inventori-table/inventori-table.component';
const fs = require("fs");
const { stringify } = require("csv-stringify");
const db = require("./db");


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventori';
  productInfoList: Item[] = [];

  ngOnInit = () => {
    // Load the csv info from the file.
    const filename = "inventori/src/assets/inventoryInfo.csv"
    const writableStream = fs.createWriteStream(filename);
    const columns = [
      "productName",
      "initialQuantity",
      "currentQuantity",
      "quantityType"
    ];
    
  }
}
