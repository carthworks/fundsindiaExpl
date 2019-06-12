import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedData } from './model/paged-data';
import { Page } from './model/page';
import { Data } from 'src/app/data';
import { CorporatePlans } from './model/schemes';
import 'rxjs/add/observable/interval';



@Injectable({
  providedIn: 'root'
})
export class MockserverresultsService {
  constructor() {}

  /**
   * A method that mocks a paged server response
   * @param page The selected page
   * @returns {any} An observable containing the employee data
   */
//   public getResults(page: Page): Observable<PagedData<CorporatePlans>> {
//     return Observable.of(Data).delay(350).map(data => this.getPagedData(page));
// }

  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<CorporatePlans>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<CorporatePlans> {
    const pagedData = new PagedData<CorporatePlans>();
    page.totalElements = Data.length;
    page.totalPages = page.totalElements / page.size;
    let start = page.pageNumber * page.size;
    let end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      let jsonObj = Data[i];
      // let employee = new CorporatePlans(
      //   jsonObj.sm,
      //   // jsonObj.gender,
      //   // jsonObj.company,
      //   // jsonObj.age
      // );
     // pagedData.data.push(employee);
    }
    pagedData.page = page;
    return pagedData;
  }
}
