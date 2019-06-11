(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(t,a,e){t.exports=e("hUgz")},"KHd+":function(t,a,e){"use strict";function n(t,a,e,n,o,i,s,r){var c,l="function"==typeof t?t.options:t;if(a&&(l.render=a,l.staticRenderFns=e,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,a){return c.call(a),u(t,a)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}e.d(a,"a",function(){return n})},hUgz:function(t,a,e){Vue.component("activity-component",e("tXHz").default)},tXHz:function(t,a,e){"use strict";e.r(a);function n(t){return function(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={data:function(){return{notifications:{},notificationCursor:2,notificationMaxId:0}},mounted:function(){this.fetchNotifications()},updated:function(){$('[data-toggle="tooltip"]').tooltip()},methods:{fetchNotifications:function(){var t=this;axios.get("/api/v1/notifications").then(function(a){var e=a.data.filter(function(t){return!("share"==t.type&&!status)}),o=a.data.map(function(t){return t.id});t.notificationMaxId=Math.max.apply(Math,n(o)),t.notifications=e,$(".notification-card .loader").addClass("d-none"),$(".notification-card .contents").removeClass("d-none")})},infiniteNotifications:function(t){var a=this;this.notificationCursor>10?t.complete():axios.get("/api/v1/notifications",{params:{page:this.notificationCursor}}).then(function(e){if(e.data.length){var o,i=e.data.filter(function(t){return!("share"==t.type&&!status)});(o=a.notifications).push.apply(o,n(i)),a.notificationCursor++,t.loaded()}else t.complete()})},truncate:function(t){return t.length<=15?t:t.slice(0,15)+"..."},timeAgo:function(t){var a=Date.parse(t),e=Math.floor((new Date-a)/1e3),n=Math.floor(e/31536e3);return n>=1?n+"y":(n=Math.floor(e/604800))>=1?n+"w":(n=Math.floor(e/86400))>=1?n+"d":(n=Math.floor(e/3600))>=1?n+"h":(n=Math.floor(e/60))>=1?n+"m":Math.floor(e)+"s"},mentionUrl:function(t){return"/p/"+t.account.username+"/"+t.id},followProfile:function(t){var a=this,e=t.account.id;axios.post("/i/follow",{item:e}).then(function(t){a.notifications.map(function(t){t.account.id===e&&(t.relationship.following=!0)})}).catch(function(t){t.response.data.message&&swal("Error",t.response.data.message,"error")})},viewContext:function(t){switch(t.type){case"follow":return t.account.url;case"mention":return t.status.url;case"like":case"favourite":return t.status.url}return"/"}}},i=e("KHd+"),s=Object(i.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row my-5"},[e("div",{staticClass:"col-12 col-md-8 offset-md-2"},[t._l(t.notifications,function(a,n){return t.notifications.length>0?e("div",{staticClass:"media mb-3 align-items-center px-3 border-bottom pb-3"},[e("img",{staticClass:"mr-2 rounded-circle",staticStyle:{border:"1px solid #ccc"},attrs:{src:a.account.avatar,alt:"",width:"32px",height:"32px"}}),t._v(" "),e("div",{staticClass:"media-body font-weight-light"},["favourite"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:a.account.url,"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(t.truncate(a.account.username)))]),t._v(" liked your "),e("a",{staticClass:"font-weight-bold",attrs:{href:a.status.url}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t")])]):"comment"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:a.account.url,"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(t.truncate(a.account.username)))]),t._v(" commented on your "),e("a",{staticClass:"font-weight-bold",attrs:{href:a.status.url}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t")])]):"mention"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:a.account.url,"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(t.truncate(a.account.username)))]),t._v(" "),e("a",{staticClass:"font-weight-bold",attrs:{href:t.mentionUrl(a.status)}},[t._v("mentioned")]),t._v(" you.\n\t\t\t\t\t\t\t")])]):"follow"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:a.account.url,"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(t.truncate(a.account.username)))]),t._v(" followed you.\n\t\t\t\t\t\t\t")])]):"share"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:a.account.url,"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(t.truncate(a.account.username)))]),t._v(" shared your "),e("a",{staticClass:"font-weight-bold",attrs:{href:a.status.reblog.url}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t")])]):t._e(),t._v(" "),e("div",{staticClass:"align-items-center"},[e("span",{staticClass:"small text-muted",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:a.created_at}},[t._v(t._s(t.timeAgo(a.created_at)))])])]),t._v(" "),e("div",[a.status&&a.status&&a.status.media_attachments&&a.status.media_attachments.length?e("div",[e("a",{attrs:{href:a.status.url}},[e("img",{attrs:{src:a.status.media_attachments[0].preview_url,width:"32px",height:"32px"}})])]):a.status&&a.status.parent&&a.status.parent.media_attachments&&a.status.parent.media_attachments.length?e("div",[e("a",{attrs:{href:a.status.parent.url}},[e("img",{attrs:{src:a.status.parent.media_attachments[0].preview_url,width:"32px",height:"32px"}})])]):e("div",[e("a",{staticClass:"btn btn-outline-primary py-0 font-weight-bold",attrs:{href:t.viewContext(a)}},[t._v("View")])])])]):t._e()}),t._v(" "),t.notifications.length?e("div",[e("infinite-loading",{on:{infinite:t.infiniteNotifications}},[e("div",{staticClass:"font-weight-bold",attrs:{slot:"no-results"},slot:"no-results"}),t._v(" "),e("div",{staticClass:"font-weight-bold",attrs:{slot:"no-more"},slot:"no-more"})])],1):t._e(),t._v(" "),0==t.notifications.length?e("div",{staticClass:"text-lighter text-center py-3"},[t._m(0),t._v(" "),e("p",{staticClass:"mb-0 small font-weight-bold"},[t._v("0 Notifications!")])]):t._e()],2)])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"mb-0"},[a("i",{staticClass:"fas fa-inbox fa-3x"})])}],!1,null,null,null);a.default=s.exports}},[[1,0]]]);