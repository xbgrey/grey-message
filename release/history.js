import * as tslib_1 from "tslib";
import { Message, Event } from 'grey-message';
var History = /** @class */ (function (_super) {
    tslib_1.__extends(History, _super);
    function History() {
        return _super.call(this) || this;
    }
    Object.defineProperty(History, "instance", {
        get: function () {
            if (!History._instance) {
                History._instance = new History();
            }
            return History._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 跳转到制定地址
     * @param path 地址
     * @param state 状态
     */
    History.prototype.push = function (path, state) {
        var pathArr = path.split('?');
        this.send(new CutoverEvent(pathArr[0], pathArr[1], state));
        history.replaceState(state, null, path);
    };
    return History;
}(Message));
/** 切换路由事件 */
var CutoverEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CutoverEvent, _super);
    function CutoverEvent(pathname, search, state) {
        var _this = _super.call(this, CutoverEvent.TYPE) || this;
        _this.pathname = pathname;
        _this.state = state;
        _this.search = search;
        return _this;
    }
    CutoverEvent.TYPE = Message.createType('CutoverEvent');
    return CutoverEvent;
}(Event));
export { CutoverEvent };
export default History.instance;
