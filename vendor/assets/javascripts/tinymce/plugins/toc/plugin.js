!function(){"use strict";var t,e,n=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),r=tinymce.util.Tools.resolve("tinymce.util.I18n"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),c=function(t){return t.getParam("toc_class","mce-toc")},l=function(t){var e=t.getParam("toc_header","h2");return/^h[1-6]$/.test(e)?e:"h2"},a=function(t){var e=parseInt(t.getParam("toc_depth","3"),10);return e>=1&&e<=9?e:3},d=(t="mcetoc_",e=0,function(){var n=(new Date).getTime().toString(32);return t+n+(e++).toString(32)}),u=function(t){var e=c(t),n=l(t),o=function(t){var e,n=[];for(e=1;e<=t;e++)n.push("h"+e);return n.join(",")}(a(t)),r=t.$(o);return r.length&&/^h[1-9]$/i.test(n)&&(r=r.filter(function(n,o){return!t.dom.hasClass(o.parentNode,e)})),i.map(r,function(e){return{id:e.id?e.id:d(),level:parseInt(e.nodeName.replace(/^H/i,""),10),title:t.$.text(e),element:e}})},s=function(t){var e,n,i,c,a,d,s,f="",m=u(t),v=function(t){var e,n=9;for(e=0;e<t.length;e++)if(t[e].level<n&&(n=t[e].level),1===n)return n;return n}(m)-1;if(!m.length)return"";for(f+=(a=l(t),d=r.translate("Table of Contents"),s="</"+a+">","<"+a+' contenteditable="true">'+o.DOM.encode(d)+s),e=0;e<m.length;e++){if((i=m[e]).element.id=i.id,c=m[e+1]&&m[e+1].level,v===i.level)f+="<li>";else for(n=v;n<i.level;n++)f+="<ul><li>";if(f+='<a href="#'+i.id+'">'+i.title+"</a>",c!==i.level&&c)for(n=i.level;n>c;n--)f+="</li></ul><li>";else f+="</li>",c||(f+="</ul>");v=i.level}return f},f=function(t){var e=c(t),n=t.$("."+e);n.length&&t.undoManager.transact(function(){n.html(s(t))})},m={hasHeaders:function(t){return u(t).length>0},insertToc:function(t){var e,n,o,r,i=c(t),l=t.$("."+i);o=t,!(r=l).length||o.dom.getParents(r[0],".mce-offscreen-selection").length>0?t.insertContent((n=s(e=t),'<div class="'+e.dom.encode(c(e))+'" contenteditable="false">'+n+"</div>")):f(t)},updateToc:f},v=function(t){t.addCommand("mceInsertToc",function(){m.insertToc(t)}),t.addCommand("mceUpdateToc",function(){m.updateToc(t)})},h=function(t){var e=t.$,n=c(t);t.on("PreProcess",function(t){var o=e("."+n,t.node);o.length&&(o.removeAttr("contentEditable"),o.find("[contenteditable]").removeAttr("contentEditable"))}),t.on("SetContent",function(){var t=e("."+n);t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))})},g=function(t){return function(e){var n=e.control;t.on("LoadContent SetContent change",function(){n.disabled(t.readonly||!m.hasHeaders(t))})}},T=function(t){var e;t.addButton("toc",{tooltip:"Table of Contents",cmd:"mceInsertToc",icon:"toc",onPostRender:g(t)}),t.addButton("tocupdate",{tooltip:"Update",cmd:"mceUpdateToc",icon:"reload"}),t.addMenuItem("toc",{text:"Table of Contents",context:"insert",cmd:"mceInsertToc",onPostRender:g(t)}),t.addContextToolbar((e=t,function(t){return t&&e.dom.is(t,"."+c(e))&&e.getBody().contains(t)}),"tocupdate")};n.add("toc",function(t){v(t),T(t),h(t)})}();