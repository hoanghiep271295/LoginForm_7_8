// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var httpClient = require("./common/httpClient")
var popup = require("./common/basePopup");
cc.Class({
    // extends: cc.Component,
    extends: popup,
    properties: {
        btnDangNhap: cc.Button,
        btnDangKy: cc.Button,
        btnLoginFb: cc.Button,
        txtUserName: cc.EditBox,
        txtPass: cc.EditBox,
        txtCaptCha: cc.EditBox

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
        // var basePopup = this.getComponent("./common/basePopup");
        // cc.log("basePopup", basePopup);
        var jsonData = JSON.parse(response);
        if (jsonData["e"] === 0) {
            // cc.log("jsondata", jsonData);
            this.openPopup("Đăng nhập thành công");
        } else {
            // cc.log("jsondata", jsonData);
            this.openPopup("Đăng nhập không thành công");
        }
    },
    loginFaile: function () {
        cc.log("loginFaile");
    },

    start() {

    },

    // update (dt) {},
});
