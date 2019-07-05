"use strict";
import {Field} from "./field";

export class CheckBoxField extends Field {

    constructor({element, value}) {
        super({element, value});

        this.$element.addEventListener("change", this._changeHandler.bind(this));
    }

    _changeHandler() {
        this.value = !this.value;

        this._trigger('inputChanged', {detail: ""});
        this._trigger('checkBoxChanged', {detail: ""});

    }

}