(this.webpackJsonpchats=this.webpackJsonpchats||[]).push([[0],{142:function(e,t,a){e.exports=a(273)},273:function(e,t,a){"use strict";a.r(t);var r,n,s,c=a(0),l=a.n(c),o=a(24),u=a.n(o),i=a(76),m=a(77),h=a(140),p=a(135),b=a(279),g=a(274),d=(a(147),a(132)),f=a(138),y=a(278),E=a(275),M=a(276),O=a(277),j=y.a.Search,A=function(e){var t=E.a.useForm(),a=Object(f.a)(t,1)[0];return l.a.createElement(M.a,{title:"Chat #".concat(e.serialNumber)},l.a.createElement(O.b,{itemLayout:"horizontal",dataSource:e.chatMessages,renderItem:function(e){return l.a.createElement(O.b.Item,null,l.a.createElement(O.b.Item.Meta,{title:l.a.createElement("a",{href:"https://ant.design"},e.userName)}),e.text)}}),l.a.createElement(E.a,{form:a},l.a.createElement(E.a.Item,{name:"message"},l.a.createElement(j,{placeholder:"Type a message here",onSearch:function(t){e.entered(t,e.serialNumber),a.resetFields()},enterButton:"Send"}))))},w=b.a.Header,N=b.a.Footer,v=b.a.Content,x=Object(d.a)(r=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.chatMessages,t=Array.apply(null,Array(4)).map((function(t,a){return l.a.createElement(A,{entered:e.newMessageAddedHandler,chatMessages:e.chatMessagesAll,serialNumber:a+1,key:a})}));return l.a.createElement(b.a,null,l.a.createElement(w,null,"Welcome to chats!"),l.a.createElement(v,null,l.a.createElement(g.a,{direction:"vertical",style:{width:"100%"}},t)),l.a.createElement(N,null,"Footer here"))}}]),a}(l.a.Component))||r,I=a(137),k=a(133),F=a(96),S=(a(272),a(11)),C=new(n=function(){function e(){var t=this;Object(i.a)(this,e),Object(k.a)(this,"chatMessages",s,this),this.newMessageAddedHandler=function(e,a){t.chatMessages.push({userName:"user #".concat(a),text:e})}}return Object(m.a)(e,[{key:"chatMessagesAll",get:function(){return Object(I.a)(this.chatMessages)}}]),e}(),s=Object(F.a)(n.prototype,"chatMessages",[S.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{userName:"user #1",text:"Init message"},{userName:"user #3",text:"Another message"},{userName:"user #4",text:"Last message"}]}}),Object(F.a)(n.prototype,"chatMessagesAll",[S.f],Object.getOwnPropertyDescriptor(n.prototype,"chatMessagesAll"),n.prototype),n);u.a.render(l.a.createElement(x,{chatMessages:C}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.3ed4be2c.chunk.js.map