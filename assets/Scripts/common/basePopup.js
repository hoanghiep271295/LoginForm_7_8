// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var basePopup = cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.Label
    },
    openPopup: function (content) {
        this.node.active = true;
        this.label.string = content;
    },

    onLoad() {
        this.node.active = false;
        this.label.string = "12121";
    },

    start() { },

    // update (dt) {},
});
module.exports = basePopup;
