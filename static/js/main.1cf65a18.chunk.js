(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,t,a){e.exports=a(80)},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),s=a.n(l),c=a(13),o=a(22),i=a(46),u=a(18),m=a(21),p=a(6),h=function e(){Object(p.a)(this,e)};h.randomArrayItem=function(e){return e[Math.floor(Math.random()*e.length)]},h.isNullEmptyOrUndefinded=function(e){return null===e||e===[]||void 0===e||0===e.length},h.arrayFromArrayRandomItems=function(e){var t=Array.from(e).filter(function(){return h.randomBoolean()});return 0===t.length?[e[0]]:t},h.randomBoolean=function(){return Math.random()>=.5},h.arrayContainsAllElementsFromAnother=function(e,t){return t.map(function(t){return e.some(function(e){return e===t})}).every(function(e){return e})};var d=h,f=function e(){Object(p.a)(this,e)};f.sortPostsByDateDesc=function(e){return e.sort(function(e,t){return new Date(t.date)-new Date(e.date)})},f.unwrapTagsFromPosts=function(e){var t=Array.from(e.map(function(e){return e.tags}).flat()),a=Array.from(new Set(t)),n=[];return a.forEach(function(e){return n.push({name:e,quantity:t.filter(function(t){return t===e}).length,state:!1})}),n},f.switchTagState=function(e,t){var a=t.find(function(t){return t.name===e});return a.state=!a.state,t},f.filterPostsBy=function(e,t){var a=t.tags,n=t.dates,r=t.searchValue,l=[],s=a.filter(function(e){return e.state}).map(function(e){return e.name});l=e.filter(function(e){return d.arrayContainsAllElementsFromAnother(e.tags,s)&&e.title.toLowerCase().includes(r.toLowerCase())});var c=n.filter(function(e){return e.yearState}).map(function(e){return e.year});0!==c.length&&(l=l.filter(function(e){return d.arrayContainsAllElementsFromAnother(c,[e.date.getFullYear()])}));var o=n.map(function(e){return e.months.map(function(t){return{year:e.year,month:t.name,state:t.state}}).flat()}).flat().filter(function(e){return e.state});return 0!==o.length&&(l=l.filter(function(e){return o.some(function(t){return t.year===e.date.getFullYear()})&&o.some(function(t){return t.month===f.monthNameFromDate(e.date)})})),f.sortPostsByDateDesc(l)},f.unwrapDatesFromPosts=function(e){var t=Array.from(new Set(e.map(function(e){return e.date.getFullYear()}))),a=[];return t.forEach(function(t){return a.push({year:t,yearState:!1,months:Array.from(new Set(e.filter(function(e){return e.date.getFullYear()===t}).map(function(e){return f.monthNameFromDate(e.date)}))).map(function(a){return{name:a,quantity:f.postsQuantityByDate(e,a,t),state:!1}})})}),a},f.postsQuantityByDate=function(e,t,a){return e.filter(function(e){return e.date.getFullYear()===a&&f.monthNameFromDate(e.date)===t}).length},f.monthNameFromDate=function(e){return e.toLocaleString("en-us",{month:"long"})},f.switchDateState=function(e,t){if(void 0===e.month){var a=t.find(function(t){return t.year===e.year});a.yearState=!a.yearState,t.forEach(function(e){return e.months.forEach(function(e){return e.state=!1})})}else{var n=t.find(function(t){return t.year===e.year}).months.find(function(t){return t.name===e.month});n.state=!n.state,t.forEach(function(e){return e.yearState=!1})}return t},f.resetFilters=function(e){var t=Object.assign({},e);return t.tags.forEach(function(e){return e.state=!1}),t.dates.forEach(function(e){return e.yearState=!1}),t.dates.forEach(function(e){return e.months.forEach(function(e){return e.state=!1})}),t.searchValue="",t};var E=f,b={tags:[],dates:[],searchValue:""},y=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return Object(m.a)(E.sortPostsByDateDesc(t.posts));case"ADD_POST":return[].concat(Object(m.a)(e),[t.post]);default:return e}},filteredPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_POSTS":return Object(m.a)(E.filterPostsBy(t.posts,t.filters));default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UNWRAP_TAGS":return Object(u.a)({},e,{tags:Object(m.a)(E.unwrapTagsFromPosts(t.posts))});case"SWITCH_TAG":return Object(u.a)({},e,{tags:Object(m.a)(E.switchTagState(t.tagName,e.tags))});case"UNWRAP_DATES":return Object(u.a)({},e,{dates:Object(m.a)(E.unwrapDatesFromPosts(t.posts))});case"SWITCH_DATE_STATE":return Object(u.a)({},e,{dates:Object(m.a)(E.switchDateState(t.date,e.dates))});case"HANDLE_SEARCH_INPUT":return Object(u.a)({},e,{searchValue:t.value});case"RESET_FILTERS":return E.resetFilters(t.filters);default:return e}}}),g=function(e,t){return{type:"FILTER_POSTS",posts:e,filters:t}},v=function(e){return{type:"UNWRAP_TAGS",posts:e}},O=function(e){return{type:"UNWRAP_DATES",posts:e}},j=a(8),w=a(11),C=a(9),P=a(10),N=a(88),k=a(91),T=a(89),_=a(47),S=a.n(_),x=a(28),D=a.n(x),A=a(29),I=a.n(A),F=function(){function e(t,a,n,r,l,s,c,o){Object(p.a)(this,e),this._id=t,this._title=a,this._shortDescription=n,this._text=r,this._author=l,this._date=s,this._tags=c,this._mainImage=o}return Object(j.a)(e,[{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title}},{key:"shortDescription",get:function(){return this._shortDescription}},{key:"text",get:function(){return this._text}},{key:"author",get:function(){return this._author}},{key:"date",get:function(){return this._date}},{key:"tags",get:function(){return this._tags}},{key:"mainImage",get:function(){return this._mainImage}}]),e}(),H=function e(){var t=this;Object(p.a)(this,e),this._generate=function(e){for(var a=0;a<e;a++)t._data.push(new F(D()(),t._chance.sentence({words:6}),t._chance.paragraph({sentences:3}),t._generateHtmlText(),"twistezo",t._chance.date({string:!1,american:!1,year:d.randomArrayItem([2016,2017,2018])}),d.arrayFromArrayRandomItems(t._tags),"https://avatars.dicebear.com/v2/identicon/"+t._chance.word({length:15})+".svg"));return d.isNullEmptyOrUndefinded(t._data)?new Error("Generate data failed."):t._data},this._generateHtmlText=function(){return t._mdToHtmlConverter.makeHtml("###"+t._chance.sentence({words:6})+"\n"+t._chance.paragraph({sentences:10})+"\n\n![Alt Text](https://avatars.dicebear.com/v2/identicon/"+t._chance.word({length:15})+".svg =200x200)\n\nPhoto: *"+t._chance.sentence({words:6})+"*\n\nVisit: <http://www.example.com>\n\n###"+t._chance.sentence({words:6})+"\n"+t._chance.paragraph({sentences:5})+"\n\n        ```\n        static arrayContainsAllElementsFromAnother = (array0, array1) =>\n          array1\n            .map(a => {\n              return array0.some(b => {\n                return b === a;\n              });\n            })\n            .every(e => e);\n        ```\n        ")},this.fetch=function(e){return new Promise(function(a,n){var r=t._generate(e);r instanceof Error?n(new Error("Error while fetching data. The data seems to be broken.")):a(r)})},this._data=[],this._tags=["#javascript","#css","#rust","#webpack","#cargo"],this._chance=new S.a,this._mdToHtmlConverter=new I.a.Converter({noHeaderId:!0})},L=a(81),R=a(86),U=a(82),B=a(87),M=a(90),W=a(49),q=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).handleSearchFormInputChange=function(e){var t=e.target.value;a.props.handleSearchInput(t);var n=Object.assign({},a.props.filters);n.searchValue=t,a.props.filterPosts(a.props.posts,n)},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(B.a,{inline:!0},r.a.createElement(L.a,{to:Ce.publicURL+"/search"},r.a.createElement(W.a,{className:"mr-sm-2",name:"search",type:"text",value:this.props.filters.searchValue,placeholder:"search",onChange:this.handleSearchFormInputChange})),r.a.createElement("i",{className:"fas fa-search"}))}}]),t}(n.Component),G={filterPosts:g,handleSearchInput:function(e){return{type:"HANDLE_SEARCH_INPUT",value:e}}},V=Object(c.b)(function(e){return{posts:e.posts,filters:e.filters}},G)(q),Y=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).handleLogoClick=function(){a.props.resetFilters(a.props.filters),a.props.filterPosts(a.props.posts,{tags:[],dates:[],searchValue:""})},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(R.a,{bg:"dark",variant:"dark",className:"sticky-top text-center"},r.a.createElement(U.a,null,r.a.createElement(L.a,{to:Ce.publicURL+"/",onClick:this.handleLogoClick},r.a.createElement(R.a.Brand,{className:"ml-4"},"Home")),r.a.createElement(V,null),r.a.createElement(B.a,{inline:!0},r.a.createElement(L.a,{to:Ce.publicURL+"/addpost"},r.a.createElement(M.a,{variant:"outline-info mr-4"},"Add Post")),r.a.createElement(M.a,{variant:"outline-info mr-4"},"Sign in"))))}}]),t}(n.Component),z={resetFilters:function(e){return{type:"RESET_FILTERS",filters:e}},filterPosts:g},J=Object(c.b)(function(e){return{posts:e.posts,filters:e.filters}},z)(Y),Q=a(84),$=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement("h4",null,"About Me"))}}]),t}(n.Component),K=a(83),X=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(l)))).onTagClick=function(e,t){a.props.switchTagState(t),a.props.filterPosts(a.props.posts,a.props.filters),e.preventDefault()},a.Tags=function(){var e=a.props.filters.tags;return e.length>0?e.map(function(e){return r.a.createElement("div",{className:"mr-2 alert-link",key:e.name,onClick:function(t){return a.onTagClick(t,e.name)}},r.a.createElement(L.a,{to:Ce.publicURL+"/search"},e.name,e.state?r.a.createElement("i",{className:"far fa-check-square ml-2"}):r.a.createElement(K.a,{variant:"secondary",className:"ml-2"},e.quantity)))}):""},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement("div",null,r.a.createElement("h4",null,"Tags"),r.a.createElement("span",{className:"d-flex flex-wrap"},r.a.createElement(this.Tags,null))))}}]),t}(n.Component),Z={switchTagState:function(e){return{type:"SWITCH_TAG",tagName:e}},filterPosts:g},ee=Object(c.b)(function(e){return{posts:e.posts,filters:e.filters}},Z)(X),te=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(l)))).onDateClick=function(e,t,n){a.props.switchDateState({year:t,month:n}),a.props.filterPosts(a.props.posts,a.props.filters),e.preventDefault()},a.Dates=function(){var e=a.props.filters.dates;return e.length>0?e.map(function(e){return r.a.createElement("ul",{key:e.year,className:"list-unstyled"},r.a.createElement("div",{className:"alert-link",onClick:function(t){return a.onDateClick(t,e.year)}},r.a.createElement(L.a,{to:Ce.publicURL+"/search"},e.year,e.yearState?r.a.createElement("i",{className:"far fa-check-square ml-2"}):"")),e.months.map(function(t){return r.a.createElement("li",{key:t.name},r.a.createElement("div",{className:"alert-link",onClick:function(n){return a.onDateClick(n,e.year,t.name)}},r.a.createElement(L.a,{to:Ce.publicURL+"/search"},t.name,t.state?r.a.createElement("i",{className:"far fa-check-square ml-2"}):r.a.createElement(K.a,{variant:"secondary",className:"ml-2"},t.quantity))))}))}):""},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement("h4",null,"Archive posts"),r.a.createElement(this.Dates,null))}}]),t}(n.Component),ae={filterPosts:g,switchDateState:function(e){return{type:"SWITCH_DATE_STATE",date:e}}},ne=Object(c.b)(function(e){return{posts:e.posts,filters:e.filters}},ae)(te),re=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(Q.a,{className:"pb-2"},r.a.createElement($,null)),r.a.createElement(Q.a,{className:"pb-2"},r.a.createElement(ee,null)),r.a.createElement(Q.a,{className:"pb-2"},r.a.createElement(ne,null)))}}]),t}(n.Component),le=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.post,t=Ce.publicURL+"/post/id-"+e.id;return r.a.createElement(U.a,{className:"mb-2"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-3 d-flex flex-wrap align-items-center"},r.a.createElement(L.a,{to:t},r.a.createElement("img",{src:e.mainImage,className:"card-img pl-3",alt:""}))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"card-body"},r.a.createElement(L.a,{to:t},r.a.createElement("h5",{className:"card-title"},e.title)),r.a.createElement("p",{className:"card-text"},e.shortDescription.substring(0,150)+"..."),r.a.createElement("span",{className:"card-text"},r.a.createElement("p",{className:"text-muted mb-0"},e.author+", "+e.date.toLocaleString("pl-PL",{day:"numeric",month:"numeric",year:"numeric"})),r.a.createElement("p",{className:"text-muted mb-0"},e.tags.map(function(e){return r.a.createElement("span",{key:e,className:"pr-2"},e)}))))))))}}]),t}(n.Component),se=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(l)))).PostCards=function(){return a.props.filteredPosts.map(function(e){return r.a.createElement(le,{key:e.id,post:e})})},a.EmptyResult=function(){return r.a.createElement("div",{className:"text-center pt-5"},r.a.createElement("div",{className:"pb-2"},r.a.createElement("h2",null,"Nothing here...")))},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,0!==this.props.filteredPosts.length?r.a.createElement(this.PostCards,null):r.a.createElement(this.EmptyResult,null))}}]),t}(n.Component),ce=Object(c.b)(function(e){return{filteredPosts:e.filteredPosts}})(se),oe=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.post,t=Ce.publicURL+"/post/id-"+e.id;return r.a.createElement("div",{className:"card"},r.a.createElement(L.a,{to:t},r.a.createElement("img",{src:e.mainImage,className:"card-img-top pt-3",alt:""})),r.a.createElement("div",{className:"card-body"},r.a.createElement(L.a,{to:t},r.a.createElement("h4",{className:"card-title"},e.title))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("p",{className:"text-muted mb-0"},e.author+", "+e.date.toLocaleString("pl-PL",{day:"numeric",month:"numeric",year:"numeric"})),r.a.createElement("p",{className:"text-muted mb-0"},e.tags.map(function(e){return r.a.createElement("span",{key:e,className:"pr-2"},e)}))))}}]),t}(n.Component),ie=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(l)))).HeadPosts=function(){var e=a.props.filteredPosts.slice(0,t.headPostsNum).map(function(e){return r.a.createElement(oe,{key:e.id,post:e})});return r.a.createElement("div",{className:"card-deck"},e)},a.PostCards=function(){return a.props.filteredPosts.slice(t.headPostsNum).map(function(e){return r.a.createElement(le,{key:e.id,post:e})})},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement("h4",null,"Latest posts"),r.a.createElement(this.HeadPosts,null),r.a.createElement("hr",null),r.a.createElement(this.PostCards,null))}}]),t}(n.Component);ie.headPostsNum=2;var ue=ie,me=Object(c.b)(function(e){return{filteredPosts:e.filteredPosts}})(ue),pe=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(l)))).PostContainer=function(){var e=a.props.posts.find(function(e){return e.id===a.props.routeParamId});return r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.shortDescription),r.a.createElement("div",{className:"content pt-3",dangerouslySetInnerHTML:{__html:e.text}}))},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(this.PostContainer,null))}}]),t}(n.Component),he=Object(c.b)(function(e){return{posts:e.posts}})(pe),de=a(27),fe=a(50),Ee="#### Paragraph one\n**Lorem ipsum dolor sit amet**, consectetur *adipiscing* elit. `Nunc ligula` nisi. \n\n![Alt Text](https://avatars.dicebear.com/v2/identicon/test.svg =100x100)\n\nPhoto: *description*\n\nVisit: <http://www.example.com>  \n\n#### Paragraph two\nSome unordered list:\n* item 1\n* item 2\n* item 3\n\nSome code:\n```\nstatic arrayContainsAllElementsFromAnother = (array0, array1) =>\n  array1\n    .map(a => {\n      return array0.some(b => {\n        return b === a;\n      });\n    })\n    .every(e => e);\n```\n",be=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pt-3"},r.a.createElement("h4",null,"Live preview"),r.a.createElement("hr",null),r.a.createElement("h1",null,this.props.title),r.a.createElement("p",null,this.props.shortDescription),r.a.createElement("div",{className:"content pt-3",dangerouslySetInnerHTML:{__html:this.props.parsedText}}))}}]),t}(n.Component),ye=a(85),ge=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pt-4"},r.a.createElement("h4",null,"Formatting options (only in Post body)"),r.a.createElement(ye.a,{bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Usage"),r.a.createElement("th",null,"Example"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"### header h3"),r.a.createElement("td",null,r.a.createElement("h3",null,"header h3"))),r.a.createElement("tr",null,r.a.createElement("td",null,"#### header h4"),r.a.createElement("td",null,r.a.createElement("h4",null,"header h4"))),r.a.createElement("tr",null,r.a.createElement("td",null,"*italics*"),r.a.createElement("td",null,r.a.createElement("em",null,"italics"))),r.a.createElement("tr",null,r.a.createElement("td",null,"**bold**"),r.a.createElement("td",null,r.a.createElement("strong",null,"bold"))),r.a.createElement("tr",null,r.a.createElement("td",null,"`code`"),r.a.createElement("td",null,r.a.createElement("code",null,"code"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"```"),r.a.createElement("p",null,"randomArrayItem = array..."),r.a.createElement("p",null,"array[Math.floor..."),r.a.createElement("p",null,"```")),r.a.createElement("td",null,r.a.createElement("pre",null,r.a.createElement("code",null,r.a.createElement("p",null,"randomArrayItem = array =>"),r.a.createElement("p",null,"\xa0\xa0array[Math.floor(Math.random() * array.length)];"))))),r.a.createElement("tr",null,r.a.createElement("td",null,"![alt text](url = 30x30)"),r.a.createElement("td",null,r.a.createElement("img",{alt:"Alt Text",src:"https://avatars.dicebear.com/v2/identicon/test.svg",width:"30",height:"30"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"<http://www.example.com>"),r.a.createElement("td",null,r.a.createElement("a",{href:"http://www.example.com"},"http://www.example.com"))))))}}]),t}(n.Component),ve=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).handleShowFormattingHelp=function(){var e=a.state.controllers.showFormattingHelp;a.setState(Object(u.a)({},a.state,{controllers:{showFormattingHelp:!e}}))},a.handlePasteExample=function(){var e=!a.state.controllers.shouldClearPastedExample,t=e?"Example title":"",n=e?"Example short description":"",r=e?Ee:"";a.setState(Object(u.a)({},a.state,{formInput:{title:t,shortDescription:n,text:r},parsedText:a.mdToHtmlConverter.makeHtml(r),controllers:Object(u.a)({},a.state.controllers,{shouldClearPastedExample:e})}))},a.handleInputChange=function(e){var t=e.target.value,n="text"===e.target.name?a.mdToHtmlConverter.makeHtml(t):[];a.setState(Object(u.a)({},a.state,{formInput:Object(u.a)({},a.state.formInput,Object(de.a)({},e.target.name,t)),parsedText:n}))},a.handleAddPost=function(){a.props.addPost(new F(D()(),a.state.formInput.title,a.state.formInput.shortDescription,a.state.parsedText,"twistezo",new Date,["#rust","#javascript","#linux"],"https://avatars.dicebear.com/v2/identicon/test.svg"))},a.Form=function(){return r.a.createElement("div",{className:"pt-4"},r.a.createElement("h4",null,"Create your post!"),r.a.createElement("hr",null),r.a.createElement(B.a,{className:"pt-2"},r.a.createElement(B.a.Group,null,r.a.createElement(B.a.Control,{name:"title",value:a.state.formInput.title,type:"text",placeholder:"Post title",required:!0,maxLength:"30",onChange:a.handleInputChange})),r.a.createElement(B.a.Group,null,r.a.createElement(B.a.Control,{name:"shortDescription",as:"textarea",value:a.state.formInput.shortDescription,placeholder:"Short description",required:!0,rows:"3",onChange:a.handleInputChange})),r.a.createElement(B.a.Group,null,r.a.createElement(B.a.Control,{name:"text",as:"textarea",value:a.state.formInput.text,placeholder:"Post body",rows:"10",required:!0,onChange:a.handleInputChange})),r.a.createElement(B.a.Group,null,r.a.createElement(M.a,{onClick:a.handleAddPost},"Add"))))},a.Helper=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Need a little help?"),r.a.createElement("hr",null),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{className:"pt-2"},r.a.createElement("span",null,"Formatting options:"),r.a.createElement(M.a,{className:"ml-2",onClick:a.handleShowFormattingHelp},a.state.controllers.showFormattingHelp?"Hide":"Show")),r.a.createElement(Q.a,{className:"pt-2"},r.a.createElement("span",null,"Example post:"),r.a.createElement(M.a,{className:"ml-2",onClick:a.handlePasteExample},a.state.controllers.shouldClearPastedExample?"Clear":"Paste"))))},a.state={formInput:{title:"",shortDescription:"",text:""},parsedText:[],controllers:{showFormattingHelp:!1,shouldClearPastedExample:!1}},a.mdToHtmlConverter=new I.a.Converter({noHeaderId:!0}),a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.posts!==e.posts&&(this.props.unwrapTags(this.props.posts),this.props.unwrapDates(this.props.posts),this.props.filterPosts(this.props.posts,this.props.filters))}},{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(this.Helper,null),this.state.controllers.showFormattingHelp&&r.a.createElement(ge,null),r.a.createElement(this.Form,null),r.a.createElement(be,{title:this.state.formInput.title,shortDescription:this.state.formInput.shortDescription,parsedText:this.state.parsedText}))}}]),t}(n.Component),Oe={addPost:function(e){return{type:"ADD_POST",post:e}},filterPosts:g,unwrapTags:v,unwrapDates:O},je=Object(c.b)(function(e){return{posts:e.posts,filters:e.filters}},Oe)(ve),we=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(w.a)(this,Object(C.a)(t).call(this))).ErrorContainer=function(){return r.a.createElement("div",{className:"text-center pt-5"},r.a.createElement("div",{className:"pb-2"},r.a.createElement("h2",null,"Error. Please reload the page."),r.a.createElement("h5",null,'Error message: "',e.state.error.message,'"')))},e.WaitContainer=function(){return r.a.createElement("div",{className:"text-center pt-5"},r.a.createElement("div",{className:"pb-2"},r.a.createElement("h2",null,"Downloading data...")))},e.MainContainer=function(){return r.a.createElement(N.a,null,r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(U.a,null,r.a.createElement(Q.a,{className:"pt-5"},r.a.createElement(fe.a,{sm:3},r.a.createElement(re,null)),r.a.createElement(fe.a,{sm:9},r.a.createElement(k.a,null,r.a.createElement(T.a,{exact:!0,path:t.publicURL+"/",component:me}),r.a.createElement(T.a,{path:t.publicURL+"/search",component:ce}),r.a.createElement(T.a,{path:t.publicURL+"/post/id-:id",component:function(e){return r.a.createElement(he,{routeParamId:e.match.params.id})}}),r.a.createElement(T.a,{path:t.publicURL+"/addpost",component:je})))))))},e.state={error:{occured:!1,message:""}},e}return Object(P.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new H).fetch(10).then(function(t){e.props.fetchPosts(t)}).then(function(){e.props.unwrapTags(e.props.posts),e.props.unwrapDates(e.props.posts)}).then(function(){e.props.filterPosts(e.props.posts,e.props.filters)}).catch(function(t){e.setState({error:{occured:!0,message:t.message}})})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return 0===this.props.posts.length||this.state.error.occured?this.state.error.occured?r.a.createElement(this.ErrorContainer,null):r.a.createElement(this.WaitContainer,null):r.a.createElement(this.MainContainer,null)}}]),t}(n.Component);we.publicURL="/react-redux-blog";var Ce=we,Pe={fetchPosts:function(e){return{type:"FETCH_POSTS",posts:e}},filterPosts:g,unwrapTags:v,unwrapDates:O},Ne=Object(c.b)(function(e){return{posts:e.posts,filters:e.filters}},Pe)(Ce);a(79),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=Object(o.d)(y,Object(o.a)(i.a));window.store=ke,s.a.render(r.a.createElement(c.a,{store:ke},r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.1cf65a18.chunk.js.map