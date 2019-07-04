"use strict";
import {Component} from "./component";

export class Field extends Component {

    constructor({element}) {
        super({element});

        this.$element.addEventListener("cut", this._changeHandler.bind(this));
        this.$element.addEventListener("paste", this._changeHandler.bind(this));
        this.$element.addEventListener("keypress", this._changeHandler.bind(this));
    }

    _changeHandler(){
        this._trigger('inputChanged');
    }

}