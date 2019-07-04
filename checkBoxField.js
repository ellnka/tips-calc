"use strict";
import {Field} from "./field";

export class CheckBoxField extends Field {

    constructor({ element}) {
        super({element});
        this.value = false;

        this.$element.onchange = this._changeHandler.bind(this);
    }

    _changeHandler() {
        this._trigger('inputChanged', {detail: ""});
        this._trigger('checkBoxChanged', {detail: ""});

        this.value = !this.value;
    }

}