/*!
 * minicart
 * The Mini Cart is a great way to improve your PayPal shopping cart integration.
 *
 * @version 3.0.6
 * @author Jeff Harrell <https://github.com/jeffharrell/>
 * @url http://www.minicartjs.com/
 * @license MIT <https://github.com/jeffharrell/minicart/raw/master/LICENSE.md>
 */

!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a){return"[object Array]"===j.call(a)}function e(a,b){var c;if(null===a)c={__proto__:null};else{if("object"!=typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");var d=function(){};d.prototype=a,c=new d,c.__proto__=a}return"undefined"!=typeof b&&Object.defineProperties&&Object.defineProperties(c,b),c}function f(a){return"object"!=typeof a&&"function"!=typeof a||null===a}function g(a){if(f(a))throw new TypeError("Object.keys called on a non-object");var b=[];for(var c in a)k.call(a,c)&&b.push(c);return b}function h(a){if(f(a))throw new TypeError("Object.getOwnPropertyNames called on a non-object");var b=g(a);return c.isArray(a)&&-1===c.indexOf(a,"length")&&b.push("length"),b}function i(a,b){return{value:a[b]}}var j=Object.prototype.toString,k=Object.prototype.hasOwnProperty;c.isArray="function"==typeof Array.isArray?Array.isArray:d,c.indexOf=function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1},c.filter=function(a,b){if(a.filter)return a.filter(b);for(var c=[],d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c},c.forEach=function(a,b,c){if(a.forEach)return a.forEach(b,c);for(var d=0;d<a.length;d++)b.call(c,a[d],d,a)},c.map=function(a,b){if(a.map)return a.map(b);for(var c=new Array(a.length),d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c},c.reduce=function(a,b,c){if(a.reduce)return a.reduce(b,c);var d,e=!1;2<arguments.length&&(d=c,e=!0);for(var f=0,g=a.length;g>f;++f)a.hasOwnProperty(f)&&(e?d=b(d,a[f],f,a):(d=a[f],e=!0));return d},c.substr="b"!=="ab".substr(-1)?function(a,b,c){return 0>b&&(b=a.length+b),a.substr(b,c)}:function(a,b,c){return a.substr(b,c)},c.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},c.bind=function(){var a=Array.prototype.slice.call(arguments),b=a.shift();if(b.bind)return b.bind.apply(b,a);var c=a.shift();return function(){b.apply(c,a.concat([Array.prototype.slice.call(arguments)]))}},c.create="function"==typeof Object.create?Object.create:e;var l="function"==typeof Object.keys?Object.keys:g,m="function"==typeof Object.getOwnPropertyNames?Object.getOwnPropertyNames:h;if((new Error).hasOwnProperty("description")){var n=function(a,b){return"[object Error]"===j.call(a)&&(b=c.filter(b,function(a){return"description"!==a&&"number"!==a&&"message"!==a})),b};c.keys=function(a){return n(a,l(a))},c.getOwnPropertyNames=function(a){return n(a,m(a))}}else c.keys=l,c.getOwnPropertyNames=m;if("function"==typeof Object.getOwnPropertyDescriptor)try{Object.getOwnPropertyDescriptor({a:1},"a"),c.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor}catch(o){c.getOwnPropertyDescriptor=function(a,b){try{return Object.getOwnPropertyDescriptor(a,b)}catch(c){return i(a,b)}}}else c.getOwnPropertyDescriptor=i},{}],2:[function(){},{}],3:[function(a,b,c){function d(a,b){for(var c=0,d=a.length-1;d>=0;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var e=a("__browserify_process"),f=a("util"),g=a("_shims"),h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(a){return h.exec(a).slice(1)};c.resolve=function(){for(var a="",b=!1,c=arguments.length-1;c>=-1&&!b;c--){var h=c>=0?arguments[c]:e.cwd();if(!f.isString(h))throw new TypeError("Arguments to path.resolve must be strings");h&&(a=h+"/"+a,b="/"===h.charAt(0))}return a=d(g.filter(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=c.isAbsolute(a),e="/"===g.substr(a,-1);return a=d(g.filter(a.split("/"),function(a){return!!a}),!b).join("/"),a||b||(a="."),a&&e&&(a+="/"),(b?"/":"")+a},c.isAbsolute=function(a){return"/"===a.charAt(0)},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(g.filter(a,function(a){if(!f.isString(a))throw new TypeError("Arguments to path.join must be strings");return a}).join("/"))},c.relative=function(a,b){function d(a){for(var b=0;b<a.length&&""===a[b];b++);for(var c=a.length-1;c>=0&&""===a[c];c--);return b>c?[]:a.slice(b,c-b+1)}a=c.resolve(a).substr(1),b=c.resolve(b).substr(1);for(var e=d(a.split("/")),f=d(b.split("/")),g=Math.min(e.length,f.length),h=g,i=0;g>i;i++)if(e[i]!==f[i]){h=i;break}for(var j=[],i=h;i<e.length;i++)j.push("..");return j=j.concat(f.slice(h)),j.join("/")},c.sep="/",c.delimiter=":",c.dirname=function(a){var b=i(a),c=b[0],d=b[1];return c||d?(d&&(d=d.substr(0,d.length-1)),c+d):"."},c.basename=function(a,b){var c=i(a)[2];return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return i(a)[3]}},{__browserify_process:5,_shims:1,util:4}],4:[function(a,b,c){function d(a,b){var d={seen:[],stylize:f};return arguments.length>=3&&(d.depth=arguments[2]),arguments.length>=4&&(d.colors=arguments[3]),o(b)?d.showHidden=b:b&&c._extend(d,b),u(d.showHidden)&&(d.showHidden=!1),u(d.depth)&&(d.depth=2),u(d.colors)&&(d.colors=!1),u(d.customInspect)&&(d.customInspect=!0),d.colors&&(d.stylize=e),h(d,a,d.depth)}function e(a,b){var c=d.styles[b];return c?"["+d.colors[c][0]+"m"+a+"["+d.colors[c][1]+"m":a}function f(a){return a}function g(a){var b={};return G.forEach(a,function(a){b[a]=!0}),b}function h(a,b,d){if(a.customInspect&&b&&z(b.inspect)&&b.inspect!==c.inspect&&(!b.constructor||b.constructor.prototype!==b)){var e=b.inspect(d);return s(e)||(e=h(a,e,d)),e}var f=i(a,b);if(f)return f;var o=G.keys(b),p=g(o);if(a.showHidden&&(o=G.getOwnPropertyNames(b)),0===o.length){if(z(b)){var q=b.name?": "+b.name:"";return a.stylize("[Function"+q+"]","special")}if(v(b))return a.stylize(RegExp.prototype.toString.call(b),"regexp");if(x(b))return a.stylize(Date.prototype.toString.call(b),"date");if(y(b))return j(b)}var r="",t=!1,u=["{","}"];if(n(b)&&(t=!0,u=["[","]"]),z(b)){var w=b.name?": "+b.name:"";r=" [Function"+w+"]"}if(v(b)&&(r=" "+RegExp.prototype.toString.call(b)),x(b)&&(r=" "+Date.prototype.toUTCString.call(b)),y(b)&&(r=" "+j(b)),0===o.length&&(!t||0==b.length))return u[0]+r+u[1];if(0>d)return v(b)?a.stylize(RegExp.prototype.toString.call(b),"regexp"):a.stylize("[Object]","special");a.seen.push(b);var A;return A=t?k(a,b,d,p,o):o.map(function(c){return l(a,b,d,p,c,t)}),a.seen.pop(),m(A,r,u)}function i(a,b){if(u(b))return a.stylize("undefined","undefined");if(s(b)){var c="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(c,"string")}return r(b)?a.stylize(""+b,"number"):o(b)?a.stylize(""+b,"boolean"):p(b)?a.stylize("null","null"):void 0}function j(a){return"["+Error.prototype.toString.call(a)+"]"}function k(a,b,c,d,e){for(var f=[],g=0,h=b.length;h>g;++g)f.push(F(b,String(g))?l(a,b,c,d,String(g),!0):"");return G.forEach(e,function(e){e.match(/^\d+$/)||f.push(l(a,b,c,d,e,!0))}),f}function l(a,b,c,d,e,f){var g,i,j;if(j=G.getOwnPropertyDescriptor(b,e)||{value:b[e]},j.get?i=j.set?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):j.set&&(i=a.stylize("[Setter]","special")),F(d,e)||(g="["+e+"]"),i||(G.indexOf(a.seen,j.value)<0?(i=p(c)?h(a,j.value,null):h(a,j.value,c-1),i.indexOf("\n")>-1&&(i=f?i.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+i.split("\n").map(function(a){return"   "+a}).join("\n"))):i=a.stylize("[Circular]","special")),u(g)){if(f&&e.match(/^\d+$/))return i;g=JSON.stringify(""+e),g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(g=g.substr(1,g.length-2),g=a.stylize(g,"name")):(g=g.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),g=a.stylize(g,"string"))}return g+": "+i}function m(a,b,c){var d=0,e=G.reduce(a,function(a,b){return d++,b.indexOf("\n")>=0&&d++,a+b.replace(/\u001b\[\d\d?m/g,"").length+1},0);return e>60?c[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+" "+c[1]:c[0]+b+" "+a.join(", ")+" "+c[1]}function n(a){return G.isArray(a)}function o(a){return"boolean"==typeof a}function p(a){return null===a}function q(a){return null==a}function r(a){return"number"==typeof a}function s(a){return"string"==typeof a}function t(a){return"symbol"==typeof a}function u(a){return void 0===a}function v(a){return w(a)&&"[object RegExp]"===C(a)}function w(a){return"object"==typeof a&&a}function x(a){return w(a)&&"[object Date]"===C(a)}function y(a){return w(a)&&"[object Error]"===C(a)}function z(a){return"function"==typeof a}function A(a){return null===a||"boolean"==typeof a||"number"==typeof a||"string"==typeof a||"symbol"==typeof a||"undefined"==typeof a}function B(a){return a&&"object"==typeof a&&"function"==typeof a.copy&&"function"==typeof a.fill&&"function"==typeof a.binarySlice}function C(a){return Object.prototype.toString.call(a)}function D(a){return 10>a?"0"+a.toString(10):a.toString(10)}function E(){var a=new Date,b=[D(a.getHours()),D(a.getMinutes()),D(a.getSeconds())].join(":");return[a.getDate(),I[a.getMonth()],b].join(" ")}function F(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var G=a("_shims"),H=/%[sdj%]/g;c.format=function(a){if(!s(a)){for(var b=[],c=0;c<arguments.length;c++)b.push(d(arguments[c]));return b.join(" ")}for(var c=1,e=arguments,f=e.length,g=String(a).replace(H,function(a){if("%%"===a)return"%";if(c>=f)return a;switch(a){case"%s":return String(e[c++]);case"%d":return Number(e[c++]);case"%j":try{return JSON.stringify(e[c++])}catch(b){return"[Circular]"}default:return a}}),h=e[c];f>c;h=e[++c])g+=p(h)||!w(h)?" "+h:" "+d(h);return g},c.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},c.isArray=n,c.isBoolean=o,c.isNull=p,c.isNullOrUndefined=q,c.isNumber=r,c.isString=s,c.isSymbol=t,c.isUndefined=u,c.isRegExp=v,c.isObject=w,c.isDate=x,c.isError=y,c.isFunction=z,c.isPrimitive=A,c.isBuffer=B;var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];c.log=function(){console.log("%s - %s",E(),c.format.apply(c,arguments))},c.inherits=function(a,b){a.super_=b,a.prototype=G.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})},c._extend=function(a,b){if(!b||!w(b))return a;for(var c=G.keys(b),d=c.length;d--;)a[c[d]]=b[c[d]];return a}},{_shims:1}],5:[function(a,b){var c=b.exports={};c.nextTick=function(){var a="undefined"!=typeof window&&window.setImmediate,b="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(a)return function(a){return window.setImmediate(a)};if(b){var c=[];return window.addEventListener("message",function(a){var b=a.source;if((b===window||null===b)&&"process-tick"===a.data&&(a.stopPropagation(),c.length>0)){var d=c.shift();d()}},!0),function(a){c.push(a),window.postMessage("process-tick","*")}}return function(a){setTimeout(a,0)}}(),c.title="browser",c.browser=!0,c.env={},c.argv=[],c.binding=function(){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(){throw new Error("process.chdir is not supported")}},{}],6:[function(a,b,c){function d(a){return a.substr(1).split("|").reduce(function(a,b){var c=b.split(":"),d=c.shift(),e=c.join(":")||"";return e&&(e=", "+e),"filters."+d+"("+a+e+")"})}function e(a,b,c,d){var e=b.split("\n"),f=Math.max(d-3,0),g=Math.min(e.length,d+3),h=e.slice(f,g).map(function(a,b){var c=b+f+1;return(c==d?" >> ":"    ")+c+"| "+a}).join("\n");throw a.path=c,a.message=(c||"ejs")+":"+d+"\n"+h+"\n\n"+a.message,a}function f(a,b){var c=k(i(b),a),d=j(a);return d||(c+=".ejs"),c}var g=a("./utils"),h=a("path"),i=h.dirname,j=h.extname,k=h.join,l=a("fs"),m=l.readFileSync,n=c.filters=a("./filters"),o={};c.clearCache=function(){o={}};var p=(c.parse=function(a,b){var b=b||{},e=b.open||c.open||"<%",g=b.close||c.close||"%>",h=b.filename,i=b.compileDebug!==!1,j="";j+="var buf = [];",!1!==b._with&&(j+="\nwith (locals || {}) { (function(){ "),j+="\n buf.push('";for(var k=1,l=!1,n=0,o=a.length;o>n;++n){var p=a[n];if(a.slice(n,e.length+n)==e){n+=e.length;var q,r,s=(i?"__stack.lineno=":"")+k;switch(a[n]){case"=":q="', escape(("+s+", ",r=")), '",++n;break;case"-":q="', ("+s+", ",r="), '",++n;break;default:q="');"+s+";",r="; buf.push('"}var t=a.indexOf(g,n),u=a.substring(n,t),v=n,w=null,x=0;if("-"==u[u.length-1]&&(u=u.substring(0,u.length-2),l=!0),0==u.trim().indexOf("include")){var y=u.trim().slice(7).trim();if(!h)throw new Error("filename option is required for includes");var z=f(y,h);w=m(z,"utf8"),w=c.parse(w,{filename:z,_with:!1,open:e,close:g,compileDebug:i}),j+="' + (function(){"+w+"})() + '",u=""}for(;~(x=u.indexOf("\n",x));)x++,k++;":"==u.substr(0,1)&&(u=d(u)),u&&(u.lastIndexOf("//")>u.lastIndexOf("\n")&&(u+="\n"),j+=q,j+=u,j+=r),n+=t-v+g.length-1}else"\\"==p?j+="\\\\":"'"==p?j+="\\'":"\r"==p||("\n"==p?l?l=!1:(j+="\\n",k++):j+=p)}return j+=!1!==b._with?"'); })();\n} \nreturn buf.join('');":"');\nreturn buf.join('');"},c.compile=function(a,b){b=b||{};var d=b.escape||g.escape,f=JSON.stringify(a),h=b.compileDebug!==!1,i=b.client,j=b.filename?JSON.stringify(b.filename):"undefined";a=h?["var __stack = { lineno: 1, input: "+f+", filename: "+j+" };",e.toString(),"try {",c.parse(a,b),"} catch (err) {","  rethrow(err, __stack.input, __stack.filename, __stack.lineno);","}"].join("\n"):c.parse(a,b),b.debug&&console.log(a),i&&(a="escape = escape || "+d.toString()+";\n"+a);try{var k=new Function("locals, filters, escape, rethrow",a)}catch(l){throw"SyntaxError"==l.name&&(l.message+=b.filename?" in "+j:" while compiling ejs"),l}return i?k:function(a){return k.call(this,a,n,d,e)}});c.render=function(a,b){var c,b=b||{};if(b.cache){if(!b.filename)throw new Error('"cache" option requires "filename".');c=o[b.filename]||(o[b.filename]=p(a,b))}else c=p(a,b);return b.__proto__=b.locals,c.call(b.scope,b)},c.renderFile=function(a,b,d){var e=a+":string";"function"==typeof b&&(d=b,b={}),b.filename=a;var f;try{f=b.cache?o[e]||(o[e]=m(a,"utf8")):m(a,"utf8")}catch(g){return void d(g)}d(null,c.render(f,b))},c.__express=c.renderFile,a.extensions?a.extensions[".ejs"]=function(a,b){b=b||a.filename;var c={filename:b,client:!0},d=l.readFileSync(b).toString(),e=p(d,c);a._compile("module.exports = "+e.toString()+";",b)}:a.registerExtension&&a.registerExtension(".ejs",function(a){return p(a,{})})},{"./filters":7,"./utils":8,fs:2,path:3}],7:[function(a,b,c){c.first=function(a){return a[0]},c.last=function(a){return a[a.length-1]},c.capitalize=function(a){return a=String(a),a[0].toUpperCase()+a.substr(1,a.length)},c.downcase=function(a){return String(a).toLowerCase()},c.upcase=function(a){return String(a).toUpperCase()},c.sort=function(a){return Object.create(a).sort()},c.sort_by=function(a,b){return Object.create(a).sort(function(a,c){return a=a[b],c=c[b],a>c?1:c>a?-1:0})},c.size=c.length=function(a){return a.length},c.plus=function(a,b){return Number(a)+Number(b)},c.minus=function(a,b){return Number(a)-Number(b)},c.times=function(a,b){return Number(a)*Number(b)},c.divided_by=function(a,b){return Number(a)/Number(b)},c.join=function(a,b){return a.join(b||", ")},c.truncate=function(a,b,c){return a=String(a),a.length>b&&(a=a.slice(0,b),c&&(a+=c)),a},c.truncate_words=function(a,b){var a=String(a),c=a.split(/ +/);return c.slice(0,b).join(" ")},c.replace=function(a,b,c){return String(a).replace(b,c||"")},c.prepend=function(a,b){return Array.isArray(a)?[b].concat(a):b+a},c.append=function(a,b){return Array.isArray(a)?a.concat(b):a+b},c.map=function(a,b){return a.map(function(a){return a[b]})},c.reverse=function(a){return Array.isArray(a)?a.reverse():String(a).split("").reverse().join("")},c.get=function(a,b){return a[b]},c.json=function(a){return JSON.stringify(a)}},{}],8:[function(a,b,c){c.escape=function(a){return String(a).replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")}},{}],9:[function(a,b){"use strict";function c(a,b){var c,d,h,i,j;if(this._items=[],this._settings={bn:g.BN},e.call(this),f.call(this,a,b),(c=this.load())&&(d=c.items,h=c.settings,h&&(this._settings=h),d))for(j=0,i=d.length;i>j;j++)this.add(d[j])}var d=a("./product"),e=a("./util/pubsub"),f=a("./util/storage"),g=a("./constants"),h=a("./util/currency"),i=a("./util/mixin");i(c.prototype,e.prototype),i(c.prototype,f.prototype),c.prototype.add=function(a){var b,c,e,f,h=this,i=this.items(),j=!1,k=!1;for(c in a)g.SETTINGS.test(c)&&(this._settings[c]=a[c],delete a[c]);for(f=0,e=i.length;e>f;f++)if(i[f].isEqual(a)){b=i[f],b.set("quantity",b.get("quantity")+(parseInt(a.quantity,10)||1)),j=f,k=!0;break}return b||(b=new d(a),b.isValid()&&(j=this._items.push(b)-1,b.on("change",function(a,b){h.save(),h.fire("change",j,a,b)}),this.save())),b&&this.fire("add",j,b,k),j},c.prototype.items=function(a){return"number"==typeof a?this._items[a]:this._items},c.prototype.settings=function(a){return a?this._settings[a]:this._settings},c.prototype.discount=function(a){var b=parseFloat(this.settings("discount_amount_cart"))||0;return b||(b=(parseFloat(this.settings("discount_rate_cart"))||0)*this.subtotal()/100),a=a||{},a.currency=this.settings("currency_code"),h(b,a)},c.prototype.subtotal=function(a){var b,c,d=this.items(),e=0;for(b=0,c=d.length;c>b;b++)e+=d[b].total();return a=a||{},a.currency=this.settings("currency_code"),h(e,a)},c.prototype.total=function(a){var b=0;return b+=this.subtotal(),b-=this.discount(),a=a||{},a.currency=this.settings("currency_code"),h(b,a)},c.prototype.remove=function(a){var b=this._items.splice(a,1);return 0===this._items.length&&this.destroy(),b&&(this.save(),this.fire("remove",a,b[0])),!!b.length},c.prototype.save=function(){var a,b,c=this.items(),d=this.settings(),e=[];for(a=0,b=c.length;b>a;a++)e.push(c[a].get());f.prototype.save.call(this,{items:e,settings:d})},c.prototype.checkout=function(a){this.fire("checkout",a)},c.prototype.destroy=function(){f.prototype.destroy.call(this),this._items=[],this._settings={bn:g.BN},this.fire("destroy")},b.exports=c},{"./constants":11,"./product":13,"./util/currency":15,"./util/mixin":18,"./util/pubsub":19,"./util/storage":20}],10:[function(a,b){"use strict";var c=a("./util/mixin"),d=b.exports={name:"PPMiniCart",parent:"undefined"!=typeof document?document.body:null,action:"https://www.paypal.com/cgi-bin/webscr",target:"",duration:30,template:'<%var items = cart.items();var settings = cart.settings();var hasItems = !!items.length;var priceFormat = { format: true, currency: cart.settings("currency_code") };var totalFormat = { format: true, showCode: true };%><form method="post" class="<% if (!hasItems) { %>minicart-empty<% } %>" action="<%= config.action %>" target="<%= config.target %>">    <button type="button" class="minicart-closer">&times;</button>    <ul>        <% for (var i= 0, idx = i + 1, len = items.length; i < len; i++, idx++) { %>        <li class="minicart-item">            <div class="minicart-details-name">                <a class="minicart-name" href="<%= items[i].get("href") %>"><%= items[i].get("item_name") %></a>                <ul class="minicart-attributes">                    <% if (items[i].get("item_number")) { %>                    <li>                        <%= items[i].get("item_number") %>                        <input type="hidden" name="item_number_<%= idx %>" value="<%= items[i].get("item_number") %>" />                    </li>                    <% } %>                    <% if (items[i].discount()) { %>                    <li>                        <%= config.strings.discount %> <%= items[i].discount(priceFormat) %>                        <input type="hidden" name="discount_amount_<%= idx %>" value="<%= items[i].discount() %>" />                    </li>                    <% } %>                    <% for (var options = items[i].options(), j = 0, len2 = options.length; j < len2; j++) { %>                        <li>                            <%= options[j].key %>: <%= options[j].value %>                            <input type="hidden" name="on<%= j %>_<%= idx %>" value="<%= options[j].key %>" />                            <input type="hidden" name="os<%= j %>_<%= idx %>" value="<%= options[j].value %>" />                        </li>                    <% } %>                </ul>            </div>            <div class="minicart-details-quantity">                <input class="minicart-quantity" data-minicart-idx="<%= i %>" name="quantity_<%= idx %>" type="text" pattern="[0-9]*" value="<%= items[i].get("quantity") %>" autocomplete="off" />            </div>            <div class="minicart-details-remove">                <button type="button" class="minicart-remove" data-minicart-idx="<%= i %>">&times;</button>            </div>            <div class="minicart-details-price">                <span class="minicart-price"><%= items[i].total(priceFormat) %></span>            </div>            <input type="hidden" name="item_name_<%= idx %>" value="<%= items[i].get("item_name") %>" />            <input type="hidden" name="amount_<%= idx %>" value="<%= items[i].amount() %>" />            <input type="hidden" name="shipping_<%= idx %>" value="<%= items[i].get("shipping") %>" />            <input type="hidden" name="shipping2_<%= idx %>" value="<%= items[i].get("shipping2") %>" />        </li>        <% } %>    </ul>    <div class="minicart-footer">        <% if (hasItems) { %>            <div class="minicart-subtotal">                <%= config.strings.subtotal %> <%= cart.total(totalFormat) %>            </div>            <button class="minicart-submit" type="submit" data-minicart-alt="<%= config.strings.buttonAlt %>"><%- config.strings.button %></button>        <% } else { %>            <p class="minicart-empty-text"><%= config.strings.empty %></p>        <% } %>    </div>    <input type="hidden" name="cmd" value="_cart" />    <input type="hidden" name="upload" value="1" />    <% for (var key in settings) { %>        <input type="hidden" name="<%= key %>" value="<%= settings[key] %>" />    <% } %></form>',styles:'@keyframes pop-in {    0% { opacity: 0; transform: scale(0.1); }    60% { opacity: 1; transform: scale(1.2); }    100% { transform: scale(1); }}@-webkit-keyframes pop-in {    0% { opacity: 0; -webkit-transform: scale(0.1); }    60% { opacity: 1; -webkit-transform: scale(1.2); }    100% { -webkit-transform: scale(1); }}@-moz-keyframes pop-in {    0% { opacity: 0; -moz-transform: scale(0.1); }    60% { opacity: 1; -moz-transform: scale(1.2); }    100% { -moz-transform: scale(1); }}.minicart-showing #PPMiniCart {    display: block;    transform: translateZ(0);    -webkit-transform: translateZ(0);    -moz-transform: translateZ(0);    animation: pop-in 0.25s;    -webkit-animation: pop-in 0.25s;    -moz-animation: pop-in 0.25s;}#PPMiniCart {    display: none;    position: fixed;    left: 50%;    top: 75px;}#PPMiniCart form {    position: relative;    width: 400px;    max-height: 400px;    margin-left: -200px;    padding: 10px 10px 40px;    background: #fbfbfb;    border: 1px solid #d7d7d7;    border-radius: 4px;    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);    font: 15px/normal arial, helvetica;    color: #333;}#PPMiniCart form.minicart-empty {    padding-bottom: 10px;    font-size: 16px;    font-weight: bold;}#PPMiniCart ul {    clear: both;    float: left;    width: 380px;    margin: 5px 0 20px;    padding: 10px;    list-style-type: none;    background: #fff;    border: 1px solid #ccc;    border-radius: 4px;    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);}#PPMiniCart .minicart-empty ul {    display: none;}#PPMiniCart .minicart-closer {    float: right;    margin: -12px -10px 0;    padding: 10px;    background: 0;    border: 0;    font-size: 18px;    cursor: pointer;    font-weight: bold;}#PPMiniCart .minicart-item {    clear: left;    padding: 6px 0;    min-height: 25px;}#PPMiniCart .minicart-item + .minicart-item {    border-top: 1px solid #f2f2f2;}#PPMiniCart .minicart-item a {    color: #333;    text-decoration: none;}#PPMiniCart .minicart-details-name {    float: left;    width: 62%;}#PPMiniCart .minicart-details-quantity {    float: left;    width: 15%;}#PPMiniCart .minicart-details-remove {    float: left;    width: 7%;}#PPMiniCart .minicart-details-price {    float: left;    width: 16%;    text-align: right;}#PPMiniCart .minicart-attributes {    margin: 0;    padding: 0;    background: transparent;    border: 0;    border-radius: 0;    box-shadow: none;    color: #999;    font-size: 12px;    line-height: 22px;}#PPMiniCart .minicart-attributes li {    display: inline;}#PPMiniCart .minicart-attributes li:after {    content: ",";}#PPMiniCart .minicart-attributes li:last-child:after {    content: "";}#PPMiniCart .minicart-quantity {    width: 30px;    height: 18px;    padding: 2px 4px;    border: 1px solid #ccc;    border-radius: 4px;    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);    font-size: 13px;    text-align: right;    transition: border linear 0.2s, box-shadow linear 0.2s;    -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;    -moz-transition: border linear 0.2s, box-shadow linear 0.2s;}#PPMiniCart .minicart-quantity:hover {    border-color: #0078C1;}#PPMiniCart .minicart-quantity:focus {    border-color: #0078C1;    outline: 0;    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 3px rgba(0, 120, 193, 0.4);}#PPMiniCart .minicart-remove {    width: 18px;    height: 19px;    margin: 2px 0 0;    padding: 0;    background: #b7b7b7;    border: 1px solid #a3a3a3;    border-radius: 3px;    color: #fff;    font-size: 13px;    opacity: 0.70;    cursor: pointer;}#PPMiniCart .minicart-remove:hover {    opacity: 1;}#PPMiniCart .minicart-footer {    clear: left;}#PPMiniCart .minicart-subtotal {    position: absolute;    bottom: 17px;    padding-left: 6px;    left: 10px;    font-size: 16px;    font-weight: bold;}#PPMiniCart .minicart-submit {    position: absolute;    bottom: 10px;    right: 10px;    min-width: 153px;    height: 33px;    margin-right: 6px;    padding: 0 9px;    border: 1px solid #ffc727;    border-radius: 5px;    color: #000;    text-shadow: 1px 1px 1px #fff6e9;    cursor: pointer;    background: #ffaa00;    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZjZlOSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmFhMDAiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);    background: -moz-linear-gradient(top, #fff6e9 0%, #ffaa00 100%);    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fff6e9), color-stop(100%,#ffaa00));    background: -webkit-linear-gradient(top, #fff6e9 0%,#ffaa00 100%);    background: -o-linear-gradient(top, #fff6e9 0%,#ffaa00 100%);    background: -ms-linear-gradient(top, #fff6e9 0%,#ffaa00 100%);    background: linear-gradient(to bottom, #fff6e9 0%,#ffaa00 100%);}#PPMiniCart .minicart-submit img {    vertical-align: middle;    padding: 4px 0 0 2px;}',strings:{button:'',subtotal:"Subtotal:",discount:"Discount:",empty:"Your shopping cart is empty"}};b.exports.load=function(a){return c(d,a)}},{"./util/mixin":18}],11:[function(a,b){"use strict";b.exports={COMMANDS:{_cart:!0,_xclick:!0,_donations:!0},SETTINGS:/^(?:business|currency_code|lc|paymentaction|no_shipping|cn|no_note|invoice|handling_cart|weight_cart|weight_unit|tax_cart|discount_amount_cart|discount_rate_cart|page_style|image_url|cpp_|cs|cbt|return|cancel_return|notify_url|rm|custom|charset)/,BN:"MiniCart_AddToCart_WPS_US",KEYUP_TIMEOUT:500,SHOWING_CLASS:"minicart-showing",REMOVE_CLASS:"minicart-remove",CLOSER_CLASS:"minicart-closer",QUANTITY_CLASS:"minicart-quantity",ITEM_CLASS:"minicart-item",ITEM_CHANGED_CLASS:"minicart-item-changed",SUBMIT_CLASS:"minicart-submit",DATA_IDX:"data-minicart-idx"}},{}],12:[function(a,b){"use strict";var c,d,e,f=a("./cart"),g=a("./view"),h=a("./config"),i={};i.render=function(a){d=i.config=h.load(a),c=i.cart=new f(d.name,d.duration),e=i.view=new g({config:d,cart:c}),c.on("add",e.addItem,e),c.on("change",e.changeItem,e),c.on("remove",e.removeItem,e),c.on("destroy",e.hide,e)},i.reset=function(){c.destroy(),e.hide(),e.redraw()},"undefined"==typeof window?b.exports=i:(window.paypal||(window.paypal={}),window.paypal.minicart=i)},{"./cart":9,"./config":10,"./view":22}],13:[function(a,b){"use strict";function c(a){a.quantity=g.quantity(a.quantity),a.amount=g.amount(a.amount),a.href=g.href(a.href),this._data=a,this._options=null,this._discount=null,this._amount=null,this._total=null,e.call(this)}var d=a("./util/currency"),e=a("./util/pubsub"),f=a("./util/mixin"),g={quantity:function(a){return a=parseInt(a,10),(isNaN(a)||!a)&&(a=1),a},amount:function(a){return parseFloat(a)||0},href:function(a){return a?a:"undefined"!=typeof window?window.location.href:null}};f(c.prototype,e.prototype),c.prototype.get=function(a){return a?this._data[a]:this._data},c.prototype.set=function(a,b){var c=g[a];this._data[a]=c?c(b):b,this._options=null,this._discount=null,this._amount=null,this._total=null,this.fire("change",a)},c.prototype.options=function(){var a,b,c,d,e,f;if(!this._options){for(a=[],e=0;b=this.get("on"+e);){for(c=this.get("os"+e),d=0,f=0;"undefined"!=typeof this.get("option_select"+f);){if(this.get("option_select"+f)===c){d=g.amount(this.get("option_amount"+f));break}f++}a.push({key:b,value:c,amount:d}),e++}this._options=a}return this._options},c.prototype.discount=function(a){var b,c,e,f,h,i;return this._discount||(h=0,e=parseInt(this.get("discount_num"),10)||0,f=Math.max(e,this.get("quantity")-1),void 0!==this.get("discount_amount")?(b=g.amount(this.get("discount_amount")),h+=b,h+=g.amount(this.get("discount_amount2")||b)*f):void 0!==this.get("discount_rate")&&(c=g.amount(this.get("discount_rate")),i=this.amount(),h+=c*i/100,h+=g.amount(this.get("discount_rate2")||c)*i*f/100),this._discount=h),d(this._discount,a)},c.prototype.amount=function(a){var b,c,e,f;if(!this._amount){for(b=this.get("amount"),c=this.options(),f=0,e=c.length;e>f;f++)b+=c[f].amount;this._amount=b}return d(this._amount,a)},c.prototype.total=function(a){var b;return this._total||(b=this.get("quantity")*this.amount(),b-=this.discount(),this._total=g.amount(b)),d(this._total,a)},c.prototype.isEqual=function(a){var b=!1;if(a instanceof c&&(a=a._data),this.get("item_name")===a.item_name&&this.get("item_number")===a.item_number&&this.get("amount")===g.amount(a.amount)){var d=0;for(b=!0;"undefined"!=typeof a["os"+d];){if(this.get("os"+d)!==a["os"+d]){b=!1;break}d++}}return b},c.prototype.isValid=function(){return this.get("item_name")&&this.amount()>0},c.prototype.destroy=function(){this._data=[],this.fire("destroy",this)},b.exports=c},{"./util/currency":15,"./util/mixin":18,"./util/pubsub":19}],14:[function(a,b){"use strict";b.exports.add=function(a,b){var c;return a?void(a&&a.classList&&a.classList.add?a.classList.add(b):(c=new RegExp("\\b"+b+"\\b"),c.test(a.className)||(a.className+=" "+b))):!1},b.exports.remove=function(a,b){var c;return a?void(a.classList&&a.classList.add?a.classList.remove(b):(c=new RegExp("\\b"+b+"\\b"),c.test(a.className)&&(a.className=a.className.replace(c,"")))):!1},b.exports.inject=function(a,b){var c;
return a?void(b&&(c=document.createElement("style"),c.type="text/css",c.styleSheet?c.styleSheet.cssText=b:c.appendChild(document.createTextNode(b)),a.appendChild(c))):!1}},{}],15:[function(a,b){"use strict";var c={AED:{before:"ج"},ANG:{before:"ƒ"},ARS:{before:"$",code:!0},AUD:{before:"$",code:!0},AWG:{before:"ƒ"},BBD:{before:"$",code:!0},BGN:{before:"лв"},BMD:{before:"$",code:!0},BND:{before:"$",code:!0},BRL:{before:"R$"},BSD:{before:"$",code:!0},CAD:{before:"$",code:!0},CHF:{before:"",code:!0},CLP:{before:"$",code:!0},CNY:{before:"¥"},COP:{before:"$",code:!0},CRC:{before:"₡"},CZK:{before:"Kc"},DKK:{before:"kr"},DOP:{before:"$",code:!0},EEK:{before:"kr"},EUR:{before:"€"},GBP:{before:"£"},GTQ:{before:"Q"},HKD:{before:"$",code:!0},HRK:{before:"kn"},HUF:{before:"Ft"},IDR:{before:"Rp"},ILS:{before:"₪"},INR:{before:"Rs."},ISK:{before:"kr"},JMD:{before:"J$"},JPY:{before:"¥"},KRW:{before:"₩"},KYD:{before:"$",code:!0},LTL:{before:"Lt"},LVL:{before:"Ls"},MXN:{before:"$",code:!0},MYR:{before:"RM"},NOK:{before:"kr"},NZD:{before:"$",code:!0},PEN:{before:"S/"},PHP:{before:"Php"},PLN:{before:"z"},QAR:{before:"﷼"},RON:{before:"lei"},RUB:{before:"руб"},SAR:{before:"﷼"},SEK:{before:"kr"},SGD:{before:"$",code:!0},THB:{before:"฿"},TRY:{before:"TL"},TTD:{before:"TT$"},TWD:{before:"NT$"},UAH:{before:"₴"},USD:{before:"$",code:!0},UYU:{before:"$U"},VEF:{before:"Bs"},VND:{before:"₫"},XCD:{before:"$",code:!0},ZAR:{before:"R"}};b.exports=function(a,b){var d=b&&b.currency||"USD",e=c[d],f=e.before||"",g=e.after||"",h=e.length||2,i=e.code&&b&&b.showCode,j=a;return b&&b.format&&(j=f+j.toFixed(h)+g),i&&(j+=" "+d),j}},{}],16:[function(a,b){"use strict";b.exports=function(a,b){var c=[];return b?b.addEventListener?{add:function(a,b,d,e){e=e||a;var f=function(a){d.call(e,a)};a.addEventListener(b,f,!1),c.push([a,b,d,f])},remove:function(a,b,d){var e,f,g,h=c.length;for(g=0;h>g;g++)if(f=c[g],f[0]===a&&f[1]===b&&f[2]===d&&(e=f[3]))return a.removeEventListener(b,e,!1),c=c.slice(g),!0}}:b.attachEvent?{add:function(b,d,e,f){f=f||b;var g=function(){var b=a.event;b.target=b.target||b.srcElement,b.preventDefault=function(){b.returnValue=!1},e.call(f,b)};b.attachEvent("on"+d,g),c.push([b,d,e,g])},remove:function(a,b,d){var e,f,g,h=c.length;for(g=0;h>g;g++)if(f=c[g],f[0]===a&&f[1]===b&&f[2]===d&&(e=f[3]))return a.detachEvent("on"+b,e),c=c.slice(g),!0}}:void 0:{add:function(){},remove:function(){}}}("undefined"==typeof window?null:window,"undefined"==typeof document?null:document)},{}],17:[function(a,b){"use strict";var c=b.exports={parse:function(a){var b,d,e,f,g=a.elements,h={};for(e=0,f=g.length;f>e;e++)b=g[e],(d=c.getInputValue(b))&&(h[b.name]=d);return h},getInputValue:function(a){var b=a.tagName.toLowerCase();return"select"===b?a.options[a.selectedIndex].value:"textarea"===b?a.innerText:"radio"===a.type?a.checked?a.value:null:"checkbox"===a.type?a.checked?a.value:null:a.value}}},{}],18:[function(a,b){"use strict";b.exports=function c(a,b){var d;for(var e in b)d=b[e],d&&d.constructor===Object&&a[e]?c(a[e]||{},d):a[e]=d;return a}},{}],19:[function(a,b){"use strict";function c(){this._eventCache={}}c.prototype.on=function(a,b,c){var d=this._eventCache[a];d||(d=this._eventCache[a]=[]),d.push([b,c])},c.prototype.off=function(a,b){var c,d,e=this._eventCache[a];if(e)for(c=0,d=e.length;d>c;c++)e[c]===b&&(e=e.splice(c,1))},c.prototype.fire=function(a){var b,c,d,e,f=this._eventCache[a];if(f)for(b=0,c=f.length;c>b;b++)d=f[b][0],e=f[b][1]||this,"function"==typeof d&&d.apply(e,Array.prototype.slice.call(arguments,1))},b.exports=c},{}],20:[function(a,b){"use strict";var c=b.exports=function(a,b){this._name=a,this._duration=b||30},d=c.prototype;d.load=function(){if("object"==typeof window&&window.localStorage){var a,b,c=window.localStorage.getItem(this._name);return c&&(c=JSON.parse(decodeURIComponent(c))),c&&c.expires&&(a=new Date,b=new Date(c.expires),a>b)?void this.destroy():c&&c.value}},d.save=function(a){if("object"==typeof window&&window.localStorage){var b,c=new Date;c.setTime(c.getTime()+24*this._duration*60*60*1e3),b={value:a,expires:c.toGMTString()},window.localStorage.setItem(this._name,encodeURIComponent(JSON.stringify(b)))}},d.destroy=function(){"object"==typeof window&&window.localStorage&&window.localStorage.removeItem(this._name)}},{}],21:[function(a,b){"use strict";var c=a("ejs");b.exports=function(a,b){return c.render(a,b)},String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})},{ejs:6}],22:[function(a,b){"use strict";function c(a){var b;this.el=b=document.createElement("div"),this.model=a,this.isShowing=!1,b.id=d.name,d.parent.appendChild(b),h.inject(document.getElementsByTagName("head")[0],d.styles),e.add(document,"ontouchstart"in window?"touchstart":"click",i.click,this),e.add(document,"keyup",i.keyup,this),e.add(document,"readystatechange",i.readystatechange,this),e.add(window,"pageshow",i.pageshow,this)}var d=a("./config"),e=a("./util/events"),f=a("./util/template"),g=a("./util/forms"),h=a("./util/css"),i=a("./viewevents"),j=a("./constants");c.prototype.redraw=function(){e.remove(this.el.querySelector("form"),"submit",this.model.cart.checkout,this.model.cart),this.el.innerHTML=f(d.template,this.model),e.add(this.el.querySelector("form"),"submit",this.model.cart.checkout,this.model.cart)},c.prototype.show=function(){this.isShowing||(h.add(document.body,j.SHOWING_CLASS),this.isShowing=!0)},c.prototype.hide=function(){this.isShowing&&(h.remove(document.body,j.SHOWING_CLASS),this.isShowing=!1)},c.prototype.toggle=function(){this[this.isShowing?"hide":"show"]()},c.prototype.bind=function(a){var b=this;return j.COMMANDS[a.cmd.value]?a.hasMinicart?!1:(a.hasMinicart=!0,a.display?e.add(a,"submit",function(a){a.preventDefault(),b.show()}):e.add(a,"submit",function(c){c.preventDefault(c),b.model.cart.add(g.parse(a))}),!0):!1},c.prototype.addItem=function(a){this.redraw(),this.show();var b=this.el.querySelectorAll("."+j.ITEM_CLASS);h.add(b[a],j.ITEM_CHANGED_CLASS)},c.prototype.changeItem=function(a){this.redraw(),this.show();var b=this.el.querySelectorAll("."+j.ITEM_CLASS);h.add(b[a],j.ITEM_CHANGED_CLASS)},c.prototype.removeItem=function(){this.redraw()},b.exports=c},{"./config":10,"./constants":11,"./util/css":14,"./util/events":16,"./util/forms":17,"./util/template":21,"./viewevents":23}],23:[function(a,b){"use strict";var c,d=a("./constants"),e=a("./util/events");b.exports=c={click:function(a){var b=a.target,c=b.className;if(this.isShowing)if(c===d.CLOSER_CLASS)this.hide();else if(c===d.REMOVE_CLASS)this.model.cart.remove(b.getAttribute(d.DATA_IDX));else if(c===d.QUANTITY_CLASS)b[b.setSelectionRange?"setSelectionRange":"select"](0,999);else if(!/input|button|select|option/i.test(b.tagName)){for(;1===b.nodeType;){if(b===this.el)return;b=b.parentNode}this.hide()}},keyup:function(a){var b,c=this,e=a.target;e.className===d.QUANTITY_CLASS&&(b=setTimeout(function(){var a=parseInt(e.getAttribute(d.DATA_IDX),10),b=c.model.cart,f=b.items(a),g=parseInt(e.value,10);f&&(g>0?f.set("quantity",g):0===g&&b.remove(a))},d.KEYUP_TIMEOUT))},readystatechange:function(){if(/interactive|complete/.test(document.readyState)){var a,b,f,g;for(a=document.getElementsByTagName("form"),f=0,g=a.length;g>f;f++)b=a[f],b.cmd&&d.COMMANDS[b.cmd.value]&&this.bind(b);this.redraw(),e.remove(document,"readystatechange",c.readystatechange)}},pageshow:function(a){a.persisted&&(this.redraw(),this.hide())}}},{"./constants":11,"./util/events":16}]},{},[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]);