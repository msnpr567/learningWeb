import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {

    @ViewChild('myTable') table: any;

    rows: any[] = [];
    expanded: any = {};
    timeout: any;

    constructor() {
        this.fetch((data) => {
            this.rows = data;
        });
    }

    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }

    fetch(cb) {
        let data = [
            {
                "id": 0,
                "name": "Ramsey Cummings",
                "gender": "male",
                "age": 52,
                "address": {
                    "state": "South Carolina",
                    "city": "Glendale"
                }
            },
            {
                "id": 1,
                "name": "Stefanie Huff",
                "gender": "female",
                "age": 70,
                "address": {
                    "state": "Arizona",
                    "city": "Beaverdale"
                }
            },
            {
                "id": 2,
                "name": "Mabel David",
                "gender": "female",
                "age": 52,
                "address": {
                    "state": "New Mexico",
                    "city": "Grazierville"
                }
            },
            {
                "id": 3,
                "name": "Frank Bradford",
                "gender": "male",
                "age": 61,
                "address": {
                    "state": "Wisconsin",
                    "city": "Saranap"
                }
            }]
        cb(data);
    }

    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }

}
