!function(){"use strict";var e=function(t){var n=t,r=function(){return n};return{get:r,set:function(e){n=e},clone:function(){return e(r())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(e){return!(!/(^|[ ,])powerpaste([, ]|$)/.test(e.settings.plugins)||!t.get("powerpaste")||("undefined"!=typeof window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),0))},r=function(e,t){return{clipboard:e,quirks:t}},a={firePastePreProcess:function(e,t,n,r){return e.fire("PastePreProcess",{content:t,internal:n,wordContent:r})},firePastePostProcess:function(e,t,n,r){return e.fire("PastePostProcess",{node:t,internal:n,wordContent:r})},firePastePlainTextToggle:function(e,t){return e.fire("PastePlainTextToggle",{state:t})},firePaste:function(e,t){return e.fire("paste",{ieFake:t})}},i={shouldPlainTextInform:function(e){return e.getParam("paste_plaintext_inform",!0)},shouldBlockDrop:function(e){return e.getParam("paste_block_drop",!1)},shouldPasteDataImages:function(e){return e.getParam("paste_data_images",!1)},shouldFilterDrop:function(e){return e.getParam("paste_filter_drop",!0)},getPreProcess:function(e){return e.getParam("paste_preprocess")},getPostProcess:function(e){return e.getParam("paste_postprocess")},getWebkitStyles:function(e){return e.getParam("paste_webkit_styles")},shouldRemoveWebKitStyles:function(e){return e.getParam("paste_remove_styles_if_webkit",!0)},shouldMergeFormats:function(e){return e.getParam("paste_merge_formats",!0)},isSmartPasteEnabled:function(e){return e.getParam("smart_paste",!0)},isPasteAsTextEnabled:function(e){return e.getParam("paste_as_text",!1)},getRetainStyleProps:function(e){return e.getParam("paste_retain_style_properties")},getWordValidElements:function(e){return e.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")},shouldConvertWordFakeLists:function(e){return e.getParam("paste_convert_word_fake_lists",!0)},shouldUseDefaultFilters:function(e){return e.getParam("paste_enable_default_filters",!0)}},o=function(e,t,n){var r,o,s;"text"===t.pasteFormat?(t.pasteFormat="html",a.firePastePlainTextToggle(e,!1)):(t.pasteFormat="text",a.firePastePlainTextToggle(e,!0),s=e,!1===n.get()&&i.shouldPlainTextInform(s)&&(o="Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.",(r=e).notificationManager.open({text:r.translate(o),type:"info"}),n.set(!0))),e.focus()},s=function(e,t,n){e.addCommand("mceTogglePlainTextPaste",function(){o(e,t,n)}),e.addCommand("mceInsertClipboardContent",function(e,n){n.content&&t.pasteHtml(n.content,n.internal),n.text&&t.pasteText(n.text)})},l=tinymce.util.Tools.resolve("tinymce.Env"),u=tinymce.util.Tools.resolve("tinymce.util.Delay"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),f=tinymce.util.Tools.resolve("tinymce.util.VK"),d="x-tinymce/html",m="\x3c!-- "+d+" --\x3e",p={mark:function(e){return m+e},unmark:function(e){return e.replace(m,"")},isMarked:function(e){return-1!==e.indexOf(m)},internalHtmlMime:function(){return d}},g=tinymce.util.Tools.resolve("tinymce.html.Entities"),v=function(e){return e.replace(/\r?\n/g,"<br>")},h=function(e,t,n){var r=e.split(/\n\n/),a=function(e,t){var n,r=[],a="<"+e;if("object"==typeof t){for(n in t)t.hasOwnProperty(n)&&r.push(n+'="'+g.encodeAllRaw(t[n])+'"');r.length&&(a+=" "+r.join(" "))}return a+">"}(t,n),i="</"+t+">",o=c.map(r,function(e){return e.split(/\n/).join("<br />")});return 1===o.length?o[0]:c.map(o,function(e){return a+e+i}).join("")},P={isPlainText:function(e){return!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e)},convert:function(e,t,n){return t?h(e,t,n):v(e)},toBRs:v,toBlockElements:h},y=tinymce.util.Tools.resolve("tinymce.html.DomParser"),b=tinymce.util.Tools.resolve("tinymce.html.Node"),x=tinymce.util.Tools.resolve("tinymce.html.Schema"),w=tinymce.util.Tools.resolve("tinymce.html.Serializer");function T(e,t){return c.each(t,function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])}),e}var C={filter:T,innerText:function(e){var t=x(),n=y({},t),r="",a=t.getShortEndedElements(),i=c.makeMap("script noscript style textarea video audio iframe object"," "),o=t.getBlockElements();return e=T(e,[/<!\[[^\]]+\]>/g]),function s(e){var t=e.name,n=e;if("br"!==t)if(a[t]&&(r+=" "),i[t])r+=" ";else{if(3===e.type&&(r+=e.value),!e.shortEnded&&(e=e.firstChild))do{s(e)}while(e=e.next);o[t]&&n.next&&(r+="\n","p"===t&&(r+="\n"))}else r+="\n"}(n.parse(e)),r},trimHtml:function(e){return e=T(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(e,t,n){return t||n?"\xa0":" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])},createIdGenerator:function(e){var t=0;return function(){return e+t++}},isMsEdge:function(){return-1!==navigator.userAgent.indexOf(" Edge/")}};function _(e){var t,n;return n=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],e=e.replace(/^[\u00a0 ]+/,""),c.each(n,function(n){if(n.test(e))return t=!0,!1}),t}function D(e){var t,n,r=1;function a(e){var t="";if(3===e.type)return e.value;if(e=e.firstChild)do{t+=a(e)}while(e=e.next);return t}function i(e,t){if(3===e.type&&t.test(e.value))return e.value=e.value.replace(t,""),!1;if(e=e.firstChild)do{if(!i(e,t))return!1}while(e=e.next);return!0}function o(e,a,o){var s=e._listLevel||r;s!==r&&(s<r?t&&(t=t.parent.parent):(n=t,t=null)),t&&t.name===a?t.append(e):(n=n||t,t=new b(a,1),o>1&&t.attr("start",""+o),e.wrap(t)),e.name="li",s>r&&n&&n.lastChild.append(t),r=s,function l(e){if(e._listIgnore)e.remove();else if(e=e.firstChild)do{l(e)}while(e=e.next)}(e),i(e,/^\u00a0+/),i(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),i(e,/^\u00a0+/)}for(var s=[],l=e.firstChild;void 0!==l&&null!==l;)if(s.push(l),null!==(l=l.walk()))for(;void 0!==l&&l.parent!==e;)l=l.walk();for(var u=0;u<s.length;u++)if("p"===(e=s[u]).name&&e.firstChild){var c=a(e);if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(c)){o(e,"ul");continue}if(_(c)){var f=/([0-9]+)\./.exec(c),d=1;f&&(d=parseInt(f[1],10)),o(e,"ol",d);continue}if(e._listLevel){o(e,"ul",1);continue}t=null}else n=t,t=null}function k(e,t,n,r){var a,o={},s=e.dom.parseStyle(r);return c.each(s,function(s,l){switch(l){case"mso-list":(a=/\w+ \w+([0-9]+)/i.exec(r))&&(n._listLevel=parseInt(a[1],10)),/Ignore/i.test(s)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0);break;case"horiz-align":l="text-align";break;case"vert-align":l="vertical-align";break;case"font-color":case"mso-foreground":l="color";break;case"mso-background":case"mso-highlight":l="background";break;case"font-weight":case"font-style":return void("normal"!==s&&(o[l]=s));case"mso-element":if(/^(comment|comment-list)$/i.test(s))return void n.remove()}0!==l.indexOf("mso-comment")?0!==l.indexOf("mso-")&&("all"===i.getRetainStyleProps(e)||t&&t[l])&&(o[l]=s):n.remove()}),/(bold)/i.test(o["font-weight"])&&(delete o["font-weight"],n.wrap(new b("b",1))),/(italic)/i.test(o["font-style"])&&(delete o["font-style"],n.wrap(new b("i",1))),(o=e.dom.serializeStyle(o,n.name))||null}var R={preProcess:function(e,t){return i.shouldUseDefaultFilters(e)?function(e,t){var n,r;(n=i.getRetainStyleProps(e))&&(r=c.makeMap(n.split(/[, ]/))),t=C.filter(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return t.length>0?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join("\xa0"):""}]]);var a=i.getWordValidElements(e),o=x({valid_elements:a,valid_children:"-li[p]"});c.each(o.elements,function(e){e.attributes["class"]||(e.attributes["class"]={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))});var s=y({},o);s.addAttributeFilter("style",function(t){for(var n,a=t.length;a--;)(n=t[a]).attr("style",k(e,r,n,n.attr("style"))),"span"===n.name&&n.parent&&!n.attributes.length&&n.unwrap()}),s.addAttributeFilter("class",function(e){for(var t,n,r=e.length;r--;)n=(t=e[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)}),s.addNodeFilter("del",function(e){for(var t=e.length;t--;)e[t].remove()}),s.addNodeFilter("a",function(e){for(var t,n,r,a=e.length;a--;)if(n=(t=e[a]).attr("href"),r=t.attr("name"),n&&-1!==n.indexOf("#_msocom_"))t.remove();else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){t.unwrap();continue}t.attr({href:n,name:r})}else t.unwrap()});var l=s.parse(t);return i.shouldConvertWordFakeLists(e)&&D(l),t=w({validate:e.settings.validate},o).serialize(l)}(e,t):t},isWordContent:function(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}},E=function(e,t){return{content:e,cancelled:t}},F=function(e,t,n,r){var i,o,s,l,u,c,f=a.firePastePreProcess(e,t,n,r);return e.hasEventListeners("PastePostProcess")&&!f.isDefaultPrevented()?(i=e,o=f.content,s=n,l=r,u=i.dom.create("div",{style:"display:none"},o),c=a.firePastePostProcess(i,u,s,l),E(c.node.innerHTML,c.isDefaultPrevented())):E(f.content,f.isDefaultPrevented())},M={process:function(e,t,n){var r=R.isWordContent(t),a=r?R.preProcess(e,t):t;return F(e,a,n,r)}},S=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)},I=function(e){return S(e)&&/.(gif|jpe?g|png)$/.test(e)},A=function(e,t,n){return!(!1!==e.selection.isCollapsed()||!S(t)||(a=t,i=n,(r=e).undoManager.extra(function(){i(r,a)},function(){r.execCommand("mceInsertLink",!1,a)}),0));var r,a,i},O=function(e,t,n){return!!I(t)&&(a=t,i=n,(r=e).undoManager.extra(function(){i(r,a)},function(){r.insertContent('<img src="'+a+'">')}),!0);var r,a,i},B=function(e,t){return e.insertContent(t,{merge:i.shouldMergeFormats(e),paste:!0}),!0},H={isImageUrl:I,isAbsoluteUrl:S,insertContent:function(e,t){var n,r;!1===i.isSmartPasteEnabled(e)?B(e,t):(n=e,r=t,c.each([A,O,B],function(e){return!0!==e(n,r,B)}))}},N=function(e){var t,n,r,o,s,d,m=this,g=0,v=(t=e,r="%MCEPASTEBIN%",{create:function(){var e,a,i=t.dom,o=t.getBody(),s=t.dom.getViewPort(t.getWin()).y,u=20;if(n=t.selection.getRng(),t.inline&&(a=t.selection.getScrollContainer())&&a.scrollTop>0&&(s=a.scrollTop),n.getClientRects){var c=function(e){var t,r,a,o=e.startContainer;if((t=e.getClientRects()).length)return t[0];if(e.collapsed&&1===o.nodeType){for(a=o.childNodes[n.startOffset];a&&3===a.nodeType&&!a.data.length;)a=a.nextSibling;if(a)return"BR"===a.tagName&&(r=i.doc.createTextNode("\ufeff"),a.parentNode.insertBefore(r,a),(e=i.createRng()).setStartBefore(r),e.setEndAfter(r),t=e.getClientRects(),i.remove(r)),t.length?t[0]:void 0}}(n);if(c)u=s+(c.top-i.getPos(o).y);else{u=s;var f=n.startContainer;f&&(3===f.nodeType&&f.parentNode!==o&&(f=f.parentNode),1===f.nodeType&&(u=i.getPos(f,a||o).y))}}e=t.dom.add(t.getBody(),"div",{id:"mcepastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: absolute; top: "+u+"px; width: 10px; height: 10px; overflow: hidden; opacity: 0"},r),(l.ie||l.gecko)&&i.setStyle(e,"left","rtl"===i.getStyle(o,"direction",!0)?65535:-65535),i.bind(e,"beforedeactivate focusin focusout",function(e){e.stopPropagation()}),e.focus(),t.selection.select(e,!0)},remove:function(){if(o()){for(var e=void 0;e=t.dom.get("mcepastebin");)t.dom.remove(e),t.dom.unbind(e);n&&t.selection.setRng(n)}n=null},getEl:o=function(){return t.dom.get("mcepastebin")},getHtml:function(){var e,n,r,a,i,o=function(e,n){e.appendChild(n),t.dom.remove(n,!0)};for(n=c.grep(t.getBody().childNodes,function(e){return"mcepastebin"===e.id}),e=n.shift(),c.each(n,function(t){o(e,t)}),r=(a=t.dom.select("div[id=mcepastebin]",e)).length-1;r>=0;r--)i=t.dom.create("div"),e.insertBefore(i,a[r]),o(i,a[r]);return e?e.innerHTML:""},getLastRng:function(){return n},isDefault:function(){var e,t=o();return(e=t)&&"mcepastebin"===e.id&&s(t.innerHTML)},isDefaultContent:s=function(e){return e===r}}),h="data:text/mce-internal,",y=C.createIdGenerator("mceclip");function b(t,n){var r=n||p.isMarked(t),a=M.process(e,p.unmark(t),r);!1===a.cancelled&&H.insertContent(e,a.content)}function x(t){t=e.dom.encode(t).replace(/\r\n/g,"\n"),b(t=P.convert(t,e.settings.forced_root_block,e.settings.forced_root_block_attrs),!1)}function w(e){var t={};if(e){if(e.getData){var n=e.getData("Text");n&&n.length>0&&-1===n.indexOf(h)&&(t["text/plain"]=n)}if(e.types)for(var r=0;r<e.types.length;r++){var a=e.types[r];try{t[a]=e.getData(a)}catch(i){t[a]=""}}}return t}function T(e){return k(e,"text/html")||k(e,"text/plain")}function _(t,n,r){t&&(e.selection.setRng(t),t=null);var a,i,o,s,l,u,c=n.result,f=-1!==(i=(a=c).indexOf(","))?a.substr(i+1):null,d=y(),m=e.settings.images_reuse_filename&&r.name?(o=r.name,(s=o.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i))?e.dom.encode(s[1]):null):d,p=new Image;if(p.src=c,l=e.settings,u=p,!l.images_dataimg_filter||l.images_dataimg_filter(u)){var g,v=e.editorUpload.blobCache,h=void 0;(g=v.findFirst(function(e){return e.base64()===f}))?h=g:(h=v.create(d,r,f,m),v.add(h)),b('<img src="'+h.blobUri()+'">',!1)}else b('<img src="'+c+'">',!1)}function D(t,n){var r=t.clipboardData||t.dataTransfer;function a(e){var r,a,i,o=!1;if(e)for(r=0;r<e.length;r++)if(a=e[r],/^image\/(jpeg|png|gif|bmp)$/.test(a.type)){var s=a.getAsFile?a.getAsFile():a;(i=new window.FileReader).onload=_.bind(null,n,i,s),i.readAsDataURL(s),t.preventDefault(),o=!0}return o}if(e.settings.paste_data_images&&r)return a(r.items)||a(r.files)}function k(e,t){return t in e&&e[t].length>0}function R(e){return f.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode}function E(){function t(t,n,r,a){var i,o;k(t,"text/html")?i=t["text/html"]:(i=v.getHtml(),a=a||p.isMarked(i),v.isDefaultContent(i)&&(r=!0)),i=C.trimHtml(i),v.remove(),o=!1===a&&P.isPlainText(i),i.length&&!o||(r=!0),r&&(i=k(t,"text/plain")&&o?t["text/plain"]:C.innerText(i)),v.isDefaultContent(i)?n||e.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):r?x(i):b(i,a)}e.on("keydown",function(t){function n(e){R(e)&&!e.isDefaultPrevented()&&v.remove()}if(R(t)&&!t.isDefaultPrevented()){if((d=t.shiftKey&&86===t.keyCode)&&l.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return;if(t.stopImmediatePropagation(),g=(new Date).getTime(),l.ie&&d)return t.preventDefault(),void a.firePaste(e,!0);v.remove(),v.create(),e.once("keyup",n),e.once("paste",function(){e.off("keyup",n)})}}),e.on("paste",function(n){var r,a,i=(new Date).getTime(),o=(r=w(n.clipboardData||e.getDoc().dataTransfer),C.isMsEdge()?c.extend(r,{"text/html":""}):r),s=(new Date).getTime()-i,f=(new Date).getTime()-g-s<1e3,h="text"===m.pasteFormat||d,P=k(o,p.internalHtmlMime());d=!1,n.isDefaultPrevented()||(a=n.clipboardData,-1!==navigator.userAgent.indexOf("Android")&&a&&a.items&&0===a.items.length)?v.remove():T(o)||!D(n,v.getLastRng()||e.selection.getRng())?(f||n.preventDefault(),!l.ie||f&&!n.ieFake||k(o,"text/html")||(v.create(),e.dom.bind(v.getEl(),"paste",function(e){e.stopPropagation()}),e.getDoc().execCommand("Paste",!1,null),o["text/html"]=v.getHtml()),k(o,"text/html")?(n.preventDefault(),P||(P=p.isMarked(o["text/html"])),t(o,f,h,P)):u.setEditorTimeout(e,function(){t(o,f,h,P)},0)):v.remove()})}m.pasteFormat=i.isPasteAsTextEnabled(e)?"text":"html",m.pasteHtml=b,m.pasteText=x,m.pasteImageData=D,m.getDataTransferItems=w,m.hasHtmlOrText=T,m.hasContentType=k,e.on("preInit",function(){var t;E(),e.parser.addNodeFilter("img",function(n,r,a){function i(e){e.attr("data-mce-object")||t===l.transparentSrc||e.remove()}if(!e.settings.paste_data_images&&(s=a).data&&!0===s.data.paste)for(var o=n.length;o--;)(t=n[o].attributes.map.src)&&(0===t.indexOf("webkit-fake-url")?i(n[o]):e.settings.allow_html_data_urls||0!==t.indexOf("data:")||i(n[o]));var s})})},L=function(){},$=function(e,t,n){if(r=e,!1!==l.iOS||r===undefined||"function"!=typeof r.setData||!0===C.isMsEdge())return!1;try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",n),e.setData(p.internalHtmlMime(),t),!0}catch(a){return!1}var r},W=function(e,t,n,r){$(e.clipboardData,t.html,t.text)?(e.preventDefault(),r()):n(t.html,r)},j=function(e){return function(t,n){var r=p.mark(t),a=e.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),i=e.dom.create("div",{contenteditable:"true"},r);e.dom.setStyles(a,{position:"fixed",left:"-3000px",width:"1000px",overflow:"hidden"}),a.appendChild(i),e.dom.add(e.getBody(),a);var o=e.selection.getRng();i.focus();var s=e.dom.createRng();s.selectNodeContents(i),e.selection.setRng(s),setTimeout(function(){a.parentNode.removeChild(a),e.selection.setRng(o),n()},0)}},U=function(e){return{html:e.selection.getContent({contextual:!0}),text:e.selection.getContent({format:"text"})}},V=function(e){var t,n;e.on("cut",(t=e,function(e){!1===t.selection.isCollapsed()&&W(e,U(t),j(t),function(){setTimeout(function(){t.execCommand("Delete")},0)})})),e.on("copy",(n=e,function(e){!1===n.selection.isCollapsed()&&W(e,U(n),j(n),L)}))},z=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),K=function(e,t){return z.getCaretRangeFromPoint(t.clientX,t.clientY,e.getDoc())},G=function(e,t){e.focus(),e.selection.setRng(t)},X=function(e,t,n){i.shouldBlockDrop(e)&&e.on("dragend dragover draggesture dragdrop drop drag",function(e){e.preventDefault(),e.stopPropagation()}),i.shouldPasteDataImages(e)||e.on("drop",function(e){var t=e.dataTransfer;t&&t.files&&t.files.length>0&&e.preventDefault()}),e.on("drop",function(r){var a,o;if(o=K(e,r),!r.isDefaultPrevented()&&!n.get()){a=t.getDataTransferItems(r.dataTransfer);var s,l=t.hasContentType(a,p.internalHtmlMime());if((t.hasHtmlOrText(a)&&(!(s=a["text/plain"])||0!==s.indexOf("file://"))||!t.pasteImageData(r,o))&&o&&i.shouldFilterDrop(e)){var c=a["mce-internal"]||a["text/html"]||a["text/plain"];c&&(r.preventDefault(),u.setEditorTimeout(e,function(){e.undoManager.transact(function(){a["mce-internal"]&&e.execCommand("Delete"),G(e,o),c=C.trimHtml(c),a["text/html"]?t.pasteHtml(c,l):t.pasteText(c)})}))}}}),e.on("dragstart",function(e){n.set(!0)}),e.on("dragover dragend",function(t){i.shouldPasteDataImages(e)&&!1===n.get()&&(t.preventDefault(),G(e,K(e,t))),"dragend"===t.type&&n.set(!1)})},q=function(e){var t=e.plugins.paste,n=i.getPreProcess(e);n&&e.on("PastePreProcess",function(e){n.call(t,t,e)});var r=i.getPostProcess(e);r&&e.on("PastePostProcess",function(e){r.call(t,t,e)})};function Y(e,t){e.on("PastePreProcess",function(n){n.content=t(e,n.content,n.internal,n.wordContent)})}function Z(e,t){if(!R.isWordContent(t))return t;var n=[];c.each(e.schema.getBlockElements(),function(e,t){n.push(t)});var r=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return t=C.filter(t,[[r,"$1"]]),t=C.filter(t,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function J(e,t,n,r){if(r||n)return t;var a=i.getWebkitStyles(e);if(!1===i.shouldRemoveWebKitStyles(e)||"all"===a)return t;if(a&&(a=a.split(/[, ]/)),a){var o=e.dom,s=e.selection.getNode();t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(e,t,n,r){var i=o.parseStyle(o.decode(n),"span"),l={};if("none"===a)return t+r;for(var u=0;u<a.length;u++){var c=i[a[u]],f=o.getStyle(s,a[u],!0);/color/.test(a[u])&&(c=o.toHex(c),f=o.toHex(f)),f!==c&&(l[a[u]]=c)}return(l=o.serializeStyle(l,"span"))?t+' style="'+l+'"'+r:t+r})}else t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return t=t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(e,t,n,r){return t+' style="'+n+'"'+r})}function Q(e,t){e.$("a",t).find("font,u").each(function(t,n){e.dom.remove(n,!0)})}var ee=function(e){var t,n;l.webkit&&Y(e,J),l.ie&&(Y(e,Z),n=Q,(t=e).on("PastePostProcess",function(e){n(t,e.node)}))},te=function(e){return function(){return e}},ne=function(e){for(var t=new Array(arguments.length-1),n=1;n<arguments.length;n++)t[n-1]=arguments[n];return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];var a=t.concat(n);return e.apply(null,a)}},re=(te(!1),te(!0),function(e,t){var n=ne((te(!1),te(!0),function(e,t,n){var r=n.control;r.active("text"===t.pasteFormat),e.on("PastePlainTextToggle",function(e){r.active(e.state)})}),e,t);e.addButton("pastetext",{active:!1,icon:"pastetext",tooltip:"Paste as text",cmd:"mceTogglePlainTextPaste",onPostRender:n}),e.addMenuItem("pastetext",{text:"Paste as text",selectable:!0,active:t.pasteFormat,cmd:"mceTogglePlainTextPaste",onPostRender:n})}),ae=e(!1);t.add("paste",function(t){if(!1===n(t)){var a=new N(t),i=ee(t),o=e(!1);return re(t,a),s(t,a,ae),q(t),V(t),X(t,a,o),r(a,i)}})}();