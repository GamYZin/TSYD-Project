var m={exports:{}},M={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},b=M,w={};for(var d in b)b.hasOwnProperty(d)&&(w[b[d]]=d);var u=m.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var h in u)if(u.hasOwnProperty(h)){if(!("channels"in u[h]))throw new Error("missing channels property: "+h);if(!("labels"in u[h]))throw new Error("missing channel labels property: "+h);if(u[h].labels.length!==u[h].channels)throw new Error("channel and label counts mismatch: "+h);var x=u[h].channels,F=u[h].labels;delete u[h].channels,delete u[h].labels,Object.defineProperty(u[h],"channels",{value:x}),Object.defineProperty(u[h],"labels",{value:F})}u.rgb.hsl=function(r){var n=r[0]/255,e=r[1]/255,a=r[2]/255,t=Math.min(n,e,a),v=Math.max(n,e,a),i=v-t,l,o,s;return v===t?l=0:n===v?l=(e-a)/i:e===v?l=2+(a-n)/i:a===v&&(l=4+(n-e)/i),l=Math.min(l*60,360),l<0&&(l+=360),s=(t+v)/2,v===t?o=0:s<=.5?o=i/(v+t):o=i/(2-v-t),[l,o*100,s*100]};u.rgb.hsv=function(r){var n,e,a,t,v,i=r[0]/255,l=r[1]/255,o=r[2]/255,s=Math.max(i,l,o),c=s-Math.min(i,l,o),f=function(k){return(s-k)/6/c+1/2};return c===0?t=v=0:(v=c/s,n=f(i),e=f(l),a=f(o),i===s?t=a-e:l===s?t=1/3+n-a:o===s&&(t=2/3+e-n),t<0?t+=1:t>1&&(t-=1)),[t*360,v*100,s*100]};u.rgb.hwb=function(r){var n=r[0],e=r[1],a=r[2],t=u.rgb.hsl(r)[0],v=1/255*Math.min(n,Math.min(e,a));return a=1-1/255*Math.max(n,Math.max(e,a)),[t,v*100,a*100]};u.rgb.cmyk=function(r){var n=r[0]/255,e=r[1]/255,a=r[2]/255,t,v,i,l;return l=Math.min(1-n,1-e,1-a),t=(1-n-l)/(1-l)||0,v=(1-e-l)/(1-l)||0,i=(1-a-l)/(1-l)||0,[t*100,v*100,i*100,l*100]};function q(r,n){return Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2)+Math.pow(r[2]-n[2],2)}u.rgb.keyword=function(r){var n=w[r];if(n)return n;var e=1/0,a;for(var t in b)if(b.hasOwnProperty(t)){var v=b[t],i=q(r,v);i<e&&(e=i,a=t)}return a};u.keyword.rgb=function(r){return b[r]};u.rgb.xyz=function(r){var n=r[0]/255,e=r[1]/255,a=r[2]/255;n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92;var t=n*.4124+e*.3576+a*.1805,v=n*.2126+e*.7152+a*.0722,i=n*.0193+e*.1192+a*.9505;return[t*100,v*100,i*100]};u.rgb.lab=function(r){var n=u.rgb.xyz(r),e=n[0],a=n[1],t=n[2],v,i,l;return e/=95.047,a/=100,t/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,v=116*a-16,i=500*(e-a),l=200*(a-t),[v,i,l]};u.hsl.rgb=function(r){var n=r[0]/360,e=r[1]/100,a=r[2]/100,t,v,i,l,o;if(e===0)return o=a*255,[o,o,o];a<.5?v=a*(1+e):v=a+e-a*e,t=2*a-v,l=[0,0,0];for(var s=0;s<3;s++)i=n+1/3*-(s-1),i<0&&i++,i>1&&i--,6*i<1?o=t+(v-t)*6*i:2*i<1?o=v:3*i<2?o=t+(v-t)*(2/3-i)*6:o=t,l[s]=o*255;return l};u.hsl.hsv=function(r){var n=r[0],e=r[1]/100,a=r[2]/100,t=e,v=Math.max(a,.01),i,l;return a*=2,e*=a<=1?a:2-a,t*=v<=1?v:2-v,l=(a+e)/2,i=a===0?2*t/(v+t):2*e/(a+e),[n,i*100,l*100]};u.hsv.rgb=function(r){var n=r[0]/60,e=r[1]/100,a=r[2]/100,t=Math.floor(n)%6,v=n-Math.floor(n),i=255*a*(1-e),l=255*a*(1-e*v),o=255*a*(1-e*(1-v));switch(a*=255,t){case 0:return[a,o,i];case 1:return[l,a,i];case 2:return[i,a,o];case 3:return[i,l,a];case 4:return[o,i,a];case 5:return[a,i,l]}};u.hsv.hsl=function(r){var n=r[0],e=r[1]/100,a=r[2]/100,t=Math.max(a,.01),v,i,l;return l=(2-e)*a,v=(2-e)*t,i=e*t,i/=v<=1?v:2-v,i=i||0,l/=2,[n,i*100,l*100]};u.hwb.rgb=function(r){var n=r[0]/360,e=r[1]/100,a=r[2]/100,t=e+a,v,i,l,o;t>1&&(e/=t,a/=t),v=Math.floor(6*n),i=1-a,l=6*n-v,(v&1)!==0&&(l=1-l),o=e+l*(i-e);var s,c,f;switch(v){default:case 6:case 0:s=i,c=o,f=e;break;case 1:s=o,c=i,f=e;break;case 2:s=e,c=i,f=o;break;case 3:s=e,c=o,f=i;break;case 4:s=o,c=e,f=i;break;case 5:s=i,c=e,f=o;break}return[s*255,c*255,f*255]};u.cmyk.rgb=function(r){var n=r[0]/100,e=r[1]/100,a=r[2]/100,t=r[3]/100,v,i,l;return v=1-Math.min(1,n*(1-t)+t),i=1-Math.min(1,e*(1-t)+t),l=1-Math.min(1,a*(1-t)+t),[v*255,i*255,l*255]};u.xyz.rgb=function(r){var n=r[0]/100,e=r[1]/100,a=r[2]/100,t,v,i;return t=n*3.2406+e*-1.5372+a*-.4986,v=n*-.9689+e*1.8758+a*.0415,i=n*.0557+e*-.204+a*1.057,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*12.92,v=v>.0031308?1.055*Math.pow(v,1/2.4)-.055:v*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*12.92,t=Math.min(Math.max(0,t),1),v=Math.min(Math.max(0,v),1),i=Math.min(Math.max(0,i),1),[t*255,v*255,i*255]};u.xyz.lab=function(r){var n=r[0],e=r[1],a=r[2],t,v,i;return n/=95.047,e/=100,a/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,t=116*e-16,v=500*(n-e),i=200*(e-a),[t,v,i]};u.lab.xyz=function(r){var n=r[0],e=r[1],a=r[2],t,v,i;v=(n+16)/116,t=e/500+v,i=v-a/200;var l=Math.pow(v,3),o=Math.pow(t,3),s=Math.pow(i,3);return v=l>.008856?l:(v-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,t*=95.047,v*=100,i*=108.883,[t,v,i]};u.lab.lch=function(r){var n=r[0],e=r[1],a=r[2],t,v,i;return t=Math.atan2(a,e),v=t*360/2/Math.PI,v<0&&(v+=360),i=Math.sqrt(e*e+a*a),[n,i,v]};u.lch.lab=function(r){var n=r[0],e=r[1],a=r[2],t,v,i;return i=a/360*2*Math.PI,t=e*Math.cos(i),v=e*Math.sin(i),[n,t,v]};u.rgb.ansi16=function(r){var n=r[0],e=r[1],a=r[2],t=1 in arguments?arguments[1]:u.rgb.hsv(r)[2];if(t=Math.round(t/50),t===0)return 30;var v=30+(Math.round(a/255)<<2|Math.round(e/255)<<1|Math.round(n/255));return t===2&&(v+=60),v};u.hsv.ansi16=function(r){return u.rgb.ansi16(u.hsv.rgb(r),r[2])};u.rgb.ansi256=function(r){var n=r[0],e=r[1],a=r[2];if(n===e&&e===a)return n<8?16:n>248?231:Math.round((n-8)/247*24)+232;var t=16+36*Math.round(n/255*5)+6*Math.round(e/255*5)+Math.round(a/255*5);return t};u.ansi16.rgb=function(r){var n=r%10;if(n===0||n===7)return r>50&&(n+=3.5),n=n/10.5*255,[n,n,n];var e=(~~(r>50)+1)*.5,a=(n&1)*e*255,t=(n>>1&1)*e*255,v=(n>>2&1)*e*255;return[a,t,v]};u.ansi256.rgb=function(r){if(r>=232){var n=(r-232)*10+8;return[n,n,n]}r-=16;var e,a=Math.floor(r/36)/5*255,t=Math.floor((e=r%36)/6)/5*255,v=e%6/5*255;return[a,t,v]};u.rgb.hex=function(r){var n=((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255),e=n.toString(16).toUpperCase();return"000000".substring(e.length)+e};u.hex.rgb=function(r){var n=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var e=n[0];n[0].length===3&&(e=e.split("").map(function(l){return l+l}).join(""));var a=parseInt(e,16),t=a>>16&255,v=a>>8&255,i=a&255;return[t,v,i]};u.rgb.hcg=function(r){var n=r[0]/255,e=r[1]/255,a=r[2]/255,t=Math.max(Math.max(n,e),a),v=Math.min(Math.min(n,e),a),i=t-v,l,o;return i<1?l=v/(1-i):l=0,i<=0?o=0:t===n?o=(e-a)/i%6:t===e?o=2+(a-n)/i:o=4+(n-e)/i+4,o/=6,o%=1,[o*360,i*100,l*100]};u.hsl.hcg=function(r){var n=r[1]/100,e=r[2]/100,a=1,t=0;return e<.5?a=2*n*e:a=2*n*(1-e),a<1&&(t=(e-.5*a)/(1-a)),[r[0],a*100,t*100]};u.hsv.hcg=function(r){var n=r[1]/100,e=r[2]/100,a=n*e,t=0;return a<1&&(t=(e-a)/(1-a)),[r[0],a*100,t*100]};u.hcg.rgb=function(r){var n=r[0]/360,e=r[1]/100,a=r[2]/100;if(e===0)return[a*255,a*255,a*255];var t=[0,0,0],v=n%1*6,i=v%1,l=1-i,o=0;switch(Math.floor(v)){case 0:t[0]=1,t[1]=i,t[2]=0;break;case 1:t[0]=l,t[1]=1,t[2]=0;break;case 2:t[0]=0,t[1]=1,t[2]=i;break;case 3:t[0]=0,t[1]=l,t[2]=1;break;case 4:t[0]=i,t[1]=0,t[2]=1;break;default:t[0]=1,t[1]=0,t[2]=l}return o=(1-e)*a,[(e*t[0]+o)*255,(e*t[1]+o)*255,(e*t[2]+o)*255]};u.hcg.hsv=function(r){var n=r[1]/100,e=r[2]/100,a=n+e*(1-n),t=0;return a>0&&(t=n/a),[r[0],t*100,a*100]};u.hcg.hsl=function(r){var n=r[1]/100,e=r[2]/100,a=e*(1-n)+.5*n,t=0;return a>0&&a<.5?t=n/(2*a):a>=.5&&a<1&&(t=n/(2*(1-a))),[r[0],t*100,a*100]};u.hcg.hwb=function(r){var n=r[1]/100,e=r[2]/100,a=n+e*(1-n);return[r[0],(a-n)*100,(1-a)*100]};u.hwb.hcg=function(r){var n=r[1]/100,e=r[2]/100,a=1-e,t=a-n,v=0;return t<1&&(v=(a-t)/(1-t)),[r[0],t*100,v*100]};u.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]};u.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]};u.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]};u.gray.hsl=u.gray.hsv=function(r){return[0,0,r[0]]};u.gray.hwb=function(r){return[0,100,r[0]]};u.gray.cmyk=function(r){return[0,0,0,r[0]]};u.gray.lab=function(r){return[r[0],0,0]};u.gray.hex=function(r){var n=Math.round(r[0]/100*255)&255,e=(n<<16)+(n<<8)+n,a=e.toString(16).toUpperCase();return"000000".substring(a.length)+a};u.rgb.gray=function(r){var n=(r[0]+r[1]+r[2])/3;return[n/255*100]};var p=m.exports;function O(){for(var r={},n=Object.keys(p),e=n.length,a=0;a<e;a++)r[n[a]]={distance:-1,parent:null};return r}function z(r){var n=O(),e=[r];for(n[r].distance=0;e.length;)for(var a=e.pop(),t=Object.keys(p[a]),v=t.length,i=0;i<v;i++){var l=t[i],o=n[l];o.distance===-1&&(o.distance=n[a].distance+1,o.parent=a,e.unshift(l))}return n}function j(r,n){return function(e){return n(r(e))}}function P(r,n){for(var e=[n[r].parent,r],a=p[n[r].parent][r],t=n[r].parent;n[t].parent;)e.unshift(n[t].parent),a=j(p[n[t].parent][t],a),t=n[t].parent;return a.conversion=e,a}var C=function(r){for(var n=z(r),e={},a=Object.keys(n),t=a.length,v=0;v<t;v++){var i=a[v],l=n[i];l.parent!==null&&(e[i]=P(i,n))}return e},y=m.exports,E=C,g={},S=Object.keys(y);function I(r){var n=function(e){return e==null?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),r(e))};return"conversion"in r&&(n.conversion=r.conversion),n}function $(r){var n=function(e){if(e==null)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var a=r(e);if(typeof a=="object")for(var t=a.length,v=0;v<t;v++)a[v]=Math.round(a[v]);return a};return"conversion"in r&&(n.conversion=r.conversion),n}S.forEach(function(r){g[r]={},Object.defineProperty(g[r],"channels",{value:y[r].channels}),Object.defineProperty(g[r],"labels",{value:y[r].labels});var n=E(r),e=Object.keys(n);e.forEach(function(a){var t=n[a];g[r][a]=$(t),g[r][a].raw=I(t)})});var K=g;export{K as c};