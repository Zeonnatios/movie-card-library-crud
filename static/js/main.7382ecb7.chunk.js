(this["webpackJsonpmovie-card-library-crud"]=this["webpackJsonpmovie-card-library-crud"]||[]).push([[0],{38:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),r=i(24),s=i.n(r),c=i(13),o=i(11),l=i(2),d=i(14),u=i.n(d),h=i(16),j=i(4),b=i(5),m=i(8),v=i(7),p=i(6),O=i(0),g=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(){return Object(j.a)(this,i),t.apply(this,arguments)}return Object(b.a)(i,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"center",children:Object(O.jsx)("div",{className:"loading"})})}}]),i}(n.Component),f=i(18),x=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(e){var n;return Object(j.a)(this,i),(n=t.call(this,e)).state=Object(c.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(b.a)(i,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(f.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_title",children:[Object(O.jsx)("p",{children:"T\xedtulo:"}),Object(O.jsx)("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})]})})}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_subtitle",children:[Object(O.jsx)("p",{children:" Subt\xedtulo"}),Object(O.jsx)("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})]})})}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_image",children:[Object(O.jsx)("p",{children:"Link da Imagem"}),Object(O.jsx)("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})]})})}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_storyline",children:[Object(O.jsx)("p",{children:"Sinopse"}),Object(O.jsx)("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}})]})})}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_genre",children:[Object(O.jsx)("p",{children:"G\xeanero"}),Object(O.jsxs)("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)},children:[Object(O.jsx)("option",{value:"action",children:"A\xe7\xe3o"}),Object(O.jsx)("option",{value:"comedy",children:"Com\xe9dia"}),Object(O.jsx)("option",{value:"thriller",children:"Suspense"}),Object(O.jsx)("option",{value:"fantasy",children:"Fantasia"})]})]})})}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_rating",children:[Object(O.jsx)("p",{children:"Avalia\xe7\xe3o"}),Object(O.jsx)("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}})]})})}},{key:"renderSubmitButton",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("button",{className:"button-forms",type:"button",onClick:this.handleSubmit,children:"Salvar"})})})}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{className:"form",children:[this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()]})})}}]),i}(a.a.Component),y=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(){return Object(j.a)(this,i),t.apply(this,arguments)}return Object(b.a)(i,[{key:"render",value:function(){var e=this.props.movie,t=e.id,i=e.title,n=e.subtitle,a=e.storyline,r=e.imagePath;return Object(O.jsxs)("div",{className:"movie-card","data-testid":"movie-card",children:[Object(O.jsx)("img",{className:"movie-card-image",src:r,alt:i}),Object(O.jsxs)("div",{className:"movie-card-body",children:[Object(O.jsx)("h4",{className:"movie-card-title",children:i}),Object(O.jsx)("h5",{className:"movie-card-subtitle",children:n}),Object(O.jsx)("p",{className:"movie-card-storyline",children:a}),Object(O.jsx)("p",{className:"show-details",children:Object(O.jsx)(o.b,{to:"/movies/".concat(t),children:" VER DETALHES "})})]})]})}}]),i}(a.a.Component),k=i(26),S=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"https://raw.githubusercontent.com/tryber/sd-011-project-movie-card-library-crud/master/public/images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"https://raw.githubusercontent.com/tryber/sd-011-project-movie-card-library-crud/master/public/images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"https://raw.githubusercontent.com/tryber/sd-011-project-movie-card-library-crud/master/public/images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"https://raw.githubusercontent.com/tryber/sd-011-project-movie-card-library-crud/master/public/images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"https://raw.githubusercontent.com/tryber/sd-011-project-movie-card-library-crud/master/public/images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(S));var N=function(){return JSON.parse(localStorage.getItem("movies"))},I=function(e){return localStorage.setItem("movies",JSON.stringify(e))},w="OK",M=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},_=function(e){var t=N().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){M(t)(e)}))},C=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(e){var n;return Object(j.a)(this,i),(n=t.call(this,e)).state={loading:!0,movie:{}},n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.getMovieById=n.getMovieById.bind(Object(m.a)(n)),n}return Object(b.a)(i,[{key:"componentDidMount",value:function(){this.getMovieById()}},{key:"handleSubmit",value:function(e){!function(e){new Promise((function(t){var i=N().map((function(t){return t.id===parseInt(e.id,10)?Object(c.a)(Object(c.a)({},t),e):t}));I(i),M(w)(t)}))}(e)}},{key:"getMovieById",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,_(t);case 3:i=e.sent,this.setState({movie:i,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,i=e.movie;return t?Object(O.jsx)(g,{}):Object(O.jsxs)("div",{"data-testid":"edit-movie",className:"columns",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)("h1",{className:"title",children:"Altere as informa\xe7\xf5es do cart\xe3o"})}),Object(O.jsx)(x,{movie:i,onSubmit:this.handleSubmit})]})}}]),i}(n.Component),A=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(){var e;return Object(j.a)(this,i),(e=t.call(this)).state={movie:[],loading:!0},e.getMovieById=e.getMovieById.bind(Object(m.a)(e)),e.deleteMovie=e.deleteMovie.bind(Object(m.a)(e)),e}return Object(b.a)(i,[{key:"componentDidMount",value:function(){this.getMovieById()}},{key:"getMovieById",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,_(t);case 3:i=e.sent,this.setState({movie:i,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteMovie",value:function(e){!function(e){var t=N();t=t.filter((function(t){return t.id!==parseInt(e,10)})),I(t),new Promise((function(e){M({status:w})(e)}))}(e)}},{key:"render",value:function(){var e=this,t=this.state.movie,i=t.id,n=t.title,a=t.storyline,r=t.imagePath,s=t.genre,c=t.rating,l=t.subtitle;return this.state.loading?Object(O.jsx)(g,{}):Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)("h1",{className:"title",children:"Altere as informa\xe7\xf5es do cart\xe3o"})}),Object(O.jsx)("div",{className:"movie-list",children:Object(O.jsxs)("div",{className:"movie-card","data-testid":"movie-details",children:[Object(O.jsx)("img",{className:"movie-card-image",src:r,alt:"Movie Cover"}),Object(O.jsxs)("div",{className:"movie-card-body",children:[Object(O.jsx)("h4",{className:"movie-card-title",children:n}),Object(O.jsx)("h5",{className:"movie-card-subtitle",children:"Subtitle: ".concat(l)}),Object(O.jsx)("p",{className:"movie-card-storyline",children:"Storyline: ".concat(a)}),Object(O.jsx)("p",{className:"movie-card-storyline",children:"Genre: ".concat(s)})]}),Object(O.jsx)("div",{className:"movie-card-rating",children:Object(O.jsx)("p",{className:"rating",children:"Rating: ".concat(c)})}),Object(O.jsxs)("div",{className:"links",children:[Object(O.jsx)(o.b,{to:"/movies/".concat(i,"/edit"),children:"EDITAR"}),Object(O.jsx)(o.b,{to:"/",children:"VOLTAR"}),Object(O.jsx)(o.b,{to:"/",onClick:function(){return e.deleteMovie(i)},children:"DELETAR"})]})]})})]})}}]),i}(n.Component),P=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(){var e;return Object(j.a)(this,i),(e=t.call(this)).state={movies:[],loading:!0},e.getMovies=e.getMovies.bind(Object(m.a)(e)),e}return Object(b.a)(i,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"getMovies",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=N();M(t)(e)}));case 2:t=e.sent,this.setState({movies:t,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies;return e.loading?Object(O.jsx)(g,{}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h1",{className:"title",children:"Movie Card Library CRUD"}),Object(O.jsx)("p",{children:Object(O.jsx)(o.b,{to:"/movies/new",children:"ADICIONAR CART\xc3O"})})]}),Object(O.jsx)("div",{className:"movie-list","data-testid":"movie-list",children:t.map((function(e){return Object(O.jsx)(y,{movie:e},e.title)}))})]})}}]),i}(n.Component),F=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(e){var n;return Object(j.a)(this,i),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(b.a)(i,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var i=N(),n=i[i.length-1].id+1,a=Object(c.a)(Object(c.a)({},t),{},{id:n});i=[].concat(Object(k.a)(i),[a]),I(i),M(w)(e)}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{"data-testid":"new-movie",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)("h1",{className:"title",children:"Preencha o novo cart\xe3o"})}),Object(O.jsx)(x,{onSubmit:this.handleSubmit})]})}}]),i}(n.Component),R=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(){return Object(j.a)(this,i),t.apply(this,arguments)}return Object(b.a)(i,[{key:"render",value:function(){return Object(O.jsx)("div",{"data-testid":"404-error",children:"P\xe1gina n\xe3o encontrada"})}}]),i}(n.Component);i(38);var B=function(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(P,{})}}),Object(O.jsx)(l.a,{path:"/movies/new",render:function(){return Object(O.jsx)(F,{})}}),Object(O.jsx)(l.a,{path:"/movies/:id/edit",render:function(e){return Object(O.jsx)(C,Object(c.a)({},e))}}),Object(O.jsx)(l.a,{path:"/movies/:id",render:function(e){return Object(O.jsx)(A,Object(c.a)({},e))}}),Object(O.jsx)(l.a,{path:"*",render:function(){return Object(O.jsx)(R,{})}})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(B,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.7382ecb7.chunk.js.map