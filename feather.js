(function(a){
    a.build={
        version:"2.0.8.12",
        closureCompiled:true,
        bundled:false,
        imgrecvServer:"http://featherservices.aviary.com/FeatherReceiver.aspx",
        inAppPurchaseFrameURL:"http://purchases.viary.com/gateway.aspx?p=flickr",
        imgrecvBase:"http://featherservices.aviary.com/",
        imgtrackServer:"http://featherservices.aviary.com/featherlog.aspx",
        filterServer:"http://featherservices.aviary.com/moa.ashx",
        flashGatewayServer:"http://featherservices.aviary.com/gateway.aspx",
        jsonp_imgserver:"http://featherservices.aviary.com/imgjsonpserver.aspx",
        featherTargetAnnounce:"http://featherservices.aviary.com/feather_target_announce.html",
        featherFilterAnnounce:"http://featherservices.aviary.com/feather_filter_announce.html",
        proxyServer:"http://featherservices.aviary.com/proxy.aspx",
        feather_baseURL:window.AV_feather_baseURL||"http://feather.aviary.com/2.0.8.12/",
        feather_stickerURL:"http://feather.aviary.com/stickers/",
        googleTracker:"UA-84575-16"
    }
})(AV=window.AV||{});
var avpw_swfobject=function(){
    function a(){
        if(!E){
            try{
                var a=n.getElementsByTagName("body")[0].appendChild(n.createElement("span"));
                a.parentNode.removeChild(a)
                }catch(c){
                return
            }
            E=true;
            for(var a=H.length,f=0;f<a;f++)H[f]()
                }
            }
    function d(a){
    E?a():H[H.length]=a
    }
    function c(a){
    if(typeof A.addEventListener!=q)A.addEventListener("load",a,false);
    else if(typeof n.addEventListener!=q)n.addEventListener("load",a,false);
    else if(typeof A.attachEvent!=q)u(A,"onload",a);
    else if(typeof A.onload=="function"){
        var c=A.onload;
        A.onload=function(){
            c();
            a()
            }
        }else A.onload=a
    }
    function e(){
    var a=n.getElementsByTagName("body")[0],c=n.createElement(x);
    c.setAttribute("type",I);
    var d=a.appendChild(c);
    if(d){
        var e=0;
        (function(){
            if(typeof d.GetVariable!=q){
                var i=d.GetVariable("$version");
                if(i)i=i.split(" ")[1].split(","),l.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)]
                    }else if(e<10){
                e++;
                setTimeout(arguments.callee,10);
                return
            }
            a.removeChild(c);
            d=null;
            f()
            })()
        }else f()
        }
        function f(){
    var a=C.length;
    if(a>0)for(var c=0;c<a;c++){
        var f=
        C[c].id,d=C[c].callbackFn,e={
            success:false,
            id:f
        };
        
        if(l.pv[0]>0){
            var k=p(f);
            if(k)if(y(C[c].swfVersion)&&!(l.wk&&l.wk<312)){
                if(z(f,true),d)e.success=true,e.ref=i(f),d(e)
                    }else if(C[c].expressInstall&&h()){
                e={};
                
                e.data=C[c].expressInstall;
                e.width=k.getAttribute("width")||"0";
                e.height=k.getAttribute("height")||"0";
                if(k.getAttribute("class"))e.styleclass=k.getAttribute("class");
                if(k.getAttribute("align"))e.align=k.getAttribute("align");
                for(var o={},k=k.getElementsByTagName("param"),v=k.length,w=0;w<v;w++)k[w].getAttribute("name").toLowerCase()!=
                    "movie"&&(o[k[w].getAttribute("name")]=k[w].getAttribute("value"));
                j(e,o,f,d)
                }else m(k),d&&d(e)
                }else if(z(f,true),d){
            if((f=i(f))&&typeof f.SetVariable!=q)e.success=true,e.ref=f;
            d(e)
            }
        }
    }
    function i(a){
    var c=null;
    if((a=p(a))&&a.nodeName=="OBJECT")typeof a.SetVariable!=q?c=a:(a=a.getElementsByTagName(x)[0])&&(c=a);
    return c
    }
    function h(){
    return!J&&y("6.0.65")&&(l.win||l.mac)&&!(l.wk&&l.wk<312)
    }
    function j(a,c,f,d){
    J=true;
    M=d||null;
    O={
        success:false,
        id:f
    };
    
    var e=p(f);
    if(e){
        e.nodeName=="OBJECT"?(G=o(e),K=null):
        (G=e,K=f);
        a.id=P;
        if(typeof a.width==q||!/%$/.test(a.width)&&parseInt(a.width,10)<310)a.width="310";
        if(typeof a.height==q||!/%$/.test(a.height)&&parseInt(a.height,10)<137)a.height="137";
        n.title=n.title.slice(0,47)+" - Flash Player Installation";
        d=l.ie&&l.win?"ActiveX":"PlugIn";
        d="MMredirectURL="+encodeURI(window.location).toString().replace(/&/g,"%26")+"&MMplayerType="+d+"&MMdoctitle="+n.title;
        typeof c.flashvars!=q?c.flashvars+="&"+d:c.flashvars=d;
        if(l.ie&&l.win&&e.readyState!=4)d=n.createElement("div"),
            f+="SWFObjectNew",d.setAttribute("id",f),e.parentNode.insertBefore(d,e),e.style.display="none",function(){
                e.readyState==4?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)
                }();
        k(a,c,f)
        }
    }
function m(a){
    if(l.ie&&l.win&&a.readyState!=4){
        var c=n.createElement("div");
        a.parentNode.insertBefore(c,a);
        c.parentNode.replaceChild(o(a),c);
        a.style.display="none";
        (function(){
            a.readyState==4?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)
            })()
        }else a.parentNode.replaceChild(o(a),a)
        }
        function o(a){
    var c=
    n.createElement("div");
    if(l.win&&l.ie)c.innerHTML=a.innerHTML;
    else if(a=a.getElementsByTagName(x)[0])if(a=a.childNodes)for(var f=a.length,d=0;d<f;d++)!(a[d].nodeType==1&&a[d].nodeName=="PARAM")&&a[d].nodeType!=8&&c.appendChild(a[d].cloneNode(true));
    return c
    }
    function k(a,c,f){
    var d,e=p(f);
    if(l.wk&&l.wk<312)return d;
    if(e){
        if(typeof a.id==q)a.id=f;
        if(l.ie&&l.win){
            var i="",h;
            for(h in a)if(a[h]!=Object.prototype[h])h.toLowerCase()=="data"?c.movie=a[h]:h.toLowerCase()=="styleclass"?i+=' class="'+a[h]+'"':
                h.toLowerCase()!="classid"&&(i+=" "+h+'="'+a[h]+'"');h="";
            for(var j in c)c[j]!=Object.prototype[j]&&(h+='<param name="'+j+'" value="'+c[j]+'" />');e.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+h+"</object>";
            L[L.length]=a.id;
            d=p(a.id)
            }else{
            j=n.createElement(x);
            j.setAttribute("type",I);
            for(var k in a)a[k]!=Object.prototype[k]&&(k.toLowerCase()=="styleclass"?j.setAttribute("class",a[k]):k.toLowerCase()!="classid"&&j.setAttribute(k,a[k]));for(i in c)c[i]!=Object.prototype[i]&&
                i.toLowerCase()!="movie"&&(a=j,h=i,k=c[i],f=n.createElement("param"),f.setAttribute("name",h),f.setAttribute("value",k),a.appendChild(f));e.parentNode.replaceChild(j,e);
            d=j
            }
        }
    return d
}
function s(a){
    var c=p(a);
    if(c&&c.nodeName=="OBJECT")l.ie&&l.win?(c.style.display="none",function(){
        if(c.readyState==4){
            var f=p(a);
            if(f){
                for(var d in f)typeof f[d]=="function"&&(f[d]=null);f.parentNode.removeChild(f)
                }
            }else setTimeout(arguments.callee,10)
        }()):c.parentNode.removeChild(c)
    }
    function p(a){
    var c=null;
    try{
        c=n.getElementById(a)
        }catch(f){}
    return c
    }
function u(a,c,f){
    a.attachEvent(c,f);
    F[F.length]=[a,c,f]
    }
    function y(a){
    var c=l.pv,a=a.split(".");
    a[0]=parseInt(a[0],10);
    a[1]=parseInt(a[1],10)||0;
    a[2]=parseInt(a[2],10)||0;
    return c[0]>a[0]||c[0]==a[0]&&c[1]>a[1]||c[0]==a[0]&&c[1]==a[1]&&c[2]>=a[2]?true:false
    }
    function w(a,c,f,d){
    if(!l.ie||!l.mac){
        var e=n.getElementsByTagName("head")[0];
        if(e){
            f=f&&typeof f=="string"?f:"screen";
            d&&(N=B=null);
            if(!B||N!=f)d=n.createElement("style"),d.setAttribute("type","text/css"),d.setAttribute("media",f),B=e.appendChild(d),
                l.ie&&l.win&&typeof n.styleSheets!=q&&n.styleSheets.length>0&&(B=n.styleSheets[n.styleSheets.length-1]),N=f;
            l.ie&&l.win?B&&typeof B.addRule==x&&B.addRule(a,c):B&&typeof n.createTextNode!=q&&B.appendChild(n.createTextNode(a+" {"+c+"}"))
            }
        }
}
function z(a,c){
    if(Q){
        var f=c?"visible":"hidden";
        E&&p(a)?p(a).style.visibility=f:w("#"+a,"visibility:"+f)
        }
    }
