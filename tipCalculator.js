"use strict";
import {InputField} from "./inputField";
import {Result} from "./result";
import {CheckBoxField} from "./checkBoxField";

export class TipCalculator {
    constructor({element}) {
        this.$element = element;

        this.$bill = new InputField({
            element: this.$element.querySelector('[data-component="bill"]'),
            precision: 2,
            value: 100,
            isMoreThanZero: true
        });
        this.$tips = new InputField({
            element: this.$element.querySelector('[data-component="tips"]'),
            precision: 2,
            value: 10,
            isMoreThanZero: false
        });
        this.$splitCount = new InputField({
            element: this.$element.querySelector('[data-component="splitCount"]'),
            precision: 0,
            value: 2,
            isMoreThanZero: true
        });

        this.$isBillSplit = new CheckBoxField({
            element: this.$element.querySelector('[data-component="isBillSplit"]')
        });
        this.$results = {
                total: new Result({element: this.$element.querySelector('[data-component="totalResults"]')}),
                split: new Result({element: this.$element.querySelector('[data-component="splitResults"]')}),
        };

        this.$splitBetweenContainer = this.$element.querySelector('[data-selector="splitBetweenContainer"]');

        this.$bill.on("inputChanged", this._inputChangedHandler.bind(this));
        this.$tips.on("inputChanged", this._inputChangedHandler.bind(this));
        this.$splitCount.on("inputChanged", this._inputChangedHandler.bind(this));
        this.$isBillSplit.on("inputChanged", this._inputChangedHandler.bind(this));
        this.$isBillSplit.on("checkBoxChanged", this._checkBoxChangedHandler.bind(this));
        this.$element.addEventListener("submit", this._submitHandler.bind(this));

    }

    _inputChangedHandler() {
        this._hideAllResults();
    }

    _checkBoxChangedHandler() {
        this.$splitBetweenContainer.classList.toggle("d-none");
    }

    _submitHandler(event) {
        event.preventDefault();
        this.$results.total.updateResults(this.$tips.value, this.$bill.value);
        this.$results.total.show();
        if (this.$isBillSplit.value) {
            this.$results.split.updateResults(this.$tips.value, this.$bill.value, this.$splitCount.value);
            this.$results.split.show();
        } else {
            this.$results.split.updateResults(0, 0, 0);
            this.$results.split.hide();
        }
    }

    _hideAllResults() {
        this.$results.total.hide();
        this.$results.split.hide();
    }

    _showAllResults() {
        this.$results.total.show();
        this.$results.split.show();
    }


}