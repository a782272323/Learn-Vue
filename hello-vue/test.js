/**
 * vue 在js里
 * var Utils = function()   {
 *
 * }是一个函数，但如下加了（）就是函数对象
 */
var Utils = function () {
    // 私有属性
    var username;

    // 私有方法
    var setUsername = function (username) {
        this.username = username;
    };

    // 私有方法
    var getUsername = function () {
        return this.username;

    };

    // 把私有方法暴露出来
    return  {
        setUsername: function (username) {
            setUsername(username);

        },

        getUsername: function (username) {
            return getUsername();

        }
    }
}();