function v(a){
    return/[\\\"<>\.;]/.exec(a)!=null&&typeof encodeURIComponent!=q?encodeURIComponent(a):a}var q="undefined",x="object",I="application/x-shockwave-flash",
P="SWFObjectExprInst",A=window,n=document,D=navigator,R=false,H=[function(){
    R?e():f()
    }],C=[],L=[],F=[],G,K,M,O,E=false,J=false,B,N,Q=true,l=function(){
    var a=typeof n.getElementById!=q&&typeof n.getElementsByTagName!=q&&typeof n.createElement!=q,c=D.userAgent.toLowerCase(),f=D.platform.toLowerCase(),d=f?/win/.test(f):/win/.test(c),f=f?/mac/.test(f):/mac/.test(c),c=/webkit/.test(c)?parseFloat(c.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,e=!+"\u000b1",i=[0,0,0],h=null;
    if(typeof D.plugins!=q&&
        typeof D.plugins["Shockwave Flash"]==x){
        if((h=D.plugins["Shockwave Flash"].description)&&!(typeof D.mimeTypes!=q&&D.mimeTypes[I]&&!D.mimeTypes[I].enabledPlugin))R=true,e=false,h=h.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),i[0]=parseInt(h.replace(/^(.*)\..*$/,"$1"),10),i[1]=parseInt(h.replace(/^.*\.(.*)\s.*$/,"$1"),10),i[2]=/[a-zA-Z]/.test(h)?parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0
            }else if(typeof A.ActiveXObject!=q)try{
        var j=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        if(j&&(h=j.GetVariable("$version")))e=
            true,h=h.split(" ")[1].split(","),i=[parseInt(h[0],10),parseInt(h[1],10),parseInt(h[2],10)]
            }catch(k){}
        return{
        w3:a,
        pv:i,
        wk:c,
        ie:e,
        win:d,
        mac:f
    }
}();
(function(){
    l.w3&&((typeof n.readyState!=q&&n.readyState=="complete"||typeof n.readyState==q&&(n.getElementsByTagName("body")[0]||n.body))&&a(),E||(typeof n.addEventListener!=q&&n.addEventListener("DOMContentLoaded",a,false),l.ie&&l.win&&(n.attachEvent("onreadystatechange",function(){
        n.readyState=="complete"&&(n.detachEvent("onreadystatechange",arguments.callee),
            a())
        }),A==top&&function(){
        if(!E){
            try{
                n.documentElement.doScroll("left")
                }catch(c){
                setTimeout(arguments.callee,0);
                return
            }
            a()
            }
        }()),l.wk&&function(){
        E||(/loaded|complete/.test(n.readyState)?a():setTimeout(arguments.callee,0))
        }(),c(a)))
})();
(function(){
    l.ie&&l.win&&window.attachEvent("onunload",function(){
        for(var a=F.length,c=0;c<a;c++)F[c][0].detachEvent(F[c][1],F[c][2]);
        a=L.length;
        for(c=0;c<a;c++)s(L[c]);
        for(var f in l)l[f]=null;l=null;
        for(var d in avpw_swfobject)avpw_swfobject[d]=null;avpw_swfobject=
        null
        })
    })();
return{
    registerObject:function(a,c,f,d){
        if(l.w3&&a&&c){
            var e={};
            
            e.id=a;
            e.swfVersion=c;
            e.expressInstall=f;
            e.callbackFn=d;
            C[C.length]=e;
            z(a,false)
            }else d&&d({
            success:false,
            id:a
        })
        },
    getObjectById:function(a){
        if(l.w3)return i(a)
            },
    embedSWF:function(a,c,f,e,i,m,o,v,w,n){
        var p={
            success:false,
            id:c
        };
        
        l.w3&&!(l.wk&&l.wk<312)&&a&&c&&f&&e&&i?(z(c,false),d(function(){
            f+="";
            e+="";
            var d={};
            
            if(w&&typeof w===x)for(var l in w)d[l]=w[l];d.data=a;
            d.width=f;
            d.height=e;
            l={};
            
            if(v&&typeof v===x)for(var s in v)l[s]=
                v[s];if(o&&typeof o===x)for(var u in o)typeof l.flashvars!=q?l.flashvars+="&"+u+"="+o[u]:l.flashvars=u+"="+o[u];if(y(i))s=k(d,l,c),d.id==c&&z(c,true),p.success=true,p.ref=s;
            else if(m&&h()){
                d.data=m;
                j(d,l,c,n);
                return
            }else z(c,true);
            n&&n(p)
            })):n&&n(p)
        },
    switchOffAutoHideShow:function(){
        Q=false
        },
    ua:l,
    getFlashPlayerVersion:function(){
        return{
            major:l.pv[0],
            minor:l.pv[1],
            release:l.pv[2]
            }
        },
hasFlashPlayerVersion:y,
createSWF:function(a,c,f){
    if(l.w3)return k(a,c,f)
        },
showExpressInstall:function(a,c,f,d){
    l.w3&&
    h()&&j(a,c,f,d)
    },
removeSWF:function(a){
    l.w3&&s(a)
    },
createCSS:function(a,c,f,d){
    l.w3&&w(a,c,f,d)
    },
addDomLoadEvent:d,
addLoadEvent:c,
getQueryParamValue:function(a){
    var c=n.location.search||n.location.hash;
    if(c){
        /\?/.test(c)&&(c=c.split("?")[1]);
        if(a==null)return v(c);
        for(var c=c.split("&"),f=0;f<c.length;f++)if(c[f].substring(0,c[f].indexOf("="))==a)return v(c[f].substring(c[f].indexOf("=")+1))
            }
            return""
    },
expressInstallCallback:function(){
    if(J){
        var a=p(P);
        if(a&&G){
            a.parentNode.replaceChild(G,a);
            if(K&&
                (z(K,true),l.ie&&l.win))G.style.display="block";
            M&&M(O)
            }
            J=false
        }
    }
}
}();
typeof AV==="undefined"&&(AV={});
AV.FlashAPI=function(){
    var a=null,d=function(){
        return function(a,c,d,e,m){
            var m=m||{},o={};
            
            o.id=a;
            o.name=a;
            if(AV.msie&&AV.msie<9)o.align="center";
            var k,s=a+"Content",d=d||"100%",e=e||"100%",p=m,u={
                quality:"high",
                bgcolor:"#808080",
                allowscriptaccess:"always",
                allowfullscreen:"true"
            };
            
            d+="";
            e+="";
            m={};
            
            if(o&&typeof o==="object")for(var y in o)m[y]=o[y];m.data=c||a+".swf";
            m.width=d;
            m.height=e;
            a={};
            
            if(u&&typeof u==="object")for(var w in u)a[w]=u[w];if(p&&typeof p==="object")for(var z in p)typeof a.flashvars!="undefined"?
                a.flashvars+="&"+z+"="+p[z]:a.flashvars=z+"="+p[z];if(w=document.getElementById(s)){
                if(typeof m.id=="undefined")m.id=s;
                if(AV.msie){
                    k="";
                    for(var v in m)if(m[v]!=Object.prototype[v])v.toLowerCase()=="data"?a.movie=m[v]:v.toLowerCase()=="styleclass"?k+=' class="'+m[v]+'"':v.toLowerCase()!="classid"&&(k+=" "+v+'="'+m[v]+'"');v="";
                    for(var q in a)a[q]!=Object.prototype[q]&&(v+='<param name="'+q+'" value="'+a[q]+'" />');w.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+k+">"+v+"</object>";
                    typeof objIdArr=="undefined"&&(objIdArr=[]);
                    objIdArr[objIdArr.length]=m.id
                    }else{
                    q=document.createElement("object");
                    q.setAttribute("type","application/x-shockwave-flash");
                    for(var x in m)m[x]!=Object.prototype[x]&&(x.toLowerCase()=="styleclass"?q.setAttribute("class",m[x]):x.toLowerCase()!="classid"&&q.setAttribute(x,m[x]));for(k in a)a[k]!=Object.prototype[k]&&k.toLowerCase()!="movie"&&(v=q,x=k,s=a[k],m=document.createElement("param"),m.setAttribute("name",x),m.setAttribute("value",s),v.appendChild(m));
                    w.parentNode.replaceChild(q,w)
                    }
                }
        }
}(),c=function(){};

c.prototype=function(){
    return{
        getPlugins:function(){
            return[]
            },
        createCanvas:function(){
            this.initsize?d("canvas",AV.build.feather_baseURL+"canvas.swf",this.initsize.width,this.initsize.height):d("canvas",AV.build.feather_baseURL+"canvas.swf");
            d("avpw_flashThumb1",AV.build.feather_baseURL+"Thumb.swf","64px","64px",{
                callback:"AV.FlashAPI.onThumbClick",
                uid:"avpw_flashThumb1"
            });
            d("avpw_flashThumb2",AV.build.feather_baseURL+"Thumb.swf","64px","64px",{
                callback:"AV.FlashAPI.onThumbClick",
                uid:"avpw_flashThumb2"
            });
            d("avpw_flashThumb3",AV.build.feather_baseURL+"Thumb.swf","64px","64px",{
                callback:"AV.FlashAPI.onThumbClick",
                uid:"avpw_flashThumb3"
            });
            d("avpw_flashThumb4",AV.build.feather_baseURL+"Thumb.swf","64px","64px",{
                callback:"AV.FlashAPI.onThumbClick",
                uid:"avpw_flashThumb4"
            })
            },
        onSave:function(a){
            return this.onEndEditing(a)
            },
        onEndEditing:function(a){
            a.commit(AV.FlashAPI.constants.UPLOAD_TO_AVIARY,{
                url:"http://test.viary.com/apps/xmlapi/receiver.aspx?auid=aviaryframework",
                name:"image2"
            })
            },
        onCommitComplete:function(a){
            AV.controlsWidget_onImageSaved(a.url,a.hiresurl)
            },
        _onComponentLoaded:function(a){
            switch(a){
                case "canvas":
                    a=document.getElementById(a),AV.FlashAPI._onCanvasLoaded(a)
                    }
                },
    _onComponentReady:function(a){
        if(a==="canvas")for(var c in AV.controlsWidgetInstance.activeTools)if(a=AV.controlsWidgetInstance.activeTools[c],!AV.paintWidgetInstance.moduleHasLoaded[a]&&AV.toolDefaults[a]&&AV.toolDefaults[a].files)AV.paintWidgetInstance.onModuleLoaded(a)
            }
        }
}();
var e={
    listenerList:{},
    addListener:function(a,
        c){
        this.listenerList.hasOwnProperty(a)||(this.listenerList[a]=[]);
        this.listenerList[a].push(c)
        },
    removeAllListeners:function(){
        this.listenerList={}
    },
doCallbacks:function(a){
    var c,d;
    if(this.listenerList.hasOwnProperty(a)){
        d=this.listenerList[a];
        for(c=0;c<d.length;c++)d[c](a)
            }
        },
shutdown:function(){
    this.removeAllListeners()
    }
};

return function(){
    return{
        constants:{
            UPLOAD_TO_SERVER:"UPLOAD_TO_SERVER",
            UPLOAD_TO_AVIARY:"UPLOAD_TO_AVIARY",
            GET_IMAGE_DATA:"GET_IMAGE_DATA",
            REPLACE_IMAGE:"REPLACE_IMAGE"
        },
        mapToFlashToolName:function(a){
            switch(a){
                case "rotate":
                    return"rotate90"
                    }
                    return a
            },
        mapFromFlashToolName:function(a){
            switch(a){
                case "rotate90":
                    return"rotate"
                    }
                    return a
            },
        customBridge:function(a){
            var d=function(){};
            
            d.prototype=new c;
            d.prototype.constructor=c;
            for(var e in a)d.prototype[e]=a[e];return d
            },
        activate:function(a){
            this.bridge=a||new c;
            this.goldenEggCallback=null
            },
        startEditing:function(a){
            this.canvas=null;
            this.active_target=a;
            this.bridge.createCanvas();
            null!=this.canvas&&this._setupEditing(AV.launchData.url||null)
            },
        restartEditing:function(a){
            this.active_target=a;
            this._setupEditing()
            },
        save:function(){
            this.bridge.onSave(this.canvas)
            },
        close:function(){
            e.shutdown()
            },
        runGoldenEgg:function(a,c,d,e){
            this.goldenEggCallback=e;
            this.canvas.renderGoldenEgg(a,c,d)
            },
        doCrop:function(){
            this.canvas.executeCrop()
            },
        endEditing:function(){
            this.bridge.onEndEditing(this.canvas);
            this.goldenEggCallback=null
            },
        activatePlugin:function(a){
            this.canvas.activatePlugin(a)
            },
        deactivatePlugin:function(a){
            this.canvas.deactivatePlugin(a)
            },
        changeProperty:function(a,c){
            this.canvas.changeProperty(a,c)
            },
        commitChangesFromPlugin:function(a){
            this.canvas.commitChangesFromPlugin(a)
            },
        discardChangesFromPlugin:function(a){
            this.canvas.discardChangesFromPlugin(a)
            },
        resizeCanvas:function(a,c){
            var d=this.canvas;
            d.width=a+"px";
            d.height=c+"px"
            },
        getCanvasWidth:function(){
            return parseInt(this.canvas.width)
            },
        getCanvasHeight:function(){
            return parseInt(this.canvas.height)
            },
        hideCanvas:function(){
            if(this.canvas)this.canvas.style.visibility="hidden"
                },
        showCanvas:function(){
            if(this.canvas)this.canvas.style.visibility="visible"
                },
        getScaleFactor:function(){
            var a=this.canvas.bitmapScaleRatio();
            return a&&
            a>0?1/a:1
            },
        executePlugin:function(){
            this.canvas.executePlugin()
            },
        renderPreview:function(a,c){
            this.canvas.renderPreview(a,c)
            },
        getDynamicPropertyDefaultValue:function(a){
            return this.canvas.getDynamicPropertyDefaultValue(a)
            },
        syncProperty:function(){},
        syncPreview:function(){},
        setCanvasDataArray:function(a,c,d){
            AV.canvasDataReceiver&&AV.canvasDataReceiver.apply(this,[a,c,d])
            },
        onThumbClick:function(a){
            e.doCallbacks(a)
            },
        addThumbClickListener:function(a,c){
            e.addListener(a,c)
            },
        removeAllThumbClickListeners:function(){
            e.removeAllListeners()
            },
        setThumb:function(a,c){
            var d=document.getElementById("avpw_flashThumb"+a);
            d&&d.refreshThumb(c)
            },
        getHistory:function(){
            return this.canvas.getHistory()
            },
        getFlashGatewayServer:function(){
            return AV.build.flashGatewayServer
            },
        getHiResStickerUrl:function(a){
            return AV.paintWidgetInstance&&AV.paintWidgetInstance.overlayRegistry?AV.paintWidgetInstance.overlayRegistry.getHiRes(a):null
            },
        getImageData:function(c,d){
            d&&typeof d==="function"&&(a=d);
            this.canvas.commit(AV.FlashAPI.constants.GET_IMAGE_DATA,{})
            },
        getMaxSize:function(){
            return AV.launchData.maxEditSize||
            AV.launchData.maxSize
            },
        getMaxBitmapSize:function(){
            var a=0;
            AV.launchData.openType=="aviary"&&(a=AV.launchData.maxSize);
            return a
            },
        _cropSelectionStarted:function(){},
        _onPreviewRendered:function(){},
        _onPluginLoaded:function(a){
            AV.paintWidgetInstance.onModuleLoaded(a)
            },
        _onImageLoaded:function(){
            AV.paintWidgetLauncher_Flash_stage2&&AV.paintWidgetLauncher_Flash_stage2()
            },
        _onGoldenEggComplete:function(){
            this.goldenEggCallback&&this.goldenEggCallback()
            },
        _onCanvasLoaded:function(a){
            this.canvas=a;
            this._setupEditing(AV.launchData.url||
                null)
            },
        _onCommitComplete:function(a){
            this.bridge.onCommitComplete(a)
            },
        _onGetImageDataComplete:function(c){
            a&&(a.apply(this,[c]),a=null)
            },
        _setupEditing:function(a){
            var c=this.bridge.getPlugins(),a=a||this.active_target.src;
            this.canvas.setup(AV.FlashAPI._proxify(a),c)
            },
        _proxify:function(a){
            AV.build.proxyServer&&(a=AV.build.proxyServer+"?url="+a);
            return a
            },
        _onUndo:function(){
            this.canvas.undo()
            },
        _onRedo:function(){
            this.canvas.redo()
            },
        setCheckpoint:function(a){
            this.canvas.setCheckpoint(a)
            },
        isACheckpoint:function(){
            return this.canvas.isACheckpoint()
            },
        undoToCheckpoint:function(){
            this.canvas.undoToCheckpoint()
            },
        init:function(a){
            AV.FlashAPI.activate(function(){
                if(!a)return new c;
                if(a.plugins){
                    for(var d=[],e=a.plugins,j=0;j<e.length;++j){
                        var m=AV.FlashAPI.mapToFlashToolName(e[j]),o=AV.toolDefaults[e[j]];
                        o&&o.files&&d.push({
                            id:m,
                            presets:o.presetsFlash,
                            files:o.files
                            })
                        }
                        if(d.length>0)a.getPlugins=function(){
                        return d
                        };
                        
                    delete a.plugins
                    }
                    if(a.action){
                    var k=a.action;
                    a.onSave=function(a){
                        var c=k.type;
                        k=AV.util.extend(k,{
                            posturl_:AV.launchData.postUrl,
                            hiresUrl_:AV.launchData.hiresUrl,
                            postdata_:AV.launchData.postData,
                            partnerHash_:AV.launchData.apiKey,
                            contenttype_:AV.launchData.fileFormat,
                            jpgQuality_:AV.launchData.jpgQuality,
                            debug_:AV.launchData.debug,
                            asyncSave_:AV.launchData.asyncSave,
                            signature_:AV.launchData.signature,
                            timestamp_:AV.launchData.timestamp,
                            useCustomFileExpiration_:AV.launchData.useCustomFileExpiration
                            });
                        a.commit(c,k)
                        };
                        
                    delete a.action
                    }
                    e=function(){};
                
                e.prototype=new c;
                e.prototype.constructor=c;
                for(var s in a)e.prototype[s]=a[s];return new e
                }())
            }
        }
}()
}();
typeof AV=="undefined"&&(AV={});
AV.usageTracker=function(){
    var a=null,d={},c=0,e=[],f,i=true,h=false,j={},m,o,k,s,p,u,y=function(){
        AV.controlsWidgetInstance&&AV.usageTracker.submit("close")
        },w=function(){
        window._gaq=window._gaq||[];
        if(typeof _gat==="undefined"){
            var a=document.createElement("script");
            a.type="text/javascript";
            a.async=true;
            a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";
            var c=document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(a,c)
            }
            h||(_gaq.push(["Feather._setAccount",
            AV.build.googleTracker]),_gaq.push(["Feather._setCustomVar",1,"apikey",AV.launchData.apiKey]),_gaq.push(["Feather._setCustomVar",2,"featherversion",AV.build.version]),_gaq.push(["Feather._setCustomVar",3,"sessionid",this.getUUID()]),_gaq.push(["Feather._setCustomVar",4,"language",AV.launchData.language]),h=true)
        },z=function(){
        avpw$.each(d,function(a,c){
            _gaq.push(["Feather._trackEvent","toolusage",a,"count",c])
            })
        };
        
    j.setup=function(){
        avpw$(window).bind("unload",y)
        };
        
    j.shutdown=function(){
        avpw$(window).unbind("unload",
            y)
        };
        
    j.clear=function(){
        a=null;
        d={};
        
        c=0;
        e=[]
        };
        
    j.getUUID=function(){
        return a?a:a=Math.floor(Math.random()*4294967295).toString(16)+Math.floor(Math.random()*4294967295).toString(16)
        };
        
    j.addUsage=function(a,e){
        e||(e=1);
        d[a]===void 0?d[a]=e:d[a]+=e;
        c+=e
        };
        
    j.setPageCount=function(a){
        var c;
        e=Array(a);
        for(c=0;c<a;c++)e[c]=0
            };
            
    j.addPageHit=function(a){
        a!==f&&e[a]++;
        f=a
        };
        
    j.submit=function(a){
        if(a==="firstclick")if(i)i=false;else return;
        w.call(this);
        a==="launch"?_gaq.push(["Feather._trackPageview"]):_gaq.push(["Feather._trackEvent",
            "submit",a,"totalcount",c]);
        m||(m=avpw$("#avpw_track_form"),o=avpw$("#avpw_track_form_action"),k=avpw$("#avpw_track_form_sessionid"),s=avpw$("#avpw_track_form_apikey"),p=avpw$("#avpw_track_form_data"),u=avpw$("#avpw_img_track_target_holder"));
        if(AV.build.imgtrackServer&&AV.JSON){
            o.val(a);
            k.val(this.getUUID());
            s.val(AV.launchData.apiKey);
            switch(a){
                case "close":
                    a={
                    dataver:1,
                    opentype:AV.launchData.openType,
                    pagehits:e,
                    toolusage:d
                };
                
                p.val(AV.JSON.stringify(a));
                    z();
                    break;
                case "firstclick":
                    a={
                    toolusage:d
                };
                p.val(AV.JSON.stringify(a));
                    z();
                    break;
                default:
                    p.val("")
                    }
                    u.html(AV.buildHiddenFrame("avpw_img_track_target"));
            avpw$("#avpw_img_track_target").load(function(){
                setTimeout(function(){
                    u.empty()
                    },5)
                });
            setTimeout(function(){
                m.submit()
                },5)
            }
        };
    
return j
}();
AV.PurchaseManager=function(a){
    var d={
        EFFECT:"effect",
        STICKER:"sticker"
    },c={},e,f=function(a){
        var c=a.resourceUrl;
        if(c)c.indexOf("http")===-1&&(c=AV.build.feather_baseURL+c),a.resourceUrl=c
            },i=function(a){
        for(var c=0;c<e.length;c++)for(var d=0;d<a.length;d++)if(a[d].assetId===e[c].assetId)e[c].purchased=true,AV.util.extend(e[c],a[d]),f(e[c])
            },h=function(a){
        var c=[];
        if(a)for(var a=d[a],f=0;f<e.length;f++)e[f].assetType===a&&c.push(e[f]);else c=e.slice(0);
        return c
        },j=this;
    j.getAssets=function(a,d){
        window.setTimeout(function(){
            try{
                return window.avpw_purchase_frame.postMessage("getAssets",
                    "*"),c.getAssets=d,true
                }catch(a){
                return false
                }
            },2E3)
    };
    
j.getPurchasedAssets=a?function(a,d){
    if(!e)return j.getAssets(a,function(c){
        e=c;
        for(c=0;c<e.length;c++)f(e[c]);
        j.getPurchasedAssets(a,d)
        }),false;
    try{
        return window.avpw_purchase_frame.postMessage("getPurchasedAssets","*"),c.getPurchasedAssets=function(c){
            i(c);
            d&&d.apply(this,[h(a)])
            },true
        }catch(k){
        return false
        }
    }:function(a,c){
    e=[{
        needsPurchase:false,
        assetId:"original_effects",
        assetType:"effect",
        displayName:"Original",
        resourceUrl:"js/effects_original_effects.js"
    },

    {
        needsPurchase:false,
        assetId:"original_stickers",
        assetType:"sticker",
        displayName:"Original",
        resourceUrl:"js/stickers_original_stickers.js"
    }];
    c&&AV.util.nextFrame(function(){
        for(var d=0;d<e.length;d++)f(e[d]);
        c.apply(this,[h(a)])
        });
    return true
    };
    
j.getById=function(a){
    for(var c=0;c<e.length;c++)if(e[c].assetId===a)return e[c]
        };
        
j.showAssetPurchaseView=function(a,d){
    var e={
        messageName:"showAssetPurchaseView",
        assetId:a
    },e=AV.JSON.stringify(e);
    try{
        return window.avpw_purchase_frame.postMessage(e,"*"),c.showAssetPurchaseView=
        function(){
            j.showAssetPurchasePopup(a,d)
            },true
        }catch(f){
        return false
        }
    };

j.showAssetPurchasePopup=function(a,d){
    avpw$("#avpw_purchase_frame").show();
    AV.controlsWidgetInstance.messager.show("avpw_purchase_pack",true);
    avpw$("#avpw_purchase_pack_close").bind("click",j.hideAssetPurchasePopup);
    c.getPurchasedAssets=function(c){
        i(c);
        c=j.getById(a);
        d&&typeof d==="function"&&c&&d.apply(this,[c]);
        j.hideAssetPurchasePopup()
        }
    };

j.hideAssetPurchasePopup=function(){
    c.getPurchasedAssets=null;
    avpw$("#avpw_purchase_frame").hide();
    AV.controlsWidgetInstance.messager.hide("avpw_purchase_pack");
    avpw$("#avpw_purchase_pack_close").unbind("click",j.hideAssetPurchasePopup)
    };
    
j.messageHandler=function(a){
    a.messageName&&c[a.messageName]&&c[a.messageName].apply(this,[a.data])
    };
    
a&&(window.avpw_purchase_frame||avpw$("#avpw_messaging").append(AV.template[AV.launchData.layout].inAppPurchaseFrame({
    src:AV.build.inAppPurchaseFrameURL
    })));
return j
};
AV.getActiveTools=function(a,d){
    var c=a;
    typeof a==="string"&&(c=a.split(","));
    var e=[],f,i={},h;
    if(d)for(h=0;h<d.length;h++)f=d[h],i[f]=true;
    for(h=0;h<c.length;h++)if(f=c[h],!(d&&f in i)&&(f==="stickers"&&(f="overlay"),f==="draw"&&(f="drawing"),e.push(f),AV.launchData.openType!=="aviary"&&AV.launchData.openType!=="mobile"&&f==="overlay"&&(f=AV.launchData.stickers,f[0]&&f[0].contents)))for(var j=1;j<f.length;j++)e.push("overlay");return e
    };
AV.paintWidgetGetPopupEmbedDiv=function(a){
    var d=avpw$("#avpw_canvas_embed_popup");
    if(a){
        var c=avpw$(a),e,f,i="top,left,bottom,right,margin-top,margin-right,margin-bottom,margin-left,border-top,border-right,border-bottom,border-left,padding-top,padding-right,padding-bottom,padding-left".split(","),h={
            position:"relative"
        };
        
        for(e=0;e<i.length;e++)f=i[e],h[f]=c.css(f);
        c=avpw$(a).css("display");
        if(c==""||c=="inline")c="inline-block";
        h.display=c;
        if(d.length==0)d=document.createElement("div"),d.id="avpw_canvas_embed_popup";
        avpw$(d).hide().css(h).insertBefore(a)
        }
        return d
    };
    
AV.paintWidgetLauncher=function(a,d){
    if(!AV.paintWidgetInstance)return AV.usageTracker.clear(),AV.featherUseFlash?AV.paintWidgetLauncher_Flash(a,d):AV.paintWidgetLauncher_HTML(a,d)
        };
AV.paintWidgetLauncher_Flash=function(a,d){
    function c(){
        avpw$(h).unbind("load",c);
        AV.msie&&AV.msie==7&&(avpw$("#avpw_controls").css("visibility","hidden"),avpw$("#avpw_controls").show());
        AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"placeControls_Flash",[AV.launchData.appendTo]);
        AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"enableControls");
        m=AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"getScaledImageDims_Flash",[h]);
        o=m.width;
        k=m.height;
        if(AV.launchData.openType==
            "aviary")s=o>k?o:k,AV.launchData.maxEditSize=s;
        AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&AV.controlsWidgetInstance.setMinWidth(o);
        AV.paintWidgetInstance=new AV.PaintWidget(o,k);
        AV.paintWidgetInstance.setOrigSize(o,k);
        p=AV.launchData.hiresWidth;
        u=AV.launchData.hiresHeight;
        p||u?(p=p?parseInt(p):0,u=u?parseInt(u):0,s=p>u?p:u):s=AV.launchData.openType=="aviary"?AV.launchData.maxSize:h.width>h.height?h.width:h.height;
        AV.controlsWidgetInstance.setActionListScaleFactor(s);
        AV.controlsWidgetInstance.setImageScaledIndicator();
        if(AV.launchData.openType=="aviary")var e=AV.template[AV.launchData.layout].flashCanvasBox({
            id:"canvasContent"
        });else e=document.createElement("div"),e.id="canvasContent";
        avpw$(j).append(e);
        AV.controlsWidgetInstance.initAllTools.call(AV.controlsWidgetInstance);
        var i={
            initsize:m,
            plugins:y,
            action:{
                origUrl_:d?d:f.src,
                sessionID_:AV.usageTracker.getUUID(),
                referrerUrl_:window.location.href,
                type:AV.FlashAPI.constants.UPLOAD_TO_AVIARY,
                url:AV.build.imgrecvServer,
                name:"file"
            }
        };
        
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,
        "hideOriginalImage",[f]);
    AV.launchData.openType=="aviary"&&AV.util.nextFrame(function(){
        AV.controlsWidgetInstance.setupScrollPanels()
        });
    AV.setUpOstrich();
    AV.msie&&AV.msie==7&&(avpw$("#avpw_controls").hide(),avpw$("#avpw_controls").css("visibility","visible"));
    avpw$("#avpw_controls").fadeIn(300);
    AV.launchData.noCloseButton&&avpw$("#avpw_control_cancel_pane").css("display","none");
    setTimeout(function(){
        AV.FlashAPI.init(i);
        AV.FlashAPI.startEditing(a);
        AV.controlsWidgetInstance.initWithPaintWidget(AV.paintWidgetInstance);
        AV.controlsWidgetInstance.setPanelMode(null);
        AV.controlsWidgetInstance.loaderPhase=1
        },300)
    }
    function e(){
    AV.util.imgOnLoad(h,c);
    avpw$(h).attr("src",i)
    }
    var f=AV.util.getImageElem(a),i=f.src,h,j,m,o,k,s,p,u,y=AV.getActiveTools(AV.launchData.tools,["whiten","barrel","bulge","pinch"]);
    AV.controlsWidgetInstance=new AV.ControlsWidget(null,a,y);
    avpw$(".avpw_isa_previewcanvas").hide();
    j=AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"getEmbedElement",[f]);
    avpw$(j).show();
    window.addEventListener&&
    window.addEventListener("message",AV.controlsWidget_MessageHandler,false);
    h=document.createElement("img");
    avpw$(h).css({
        display:"block",
        visibility:"hidden",
        position:"absolute"
    }).attr("src",d?d:f.src);
    AV.build.bundled?e():AV.util.loadFile(AV.build.feather_baseURL+"js/featherpaint_flash.js","js",e)
    };
