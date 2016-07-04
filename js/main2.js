var milkcocoa = new MilkCocoa('uniiq6auhuk.mlkcca.com');
var datastore = milkcocoa.dataStore('hoge');
var geo = navigator.geolocation;

var getParam = function(){
  var urlParam = location.search.substring(1);
  // URLにパラメータが存在する場合
  if(urlParam) {
    // 「&」が含まれている場合は「&」で分割
    var param = urlParam.split('&');

    // パラメータを格納する用の配列を用意
    var paramArray = [];

    // 用意した配列にパラメータを格納
    for (i = 0; i < param.length; i++) {
      var paramItem = param[i].split('=');
      paramArray[paramItem[0]] = paramItem[1];
    }

    return paramArray;

  }
  return null;
}

var app = new Vue({
  el: '#app',
  data: {
    roomKey: '',
    name: '',
    lineUrl: 'hoge',
  },
  methods: {
    isSend: function(){
      return this.name != '';
    },
    renderMap: function(_lat,_long){
      var myLatlng = new google.maps.LatLng(_lat,_long);
      var myOptions = {
          zoom: 16,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false
      };
      var map = new google.maps.Map(document.getElementById("gmap"), myOptions);

    }
  },
  watch: {
    'roomKey': function(val,oldval) {
      var baseUrl = location.host;
      var url = baseUrl + '/meetmap/?roomkey=' + val;
      this.lineUrl = 'http://line.me/R/msg/text/?' + encodeURI(url);
    }
  },
  created: function(){
    var self = this;
    var param = getParam();
    if( param === null || param['roomKey'] === null){
      self.roomKey = Math.random().toString(10).slice(-4);
    } else {
      self.roomKey = param['roomKey'];
    }

    // if(self.isSend()){
      if(geo){
        geo.getCurrentPosition(function(geo){
          var coords  = geo.coords;
          self.renderMap(coords.latitude,coords.longitude);
        });
      } else {
        alert( "あなたの端末では、現在位置を取得できません。" ) ;
      }
    // }
  }
});
