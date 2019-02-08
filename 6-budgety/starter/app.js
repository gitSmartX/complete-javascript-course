//BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        },

        budget: 0,
        percentage: -1
    };

    var calculateTotal = function(type) {
        var sum = 0;

        data.allItems[type].forEach(function(curr){
            sum += curr.value;
        });

        data.totals[type] = sum;
    }

    return {
        addItem: function(type, desc, val) {
            var newItem, ID;
            
            // create new ID
            if (data.allItems[type].length === 0) {
                ID = 0;
            } else {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }

            // create new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }

            // push eleent in data structure
            data.allItems[type].push(newItem);
            data.totals[type] += parseInt(newItem.value);

            // return element
            return newItem;
        },

        // Вычисление бюджета
        calculateBudget: function() {
            // Вычисление дохода и расходов
            calculateTotal('exp');
            calculateTotal('inc');
            // Доходы - расходы
            data.budget = data.totals.inc - data.totals.exp;
            // %расходов от доходов
            if (data.totals.imc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);    
            } else {
                data.percentage = -1;
            };   
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        getData: function() {
            console.log(data);
        }
    };



})();

//UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc + or exp -
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(item, type) {
            var html, newHtml, element;
            // HTML with placeholder
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%percentage%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';  
            }
            // Placeholder -> Actual data
            newHtml = html.replace('%id%', item.id);
            newHtml = newHtml.replace('%description%', item.description);
            newHtml = newHtml.replace('%value%', item.value);
            // 
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(cur, index, array) {
                cur.value = "";
            });

            fieldsArray[0].focus();
        },

        getDOMstring: function() {
            return DOMstrings;
        }

    };

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstring();

        document.querySelector(DOM.addButton).addEventListener('click', cntrlAddItem);

        document.addEventListener('keypress', function(event) {        
            if(event.keyCode === 13 || event.which === 13) {
                cntrlAddItem();
            }  
        });
    };

    var updateBudget = function() {
        
        // 1. Вычислить бюджет
        budgetCtrl.calculateBudget();

        // 2. Вернуть бюджет
        var budget = budgetCtrl.getBudget();
        console.log(budget);
        // 3. Отобразить бюджет на UI
    };

    var cntrlAddItem = function() {

        var input, newItem;

        // 1. Получить данные из полей ввода
        input = UICtrl.getInput();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. Добавить объект в budgetController
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Добавить объект в UIController
            console.log(input.type);
            UICtrl.addListItem(newItem, input.type);

            // 4. Отчистить поля
            UICtrl.clearFields();

            // 5. Действия с бюджетом
            updateBudget();
        }
    };

    return {
        Init: function() {
            console.log('Инициализация прошла успешно');
            setupEventListeners();
        }
    };



})(budgetController, UIController);


controller.Init();