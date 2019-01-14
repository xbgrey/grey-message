import * as tslib_1 from "tslib";
import * as React from 'react';
import history, { CutoverEvent } from './history';
var RouteProps = /** @class */ (function () {
    function RouteProps() {
    }
    return RouteProps;
}());
export { RouteProps };
var ComponentProps = /** @class */ (function () {
    function ComponentProps() {
    }
    return ComponentProps;
}());
export { ComponentProps };
var RouteState = /** @class */ (function () {
    function RouteState() {
    }
    return RouteState;
}());
export { RouteState };
var Route = /** @class */ (function (_super) {
    tslib_1.__extends(Route, _super);
    function Route() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new RouteState();
        /** 路由切换时候 */
        _this.onCutoverHandler = function (e) {
            _this.setState({ pathname: e.pathname, state: e.state, search: e.search });
        };
        return _this;
    }
    Route.prototype.componentDidMount = function () {
        history.on(CutoverEvent.TYPE, this.onCutoverHandler);
    };
    Route.prototype.componentWillUnmount = function () {
        history.off(CutoverEvent.TYPE, this.onCutoverHandler);
    };
    Route.prototype.render = function () {
        if (this.isShow === false) {
            return null;
        }
        var location = {
            state: this.state.state,
            pathname: this.state.pathname,
            search: this.state.search,
        };
        if (this.props.component) {
            return (React.createElement(this.props.component, { location: location }, this.props.children));
        }
        if (this.props.render) {
            return this.props.render({ location: location });
        }
        return this.props.children;
    };
    Object.defineProperty(Route.prototype, "isShow", {
        /** 判断是否可以显示 */
        get: function () {
            var pathname = this.state.pathname;
            if (!pathname) {
                return false;
            }
            if (this.props.exact) {
                return this.props.path === pathname;
            }
            else {
                var pathnameArr = pathname.match(this.props.path) || [];
                return pathnameArr.length > 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Route;
}(React.PureComponent));
export default Route;
