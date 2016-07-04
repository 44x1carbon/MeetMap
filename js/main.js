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
    map: null,
    mymarker: null,
    markerIcons: [],
    members: {},
    memberList:[],
    iconIdx: 0,
    myimage: "",
  },
  methods: {
    isSend: function(){
      return this.name != '';
    },
    createMap:function(_lat,_long){
      this.map = L.map('map').setView([_lat,_long], 19);
      map = this.map;
      var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 19
      });
      tileLayer.addTo(map);
      var icon = this.getIcon();
      this.myimage = this.getIconImg(icon);
      this.mymarker = L.marker([_lat,_long],{icon: icon }).addTo(map);
    },
    updateMap: function(_lat,_long){
      var mymarker = this.mymarker;
      mymarker.setLatLng([_lat,_long]);
    },
    setMember: function(member){
      var map = this.map;
      var members = this.members;
      if(!(member.name in members)){
        members[member.name] = member;
        var icon = this.getIcon();
        this.memberList.push(member);
        members[member.name]['img'] = this.getIconImg(icon);
        members[member.name]['maker'] = L.marker([member.lat,member.long],{icon: icon }).addTo(this.map);
      }
    },
    updateMember: function(member){
      var members = this.members;
      if(!(member.name in members)){
        members[member.name]['maker'].setLatLng([member.lat,member.long]);
      }
    },
    getIcon: function(){
      if(this.iconIdx + 1 > this.markerIcons.length){
        this.iconIdx = 0;
      }
      return this.markerIcons[this.iconIdx++];
    },
    getIconImg: function(icon){
      return icon.options.iconUrl;
    },
    send: function(_lat,_long){
      datastore.send({
        name: this.name,
        roomKey: this.roomKey,
        lat: _lat,
        long: _long
      });
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

    var iconImgs = ['marker_blue.png','marker_green.png','marker_orange.png','marker_red.png','marker_yellow.png','marker_cyan.png'];
    iconImgs.forEach(function(iconImg){
      self.markerIcons.push(L.icon({
        iconUrl: 'img/' + iconImg,
        iconSize: [23.25 , 39],
      }));
    });

    // if(self.isSend()){
      if(geo){
        geo.getCurrentPosition(function(geo){
          var coords  = geo.coords;
          self.createMap(coords.latitude,coords.longitude);
          for (var i = 0; i < 5; i++) {
            self.setMember({
              name: 'mem' + i,
              lat: coords.latitude,
              long: coords.longitude,
            });
          }
        });
      } else {
        alert( "あなたの端末では、現在位置を取得できません。" ) ;
      }
    // }


    setInterval(function(){
      if(self.isSend()){
        geo.getCurrentPosition(function(geo){
          var coords  = geo.coords;
          self.updateMap(coords.latitude,coords.longitude);
          self.send(coords.latitude,coords.longitude);
        });
      }
    },1009);

    datastore.on('send',function(sent){
      var value = sent.value;
      if( self.roomKey == value.roomKey && self.name != value.name){
        self.setMember(value);
        self.updateMember(value);
        console.log(self.members);
      }
    });
  }
});
