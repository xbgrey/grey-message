import * as tslib_1 from "tslib";
import * as React from 'react';
import history from './history';
var Link = /** @class */ (function (_super) {
    tslib_1.__extends(Link, _super);
    function Link() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClickHandler = function () {
            history.push(_this.props.to, _this.props.state);
        };
        return _this;
    }
    Link.prototype.render = function () {
        return React.createElement("a", { onClick: this.onClickHandler }, this.props.children);
    };
    return Link;
}(React.PureComponent));
export default Link;
