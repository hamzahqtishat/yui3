YUI.add("io-xdr",function(C){var A="io:xdrReady";function B(D,G){var E='<object id="yuiIoSwf" type="application/x-shockwave-flash" data="'+D+'" width="0" height="0">'+'<param name="movie" value="'+D+'">'+'<param name="FlashVars" value="yid='+G+'">'+'<param name="allowScriptAccess" value="always">'+"</object>",F=document.createElement("div");document.body.appendChild(F);F.innerHTML=E;}C.mix(C.io,{_transport:{},_fn:{},_xdr:function(D,E,F){if(F.on){this._fn[E.id]={on:F.on,arguments:F.arguments};}E.c.send(D,F,E.id);return E;},xdrReady:function(D){C.fire(A,D);},transport:function(D){var E=D.yid?D.yid:C.id;B(D.src,E);this._transport.flash=C.config.doc.getElementById("yuiIoSwf");}});},"@VERSION@",{requires:["io-base"]});