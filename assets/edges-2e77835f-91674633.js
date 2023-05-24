import{q as R,c as w,d as z,_ as D,h as L,l as y,y as U,a2 as Q}from"./mermaid.core-e2e8bcd5.js";import{c as P}from"./createText-1f5f8f92-d8107aa4.js";import{p as V}from"./svgDraw-2526cba0-68347cb6.js";import{l as et}from"./line-ffb74aa8.js";const st=(r,t,e,l)=>{t.forEach(a=>{bt[a](r,e,l)})},it=(r,t,e)=>{y.trace("Making markers for ",e),r.append("defs").append("marker").attr("id",t+"-extensionStart").attr("class","marker extension "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),r.append("defs").append("marker").attr("id",t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},lt=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-compositionStart").attr("class","marker composition "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},nt=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},ct=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},ht=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},ot=(r,t)=>{r.append("marker").attr("id",t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 12 20").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},ft=(r,t)=>{r.append("marker").attr("id",t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},pt=(r,t)=>{r.append("marker").attr("id",t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},dt=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},bt={extension:it,composition:lt,aggregation:nt,dependency:ct,lollipop:ht,point:ot,circle:ft,cross:pt,barb:dt},Kt=st;function xt(r,t){t&&r.attr("style",t)}function yt(r){const t=L(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),e=t.append("xhtml:div"),l=r.label,a=r.isNode?"nodeLabel":"edgeLabel";return e.html('<span class="'+a+'" '+(r.labelStyle?'style="'+r.labelStyle+'"':"")+">"+l+"</span>"),xt(e,r.labelStyle),e.style("display","inline-block"),e.style("white-space","nowrap"),e.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}const gt=(r,t,e,l)=>{let a=r||"";if(typeof a=="object"&&(a=a[0]),R(w().flowchart.htmlLabels)){a=a.replace(/\\n|\n/g,"<br />"),y.info("vertexText"+a);const s={isNode:l,label:D(a).replace(/fa[blrs]?:fa-[\w-]+/g,n=>`<i class='${n.replace(":"," ")}'></i>`),labelStyle:t.replace("fill:","color:")};return yt(s)}else{const s=document.createElementNS("http://www.w3.org/2000/svg","text");s.setAttribute("style",t.replace("color:","fill:"));let i=[];typeof a=="string"?i=a.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(a)?i=a:i=[];for(const n of i){const c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),c.setAttribute("dy","1em"),c.setAttribute("x","0"),e?c.setAttribute("class","title-row"):c.setAttribute("class","row"),c.textContent=n.trim(),s.appendChild(c)}return s}},T=gt,S=(r,t,e,l)=>{let a;const s=t.useHtmlLabels||R(w().flowchart.htmlLabels);e?a=e:a="node default";const i=r.insert("g").attr("class",a).attr("id",t.domId||t.id),n=i.insert("g").attr("class","label").attr("style",t.labelStyle);let c;t.labelText===void 0?c="":c=typeof t.labelText=="string"?t.labelText:t.labelText[0];const o=n.node();let h;t.labelType==="markdown"?h=P(n,z(D(c),w()),{useHtmlLabels:s,width:t.width||w().flowchart.wrappingWidth,classes:"markdown-node-label"}):h=o.appendChild(T(z(D(c),w()),t.labelStyle,!1,l));let f=h.getBBox();if(R(w().flowchart.htmlLabels)){const p=h.children[0],d=L(h);f=p.getBoundingClientRect(),d.attr("width",f.width),d.attr("height",f.height)}const b=t.padding/2;return s?n.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):n.attr("transform","translate(0, "+-f.height/2+")"),t.centerLabel&&n.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),n.insert("rect",":first-child"),{shapeSvg:i,bbox:f,halfPadding:b,label:n}},m=(r,t)=>{const e=t.node().getBBox();r.width=e.width,r.height=e.height};function I(r,t,e,l){return r.insert("polygon",":first-child").attr("points",l.map(function(a){return a.x+","+a.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+e/2+")")}function ut(r,t){return r.intersect(t)}function tt(r,t,e,l){var a=r.x,s=r.y,i=a-l.x,n=s-l.y,c=Math.sqrt(t*t*n*n+e*e*i*i),o=Math.abs(t*e*i/c);l.x<a&&(o=-o);var h=Math.abs(t*e*n/c);return l.y<s&&(h=-h),{x:a+o,y:s+h}}function wt(r,t,e){return tt(r,t,t,e)}function mt(r,t,e,l){var a,s,i,n,c,o,h,f,b,p,d,x,g,k,H;if(a=t.y-r.y,i=r.x-t.x,c=t.x*r.y-r.x*t.y,b=a*e.x+i*e.y+c,p=a*l.x+i*l.y+c,!(b!==0&&p!==0&&q(b,p))&&(s=l.y-e.y,n=e.x-l.x,o=l.x*e.y-e.x*l.y,h=s*r.x+n*r.y+o,f=s*t.x+n*t.y+o,!(h!==0&&f!==0&&q(h,f))&&(d=a*n-s*i,d!==0)))return x=Math.abs(d/2),g=i*o-n*c,k=g<0?(g-x)/d:(g+x)/d,g=s*c-a*o,H=g<0?(g-x)/d:(g+x)/d,{x:k,y:H}}function q(r,t){return r*t>0}function kt(r,t,e){var l=r.x,a=r.y,s=[],i=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(d){i=Math.min(i,d.x),n=Math.min(n,d.y)}):(i=Math.min(i,t.x),n=Math.min(n,t.y));for(var c=l-r.width/2-i,o=a-r.height/2-n,h=0;h<t.length;h++){var f=t[h],b=t[h<t.length-1?h+1:0],p=mt(r,e,{x:c+f.x,y:o+f.y},{x:c+b.x,y:o+b.y});p&&s.push(p)}return s.length?(s.length>1&&s.sort(function(d,x){var g=d.x-e.x,k=d.y-e.y,H=Math.sqrt(g*g+k*k),N=x.x-e.x,B=x.y-e.y,X=Math.sqrt(N*N+B*B);return H<X?-1:H===X?0:1}),s[0]):r}const vt=(r,t)=>{var e=r.x,l=r.y,a=t.x-e,s=t.y-l,i=r.width/2,n=r.height/2,c,o;return Math.abs(s)*i>Math.abs(a)*n?(s<0&&(n=-n),c=s===0?0:n*a/s,o=n):(a<0&&(i=-i),c=i,o=a===0?0:i*s/a),{x:e+c,y:l+o}},Lt=vt,u={node:ut,circle:wt,ellipse:tt,polygon:kt,rect:Lt},St=(r,t)=>{t.useHtmlLabels||w().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:l,bbox:a,halfPadding:s}=S(r,t,"node "+t.classes,!0);y.info("Classes = ",t.classes);const i=l.insert("rect",":first-child");return i.attr("rx",t.rx).attr("ry",t.ry).attr("x",-a.width/2-s).attr("y",-a.height/2-s).attr("width",a.width+t.padding).attr("height",a.height+t.padding),m(t,i),t.intersect=function(n){return u.rect(t,n)},l},Et=St,J=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=l.height+t.padding,i=a+s,n=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];y.info("Question main (Circle)");const c=I(e,i,i,n);return c.attr("style",t.style),m(t,c),t.intersect=function(o){return y.warn("Intersect called"),u.polygon(t,n,o)},e},Bt=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=28,a=[{x:0,y:l/2},{x:l/2,y:0},{x:0,y:-l/2},{x:-l/2,y:0}];return e.insert("polygon",":first-child").attr("points",a.map(function(i){return i.x+","+i.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(i){return u.circle(t,14,i)},e},Mt=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=4,s=l.height+t.padding,i=s/a,n=l.width+2*i+t.padding,c=[{x:i,y:0},{x:n-i,y:0},{x:n,y:-s/2},{x:n-i,y:-s},{x:i,y:-s},{x:0,y:-s/2}],o=I(e,n,s,c);return o.attr("style",t.style),m(t,o),t.intersect=function(h){return u.polygon(t,c,h)},e},Ct=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:-s/2,y:0},{x:a,y:0},{x:a,y:-s},{x:-s/2,y:-s},{x:0,y:-s/2}];return I(e,a,s,i).attr("style",t.style),t.width=a+s,t.height=s,t.intersect=function(c){return u.polygon(t,i,c)},e},Tt=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:-2*s/6,y:0},{x:a-s/6,y:0},{x:a+2*s/6,y:-s},{x:s/6,y:-s}],n=I(e,a,s,i);return n.attr("style",t.style),m(t,n),t.intersect=function(c){return u.polygon(t,i,c)},e},Rt=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:2*s/6,y:0},{x:a+s/6,y:0},{x:a-2*s/6,y:-s},{x:-s/6,y:-s}],n=I(e,a,s,i);return n.attr("style",t.style),m(t,n),t.intersect=function(c){return u.polygon(t,i,c)},e},Ht=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:-2*s/6,y:0},{x:a+2*s/6,y:0},{x:a-s/6,y:-s},{x:s/6,y:-s}],n=I(e,a,s,i);return n.attr("style",t.style),m(t,n),t.intersect=function(c){return u.polygon(t,i,c)},e},_t=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:s/6,y:0},{x:a-s/6,y:0},{x:a+2*s/6,y:-s},{x:-2*s/6,y:-s}],n=I(e,a,s,i);return n.attr("style",t.style),m(t,n),t.intersect=function(c){return u.polygon(t,i,c)},e},It=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:0,y:0},{x:a+s/2,y:0},{x:a,y:-s/2},{x:a+s/2,y:-s},{x:0,y:-s}],n=I(e,a,s,i);return n.attr("style",t.style),m(t,n),t.intersect=function(c){return u.polygon(t,i,c)},e},Nt=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=a/2,i=s/(2.5+a/50),n=l.height+i+t.padding,c="M 0,"+i+" a "+s+","+i+" 0,0,0 "+a+" 0 a "+s+","+i+" 0,0,0 "+-a+" 0 l 0,"+n+" a "+s+","+i+" 0,0,0 "+a+" 0 l 0,"+-n,o=e.attr("label-offset-y",i).insert("path",":first-child").attr("style",t.style).attr("d",c).attr("transform","translate("+-a/2+","+-(n/2+i)+")");return m(t,o),t.intersect=function(h){const f=u.rect(t,h),b=f.x-t.x;if(s!=0&&(Math.abs(b)<t.width/2||Math.abs(b)==t.width/2&&Math.abs(f.y-t.y)>t.height/2-i)){let p=i*i*(1-b*b/(s*s));p!=0&&(p=Math.sqrt(p)),p=i-p,h.y-t.y>0&&(p=-p),f.y+=p}return f},e},$t=(r,t)=>{const{shapeSvg:e,bbox:l,halfPadding:a}=S(r,t,"node "+t.classes,!0),s=e.insert("rect",":first-child"),i=l.width+t.padding,n=l.height+t.padding;if(s.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",-l.width/2-a).attr("y",-l.height/2-a).attr("width",i).attr("height",n),t.props){const c=new Set(Object.keys(t.props));t.props.borders&&(rt(s,t.props.borders,i,n),c.delete("borders")),c.forEach(o=>{y.warn(`Unknown node property ${o}`)})}return m(t,s),t.intersect=function(c){return u.rect(t,c)},e},Wt=(r,t)=>{const{shapeSvg:e}=S(r,t,"label",!0);y.trace("Classes = ",t.classes);const l=e.insert("rect",":first-child"),a=0,s=0;if(l.attr("width",a).attr("height",s),e.attr("class","label edgeLabel"),t.props){const i=new Set(Object.keys(t.props));t.props.borders&&(rt(l,t.props.borders,a,s),i.delete("borders")),i.forEach(n=>{y.warn(`Unknown node property ${n}`)})}return m(t,l),t.intersect=function(i){return u.rect(t,i)},e};function rt(r,t,e,l){const a=[],s=n=>{a.push(n,0)},i=n=>{a.push(0,n)};t.includes("t")?(y.debug("add top border"),s(e)):i(e),t.includes("r")?(y.debug("add right border"),s(l)):i(l),t.includes("b")?(y.debug("add bottom border"),s(e)):i(e),t.includes("l")?(y.debug("add left border"),s(l)):i(l),r.attr("stroke-dasharray",a.join(" "))}const Xt=(r,t)=>{let e;t.classes?e="node "+t.classes:e="node default";const l=r.insert("g").attr("class",e).attr("id",t.domId||t.id),a=l.insert("rect",":first-child"),s=l.insert("line"),i=l.insert("g").attr("class","label"),n=t.labelText.flat?t.labelText.flat():t.labelText;let c="";typeof n=="object"?c=n[0]:c=n,y.info("Label text abc79",c,n,typeof n=="object");const o=i.node().appendChild(T(c,t.labelStyle,!0,!0));let h={width:0,height:0};if(R(w().flowchart.htmlLabels)){const x=o.children[0],g=L(o);h=x.getBoundingClientRect(),g.attr("width",h.width),g.attr("height",h.height)}y.info("Text 2",n);const f=n.slice(1,n.length);let b=o.getBBox();const p=i.node().appendChild(T(f.join?f.join("<br/>"):f,t.labelStyle,!0,!0));if(R(w().flowchart.htmlLabels)){const x=p.children[0],g=L(p);h=x.getBoundingClientRect(),g.attr("width",h.width),g.attr("height",h.height)}const d=t.padding/2;return L(p).attr("transform","translate( "+(h.width>b.width?0:(b.width-h.width)/2)+", "+(b.height+d+5)+")"),L(o).attr("transform","translate( "+(h.width<b.width?0:-(b.width-h.width)/2)+", 0)"),h=i.node().getBBox(),i.attr("transform","translate("+-h.width/2+", "+(-h.height/2-d+3)+")"),a.attr("class","outer title-state").attr("x",-h.width/2-d).attr("y",-h.height/2-d).attr("width",h.width+t.padding).attr("height",h.height+t.padding),s.attr("class","divider").attr("x1",-h.width/2-d).attr("x2",h.width/2+d).attr("y1",-h.height/2-d+b.height+d).attr("y2",-h.height/2-d+b.height+d),m(t,a),t.intersect=function(x){return u.rect(t,x)},l},Yt=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.height+t.padding,s=l.width+a/4+t.padding,i=e.insert("rect",":first-child").attr("style",t.style).attr("rx",a/2).attr("ry",a/2).attr("x",-s/2).attr("y",-a/2).attr("width",s).attr("height",a);return m(t,i),t.intersect=function(n){return u.rect(t,n)},e},Ut=(r,t)=>{const{shapeSvg:e,bbox:l,halfPadding:a}=S(r,t,void 0,!0),s=e.insert("circle",":first-child");return s.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+a).attr("width",l.width+t.padding).attr("height",l.height+t.padding),y.info("Circle main"),m(t,s),t.intersect=function(i){return y.info("Circle intersect",t,l.width/2+a,i),u.circle(t,l.width/2+a,i)},e},At=(r,t)=>{const{shapeSvg:e,bbox:l,halfPadding:a}=S(r,t,void 0,!0),s=5,i=e.insert("g",":first-child"),n=i.insert("circle"),c=i.insert("circle");return n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+a+s).attr("width",l.width+t.padding+s*2).attr("height",l.height+t.padding+s*2),c.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+a).attr("width",l.width+t.padding).attr("height",l.height+t.padding),y.info("DoubleCircle main"),m(t,n),t.intersect=function(o){return y.info("DoubleCircle intersect",t,l.width/2+a+s,o),u.circle(t,l.width/2+a+s,o)},e},Ot=(r,t)=>{const{shapeSvg:e,bbox:l}=S(r,t,void 0,!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:0,y:0},{x:a,y:0},{x:a,y:-s},{x:0,y:-s},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-s},{x:-8,y:-s},{x:-8,y:0}],n=I(e,a,s,i);return n.attr("style",t.style),m(t,n),t.intersect=function(c){return u.polygon(t,i,c)},e},jt=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=e.insert("circle",":first-child");return l.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),m(t,l),t.intersect=function(a){return u.circle(t,7,a)},e},F=(r,t,e)=>{const l=r.insert("g").attr("class","node default").attr("id",t.domId||t.id);let a=70,s=10;e==="LR"&&(a=10,s=70);const i=l.append("rect").attr("x",-1*a/2).attr("y",-1*s/2).attr("width",a).attr("height",s).attr("class","fork-join");return m(t,i),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(n){return u.rect(t,n)},l},Dt=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=e.insert("circle",":first-child"),a=e.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),l.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),m(t,a),t.intersect=function(s){return u.circle(t,7,s)},e},Zt=(r,t)=>{const e=t.padding/2,l=4,a=8;let s;t.classes?s="node "+t.classes:s="node default";const i=r.insert("g").attr("class",s).attr("id",t.domId||t.id),n=i.insert("rect",":first-child"),c=i.insert("line"),o=i.insert("line");let h=0,f=l;const b=i.insert("g").attr("class","label");let p=0;const d=t.classData.annotations&&t.classData.annotations[0],x=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",g=b.node().appendChild(T(x,t.labelStyle,!0,!0));let k=g.getBBox();if(R(w().flowchart.htmlLabels)){const E=g.children[0],M=L(g);k=E.getBoundingClientRect(),M.attr("width",k.width),M.attr("height",k.height)}t.classData.annotations[0]&&(f+=k.height+l,h+=k.width);let H=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(w().flowchart.htmlLabels?H+="&lt;"+t.classData.type+"&gt;":H+="<"+t.classData.type+">");const N=b.node().appendChild(T(H,t.labelStyle,!0,!0));L(N).attr("class","classTitle");let B=N.getBBox();if(R(w().flowchart.htmlLabels)){const E=N.children[0],M=L(N);B=E.getBoundingClientRect(),M.attr("width",B.width),M.attr("height",B.height)}f+=B.height+l,B.width>h&&(h=B.width);const X=[];t.classData.members.forEach(E=>{const M=V(E);let $=M.displayText;w().flowchart.htmlLabels&&($=$.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const _=b.node().appendChild(T($,M.cssStyle?M.cssStyle:t.labelStyle,!0,!0));let C=_.getBBox();if(R(w().flowchart.htmlLabels)){const j=_.children[0],Y=L(_);C=j.getBoundingClientRect(),Y.attr("width",C.width),Y.attr("height",C.height)}C.width>h&&(h=C.width),f+=C.height+l,X.push(_)}),f+=a;const Z=[];if(t.classData.methods.forEach(E=>{const M=V(E);let $=M.displayText;w().flowchart.htmlLabels&&($=$.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const _=b.node().appendChild(T($,M.cssStyle?M.cssStyle:t.labelStyle,!0,!0));let C=_.getBBox();if(R(w().flowchart.htmlLabels)){const j=_.children[0],Y=L(_);C=j.getBoundingClientRect(),Y.attr("width",C.width),Y.attr("height",C.height)}C.width>h&&(h=C.width),f+=C.height+l,Z.push(_)}),f+=a,d){let E=(h-k.width)/2;L(g).attr("transform","translate( "+(-1*h/2+E)+", "+-1*f/2+")"),p=k.height+l}let at=(h-B.width)/2;return L(N).attr("transform","translate( "+(-1*h/2+at)+", "+(-1*f/2+p)+")"),p+=B.height+l,c.attr("class","divider").attr("x1",-h/2-e).attr("x2",h/2+e).attr("y1",-f/2-e+a+p).attr("y2",-f/2-e+a+p),p+=a,X.forEach(E=>{L(E).attr("transform","translate( "+-h/2+", "+(-1*f/2+p+a/2)+")"),p+=B.height+l}),p+=a,o.attr("class","divider").attr("x1",-h/2-e).attr("x2",h/2+e).attr("y1",-f/2-e+a+p).attr("y2",-f/2-e+a+p),p+=a,Z.forEach(E=>{L(E).attr("transform","translate( "+-h/2+", "+(-1*f/2+p)+")"),p+=B.height+l}),n.attr("class","outer title-state").attr("x",-h/2-e).attr("y",-(f/2)-e).attr("width",h+t.padding).attr("height",f+t.padding),m(t,n),t.intersect=function(E){return u.rect(t,E)},i},K={rhombus:J,question:J,rect:$t,labelRect:Wt,rectWithTitle:Xt,choice:Bt,circle:Ut,doublecircle:At,stadium:Yt,hexagon:Mt,rect_left_inv_arrow:Ct,lean_right:Tt,lean_left:Rt,trapezoid:Ht,inv_trapezoid:_t,rect_right_inv_arrow:It,cylinder:Nt,start:jt,end:Dt,note:Et,subroutine:Ot,fork:F,join:F,class_box:Zt};let W={};const Gt=(r,t,e)=>{let l,a;if(t.link){let s;w().securityLevel==="sandbox"?s="_top":t.linkTarget&&(s=t.linkTarget||"_blank"),l=r.insert("svg:a").attr("xlink:href",t.link).attr("target",s),a=K[t.shape](l,t,e)}else a=K[t.shape](r,t,e),l=a;return t.tooltip&&a.attr("title",t.tooltip),t.class&&a.attr("class","node default "+t.class),W[t.id]=l,t.haveCallback&&W[t.id].attr("class",W[t.id].attr("class")+" clickable"),l},Pt=(r,t)=>{W[t.id]=r},tr=()=>{W={}},rr=r=>{const t=W[r.id];y.trace("Transforming node",r.diff,r,"translate("+(r.x-r.width/2-5)+", "+r.width/2+")");const e=8,l=r.diff||0;return r.clusterNode?t.attr("transform","translate("+(r.x+l-r.width/2)+", "+(r.y-r.height/2-e)+")"):t.attr("transform","translate("+r.x+", "+r.y+")"),l};let O={},v={};const ar=()=>{O={},v={}},er=(r,t)=>{const e=R(w().flowchart.htmlLabels),l=t.labelType==="markdown"?P(r,t.label,{style:t.labelStyle,useHtmlLabels:e,addSvgBackground:!0}):T(t.label,t.labelStyle);y.info("abc82",t,t.labelType);const a=r.insert("g").attr("class","edgeLabel"),s=a.insert("g").attr("class","label");s.node().appendChild(l);let i=l.getBBox();if(e){const c=l.children[0],o=L(l);i=c.getBoundingClientRect(),o.attr("width",i.width),o.attr("height",i.height)}s.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),O[t.id]=a,t.width=i.width,t.height=i.height;let n;if(t.startLabelLeft){const c=T(t.startLabelLeft,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");n=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),v[t.id]||(v[t.id]={}),v[t.id].startLeft=o,A(n,t.startLabelLeft)}if(t.startLabelRight){const c=T(t.startLabelRight,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");n=o.node().appendChild(c),h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),v[t.id]||(v[t.id]={}),v[t.id].startRight=o,A(n,t.startLabelRight)}if(t.endLabelLeft){const c=T(t.endLabelLeft,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");n=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),o.node().appendChild(c),v[t.id]||(v[t.id]={}),v[t.id].endLeft=o,A(n,t.endLabelLeft)}if(t.endLabelRight){const c=T(t.endLabelRight,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");n=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),o.node().appendChild(c),v[t.id]||(v[t.id]={}),v[t.id].endRight=o,A(n,t.endLabelRight)}return l};function A(r,t){w().flowchart.htmlLabels&&r&&(r.style.width=t.length*9+"px",r.style.height="12px")}const sr=(r,t)=>{y.info("Moving label abc78 ",r.id,r.label,O[r.id]);let e=t.updatedPath?t.updatedPath:t.originalPath;if(r.label){const l=O[r.id];let a=r.x,s=r.y;if(e){const i=U.calcLabelPosition(e);y.info("Moving label "+r.label+" from (",a,",",s,") to (",i.x,",",i.y,") abc78"),t.updatedPath&&(a=i.x,s=i.y)}l.attr("transform","translate("+a+", "+s+")")}if(r.startLabelLeft){const l=v[r.id].startLeft;let a=r.x,s=r.y;if(e){const i=U.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_left",e);a=i.x,s=i.y}l.attr("transform","translate("+a+", "+s+")")}if(r.startLabelRight){const l=v[r.id].startRight;let a=r.x,s=r.y;if(e){const i=U.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_right",e);a=i.x,s=i.y}l.attr("transform","translate("+a+", "+s+")")}if(r.endLabelLeft){const l=v[r.id].endLeft;let a=r.x,s=r.y;if(e){const i=U.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_left",e);a=i.x,s=i.y}l.attr("transform","translate("+a+", "+s+")")}if(r.endLabelRight){const l=v[r.id].endRight;let a=r.x,s=r.y;if(e){const i=U.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_right",e);a=i.x,s=i.y}l.attr("transform","translate("+a+", "+s+")")}},zt=(r,t)=>{const e=r.x,l=r.y,a=Math.abs(t.x-e),s=Math.abs(t.y-l),i=r.width/2,n=r.height/2;return a>=i||s>=n},Qt=(r,t,e)=>{y.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(e)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);const l=r.x,a=r.y,s=Math.abs(l-e.x),i=r.width/2;let n=e.x<t.x?i-s:i+s;const c=r.height/2,o=Math.abs(t.y-e.y),h=Math.abs(t.x-e.x);if(Math.abs(a-t.y)*i>Math.abs(l-t.x)*c){let f=e.y<t.y?t.y-c-a:a-c-t.y;n=h*f/o;const b={x:e.x<t.x?e.x+n:e.x-h+n,y:e.y<t.y?e.y+o-f:e.y-o+f};return n===0&&(b.x=t.x,b.y=t.y),h===0&&(b.x=t.x),o===0&&(b.y=t.y),y.warn(`abc89 topp/bott calc, Q ${o}, q ${f}, R ${h}, r ${n}`,b),b}else{e.x<t.x?n=t.x-i-l:n=l-i-t.x;let f=o*n/h,b=e.x<t.x?e.x+h-n:e.x-h+n,p=e.y<t.y?e.y+f:e.y-f;return y.warn(`sides calc abc89, Q ${o}, q ${f}, R ${h}, r ${n}`,{_x:b,_y:p}),n===0&&(b=t.x,p=t.y),h===0&&(b=t.x),o===0&&(p=t.y),{x:b,y:p}}},G=(r,t)=>{y.warn("abc88 cutPathAtIntersect",r,t);let e=[],l=r[0],a=!1;return r.forEach(s=>{if(y.info("abc88 checking point",s,t),!zt(t,s)&&!a){const i=Qt(t,l,s);y.warn("abc88 inside",s,l,i),y.warn("abc88 intersection",i);let n=!1;e.forEach(c=>{n=n||c.x===i.x&&c.y===i.y}),e.some(c=>c.x===i.x&&c.y===i.y)?y.warn("abc88 no intersect",i,e):e.push(i),a=!0}else y.warn("abc88 outside",s,l),l=s,a||e.push(s)}),y.warn("abc88 returning points",e),e},ir=function(r,t,e,l,a,s){let i=e.points,n=!1;const c=s.node(t.v);var o=s.node(t.w);y.info("abc88 InsertEdge: ",e),o.intersect&&c.intersect&&(i=i.slice(1,e.points.length-1),i.unshift(c.intersect(i[0])),y.info("Last point",i[i.length-1],o,o.intersect(i[i.length-1])),i.push(o.intersect(i[i.length-1]))),e.toCluster&&(y.info("to cluster abc88",l[e.toCluster]),i=G(e.points,l[e.toCluster].node),n=!0),e.fromCluster&&(y.info("from cluster abc88",l[e.fromCluster]),i=G(i.reverse(),l[e.fromCluster].node).reverse(),n=!0);const h=i.filter(k=>!Number.isNaN(k.y));let f;a==="graph"||a==="flowchart"?f=e.curve||Q:f=Q;const b=et().x(function(k){return k.x}).y(function(k){return k.y}).curve(f);let p;switch(e.thickness){case"normal":p="edge-thickness-normal";break;case"thick":p="edge-thickness-thick";break;case"invisible":p="edge-thickness-thick";break;default:p=""}switch(e.pattern){case"solid":p+=" edge-pattern-solid";break;case"dotted":p+=" edge-pattern-dotted";break;case"dashed":p+=" edge-pattern-dashed";break}const d=r.append("path").attr("d",b(h)).attr("id",e.id).attr("class"," "+p+(e.classes?" "+e.classes:"")).attr("style",e.style);let x="";switch((w().flowchart.arrowMarkerAbsolute||w().state.arrowMarkerAbsolute)&&(x=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,x=x.replace(/\(/g,"\\("),x=x.replace(/\)/g,"\\)")),y.info("arrowTypeStart",e.arrowTypeStart),y.info("arrowTypeEnd",e.arrowTypeEnd),e.arrowTypeStart){case"arrow_cross":d.attr("marker-start","url("+x+"#"+a+"-crossStart)");break;case"arrow_point":d.attr("marker-start","url("+x+"#"+a+"-pointStart)");break;case"arrow_barb":d.attr("marker-start","url("+x+"#"+a+"-barbStart)");break;case"arrow_circle":d.attr("marker-start","url("+x+"#"+a+"-circleStart)");break;case"aggregation":d.attr("marker-start","url("+x+"#"+a+"-aggregationStart)");break;case"extension":d.attr("marker-start","url("+x+"#"+a+"-extensionStart)");break;case"composition":d.attr("marker-start","url("+x+"#"+a+"-compositionStart)");break;case"dependency":d.attr("marker-start","url("+x+"#"+a+"-dependencyStart)");break;case"lollipop":d.attr("marker-start","url("+x+"#"+a+"-lollipopStart)");break}switch(e.arrowTypeEnd){case"arrow_cross":d.attr("marker-end","url("+x+"#"+a+"-crossEnd)");break;case"arrow_point":d.attr("marker-end","url("+x+"#"+a+"-pointEnd)");break;case"arrow_barb":d.attr("marker-end","url("+x+"#"+a+"-barbEnd)");break;case"arrow_circle":d.attr("marker-end","url("+x+"#"+a+"-circleEnd)");break;case"aggregation":d.attr("marker-end","url("+x+"#"+a+"-aggregationEnd)");break;case"extension":d.attr("marker-end","url("+x+"#"+a+"-extensionEnd)");break;case"composition":d.attr("marker-end","url("+x+"#"+a+"-compositionEnd)");break;case"dependency":d.attr("marker-end","url("+x+"#"+a+"-dependencyEnd)");break;case"lollipop":d.attr("marker-end","url("+x+"#"+a+"-lollipopEnd)");break}let g={};return n&&(g.updatedPath=i),g.originalPath=e.points,g};export{Gt as a,er as b,ir as c,sr as d,tr as e,ar as f,T as g,Lt as h,Kt as i,S as l,rr as p,Pt as s,m as u};
