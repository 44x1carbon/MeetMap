function Stream2(t,r){this.stream=new Stream(t,r)}var Stream=require("./streaming");Stream2.prototype.sort=Stream.prototype.order=function(t){return this.stream.sort(t),this},Stream2.prototype.size=Stream.prototype.limit=function(t){return this.stream.size(t),this},Stream2.prototype.onData=function(t){this.stream.onData(t)},Stream2.prototype.onError=function(t){this.stream.onError(t)},Stream2.prototype.next=function(t){var r=this;return this.stream.next(function(e,o){null==e&&"DESC"==r.stream._sort?t(e,o.reverse()):t(e,o)}),this},Stream2.prototype.setTimestamp=function(t){return this.stream.setTimestamp(t),this},module.exports=Stream2;