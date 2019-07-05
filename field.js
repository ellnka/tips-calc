"use strict";
import {Component} from "./component";

export class Field extends Component {
    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    constructor({element, value}) {
        super({element});

        this._value= value;

        this.$element.addEventListener("cut", this._changeHandler.bind(this));
        this.$element.addEventListener("paste", this._changeHandler.bind(this));
        this.$element.addEventListener("keypress", this._changeHandler.bind(this));
    }



    _changeHandler(){
        this._trigger('inputChanged');
    }

}