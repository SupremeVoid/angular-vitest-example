import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-test1',
    standalone: true,
    imports: [NgClass],
    templateUrl: './test1.component.html',
    styleUrl: './test1.component.css'
})
export class Test1Component {
    protected displayData: string[] = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.dataService.dataEvent$.subscribe((data) => {
            this.displayData = data;
        });

        this.dataService.parseData(['test.comp2', 'test.comp22', 'test.comp222', 'test.comp2222', 'test.comp22222']);
    }
}
