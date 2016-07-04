var milkcocoa = new MilkCocoa('uniiq6auhuk.mlkcca.com');

var datastore = milkcocoa.dataStore('hoge');

var geo = navigator.geolocation;

var getParam = function(){
  var urlParam = location.search.substring(1);
  console.log(urlParam);
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
  data : {
    roomKey : null,
    name:null,
    member : {},
    map:null,
    markers : {},
  },
  methods :{
    changeUrl : function(){

    },
    isSend : function(){
      if(this.roomKey == null && this.name == null){
        return false;
      } else {
        return true;
      }
    },
    sendPos : function(_lat,_long){
      datastore.send({
        name : this.name,
        roomKey : this.roomKey,
        lat : _lat,
        long : _long
      },function(err,data){
      });
    },
    renderMap : function(_lat,_long){
      var myLatlng = new google.maps.LatLng(_lat,_long);
      var myOptions = {
          zoom: 16,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false
      };
      if(this.map == null){
        this.map = new google.maps.Map(document.getElementById("gmap"), myOptions);
      }
      var markers = this.markers;
      console.log(markers);
      markers[this.name] = new google.maps.Marker({
          position: myLatlng,
          map: this.map,
          title: this.name
      });
      var infoWindows = {};
      Object.keys(this.member).forEach(function(key){
        var member = this.member[key];
        var latlng = new google.maps.LatLng(member.let,member.long);
        console.log(member == null);
        if(member == null){
          markers[member.name] = new google.maps.Marker({
              position: latlng,
              map: this.map,
              title: member.name
          });
          infoWindows[member.name] = new google.maps.InfoWindow({
            content: '<div>' + member.name + '</div>'
          });
          infoWindows[member.name].open(this.map,markers[member.name]);
          console.log('null');
        } else {
          console.log(markers[member.name]);
          markers[member.name].setPosition(latlng);
          infoWindows[member.name].open(this.map,markers[member.name]);
        }
      }.bind(this));
    }
  },
  watch: {
    "roomKey" : function(val,oldval){
      // var a = window.location.href;
      // window.history.pushState(null,null,a + val);
      // new media_line_me.LineButton({"pc":true,"lang":"ja","type":"a","text":"","withUrl":true});
    }
  },
  created : function(){
    var self = this;
    // self.roomKey = getParam()['roomKey'];
    if( geo ){
      geo.getCurrentPosition(function(geo){
        var coords  = geo.coords;
        self.renderMap(coords.latitude,coords.longitude);
      });
    } else {
      alert( "あなたの端末では、現在位置を取得できません。" ) ;
    }
    setInterval(function(){
      if(self.isSend()){
        geo.getCurrentPosition(function(geo){
          var coords  = geo.coords;
          self.sendPos(coords.latitude,coords.longitude);
          self.renderMap(coords.latitude,coords.longitude);
        });
      }
    },1000);

    datastore.on('send',function(sent){
      var value = sent.value;
      if( self.roomKey == value.roomKey && self.name != value.name){
        self.member[value.name] = value;
        // console.log(self.member);
      }
    });
  }
});
