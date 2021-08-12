(this["webpackJsonpincora-task"]=this["webpackJsonpincora-task"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},189:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(20),r=c.n(a),o=(c(75),c(11)),i=(c(76),c(1)),u=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)(o.b,{to:"/",children:"Incora Task"})})},l=c(4),j=c(70),b=c(13),d=c(66).create({baseURL:"https://jsonplaceholder.typicode.com/",withCredentials:!0}),m=function(){return d.get("users/")},O=function(e){return d.get("posts?userId=".concat(e))},f=function(e){return d.post("posts",e)},h=function(e){return d.get("posts/".concat(e))},p=function(e){return d.get("/comments?postId=".concat(e))},x=function(e,t){return d.put("posts/".concat(e),t)},v=function(e){return d.delete("posts/".concat(e))},N="SET_USERS",y="SET_USER_POSTS",g="ADD_POST",S="SET_COMMENTS",k={users:[],userPosts:[],comments:[]},E=function(e){return{type:y,userPosts:e}},I=function(){return function(e){m().then((function(t){var c=t.data;e({type:N,users:c})}))}},P=function(e){return function(t){f(e).then((function(e){var c;console.log(e),t((c=e.data,{type:g,payload:c}))}))}},C=function(e){return function(t){p(e).then((function(e){var c=e.data;t(function(e){return{type:S,comments:e}}(c))}))}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case y:return Object(b.a)(Object(b.a)({},e),{},{userPosts:t.userPosts});case g:return Object(b.a)(Object(b.a)({},e),{},{userPosts:[].concat(Object(j.a)(e.userPosts),[t.payload])});case S:return Object(b.a)(Object(b.a)({},e),{},{comments:t.comments});default:return e}},T=(c(100),function(e){var t=e.id,c=e.name,n=e.email;return Object(i.jsxs)("div",{className:"user",children:[Object(i.jsx)("img",{src:"https://via.placeholder.com/300",alt:"user",className:"user-img"}),Object(i.jsx)("h3",{children:c}),Object(i.jsxs)("p",{children:["email: ",n]}),Object(i.jsx)(o.b,{to:"/posts/".concat(t),className:"btn-user",children:"Posts"})]})}),w=(c(101),function(){var e=Object(l.c)((function(e){return e.users})).users,t=Object(l.b)();return Object(n.useEffect)((function(){t(I())}),[t]),Object(i.jsx)("div",{className:"users",children:e.map((function(e){return Object(i.jsx)(T,{name:e.name,email:e.email,id:e.id},e.id)}))})}),D=s.a.memo(w),B=c(6),M=(c(102),function(e){var t=e.title,c=e.body,n=e.id;return Object(i.jsxs)("div",{className:"post",children:[Object(i.jsxs)("div",{className:"author",children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("div",{className:"btn-block",children:Object(i.jsx)(o.b,{to:"/post-details/".concat(n),className:"details-btn",children:"Details"})})]}),Object(i.jsx)("p",{className:"post-text",children:c})]})}),A=c(3),R=c(42),U=c.n(R),J=(c(112),function(e){var t=Object(n.useState)(""),c=Object(B.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),o=Object(B.a)(r,2),u=o[0],j=o[1],b=Object(n.useState)(!1),d=Object(B.a)(b,2),m=d[0],O=d[1],f=Object(n.useState)(!1),h=Object(B.a)(f,2),p=h[0],x=h[1],v=Object(n.useState)("Title can not be empty"),N=Object(B.a)(v,2),y=N[0],g=N[1],S=Object(n.useState)("Body can not be empty"),k=Object(B.a)(S,2),E=k[0],I=k[1],C=Object(n.useState)(!1),_=Object(B.a)(C,2),T=_[0],w=_[1],D=Object(l.b)();Object(n.useEffect)((function(){w(!y&&!E)}),[y,E]);var M=function(e){switch(e.target.name){case"title":O(!0);break;case"body":x(!0);break;default:return""}};return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),D(P({title:s,body:u})),e.closeModal(!1)},className:"modal-form",children:[Object(i.jsx)("p",{children:"Title:"}),m&&y&&Object(i.jsx)("div",{style:{color:"red"},children:y}),Object(i.jsx)("input",{type:"text",name:"title",onBlur:function(e){return M(e)},onChange:function(e){a(e.target.value),g(""===s?"fill in the title":"")},value:s,className:"input-form",placeholder:"text.."}),Object(i.jsx)("p",{children:"Your text:"}),p&&E&&Object(i.jsx)("div",{style:{color:"red"},children:E}),Object(i.jsx)("textarea",{name:"body",onBlur:function(e){return M(e)},value:u,onChange:function(e){j(e.target.value),I(""===u?"fill in the body":"")},className:"textarea-form"}),Object(i.jsx)("button",{disabled:!T,type:"submit",className:"btn-form",children:"Post"})]})});c(113);U.a.setAppElement("#root");var q=s.a.memo((function(e){var t=Object(n.useState)(!1),c=Object(B.a)(t,2),s=c[0],a=c[1],r=Object(l.c)((function(e){return e.users.userPosts})),o=Object(l.b)();return Object(n.useEffect)((function(){var t,c=e.match.params.itemId;console.log(c),o((t=c,function(e){O(t).then((function(t){var c=t.data;e(E(c))}))}))}),[o,e.match.params.itemId]),console.log(r),Object(i.jsxs)("div",{className:"posts",children:[Object(i.jsxs)("div",{className:"user-post",children:[Object(i.jsx)("h3",{children:"All User Posts"}),Object(i.jsx)("button",{type:"button",className:"add-post-btn",onClick:function(){return a(!0)},children:"Add New Post"})]}),r.map((function(e){return Object(i.jsx)(M,{id:e.id,userId:e.userId,title:e.title,body:e.body},e.id)})),Object(i.jsxs)(U.a,{isOpen:s,onRequestClose:function(){return a(!1)},className:"modal",preventScroll:!0,overlayClassName:"overlay",children:[Object(i.jsxs)("div",{className:"modal-title",children:[Object(i.jsx)("h2",{children:"New post"}),Object(i.jsx)("span",{onClick:function(){return a(!1)},children:"\u2716"})]}),Object(i.jsx)(J,{closeModal:a})]})]})})),L=Object(A.f)(q),Y=(c(36),function(e){var t=e.name,c=e.email,n=e.body;return Object(i.jsxs)("div",{className:"comments__item",children:[Object(i.jsx)("h3",{children:t}),Object(i.jsxs)("span",{children:["email: ",c]}),Object(i.jsx)("p",{children:n})]})}),z=Object(A.f)((function(e){var t=Object(l.c)((function(e){return e.users})).comments,c=Object(l.b)();return Object(n.useEffect)((function(){var t=e.match.params.postId;console.log(t),c(C(t))}),[c,e.match.params.postId]),Object(i.jsx)("div",{className:"comments",children:t.map((function(e){return Object(i.jsx)(Y,{name:e.name,email:e.email,body:e.body},e.id)}))})})),F=Object(A.f)((function(e){var t=Object(l.c)((function(e){return e.users.userPosts})),c=t.title,s=t.body,a=t.id,r=Object(n.useState)(!1),o=Object(B.a)(r,2),u=o[0],j=o[1],b=Object(n.useState)(c),d=Object(B.a)(b,2),m=d[0],O=d[1],f=Object(n.useState)(s),p=Object(B.a)(f,2),N=p[0],y=p[1],g=Object(l.b)();Object(n.useEffect)((function(){var t=e.match.params.postId;console.log(t),g(function(e){return function(t){h(e).then((function(e){console.log(e),t(E(e.data))}))}}(t))}),[g,e.match.params.postId]);return Object(i.jsxs)("div",{className:"post-details",children:[!u&&Object(i.jsxs)("div",{className:"post",children:[Object(i.jsxs)("div",{className:"author",children:[Object(i.jsx)("h3",{children:c}),Object(i.jsxs)("div",{className:"btn__block",children:[Object(i.jsx)("button",{className:"edit-btn",onClick:function(){j(!0)},children:"Edit"}),Object(i.jsx)("button",{className:"delete-btn",onClick:function(){var t;g((t=a,function(e){v(t).then((function(t){console.log(t),e(E([]))}))})),setTimeout((function(){e.history.push("/")}),2e3)},children:"Delete"})]})]}),Object(i.jsx)("p",{className:"post-text",children:s})]}),u&&Object(i.jsxs)("form",{onSubmit:function(e){var t,c;e.preventDefault(),g((t=a,c={title:m,body:N},function(e){x(t,c).then((function(t){console.log(t),e(E(c))}))})),j(!1)},className:"post",children:[Object(i.jsxs)("div",{className:"author",children:[Object(i.jsx)("input",{type:"text",name:"title",value:m||c,className:"input-form",placeholder:"title",onChange:function(e){return O(e.target.value)}}),Object(i.jsx)("div",{className:"btn__block",children:Object(i.jsx)("button",{className:"edit-btn",type:"submit",children:"Save"})})]}),Object(i.jsx)("textarea",{name:"editBody",value:N||s,className:"textarea-form edit-textarea",placeholder:"text",onChange:function(e){return y(e.target.value)}})]}),Object(i.jsx)(z,{})]})})),G=(c(114),function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(u,{}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)(A.c,{children:[Object(i.jsx)(A.a,{exact:!0,path:"/",component:D}),Object(i.jsx)(A.a,{path:"/posts/:itemId?",render:function(){return Object(i.jsx)(L,{})}}),Object(i.jsx)(A.a,{path:"/post-details/:postId?",render:function(){return Object(i.jsx)(F,{})}})]})})]})}),H=c(32),K=c(67),Q=c(191),V=Object(H.b)({users:_,form:Q.a}),W=Object(H.c)(V,Object(H.a)(K.a));r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(l.a,{store:W,children:Object(i.jsx)(o.a,{basename:"/incora-task",children:Object(i.jsx)(G,{})})})}),document.getElementById("root"))},36:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){}},[[189,1,2]]]);
//# sourceMappingURL=main.5dddd8f6.chunk.js.map