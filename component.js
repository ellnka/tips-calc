"use strict";
export class Component {

    constructor({element}) {
        this.$element = element;
    }

    static hideElements(...$elements) {
        $elements.forEach(($element) => {
            if ($element && $element.classList && !$element.classList.contains("d-none")) {
                $element.classList.add("d-none");
            }
        });
    }

    static showElements(...$elements) {
        $elements.forEach(($element) => {
            if ($element && $element.classList && $element.classList.contains("d-none")) {
                $element.classList.remove("d-none");
            }
        });
    }

    hide() {
        Component.hideElements(this.$element);
    }

    show() {
        Component.showElements(this.$element);
    }

    on(eventName, handler) {
        this.$element.addEventListener(eventName, handler);
    }

    _trigger(eventName, detail) {
        const event = new CustomEvent(eventName, {detail});
        this.$element.dispatchEvent(event);
    }

}