define("test", ["require", "exports"], function (require, exports) {
    "use strict";
    var Salut = (function () {
        function Salut() {
        }
        Salut.plop = function () {
            console.log('plop');
        };
        return Salut;
    }());
    exports.Salut = Salut;
});
define("app", ["require", "exports", "test"], function (require, exports, test_1) {
    "use strict";
    var Hello = (function () {
        function Hello(message) {
            this.message = message;
        }
        return Hello;
    }());
    var hello = new Hello("linvi");
    console.log("hello " + hello.message);
    test_1.Salut.plop();
});
define("components/dropdrown/dropdown.directive", ["require", "exports"], function (require, exports) {
    "use strict";
    var DropdownComponent = (function () {
        function DropdownComponent() {
        }
        DropdownComponent.salut = function () {
            console.log('salut');
        };
        return DropdownComponent;
    }());
    exports.DropdownComponent = DropdownComponent;
});
define("components/header/header.directive", ["require", "exports"], function (require, exports) {
    "use strict";
    var HeaderComponent = (function () {
        function HeaderComponent() {
        }
        HeaderComponent.create = function () {
            console.log('create');
        };
        return HeaderComponent;
    }());
    exports.HeaderComponent = HeaderComponent;
});
//# sourceMappingURL=app.js.map