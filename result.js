"use strict";

import {Component} from "./component";

export class Result extends Component{

    constructor({element}) {
        super ({element});
        this.results = {bill: 0, split: 0};
    }

    static calculateTips(tips, bill) {
        return bill * tips / 100;
    }

    static isNumber(value) {
        return typeof value === "number" && isFinite(value);
    }

    static formatPrice(price) {
        return (Result.isNumber(price)) ? (Math.ceil((price) * 100) / 100).toFixed(2) + "$" : "";
    }

    updateResults(tips, bill, splitCount) {
        this._calculateResults(tips, bill, splitCount);
        this._resetResults();
    }

    _calculateResults(tips, bill, splitCount) {
        let tipsAmount = Result.calculateTips(tips, bill);
        let billAmount = bill + tipsAmount;


        if (splitCount > 0) {
            this.results = {
                tips: tipsAmount / splitCount,
                bill: billAmount / splitCount
            };
        } else {
            this.results = {
                tips: tipsAmount,
                bill: billAmount
            };
        }
    }

    _resetResults() {
        this.$element.querySelector('[data-selector="bill"]').textContent = Result.formatPrice(this.results.bill);
        this.$element.querySelector('[data-selector="tips"]').textContent = Result.formatPrice(this.results.tips);
    }




}