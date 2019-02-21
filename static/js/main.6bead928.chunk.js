(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(t,e,n){t.exports=n(78)},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(34),o=n.n(s),c=n(12),i=n(15),u=n(44),l=n(23),m=n(6),f=function t(){Object(m.a)(this,t)};f.randomArrayItem=function(t){return t[Math.floor(Math.random()*t.length)]},f.isNullEmptyOrUndefinded=function(t){return null===t||t===[]||void 0===t||0===t.length},f.arrayFromArrayRandomItems=function(t){return Array.from(t).filter(function(){return f.randomBoolean()})},f.randomBoolean=function(){return Math.random()>=.5},f.arrayContainsAllElementsFromAnother=function(t,e){return e.map(function(e){return t.some(function(t){return t===e})}).every(function(t){return t})};var h=f,p=function t(){Object(m.a)(this,t)};p.sortPostsByDateDesc=function(t){return t.sort(function(t,e){return new Date(e.date)-new Date(t.date)})},p.unwrapTagsFromPosts=function(t){var e=Array.from(t.map(function(t){return t.tags}).flat()),n=Array.from(new Set(e)),a=[];return n.forEach(function(t){return a.push({name:t,quantity:e.filter(function(e){return e===t}).length,state:!1})}),a},p.switchTagState=function(t,e){var n=e.find(function(e){return e.name===t});return n.state=!n.state,e},p.filterPostsBy=function(t,e){var n=e.tags,a=e.dates,r=e.searchValue,s=[],o=n.filter(function(t){return t.state}).map(function(t){return t.name});s=t.filter(function(t){return h.arrayContainsAllElementsFromAnother(t.tags,o)&&t.title.toLowerCase().includes(r.toLowerCase())});var c=a.filter(function(t){return t.yearState}).map(function(t){return t.year});0!==c.length&&(s=s.filter(function(t){return h.arrayContainsAllElementsFromAnother(c,[t.date.getFullYear()])}));var i=a.map(function(t){return t.months.map(function(e){return{year:t.year,month:e.name,state:e.state}}).flat()}).flat().filter(function(t){return t.state});return 0!==i.length&&(s=s.filter(function(t){return i.some(function(e){return e.year===t.date.getFullYear()})&&i.some(function(e){return e.month===p.monthNameFromDate(t.date)})})),s},p.unwrapDatesFromPosts=function(t){var e=Array.from(new Set(t.map(function(t){return t.date.getFullYear()}))),n=[];return e.forEach(function(e){return n.push({year:e,yearState:!1,months:Array.from(new Set(t.filter(function(t){return t.date.getFullYear()===e}).map(function(t){return p.monthNameFromDate(t.date)}))).map(function(n){return{name:n,quantity:p.postsQuantityByDate(t,n,e),state:!1}})})}),n},p.postsQuantityByDate=function(t,e,n){return t.filter(function(t){return t.date.getFullYear()===n&&p.monthNameFromDate(t.date)===e}).length},p.monthNameFromDate=function(t){return t.toLocaleString("en-us",{month:"long"})},p.switchDateState=function(t,e){if(void 0===t.month){var n=e.find(function(e){return e.year===t.year});n.yearState=!n.yearState,e.forEach(function(t){return t.months.forEach(function(t){return t.state=!1})})}else{var a=e.find(function(e){return e.year===t.year}).months.find(function(e){return e.name===t.month});a.state=!a.state,e.forEach(function(t){return t.yearState=!1})}return e};var d=p,y=Object(i.c)({tags:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UNWRAP_TAGS":return Object(l.a)(d.unwrapTagsFromPosts(e.posts));case"SWITCH_TAG":return Object(l.a)(d.switchTagState(e.tagName,t));default:return t}},dates:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UNWRAP_DATES":return Object(l.a)(d.unwrapDatesFromPosts(e.posts));case"SWITCH_DATE_STATE":return Object(l.a)(d.switchDateState(e.date,t));default:return t}},searchValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"HANDLE_SEARCH_INPUT":return e.value;default:return t}}}),E=Object(i.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_POSTS":return Object(l.a)(d.sortPostsByDateDesc(e.posts));default:return t}},filteredPosts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FILTER_POSTS":return Object(l.a)(d.filterPostsBy(e.posts,e.filters));default:return t}},filters:y}),g=function(t,e){return{type:"FILTER_POSTS",posts:t,filters:e}},v=n(7),b=n(10),O=n(8),j=n(9),w=n(45),S=n.n(w),T=n(46),A=n.n(T),C=function(){function t(e,n,a,r,s,o){Object(m.a)(this,t),this._id=e,this._title=n,this._text=a,this._author=r,this._date=s,this._tags=o}return Object(v.a)(t,[{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title}},{key:"text",get:function(){return this._text}},{key:"author",get:function(){return this._author}},{key:"date",get:function(){return this._date}},{key:"tags",get:function(){return this._tags}}]),t}(),N=function t(){var e=this;Object(m.a)(this,t),this._generate=function(t){for(var n=new S.a,a=0;a<t;a++)e._data.push(new C(A()(),n.sentence({words:10}),n.paragraph({sentences:20}),"twistezo",n.date({string:!1,american:!1,year:h.randomArrayItem([2017,2018,2019])}),h.arrayFromArrayRandomItems(e._tags)));return h.isNullEmptyOrUndefinded(e._data)?new Error("Generate data failed."):e._data},this.fetch=function(t){return new Promise(function(n,a){var r=e._generate(t);r instanceof Error?a(new Error("Error while fetching data. The data seems to be broken.")):n(r)})},this._data=[],this._tags=["#javascript","#css","#rust","#webpack","#cargo"]},P=n(85),k=n(83),_=n(84),D=n(79),F=n(48),I=function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(b.a)(this,(t=Object(O.a)(e)).call.apply(t,[this].concat(r)))).handleSearchFormInputChange=function(t){var e=t.target.value;n.props.handleSearchInput(e);var a=Object.assign({},n.props.filters);a.searchValue=e,n.props.filterPosts(n.props.posts,a)},n}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return r.a.createElement(_.a,{inline:!0},r.a.createElement(F.a,{className:"mr-sm-2",name:"search",type:"text",placeholder:"search by title",onChange:this.handleSearchFormInputChange}))}}]),e}(a.Component),x={filterPosts:g,handleSearchInput:function(t){return{type:"HANDLE_SEARCH_INPUT",value:t}}},B=Object(c.b)(function(t){return{posts:t.posts,filters:t.filters}},x)(I),L=function(t){function e(){return Object(m.a)(this,e),Object(b.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return r.a.createElement(P.a,{bg:"dark",variant:"dark",className:"sticky-top"},r.a.createElement(P.a.Brand,{href:"/"},"Blog"),r.a.createElement(k.a,{className:"mr-auto"}),r.a.createElement(B,null),r.a.createElement(_.a,{inline:!0,className:"pl-5"},r.a.createElement(D.a,{variant:"outline-info"},"Sign in")))}}]),e}(a.Component),R=n(80),W=n(82),H=n(49),M=function(t){function e(){return Object(m.a)(this,e),Object(b.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return r.a.createElement(R.a,{className:"AboutMe"},"AboutMe")}}]),e}(a.Component),U=n(86),G=n(81),Y=function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(b.a)(this,(t=Object(O.a)(e)).call.apply(t,[this].concat(s)))).onTagClick=function(t,e){n.props.switchTagState(e),n.props.filterPosts(n.props.posts,n.props.filters),t.preventDefault()},n.Tags=function(){var t=n.props.filters.tags;return t.length>0?t.map(function(t){return r.a.createElement(U.a.Link,{className:"mr-1",key:t.name,onClick:function(e){return n.onTagClick(e,t.name)}},t.name,r.a.createElement(G.a,{variant:"success",className:"ml-1"},t.quantity),r.a.createElement(G.a,{variant:"light",className:"ml-1"},t.state?"x":""))}):""},n}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return r.a.createElement(R.a,{className:"Tags"},r.a.createElement("div",null,"Tags:",r.a.createElement("p",{className:"d-flex flex-wrap"},r.a.createElement(this.Tags,null))))}}]),e}(a.Component),q={switchTagState:function(t){return{type:"SWITCH_TAG",tagName:t}},filterPosts:g},V=Object(c.b)(function(t){return{posts:t.posts,filters:t.filters}},q)(Y),J=function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(b.a)(this,(t=Object(O.a)(e)).call.apply(t,[this].concat(s)))).onDateClick=function(t,e,a){n.props.switchDateState({year:e,month:a}),n.props.filterPosts(n.props.posts,n.props.filters),t.preventDefault()},n.Dates=function(){var t=n.props.filters.dates;return t.length>0?t.map(function(t){return r.a.createElement("ul",{key:t.year,className:"list-unstyled"},r.a.createElement(U.a.Link,{onClick:function(e){return n.onDateClick(e,t.year)}},t.year,r.a.createElement(G.a,{variant:"light",className:"ml-1"},t.yearState?"x":"")),t.months.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(U.a.Link,{onClick:function(a){return n.onDateClick(a,t.year,e.name)}},e.name,r.a.createElement(G.a,{variant:"success",className:"ml-1"},e.quantity),r.a.createElement(G.a,{variant:"light",className:"ml-1"},e.state?"x":"")))}))}):""},n}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return r.a.createElement(R.a,{className:"Archives"},"Archive posts:",r.a.createElement(this.Dates,null))}}]),e}(a.Component),Q={filterPosts:g,switchDateState:function(t){return{type:"SWITCH_DATE_STATE",date:t}}},z=Object(c.b)(function(t){return{posts:t.posts,filters:t.filters}},Q)(J),$=function(t){function e(){return Object(m.a)(this,e),Object(b.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return r.a.createElement(R.a,{className:"SidePanel"},r.a.createElement(W.a,null,r.a.createElement(H.a,null,r.a.createElement(M,null))),r.a.createElement(W.a,null,r.a.createElement(H.a,null,r.a.createElement(V,null))),r.a.createElement(W.a,null,r.a.createElement(H.a,null,r.a.createElement(z,null))))}}]),e}(a.Component),K=function(t){function e(){return Object(m.a)(this,e),Object(b.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){var t=this.props.post;return r.a.createElement(R.a,{className:"PostCard mb-2"},r.a.createElement("p",null,"Id: ",t.id),r.a.createElement("p",null,"Title: ",t.title),r.a.createElement("p",null,"Author: ",t.author),r.a.createElement("p",null,"Date:",t.date.toLocaleString("pl-PL",{day:"numeric",month:"numeric",year:"numeric"})),r.a.createElement("p",null,"Tags: ",t.tags))}}]),e}(a.Component),X=function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(b.a)(this,(t=Object(O.a)(e)).call.apply(t,[this].concat(s)))).PostCards=function(){return n.props.filteredPosts.map(function(t){return r.a.createElement(K,{key:t.id,post:t})})},n.EmptyResult=function(){return r.a.createElement("div",{className:"text-center pt-5"},r.a.createElement("div",{className:"pb-2"},r.a.createElement("h2",null,"Nothing here...")))},n}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return r.a.createElement(R.a,{className:"PostsBoard"},0!==this.props.filteredPosts.length?r.a.createElement(this.PostCards,null):r.a.createElement(this.EmptyResult,null))}}]),e}(a.Component),Z=Object(c.b)(function(t){return{filteredPosts:t.filteredPosts}})(X),tt=function(t){function e(){var t;return Object(m.a)(this,e),(t=Object(b.a)(this,Object(O.a)(e).call(this))).ErrorContainer=function(){return r.a.createElement("div",{className:"text-center pt-5"},r.a.createElement("div",{className:"pb-2"},r.a.createElement("h2",null,"Error. Please reload the page."),r.a.createElement("h5",null,'Error message: "',t.state.error.message,'"')))},t.WaitContainer=function(){return r.a.createElement("div",{className:"text-center pt-5"},r.a.createElement("div",{className:"pb-2"},r.a.createElement("h2",null,"Downloading data...")))},t.MainContainer=function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(W.a,{className:"pt-5"},r.a.createElement(H.a,{xs:3},r.a.createElement($,null)),r.a.createElement(H.a,{xs:9},r.a.createElement(Z,null))))},t.state={error:{occured:!1,message:""}},t}return Object(j.a)(e,t),Object(v.a)(e,[{key:"componentDidMount",value:function(){var t=this;(new N).fetch(10).then(function(e){t.props.fetchPosts(e)}).then(function(){t.props.unwrapTags(t.props.posts),t.props.unwrapDates(t.props.posts)}).then(function(){t.props.filterPosts(t.props.posts,t.props.filters)}).catch(function(e){t.setState({error:{occured:!0,message:e.message}})})}},{key:"render",value:function(){return 0===this.props.posts.length||this.state.error.occured?this.state.error.occured?r.a.createElement(this.ErrorContainer,null):r.a.createElement(this.WaitContainer,null):r.a.createElement(this.MainContainer,null)}}]),e}(a.Component),et={fetchPosts:function(t){return{type:"FETCH_POSTS",posts:t}},filterPosts:g,unwrapTags:function(t){return{type:"UNWRAP_TAGS",posts:t}},unwrapDates:function(t){return{type:"UNWRAP_DATES",posts:t}}},nt=Object(c.b)(function(t){return{posts:t.posts,filters:t.filters}},et)(tt);n(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var at=Object(i.d)(E,Object(i.a)(u.a));window.store=at,o.a.render(r.a.createElement(c.a,{store:at},r.a.createElement(nt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.6bead928.chunk.js.map