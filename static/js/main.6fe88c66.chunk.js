(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(6),d=n.n(i),r=(n(13),n(8)),s=n(2),a=(n(14),n(15),n(0));var l=function(t){var e=t.addTodo,n=Object(o.useState)(" "),c=Object(s.a)(n,2),i=c[0],d=c[1];function r(){if(i.length<2)alert("Cannot add an empty task, please provide a valid input");else{var t={id:(Date.now()+Math.random()).toString(),title:i,isDone:!1};e(t),d(" ")}}return Object(a.jsxs)("div",{id:"todoForm",children:[Object(a.jsx)("input",{type:"text",id:"todoInput",value:i,required:!0,onKeyDown:function(t){13===t.keyCode&&r()},onChange:function(t){var e=t.target;d(e.value)}}),Object(a.jsx)("button",{onClick:r,className:"button_style",children:"  New todo"})]})},u=n(7);function j(t){var e=t.title,n=t.id,c=t.handleIsEdit,i=t.editTodo,d=Object(o.useState)(e),r=Object(s.a)(d,2),l=r[0],u=r[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{onChange:function(t){var e=t.target;u(e.value)},value:l}),Object(a.jsx)("button",{onClick:function(){c(!1),i(n,l)},children:"Submit changes"})]})}n(17);var b=function(t){var e=t.title,n=t.isDone,c=t.deleteTodo,i=t.id,d=t.completedTodo,r=t.editTodo,l=Object(o.useState)(!1),b=Object(s.a)(l,2),f=b[0],h=b[1];function O(t){h(t)}return Object(a.jsx)("div",{children:f?Object(a.jsx)(j,Object(u.a)({title:e,id:i,handleIsEdit:O,editTodo:r},"id",i)):Object(a.jsxs)("li",{className:"li_style ".concat(n?"checked-todo":"li_style"),children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return d(i)}}),Object(a.jsx)("p",{id:"p",children:e})]}),Object(a.jsxs)("div",{className:"delete_Btn",children:[Object(a.jsx)("button",{onClick:function(){return c(i)},children:"Delete"}),Object(a.jsx)("button",{onClick:function(t){return O(!0)},children:"Edit"})]})]})})};var f=function(t){var e=t.todos,n=t.deleteTodo,o=t.completedTodo,c=t.editTodo;return Object(a.jsx)("ul",{children:e.map((function(t,e){return Object(a.jsx)(b,{title:t.title,isDone:t.isDone,id:t.id,deleteTodo:n,completedTodo:o,editTodo:c},e)}))})};var h=function(){var t=Object(o.useState)(JSON.parse(localStorage.getItem("todos"))||[]),e=Object(s.a)(t,2),n=e[0],c=e[1];function i(t){localStorage.setItem("todos",JSON.stringify(t)),c(t)}return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h3",{className:"h_style",children:"To Do List App"}),Object(a.jsxs)("main",{children:[Object(a.jsxs)("div",{className:"form__div",children:[Object(a.jsx)("button",{id:"ClearAllBtn",onClick:function(){return alert("Are you sure you want to clear all of your todos?"),void i([])},children:"Clear all "}),Object(a.jsx)("button",{id:"ClearAllBtn",onClick:function(){return function(){var t=n;i(n.filter((function(t){return t.isDone}))),console.log(t)}()},children:"Done tasks "}),Object(a.jsx)(l,{placeholder:"passed using props",addTodo:function(t){i([t].concat(Object(r.a)(n)))}})]}),Object(a.jsx)(f,{todos:n,deleteTodo:function(t){i(n.filter((function(e){return e.id!==t})))},completedTodo:function(t){i(n.map((function(e){return e.id===t&&(e.isDone=!e.isDone),e})))},editTodo:function(t,e){i(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]}),Object(a.jsx)("footer",{children:"copyright @2021"})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,d=e.getTTFB;n(t),o(t),c(t),i(t),d(t)}))};d.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.6fe88c66.chunk.js.map