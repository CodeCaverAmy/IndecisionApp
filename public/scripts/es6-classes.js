'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            // template string
            return 'Hi. I am ' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return '$(this.name) is $(name.age) years old.';
        }
    }]);

    return Person;
}();

var me = new Person('Amy Plant');
console.log(me.getGreeting());
console.log(me.getDescription());

var anonymous = new Person();
console.log(anonymous.getGreeting());
console.log(anonymous.getDescription());