AV.paintWidgetLauncher_Flash_stage2=function(){
    AV.controlsWidgetInstance.loaderPhase=2;
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"launchStage2_Flash");
    AV.controlsWidgetInstance.showWaitThrobber(false);
    avpw$(AV.controlsWidgetInstance.onEggWaitThrobber).hide();
    AV.controlsWidgetInstance.showFlashThumbs(null,false);
    AV.usageTracker.submit("launch");
    AV.fireLaunchComplete()
    };
AV.paintWidgetLauncher_HTML=function(a,d){
    var c=AV.util.getImageElem(a),e,f,i,h;
    h=AV.launchData.openType=="mobile"?AV.getActiveTools(AV.launchData.tools,["resize"]):AV.getActiveTools(AV.launchData.tools);
    AV.isRelaunched&&typeof c.avpw_prevURL!="undefined"&&(d=c.avpw_prevURL);
    AV.controlsWidgetInstance=new AV.ControlsWidget(null,a,h);
    AV.controlsWidgetInstance.origURL=d?d:avpw$(c).attr("src");
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"placeControls",[AV.launchData.appendTo]);
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,
        "enableControls");
    AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&AV.setUpOstrich();
    avpw$("#avpw_controls").fadeIn(300);
    (AV.launchData.openType=="mobile"||AV.launchData.openType=="aviary")&&AV.util.nextFrame(function(){
        AV.launchData.openType=="mobile"&&AV.setPageWidth(avpw$("#avpw_controls").width());
        AV.controlsWidgetInstance.setupScrollPanels()
        });
    AV.launchData.noCloseButton&&avpw$("#avpw_control_cancel_pane").css("display","none");
    window.addEventListener("message",AV.controlsWidget_MessageHandler,
        false);
    f=AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"getEmbedElement",[c]);
    e=document.createElement("img");
    e.id="avpw_temp_loading_image";
    AV.tempLoadingImageSrc=e.src;
    avpw$(e).load(function(){
        i=AV.controlsWidgetInstance.getScaledDims(avpw$(c).width(),avpw$(c).height());
        e.width=i.width;
        e.height=i.height;
        AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"getScaledImageDims",[e]);
        avpw$(e).unbind();
        e.style.display="block";
        avpw$(f).append(e);
        AV.controlsWidgetInstance.showWaitThrobber(true);
        AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"hideOriginalImage",[c]);
        avpw$(f).show();
        AV.util.nextFrame(function(){
            AV.build.bundled?AV.paintWidgetLauncher_stage2(a,d):AV.util.loadFile(AV.build.feather_baseURL+"js/featherpaint.js","js",function(){
                AV.paintWidgetLauncher_stage2(a,d)
                })
            })
        }).error(function(){
        AV.errorNotify("BAD_IMAGE",[d])
        });
    e.src=c.src;
    return false
    };
