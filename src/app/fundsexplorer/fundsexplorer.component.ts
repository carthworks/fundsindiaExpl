import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Data } from '../data';
import { Page } from 'src/paging/model/page';

import { CorporatePlans } from 'src/paging/model/schemes';
import { PagedData } from 'src/paging/model/paged-data';
import { MockserverresultsService } from 'src/paging/mockserverresults.service';


@Component({
  selector: 'app-fundsexplorer',
  templateUrl: './fundsexplorer.component.html',
  styleUrls: ['./fundsexplorer.component.css']
})
export class FundsexplorerComponent implements OnInit, AfterViewInit {
  page = new Page();
  @ViewChild('myTable') table;
  rows = [
    // { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    // { name: 'Dany', gender: 'Male', company: 'KFC' },
    // { name: 'Molly', gender: 'Female', company: 'Burger King' },
    {
      'bm': 'N/A',
      'c': 3,
      'cc': '45',
      'cn': '10.42',
      'createdDate': '',
      'er': 0.79,
      'm6': '-5.00',
      'mi': '1,000.00',
      'nr': 1,
      'sc': 636,
      'schemeCode': 0,
      'schemeName': '',
      'si': 1,
      'sl': '0.2 % on or before 6 Months<br/> Nil after 6 Months<br/>',
      'sm': '1,000.00',
      'sn': 'DSP Bond Fund-Reg(D)',
      'storyCode': 0,
      'storyHeadLine': '',
      'storyText': '',
      'sw': 'T',
      'tc': 1,
      'tot': '',
      'vc': 45,
      'vn': 1,
      'vr': 3,
      'wl': 0,
      'y1': '0.19',
      'y3': '3.57',
      'y5': '4.70'
    }
  ];
  columns = [
    { prop: 'bm' },
    { name: 'c' },
    { name: 'sl' }
  ];
  constructor() { }

  ngAfterViewInit() {
    this.table.bodyComponent.updatePage = function(direction: string): void {
      let offset = this.indexes.first / this.pageSize;

      if (direction === 'up') {
        offset = Math.ceil(offset);
      } else if (direction === 'down') {
        offset = Math.floor(offset);
      }

      if (direction !== undefined && !isNaN(offset)) {
        this.page.emit({ offset });
      }
    }
  }

  ngOnInit() {

    console.log(Data);
  }

}
