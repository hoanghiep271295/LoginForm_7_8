var baseURL = "https://public.consodep.club/";
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
        var url = `${baseURL}login?u=${username}&p=${password}`;
        return url;
    },
};
