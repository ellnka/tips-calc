"use strict";
import {Component} from "./component";

export class Field extends Component {

    constructor({element}) {
        super({element});

        this.$element.oncut = this.$element.onpaste = this.$element.onkeypress = () => {
            this._trigger('inputChanged');
        };
    }

}