AV.paintWidgetRelauncher=function(a){
    var d=avpw$(document.createElement("img"));
    d.error(function(){
        AV.errorNotify("BAD_IMAGE",[a]);
        d.unbind("load").remove();
        return false
        }).attr("src",a);
    AV.util.imgOnLoad(d,function(){
        d.unbind("load").remove();
        return AV.featherUseFlash?AV.paintWidgetRelauncher_Flash(a):AV.paintWidgetRelauncher_HTML(a)
        })
    };
AV.paintWidgetRelauncher_Flash=function(a){
    AV.controlsWidgetInstance.showView("main");
    AV.controlsWidgetInstance.setPanelMode(null);
    var d=document.createElement("img");
    avpw$(d).css("display","none");
    avpw$(document.documentElement).append(d);
    avpw$(d).load(function(){
        var a=avpw$(d).width(),e=avpw$(d).height(),f=AV.launchData.hiresWidth,i=AV.launchData.hiresHeight;
        f||i?(f=f?parseInt(f):0,i=i?parseInt(i):0,a=f>i?f:i):a=AV.launchData.openType=="aviary"?AV.launchData.maxSize:a>e?a:e;
        f=AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,
            "getScaledImageDims_Flash",[d]);
        e=f.width;
        f=f.height;
        if(AV.launchData.openType=="aviary")a=e>f?e:f,AV.launchData.maxEditSize=a;
        AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&AV.controlsWidgetInstance.setMinWidth(e);
        AV.controlsWidgetInstance.setActionListScaleFactor(a);
        AV.controlsWidgetInstance.setImageScaledIndicator();
        AV.FlashAPI.restartEditing(d)
        });
    avpw$(d).attr("src",a)
    };
AV.paintWidgetRelauncher_HTML=function(a){
    var d=AV.util.getImageElem(AV.controlsWidgetInstance.paintImgIdElem),c=document.createElement("img");
    c.id="avpw_temp_loading_image";
    avpw$(c).css({
        width:AV.paintWidgetInstance.width,
        height:AV.paintWidgetInstance.height,
        display:"block"
    }).load(function(){
        AV.controlsWidgetInstance.showView("main");
        AV.controlsWidgetInstance.setPanelMode(null);
        AV.controlsWidgetInstance.shutdownAllTools.call(AV.controlsWidgetInstance);
        var e=avpw$("#avpw_canvas_embed");
        avpw$(e).children().remove();
        AV.paintWidgetInstance.shutdown();
        AV.controlsWidgetInstance.paintWidget=null;
        AV.controlsWidgetInstance.unbindControls();
        avpw$(e).append(c);
        avpw$(c).show();
        AV.controlsWidgetInstance.showWaitThrobber(true);
        avpw$(e).show();
        AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&AV.controlsWidgetInstance.filterEggs&&AV.controlsWidgetInstance.filterEggs.setup.call(AV.controlsWidgetInstance);
        AV.controlsWidgetInstance.origURL=a;
        setTimeout(function(){
            AV.paintWidgetLauncher_stage2(d,a)
            },5)
        });
    c.src=
    AV.tempLoadingImageSrc;
    return false
    };
AV.paintWidgetLauncher_stage2=function(a,d){
    var c=AV.util.getImageElem(a),e,f,i,h,j;
    f=AV.controlsWidgetInstance.getScaledDims(avpw$(c).width(),avpw$(c).height());
    AV.controlsWidgetInstance.loaderPhase=1;
    AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&AV.controlsWidgetInstance.setMinWidth(f.width);
    AV.paintWidgetInstance=new AV.PaintWidget(f.width,f.height);
    AV.controlsWidgetInstance.canvasUI=new AV.PaintUI(AV.paintWidgetInstance.canvas);
    AV.paintWidgetInstance.setOrigSize(f.width,f.height);
    h=AV.launchData.hiresWidth;
    j=AV.launchData.hiresHeight;
    h||j?(h=h?parseInt(h):0,j=j?parseInt(j):0,i=h>j?h:j):i=c.width>c.height?c.width:c.height;
    AV.controlsWidgetInstance.setActionListScaleFactor(i);
    AV.controlsWidgetInstance.setImageScaledIndicator();
    AV.controlsWidgetInstance.initWithPaintWidget(AV.paintWidgetInstance);
    var m=avpw$("#avpw_temp_loading_image");
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"scaleCanvas");
    if(AV.launchData.openType=="mobile"){
        var o=AV.support.getVendorProperty("transform");
        m[0].style[o]=AV.paintWidgetInstance.canvas.style[o];
        m[0].style.opacity="1"
        }
        d!=null?avpw$.ajax({
        type:"GET",
        dataType:"json",
        url:AV.build.jsonp_imgserver+"?callback=?",
        data:{
            url:escape(d)
            },
        success:function(a){
            AV.controlsWidgetInstance&&AV.paintWidgetInstance&&(e=new Image,avpw$(e).load(function(){
                if(AV.controlsWidgetInstance&&AV.paintWidgetInstance)h||j?(h=h?parseInt(h):0,j=j?parseInt(j):0,i=h>j?h:j):i=e.width>e.height?e.width:e.height,f=AV.controlsWidgetInstance.getScaledDims(e.width,e.height),e.width=
                    f.width,e.height=f.height,AV.paintWidgetInstance.setDimensions(f.width,f.height),AV.paintWidgetInstance.setBackground(e),AV.paintWidgetInstance.setOrigSize(f.width,f.height),AV.controlsWidgetInstance.setActionListScaleFactor(i),AV.controlsWidgetInstance.setImageScaledIndicator(),c.src!==d&&AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"scaleCanvas"),avpw$(AV.paintWidgetInstance.canvas).insertBefore("#avpw_temp_loading_image"),m.remove(),AV.tempLoadingImageSrc=d,AV.controlsWidgetInstance.showWaitThrobber(false),
                    AV.controlsWidgetInstance.loaderPhase=2
                    }).attr("src",a.data))
            }
        }):(AV.paintWidgetInstance.setBackground(c),avpw$("#avpw_controls").insertAfter(AV.paintWidgetInstance.canvas),avpw$(AV.paintWidgetInstance.canvas).insertBefore(m),m.remove(),AV.tempLoadingImageSrc=c.src,AV.controlsWidgetInstance.showWaitThrobber(false),AV.controlsWidgetInstance.loaderPhase=2);
    AV.usageTracker.submit("launch");
    AV.fireLaunchComplete();
    return false
    };
AV.fireLaunchComplete=function(){
    AV.launchData.initTool&&AV.controlsWidgetInstance.setActiveTool(AV.launchData.initTool);
    if(typeof AV.launchData.onReady==="function")AV.launchData.onReady()
        };
AV.paintWidgetShutdown=function(){
    window.removeEventListener&&window.removeEventListener("message",AV.controlsWidget_MessageHandler,false);
    avpw$("#avpw_controls").hide();
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"onShutdown");
    if(typeof AV.launchData.onClose==="function")AV.launchData.onClose(AV.paintWidgetInstance.dirty);
    AV.paintWidgetInstance.shutdown();
    AV.controlsWidgetInstance.shutdown();
    AV.featherUseFlash&&AV.FlashAPI.close();
    AV.usageTracker.submit("close");
    AV.paintWidgetInstance=
    null;
    AV.controlsWidgetInstance=null;
    AV.tempLoadingImageSrc=null
    };
    
AV.paintWidgetCloser=function(a){
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"onClose",[a]);
    a?(avpw$("#avpw_controls").hide(),AV.paintWidgetShutdown()):avpw$("#avpw_controls").fadeOut(300,function(){
        AV.paintWidgetInstance&&AV.paintWidgetShutdown()
        })
    };
AV.controlsWidget_onImageSaved=function(a,d){
    var c;
    typeof AV.launchData.onSave==="function"&&(c=AV.launchData.onSave.apply(AV.launchData,[AV.util.getImageId(AV.controlsWidgetInstance.paintImgIdElem),a,d]));
    if(AV.controlsWidgetInstance)AV.util.getImageElem(AV.controlsWidgetInstance.paintImgIdElem).avpw_prevURL=a,AV.controlsWidgetInstance.showView("main"),AV.controlsWidgetInstance.setPanelMode(null),c!==false&&(AV.launchData.openType=="mobile"||AV.launchData.openType=="aviary"?AV.controlsWidgetInstance.messager.show("avpw_aviary_beensaved",
        true):(AV.controlsWidgetInstance.setLastToolsPage("avpw_aviary_beensaved"),setTimeout(function(){
        AV.controlsWidgetInstance.didJumpToLastPage=true;
        AV.controlsWidgetInstance.goToToolsPage(AV.controlsWidgetInstance.toolsPager.getLastPage())
        },5))),AV.controlsWidgetInstance.paintWidget.dirty=false,AV.controlsWidgetInstance.saving=false
    };
AV.controlsWidget_MessageHandler=function(a){
    var d=a.data,c;
    if(AV.build.feather_baseURL!=""&&(c=AV.util.getDomain(a.origin),c!="aviary.com"&&c!="viary.com"&&c!="amazonaws.com")){
        a=AV.util.getDomain(AV.build.feather_baseURL);
        if(a==""||c=="")return;
        if(a!=c)return
    }
    if(d.substr&&d.substr(0,5)=="avpw:")a=d.substr(5).split("---FEATHER-POSTMESSAGE---"),d=a[0],a=a[1],avpw$("#avpw_img_submit_target").unbind("load"),avpw$("#avpw_img_submit_target_holder").empty(),AV.controlsWidget_onImageSaved(d,a);else try{
        (d=
            AV.JSON.parse(d))&&d.messageName&&AV.controlsWidgetInstance.purchaseManager.messageHandler(d)
        }catch(e){}
    };
AV.ControlsWidget=function(a,d,c){
    this.maxHeight=this.maxWidth=parseInt(AV.launchData.maxSize);
    this.saving=false;
    this.origURL=null;
    this.activeTools=c;
    this.didJumpToLastPage=false;
    this.quitCount=0;
    AV.usageTracker.setup();
    this.paintImgIdElem=d;
    this.curMode=null;
    if(AV.launchData.openType=="aviary"||AV.launchData.openType=="mobile")this.purchaseManager=new AV.PurchaseManager(AV.launchData.allowInAppPurchase);
    AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&(this.filterEggs&&this.filterEggs.setup.call(this),
        this.populatePulldown("crop"),this.populatePulldown("resize"),AV.formFields&&(AV.formFields.checkbox_style_startup(),AV.formFields.dropdown_style_startup()),this.setupScrollPanels(),this.setLastToolsPage("avpw_aviary_about"));
    this.layoutNotify(AV.launchData.openType,"subscribeToResize",["setupScrollPanels",this.setupScrollPanels.AV_bindInst(this)]);
    this.showView("main",1);
    a&&this.initWithPaintWidget(a);
    a={
        id:"avpw_tool_spinner",
        lines:12,
        length:6,
        width:2,
        radius:6,
        color:"#fff",
        speed:0.5,
        trail:70
    };
    
    if(AV.launchData.openType!=
        "mobile")a.color="#555",a.length=4;
    this.waitThrobber=new AV.Spinner({
        id:"avpw_canvas_spinner",
        lines:12,
        length:6,
        width:2,
        radius:6,
        color:"#fff",
        speed:0.5,
        trail:70
    });
    this.onEggWaitThrobber=new AV.Spinner(a)
    };
    
AV.ControlsWidget.prototype.tool={};
    
AV.ControlsWidget.prototype.layout={};
    
AV.ControlsWidget.prototype.moduleNotify=function(a,d,c){
    return this.objectNotify("tool",a,d,c)
    };
    
AV.ControlsWidget.prototype.layoutNotify=function(a,d,c){
    return this.objectNotify("layout",a,d,c)
    };
AV.ControlsWidget.prototype.objectNotify=function(a,d,c,e){
    return typeof this[a][d]=="object"&&(a=this[a][d],typeof a[c]=="function")?(c=a[c],e||(e=[]),c.apply(a,e)):true
    };
AV.ControlsWidget.prototype.shutdown=function(){
    AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&AV.formFields&&(AV.formFields.checkbox_style_shutdown(),AV.formFields.dropdown_style_shutdown());
    this.canvasUI&&this.canvasUI.shutdown();
    this.messager&&this.messager.hide();
    this.layoutNotify(AV.launchData.openType,"unsubscribeToResize",["setupScrollPanels"]);
    this.shutdownAllTools();
    this.unbindControls();
    if(this.toolsPager)this.toolsPager.shutdown(),this.toolsPager=null;
    this.paintWidget.showWaitThrobber=
    null;
    AV.usageTracker.shutdown();
    this.waitThrobber.stop();
    this.onEggWaitThrobber.stop();
    this.onEggWaitThrobber=this.waitThrobber=null;
    this.showPanel(null)
    };
    
