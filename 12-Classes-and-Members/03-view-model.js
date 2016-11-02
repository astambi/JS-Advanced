function viewModel() {
    class Textbox {
        constructor(selector, regex) {
            this._value = '';
            this._elements = $(selector);
            this._invalidSymbols = regex;

            let _that = this;

            this._elements.on(function (index, elem) {
                $(elem).on('input', function () {
                    _that.value = elem.value;
                    _that.changeValues();
                });
            });
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
        }

        get elements() {
            return this._elements;
        }

        changeValues() {
            this._elements.each(function (index, elem) {
                elem.value = textbox.value;
            });
        }

        isValid() {
            return this._invalidSymbols.test(this.value);
        }
    }

    let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
    let inputs = $('.textbox');

}

// TODO