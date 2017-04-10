"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.rows = [];
        this.expanded = {};
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    AppComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    AppComponent.prototype.fetch = function (cb) {
        var data = [
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
            }
        ];
        cb(data);
    };
    AppComponent.prototype.toggleExpandRow = function (row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    };
    AppComponent.prototype.onDetailToggle = function (event) {
        console.log('Detail Toggled', event);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('myTable'),
    __metadata("design:type", Object)
], AppComponent.prototype, "table", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map