AV.ControlsWidget.prototype.initAllTools=function(){
    AV.paintWidgetInstance.filterManager.loadPack("tools");
    for(var a in this.activeTools){
        var d=this.activeTools[a];
        this.tool.hasOwnProperty(d)&&AV.paintWidgetInstance.moduleLoaded(d,function(a){
            this.moduleNotify(a,"init",[this])
            }.AV_bindInst(this))
        }
    };
AV.ControlsWidget.prototype.shutdownAllTools=function(){
    for(var a in this.activeTools)this.moduleNotify(this.activeTools[a],"shutdown")
        };
        
AV.ControlsWidget.prototype.bindControls=function(){};
    
AV.ControlsWidget.prototype.unbindControls=function(){};
    
AV.ControlsWidget.prototype.initWithPaintWidget=function(a){
    this.paintWidget=a;
    AV.featherUseFlash||this.initAllTools();
    this.bindControls();
    this.paintWidget.showWaitThrobber=this.showWaitThrobber.AV_bindInst(this)
    };
AV.ControlsWidget.prototype.setActiveTool=function(a,d){
    var c=function(){
        if(!this.paintWidget.busy){
            this.setPanelModeFromMain(a,d);
            AV.controlsWidgetInstance.onEggWaitThrobber.stop();
            if(AV.launchData.openType=="mobile"){
                var c=d.getAttribute("data-header");
                if(c)document.getElementById("avpw_control_toolname").innerHTML=c;
                this.paintWidget.actions.setCheckpoint(true)
                }else AV.launchData.openType=="aviary"&&this.paintWidget.actions.setCheckpoint(true);
            AV.usageTracker.addUsage(a)
            }
        }.AV_bindInst(this);
    if(a.indexOf("overlay")>
    -1){
    if(AV.launchData.openType!=="aviary"&&AV.launchData.openType!=="mobile"){
        var e=a.split("overlay_")[1];
        e&&this.tool.overlay.setStickerGroupIndex(e)
        }
        a="overlay"
    }
    a.indexOf("effects")>-1&&((e=a.split("effects_")[1])&&this.tool.effects.setFilterPack(e),a="effects");
    !this.paintWidget.moduleLoaded(a,c)&&d&&(this.onEggWaitThrobber.stop(),this.onEggWaitThrobber.spin(avpw$(d).children(".avpw_icon_waiter")[0]))
    };
AV.ControlsWidget.prototype.setMinWidth=function(a){
    AV.msie&&!(AV.msie>=8)&&(a=parseInt(a)+330,avpw$("#avpw_wrapper_1").css("min-width",a))
    };
    
AV.ControlsWidget.prototype.calcActionListScaleFactor=function(a){
    return Math.max(1,a/(AV.featherUseFlash?AV.launchData.maxEditSize||this.maxWidth:this.maxWidth))
    };
    
AV.ControlsWidget.prototype.setActionListScaleFactor=function(a){
    a=this.calcActionListScaleFactor(a);
    AV.paintWidgetInstance.setActionListScaleFactor(a);
    return a
    };
AV.ControlsWidget.prototype.imageIsScaled=function(){
    return AV.paintWidgetInstance&&AV.paintWidgetInstance.actions.scaleFactor>1
    };
    
AV.ControlsWidget.prototype.showWaitThrobber=function(a,d){
    if(a){
        var c=this.layoutNotify(AV.launchData.openType,"getEmbedElement");
        c.is(":visible")&&(this.waitThrobber.spin(c[0]),avpw$(this.waitThrobber).fadeIn(300))
        }else avpw$(this.waitThrobber.el).fadeOut(300,this.waitThrobber.stop);
    d&&window.setTimeout(d,5)
    };
AV.ControlsWidget.prototype.panelMode2WidgetMode=function(a){
    switch(a){
        case "rotate":
            return"rotate90";
        case "greeneye":
            return"redeye";
        case "pinch":
            return"bulge"
            }
            return a
    };
AV.ControlsWidget.prototype.setPanelMode=function(a){
    if(this.canvasUI)this.canvasUI.onModeChange(a);
    this.moduleNotify(this.curMode,"panelWillClose");
    this.moduleNotify(a,"panelWillOpen");
    this.resizeFlashThumbs(a);
    this.paintWidget.setMode(this.panelMode2WidgetMode(a));
    this.showPanel(a);
    this._resetUI(a);
    this.paintWidget.setCurrentLayerByName("background");
    var d=this;
    window.setTimeout(function(){
        d.moduleNotify(this.curMode,"panelDidClose");
        d.moduleNotify(a,"panelDidOpen")
        },200);
    this.curMode=a
    };
AV.ControlsWidget.prototype.setPanelModeFromMain=function(a){
    this.showView("editpanel");
    this.setPanelMode(a)
    };
    
AV.ControlsWidget.prototype.showView=function(){};
AV.ControlsWidget.prototype.setupScrollPanels=function(){
    var a,d,c=this,e=0,f,i={},h;
    AV.launchData.openType=="mobile"?(f=null,h=AV.PAGE_WIDTH):AV.launchData.openType=="aviary"?(h=this.layoutNotify(AV.launchData.openType,"getDims").TOOLS_BROWSER_WIDTH,f=AV.template[AV.launchData.layout].aviaryScrollPanel,i={
        panelWidth:h,
        panelClass:"avpw_scroll_page_complete"
    }):(f=AV.template[AV.launchData.layout].aviaryScrollPanel,h=243,h+=5,avpw$("#avpw_control_main_scrolling_region").width(99999));
    f={
        itemCount:this.activeTools.length,
        itemsPerPage:this.layoutNotify(AV.launchData.openType,"getToolsPerPage"),
        pageWidth:h,
        leftArrow:avpw$("#avpw_lftArrow"),
        rightArrow:avpw$("#avpw_rghtArrow"),
        itemBuilder:function(f){
            a=c.activeTools[f];
            a=="overlay"?AV.launchData.openType!=="aviary"&&AV.launchData.openType!=="mobile"?(f=AV.launchData.stickers,f[e]&&f[e].label?(d=f[e].label,a="overlay_"+e,e++):d=AV.getLocalizedString("Stickers")):d=AV.getLocalizedString("Stickers"):d=a=="barrel"?AV.getLocalizedString("Bulge"):a=="drawing"?AV.getLocalizedString("Draw"):
            a.substr(0,1).toUpperCase()+a.substr(1);
            d=AV.getLocalizedString(d);
            return AV.template[AV.launchData.layout].eggIcon({
                optionName:a,
                capOptionName:d
            })
            },
        pageTemplate:AV.template[AV.launchData.layout].genericScrollPanel,
        pipTemplate:AV.template[AV.launchData.layout].scrollPanelPip,
        lastPageTemplate:f,
        lastPageContents:i,
        pageContainer:avpw$("#avpw_control_main_scrolling_region"),
        pipContainer:avpw$("#avpw_tools_pager ul"),
        onPageLeft:function(){
            c.didJumpToLastPage?c.goToPreviousToolsPage.call(c):c.toolsPager.pageLeft.call(this);
            return false
            },
        onPageChange:function(a){
            AV.usageTracker.addPageHit(a)
            }
        };
    
this.toolsPager=new AV.Pager(f);
    AV.usageTracker.setPageCount(this.toolsPager.getPageCount());
    AV.launchData.openType=="aviary"&&avpw$("#avpw_control_main_scrolling_region").css("width",this.toolsPager.getPageCount()*h+"px");
    this.toolsPager.changePage()
    };
    
AV.ControlsWidget.prototype.setLastToolsPage=function(a){
    avpw$(".avpw_isa_last_panel").hide();
    avpw$("#"+a).show()
    };
AV.ControlsWidget.prototype.goToToolsPage=function(a,d,c){
    this.toolsPager.setCurrentPage(parseInt(a));
    this.toolsPager.changePage(d,c)
    };
    
AV.ControlsWidget.prototype.goToPreviousToolsPage=function(){
    var a=this;
    this.didJumpToLastPage=false;
    this.goToToolsPage(this.toolsPager.getPreviousPage(),false,function(){
        a.setLastToolsPage("avpw_aviary_about")
        })
    };
AV.ControlsWidget.prototype.messager=function(){
    var a={},d,c,e;
    return{
        show:function(e,i,h){
            d=d||avpw$("#avpw_messaging");
            c=c||avpw$("#avpw_messaging_inner");
            e=a[e]||(a[e]=avpw$("#"+e));
            c.append(e);
            d.show();
            i?(d.data("needsConfirmation",true),AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"disableControls")):(d.data("needsConfirmation",false),h||window.setTimeout(this.hide,1E3))
            },
        hide:function(c,i){
            d=d||avpw$("#avpw_messaging");
            e=e||avpw$("#avpw_messages");
            if(c){
                var h=a[c];
                h&&e.append(h)
                }else avpw$.each(a,
                function(a,c){
                    e.append(c)
                    });
            d.data("needsConfirmation")?(window.setTimeout(function(){
                i&&i()
                },400),AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"enableControls")):(d.hide(),i&&i())
            },
        addMessage:function(a){
            e=e||avpw$("#avpw_messages");
            a&&(e[0].innerHTML+=a)
            }
        }
}();
AV.ControlsWidget.prototype.orientationChanged=function(){};
AV.ControlsWidget.prototype.windowResized=function(){
    var a=null;
    return function(){
        window.clearTimeout(a);
        a=window.setTimeout(function(){
            AV.controlsWidgetInstance.canvasUI&&AV.controlsWidgetInstance.canvasUI.resetOffset();
            AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"onResize");
            a=null
            },500)
        }
    }();
AV.ControlsWidget.prototype.Slider=function(a){
    var d=false,c=function(c,e){
        !d&&a.onchange&&a.onchange.apply(this,[c,e])
        },e=function(c,e){
        !d&&a.onslide&&a.onslide.apply(this,[c,e])
        },f=avpw$(a.element).slider({
        range:"min",
        max:a.max,
        min:a.min,
        value:a.defaultValue||a.max/2
        });
    this.getValue=function(){
        return f.slider("value")
        };
        
    this.setValue=function(a){
        return f.slider("value",a)
        };
        
    this.reset=function(){
        d=true;
        this.setValue(a.defaultValue);
        d=false
        };
        
    this.addListeners=function(){
        f.bind("slidechange",c).bind("slide",
            e)
        };
        
    this.removeListeners=function(){
        f.unbind("slide").unbind("slidechange")
        };
        
    this.shutdown=function(){
        f.slider("destroy")
        };
        
    return this
    };
AV.ControlsWidget.prototype.Thumbs=function(a){
    var d=a.elements,c=function(a,c){
        var i=this;
        return function(){
            a&&a.apply(i,[d[c],c])
            }
        };
    
this.addListeners=function(){
    for(var e=0;e<d.length;e++)AV.featherUseFlash?AV.FlashAPI.addThumbClickListener("avpw_flashThumb"+(e+1),c(a.onclick,e)):avpw$(d[e]).bind("click",c(a.onclick,e))
        };
        
this.removeListeners=function(){
    AV.featherUseFlash?AV.FlashAPI.removeAllThumbClickListeners():avpw$(d).unbind("click")
    };
    
this.reset=function(){
    for(var c=0;c<d.length;c++)a.onreset&&
        a.onreset.apply(this,[d[c],c])
        };
        
return this
};

AV.ControlsWidget.prototype.setImageScaledIndicator=function(){
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"updateImageScaledIndicator",[AV.featherUseFlash&&AV.launchData.openType!=="mobile"&&AV.launchData.openType!=="aviary"||AV.launchData.hiresUrl||AV.launchData.hiresWidth||AV.launchData.hiresHeight,this.imageIsScaled()])
    };
AV.ControlsWidget.prototype._drawUICircle=function(a,d,c,e){
    AV.featherUseFlash?this._drawUICircle_Flash(a,d,c,e):this._drawUICircle_HTML(a,d,c,e)
    };
    
AV.ControlsWidget.prototype._drawUICircle_Flash=function(a,d,c,e){
    d=parseInt(d);
    c=AV.util.color_to_int(c);
    e=="transparent"?(a=true,e=0):(a=false,e=e?parseInt(e.slice(1),16):16777215);
    AV.getFlashMovie("avpw_flashThumb1").setBrushThumb(d,c,e,a)
    };
AV.ControlsWidget.prototype._drawUICircle_HTML=function(a,d,c,e){
    var a=avpw$(a)[0],f=a.getContext("2d");
    f.clearRect(0,0,a.width,a.height);
    e!=="transparent"&&this._drawUIGrid(f,a.width,a.height);
    f.globalCompositeOperation="source-over";
    c!=null?(f.strokeStyle=c=="transparent"||AV.util.color_is_white(c)||e==null?"#444":c,c=3):(f.strokeStyle="rgba(0,0,0,0)",c=1);
    f.lineWidth=c;
    f.beginPath();
    f.arc(a.width/2,a.height/2,d,0,2*Math.PI,true);
    f.stroke();
    f.closePath();
    if(e!=null)f.save(),f.clip(),e=="transparent"?
        this._drawUIGrid(f,a.width,a.height):(f.fillStyle=e,f.fillRect(0,0,a.width,a.height)),f.restore()
        };
        
AV.ControlsWidget.prototype._drawUIGrid=function(a,d,c,e){
    var f;
    e||(e=5);
    for(f=0;f<c+e;f+=e)for(d=0;d<c+e;d+=e)a.fillStyle=(d+f&1)==1?"#fff":"#ddd",a.fillRect(d,f,e,e)
        };
        
AV.ControlsWidget.prototype.showPanel=function(a){
    a!=null&&(avpw$(".avpw_controlpanel").each(function(){
        avpw$(this).hide()
        }),avpw$("#avpw_controlpanel_"+a).show())
    };
