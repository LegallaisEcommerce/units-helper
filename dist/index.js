var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnitHelpers = function () {
    function UnitHelpers() {
        var baseFontSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;

        _classCallCheck(this, UnitHelpers);

        this.baseFontSize = baseFontSize;
    }

    _createClass(UnitHelpers, [{
        key: "toRem",
        value: function toRem(px) {
            return parseFloat(px) / this.baseFontSize + "rem";
        }
    }, {
        key: "toEm",
        value: function toEm(px) {
            return parseFloat(px) / this.baseFontSize + "em";
        }
    }, {
        key: "toPx",
        value: function toPx(rem) {
            var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var value = parseFloat(rem) * this.baseFontSize;

            return round ? Math.round(value) + "px" : value + "px";
        }
    }]);

    return UnitHelpers;
}();

export default UnitHelpers;
