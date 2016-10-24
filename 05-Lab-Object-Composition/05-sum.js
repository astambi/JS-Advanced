function sum () {
    let model = getModel();
    model.init('#num1', '#num2', '#result');
    $('#sumButton').click(model.add);
    $('#subtractButton').click(model.subtract);

    // NB! Testing in Judge => use DOM unit tests, test only getModel()

    // Solution using the "Module" pattern
    function getModel() {
        let model = {
            init: function (selector1, selector2, resultSelector) {
                model.num1 = $(selector1);
                model.num2 = $(selector2);
                model.result = $(resultSelector);
            },
            add:      () => model.action((a, b) => a + b),
            subtract: () => model.action((a, b) => a - b),
            action: function (operation) {
                let val1 = Number(model.num1.val());
                let val2 = Number(model.num2.val());
                model.result.val(operation(val1, val2));
            }
        };
        return model;
    }

    // Solution using the "Revealing Module" pattern
    function getModel() {
        let num1, num2, result;

        function init(selector1, selector2, resultSelector) {
            num1 = $(selector1);
            num2 = $(selector2);
            result = $(resultSelector);
        }

        function add() {
            action((a, b) => a + b);
        }

        function subtract() {
            action((a, b) => a - b);
        }

        function action(operation) {
            let val1 = Number(num1.val());
            let val2 = Number(num2.val());
            result.val(operation(val1, val2));
        }

        let model = {init, add, subtract};
        return model;
    }
}