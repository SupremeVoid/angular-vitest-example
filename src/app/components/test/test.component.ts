import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './test.component.html',
    styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
    protected displayData: string[] = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.dataService.dataEvent$.subscribe((data) => {
            this.displayData = data;
        });

        this.dataService.parseData(['test.comp1', 'test.comp11', 'test.comp111', 'test.comp1111', 'test.comp11111']);
    }
}