AV.ControlsWidget.prototype.showFlashThumbs=function(a,d){
    if(AV.featherUseFlash){
        var c,e,f,i;
        c=a?avpw$("#avpw_controlpanel_"+a+" .avpw_flashthumb_holder"):avpw$(".avpw_flashthumb_holder");
        d?avpw$(c).each(function(a,c){
            a+=1;
            e="avpw_flashThumb"+a;
            i=AV.getFlashMovie(e);
            i.width=avpw$(c).width();
            i.height=avpw$(c).height();
            f=avpw$(c).offset();
            f.top+=1;
            f.left+=1;
            avpw$("#"+e).offset(f)
            }):avpw$(c).each(function(a){
            a+=1;
            e="avpw_flashThumb"+a;
            avpw$("#"+e).offset({
                top:-9999,
                left:-9999
            })
            })
        }
    };
AV.ControlsWidget.prototype.resizeFlashThumbs=function(a){
    if(AV.featherUseFlash){
        var d,c,a=avpw$("#avpw_controlpanel_"+a+" .avpw_flashthumb_holder");
        avpw$(a).each(function(a,f){
            a+=1;
            d="avpw_flashThumb"+a;
            c=AV.getFlashMovie(d);
            var i=avpw$(f).prop("width"),h=avpw$(f).prop("height");
            i||(i=avpw$(f).width());
            h||(h=avpw$(f).height());
            if(i&&h)c.width=i,c.height=h
                })
        }
    };
AV.ControlsWidget.prototype.save=function(){
    var a=function(){
        var a=this.paintWidget.exportImage().base64data,c=function(){
            AV.simpleXHRPost(AV.build.imgrecvServer,{
                postdata:AV.launchData.postData,
                posturl:AV.launchData.postUrl,
                apikey:AV.launchData.apiKey,
                sessionid:AV.usageTracker.getUUID(),
                actionlist:this.paintWidget.actions.exportJSON(true),
                origurl:this.origURL,
                encodedas:"base64text",
                hiresurl:AV.launchData.hiresUrl,
                contenttype:AV.launchData.fileFormat,
                jpgquality:AV.launchData.jpgQuality,
                debug:AV.launchData.debug,
                asyncsave:AV.launchData.asyncSave,
                signature:AV.launchData.signature,
                timestamp:AV.launchData.timestamp,
                usecustomfileexpiration:AV.launchData.useCustomFileExpiration,
                file:a
            },this.saveCallback_XHR.AV_bindInst(this))||e.call(this)
            },e=function(){
            var c="avpw_img_submit_target_"+Math.floor(Math.random()*4294967295).toString(16);
            avpw$("#avpw_img_submit_target_holder").html(AV.buildHiddenFrame("avpw_img_submit_target",c));
            avpw$("#avpw_save_form").attr("target",c);
            avpw$("#avpw_img_submit_target").load(function(){
                this.saveCallback_form(c)
                }.AV_bindInst(this));
            avpw$("#avpw_save_form_data").val(a);
            avpw$("#avpw_save_form_postdata").val(AV.launchData.postData);
            avpw$("#avpw_save_form_posturl").val(AV.launchData.postUrl);
            avpw$("#avpw_save_form_apikey").val(AV.launchData.apiKey);
            avpw$("#avpw_save_form_sessionid").val(AV.usageTracker.getUUID());
            avpw$("#avpw_save_form_actionlist").val(this.paintWidget.actions.exportJSON(true));
            avpw$("#avpw_save_form_origurl").val(this.origURL);
            avpw$("#avpw_save_form_hiresurl").val(AV.launchData.hiresUrl);
            avpw$("#avpw_save_form_contenttype").val(AV.launchData.fileFormat);
            avpw$("#avpw_save_form_jpgquality").val(AV.launchData.jpgQuality);
            avpw$("#avpw_save_form_debug").val(AV.launchData.debug);
            avpw$("#avpw_save_form_asyncsave").val(AV.launchData.asyncSave);
            avpw$("#avpw_save_form_signature").val(AV.launchData.signature);
            avpw$("#avpw_save_form_timestamp").val(AV.launchData.timestamp);
            avpw$("#avpw_save_form_usecustomfileexpiration").val(AV.launchData.useCustomFileExpiration);
            avpw$("#avpw_save_form").submit()
            },f=this;
        this.paintWidget.showWaitThrobber(true,function(){
            avpw$.support.cors&&
            (!AV.firefox||AV.firefox>=4)?c.call(f):e.call(f)
            });
        return false
        };
        
    return function(){
        if(AV.controlsWidgetInstance.loaderPhase<2)return false;
        if(this.saving)return false;
        this.moduleNotify(this.curMode,"commit");
        this.showView("main");
        this.setPanelMode(null);
        this.saving=true;
        AV.prevActionList=this.paintWidget.actions.exportJSON(true);
        if(AV.launchData.postData&&typeof AV.launchData.postData!=="string")AV.launchData.postData=AV.JSON.stringify(AV.launchData.postData);
        var d;
        AV.featherUseFlash?(AV.FlashAPI.save(),
            d=false):d=a.call(this);
        return d
        }
    }();
AV.ControlsWidget.prototype.onSaveButtonClicked=function(){
    return typeof AV.launchData.onSaveButtonClicked==="function"&&AV.launchData.onSaveButtonClicked.apply(AV.launchData,[AV.util.getImageId(AV.controlsWidgetInstance.paintImgIdElem)])===false?false:AV.controlsWidgetInstance.save()
    };
AV.ControlsWidget.prototype.saveCallback_form=function(a){
    this.paintWidget&&(this.paintWidget.showWaitThrobber(false),window.avpw_img_submit_target_announcer.postMessage("avpw_load:"+a,"*"))
    };
AV.ControlsWidget.prototype.saveCallback_XHR=function(a){
    this.paintWidget.showWaitThrobber(false);
    var d=avpw$(a).find("error");
    if(d.length>0)alert("file submission error: "+d.text());
    else{
        var c,e;
        if(d=avpw$(a).find("url"))c=d.text(),c=c.replace(/^\s+|\s+$/g,""),avpw$(AV.util.getImageElem(this.paintImgIdElem)).avpw_prevURL=c;
        if(a=avpw$(a).find("hiresurl"))e=a.text(),e=e.replace(/^\s+|\s+$/g,"");
        AV.controlsWidget_onImageSaved(c,e)
        }
    };
AV.ControlsWidget.prototype.showAreYouSure=function(){
    AV.launchData.openType=="mobile"||AV.launchData.openType=="aviary"?this.messager.show("avpw_aviary_quitareyousure",true):(this.showView("main"),this.setPanelMode(null),this.setLastToolsPage("avpw_aviary_quitareyousure"),AV.util.nextFrame(function(){
        this.didJumpToLastPage=true;
        this.goToToolsPage(this.toolsPager.getLastPage())
        }.AV_bindInst(this)))
    };
AV.ControlsWidget.prototype.cancel=function(){
    this.quitCount++;
    var a=this.quitCount>0&&this.paintWidget.dirty;
    if(typeof AV.launchData.onCloseButtonClicked==="function"&&AV.launchData.onCloseButtonClicked.apply(AV.launchData,[a])===false)return false;
    a?this.showAreYouSure():AV.paintWidgetCloser();
    return false
    };
AV.ControlsWidget.prototype.undo=function(){
    if(this.paintWidget.busy)return false;
    if(this.moduleNotify(this.curMode,"onUndo")===false)return false;
    this.paintWidget.undo();
    AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&this.setMinWidth(this.paintWidget.width);
    this.moduleNotify(this.curMode,"onUndoComplete");
    return false
    };
AV.ControlsWidget.prototype.redo=function(){
    if(this.paintWidget.busy)return false;
    if(this.moduleNotify(this.curMode,"onRedo")===false)return false;
    this.paintWidget.redo();
    AV.launchData.openType!="mobile"&&AV.launchData.openType!="aviary"&&this.setMinWidth(this.paintWidget.width);
    this.moduleNotify(this.curMode,"onRedoComplete");
    return false
    };
    
AV.ControlsWidget.prototype._resetUI=function(a){
    this.moduleNotify(a,"resetUI")
    };
AV.ControlsWidget.prototype.getScaledDims=function(a,d){
    return AV.util.getScaledDims(a,d,this.maxWidth,this.maxHeight)
    };
AV.Pager=function(a){
    var d,c=0,e=0,f=parseInt((a.itemCount-1)/a.itemsPerPage)+1,i=0,h=function(){
        for(var c="",d=0;d<f;d++)c+=a.pipTemplate({
            i:d
        });
        return c
        },j=function(){
        d.removeClass("avpw_page_selected");
        d.filter('[pagenum="'+c+'"]').addClass("avpw_page_selected")
        },m=function(){
        c==0?avpw$(a.leftArrow).removeClass("avpw_prev_enabled").addClass("avpw_prev_disabled"):avpw$(a.leftArrow).removeClass("avpw_prev_disabled").addClass("avpw_prev_enabled");
        c==f-1?avpw$(a.rightArrow).removeClass("avpw_next_enabled").addClass("avpw_next_disabled"):
        avpw$(a.rightArrow).removeClass("avpw_next_disabled").addClass("avpw_next_enabled")
        },o=function(a,c){
        var d=avpw$(".avpw_arrow"),e=function(){
            d.addClass("avpw_arrow_visible")
            };
            
        d.removeClass("avpw_arrow_visible");
        window.setTimeout(function(){
            a.apply(this,c);
            window.setTimeout(e,600)
            },200)
        },k=function(e,h){
        var k=a.pageContainer,q;
        if(c<0){
            if(c=0,AV.launchData.openType=="mobile"||AV.launchData.openType=="aviary")return
        }else if(c>f-1&&(c=f-1,AV.launchData.openType=="mobile"||AV.launchData.openType=="aviary"))return;
        (q=c*a.pageWidth)&&(q-=i);
        if(AV.launchData.openType=="mobile"){
            var p=AV.support.getVendorProperty("transform");
            o(function(){
                k[0].style[p]=c>0?"translateX(-"+q+"px)":"translateX(0)";
                m()
                })
            }else{
            if(AV.launchData.openType=="aviary")(p=AV.support.getVendorProperty("transform"))?k[0].style[p]=c>0?"translateX(-"+q+"px)":"translateX(0)":k[0].style.left=c>0?"-"+q+"px":"0";
            else{
                var s=avpw$(k).parent();
                e?s.animate({
                    scrollLeft:q
                },1,"swing",h):s.animate({
                    scrollLeft:q
                },300,"swing",h)
                }
                m()
            }
            a.onPageChange&&a.onPageChange.apply(this,
            [c]);
        d&&j()
        },s=function(){
        e=c;
        c+=-1;
        k.call(this);
        return false
        },p=function(){
        e=c;
        c+=1;
        k.call(this);
        return false
        },u=function(){
        var d=a.longPressDuration||200,f=false,h=null,i=this,j=function(a){
            h=window.setInterval(function(){
                f&&a?(e=c,c+=a,k.call(i)):(window.clearInterval(h),h=null)
                },d)
            },m=function(){
            window.clearInterval(h);
            h=null;
            s.call(this);
            f=true;
            j.call(this,-1)
            },o=function(){
            window.clearInterval(h);
            h=null;
            p.call(this);
            f=true;
            j.call(this,1)
            },u=function(){
            f=false
            };
            
        return{
            bindEvents:function(){
                avpw$(a.leftArrow).bind("mousedown",
                    m).bind("mouseup",u);
                avpw$(a.rightArrow).bind("mousedown",o).bind("mouseup",u)
                },
            unbindEvents:function(){
                avpw$(a.leftArrow).unbind("mousedown",m).unbind("mouseup",u);
                avpw$(a.rightArrow).unbind("mousedown",o).unbind("mouseup",u)
                }
            }
    }(),y=function(a,c,d){
    var e,f,h,i;
    a.length&&(a=a[0]);
    a.ontouchstart=function(a){
        if(a=AV.util.getTouch(a))e=a.pageX,h=a.pageY
            };
            
    a.ontouchmove=function(a){
        if(a=AV.util.getTouch(a))f=a.pageX,i=a.pageY;
        return false
        };
        
    a.ontouchend=function(){
        var a=f-e,j=i-h;
        Math.abs(a)>30&&Math.abs(j)<
        60&&(a>30?c():d());
        f=e=void 0
        }
    };

this.shutdown=function(){
    a.bindLongPress?u.unbindEvents():(avpw$(a.leftArrow).unbind("click"),avpw$(a.rightArrow).unbind("click"));
    var c=a.pageContainer;
    c.length&&(c=c[0]);
    c.ontouchstart=c.ontouchmove=c.ontouchend=null;
    d&&d.unbind("click");
    a.pageContainer.html("");
    d&&a.pipContainer.html("")
    };
    
this.changePage=k;
this.pageLeft=s;
this.pageRight=p;
this.setCurrentPage=function(a){
    e=c;
    c=a
    };
    
this.getCurrentPage=function(){
    return c
    };
    
this.getPreviousPage=function(){
    return e
    };
    
this.getLastPage=
function(){
    return f-1
    };
    
this.getPageCount=function(){
    return f
    };
    
this.setPageCount=function(a){
    f=a
    };
    
a.pageContainer.html(function(){
    var c,d,e,h="";
    a.firstPageTemplate&&(h+=a.firstPageTemplate.apply(this,[a.firstPageContents]));
    for(d=c=0;d<f;d++){
        var j="";
        for(e=0;e<a.itemsPerPage&&c<a.itemCount;e++)j+=a.itemBuilder.apply(this,[c]),c++;
        h+=a.pageTemplate?a.pageTemplate({
            panelHTML:j,
            panelWidth:a.pageWidth,
            panelClass:e===a.itemsPerPage?"avpw_scroll_page_complete":"avpw_scroll_page_incomplete"
            }):j
        }
        a.lastPageTemplate&&
    (h+=a.lastPageTemplate.apply(this,[a.lastPageContents]));
    d=c=0;
    if(a.firstPageTemplate||a.lastPageTemplate)a.firstPageTemplate&&(a.firstPageWidth?c+=a.firstPageWidth*(a.itemsPerPage/a.pageWidth):f++),a.lastPageTemplate&&(a.lastPageWidth?c+=a.lastPageWidth*(a.itemsPerPage/a.pageWidth):f++),d=a.itemCount%a.itemsPerPage,c&&(d>0?d+c>a.itemsPerPage&&f++:f++,i=a.pageWidth/a.itemsPerPage-a.firstPageWidth%(a.pageWidth/a.itemsPerPage)|0);
    if(!a.pageTemplate&&a.fillRemainingSpace){
        c=a.itemsPerPage-(a.itemCount+
            c)%a.itemsPerPage+1;
        for(d=0;d<c;d++)h+=a.fillRemainingSpace.apply(this)
            }
            return h
    }());
a.pipContainer&&a.pipTemplate&&(a.pipContainer.html(h()),d=a.pipContainer.find(".avpw_is_navpip"),j());
(function(){
    a.bindLongPress?u.bindEvents():(avpw$(a.leftArrow).bind("click",function(){
        return a.onPageLeft?a.onPageLeft.call(this):s.call(this)
        }),avpw$(a.rightArrow).bind("click",function(){
        return a.onPageRight?a.onPageRight.call(this):p.call(this)
        }));
    y(a.pageContainer,s,p);
    d&&d.bind("click",function(a){
        a=avpw$(a.currentTarget).attr("pagenum");
        e=c;
        c=parseInt(a);
        k();
        return false
        })
    })();
return this
};

