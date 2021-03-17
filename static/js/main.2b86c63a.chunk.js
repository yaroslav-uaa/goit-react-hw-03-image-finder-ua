(this["webpackJsonpgoit-react-hw-03-image-finder-ua"]=this["webpackJsonpgoit-react-hw-03-image-finder-ua"]||[]).push([[0],{25:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),l=(a(25),a(11)),i=a(4),s=a(5),u=a(7),g=a(6),h=a(0),d=function(e){var t=e.children;return Object(h.jsx)("div",{className:"Container",children:t})},m=a(10),p=a.n(m),b=a(2),j=a.n(b);p.a.defaults.baseURL="https://pixabay.com/api/";var f=function(e){var t=e.query,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n,o="?q=".concat(a,"&page=").concat(r,"&key=").concat("19822341-38023a333dc0ee1aeedcaef47","&image_type=photo&orientation=horizontal&per_page=").concat(12);return p.a.get(o).then((function(e){return e.data.hits}))};f.propTypes={query:j.a.string.isRequired,page:j.a.number.isRequired};var y=f,v=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query;""!==a.trim()?(e.props.onSubmit(a),e.setState({query:""})):alert("Enter what you are looking")},e.handleValueChange=function(t){e.setState({query:t.currentTarget.value})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleValueChange})]})})})}}]),a}(n.Component),O=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=void 0===n?"":n,o=e.onSetImgInfo;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:t,alt:r,className:"ImageGalleryItemImage",onClick:function(){o({largeImageURL:a,tags:r})}})})},I=function(e){var t=e.gallery,a=e.onSetImgInfo;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){var n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(h.jsx)(O,{webformatURL:n,largeImageURL:r,tags:o,onSetImgInfo:a},t)}))})},S=function(e){var t=e.onLoadMore;return Object(h.jsx)("button",{type:"button",className:"Button",onClick:function(){return t()},children:"Load more"})},w=a(20),x=a.n(w),k=document.querySelector("#modal-root"),q=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClickBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.handleClickBackdrop,children:Object(h.jsx)("div",{className:"Modal",children:this.props.children})}),k)}}]),a}(n.Component),L=(a(65),a(66),function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"ukraine",page:1,gallery:[],loading:!1,showModal:!1,largeImageURL:"",alt:null,error:null},e.handleSubmit=function(t){e.state.query!==t&&e.setState({query:t,page:1,gallery:[]})},e.getImgs=function(){var t=e.state,a=t.query,n=t.page;e.setState({loading:!0}),y({query:a,page:n}).then((function(t){0!==t.length?(e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t)),page:e.page+1,error:!1}})),0!==n&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):alert("Sorry! ".concat(a," is not found"))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.setImgInfo=function(t){var a=t.largeImageURL,n=t.tags;e.setState({largeImageURL:a,tags:n}),e.toggleModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getImgs()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.query;t.query!==a&&this.getImgs()}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.showModal,n=e.largeImageURL,r=e.alt,o=e.loading,c=e.error;return Object(h.jsxs)(d,{children:[Object(h.jsx)(v,{onSubmit:this.handleSubmit}),c&&Object(h.jsx)("p",{children:"Whoops, something went wrong."}),o&&Object(h.jsx)(x.a,{className:"Loader",type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:3e3}),Object(h.jsx)(I,{gallery:t,onSetImgInfo:this.setImgInfo}),t.length>0&&!o&&Object(h.jsx)(S,{onLoadMore:this.getImgs}),a&&Object(h.jsx)(q,{onClose:this.toggleModal,children:Object(h.jsx)("img",{src:n,alt:r})})]})}}]),a}(n.Component));c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.2b86c63a.chunk.js.map