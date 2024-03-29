// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var httpClient = require("./common/httpClient");
var popupBase = require("./common/basePopup");

cc.Class({
    extends: cc.Component,
    properties: {
        btnDangNhap: cc.Button,
        btnDangKy: cc.Button,
        btnLoginFb: cc.Button,
        txtUserName: cc.EditBox,
        txtPass: cc.EditBox,
        txtCaptCha: cc.EditBox,
        popup: popupBase
    },

    onLoad() {
        this.node.active = true;
        this.btnDangNhap.node.on('click', this.loginFunc, this);
    },

    loginFunc: function () {
        cc.log("dang nhap");
        var userName = this.txtUserName.string;
        var pass = this.txtPass.string;
        var captcha = this.txtCaptCha.string;
        var url = httpClient.loginRequire(userName, pass, captcha);
        httpClient.sendRequest(url, null, null, this.loginSucess.bind(this), this.loginFaile.bind(this));
    },

    loginSucess: function (response) {
        cc.log("response", response);
        var jsonData = JSON.parse(response);
        if (jsonData["e"] === 0) {
            // cc.log("jsondata", jsonData);
            // this.popup.openPopup("Đăng nhập thành công");
            this.node.active = false;

            this.node.runAction(cc.sequence(function () {
                this.popup.openPopup("Đăng nhập thành công");
            }.bind(this), cc.delayTime(3), this.popup.closePopup.bind(this)));

            // this.popup.active = true;
            // this.popup.getChildByName("lbContent").getComponent(cc.Label).string = "Đăng nhập thành công";

            // this.openPopup("Đăng nhập thành công");
            // this.basePopup.getComponent("basePopup").openPopup("Đăng nhập thành công");
        } else {
            // cc.log("jsondata", jsonData);
            this.node.active = true;
            this.openPopup("Đăng nhập không thành công");
            // this.popup.active = true;
            // this.popup.getChildByName("lbContent").getComponent(cc.Label).string = "Đăng nhập không thành công";
            // this.popup.openPopup("Đăng nhập không thành công");
            this.basePopup.getComponent("basePopup").openPopup("Đăng nhập thành công");
        }
    },
    loginFaile: function () {
        cc.log("loginFaile");
    },

    start() {

    },

    // update (dt) {},
});
