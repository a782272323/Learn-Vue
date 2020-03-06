/**
 *
 * 天气接口
 * 请求地址: http://wthrcdn.etouch.cn/weather_mini
 * 请求参数: city(查询的城市名)
 * 响应内容: 天气信息
 */
<!-- Vue实例 -->
var app = new Vue({
    el: "#app",
    data:{
        city: '',
    },
    methods: {
        searchWeather:function () {
            // console.log('天气查询');
            // console.log(this.city);

            // 调用接口
            axios.get('https://wthrcdn.etouch.cn/weather_min?city='+this.city)
                .then(function (response) {
                    console.log(response);
                },function (err) {
                    console.log(err);
                });
        }
    }
});