(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n(44)},24:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(9),r=n.n(c),i=(n(24),n(17)),l=n(2),d=n(3),s=n(6),u=n(4),m=n(7),h=function(t){var e=t.todos,n=t.deleteTodo,o=e.length?e.map(function(t){return a.a.createElement("div",{className:"collection-item",key:t.id,onClick:function(){n(t.id)}},t.content)}):a.a.createElement("p",{className:"center"},"You have no todos left for today! Yayy!");return a.a.createElement("div",{className:"todos collection"},o)},f=n(5),p=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={content:""},n.handleChange=function(t){n.setState({content:t.target.value})},n.handleSubmit=function(t){t.preventDefault(),n.state.content?(n.props.addTodo(n.state),n.setState({content:""})):f.NotificationManager.error("You didn't enter any todos!","Ooops!",5e3,function(){alert("callback")})},n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",null,"Add new Todo"),a.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),e}(o.Component),v=(n(42),function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{content:"Buy some milk",id:"1"},{content:"Buy some bread",id:"2"},{content:"Do my fucking assignments",id:"3"}]},n.deleteTodo=function(t){var e=n.state.todos.filter(function(e){return e.id!==t});n.setState({todos:e})},n.addTodo=function(t){t.id=Math.random();var e=[].concat(Object(i.a)(n.state.todos),[t]);n.setState({todos:e})},n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"todo-App container"},a.a.createElement(f.NotificationContainer,null),a.a.createElement("h1",{className:"center blue-text"},"Todo's"),a.a.createElement(h,{todos:this.state.todos,deleteTodo:this.deleteTodo}),a.a.createElement(p,{addTodo:this.addTodo}))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.f22540db.chunk.js.map