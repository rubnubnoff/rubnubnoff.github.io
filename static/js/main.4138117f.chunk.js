(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,n){"use strict";n.r(t);n(75),n(125);var a=n(5),o=n.n(a),c=n(43),s=n.n(c),r=n(23),i=n.n(r),p=n(69),u=n(70),l=n(72),d=n(71),b=n(73),k=(n(151),n(170),n(171),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={events:[],token:""},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAccessTokenReceived":e.setState({token:t});break;case"vk-connect":console.log(t);break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{}),i.a.send("VKWebAppGetAuthToken",{app_id:7087022,scope:"messages"})}},{key:"render",value:function(){return o.a.createElement("div",null,JSON.stringify(this.state.token))}}]),t}(o.a.Component));i.a.send("VKWebAppInit",{}),s.a.render(o.a.createElement(k,null),document.getElementById("root"))},74:function(e,t,n){e.exports=n(176)}},[[74,1,2]]]);
//# sourceMappingURL=main.4138117f.chunk.js.map