typeof AV=="undefined"&&(AV={});
window.Aviary=AV;
AV.feather_loaded=false;
AV.feather_loading=false;
AV.build=AV.build||{
    version:"",
    imgrecvServer:"imgrecvserver.cgi",
    flashGatewayServer:"",
    imgrecvBase:"",
    inAppPurchaseFrameURL:"",
    imgtrackServer:"imgtrackserver.cgi",
    filterServer:"",
    jsonp_imgserver:"",
    featherTargetAnnounce:"feather_target_announce.html",
    proxyServer:"",
    feather_baseURL:"",
    feather_stickerURL:"",
    googleTracker:""
};

AV.defaultTools_legacy="sharpen,whiten,rotate,flip,resize,crop,redeye,blemish,colors,saturation,blur,brightness,contrast,drawing,text,overlay".split(",");
AV.defaultTools="enhance,effects,overlay,orientation,resize,crop,brightness,contrast,saturation,sharpness,drawing,text,redeye,whiten,blemish".split(",");
AV.defaultStickers=[[AV.build.feather_stickerURL+"400x400/sombrero.png",AV.build.feather_stickerURL+"100x100/sombrero.png",AV.build.feather_stickerURL+"1000x1000/sombrero.png"],[AV.build.feather_stickerURL+"400x400/helicopter.png",AV.build.feather_stickerURL+"100x100/helicopter.png",AV.build.feather_stickerURL+"1000x1000/helicopter.png"],[AV.build.feather_stickerURL+"400x400/crown.png",AV.build.feather_stickerURL+"100x100/crown.png",AV.build.feather_stickerURL+"1000x1000/crown.png"],[AV.build.feather_stickerURL+
    "400x400/fez.png",AV.build.feather_stickerURL+"100x100/fez.png",AV.build.feather_stickerURL+"1000x1000/fez.png"],[AV.build.feather_stickerURL+"400x400/3d_glasses.png",AV.build.feather_stickerURL+"100x100/3d_glasses.png",AV.build.feather_stickerURL+"1000x1000/3d_glasses.png"],[AV.build.feather_stickerURL+"400x400/hipster_glasses.png",AV.build.feather_stickerURL+"100x100/hipster_glasses.png",AV.build.feather_stickerURL+"1000x1000/hipster_glasses.png"],[AV.build.feather_stickerURL+"400x400/disguise.png",
    AV.build.feather_stickerURL+"100x100/disguise.png",AV.build.feather_stickerURL+"1000x1000/disguise.png"],[AV.build.feather_stickerURL+"400x400/aviators.png",AV.build.feather_stickerURL+"100x100/aviators.png",AV.build.feather_stickerURL+"1000x1000/aviators.png"],[AV.build.feather_stickerURL+"400x400/eyepatch.png",AV.build.feather_stickerURL+"100x100/eyepatch.png",AV.build.feather_stickerURL+"1000x1000/eyepatch.png"],[AV.build.feather_stickerURL+"400x400/bow_tie.png",AV.build.feather_stickerURL+"100x100/bow_tie.png",
    AV.build.feather_stickerURL+"1000x1000/bow_tie.png"],[AV.build.feather_stickerURL+"400x400/tie.png",AV.build.feather_stickerURL+"100x100/tie.png",AV.build.feather_stickerURL+"1000x1000/tie.png"],[AV.build.feather_stickerURL+"400x400/pipe.png",AV.build.feather_stickerURL+"100x100/pipe.png",AV.build.feather_stickerURL+"1000x1000/pipe.png"],[AV.build.feather_stickerURL+"400x400/cigar.png",AV.build.feather_stickerURL+"100x100/cigar.png",AV.build.feather_stickerURL+"1000x1000/cigar.png"],[AV.build.feather_stickerURL+
    "400x400/arrow.png",AV.build.feather_stickerURL+"100x100/arrow.png",AV.build.feather_stickerURL+"1000x1000/arrow.png"],[AV.build.feather_stickerURL+"400x400/green_bubble.png",AV.build.feather_stickerURL+"100x100/green_bubble.png",AV.build.feather_stickerURL+"1000x1000/green_bubble.png"],[AV.build.feather_stickerURL+"400x400/orange_bubble.png",AV.build.feather_stickerURL+"100x100/orange_bubble.png",AV.build.feather_stickerURL+"1000x1000/orange_bubble.png"],[AV.build.feather_stickerURL+"400x400/blue_bubble.png",
    AV.build.feather_stickerURL+"100x100/blue_bubble.png",AV.build.feather_stickerURL+"1000x1000/blue_bubble.png"],[AV.build.feather_stickerURL+"400x400/pink_bubble.png",AV.build.feather_stickerURL+"100x100/pink_bubble.png",AV.build.feather_stickerURL+"1000x1000/pink_bubble.png"],[AV.build.feather_stickerURL+"400x400/star.png",AV.build.feather_stickerURL+"100x100/star.png",AV.build.feather_stickerURL+"1000x1000/star.png"],[AV.build.feather_stickerURL+"400x400/heart.png",AV.build.feather_stickerURL+"100x100/heart.png",
    AV.build.feather_stickerURL+"1000x1000/heart.png"],[AV.build.feather_stickerURL+"400x400/red_arrow.png",AV.build.feather_stickerURL+"100x100/red_arrow.png",AV.build.feather_stickerURL+"1000x1000/red_arrow.png"],[AV.build.feather_stickerURL+"400x400/blue_arrow.png",AV.build.feather_stickerURL+"100x100/blue_arrow.png",AV.build.feather_stickerURL+"1000x1000/blue_arrow.png"],[AV.build.feather_stickerURL+"400x400/green_circle.png",AV.build.feather_stickerURL+"100x100/green_circle.png",AV.build.feather_stickerURL+
    "1000x1000/green_circle.png"],[AV.build.feather_stickerURL+"400x400/orange_square.png",AV.build.feather_stickerURL+"100x100/orange_square.png",AV.build.feather_stickerURL+"1000x1000/orange_square.png"]];
(function(a){
    var d=function(a,d){
        d=d||{};
        
        return{
            theme:d.theme||a.Feather_Theme||"bluesky",
            minimumStyling:d.minimumStyling||false,
            openType:d.openType||a.Feather_OpenType||"popup",
            layout:d.layout||"desktop_bluesky",
            language:d.language||a.Feather_Language||"en",
            forceFlash:d.forceFlash||a.Feather_ForceFlash,
            forceSupport:d.forceSupport||a.AV_Feather_ForceSupport,
            poweredByURL:d.poweredByURL||"http://www.aviary.com",
            giveFeedbackURL:d.giveFeedbackURL||"http://www.aviary.com/feature-requests",
            getWidgetURL:d.getWidgetURL||
            "http://www.aviary.com",
            onLoad:d.onLoad||a.Feather_OnLoad,
            onReady:a.Feather_OnLaunchComplete,
            onClose:a.Feather_OnClose,
            onSave:a.Feather_OnSave,
            onSaveButtonClicked:a.Feather_OnSaveButtonClicked,
            onError:a.Feather_OnError,
            image:null,
            url:null,
            appendTo:null,
            noCloseButton:a.Feather_NoCloseButton,
            maxSize:a.Feather_MaxSize||a.Feather_MaxDisplaySize||800,
            maxEditSize:null,
            hiresMaxSize:1E4,
            hiresWidth:null,
            hiresHeight:null,
            tools:a.Feather_EditOptions&&a.Feather_EditOptions!=="all"&&a.Feather_EditOptions!=="All"&&
            a.Feather_EditOptions!==""?a.Feather_EditOptions:AV.defaultTools_legacy,
            initTool:"",
            cropPresets:a.Feather_CropSizes||["","320x240","640x480","800x600","1280x1024","1600x1200","240x320","480x640","600x800","1024x1280","1200x1600","Original",["Square","1:1"],"Custom","3:2","3:5","4:3","4:5","4:6","5:7","8:10","16:9"],
            resizePresets:a.Feather_ResizeSizes||"320x240,640x480,800x600,1280x1024,1600x1200,240x320,480x640,600x800,1024x1280,1200x1600".split(","),
            stickers:a.Feather_Stickers||AV.defaultStickers,
            apiKey:a.Feather_APIKey,
            hiresUrl:a.Feather_HiResURL,
            postUrl:a.Feather_PostURL,
            postData:null,
            fileFormat:a.Feather_FileFormat||a.Feather_ContentType||"",
            jpgQuality:a.Feather_FileQuality||100,
            debug:false,
            asyncSave:true,
            signature:a.Feather_Signature||null,
            timestamp:a.Feather_Timestamp||null,
            useCustomFileExpiration:false,
            allowInAppPurchase:false
        }
    };
    
AV.baseConfig=d(a);
    (a.Feather_Theme||a.Feather_OpenType||a.Feather_APIKey)&&a.setTimeout(function(){
    var c=new AV.Feather;
    a.aviaryeditor=function(e,f,i,h){
        AV.launchData=
        d(a,AV.baseConfig);
        e=AV.util.extend(AV.launchData,{
            image:e,
            url:f,
            postData:i,
            appendTo:h
        });
        c.launch(e)
        };
        
    a.aviaryeditor_close=c.close;
    a.aviaryeditor_relaunch=c.relaunch;
    a.aviaryeditor_activatetool=c.activateTool;
    a.aviarynewimage=c.replaceImage
    },0)
})(window);
AV.getLocalizedString=function(a){
    try{
        var d=AV.lang[AV.launchData.language][a];
        d===void 0&&(d=a);
        return d
        }catch(c){}
    return a
    };
    
Function.prototype.AV_bindInst=function(a){
    var d=this;
    return function(){
        return d.apply(a,arguments)
        }
    };
