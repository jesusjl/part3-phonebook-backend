(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var o=t(17),c=t.n(o),r=t(8),a=t(3),u=t(1),i=t(0),s=function(e){var n=e.value,t=e.onChange;return Object(i.jsxs)("div",{children:["filter show with",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.valueName,onChange:e.onChangePerson})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:e.valuePhone,onChange:e.onChangePhone})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"Add"})})]})})},d=function(e){var n=e.person,t=e.onClick;return Object(i.jsxs)("div",{children:[n.name," ",n.number," ",Object(i.jsx)("button",{onClick:t,children:"delete"})]})},b=function(e){var n=e.message;return console.log(n),null===n?null:Object(i.jsx)("div",{className:"success",children:n})},j=function(e){var n=e.message;return console.log(n),null===n?null:Object(i.jsx)("div",{className:"error",children:n})},f=t(4),h=t.n(f),m="/api/persons",O=function(){return h.a.get(m).then((function(e){return e.data}))},v=function(e){return h.a.post(m,e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},g=function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},x=(t(41),function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],c=Object(u.useState)(""),f=Object(a.a)(c,2),h=f[0],m=f[1],x=Object(u.useState)(""),C=Object(a.a)(x,2),k=C[0],w=C[1],P=Object(u.useState)(""),S=Object(a.a)(P,2),y=S[0],N=S[1],T=Object(u.useState)(null),A=Object(a.a)(T,2),E=A[0],U=A[1],J=Object(u.useState)(null),B=Object(a.a)(J,2),D=B[0],I=B[1];Object(u.useEffect)((function(){O().then((function(e){o(e)}))}),[]);var R=""===y?t:t.filter((function(e){return e.name.toUpperCase().startsWith(y.toUpperCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(b,{message:E}),Object(i.jsx)(j,{message:D}),Object(i.jsx)(s,{value:y,onChange:function(e){N(e.target.value)}}),Object(i.jsx)(l,{onSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name===h&e.number===k})))alert("".concat(h," is already added to phonebook"));else if(t.find((function(e){return e.name===h&e.number!==k}))){var n=t.find((function(e){return e.name===h&e.number!==k}));console.log(n);var c=window.confirm("".concat(n.name," is already added to the notebook, replace the old number with a new one?"));if(console.log(c),c){console.log("Response",c);var a=Object(r.a)(Object(r.a)({},n),{},{number:k});console.log("changedPersonPhone",a),g(a.id,a).then((function(e){console.log("returnedPerson",e),o(t.map((function(n){return n.id!==e.id?n:e}))),U("Updated '".concat(a.name,"' phone to '").concat(a.number,"'")),setTimeout((function(){U(null)}),5e3)})).catch((function(e){I(e.response.data.error),setTimeout((function(){I(null)}),5e3)}))}}else{v({name:h,number:k}).then((function(e){o(t.concat(e)),w(""),m(""),U("Added '".concat(e.name,"'")),setTimeout((function(){U(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),I(e.response.data.error),setTimeout((function(){I(null)}),5e3)}))}},valueName:h,onChangePerson:function(e){m(e.target.value)},valuePhone:k,onChangePhone:function(e){w(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),R.map((function(e){return Object(i.jsx)(d,{person:e,onClick:function(){return n=e.id,void(window.confirm("Are you sure?")&&p(n).then((function(e){o(t.filter((function(e){return e.id!==n})))})).catch((function(e){I("Error: the person has already been deleted from the database",e.message),o(t.filter((function(e){return e.id!==n}))),setTimeout((function(){I(null)}),5e3)})));var n}},e.id)}))]})});c.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8117d68a.chunk.js.map