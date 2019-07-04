"use strict";
import { Field} from "./field";

export class InputField extends Field {

    constructor({element, precision, value, isMoreThanZero}) {
        super({
            element
        });

        this.$element.value = value.toFixed(precision);
        this.value = value;
        this._precision = precision;
        this._isMoreThanZero = isMoreThanZero;

        this.$element.onchange = this._changeHandler.bind(this);
    }

    _changeHandler() {
        this._trigger('inputChanged');

        if (this._isMoreThanZero && Number(this.$element.value) <= 0) {
            this.$element.value = 1;
        }
        this.value = Number(this.$element.value);
        this.$element.value = this.value.toFixed(this._precision);
    }

}