AV.util={
    getX:function(a){
        for(var d=0;a!=null;)d+=a.offsetLeft,a=a.offsetParent;
        return d
        },
    getY:function(a){
        for(var d=0;a!=null;)d+=a.offsetTop,a=a.offsetParent;
        return d
        },
    getTouch:function(a){
        if(a.originalEvent)a=a.originalEvent;
        return a.changedTouches&&a.changedTouches.length==1?a.changedTouches[0]:a.touches&&a.touches.length==1?a.touches[0]:false
        },
    getScaledDims:function(a,d,c,e){
        var e=e||c,f=a,i=d,h=a/d;
        if(a>c||d>e)a-c>h*(d-e)?(f=c,i=c*d/a+0.5|0):(f=e*h+0.5|0,i=e);
        return{
            width:f,
            height:i
        }
    },
nextFrame:function(a){
    setTimeout(a,
        1)
    },
getDomain:function(a,d){
    var c,e,f;
    c=a.substr(0,7)=="http://"?7:a.substr(0,8)=="https://"?8:a.substr(0,6)=="ftp://"?6:0;
    e=a.indexOf("/",c);
    if(e==-1)e=a.length;
    d||(f=a.lastIndexOf(".",e),f=a.lastIndexOf(".",f-1),c=f==-1?c:f+1);
    return a.substring(c,e)
    },
extend:function(){
    var a,d,c,e,f,i=arguments[0]||{},h=1,j=arguments.length,m=false;
    typeof i==="boolean"&&(m=i,i=arguments[1]||{},h=2);
    typeof i!=="object"&&!jQuery.isFunction(i)&&(i={});
    j===h&&(i=this,--h);
    for(;h<j;h++)if((a=arguments[h])!=null)for(d in a)c=
        i[d],e=a[d],i!==e&&(m&&e&&(jQuery.isPlainObject(e)||(f=jQuery.isArray(e)))?(f?(f=false,c=c&&jQuery.isArray(c)?c:[]):c=c&&jQuery.isPlainObject(c)?c:{},i[d]=jQuery.extend(m,c,e)):e!==void 0&&(i[d]=e));return i
    },
loadFile:function(){
    var a,d,c,e,f=0,i;
    a=function(a){
        if(d)navigator.appName=="Microsoft Internet Explorer"?a.onreadystatechange=function(a){
            (this.readyState==4||this.readyState=="complete"||this.readyState=="loaded")&&d(a)
            }:a.onload=d
        };
        
    return function(h,j,m){
        d=m;
        j=="js"?(c=document.createElement("script"),
            c.setAttribute("type","text/javascript"),a(c),c.setAttribute("src",h)):j=="css"?document.createStyleSheet?document.createStyleSheet(h,f++):(c=document.createElement("link"),c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",h)):j=="img"&&(c=document.createElement("img"),a(c),c.setAttribute("src",h));
        c&&(e=e||document.getElementsByTagName("head")[0],j=="js"?e.appendChild(c):j=="css"&&(i=i||document.createDocumentFragment(),i.appendChild(c),e.insertBefore(c,void 0)));
        return c
        }
    }(),
getImageElem:function(a){
    return typeof a=="string"?document.getElementById(a):a.length?a[0]:a
    },
getImageId:function(a){
    return typeof a=="string"?a:a.id
    },
imgOnLoad:function(a,d){
    var c=avpw$(a);
    c.load(d);
    (c[0].complete==true||c[0].readyState==4||c[0].readyState=="complete"||c[0].readyState=="loaded")&&c.trigger("load")
    },
color_is_white:function(a){
    a=a.toLowerCase();
    return a=="#fff"||a=="#ffffff"||a=="white"||a=="rgb(255, 255, 255)"
    },
color_is_light:function(a){
    return a=="#fff"||a=="#ffffff"||
    a=="rgb(255, 255, 255)"
    },
color_expand:function(a){
    a.length==4&&(r=a.charAt(1),g=a.charAt(2),b=a.charAt(3),a="#"+r+r+g+g+b+b);
    return a
    },
color_to_rgb:function(a){
    var d,c;
    a.charAt(0)=="#"&&(a=AV.util.color_expand(a),d=parseInt(a.substr(1,2),16),c=parseInt(a.substr(3,2),16),a=parseInt(a.substr(5,2),16),a="rgb("+d+","+c+","+a+")");
    return a
    },
rgb_to_color:function(a){
    var d,c;
    return(c=a.match(/\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/))?(a=parseInt(c[1]).toString(16),a.length==1&&(a="0"+a),d=parseInt(c[2]).toString(16),
        d.length==1&&(d="0"+d),c=parseInt(c[3]).toString(16),c.length==1&&(c="0"+c),"#"+a+d+c):a
    },
color_to_int:function(a){
    a=AV.util.color_expand(a);
    a=AV.util.rgb_to_color(a);
    return parseInt(a.substr(1),16)
    }
};

AV.errorNotify=function(a,d){
    var c={
        BAD_IMAGE:{
            code:1,
            message:"Unable to load image from URL provided"
        },
        UNSUPPORTED:{
            code:2,
            message:"Unable to detect Flash plugin or HTML canvas support. Cannot launch editor."
        }
    }
    [a];
if(typeof AV.launchData.onError==="function")c.args=d,AV.launchData.onError(c)
    };
AV.injectControls=function(){
    var a,d;
    AV.launchData.openType=="popup"?(a="",d=AV.template[AV.launchData.layout].saveBlock()):(a=AV.template[AV.launchData.layout].saveBlock(),d="");
    if(AV.criticalLayoutStyles){
        var c=document.createElement("style");
        c.type="text/css";
        var e=document.createTextNode(AV.criticalLayoutStyles);
        c.styleSheet?c.styleSheet.cssText=e.nodeValue:c.appendChild(e);
        document.getElementsByTagName("head")[0].appendChild(c)
        }
        a=AV.template[AV.launchData.layout].controls({
        internalSaveBlock:a,
        externalSaveBlock:d
    });
    d=document.createElement("div");
    d.id="avpw_holder";
    c="";
    AV.featherUseFlash&&(c="avpw_flash ");
    AV.msie&&(c+="avpw_ie"+AV.msie);
    if(c)d.className=c;
    (c=document.getElementsByTagName("body"))&&(c=c[0]);
    if(!c)c=document.documentElement;
    c.appendChild(d);
    d.innerHTML=a
    };
AV.setPopupPos=function(a){
    var d=AV.util.getX(a),c=AV.util.getY(a),a=d+(a.width<AV.launchData.maxSize?a.width:AV.launchData.maxSize)+15,d=document.getElementById("avpw_controls");
    d.style.position="absolute";
    d.style.left=a+"px";
    d.style.top=c+"px"
    };
AV.setLightboxPos=function(){
    var a;
    a="pageYOffset"in window?window.pageYOffset:(((t=document.documentElement)||(t=document.body.parentNode))&&typeof t.ScrollTop=="number"?t:document.body).scrollTop;
    document.getElementById("avpw_controls").style.top=a+30+"px"
    };
    
AV.buildHiddenFrame=function(a,d,c){
    c||(c=AV.build.feather_baseURL+"blank.html");
    d||(d=a);
    return['<iframe width="1" height="1" style="position:absolute;left:-9999px;" ','id="'+a+'" name="'+d+'" src="'+c+'">',"</iframe>"].join("")
    };
AV.simpleXHRPost=function(a,d,c){
    function e(){
        c&&h.readyState===4&&c(h.responseXML)
        }
        function f(a){
        var c=[];
        avpw$.each(a,function(a,d){
            if(d){
                var e="";
                e+="Content-Disposition: form-data; ";
                e+='name="'+a+'"\r\n\r\n';
                e+=d+"\r\n";
                c.push(e)
                }
            });
    a="--"+i+"\r\n";
    a+=c.join("--"+i+"\r\n");
    a+="--"+i+"--\r\n";
    return a
    }
    var i="FEATHER-AJAX---"+(new Date).getTime(),h=new XMLHttpRequest;
    try{
    var j="multipart/form-data; charset=UTF-8; boundary="+i;
    h.open("POST",a,true);
    h.setRequestHeader("Content-Type",j);
    h.onreadystatechange=
    e;
    var m=f(d);
    h.send(m)
    }catch(o){
    return false
    }
    return true
    };
AV.Feather=function(a){
    var d=false;
    if(a){
        if(a.apiVersion&&parseInt(a.apiVersion)===2)a.openType="aviary";
        if(!a.tools||a.tools==="all"||a.tools==="All"||a.tools==="")d=true
            }
            a=a||{};
    
    AV.launchData=AV.util.extend(AV.baseConfig,a);
    (function(){
        function a(c){
            var c=AV.build.feather_baseURL+"css/"+c,d=AV.launchData.theme;
            AV.launchData.openType=="mobile"||AV.launchData.openType=="aviary"?AV.util.loadFile(c+".css","css"):(AV.msie&&(AV.msie===8||AV.msie===7)?AV.util.loadFile(c+"_ie"+AV.msie+".css","css"):AV.featherUseFlash?
                AV.util.loadFile(c+"_flash.css","css"):AV.util.loadFile(c+".css","css"),AV.util.loadFile(c+"-"+d+".css","css"))
            }
            AV.featherUseFlash=!AV.featherHtmlOk()&&AV.featherFlashOk();
        AV.launchData.language=AV.launchData.language.toLowerCase();
        AV.launchData.openType=="float"&&(AV.launchData.openType="popup");
        AV.launchData.openType=="integrated"&&(AV.launchData.openType="lightbox");
        AV.launchData.openType=="inline"&&(AV.launchData.openType="inject");
        AV.featherUseFlash&&AV.launchData.openType=="popup"&&(AV.launchData.openType=
            "lightbox");
        AV.support.isMobileWebkit()&&(AV.launchData.openType="mobile");
        if(d)AV.launchData.tools=AV.launchData.openType==="aviary"?AV.defaultTools:AV.defaultTools_legacy,AV.launchData.openType=="mobile"&&AV.launchData.tools.unshift("effects");
        if(!AV.feather_loaded&&!AV.feather_loading){
            AV.feather_loading=true;
            var c="js/feathercontrols_desktop_bluesky.js";
            if(AV.launchData.openType=="mobile")c="js/feathercontrols_mobile.js",AV.launchData.layout="mobile_default";
            else if(AV.launchData.openType=="aviary")c=
                "js/feathercontrols_desktop.js",AV.launchData.layout="desktop";
            AV.launchData.openType=="mobile"?a("feather_mobile"):AV.launchData.openType=="aviary"?AV.launchData.minimumStyling?a("feather_core"):a("feather_theme_aviary"):AV.launchData.openType=="popup"?a("feather"):a("feather_hd");
            AV.launchData.openType=="aviary"?AV.util.loadFile(AV.build.feather_baseURL+"images/aviary_atlas.png","img"):AV.util.loadFile(AV.build.feather_baseURL+"images/atlas-"+AV.launchData.theme+".png","img");
            AV.build.bundled?(AV.injectControls(),
                AV.util.nextFrame(AV.loadStageFinal)):AV.util.loadFile(AV.build.feather_baseURL+c,"js",function(){
                AV.injectControls();
                AV.util.nextFrame(AV.loadStageFinal)
                })
            }
        })();
    var c=function(){
    if(AV.paintWidgetInstance)return false;
    else{
        var a=AV.util.getImageElem(AV.launchData.image);
        AV.launchData.openType=="popup"?AV.setPopupPos(a):AV.launchData.openType=="lightbox"&&AV.setLightboxPos(a);
        AV.paintWidgetLauncher(a,AV.launchData.url)
        }
    };

this.launch=function(a){
    if(!AV.feather_loaded)return false;
    if(AV.paintWidgetInstance)return false;
    AV.launchData=a?AV.util.extend(AV.launchData,a):AV.launchData;
    if(!AV.launchData.image)return false;
    AV.launchData.image=AV.util.getImageElem(AV.launchData.image);
    if(AV.featherUseFlash)c();
    else{
        if(!AV.featherSupported())return AV.errorNotify("UNSUPPORTED"),true;
        setTimeout(c,5)
        }
        return true
    };
    
this.save=function(){
    return!AV.paintWidgetInstance?false:AV.controlsWidgetInstance.save()
    };
    
this.close=function(a){
    if(!AV.paintWidgetInstance)return false;
    AV.paintWidgetCloser(a)
    };
    
this.relaunch=function(){
    AV.isRelaunched=
    true;
    if(AV.launchData)this.launch(AV.launchData);else return false
        };
        
this.activateTool=function(a){
    if(!AV.paintWidgetInstance)return false;
    AV.controlsWidgetInstance.setActiveTool(a)
    };
    
this.replaceImage=function(a){
    AV.paintWidgetRelauncher(a)
    };
    
this.updateConfig=function(a,c){
    if(AV.launchData&&a&&typeof a==="string")AV.launchData[a]=c;else return false
        };
        
this.getIsDirty=function(){
    return AV.paintWidgetInstance?AV.paintWidgetInstance.dirty:false
    };
    
this.getImageData=function(a,c,d){
    var h=AV.controlsWidgetInstance;
    return AV.paintWidgetInstance&&h.loaderPhase===2?(h.moduleNotify(h.curMode,"commit"),AV.paintWidgetInstance.exportImage(d,function(d){
        c&&AV.util.nextFrame(function(){
            AV.controlsWidget_onImageSaved(h.origURL)
            });
        a&&typeof a==="function"&&a.apply(this,[d])
        }),true):false
    };
    
this.getActionList=function(){
    if(AV.paintWidgetInstance){
        var a=AV.controlsWidgetInstance;
        a.moduleNotify(a.curMode,"commit");
        return AV.paintWidgetInstance.actions.exportJSON(true)
        }
    };

this.disableControls=function(){
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,
        "disableControls")
    };
    
this.enableControls=function(){
    AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType,"enableControls")
    };
    
return this
};
AV.setUpOstrich=function(){
    avpw_swfobject.embedSWF(AV.build.feather_baseURL+"ostrich/OstrichFeather.swf","avpw_OstrichFeather","1","1","10.0.0","ostrich/playerProductInstall.swf",{
        initializedCallback:"engineReady",
        allowDomains:"*",
        completeCallback:"AV.module_flashfilter_onFilterComplete"
    },{
        quality:"high",
        bgcolor:"#ffffff",
        allowscriptaccess:"always",
        allowfullscreen:"true",
        hasPriority:"true"
    },{
        id:"avpw_OstrichFeather",
        name:"avpw_OstrichFeather",
        align:"middle"
    })
    };
AV.loadStageFinal=function(){
    AV.feather_loaded=true;
    if(typeof AV.launchData.onLoad==="function")AV.launchData.onLoad()
        };
        
AV.featherSupported=function(){
    return AV.featherHtmlOk()||AV.featherFlashOk()||AV.launchData.forceSupport
    };
    
AV.featherFlashOk=function(){
    return AV.launchData.forceFlash?true:!AV.msie||AV.msie>=7
    };
    
AV.featherHtmlOk=function(){
    if(AV.launchData.forceFlash)return false;
    var a=!!document.createElement("canvas").getContext,d=typeof window.postMessage==="function";
    return a&&d
    };
AV.getFlashMovie=function(a){
    return window[a]||document[a]
    };
    
AV.msie=function(){
    for(var a=3,d=document.createElement("div"),c=d.getElementsByTagName("i");d.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);
    return a>4?a:void 0
    }();
AV.firefox=function(){
    var a;
    navigator.product==="Gecko"&&(a=navigator.userAgent.split("Firefox/")[1],a=parseInt(a,10));
    return a
    }();
AV.PAGE_WIDTH=360;
AV.setPageWidth=function(a){
    AV.PAGE_WIDTH=a
    };
AV.support=function(a){
    var d=a.navigator.userAgent,c=a.screen.width,a={
        0:/Android/i,
        1:/webOS/i,
        2:/iPhone/i,
        3:/iPod/i,
        4:/BlackBerry/i,
        5:/iPad/i
    },e,f=0,i=0,h=0,j;
    for(j in a)d.match(a[j])&&(e=parseInt(j));d.match(/AppleWebKit/i)&&(f=1);
    e===0&&(i=1);
    i===1&&(d=d.match(/Android [0-9].[0-9]/).toString())&&(h=parseFloat(d.split("Android ")[1]));
    d={
        isAppleWebkit:function(){
            return f===1
            },
        isMobileWebkit:function(){
            return f===1&&c&&(c<=480||h>0&&h<=2.3)
            },
        isIPhoneOrIPod:function(){
            return e===2||e===3
            },
        isAndroid:function(){
            return i===
            1
            },
        getAndroidVersion:function(){
            return h
            }
        };
    
d.getVendorProperty=function(){
    var a={};
    
    return function(c){
        var d;
        if(!(d=a[c])){
            var e;
                a:{
                var f=document.createElement("div");
                d=c;
                var h=["webkit","ms","Moz","O"],i,j=f.style;
                if(j[d]!==void 0)e=d;
                else{
                    d=d.charAt(0).toUpperCase()+d.slice(1);
                    for(i=0;i<h.length;i++)if(f=h[i]+d,j[f]!==void 0){
                        e=f;
                        break a
                    }
                    }
                }
            d=a[c]=e
    }
    return d
}
}();
return d
}(window);/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


