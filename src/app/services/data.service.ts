import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: string[] = [];
    private _dataEvent = new Subject<string[]>();
    dataEvent$ = this._dataEvent.asObservable();

    parseData(data: string[]): void {
        this.data = data;
        this._dataEvent.next(this.data);
    }
}
