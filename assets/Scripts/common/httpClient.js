// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var baseURL = "http://public.thecao.club/";
module.exports = {
    sendRequest: function (url, params, isPost, callback, errorcallback, callbackHead) {
        cc.log("sendRequest :", url);
        if (url == null || url === '')
            return;
        var xhr = cc.loader.getXMLHttpRequest();
        if (isPost) {
            xhr.open("POST", url);
        } else {
            xhr.open("GET", url);
        }
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        if (cc.sys.platform === cc.sys.WIN32) {
            xhr.setRequestHeader("user-agent", "win32");
        }
        xhr.onreadystatechange = function () {

            var response = xhr.responseText;
            if (xhr.readyState === 4 && xhr.status === 200) {
                var responseHeader = xhr.getAllResponseHeaders();
                if (callback)
                    callback(response);
                if (callbackHead)
                    callbackHead(responseHeader);
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                if (errorcallback)
                    errorcallback(response + xhr.status);
            }
        };

        if (params == null || params === "") {
            xhr.send();
        } else {
            xhr.send(params);
        }
    },
    loginRequire: function (username, password, captcha) {
        cc.log("1212");
        var url = `${baseURL}loginv2?u=${username}&p=${password}`;
        return url;
    },
};
