var lu=0,Ac=1,cu=2;var ls=1,hu=2,$s=3,ki=0,Ye=1,On=2,ci=0,Vi=1,Bn=2,Ec=3,Cc=4,uu=5;var cs=100,du=101,fu=102,pu=103,mu=104,gu=200,xu=201,_u=202,yu=203,Rc=204,Ic=205,vu=206,Mu=207,Su=208,bu=209,wu=210,Tu=211,Au=212,Eu=213,Cu=214,Ga=0,Ha=1,Wa=2,Ls=3,Xa=4,qa=5,Ya=6,Za=7,Ro=0,Ru=1,Iu=2,$n=0,Pc=1,Lc=2,Nc=3,Jr=4,Dc=5,Uc=6,Fc=7;var Oc=300,Gi=301,hs=302,Io=303,Po=304,Kr=306,Di=1e3,si=1001,$a=1002,tn=1003,Pu=1004;var jr=1005;var on=1006,Lo=1007;var Hi=1008;var bn=1009,Bc=1010,zc=1011,Js=1012,No=1013,Jn=1014,zn=1015,Kn=1016,Do=1017,Uo=1018,Ks=1020,kc=35902,Vc=35899,Gc=1021,Hc=1022,kn=1023,ri=1026,Wi=1027,Fo=1028,Oo=1029,Xi=1030,Bo=1031;var zo=1033,Qr=33776,ta=33777,ea=33778,na=33779,ko=35840,Vo=35841,Go=35842,Ho=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,Zo=37489,ia=37490,$o=37491,Jo=37808,Ko=37809,jo=37810,Qo=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,sa=36285,ml=36286;var Mr=2300,Ja=2301,ka=2302,dc=2303,fc=2400,pc=2401,mc=2402;var Lu=3200;var ra=0,Nu=1,Mi="",rn="srgb",Sr="srgb-linear",br="linear",we="srgb";var Va=7680;var Du=519,Uu=512,Fu=513,Ou=514,gl=515,Bu=516,zu=517,xl=518,ku=519,Vu=35044;var Wc="300 es",qn=2e3,Ns=2001;function Ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){let i=wr("canvas");return i.style.display="block",i}var Eh={},Ds=null;function Xc(...i){let t="THREE."+i.shift();Ds?Ds("log",t,...i):console.log(t,...i)}function Hu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Hu(i);let t="THREE."+i.shift();if(Ds)Ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=Hu(i);let t="THREE."+i.shift();if(Ds)Ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function is(...i){let t=i.join(" ");t in Eh||(Eh[t]=!0,jt(...i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xu={[Ga]:Ha,[Wa]:Ya,[Xa]:Za,[Ls]:qa,[Ha]:Ga,[Ya]:Wa,[Za]:Xa,[qa]:Ls},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bl=Math.PI/180,Ka=180/Math.PI;function js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Rf(i,t){return(i%t+t)%t}function zl(i,t,e){return(1-e)*i+e*t}function hr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),C=Math.sin(S);p=Math.sin(p*S)/C,o=Math.sin(o*S)/C,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kl.copy(this).projectOnVector(t),this.sub(kl)}reflect(t){return this.sub(kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kl=new I,Ch=new He,se=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],C=s[4],y=s[7],b=s[2],w=s[5],L=s[8];return r[0]=a*v+o*S+l*b,r[3]=a*m+o*C+l*w,r[6]=a*p+o*y+l*L,r[1]=c*v+h*S+d*b,r[4]=c*m+h*C+d*w,r[7]=c*p+h*y+d*L,r[2]=u*v+f*S+g*b,r[5]=u*m+f*C+g*w,r[8]=u*p+f*y+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(t,e)),this}rotate(t){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-t)),this}translate(t,e){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new se,Rh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){let i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===we&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:Rh,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Rh,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var ge=If();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xs,ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xs===void 0&&(xs=wr("canvas")),xs.width=t.width,xs.height=t.height;let s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,Us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gl(s[a].image)):r.push(Gl(s[a]))}else r=Gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Lf=0,Hl=new I,_n=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=si,s=si,r=on,a=Hi,o=kn,l=bn,c=i.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=js(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Oc;_n.DEFAULT_ANISOTROPY=1;var De=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(f+1)/2,b=(p+1)/2,w=(h+u)/4,L=(d+v)/4,_=(g+m)/4;return C>y&&C>b?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=w/n,r=L/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=_/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new _n(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends Qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var to=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),a=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Df)}lookAt(t,e,n){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Ci.crossVectors(n,An),Ci.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ci.crossVectors(n,An)),Ci.normalize(),fa.crossVectors(An,Ci),s[0]=Ci.x,s[4]=fa.x,s[8]=An.x,s[1]=Ci.y,s[5]=fa.y,s[9]=An.y,s[2]=Ci.z,s[6]=fa.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],C=n[7],y=n[11],b=n[15],w=s[0],L=s[4],_=s[8],E=s[12],N=s[1],D=s[5],B=s[9],G=s[13],U=s[2],k=s[6],$=s[10],J=s[14],ht=s[3],Q=s[7],st=s[11],lt=s[15];return r[0]=a*w+o*N+l*U+c*ht,r[4]=a*L+o*D+l*k+c*Q,r[8]=a*_+o*B+l*$+c*st,r[12]=a*E+o*G+l*J+c*lt,r[1]=h*w+d*N+u*U+f*ht,r[5]=h*L+d*D+u*k+f*Q,r[9]=h*_+d*B+u*$+f*st,r[13]=h*E+d*G+u*J+f*lt,r[2]=g*w+v*N+m*U+p*ht,r[6]=g*L+v*D+m*k+p*Q,r[10]=g*_+v*B+m*$+p*st,r[14]=g*E+v*G+m*J+p*lt,r[3]=S*w+C*N+y*U+b*ht,r[7]=S*L+C*D+y*k+b*Q,r[11]=S*_+C*B+y*$+b*st,r[15]=S*E+C*G+y*J+b*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],S=l*f-c*u,C=o*f-c*d,y=o*u-l*d,b=a*f-c*h,w=a*u-l*h,L=a*d-o*h;return e*(v*S-m*C+p*y)-n*(g*S-m*b+p*w)+s*(g*C-v*b+p*L)-r*(g*y-v*w+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=e*o-n*a,C=e*l-s*a,y=e*c-r*a,b=n*l-s*o,w=n*c-r*o,L=s*c-r*l,_=h*v-d*g,E=h*m-u*g,N=h*p-f*g,D=d*m-u*v,B=d*p-f*v,G=u*p-f*m,U=S*G-C*B+y*D+b*N-w*E+L*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/U;return t[0]=(o*G-l*B+c*D)*k,t[1]=(s*B-n*G-r*D)*k,t[2]=(v*L-m*w+p*b)*k,t[3]=(u*w-d*L-f*b)*k,t[4]=(l*N-a*G-c*E)*k,t[5]=(e*G-s*N+r*E)*k,t[6]=(m*y-g*L-p*C)*k,t[7]=(h*L-u*y+f*C)*k,t[8]=(a*B-o*N+c*_)*k,t[9]=(n*N-e*B-r*_)*k,t[10]=(g*w-v*y+p*S)*k,t[11]=(d*y-h*w-f*S)*k,t[12]=(o*E-a*D-l*_)*k,t[13]=(e*D-n*E+s*_)*k,t[14]=(v*C-g*b-m*S)*k,t[15]=(h*b-d*C+u*S)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,S=l*c,C=l*h,y=l*d,b=n.x,w=n.y,L=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+y)*b,s[2]=(g-C)*b,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+C)*L,s[9]=(m-S)*L,s[10]=(1-(u+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gn.copy(this);let c=1/a,h=1/o,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=qn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===qn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ns)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===qn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ns)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_s=new I,Gn=new ue,Nf=new I(0,0,0),Df=new I(1,1,1),Ci=new I,fa=new I,An=new I,Ph=new ue,Lh=new He,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uf=0,Nh=new I,ys=new He,pi=new ue,pa=new I,ur=new I,Ff=new I,Of=new He,Dh=new I(1,0,0),Uh=new I(0,1,0),Fh=new I(0,0,1),Oh={type:"added"},Bf={type:"removed"},vs={type:"childadded",child:null},Wl={type:"childremoved",child:null},ze=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Cn,n=new He,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new se}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pa.copy(t):pa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ur,pa,this.up):pi.lookAt(pa,ur,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(pi),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),vs.child=t,this.dispatchEvent(vs),vs.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf),Wl.child=t,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new I(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _e=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},zf={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Xl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Rf(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xl(a,r,t+1/3),this.g=Xl(a,r,t),this.b=Xl(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ge.workingToColorSpace(hn.copy(this),t),Math.round(he(hn.r*255,0,255))*65536+Math.round(he(hn.g*255,0,255))*256+Math.round(he(hn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=rn){ge.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(ma);let n=zl(Ri.h,ma.h,e),s=zl(Ri.s,ma.s,e),r=zl(Ri.l,ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ne;ne.NAMES=qu;var ss=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hn=new I,mi=new I,ql=new I,gi=new I,Ms=new I,Ss=new I,Bh=new I,Yl=new I,Zl=new I,$l=new I,Jl=new De,Kl=new De,jl=new De,Ni=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),mi.subVectors(n,e),ql.subVectors(t,e);let a=Hn.dot(Hn),o=Hn.dot(mi),l=Hn.dot(ql),c=mi.dot(mi),h=mi.dot(ql),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Jl.setScalar(0),Kl.setScalar(0),jl.setScalar(0),Jl.fromBufferAttribute(t,e),Kl.fromBufferAttribute(t,n),jl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Jl,r.x),a.addScaledVector(Kl,r.y),a.addScaledVector(jl,r.z),a}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),mi.subVectors(t,e),Hn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),Ss.subVectors(r,n),Yl.subVectors(t,n);let l=Ms.dot(Yl),c=Ss.dot(Yl);if(l<=0&&c<=0)return e.copy(n);Zl.subVectors(t,s);let h=Ms.dot(Zl),d=Ss.dot(Zl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ms,a);$l.subVectors(t,r);let f=Ms.dot($l),g=Ss.dot($l);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ss,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Bh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Bh,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),xa.subVectors(this.max,dr),bs.subVectors(t.a,dr),ws.subVectors(t.b,dr),Ts.subVectors(t.c,dr),Ii.subVectors(ws,bs),Pi.subVectors(Ts,ws),$i.subVectors(bs,Ts);let e=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-$i.z,$i.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,$i.z,0,-$i.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-$i.y,$i.x,0];return!Ql(e,bs,ws,Ts,xa)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,bs,ws,Ts,xa))?!1:(_a.crossVectors(Ii,Pi),e=[_a.x,_a.y,_a.z],Ql(e,bs,ws,Ts,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new I,new I,new I,new I,new I,new I,new I,new I],Wn=new I,ga=new oi,bs=new I,ws=new I,Ts=new I,Ii=new I,Pi=new I,$i=new I,dr=new I,xa=new I,_a=new I,Ji=new I;function Ql(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xe=new I,ya=new xt,kf=0,xn=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=vn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),s=vn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),s=vn(s,this.array),r=vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ar=class extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Er=class extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vf=new oi,fr=new I,tc=new I,li=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(tc)),this.expandByPoint(fr.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gf=0,Fn=new ue,ec=new ze,As=new I,En=new oi,pr=new oi,Qe=new I,Ce=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ef(t)?Er:Ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(En.min,pr.min),En.expandByPoint(Qe),Qe.addVectors(En.max,pr.max),En.expandByPoint(Qe)):(En.expandByPoint(pr.min),En.expandByPoint(pr.max))}En.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(t,c),Qe.add(As)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new I,l[_]=new I;let c=new I,h=new I,d=new I,u=new xt,f=new xt,g=new xt,v=new I,m=new I;function p(_,E,N){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,N),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,N),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[_].add(v),o[E].add(v),o[N].add(v),l[_].add(m),l[E].add(m),l[N].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,E=S.length;_<E;++_){let N=S[_],D=N.start,B=N.count;for(let G=D,U=D+B;G<U;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let C=new I,y=new I,b=new I,w=new I;function L(_){b.fromBufferAttribute(s,_),w.copy(b);let E=o[_];C.copy(E),C.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(w,E);let D=y.dot(l[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,D)}for(let _=0,E=S.length;_<E;++_){let N=S[_],D=N.start,B=N.count;for(let G=D,U=D+B;G<U;G+=3)L(t.getX(G+0)),L(t.getX(G+1)),L(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new xn(u,h,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nc=new I,Hf=new I,Wf=new se,Xn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nc.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wf.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xf=0,Yn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Vi,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Ic,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var _i=new I,ic=new I,va=new I,Ma=new I,rs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ic.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),Ma.copy(this.origin).sub(ic);let r=t.distanceTo(e)*.5,a=-this.direction.dot(va),o=Ma.dot(this.direction),l=-Ma.dot(va),c=Ma.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ic).addScaledVector(va,u),f}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,C=n.z-a.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(h),L,_,E,N,D,B,G,U,k,$,J,ht;if(y>=b&&y>=w?(E=l,B=d,k=g,ht=p,l>=0?(L=c,_=h,N=u,D=f,G=v,U=m,$=S,J=C):(L=h,_=c,N=f,D=u,G=m,U=v,$=C,J=S)):b>=w?(E=c,B=u,k=v,ht=S,c>=0?(L=h,_=l,N=f,D=d,G=m,U=g,$=C,J=p):(L=l,_=h,N=d,D=f,G=g,U=m,$=p,J=C)):(E=h,B=f,k=m,ht=C,h>=0?(L=l,_=c,N=d,D=u,G=g,U=v,$=p,J=S):(L=c,_=l,N=u,D=d,G=v,U=g,$=S,J=p)),E===0)return null;let Q=L/E,st=_/E,lt=1/E,vt=N-Q*B,Lt=D-st*B,pe=G-Q*k,ee=U-st*k,re=$-Q*ht,K=J-st*ht,ot=re*ee-K*pe,yt=vt*K-Lt*re,$t=pe*Lt-ee*vt;if(s){if(ot<0||yt<0||$t<0)return null}else if((ot<0||yt<0||$t<0)&&(ot>0||yt>0||$t>0))return null;let Dt=ot+yt+$t;if(Dt===0)return null;let kt=lt*(ot*B+yt*k+$t*ht);return(Dt>0?kt<0:kt>0)?null:this.at(kt/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zh=new ue,Ki=new rs,Sa=new li,kh=new I,ba=new I,wa=new I,Ta=new I,sc=new I,Aa=new I,Vh=new I,Ea=new I,Tt=class extends ze{constructor(t=new Ce,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(sc.fromBufferAttribute(d,t),a?Aa.addScaledVector(sc,h):Aa.addScaledVector(sc.sub(e),h))}e.add(Aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(Sa.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Sa,kh)===null||Ki.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=C;y<b;y+=3){let w=o.getX(y),L=o.getX(y+1),_=o.getX(y+2);s=Ca(this,p,t,n,c,h,d,w,L,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);s=Ca(this,a,t,n,c,h,d,S,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=C;y<b;y+=3){let w=y,L=y+1,_=y+2;s=Ca(this,p,t,n,c,h,d,w,L,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=m,C=m+1,y=m+2;s=Ca(this,a,t,n,c,h,d,S,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function qf(i,t,e,n,s,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ki,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:i}}function Ca(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ba),i.getVertexPosition(l,wa),i.getVertexPosition(c,Ta);let h=qf(i,t,e,n,ba,wa,Ta,Vh);if(h){let d=new I;Ni.getBarycoord(Vh,ba,wa,Ta,d),s&&(h.uv=Ni.getInterpolatedAttribute(s,o,l,c,d,new xt)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,o,l,c,d,new xt)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Ni.getNormal(ba,wa,Ta,u.normal),h.face=u,h.barycoord=d}return h}var Cr=class extends _n{constructor(t=null,e=1,n=1,s,r,a,o,l,c=tn,h=tn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class extends xn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new ue,Gh=new ue,Ra=[],Hh=new oi,Yf=new ue,mr=new Tt,gr=new li,Zn=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Hh.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Hh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),gr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Gh.multiplyMatrices(n,Es),mr.matrixWorld=Gh,mr.raycast(t,Ra);for(let a=0,o=Ra.length;a<o;a++){let l=Ra[a];l.instanceId=r,l.object=this,e.push(l)}Ra.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cr(new Float32Array(s*this.count),s,this.count,Fo,zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new li,Zf=new xt(.5,.5),Ia=new I,zs=class{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],C=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-g,b-S).normalize(),s[1].setComponents(c+a,f+h,p+g,b+S).normalize(),s[2].setComponents(c+o,f+d,p+v,b+C).normalize(),s[3].setComponents(c-o,f-d,p-v,b-C).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,b-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,b-y).normalize(),e===qn)s[5].setComponents(c+l,f+u,p+m,b+y).normalize();else if(e===Ns)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);let e=Zf.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ks=class extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},eo=new I,no=new I,Wh=new ue,xr=new rs,Pa=new li,rc=new I,Xh=new I,Rr=class extends ze{constructor(t=new Ce,e=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)eo.fromBufferAttribute(e,s-1),no.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=eo.distanceTo(no);t.setAttribute("lineDistance",new ae(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;Wh.copy(s).invert(),xr.copy(t.ray).applyMatrix4(Wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),S=h.getX(v+1),C=La(this,t,xr,l,p,S,v);C&&e.push(C)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=La(this,t,xr,l,v,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=La(this,t,xr,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=La(this,t,xr,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function La(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(eo.fromBufferAttribute(o,s),no.fromBufferAttribute(o,r),e.distanceSqToSegment(eo,no,rc,Xh)>n)return;rc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rc);if(!(c<t.near||c>t.far))return{distance:c,point:Xh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Vs=class extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qh=new ue,gc=new rs,Na=new li,Da=new I,vi=class extends ze{constructor(t=new Ce,e=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;qh.copy(s).invert(),gc.copy(t.ray).applyMatrix4(qh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=c.getX(g);Da.fromBufferAttribute(d,m),Yh(Da,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Da.fromBufferAttribute(d,g),Yh(Da,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yh(i,t,e,n,s,r,a){let o=gc.distanceSqToPoint(i);if(o<e){let l=new I;gc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ir=class extends _n{constructor(t=[],e=Gi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rn=class extends _n{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ui=class extends _n{constructor(t,e,n=Jn,s,r,a,o=tn,l=tn,c,h=ri,d=1){if(h!==ri&&h!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},io=class extends Ui{constructor(t,e=Jn,n=Gi,s,r,a=tn,o=tn,l,c=ri){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Pr=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(v,m,p,S,C,y,b,w,L,_,E){let N=y/L,D=b/_,B=y/2,G=b/2,U=w/2,k=L+1,$=_+1,J=0,ht=0,Q=new I;for(let st=0;st<$;st++){let lt=st*D-G;for(let vt=0;vt<k;vt++){let Lt=vt*N-B;Q[v]=Lt*S,Q[m]=lt*C,Q[p]=U,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(vt/L),d.push(1-st/_),J+=1}}for(let st=0;st<_;st++)for(let lt=0;lt<L;lt++){let vt=u+lt+k*st,Lt=u+lt+k*(st+1),pe=u+(lt+1)+k*(st+1),ee=u+(lt+1)+k*st;l.push(vt,Lt,ee),l.push(Lt,pe,ee),ht+=6}o.addGroup(f,ht,E),f+=ht,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Te=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;S(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function S(){let y=new I,b=new I,w=0,L=(e-t)/n;for(let _=0;_<=r;_++){let E=[],N=_/r,D=N*(e-t)+t;for(let B=0;B<=s;B++){let G=B/s,U=G*l+o,k=Math.sin(U),$=Math.cos(U);b.x=D*k,b.y=-N*n+m,b.z=D*$,d.push(b.x,b.y,b.z),y.set(k,L,$).normalize(),u.push(y.x,y.y,y.z),f.push(G,1-N),E.push(g++)}v.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let N=v[E][_],D=v[E+1][_],B=v[E+1][_+1],G=v[E][_+1];(t>0||E!==0)&&(h.push(N,D,G),w+=3),(e>0||E!==r-1)&&(h.push(D,B,G),w+=3)}c.addGroup(p,w,0),p+=w}function C(y){let b=g,w=new xt,L=new I,_=0,E=y===!0?t:e,N=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;let D=g;for(let B=0;B<=s;B++){let U=B/s*l+o,k=Math.cos(U),$=Math.sin(U);L.x=E*$,L.y=m*N,L.z=E*k,d.push(L.x,L.y,L.z),u.push(0,N,0),w.x=k*.5+.5,w.y=$*.5*N+.5,f.push(w.x,w.y),g++}for(let B=0;B<s;B++){let G=b+B,U=D+B;y===!0?h.push(U,U+1,G):h.push(U+1,U,G),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},as=class i extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},so=class i extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let C=new I,y=new I,b=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],C),f(e[w+1],y),f(e[w+2],b),l(C,y,b,S)}function l(S,C,y,b){let w=b+1,L=[];for(let _=0;_<=w;_++){L[_]=[];let E=S.clone().lerp(y,_/w),N=C.clone().lerp(y,_/w),D=w-_;for(let B=0;B<=D;B++)B===0&&_===w?L[_][B]=E:L[_][B]=E.clone().lerp(N,B/D)}for(let _=0;_<w;_++)for(let E=0;E<2*(w-_)-1;E++){let N=Math.floor(E/2);E%2===0?(u(L[_][N+1]),u(L[_+1][N]),u(L[_][N])):(u(L[_][N+1]),u(L[_+1][N+1]),u(L[_+1][N]))}}function c(S){let C=new I;for(let y=0;y<r.length;y+=3)C.x=r[y+0],C.y=r[y+1],C.z=r[y+2],C.normalize().multiplyScalar(S),r[y+0]=C.x,r[y+1]=C.y,r[y+2]=C.z}function h(){let S=new I;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];let y=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;a.push(y,1-b)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let C=a[S+0],y=a[S+2],b=a[S+4],w=Math.max(C,y,b),L=Math.min(C,y,b);w>.9&&L<.1&&(C<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,C){let y=S*3;C.x=t[y+0],C.y=t[y+1],C.z=t[y+2]}function g(){let S=new I,C=new I,y=new I,b=new I,w=new xt,L=new xt,_=new xt;for(let E=0,N=0;E<r.length;E+=9,N+=6){S.set(r[E+0],r[E+1],r[E+2]),C.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),w.set(a[N+0],a[N+1]),L.set(a[N+2],a[N+3]),_.set(a[N+4],a[N+5]),b.copy(S).add(C).add(y).divideScalar(3);let D=m(b);v(w,N+0,S,D),v(L,N+2,C,D),v(_,N+4,y,D)}}function v(S,C,y,b){b<0&&S.x===1&&(a[C]=S.x-1),y.x===0&&y.z===0&&(a[C]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ue;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(he(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(he(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gs=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ro=class extends Gs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function qc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Zh=new I,$h=new I,ac=new qc,oc=new qc,lc=new qc,ao=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:($h.subVectors(s[0],s[1]).add(s[0]),c=$h);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Zh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ac.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),oc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),lc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),oc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),lc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ac.calc(l),oc.calc(l),lc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function $f(i,t){let e=1-i;return e*e*t}function Jf(i,t){return 2*(1-i)*i*t}function Kf(i,t){return i*i*t}function yr(i,t,e,n){return $f(i,t)+Jf(i,e)+Kf(i,n)}function jf(i,t){let e=1-i;return e*e*e*t}function Qf(i,t){let e=1-i;return 3*e*e*i*t}function tp(i,t){return 3*(1-i)*i*i*t}function ep(i,t){return i*i*i*t}function vr(i,t,e,n,s){return jf(i,t)+Qf(i,e)+tp(i,n)+ep(i,s)}var Lr=class extends In{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oo=class extends In{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y),vr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends In{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends In{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends In{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends In{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y),yr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Jh(o,l.x,c.x,h.x,d.x),Jh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:ro,CatmullRomCurve3:ao,CubicBezierCurve:Lr,CubicBezierCurve3:oo,EllipseCurve:Gs,LineCurve:Nr,LineCurve3:lo,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:co,SplineCurve:Ur}),ho=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new xc[s.type]().fromJSON(s))}return this}},Fr=class extends ho{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Nr(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Dr(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Lr(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ur(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Gs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Hs=class extends Fr{constructor(t){super(t),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Fr().fromJSON(s))}return this}};function np(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=op(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Or(r,a,e,o,l,c,0),a}function Yu(i,t,e,n,s){let r;if(s===_p(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Kh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Kh(a/n|0,i[a],i[a+1],r);return r&&Ws(r,r.next)&&(zr(r),r=r.next),r}function os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ws(e,e.next)||Be(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Or(i,t,e,n,s,r,a){if(!i)return;!a&&r&&dp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sp(i,n,s,r):ip(i)){t.push(l.i,i.i,c.i),zr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rp(os(i),t),Or(i,t,e,n,s,r,2)):a===2&&ap(i,t,e,n,s,r):Or(os(i),t,e,n,s,r,1);break}}}function ip(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&_r(s,o,r,l,a,c,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),p=_c(f,g,t,e,n),S=_c(v,m,t,e,n),C=i.prevZ,y=i.nextZ;for(;C&&C.z>=p&&y&&y.z<=S;){if(C.x>=f&&C.x<=v&&C.y>=g&&C.y<=m&&C!==s&&C!==a&&_r(o,h,l,d,c,u,C.x,C.y)&&Be(C.prev,C,C.next)>=0||(C=C.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&_r(o,h,l,d,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;C&&C.z>=p;){if(C.x>=f&&C.x<=v&&C.y>=g&&C.y<=m&&C!==s&&C!==a&&_r(o,h,l,d,c,u,C.x,C.y)&&Be(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&_r(o,h,l,d,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ws(n,s)&&$u(n,e,e.next,s)&&Br(n,s)&&Br(s,n)&&(t.push(n.i,e.i,s.i),zr(e),zr(e.next),e=i=s),e=e.next}while(e!==i);return os(e)}function ap(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mp(a,o)){let l=Ju(a,o);a=os(a,a.next),l=os(l,l.next),Or(a,t,e,n,s,r,0),Or(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function op(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Yu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pp(c))}s.sort(lp);for(let r=0;r<s.length;r++)e=cp(s[r],e);return e}function lp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cp(i,t){let e=hp(i,t);if(!e)return t;let n=Ju(e,i);return os(n,n.next),os(e,e.next)}function hp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ws(i,e))return e;do{if(Ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Zu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Br(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&up(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function up(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function dp(i,t,e,n){let s=i;do s.z===0&&(s.z=_c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fp(s)}function fp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function _c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function _r(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Zu(i,t,e,n,s,r,a,o)}function mp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gp(i,t)&&(Br(i,t)&&Br(t,i)&&xp(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||Ws(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ws(i,t){return i.x===t.x&&i.y===t.y}function $u(i,t,e,n){let s=Fa(Be(i,t,e)),r=Fa(Be(i,t,n)),a=Fa(Be(e,n,i)),o=Fa(Be(e,n,t));return!!(s!==r&&a!==o||s===0&&Ua(i,e,t)||r===0&&Ua(i,n,t)||a===0&&Ua(e,i,n)||o===0&&Ua(e,t,n))}function Ua(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fa(i){return i>0?1:i<0?-1:0}function gp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Br(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function xp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ju(i,t){let e=yc(i.i,i.x,i.y),n=yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kh(i,t,e,n){let s=yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vc=class{static triangulate(t,e,n=2){return np(t,e,n)}},ns=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jh(t),Qh(n,t);let a=t.length;e.forEach(jh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Qh(n,e[l]);let o=vc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var kr=class i extends Ce{constructor(t=new Hs([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:yp,C,y=!1,b,w,L,_;if(p){C=p.getSpacedPoints(h),y=!0,u=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,nt),w=new I,L=new I,_=new I}u||(m=0,f=0,g=0,v=0);let E=o.extractPoints(c),N=E.shape,D=E.holes;if(!ns.isClockWise(N)){N=N.reverse();for(let nt=0,dt=D.length;nt<dt;nt++){let pt=D[nt];ns.isClockWise(pt)&&(D[nt]=pt.reverse())}}function G(nt){let pt=10000000000000001e-36,ct=nt[0];for(let ft=1;ft<=nt.length;ft++){let Ut=ft%nt.length,Vt=nt[Ut],q=Vt.x-ct.x,it=Vt.y-ct.y,P=q*q+it*it,It=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(ct.x),Math.abs(ct.y)),Y=pt*It*It;if(P<=Y){nt.splice(Ut,1),ft--;continue}ct=Vt}}G(N),D.forEach(G);let U=D.length,k=N;for(let nt=0;nt<U;nt++){let dt=D[nt];N=N.concat(dt)}function $(nt,dt,pt){return dt||te("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(dt,pt)}let J=N.length;function ht(nt,dt,pt){let ct,ft,Ut,Vt=nt.x-dt.x,q=nt.y-dt.y,it=pt.x-nt.x,P=pt.y-nt.y,It=Vt*Vt+q*q,Y=Vt*P-q*it;if(Math.abs(Y)>Number.EPSILON){let A=Math.sqrt(It),x=Math.sqrt(it*it+P*P),z=dt.x-q/A,H=dt.y+Vt/A,tt=pt.x-P/x,mt=pt.y+it/x,gt=((tt-z)*P-(mt-H)*it)/(Vt*P-q*it);ct=z+Vt*gt-nt.x,ft=H+q*gt-nt.y;let et=ct*ct+ft*ft;if(et<=2)return new xt(ct,ft);Ut=Math.sqrt(et/2)}else{let A=!1;Vt>Number.EPSILON?it>Number.EPSILON&&(A=!0):Vt<-Number.EPSILON?it<-Number.EPSILON&&(A=!0):Math.sign(q)===Math.sign(P)&&(A=!0),A?(ct=-q,ft=Vt,Ut=Math.sqrt(It)):(ct=Vt,ft=q,Ut=Math.sqrt(It/2))}return new xt(ct/Ut,ft/Ut)}let Q=[];for(let nt=0,dt=k.length,pt=dt-1,ct=nt+1;nt<dt;nt++,pt++,ct++)pt===dt&&(pt=0),ct===dt&&(ct=0),Q[nt]=ht(k[nt],k[pt],k[ct]);let st=[],lt,vt=Q.concat();for(let nt=0,dt=U;nt<dt;nt++){let pt=D[nt];lt=[];for(let ct=0,ft=pt.length,Ut=ft-1,Vt=ct+1;ct<ft;ct++,Ut++,Vt++)Ut===ft&&(Ut=0),Vt===ft&&(Vt=0),lt[ct]=ht(pt[ct],pt[Ut],pt[Vt]);st.push(lt),vt=vt.concat(lt)}let Lt;if(m===0)Lt=ns.triangulateShape(k,D);else{let nt=[],dt=[];for(let pt=0;pt<m;pt++){let ct=pt/m,ft=f*Math.cos(ct*Math.PI/2),Ut=g*Math.sin(ct*Math.PI/2)+v;for(let Vt=0,q=k.length;Vt<q;Vt++){let it=$(k[Vt],Q[Vt],Ut);yt(it.x,it.y,-ft),ct===0&&nt.push(it)}for(let Vt=0,q=U;Vt<q;Vt++){let it=D[Vt];lt=st[Vt];let P=[];for(let It=0,Y=it.length;It<Y;It++){let A=$(it[It],lt[It],Ut);yt(A.x,A.y,-ft),ct===0&&P.push(A)}ct===0&&dt.push(P)}}Lt=ns.triangulateShape(nt,dt)}let pe=Lt.length,ee=g+v;for(let nt=0;nt<J;nt++){let dt=u?$(N[nt],vt[nt],ee):N[nt];y?(L.copy(b.normals[0]).multiplyScalar(dt.x),w.copy(b.binormals[0]).multiplyScalar(dt.y),_.copy(C[0]).add(L).add(w),yt(_.x,_.y,_.z)):yt(dt.x,dt.y,0)}for(let nt=1;nt<=h;nt++)for(let dt=0;dt<J;dt++){let pt=u?$(N[dt],vt[dt],ee):N[dt];y?(L.copy(b.normals[nt]).multiplyScalar(pt.x),w.copy(b.binormals[nt]).multiplyScalar(pt.y),_.copy(C[nt]).add(L).add(w),yt(_.x,_.y,_.z)):yt(pt.x,pt.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){let dt=nt/m,pt=f*Math.cos(dt*Math.PI/2),ct=g*Math.sin(dt*Math.PI/2)+v;for(let ft=0,Ut=k.length;ft<Ut;ft++){let Vt=$(k[ft],Q[ft],ct);yt(Vt.x,Vt.y,d+pt)}for(let ft=0,Ut=D.length;ft<Ut;ft++){let Vt=D[ft];lt=st[ft];for(let q=0,it=Vt.length;q<it;q++){let P=$(Vt[q],lt[q],ct);y?yt(P.x,P.y+C[h-1].y,C[h-1].x+pt):yt(P.x,P.y,d+pt)}}}re(),K();function re(){let nt=s.length/3;if(u){let dt=0,pt=J*dt;for(let ct=0;ct<pe;ct++){let ft=Lt[ct];$t(ft[2]+pt,ft[1]+pt,ft[0]+pt)}dt=h+m*2,pt=J*dt;for(let ct=0;ct<pe;ct++){let ft=Lt[ct];$t(ft[0]+pt,ft[1]+pt,ft[2]+pt)}}else{for(let dt=0;dt<pe;dt++){let pt=Lt[dt];$t(pt[2],pt[1],pt[0])}for(let dt=0;dt<pe;dt++){let pt=Lt[dt];$t(pt[0]+J*h,pt[1]+J*h,pt[2]+J*h)}}n.addGroup(nt,s.length/3-nt,0)}function K(){let nt=s.length/3,dt=0;ot(k,dt),dt+=k.length;for(let pt=0,ct=D.length;pt<ct;pt++){let ft=D[pt];ot(ft,dt),dt+=ft.length}n.addGroup(nt,s.length/3-nt,1)}function ot(nt,dt){let pt=nt.length;for(;--pt>=0;){let ct=pt,ft=pt-1;ft<0&&(ft=nt.length-1);for(let Ut=0,Vt=h+m*2;Ut<Vt;Ut++){let q=J*Ut,it=J*(Ut+1),P=dt+ct+q,It=dt+ft+q,Y=dt+ft+it,A=dt+ct+it;Dt(P,It,Y,A)}}}function yt(nt,dt,pt){l.push(nt),l.push(dt),l.push(pt)}function $t(nt,dt,pt){kt(nt),kt(dt),kt(pt);let ct=s.length/3,ft=S.generateTopUV(n,s,ct-3,ct-2,ct-1);Jt(ft[0]),Jt(ft[1]),Jt(ft[2])}function Dt(nt,dt,pt,ct){kt(nt),kt(dt),kt(ct),kt(dt),kt(pt),kt(ct);let ft=s.length/3,Ut=S.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Jt(Ut[0]),Jt(Ut[1]),Jt(Ut[3]),Jt(Ut[1]),Jt(Ut[2]),Jt(Ut[3])}function kt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Jt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xc[s.type]().fromJSON(s)),new i(n,t.options)}},yp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(r,a),new xt(o,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new xt(a,1-l),new xt(c,1-d),new xt(u,1-g),new xt(v,1-p)]:[new xt(o,1-l),new xt(h,1-d),new xt(f,1-g),new xt(m,1-p)]}};function vp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vr=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fi=class i extends Ce{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=he(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new I,u=new xt,f=new I,g=new I,v=new I,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let S=0;S<=e;S++){let C=n+S*h*s,y=Math.sin(C),b=Math.cos(C);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*y,d.y=t[w].y,d.z=t[w].x*b,a.push(d.x,d.y,d.z),u.x=S/e,u.y=w/(t.length-1),o.push(u.x,u.y);let L=l[3*w+0]*y,_=l[3*w+1],E=l[3*w+0]*b;c.push(L,_,E)}}for(let S=0;S<e;S++)for(let C=0;C<t.length-1;C++){let y=C+S*t.length,b=y,w=y+t.length,L=y+t.length+1,_=y+1;r.push(b,w,_),r.push(L,_,w)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var qe=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let C=0;C<c;C++){let y=C*d-r;g.push(y,-S,0),v.push(0,0,1),m.push(C/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let C=S+c*p,y=S+c*(p+1),b=S+1+c*(p+1),w=S+1+c*p;f.push(C,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Sn=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let S=[],C=p/n,y=a+C*o,b=t*Math.cos(y),w=Math.sqrt(t*t-b*b),L=0;p===0&&a===0?L=.5/e:p===n&&l===Math.PI&&(L=-.5/e);for(let _=0;_<=e;_++){let E=_/e,N=s+E*r;d.x=-w*Math.cos(N),d.y=b,d.z=w*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(E+L,1-C),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let C=h[p][S+1],y=h[p][S],b=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&f.push(C,y,w),(p!==n-1||l<Math.PI)&&f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xs=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,f=new I,g=new I;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,C=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(p,S,y),l.push(S,C,y)}this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(tu(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(tu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function tu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var Ku={clone:us,merge:dn},Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},uo=class extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},de=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Gr=class extends Yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ro,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fo=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},po=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Cs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pc:r=t,o=2*e-n;break;case mc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:a=t,l=2*n-e;break;case mc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,S=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,C=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+S*a[c+b]+C*a[l+b]+y*a[d+b];return r}},go=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},xo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_o=class extends Oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*u+g*2,S=d[p],C=d[p+1],y=t*u+g*2,b=h[y],w=h[y+1],L=Tp(n,e,S,b,s);r[g]=ju(L,v,C,w,m)}return r}};function ju(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Tp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ju(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=wp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Cs(e,this.TimeBufferType),this.values=Cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Cs(t.times,Array),values:Cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),cc(t.settings)&&(n.settings={inTangents:Cs(t.settings.inTangents,Array),outTangents:Cs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _o(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break;case dc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;cc(this.settings)&&(eu(this.settings.inTangents,t),eu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){te("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){te("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Cf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){te("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,cc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function eu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ja;var Bi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Mr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="color";var vo=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};vo.prototype.ValueTypeName="number";var Mo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)He.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hr=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Pn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Mr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};So.prototype.ValueTypeName="vector";var bo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qu=new bo,wo=class{constructor(t){this.manager=t!==void 0?t:Qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wr=class extends qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},hc=new ue,nu=new I,iu=new I,Xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(nu),iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ns||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oa=new I,Ba=new He,ii=new I,qr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oa,Ba,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oa,Ba,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new I,su=new xt,ru=new xt,an=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,su,ru),e.subVectors(ru,su)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mc=class extends Xr{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Yr=class extends qs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ys=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sc=class extends Xr{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zs=class extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Sc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var za,To=class{static getContext(){return za===void 0&&(za=new(window.AudioContext||window.webkitAudioContext)),za}static setContext(t){za=t}};var Rs=-90,Is=1,Ao=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Rs,Is,t,e);s.layers=this.layers,this.add(s);let r=new an(Rs,Is,t,e);r.layers=this.layers,this.add(r);let a=new an(Rs,Is,t,e);a.layers=this.layers,this.add(a);let o=new an(Rs,Is,t,e);o.layers=this.layers,this.add(o);let l=new an(Rs,Is,t,e);l.layers=this.layers,this.add(l);let c=new an(Rs,Is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Eo=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Co=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ap.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ap(){this._document.hidden===!1&&this.reset()}var Qi=new I,uc=new He,Ep=new I,ts=new I,es=new I,Zr=class extends ze{constructor(){super(),this.type="AudioListener",this.context=To.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Co}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Qi,uc,Ep),ts.set(0,0,-1).applyQuaternion(uc),es.set(0,1,0).applyQuaternion(uc),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Qi.x,n),e.positionY.linearRampToValueAtTime(Qi.y,n),e.positionZ.linearRampToValueAtTime(Qi.z,n),e.forwardX.linearRampToValueAtTime(ts.x,n),e.forwardY.linearRampToValueAtTime(ts.y,n),e.forwardZ.linearRampToValueAtTime(ts.z,n),e.upX.linearRampToValueAtTime(es.x,n),e.upY.linearRampToValueAtTime(es.y,n),e.upZ.linearRampToValueAtTime(es.z,n)}else e.setPosition(Qi.x,Qi.y,Qi.z),e.setOrientation(ts.x,ts.y,ts.z,es.x,es.y,es.z)}};var Zc="\\[\\]\\.:\\/",Cp=new RegExp("["+Zc+"]","g"),$c="[^"+Zc+"]",Rp="[^"+Zc.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",$c),Pp=/(WCOD+)?/.source.replace("WCOD",Rp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),Dp=new RegExp("^"+Ip+Pp+Lp+Np+"$"),Up=["material","materials","bones","map"],bc=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){let e=Dp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Up.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;te("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=bc;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);var au=new ue,$r=class{constructor(t,e,n=0,s=1/0){this.ray=new rs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(ou),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(ou),n}};function ou(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wc(r[a],t,e,!0)}}var Tc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Jc(i,t,e,n){let s=Fp(n);switch(e){case Gc:return i*t;case Fo:return i*t/s.components*s.byteLength;case Oo:return i*t/s.components*s.byteLength;case Xi:return i*t*2/s.components*s.byteLength;case Bo:return i*t*2/s.components*s.byteLength;case Hc:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case zo:return i*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Ho:return Math.max(i,16)*Math.max(t,8)/4;case ko:case Go:return Math.max(i,8)*Math.max(t,8)/2;case Wo:case Xo:case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qo:case ia:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hl:case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fp(i){switch(i){case bn:case Bc:return{byteLength:1,components:1};case Js:case zc:case Kn:return{byteLength:2,components:1};case Do:case Uo:return{byteLength:2,components:4};case Jn:case No:case zn:return{byteLength:4,components:1};case kc:case Vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Md(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,im=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:$p,aomap_fragment:Jp,aomap_pars_fragment:Kp,batching_pars_vertex:jp,batching_vertex:Qp,begin_vertex:tm,beginnormal_vertex:em,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:xm,emissivemap_fragment:_m,emissivemap_pars_fragment:ym,colorspace_fragment:vm,colorspace_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:bm,envmap_pars_fragment:wm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:Am,fog_vertex:Em,fog_pars_vertex:Cm,fog_fragment:Rm,fog_pars_fragment:Im,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Hm,lights_fragment_maps:Wm,lights_fragment_end:Xm,lightprobes_pars_fragment:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Jm,map_fragment:Km,map_pars_fragment:jm,map_particle_fragment:Qm,map_particle_pars_fragment:t0,metalnessmap_fragment:e0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:x0,opaque_fragment:_0,packing:y0,premultiplied_alpha_fragment:v0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:E0,shadowmap_vertex:C0,shadowmask_pars_fragment:R0,skinbase_vertex:I0,skinning_pars_vertex:P0,skinning_vertex:L0,skinnormal_vertex:N0,specularmap_fragment:D0,specularmap_pars_fragment:U0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:k0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:H0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:Z0,cube_frag:$0,depth_vert:J0,depth_frag:K0,distance_vert:j0,distance_frag:Q0,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:xg,points_vert:_g,points_frag:yg,shadow_vert:vg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:bg},Rt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ui={basic:{uniforms:dn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:dn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:dn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:dn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:dn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:dn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:dn([Rt.points,Rt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:dn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:dn([Rt.common,Rt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:dn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:dn([Rt.sprite,Rt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:dn([Rt.common,Rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:dn([Rt.lights,Rt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ui.physical={uniforms:dn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var _l={r:0,b:0,g:0},wg=new ue,Sd=new se;Sd.set(-1,0,0,0,1,0,0,0,1);function Tg(i,t,e,n,s,r){let a=new ne(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){let y=S.backgroundBlurriness>0;C=t.get(C,y)}return C}function g(S){let C=!1,y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===Kr)?(c===void 0&&(c=new Tt(new yn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:us(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sd),c.material.toneMapped=ge.getTransfer(y.colorSpace)!==we,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Tt(new qe(2,2),new en({name:"BackgroundMaterial",uniforms:us(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ge.getTransfer(y.colorSpace)!==we,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,C){S.getRGB(_l,Yc(i)),e.buffers.color.setClear(_l.r,_l.g,_l.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,C=1){a.set(S),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,B,G,U,k){let $=!1,J=d(D,U,G,B);r!==J&&(r=J,c(r.object)),$=f(D,U,G,k),$&&g(D,U,G,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(D,B,G,U),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,B,G,U){let k=U.wireframe===!0,$=n[B.id];$===void 0&&($={},n[B.id]=$);let J=D.isInstancedMesh===!0?D.id:0,ht=$[J];ht===void 0&&(ht={},$[J]=ht);let Q=ht[G.id];Q===void 0&&(Q={},ht[G.id]=Q);let st=Q[k];return st===void 0&&(st=u(l()),Q[k]=st),st}function u(D){let B=[],G=[],U=[];for(let k=0;k<e;k++)B[k]=0,G[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:U,object:D,attributes:{},index:null}}function f(D,B,G,U){let k=r.attributes,$=B.attributes,J=0,ht=G.getAttributes();for(let Q in ht)if(ht[Q].location>=0){let lt=k[Q],vt=$[Q];if(vt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),lt===void 0||lt.attribute!==vt||vt&&lt.data!==vt.data)return!0;J++}return r.attributesNum!==J||r.index!==U}function g(D,B,G,U){let k={},$=B.attributes,J=0,ht=G.getAttributes();for(let Q in ht)if(ht[Q].location>=0){let lt=$[Q];lt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor));let vt={};vt.attribute=lt,lt&&lt.data&&(vt.data=lt.data),k[Q]=vt,J++}r.attributes=k,r.attributesNum=J,r.index=U}function v(){let D=r.newAttributes;for(let B=0,G=D.length;B<G;B++)D[B]=0}function m(D){p(D,0)}function p(D,B){let G=r.newAttributes,U=r.enabledAttributes,k=r.attributeDivisors;G[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),k[D]!==B&&(i.vertexAttribDivisor(D,B),k[D]=B)}function S(){let D=r.newAttributes,B=r.enabledAttributes;for(let G=0,U=B.length;G<U;G++)B[G]!==D[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function C(D,B,G,U,k,$,J){J===!0?i.vertexAttribIPointer(D,B,G,k,$):i.vertexAttribPointer(D,B,G,U,k,$)}function y(D,B,G,U){v();let k=U.attributes,$=G.getAttributes(),J=B.defaultAttributeValues;for(let ht in $){let Q=$[ht];if(Q.location>=0){let st=k[ht];if(st===void 0&&(ht==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),ht==="instanceColor"&&D.instanceColor&&(st=D.instanceColor)),st!==void 0){let lt=st.normalized,vt=st.itemSize,Lt=t.get(st);if(Lt===void 0)continue;let pe=Lt.buffer,ee=Lt.type,re=Lt.bytesPerElement,K=ee===i.INT||ee===i.UNSIGNED_INT||st.gpuType===No;if(st.isInterleavedBufferAttribute){let ot=st.data,yt=ot.stride,$t=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Dt=0;Dt<Q.locationSize;Dt++)p(Q.location+Dt,ot.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Dt=0;Dt<Q.locationSize;Dt++)m(Q.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Dt=0;Dt<Q.locationSize;Dt++)C(Q.location+Dt,vt/Q.locationSize,ee,lt,yt*re,($t+vt/Q.locationSize*Dt)*re,K)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)p(Q.location+ot,st.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<Q.locationSize;ot++)m(Q.location+ot);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ot=0;ot<Q.locationSize;ot++)C(Q.location+ot,vt/Q.locationSize,ee,lt,vt*re,vt/Q.locationSize*ot*re,K)}}else if(J!==void 0){let lt=J[ht];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(Q.location,lt);break;case 3:i.vertexAttrib3fv(Q.location,lt);break;case 4:i.vertexAttrib4fv(Q.location,lt);break;default:i.vertexAttrib1fv(Q.location,lt)}}}}S()}function b(){E();for(let D in n){let B=n[D];for(let G in B){let U=B[G];for(let k in U){let $=U[k];for(let J in $)h($[J].object),delete $[J];delete U[k]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let B=n[D.id];for(let G in B){let U=B[G];for(let k in U){let $=U[k];for(let J in $)h($[J].object),delete $[J];delete U[k]}}delete n[D.id]}function L(D){for(let B in n){let G=n[B];for(let U in G){let k=G[U];if(k[D.id]===void 0)continue;let $=k[D.id];for(let J in $)h($[J].object),delete $[J];delete k[D.id]}}}function _(D){for(let B in n){let G=n[B],U=D.isInstancedMesh===!0?D.id:0,k=G[U];if(k!==void 0){for(let $ in k){let J=k[$];for(let ht in J)h(J[ht].object),delete J[ht];delete k[$]}delete G[U],Object.keys(G).length===0&&delete n[B]}}}function E(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Eg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==kn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let _=L===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==bn&&L!==zn&&!_&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:y,maxSamples:b,samples:w}}function Rg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Xn,o=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,C=S*4,y=p.clippingState||null;l.value=y,y=h(g,u,C,f);for(let b=0;b!==C;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,y=f;C!==v;++C,y+=4)a.copy(d[C]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var tr=4,Ig=6,Pg=20,Lg=256,aa=new Ys,td=new ne,Kc=null,jc=0,Qc=0,th=!1,Ng=new I,ds=new I,nr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ng}=r;Kc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kc,jc,Qc),this._renderer.xr.enabled=th,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Kn,format:kn,colorSpace:Sr,depthBuffer:!1},s=ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dg(r)),this._blurMaterial=Fg(r,t,e),this._ggxMaterial=Ug(r,t,e)}return s}_compileMaterial(t){let e=new Tt(new Ce,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s,r){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(td),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new yn,new un({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(td),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let b=this._cubeSize;Qs(s,y*b,C>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gi||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-tr?n-g+tr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Qs(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Qs(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,aa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-tr?s-this._lodMax+tr:0),u=4*(this._cubeSize-h);Qs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,aa)}};function Dg(i){let t=[],e=[],n=i,s=i-tr+1+Ig;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,C=p>2?0:-1,y=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];g.set(y,f*u*p);for(let b=0;b<u;b++){let w=h[b*2]*2-1,L=h[b*2+1]*2-1;p===0?ds.set(1,L,w):p===1?ds.set(-w,1,-L):p===2?ds.set(-w,L,1):p===3?ds.set(-1,L,-w):p===4?ds.set(-w,-1,L):ds.set(w,L,-1),ds.toArray(v,(p*u+b)*f)}}let m=new Ce;m.setAttribute("position",new xn(g,f)),m.setAttribute("outputDirection",new xn(v,f)),e.push(new Tt(m,null)),n>tr&&n--}return{lodMeshes:e,sizeLods:t}}function ed(i,t,e){let n=new Mn(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ug(i,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Fg(i,t,e){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:Pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function nd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function id(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vl=class extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ci});r.uniforms.tEquirect.value=e;let a=new Tt(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=on),new Ao(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Og(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Io||f===Po)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new vl(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Io||f===Po,v=f===Gi||f===hs;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new nr(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new nr(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Io?u.mapping=Gi:f===Po&&(u.mapping=hs),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Bg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&is("WebGLRenderer: "+n+" extension not supported."),s}}}function zg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let C=0,y=S.length;C<y;C+=3){let b=S[C+0],w=S[C+1],L=S[C+2];u.push(b,w,w,L,L,b)}}else{let S=g.array;v=g.version;for(let C=0,y=S.length/3-1;C<y;C+=3){let b=C+0,w=C+1,L=C+2;u.push(b,w,w,L,L,b)}}let m=new(g.count>=65535?Er:Ar)(u,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function kg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,t,e){let n=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),v===!0&&(C=3);let y=o.attributes.position.count*C,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*b*4*d),L=new Tr(w,y,b,d);L.type=zn,L.needsUpdate=!0;let _=C*4;for(let N=0;N<d;N++){let D=m[N],B=p[N],G=S[N],U=y*b*4*N;for(let k=0;k<D.count;k++){let $=k*_;f===!0&&(s.fromBufferAttribute(D,k),w[U+$+0]=s.x,w[U+$+1]=s.y,w[U+$+2]=s.z,w[U+$+3]=0),g===!0&&(s.fromBufferAttribute(B,k),w[U+$+4]=s.x,w[U+$+5]=s.y,w[U+$+6]=s.z,w[U+$+7]=0),v===!0&&(s.fromBufferAttribute(G,k),w[U+$+8]=s.x,w[U+$+9]=s.y,w[U+$+10]=s.z,w[U+$+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new xt(y,b)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Wg={[Pc]:"LINEAR_TONE_MAPPING",[Lc]:"REINHARD_TONE_MAPPING",[Nc]:"CINEON_TONE_MAPPING",[Jr]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function Xg(i,t,e,n,s,r){let a=new Mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ce;c.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ae([0,2,0,0,2,0],2));let h=new uo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Tt(c,h),u=new Ys(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,S=[],C=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let w=0;w<S.length;w++){let L=S[w];L.setSize&&L.setSize(y,b)}},this.setEffects=function(y){S=y,C=S.length>0&&S[0].isRenderPass===!0;let b=a.width,w=a.height;S.length>0&&o===null&&(o=new Mn(b,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(b,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){let _=S[L];_.setSize&&_.setSize(b,w)}},this.begin=function(y,b){if(v||y.toneMapping===$n&&S.length===0)return!1;if(p=b,b!==null){let w=b.width,L=b.height;(a.width!==w||a.height!==L)&&this.setSize(w,L)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=$n,!0},this.hasRenderPass=function(){return C},this.end=function(y,b){y.toneMapping=m,v=!0;let w=a,L=o;for(let _=0;_<S.length;_++){let E=S[_];E.enabled!==!1&&(E.render(y,L,w,b),E.needsSwap!==!1&&(w=L,L=L===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},ge.getTransfer(f)===we&&(h.defines.SRGB_TRANSFER="");let _=Wg[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var bd=new _n,ih=new Ui(1,1),wd=new Tr,Td=new to,Ad=new Ir,sd=[],rd=[],ad=new Float32Array(16),od=new Float32Array(9),ld=new Float32Array(4);function ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bl(i,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;ld.set(n),i.uniformMatrix2fv(this.addr,!1,ld),$e(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),$e(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;ad.set(n),i.uniformMatrix4fv(this.addr,!1,ad),$e(e,n)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ih.compareFunction=e.isReversedDepthBuffer()?xl:gl,r=ih):r=bd,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Td,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ad,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wd,s)}function ux(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return $g;case 35674:return Jg;case 35675:return Kg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(i,t){i.uniform1fv(this.addr,t)}function fx(i,t){let e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function px(i,t){let e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function mx(i,t){let e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function gx(i,t){let e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xx(i,t){let e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _x(i,t){let e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yx(i,t){i.uniform1iv(this.addr,t)}function vx(i,t){i.uniform2iv(this.addr,t)}function Mx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function bx(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Ex(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ih:a=bd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Td,r[a])}function Rx(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ad,r[a])}function Ix(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wd,r[a])}function Px(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return _x;case 5124:case 35670:return yx;case 35667:case 35671:return vx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Ix}}var sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}},rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}},ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},eh=/(\w+)(\])?(\[|\.)?/g;function cd(i,t){i.seq.push(t),i.map[t.id]=t}function Lx(i,t,e){let n=i.name,s=n.length;for(eh.lastIndex=0;;){let r=eh.exec(n),a=eh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cd(e,c===void 0?new sh(o,i,t):new rh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ah(o),cd(e,d)),e=d}}}var er=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Lx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function hd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Nx=37297,Dx=0;function Ux(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ud=new se;function Fx(i){ge._getMatrix(ud,ge.workingColorSpace,i);let t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ux(i.getShaderSource(t),o)}else return r}function Ox(i,t){let e=Fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Bx={[Pc]:"Linear",[Lc]:"Reinhard",[Nc]:"Cineon",[Jr]:"ACESFilmic",[Uc]:"AgX",[Fc]:"Neutral",[Dc]:"Custom"};function zx(i,t){let e=Bx[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yl=new I;function kx(){ge.getLuminanceCoefficients(yl);let i=yl.x.toFixed(4),t=yl.y.toFixed(4),e=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Gx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function la(i){return i!==""}function fd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(i){return i.replace(Wx,qx)}var Xx=new Map;function qx(i,t){let e=ce[t];if(e===void 0){let n=Xx.get(t);if(n!==void 0)e=ce[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return oh(e)}var Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(i){return i.replace(Yx,Zx)}function Zx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var $x={[ls]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function Jx(i){return $x[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kx={[Gi]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function jx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qx={[hs]:"ENVMAP_MODE_REFRACTION"};function t_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var e_={[Ro]:"ENVMAP_BLENDING_MULTIPLY",[Ru]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function n_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":e_[i.combine]||"ENVMAP_BLENDING_NONE"}function i_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function s_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Jx(e),c=jx(e),h=t_(e),d=n_(e),u=i_(e),f=Vx(e),g=Gx(r),v=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`)):(m=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?ce.tonemapping_pars_fragment:"",e.toneMapping!==$n?zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Ox("linearToOutputTexel",e.outputColorSpace),kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(la).join(`
`)),a=oh(a),a=fd(a,e),a=pd(a,e),o=oh(o),o=fd(o,e),o=pd(o,e),a=md(a),o=md(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=S+m+a,y=S+p+o,b=hd(s,s.VERTEX_SHADER,C),w=hd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,b),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(w)||"",k=B.trim(),$=G.trim(),J=U.trim(),ht=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,w);else{let st=dd(s,b,"vertex"),lt=dd(s,w,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+st+`
`+lt)}else k!==""?jt("WebGLProgram: Program Info Log:",k):($===""||J==="")&&(Q=!1);Q&&(D.diagnostics={runnable:ht,programLog:k,vertexShader:{log:$,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(w),_=new er(s,v),E=Hx(s,v)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,Nx)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=w,this}var r_=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ch(t),e.set(t,n)),n}},ch=class{constructor(t){this.id=r_++,this.code=t,this.usedTimes=0}};function a_(i){return i===Xi||i===ia||i===sa}function o_(i,t,e,n,s,r){let a=new Fs,o=new lh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,N,D,B,G){let U=D.fog,k=B.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ht=t.get(_.envMap||$,J),Q=ht&&ht.mapping===Kr?ht.image.height:null,st=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&jt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let lt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,vt=lt!==void 0?lt.length:0,Lt=0;k.morphAttributes.position!==void 0&&(Lt=1),k.morphAttributes.normal!==void 0&&(Lt=2),k.morphAttributes.color!==void 0&&(Lt=3);let pe,ee,re,K;if(st){let Se=ui[st];pe=Se.vertexShader,ee=Se.fragmentShader}else{pe=_.vertexShader,ee=_.fragmentShader;let Se=o.getVertexShaderStage(_),Me=o.getFragmentShaderStage(_);o.update(_,Se,Me),re=Se.id,K=Me.id}let ot=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),$t=B.isInstancedMesh===!0,Dt=B.isBatchedMesh===!0,kt=!!_.map,Jt=!!_.matcap,nt=!!ht,dt=!!_.aoMap,pt=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,ft=!!_.normalMap,Ut=!!_.displacementMap,Vt=!!_.emissiveMap,q=!!_.metalnessMap,it=!!_.roughnessMap,P=_.anisotropy>0,It=_.clearcoat>0,Y=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,z=_.sheen>0,H=_.transmission>0,tt=P&&!!_.anisotropyMap,mt=It&&!!_.clearcoatMap,gt=It&&!!_.clearcoatNormalMap,et=It&&!!_.clearcoatRoughnessMap,rt=x&&!!_.iridescenceMap,At=x&&!!_.iridescenceThicknessMap,Xt=z&&!!_.sheenColorMap,Ct=z&&!!_.sheenRoughnessMap,wt=!!_.specularMap,qt=!!_.specularColorMap,Kt=!!_.specularIntensityMap,ie=H&&!!_.transmissionMap,O=H&&!!_.thicknessMap,St=!!_.gradientMap,at=!!_.alphaMap,Et=_.alphaTest>0,_t=!!_.alphaHash,ut=!!_.extensions,Ft=$n;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let Bt={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:pe,fragmentShader:ee,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Dt,batchingColor:Dt&&B._colorsTexture!==null,instancing:$t,instancingColor:$t&&B.instanceColor!==null,instancingMorph:$t&&B.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:kt,matcap:Jt,envMap:nt,envMapMode:nt&&ht.mapping,envMapCubeUVHeight:Q,aoMap:dt,lightMap:pt,bumpMap:ct,normalMap:ft,displacementMap:Ut,emissiveMap:Vt,normalMapObjectSpace:ft&&_.normalMapType===Nu,normalMapTangentSpace:ft&&_.normalMapType===ra,packedNormalMap:ft&&_.normalMapType===ra&&a_(_.normalMap.format),metalnessMap:q,roughnessMap:it,anisotropy:P,anisotropyMap:tt,clearcoat:It,clearcoatMap:mt,clearcoatNormalMap:gt,clearcoatRoughnessMap:et,dispersion:Y,retroreflection:A,iridescence:x,iridescenceMap:rt,iridescenceThicknessMap:At,sheen:z,sheenColorMap:Xt,sheenRoughnessMap:Ct,specularMap:wt,specularColorMap:qt,specularIntensityMap:Kt,transmission:H,transmissionMap:ie,thicknessMap:O,gradientMap:St,opaque:_.transparent===!1&&_.blending===Vi&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:Et,alphaHash:_t,combine:_.combine,mapUv:kt&&g(_.map.channel),aoMapUv:dt&&g(_.aoMap.channel),lightMapUv:pt&&g(_.lightMap.channel),bumpMapUv:ct&&g(_.bumpMap.channel),normalMapUv:ft&&g(_.normalMap.channel),displacementMapUv:Ut&&g(_.displacementMap.channel),emissiveMapUv:Vt&&g(_.emissiveMap.channel),metalnessMapUv:q&&g(_.metalnessMap.channel),roughnessMapUv:it&&g(_.roughnessMap.channel),anisotropyMapUv:tt&&g(_.anisotropyMap.channel),clearcoatMapUv:mt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(_.sheenRoughnessMap.channel),specularMapUv:wt&&g(_.specularMap.channel),specularColorMapUv:qt&&g(_.specularColorMap.channel),specularIntensityMapUv:Kt&&g(_.specularIntensityMap.channel),transmissionMapUv:ie&&g(_.transmissionMap.channel),thicknessMapUv:O&&g(_.thicknessMap.channel),alphaMapUv:at&&g(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ft||P),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(kt||at),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Lt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:kt&&_.map.isVideoTexture===!0&&ge.getTransfer(_.map.colorSpace)===we,decodeVideoTextureEmissive:Vt&&_.emissiveMap.isVideoTexture===!0&&ge.getTransfer(_.emissiveMap.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===On,flipSided:_.side===Ye,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)E.push(N),E.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(E,_),S(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){let E=f[_.type],N;if(E){let D=ui[E];N=Ku.clone(D.uniforms)}else N=_.uniforms;return N}function y(_,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new s_(i,E,_,s),c.push(N),h.set(E,N)),N}function b(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function L(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:L}}function l_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function c_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _d(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,g,v,m,p,S){S.reversedDepth===!0&&(m=-m);let C=o(u,f,g,v,m,p);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(u,f,g,v,m,p){let S=o(u,f,g,v,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||c_),n.length>1&&n.sort(f||xd),s.length>1&&s.sort(f||xd)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function h_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _d,i.set(n,[a])):s>=r.length?(a=new _d,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new ne};break;case"SpotLight":e={position:new I,direction:new I,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f_=0;function p_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m_(i){let t=new u_,e=d_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ue,a=new ue;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,C=0,y=0,b=0,w=0,L=0,_=0,E=0,N=0;c.sort(p_);for(let B=0,G=c.length;B<G;B++){let U=c[B],k=U.color,$=U.intensity,J=U.distance,ht=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Xi?ht=U.shadow.map.texture:ht=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=k.r*$,d+=k.g*$,u+=k.b*$;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],$);N++}else if(U.isSunLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let st=U.shadow,lt=e.get(U);lt.shadowIntensity=st.intensity,lt.shadowBias=st.bias,lt.shadowNormalBias=st.normalBias,lt.shadowRadius=st.radius,lt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=lt,n.sunShadowMap[g]=ht;let vt=st.getViewportCount();for(let Lt=0;Lt<vt;Lt++)n.sunShadowMatrix[v+Lt]=st.getMatrix(Lt),n.sunShadowCascade[v+Lt]=st._cascadeData[Lt];v+=vt,g++}n.sun[f]=Q,f++}else if(U.isDirectionalLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let st=U.shadow,lt=e.get(U);lt.shadowIntensity=st.intensity,lt.shadowBias=st.bias,lt.shadowNormalBias=st.normalBias,lt.shadowRadius=st.radius,lt.shadowMapSize=st.mapSize,n.directionalShadow[m]=lt,n.directionalShadowMap[m]=ht,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=Q,m++}else if(U.isSpotLight){let Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(k).multiplyScalar($),Q.distance=J,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[S]=Q;let st=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,st.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[S]=st.matrix,U.castShadow){let lt=e.get(U);lt.shadowIntensity=st.intensity,lt.shadowBias=st.bias,lt.shadowNormalBias=st.normalBias,lt.shadowRadius=st.radius,lt.shadowMapSize=st.mapSize,n.spotShadow[S]=lt,n.spotShadowMap[S]=ht,L++}S++}else if(U.isRectAreaLight){let Q=t.get(U);Q.color.copy(k).multiplyScalar($),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[C]=Q,C++}else if(U.isPointLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){let st=U.shadow,lt=e.get(U);lt.shadowIntensity=st.intensity,lt.shadowBias=st.bias,lt.shadowNormalBias=st.normalBias,lt.shadowRadius=st.radius,lt.shadowMapSize=st.mapSize,lt.shadowCameraNear=st.camera.near,lt.shadowCameraFar=st.camera.far,n.pointShadow[p]=lt,n.pointShadowMap[p]=ht,n.pointShadowMatrix[p]=U.shadow.matrix,w++}n.point[p]=Q,p++}else if(U.isHemisphereLight){let Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar($),Q.groundColor.copy(U.groundColor).multiplyScalar($),n.hemi[y]=Q,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==C||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==L||D.numSpotMaps!==_||D.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=C,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=N,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=C,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=L,D.numSpotMaps=_,D.numLightProbes=N,n.version=f_++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let S=0,C=c.length;S<C;S++){let y=c[S];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(y.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function yd(i){let t=new m_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function g_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yd(i),t.set(s,[o])):r>=a.length?(o=new yd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,y_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],v_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],vd=new ue,oa=new I,nh=new I;function M_(i,t,e){let n=new zs,s=new xt,r=new xt,a=new De,o=new fo,l=new po,c={},h=e.maxTextureSize,d={[ki]:Ye,[Ye]:ki,[On]:On},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:x_,fragmentShader:__}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Tt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ls;let p=this.type;this.render=function(w,L,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===hu&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ls);let E=i.getRenderTarget(),N=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ci),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=p!==this.type;G&&L.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=w.length;U<k;U++){let $=w[U],J=$.shadow;if(J===void 0){jt("WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ht=J.getFrameExtents();s.multiply(ht),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,J.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Q,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===$s){if($.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Mn(s.x,s.y,{format:Xi,type:Kn,minFilter:on,magFilter:on,generateMipmaps:!1}),J.map.texture.name=$.name+".shadowMap",J.map.depthTexture=new Ui(s.x,s.y,zn),J.map.depthTexture.name=$.name+".shadowMapDepth",J.map.depthTexture.format=ri,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn}else $.isPointLight?(J.map=new vl(s.x),J.map.depthTexture=new io(s.x,Jn)):(J.map=new Mn(s.x,s.y),J.map.depthTexture=new Ui(s.x,s.y,Jn)),J.map.depthTexture.name=$.name+".shadowMap",J.map.depthTexture.format=ri,this.type===ls?(J.map.depthTexture.compareFunction=Q?xl:gl,J.map.depthTexture.minFilter=on,J.map.depthTexture.magFilter=on):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let st=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();$.isPointLight!==!0&&J.updateMatrices($,_);for(let lt=0;lt<st;lt++){let vt=J.getCamera(lt);if($.isPointLight){let Lt=J.camera,pe=J.matrix,ee=$.distance||Lt.far;ee!==Lt.far&&(Lt.far=ee,Lt.updateProjectionMatrix()),oa.setFromMatrixPosition($.matrixWorld),Lt.position.copy(oa),nh.copy(Lt.position),nh.add(y_[lt]),Lt.up.copy(v_[lt]),Lt.lookAt(nh),Lt.updateMatrixWorld(),pe.makeTranslation(-oa.x,-oa.y,-oa.z),vd.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(vd,Lt.coordinateSystem,Lt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(J.map),i.clear());let Lt=J.getViewport(lt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),B.viewport(a)}n=J.getFrustum(lt),y(L,_,vt,$,this.type)}J.isPointLightShadow!==!0&&this.type===$s&&S(J,_),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,N,D)};function S(w,L){let _=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Mn(s.x,s.y,{format:Xi,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,_,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,_,f,v,null)}function C(w,L,_,E){let N=null,D=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)N=D;else if(N=_.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let B=N.uuid,G=L.uuid,U=c[B];U===void 0&&(U={},c[B]=U);let k=U[G];k===void 0&&(k=N.clone(),U[G]=k,L.addEventListener("dispose",b)),N=k}if(N.visible=L.visible,N.wireframe=L.wireframe,E===$s?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:d[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let B=i.properties.get(N);B.light=_}return N}function y(w,L,_,E,N){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===$s)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let G=t.update(w),U=w.material;if(Array.isArray(U)){let k=G.groups;for(let $=0,J=k.length;$<J;$++){let ht=k[$],Q=U[ht.materialIndex];if(Q&&Q.visible){let st=C(w,Q,E,N);w.onBeforeShadow(i,w,L,_,G,st,ht),i.renderBufferDirect(_,null,G,st,w,ht),w.onAfterShadow(i,w,L,_,G,st,ht)}}}else if(U.visible){let k=C(w,U,E,N);w.onBeforeShadow(i,w,L,_,G,k,null),i.renderBufferDirect(_,null,G,k,w,null),w.onAfterShadow(i,w,L,_,G,k,null)}}let B=w.children;for(let G=0,U=B.length;G<U;G++)y(B[G],L,_,E,N)}function b(w){w.target.removeEventListener("dispose",b);for(let _ in c){let E=c[_],N=w.target.uuid;N in E&&(E[N].dispose(),delete E[N])}}}function S_(i,t){function e(){let O=!1,St=new De,at=null,Et=new De(0,0,0,0);return{setMask:function(_t){at!==_t&&!O&&(i.colorMask(_t,_t,_t,_t),at=_t)},setLocked:function(_t){O=_t},setClear:function(_t,ut,Ft,Bt,Se){Se===!0&&(_t*=Bt,ut*=Bt,Ft*=Bt),St.set(_t,ut,Ft,Bt),Et.equals(St)===!1&&(i.clearColor(_t,ut,Ft,Bt),Et.copy(St))},reset:function(){O=!1,at=null,Et.set(-1,0,0,0)}}}function n(){let O=!1,St=!1,at=null,Et=null,_t=null;return{setReversed:function(ut){if(St!==ut){let Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),St=ut;let Bt=_t;_t=null,this.setClear(Bt)}},getReversed:function(){return St},setTest:function(ut){ut?ot(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(ut){at!==ut&&!O&&(i.depthMask(ut),at=ut)},setFunc:function(ut){if(St&&(ut=Xu[ut]),Et!==ut){switch(ut){case Ga:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=ut}},setLocked:function(ut){O=ut},setClear:function(ut){_t!==ut&&(_t=ut,St&&(ut=1-ut),i.clearDepth(ut))},reset:function(){O=!1,at=null,Et=null,_t=null,St=!1}}}function s(){let O=!1,St=null,at=null,Et=null,_t=null,ut=null,Ft=null,Bt=null,Se=null;return{setTest:function(Me){O||(Me?ot(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(Me){St!==Me&&!O&&(i.stencilMask(Me),St=Me)},setFunc:function(Me,Tn,Dn){(at!==Me||Et!==Tn||_t!==Dn)&&(i.stencilFunc(Me,Tn,Dn),at=Me,Et=Tn,_t=Dn)},setOp:function(Me,Tn,Dn){(ut!==Me||Ft!==Tn||Bt!==Dn)&&(i.stencilOp(Me,Tn,Dn),ut=Me,Ft=Tn,Bt=Dn)},setLocked:function(Me){O=Me},setClear:function(Me){Se!==Me&&(i.clearStencil(Me),Se=Me)},reset:function(){O=!1,St=null,at=null,Et=null,_t=null,ut=null,Ft=null,Bt=null,Se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,C=null,y=null,b=null,w=null,L=null,_=new ne(0,0,0),E=0,N=!1,D=null,B=null,G=null,U=null,k=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ht=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=ht>=1):Q.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=ht>=2);let st=null,lt={},vt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),pe=new De().fromArray(vt),ee=new De().fromArray(Lt);function re(O,St,at,Et){let _t=new Uint8Array(4),ut=i.createTexture();i.bindTexture(O,ut),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<at;Ft++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(St+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return ut}let K={};K[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(Ls),ct(!1),ft(Ac),ot(i.CULL_FACE),dt(ci);function ot(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function yt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function $t(O,St){return u[O]!==St?(i.bindFramebuffer(O,St),u[O]=St,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Dt(O,St){let at=g,Et=!1;if(O){at=f.get(St),at===void 0&&(at=[],f.set(St,at));let _t=O.textures;if(at.length!==_t.length||at[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ft=_t.length;ut<Ft;ut++)at[ut]=i.COLOR_ATTACHMENT0+ut;at.length=_t.length,Et=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,Et=!0);Et&&i.drawBuffers(at)}function kt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let Jt={[cs]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};Jt[pu]=i.MIN,Jt[mu]=i.MAX;let nt={[gu]:i.ZERO,[xu]:i.ONE,[_u]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[vu]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Mu]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Eu]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(O,St,at,Et,_t,ut,Ft,Bt,Se,Me){if(O===ci){m===!0&&(yt(i.BLEND),m=!1);return}if(m===!1&&(ot(i.BLEND),m=!0),O!==uu){if(O!==p||Me!==N){if((S!==cs||b!==cs)&&(i.blendEquation(i.FUNC_ADD),S=cs,b=cs),Me)switch(O){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",O);break}else switch(O){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",O);break}C=null,y=null,w=null,L=null,_.set(0,0,0),E=0,p=O,N=Me}return}_t=_t||St,ut=ut||at,Ft=Ft||Et,(St!==S||_t!==b)&&(i.blendEquationSeparate(Jt[St],Jt[_t]),S=St,b=_t),(at!==C||Et!==y||ut!==w||Ft!==L)&&(i.blendFuncSeparate(nt[at],nt[Et],nt[ut],nt[Ft]),C=at,y=Et,w=ut,L=Ft),(Bt.equals(_)===!1||Se!==E)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Se),_.copy(Bt),E=Se),p=O,N=!1}function pt(O,St){O.side===On?yt(i.CULL_FACE):ot(i.CULL_FACE);let at=O.side===Ye;St&&(at=!at),ct(at),O.blending===Vi&&O.transparent===!1?dt(ci):dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Et=O.stencilWrite;o.setTest(Et),Et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function ft(O){O!==lu?(ot(i.CULL_FACE),O!==B&&(O===Ac?i.cullFace(i.BACK):O===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),B=O}function Ut(O){O!==G&&(J&&i.lineWidth(O),G=O)}function Vt(O,St,at){O?(ot(i.POLYGON_OFFSET_FILL),(U!==St||k!==at)&&(U=St,k=at,a.getReversed()&&(St=-St),i.polygonOffset(St,at))):yt(i.POLYGON_OFFSET_FILL)}function q(O){O?ot(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function it(O){O===void 0&&(O=i.TEXTURE0+$-1),st!==O&&(i.activeTexture(O),st=O)}function P(O,St,at){at===void 0&&(st===null?at=i.TEXTURE0+$-1:at=st);let Et=lt[at];Et===void 0&&(Et={type:void 0,texture:void 0},lt[at]=Et),(Et.type!==O||Et.texture!==St)&&(st!==at&&(i.activeTexture(at),st=at),i.bindTexture(O,St||K[O]),Et.type=O,Et.texture=St)}function It(){let O=lt[st];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(O){te("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){te("WebGLState:",O)}}function x(){try{i.texSubImage2D(...arguments)}catch(O){te("WebGLState:",O)}}function z(){try{i.texSubImage3D(...arguments)}catch(O){te("WebGLState:",O)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(O){te("WebGLState:",O)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){te("WebGLState:",O)}}function mt(){try{i.texStorage2D(...arguments)}catch(O){te("WebGLState:",O)}}function gt(){try{i.texStorage3D(...arguments)}catch(O){te("WebGLState:",O)}}function et(){try{i.texImage2D(...arguments)}catch(O){te("WebGLState:",O)}}function rt(){try{i.texImage3D(...arguments)}catch(O){te("WebGLState:",O)}}function At(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Xt(O,St){d[O]!==St&&(i.pixelStorei(O,St),d[O]=St)}function Ct(O){pe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function wt(O){ee.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function qt(O,St){let at=c.get(St);at===void 0&&(at=new WeakMap,c.set(St,at));let Et=at.get(O);Et===void 0&&(Et=i.getUniformBlockIndex(St,O.name),at.set(O,Et))}function Kt(O,St){let Et=c.get(St).get(O);l.get(St)!==Et&&(i.uniformBlockBinding(St,Et,O.__bindingPointIndex),l.set(St,Et))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},st=null,lt={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,C=null,y=null,b=null,w=null,L=null,_=new ne(0,0,0),E=0,N=!1,D=null,B=null,G=null,U=null,k=null,pe.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:yt,bindFramebuffer:$t,drawBuffers:Dt,useProgram:kt,setBlending:dt,setMaterial:pt,setFlipSided:ct,setCullFace:ft,setLineWidth:Ut,setPolygonOffset:Vt,setScissorTest:q,activeTexture:it,bindTexture:P,unbindTexture:It,compressedTexImage2D:Y,compressedTexImage3D:A,texImage2D:et,texImage3D:rt,pixelStorei:Xt,getParameter:At,updateUBOMapping:qt,uniformBlockBinding:Kt,texStorage2D:mt,texStorage3D:gt,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:tt,scissor:Ct,viewport:wt,reset:ie}}function b_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return g?new OffscreenCanvas(A,x):wr("canvas")}function m(A,x,z){let H=1,tt=Y(A);if((tt.width>z||tt.height>z)&&(H=z/Math.max(tt.width,tt.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let mt=Math.floor(H*tt.width),gt=Math.floor(H*tt.height);u===void 0&&(u=v(mt,gt));let et=x?v(mt,gt):u;return et.width=mt,et.height=gt,et.getContext("2d").drawImage(A,0,0,mt,gt),jt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+mt+"x"+gt+")."),et}else return"data"in A&&jt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,x,z,H,tt,mt=!1){if(A!==null){if(i[A]!==void 0)return i[A];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;H&&(gt=t.get("EXT_texture_norm16"),gt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=x;if(x===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8),z===i.UNSIGNED_SHORT&&gt&&(et=gt.R16_EXT),z===i.SHORT&&gt&&(et=gt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),x===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8),z===i.UNSIGNED_SHORT&&gt&&(et=gt.RG16_EXT),z===i.SHORT&&gt&&(et=gt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RG8UI),z===i.UNSIGNED_SHORT&&(et=i.RG16UI),z===i.UNSIGNED_INT&&(et=i.RG32UI),z===i.BYTE&&(et=i.RG8I),z===i.SHORT&&(et=i.RG16I),z===i.INT&&(et=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGB8UI),z===i.UNSIGNED_SHORT&&(et=i.RGB16UI),z===i.UNSIGNED_INT&&(et=i.RGB32UI),z===i.BYTE&&(et=i.RGB8I),z===i.SHORT&&(et=i.RGB16I),z===i.INT&&(et=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),z===i.UNSIGNED_INT&&(et=i.RGBA32UI),z===i.BYTE&&(et=i.RGBA8I),z===i.SHORT&&(et=i.RGBA16I),z===i.INT&&(et=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&gt&&(et=gt.RGB16_EXT),z===i.SHORT&&gt&&(et=gt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),x===i.RGBA){let rt=mt?br:ge.getTransfer(tt);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=rt===we?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&gt&&(et=gt.RGBA16_EXT),z===i.SHORT&&gt&&(et=gt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(A,x){let z;return A?x===null||x===Jn||x===Ks?z=i.DEPTH24_STENCIL8:x===zn?z=i.DEPTH32F_STENCIL8:x===Js&&(z=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Ks?z=i.DEPTH_COMPONENT24:x===zn?z=i.DEPTH_COMPONENT32F:x===Js&&(z=i.DEPTH_COMPONENT16),z}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function L(A){let x=A.target;x.removeEventListener("dispose",L),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),D(x)}function E(A){let x=n.get(A);if(x.__webglInit===void 0)return;let z=A.source,H=f.get(z);if(H){let tt=H[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&N(A),Object.keys(H).length===0&&f.delete(z)}n.remove(A)}function N(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let z=A.source,H=f.get(z);delete H[x.__cacheKey],a.memory.textures--}function D(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let tt=0;tt<x.__webglFramebuffer[H].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[H][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)i.deleteFramebuffer(x.__webglFramebuffer[H]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=A.textures;for(let H=0,tt=z.length;H<tt;H++){let mt=n.get(z[H]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(A)}let B=0;function G(){B=0}function U(){return B}function k(A){B=A}function $(){let A=B;return A>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ht(A,x){let z=n.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let H=A.image;if(H===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function Q(A,x){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){yt(z,A,x);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function st(A,x){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){yt(z,A,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function lt(A,x){let z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){$t(z,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let vt={[Di]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},Lt={[tn]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},pe={[Uu]:i.NEVER,[ku]:i.ALWAYS,[Fu]:i.LESS,[gl]:i.LEQUAL,[Ou]:i.EQUAL,[xl]:i.GEQUAL,[Bu]:i.GREATER,[zu]:i.NOTEQUAL};function ee(A,x){if(x.type===zn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===Lo||x.magFilter===jr||x.magFilter===Hi||x.minFilter===on||x.minFilter===Lo||x.minFilter===jr||x.minFilter===Hi)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,vt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,vt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,vt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Lt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Lt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==jr&&x.minFilter!==Hi||x.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L));let H=x.source,tt=f.get(H);tt===void 0&&(tt={},f.set(H,tt));let mt=J(x);if(mt!==A.__cacheKey){tt[mt]===void 0&&(tt[mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[mt].usedTimes++;let gt=tt[A.__cacheKey];gt!==void 0&&(tt[A.__cacheKey].usedTimes--,gt.usedTimes===0&&N(x)),A.__cacheKey=mt,A.__webglTexture=tt[mt].texture}return z}function K(A,x,z){return Math.floor(Math.floor(A/z)/x)}function ot(A,x,z,H){let mt=A.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,H,x.data);else{mt.sort((Xt,Ct)=>Xt.start-Ct.start);let gt=0;for(let Xt=1;Xt<mt.length;Xt++){let Ct=mt[gt],wt=mt[Xt],qt=Ct.start+Ct.count,Kt=K(wt.start,x.width,4),ie=K(Ct.start,x.width,4);wt.start<=qt+1&&Kt===ie&&K(wt.start+wt.count-1,x.width,4)===Kt?Ct.count=Math.max(Ct.count,wt.start+wt.count-Ct.start):(++gt,mt[gt]=wt)}mt.length=gt+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Xt=0,Ct=mt.length;Xt<Ct;Xt++){let wt=mt[Xt],qt=Math.floor(wt.start/4),Kt=Math.ceil(wt.count/4),ie=qt%x.width,O=Math.floor(qt/x.width),St=Kt,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,ie,O,St,at,z,H,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function yt(A,x,z){let H=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=i.TEXTURE_3D);let tt=re(A,x),mt=x.source;e.bindTexture(H,A.__webglTexture,i.TEXTURE0+z);let gt=n.get(mt);if(mt.version!==gt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let at=ge.getPrimaries(ge.workingColorSpace),Et=x.colorSpace===Mi?null:ge.getPrimaries(x.colorSpace),_t=x.colorSpace===Mi||at===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let rt=m(x.image,!1,s.maxTextureSize);rt=It(x,rt);let At=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type),Ct=y(x.internalFormat,At,Xt,x.normalized,x.colorSpace,x.isVideoTexture);ee(H,x);let wt,qt=x.mipmaps,Kt=x.isVideoTexture!==!0,ie=gt.__version===void 0||tt===!0,O=mt.dataReady,St=w(x,rt);if(x.isDepthTexture)Ct=b(x.format===Wi,x.type),ie&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Ct,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,rt.width,rt.height,0,At,Xt,null));else if(x.isDataTexture)if(qt.length>0){Kt&&ie&&e.texStorage2D(i.TEXTURE_2D,St,Ct,qt[0].width,qt[0].height);for(let at=0,Et=qt.length;at<Et;at++)wt=qt[at],Kt?O&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,At,Xt,wt.data):e.texImage2D(i.TEXTURE_2D,at,Ct,wt.width,wt.height,0,At,Xt,wt.data);x.generateMipmaps=!1}else Kt?(ie&&e.texStorage2D(i.TEXTURE_2D,St,Ct,rt.width,rt.height),O&&ot(x,rt,At,Xt)):e.texImage2D(i.TEXTURE_2D,0,Ct,rt.width,rt.height,0,At,Xt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Ct,qt[0].width,qt[0].height,rt.depth);for(let at=0,Et=qt.length;at<Et;at++)if(wt=qt[at],x.format!==kn)if(At!==null)if(Kt){if(O)if(x.layerUpdates.size>0){let _t=Jc(wt.width,wt.height,x.format,x.type);for(let ut of x.layerUpdates){let Ft=wt.data.subarray(ut*_t/wt.data.BYTES_PER_ELEMENT,(ut+1)*_t/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,ut,wt.width,wt.height,1,At,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,rt.depth,At,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Ct,wt.width,wt.height,rt.depth,0,wt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,rt.depth,At,Xt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Ct,wt.width,wt.height,rt.depth,0,At,Xt,wt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Kt&&ie&&e.texStorage2D(i.TEXTURE_2D,St,Ct,qt[0].width,qt[0].height);for(let at=0,Et=qt.length;at<Et;at++)wt=qt[at],x.format!==kn?At!==null?Kt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Ct,wt.width,wt.height,0,wt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?O&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,At,Xt,wt.data):e.texImage2D(i.TEXTURE_2D,at,Ct,wt.width,wt.height,0,At,Xt,wt.data)}else if(x.isDataArrayTexture)if(Kt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Ct,rt.width,rt.height,rt.depth),O)if(x.layerUpdates.size>0){let at=Jc(rt.width,rt.height,x.format,x.type);for(let Et of x.layerUpdates){let _t=rt.data.subarray(Et*at/rt.data.BYTES_PER_ELEMENT,(Et+1)*at/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,rt.width,rt.height,1,At,Xt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,At,Xt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,rt.width,rt.height,rt.depth,0,At,Xt,rt.data);else if(x.isData3DTexture)Kt?(ie&&e.texStorage3D(i.TEXTURE_3D,St,Ct,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,At,Xt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,rt.width,rt.height,rt.depth,0,At,Xt,rt.data);else if(x.isFramebufferTexture){if(ie)if(Kt)e.texStorage2D(i.TEXTURE_2D,St,Ct,rt.width,rt.height);else{let at=rt.width,Et=rt.height;for(let _t=0;_t<St;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ct,at,Et,0,At,Xt,null),at>>=1,Et>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),rt.parentNode!==at){at.appendChild(rt),d.add(x),at.onpaint=Et=>{let _t=Et.changedElements;for(let ut of d)_t.includes(ut.image)&&(ut.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let _t=i.RGBA,ut=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,ut,Ft,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Kt&&ie){let at=Y(qt[0]);e.texStorage2D(i.TEXTURE_2D,St,Ct,at.width,at.height)}for(let at=0,Et=qt.length;at<Et;at++)wt=qt[at],Kt?O&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,At,Xt,wt):e.texImage2D(i.TEXTURE_2D,at,Ct,At,Xt,wt);x.generateMipmaps=!1}else if(Kt){if(ie){let at=Y(rt);e.texStorage2D(i.TEXTURE_2D,St,Ct,at.width,at.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Xt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,At,Xt,rt);p(x)&&S(H),gt.__version=mt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $t(A,x,z){if(x.image.length!==6)return;let H=re(A,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let mt=n.get(tt);if(tt.version!==mt.__version||H===!0){e.activeTexture(i.TEXTURE0+z);let gt=ge.getPrimaries(ge.workingColorSpace),et=x.colorSpace===Mi?null:ge.getPrimaries(x.colorSpace),rt=x.colorSpace===Mi||gt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let At=x.isCompressedTexture||x.image[0].isCompressedTexture,Xt=x.image[0]&&x.image[0].isDataTexture,Ct=[];for(let ut=0;ut<6;ut++)!At&&!Xt?Ct[ut]=m(x.image[ut],!0,s.maxCubemapSize):Ct[ut]=Xt?x.image[ut].image:x.image[ut],Ct[ut]=It(x,Ct[ut]);let wt=Ct[0],qt=r.convert(x.format,x.colorSpace),Kt=r.convert(x.type),ie=y(x.internalFormat,qt,Kt,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,St=mt.__version===void 0||H===!0,at=tt.dataReady,Et=w(x,wt);ee(i.TEXTURE_CUBE_MAP,x);let _t;if(At){O&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ie,wt.width,wt.height);for(let ut=0;ut<6;ut++){_t=Ct[ut].mipmaps;for(let Ft=0;Ft<_t.length;Ft++){let Bt=_t[Ft];x.format!==kn?qt!==null?O?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,Bt.width,Bt.height,qt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,ie,Bt.width,Bt.height,0,Bt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,Bt.width,Bt.height,qt,Kt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,ie,Bt.width,Bt.height,0,qt,Kt,Bt.data)}}}else{if(_t=x.mipmaps,O&&St){_t.length>0&&Et++;let ut=Y(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ie,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Xt){O?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ct[ut].width,Ct[ut].height,qt,Kt,Ct[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ie,Ct[ut].width,Ct[ut].height,0,qt,Kt,Ct[ut].data);for(let Ft=0;Ft<_t.length;Ft++){let Se=_t[Ft].image[ut].image;O?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,Se.width,Se.height,qt,Kt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,ie,Se.width,Se.height,0,qt,Kt,Se.data)}}else{O?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,qt,Kt,Ct[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ie,qt,Kt,Ct[ut]);for(let Ft=0;Ft<_t.length;Ft++){let Bt=_t[Ft];O?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,qt,Kt,Bt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,ie,qt,Kt,Bt.image[ut])}}}p(x)&&S(i.TEXTURE_CUBE_MAP),mt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Dt(A,x,z,H,tt,mt){let gt=r.convert(z.format,z.colorSpace),et=r.convert(z.type),rt=y(z.internalFormat,gt,et,z.normalized,z.colorSpace),At=n.get(x),Xt=n.get(z);if(Xt.__renderTarget=x,!At.__hasExternalTextures){let Ct=Math.max(1,x.width>>mt),wt=Math.max(1,x.height>>mt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,mt,rt,Ct,wt,x.depth,0,gt,et,null):e.texImage2D(tt,mt,rt,Ct,wt,0,gt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),it(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,tt,Xt.__webglTexture,0,q(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,tt,Xt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(A,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let H=x.depthTexture,tt=H&&H.isDepthTexture?H.type:null,mt=b(x.stencilBuffer,tt),gt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q(x),mt,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,q(x),mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,A)}else{let H=x.textures;for(let tt=0;tt<H.length;tt++){let mt=H[tt],gt=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),rt=y(mt.internalFormat,gt,et,mt.normalized,mt.colorSpace);it(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q(x),rt,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,q(x),rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,rt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(A,x,z){let H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",L)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ee(i.TEXTURE_CUBE_MAP,x.depthTexture);let At=r.convert(x.depthTexture.format),Xt=r.convert(x.depthTexture.type),Ct;x.depthTexture.format===ri?Ct=i.DEPTH_COMPONENT24:x.depthTexture.format===Wi&&(Ct=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,x.width,x.height,0,At,Xt,null)}}else ht(x.depthTexture,0);let mt=tt.__webglTexture,gt=q(x),et=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,rt=x.depthTexture.format===Wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ri)it(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,et,mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,et,mt,0);else if(x.depthTexture.format===Wi)it(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,et,mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,et,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){let x=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",tt)};H.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)Jt(x.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?Jt(x.__webglFramebuffer[0],A,0):Jt(x.__webglFramebuffer,A,0)}else if(z){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=i.createRenderbuffer(),kt(x.__webglDepthbuffer[H],A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=x.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,mt)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),kt(x.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(A,x,z){let H=n.get(A);x!==void 0&&Dt(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&nt(A)}function pt(A){let x=A.texture,z=n.get(A),H=n.get(x);A.addEventListener("dispose",_);let tt=A.textures,mt=A.isWebGLCubeRenderTarget===!0,gt=tt.length>1;if(gt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=x.version,a.memory.textures++),mt){z.__webglFramebuffer=[];for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[et]=[];for(let rt=0;rt<x.mipmaps.length;rt++)z.__webglFramebuffer[et][rt]=i.createFramebuffer()}else z.__webglFramebuffer[et]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let et=0;et<x.mipmaps.length;et++)z.__webglFramebuffer[et]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(gt)for(let et=0,rt=tt.length;et<rt;et++){let At=n.get(tt[et]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){let rt=tt[et];z.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[et]);let At=r.convert(rt.format,rt.colorSpace),Xt=r.convert(rt.type),Ct=y(rt.internalFormat,At,Xt,rt.normalized,rt.colorSpace,A.isXRRenderTarget===!0),wt=q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,z.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ee(i.TEXTURE_CUBE_MAP,x);for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Dt(z.__webglFramebuffer[et][rt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,rt);else Dt(z.__webglFramebuffer[et],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(x)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let et=0,rt=tt.length;et<rt;et++){let At=tt[et],Xt=n.get(At),Ct=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Xt.__webglTexture),ee(Ct,At),Dt(z.__webglFramebuffer,A,At,i.COLOR_ATTACHMENT0+et,Ct,0),p(At)&&S(Ct)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(et=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,H.__webglTexture),ee(et,x),x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Dt(z.__webglFramebuffer[rt],A,x,i.COLOR_ATTACHMENT0,et,rt);else Dt(z.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,et,0);p(x)&&S(et),e.unbindTexture()}A.depthBuffer&&nt(A)}function ct(A){let x=A.textures;for(let z=0,H=x.length;z<H;z++){let tt=x[z];if(p(tt)){let mt=C(A),gt=n.get(tt).__webglTexture;e.bindTexture(mt,gt),S(mt),e.unbindTexture()}}}let ft=[],Ut=[];function Vt(A){if(A.samples>0){if(it(A)===!1){let x=A.textures,z=A.width,H=A.height,tt=i.COLOR_BUFFER_BIT,mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),et=x.length>1;if(et)for(let At=0;At<x.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let rt=A.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let At=0;At<x.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[At]);let Xt=n.get(x[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,tt,i.NEAREST),l===!0&&(ft.length=0,Ut.length=0,ft.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ft.push(mt),Ut.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let At=0;At<x.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,gt.__webglColorRenderbuffer[At]);let Xt=n.get(x[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function q(A){return Math.min(s.maxSamples,A.samples)}function it(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function It(A,x){let z=A.colorSpace,H=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Sr&&z!==Mi&&(ge.getTransfer(z)===we?(H!==kn||tt!==bn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",z)),x}function Y(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=ht,this.setTexture2DArray=Q,this.setTexture3D=st,this.setTextureCube=lt,this.rebindTextures=dt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function w_(i,t){function e(n,s=Mi){let r,a=ge.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bc)return i.BYTE;if(n===zc)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===kn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===Fo)return i.RED;if(n===Oo)return i.RED_INTEGER;if(n===Xi)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Qr||n===ta||n===ea||n===na)if(a===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Vo||n===Go||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===ia||n===$o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return a===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yo)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===$o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jo||n===Ko||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hl||n===ul||n===dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hl)return a===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===pl||n===sa||n===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Pr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:T_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new hh,p={},S=e.getContextAttributes(),C=null,y=null,b=[],w=[],L=new xt,_=null,E=null,N=new an;N.viewport=new De;let D=new an;D.viewport=new De;let B=[N,D],G=new Eo,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=b[K];return ot===void 0&&(ot=new Os,b[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=b[K];return ot===void 0&&(ot=new Os,b[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=b[K];return ot===void 0&&(ot=new Os,b[K]=ot),ot.getHandSpace()};function $(K){let ot=w.indexOf(K.inputSource);if(ot===-1)return;let yt=b[ot];yt!==void 0&&(yt.update(K.inputSource,K.frame,c||a),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ht);for(let K=0;K<b.length;K++){let ot=w[K];ot!==null&&(w[K]=null,b[K].disconnect(ot))}U=null,k=null,m.reset();for(let K in p)delete p[K];if(t.setRenderTarget(C),f=null,u=null,d=null,s=null,y=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(L.width,L.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,$t=null,Dt=null;S.depth&&(Dt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=S.stencil?Wi:ri,$t=S.stencil?Ks:Jn);let kt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Mn(u.textureWidth,u.textureHeight,{format:kn,type:bn,depthTexture:new Ui(u.textureWidth,u.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Mn(f.framebufferWidth,f.framebufferHeight,{format:kn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(K){for(let ot=0;ot<K.removed.length;ot++){let yt=K.removed[ot],$t=w.indexOf(yt);$t>=0&&(w[$t]=null,b[$t].disconnect(yt))}for(let ot=0;ot<K.added.length;ot++){let yt=K.added[ot],$t=w.indexOf(yt);if($t===-1){for(let kt=0;kt<b.length;kt++)if(kt>=w.length){w.push(yt),$t=kt;break}else if(w[kt]===null){w[kt]=yt,$t=kt;break}if($t===-1)break}let Dt=b[$t];Dt&&Dt.connect(yt)}}let Q=new I,st=new I;function lt(K,ot,yt){Q.setFromMatrixPosition(ot.matrixWorld),st.setFromMatrixPosition(yt.matrixWorld);let $t=Q.distanceTo(st),Dt=ot.projectionMatrix.elements,kt=yt.projectionMatrix.elements,Jt=Dt[14]/(Dt[10]-1),nt=Dt[14]/(Dt[10]+1),dt=(Dt[9]+1)/Dt[5],pt=(Dt[9]-1)/Dt[5],ct=(Dt[8]-1)/Dt[0],ft=(kt[8]+1)/kt[0],Ut=Jt*ct,Vt=Jt*ft,q=$t/(-ct+ft),it=q*-ct;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(it),K.translateZ(q),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let P=Jt+q,It=nt+q,Y=Ut-it,A=Vt+($t-it),x=dt*nt/It*P,z=pt*nt/It*P;K.projectionMatrix.makePerspective(Y,A,x,z,P,It),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function vt(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,yt=K.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),G.near=D.near=N.near=ot,G.far=D.far=N.far=yt,(U!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),U=G.near,k=G.far),G.layers.mask=K.layers.mask|6,N.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let $t=K.parent,Dt=G.cameras;vt(G,$t);for(let kt=0;kt<Dt.length;kt++)vt(Dt[kt],$t);Dt.length===2?lt(G,N,D):G.projectionMatrix.copy(N.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),Lt(K,G,$t)};function Lt(K,ot,yt){yt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ka*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(K){return p[K]};let pe=null;function ee(K,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let $t=!1;yt.length!==G.cameras.length&&(G.cameras.length=0,$t=!0);for(let nt=0;nt<yt.length;nt++){let dt=yt[nt],pt=null;if(f!==null)pt=f.getViewport(dt);else{let ft=d.getViewSubImage(u,dt);pt=ft.viewport,nt===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let ct=B[nt];ct===void 0&&(ct=new an,ct.layers.enable(nt),ct.viewport=new De,B[nt]=ct),ct.matrix.fromArray(dt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(dt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(pt.x,pt.y,pt.width,pt.height),nt===0&&(G.matrix.copy(ct.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),$t===!0&&G.cameras.push(ct)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let nt=d.getDepthInformation(yt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Dt&&Dt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<yt.length;nt++){let dt=yt[nt].camera;if(dt){let pt=p[dt];pt||(pt=new Pr,p[dt]=pt);let ct=d.getCameraImage(dt);pt.sourceTexture=ct}}}}for(let yt=0;yt<b.length;yt++){let $t=w[yt],Dt=b[yt];$t!==null&&Dt!==void 0&&Dt.update($t,ot,c||a)}pe&&pe(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let re=new Md;re.setAnimationLoop(ee),this.setAnimationLoop=function(K){pe=K},this.dispose=function(){}}},E_=new ue,Ed=new se;Ed.set(-1,0,0,0,1,0,0,0,1);function C_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),C=S.envMap,y=S.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ed),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=C*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let w=b.program;n.uniformBlockBinding(y,w)}function c(y,b){let w=s[y.id];w===void 0&&(m(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",S));let L=b.program;n.updateUBOMapping(y,L);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let b=d();y.__bindingPointIndex=b;let w=i.createBuffer(),L=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],w=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,E=w.length;_<E;_++){let N=w[_];if(Array.isArray(N))for(let D=0,B=N.length;D<B;D++)f(N[D],_,D,L);else f(N,_,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,w,L){if(v(y,b,w,L)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let N=0;for(let D=0;D<E.length;D++){let B=E[D],G=p(B);g(B,y.__data,N),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function g(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function v(y,b,w,L){let _=y.value,E=b+"_"+w;if(L[E]===void 0)return typeof _=="number"||typeof _=="boolean"?L[E]=_:ArrayBuffer.isView(_)?L[E]=_.slice():L[E]=_.clone(),!0;{let N=L[E];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return L[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function m(y){let b=y.uniforms,w=0,L=16;for(let E=0,N=b.length;E<N;E++){let D=Array.isArray(b[E])?b[E]:[b[E]];for(let B=0,G=D.length;B<G;B++){let U=D[B],k=Array.isArray(U.value)?U.value:[U.value];for(let $=0,J=k.length;$<J;$++){let ht=k[$],Q=p(ht),st=w%L,lt=st%Q.boundary,vt=st+lt;w+=lt,vt!==0&&L-vt<Q.storage&&(w+=L-vt),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=Q.storage}}}let _=w%L;return _>0&&(w+=L-_),y.__size=w,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){let b=y.target;b.removeEventListener("dispose",S);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var I_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function P_(){return hi===null&&(hi=new Cr(I_,16,16,Xi,Kn),hi.name="DFG_LUT",hi.minFilter=on,hi.magFilter=on,hi.wrapS=si,hi.wrapT=si,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Ml=class{constructor(t={}){let{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=bn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([zo,Bo,Oo]),p=new Set([bn,Jn,Js,Ks,Do,Uo]),S=new Uint32Array(4),C=new Int32Array(4),y=new I,b=null,w=null,L=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,D=!1,B=null,G=null,U=null,k=null;this._outputColorSpace=rn;let $=0,J=0,ht=null,Q=-1,st=null,lt=new De,vt=new De,Lt=null,pe=new ne(0),ee=0,re=e.width,K=e.height,ot=1,yt=null,$t=null,Dt=new De(0,0,re,K),kt=new De(0,0,re,K),Jt=!1,nt=new zs,dt=!1,pt=!1,ct=new ue,ft=new I,Ut=new De,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function it(){return ht===null?ot:1}let P=n;function It(M,F){return e.getContext(M,F)}let Y,A,x,z,H,tt,mt,gt,et,rt,At,Xt,Ct,wt,qt,Kt,ie,O,St,at,Et,_t,ut;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),P===null){let F="webgl2";if(P=It(F,M),P===null)throw It(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(M){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),te("WebGLRenderer: "+M.message),M}function Ft(){Y=new Bg(P),Y.init(),Et=new w_(P,Y),A=new Cg(P,Y,t,Et),x=new S_(P,Y),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),G=P.createFramebuffer(),U=P.createFramebuffer(),k=P.createFramebuffer(),z=new Vg(P),H=new l_,tt=new b_(P,Y,x,H,A,Et,z),mt=new Og(N),gt=new Hp(P),_t=new Ag(P,gt),et=new zg(P,gt,z,_t),rt=new Hg(P,et,gt,_t,z),O=new Gg(P,A,tt),qt=new Rg(H),At=new o_(N,mt,Y,A,_t,qt),Xt=new C_(N,H),Ct=new h_,wt=new g_(Y),ie=new Tg(N,mt,x,rt,g,l),Kt=new M_(N,rt,A),ut=new R_(P,z,A,x),St=new Eg(P,Y,z),at=new kg(P,Y,z),z.programs=At.programs,N.capabilities=A,N.extensions=Y,N.properties=H,N.renderLists=Ct,N.shadowMap=Kt,N.state=x,N.info=z}v!==bn&&(E=new Xg(v,e.width,e.height,o,s,r));let Bt=new uh(N,P);this.xr=Bt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Y.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Y.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(M){M!==void 0&&(ot=M,this.setSize(re,K,!1))},this.getSize=function(M){return M.set(re,K)},this.setSize=function(M,F,Z=!0){if(Bt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=M,K=F,e.width=Math.floor(M*ot),e.height=Math.floor(F*ot),Z===!0&&(e.style.width=M+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(re*ot,K*ot).floor()},this.setDrawingBufferSize=function(M,F,Z){re=M,K=F,ot=Z,e.width=Math.floor(M*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(v===bn){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(lt)},this.getViewport=function(M){return M.copy(Dt)},this.setViewport=function(M,F,Z,W){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,F,Z,W),x.viewport(lt.copy(Dt).multiplyScalar(ot).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,F,Z,W){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,F,Z,W),x.scissor(vt.copy(kt).multiplyScalar(ot).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(M){x.setScissorTest(Jt=M)},this.setOpaqueSort=function(M){yt=M},this.setTransparentSort=function(M){$t=M},this.getClearColor=function(M){return M.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,Z=!0){let W=0;if(M){let X=!1;if(ht!==null){let Nt=ht.texture.format;X=m.has(Nt)}if(X){let Nt=ht.texture.type,zt=p.has(Nt),Pt=ie.getClearColor(),Gt=ie.getClearAlpha(),Zt=Pt.r,le=Pt.g,fe=Pt.b;zt?(S[0]=Zt,S[1]=le,S[2]=fe,S[3]=Gt,P.clearBufferuiv(P.COLOR,0,S)):(C[0]=Zt,C[1]=le,C[2]=fe,C[3]=Gt,P.clearBufferiv(P.COLOR,0,C))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),ie.dispose(),Ct.dispose(),wt.dispose(),H.dispose(),mt.dispose(),rt.dispose(),_t.dispose(),ut.dispose(),At.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",bt),Bt.removeEventListener("sessionend",Wt),Yt.stop()};function Se(M){M.preventDefault(),Xc("WebGLRenderer: Context Lost."),D=!0}function Me(){Xc("WebGLRenderer: Context Restored."),D=!1;let M=z.autoReset,F=Kt.enabled,Z=Kt.autoUpdate,W=Kt.needsUpdate,X=Kt.type;Ft(),z.autoReset=M,Kt.enabled=F,Kt.autoUpdate=Z,Kt.needsUpdate=W,Kt.type=X}function Tn(M){te("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Dn(M){let F=M.target;F.removeEventListener("dispose",Dn),T(F)}function T(M){V(M),H.remove(M)}function V(M){let F=H.get(M).programs;F!==void 0&&(F.forEach(function(Z){At.releaseProgram(Z)}),M.isShaderMaterial&&At.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,Z,W,X,Nt){F===null&&(F=Vt);let zt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Pt=wf(M,F,Z,W,X);x.setMaterial(W,zt);let Gt=Z.index,Zt=1;if(W.wireframe===!0){if(Gt=et.getWireframeAttribute(Z),Gt===void 0)return;Zt=2}let le=Z.drawRange,fe=Z.attributes.position,Ht=le.start*Zt,be=(le.start+le.count)*Zt;Nt!==null&&(Ht=Math.max(Ht,Nt.start*Zt),be=Math.min(be,(Nt.start+Nt.count)*Zt)),Gt!==null?(Ht=Math.max(Ht,0),be=Math.min(be,Gt.count)):fe!=null&&(Ht=Math.max(Ht,0),be=Math.min(be,fe.count));let We=be-Ht;if(We<0||We===1/0)return;_t.setup(X,W,Pt,Z,Gt);let Fe,Ie=St;if(Gt!==null&&(Fe=gt.get(Gt),Ie=at,Ie.setIndex(Fe)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*it()),Ie.setMode(P.LINES)):Ie.setMode(P.TRIANGLES);else if(X.isLine){let ln=W.linewidth;ln===void 0&&(ln=1),x.setLineWidth(ln*it()),X.isLineSegments?Ie.setMode(P.LINES):X.isLineLoop?Ie.setMode(P.LINE_LOOP):Ie.setMode(P.LINE_STRIP)}else X.isPoints?Ie.setMode(P.POINTS):X.isSprite&&Ie.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(Y.get("WEBGL_multi_draw"))Ie.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ln=X._multiDrawStarts,Ot=X._multiDrawCounts,gn=X._multiDrawCount,ve=Gt?gt.get(Gt).bytesPerElement:1,Un=H.get(W).currentProgram.getUniforms();for(let ni=0;ni<gn;ni++)Un.setValue(P,"_gl_DrawID",ni),Ie.render(ln[ni]/ve,Ot[ni])}else if(X.isInstancedMesh)Ie.renderInstances(Ht,We,X.count);else if(Z.isInstancedBufferGeometry){let ln=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ot=Math.min(Z.instanceCount,ln);Ie.renderInstances(Ht,We,Ot)}else Ie.render(Ht,We)};function j(M,F,Z,W){B!==null&&M.isNodeMaterial&&B.setObject(W,M),dt===!0&&qt.setState(M,Z,!1),M.transparent===!0&&M.side===On&&M.forceSinglePass===!1?(M.side=Ye,M.needsUpdate=!0,Ae(M,F,W),M.side=ki,M.needsUpdate=!0,Ae(M,F,W),M.side=On):Ae(M,F,W)}this.compile=function(M,F,Z=null){Z===null&&(Z=M),B!==null&&B.renderStart(M,F,Z),w=wt.get(Z),w.init(F),_.push(w),Z.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),M!==Z&&M.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),pt=this.localClippingEnabled,dt=qt.init(this.clippingPlanes,pt),dt===!0&&qt.setGlobalState(this.clippingPlanes,F),B!==null&&Kt.render(w.state.shadowsArray,Z,F);let W=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Nt=X.material;if(Nt)if(Array.isArray(Nt))for(let zt=0;zt<Nt.length;zt++){let Pt=Nt[zt];j(Pt,Z,F,X),W.add(Pt)}else j(Nt,Z,F,X),W.add(Nt)}),w=_.pop(),B!==null&&B.renderEnd(),W},this.compileAsync=function(M,F,Z=null){let W=this.compile(M,F,Z);return new Promise(X=>{function Nt(){if(W.forEach(function(zt){let Gt=H.get(zt).currentProgram;(Gt===void 0||Gt.isReady())&&W.delete(zt)}),W.size===0){X(M);return}setTimeout(Nt,10)}Y.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let R=null;function Mt(M){R&&R(M)}function bt(){Yt.stop()}function Wt(){Yt.start()}let Yt=new Md;Yt.setAnimationLoop(Mt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(M){R=M,Bt.setAnimationLoop(M),M===null?Yt.stop():Yt.start()},Bt.addEventListener("sessionstart",bt),Bt.addEventListener("sessionend",Wt),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(M,F);let Z=Bt.enabled===!0&&Bt.isPresenting===!0,W=E!==null&&(ht===null||Z)&&E.begin(N,ht);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(F),F=Bt.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,F,ht),w=wt.get(M,_.length),w.init(F),w.state.textureUnits=tt.getTextureUnits(),_.push(w),ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(ct,qn,F.reversedDepth),pt=this.localClippingEnabled,dt=qt.init(this.clippingPlanes,pt),b=Ct.get(M,L.length),b.init(),L.push(b),Bt.enabled===!0&&Bt.isPresenting===!0){let zt=N.xr.getDepthSensingMesh();zt!==null&&Qt(zt,F,-1/0,N.sortObjects)}Qt(M,F,0,N.sortObjects),b.finish(),B!==null&&B.updateLights(w.state.lightsArray),N.sortObjects===!0&&b.sort(yt,$t),q=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,q&&ie.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&qt.beginShadows();let X=w.state.shadowsArray;if(Kt.render(X,M,F),dt===!0&&qt.endShadows(),(W&&E.hasRenderPass())===!1){let zt=b.opaque,Pt=b.transmissive;if(w.setupLights(),F.isArrayCamera){let Gt=F.cameras;if(Pt.length>0)for(let Zt=0,le=Gt.length;Zt<le;Zt++){let fe=Gt[Zt];ke(zt,Pt,M,fe)}q&&ie.render(M);for(let Zt=0,le=Gt.length;Zt<le;Zt++){let fe=Gt[Zt];ye(b,M,fe,fe.viewport)}}else Pt.length>0&&ke(zt,Pt,M,F),q&&ie.render(M),ye(b,M,F)}ht!==null&&J===0&&(tt.updateMultisampleRenderTarget(ht),tt.updateRenderTargetMipmap(ht)),W&&E.end(N),M.isScene===!0&&M.onAfterRender(N,M,F),_t.resetDefaultState(),Q=-1,st=null,_.pop(),_.length>0?(w=_[_.length-1],tt.setTextureUnits(w.state.textureUnits),dt===!0&&qt.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,B!==null&&B.renderEnd()};function Qt(M,F,Z,W){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(nt)){W&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);let zt=rt.update(M),Pt=M.material;Pt.visible&&b.push(M,zt,Pt,Z,Ut.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(nt))){let zt=rt.update(M),Pt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ut.copy(zt.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(Pt)){let Gt=zt.groups;for(let Zt=0,le=Gt.length;Zt<le;Zt++){let fe=Gt[Zt],Ht=Pt[fe.materialIndex];Ht&&Ht.visible&&b.push(M,zt,Ht,Z,Ut.z,fe,F)}}else Pt.visible&&b.push(M,zt,Pt,Z,Ut.z,null,F)}}let Nt=M.children;for(let zt=0,Pt=Nt.length;zt<Pt;zt++)Qt(Nt[zt],F,Z,W)}function ye(M,F,Z,W){let{opaque:X,transmissive:Nt,transparent:zt}=M;w.setupLightsView(Z),dt===!0&&qt.setGlobalState(N.clippingPlanes,Z),W&&x.viewport(lt.copy(W)),X.length>0&&me(X,F,Z),Nt.length>0&&me(Nt,F,Z),zt.length>0&&me(zt,F,Z),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ke(M,F,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){let Ht=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Mn(1,1,{generateMipmaps:!0,type:Ht?Kn:bn,minFilter:Hi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Nt=w.state.transmissionRenderTarget[W.id],zt=W.viewport||lt;Nt.setSize(zt.z*N.transmissionResolutionScale,zt.w*N.transmissionResolutionScale);let Pt=N.getRenderTarget(),Gt=N.getActiveCubeFace(),Zt=N.getActiveMipmapLevel();N.setRenderTarget(Nt),N.getClearColor(pe),ee=N.getClearAlpha(),ee<1&&N.setClearColor(16777215,.5),N.clear(),q&&ie.render(Z);let le=N.toneMapping;N.toneMapping=$n;let fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),dt===!0&&qt.setGlobalState(N.clippingPlanes,W),me(M,Z,W),tt.updateMultisampleRenderTarget(Nt),tt.updateRenderTargetMipmap(Nt),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let be=0,We=F.length;be<We;be++){let Fe=F[be],{object:Ie,geometry:ln,material:Ot,group:gn}=Fe;if(Ot.side===On&&Ie.layers.test(W.layers)){let ve=Ot.side;Ot.side=Ye,Ot.needsUpdate=!0,xe(Ie,Z,W,ln,Ot,gn),Ot.side=ve,Ot.needsUpdate=!0,Ht=!0}}Ht===!0&&(tt.updateMultisampleRenderTarget(Nt),tt.updateRenderTargetMipmap(Nt))}N.setRenderTarget(Pt,Gt,Zt),N.setClearColor(pe,ee),fe!==void 0&&(W.viewport=fe),N.toneMapping=le}function me(M,F,Z){let W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Nt=M.length;X<Nt;X++){let zt=M[X],{object:Pt,geometry:Gt,group:Zt}=zt,le=zt.material;le.allowOverride===!0&&W!==null&&(le=W),Pt.layers.test(Z.layers)&&xe(Pt,F,Z,Gt,le,Zt)}}function xe(M,F,Z,W,X,Nt){B!==null&&X.isNodeMaterial&&B.setObject(M,X),M.onBeforeRender(N,F,Z,W,X,Nt),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(N,F,Z,W,M,Nt),X.transparent===!0&&X.side===On&&X.forceSinglePass===!1?(X.side=Ye,X.needsUpdate=!0,N.renderBufferDirect(Z,F,W,X,M,Nt),X.side=ki,X.needsUpdate=!0,N.renderBufferDirect(Z,F,W,X,M,Nt),X.side=On):N.renderBufferDirect(Z,F,W,X,M,Nt),M.onAfterRender(N,F,Z,W,X,Nt)}function Ae(M,F,Z){F.isScene!==!0&&(F=Vt);let W=H.get(M),X=w.state.lights,Nt=w.state.shadowsArray,zt=X.state.version,Pt=At.getParameters(M,X.state,Nt,F,Z,w.state.lightProbeGridArray),Gt=At.getProgramCacheKey(Pt),Zt=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let le=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=mt.get(M.envMap||W.environment,le),W.envMapRotation=W.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Zt===void 0&&(M.addEventListener("dispose",Dn),Zt=new Map,W.programs=Zt);let fe=Zt.get(Gt);if(fe!==void 0){if(W.currentProgram===fe&&W.lightsStateVersion===zt)return cr(M,Pt),fe}else Pt.uniforms=At.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,Z,Pt),M.onBeforeCompile(Pt,N),fe=At.acquireProgram(Pt,Gt),Zt.set(Gt,fe),W.uniforms=Pt.uniforms;let Ht=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ht.clippingPlanes=qt.uniform),cr(M,Pt),W.needsLights=Af(M),W.lightsStateVersion=zt,W.needsLights&&(Ht.ambientLightColor.value=X.state.ambient,Ht.lightProbe.value=X.state.probe,Ht.sunLights.value=X.state.sun,Ht.sunLightShadows.value=X.state.sunShadow,Ht.directionalLights.value=X.state.directional,Ht.directionalLightShadows.value=X.state.directionalShadow,Ht.spotLights.value=X.state.spot,Ht.spotLightShadows.value=X.state.spotShadow,Ht.rectAreaLights.value=X.state.rectArea,Ht.ltc_1.value=X.state.rectAreaLTC1,Ht.ltc_2.value=X.state.rectAreaLTC2,Ht.pointLights.value=X.state.point,Ht.pointLightShadows.value=X.state.pointShadow,Ht.hemisphereLights.value=X.state.hemi,Ht.sunShadowMatrix.value=X.state.sunShadowMatrix,Ht.sunShadowCascade.value=X.state.sunShadowCascade,Ht.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ht.spotLightMatrix.value=X.state.spotLightMatrix,Ht.spotLightMap.value=X.state.spotLightMap,Ht.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=fe,W.uniformsList=null,fe}function sn(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=er.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function cr(M,F){let Z=H.get(M);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function bf(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let Z=0,W=M.length;Z<W;Z++){let X=M[Z];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function wf(M,F,Z,W,X){F.isScene!==!0&&(F=Vt),tt.resetTextureUnits();let Nt=F.fog,zt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Pt=ht===null?N.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ge.workingColorSpace,Gt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Zt=mt.get(W.envMap||zt,Gt),le=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,fe=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ht=!!Z.morphAttributes.position,be=!!Z.morphAttributes.normal,We=!!Z.morphAttributes.color,Fe=$n;W.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Fe=N.toneMapping);let Ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ln=Ie!==void 0?Ie.length:0,Ot=H.get(W),gn=w.state.lights;if(dt===!0&&(pt===!0||M!==st)){let Ne=M===st&&W.id===Q;qt.setState(W,M,Ne)}let ve=!1;W.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==gn.state.version||Ot.outputColorSpace!==Pt||X.isBatchedMesh&&Ot.batching===!1||!X.isBatchedMesh&&Ot.batching===!0||X.isBatchedMesh&&Ot.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ot.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ot.instancing===!1||!X.isInstancedMesh&&Ot.instancing===!0||X.isSkinnedMesh&&Ot.skinning===!1||!X.isSkinnedMesh&&Ot.skinning===!0||X.isInstancedMesh&&Ot.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ot.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ot.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ot.instancingMorph===!1&&X.morphTexture!==null||Ot.envMap!==Zt||W.fog===!0&&Ot.fog!==Nt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==qt.numPlanes||Ot.numIntersection!==qt.numIntersection)||Ot.vertexAlphas!==le||Ot.vertexTangents!==fe||Ot.morphTargets!==Ht||Ot.morphNormals!==be||Ot.morphColors!==We||Ot.toneMapping!==Fe||Ot.morphTargetsCount!==ln||!!Ot.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Ot.__version=W.version);let Un=Ot.currentProgram;ve===!0&&(Un=Ae(W,F,X),B&&W.isNodeMaterial&&B.onUpdateProgram(W,Un,Ot));let ni=!1,Ti=!1,ms=!1,Ee=Un.getUniforms(),Ge=Ot.uniforms;if(x.useProgram(Un.program)&&(ni=!0,Ti=!0,ms=!0),W.id!==Q&&(Q=W.id,Ti=!0),Ot.needsLights){let Ne=bf(w.state.lightProbeGridArray,X);Ot.lightProbeGrid!==Ne&&(Ot.lightProbeGrid=Ne,Ti=!0)}if(ni||st!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ee.setValue(P,"projectionMatrix",M.projectionMatrix),Ee.setValue(P,"viewMatrix",M.matrixWorldInverse);let Ei=Ee.map.cameraPosition;Ei!==void 0&&Ei.setValue(P,ft.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),st!==M&&(st=M,Ti=!0,ms=!0)}if(Ot.needsLights&&(gn.state.sunShadowMap.length>0&&Ee.setValue(P,"sunShadowMap",gn.state.sunShadowMap,tt),gn.state.directionalShadowMap.length>0&&Ee.setValue(P,"directionalShadowMap",gn.state.directionalShadowMap,tt),gn.state.spotShadowMap.length>0&&Ee.setValue(P,"spotShadowMap",gn.state.spotShadowMap,tt),gn.state.pointShadowMap.length>0&&Ee.setValue(P,"pointShadowMap",gn.state.pointShadowMap,tt)),X.isSkinnedMesh){Ee.setOptional(P,X,"bindMatrix"),Ee.setOptional(P,X,"bindMatrixInverse");let Ne=X.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ee.setValue(P,"boneTexture",Ne.boneTexture,tt))}X.isBatchedMesh&&(Ee.setOptional(P,X,"batchingTexture"),Ee.setValue(P,"batchingTexture",X._matricesTexture,tt),Ee.setOptional(P,X,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",X._indirectTexture,tt),Ee.setOptional(P,X,"batchingColorTexture"),X._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",X._colorsTexture,tt));let Ai=Z.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&O.update(X,Z,Un),(Ti||Ot.receiveShadow!==X.receiveShadow)&&(Ot.receiveShadow=X.receiveShadow,Ee.setValue(P,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Ge.envMapIntensity.value=F.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=P_()),Ti){if(Ee.setValue(P,"toneMappingExposure",N.toneMappingExposure),Ot.needsLights&&Tf(Ge,ms),Nt&&W.fog===!0&&Xt.refreshFogUniforms(Ge,Nt),Xt.refreshMaterialUniforms(Ge,W,ot,K,w.state.transmissionRenderTarget[M.id]),Ot.needsLights&&Ot.lightProbeGrid){let Ne=Ot.lightProbeGrid;Ge.probesSH.value=Ne.texture,Ge.probesMin.value.copy(Ne.boundingBox.min),Ge.probesMax.value.copy(Ne.boundingBox.max),Ge.probesResolution.value.copy(Ne.resolution)}er.upload(P,sn(Ot),Ge,tt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(er.upload(P,sn(Ot),Ge,tt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ee.setValue(P,"center",X.center),Ee.setValue(P,"modelViewMatrix",X.modelViewMatrix),Ee.setValue(P,"normalMatrix",X.normalMatrix),Ee.setValue(P,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Ne=W.uniformsGroups;for(let Ei=0,gs=Ne.length;Ei<gs;Ei++){let Ah=Ne[Ei];ut.update(Ah,Un),ut.bind(Ah,Un)}}return Un}function Tf(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Af(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(M,F,Z){let W=H.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=F,H.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let Z=H.get(M);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,Z=0){ht=M,$=F,J=Z;let W=null,X=!1,Nt=!1;if(M){let Pt=H.get(M);if(Pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(P.FRAMEBUFFER,Pt.__webglFramebuffer),lt.copy(M.viewport),vt.copy(M.scissor),Lt=M.scissorTest,x.viewport(lt),x.scissor(vt),x.setScissorTest(Lt),Q=-1;return}else if(Pt.__webglFramebuffer===void 0)tt.setupRenderTarget(M);else if(Pt.__hasExternalTextures)tt.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let le=M.depthTexture;if(Pt.__boundDepthTexture!==le){if(le!==null&&H.has(le)&&(M.width!==le.image.width||M.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(M)}}let Gt=M.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Nt=!0);let Zt=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?W=Zt[F][Z]:W=Zt[F],X=!0):M.samples>0&&tt.useMultisampledRTT(M)===!1?W=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Zt)?W=Zt[Z]:W=Zt,lt.copy(M.viewport),vt.copy(M.scissor),Lt=M.scissorTest}else lt.copy(Dt).multiplyScalar(ot).floor(),vt.copy(kt).multiplyScalar(ot).floor(),Lt=Jt;if(Z!==0&&(W=G),x.bindFramebuffer(P.FRAMEBUFFER,W)&&x.drawBuffers(M,W),x.viewport(lt),x.scissor(vt),x.setScissorTest(Lt),X){let Pt=H.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pt.__webglTexture,Z)}else if(Nt){let Pt=F;for(let Gt=0;Gt<M.textures.length;Gt++){let Zt=H.get(M.textures[Gt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Gt,Zt.__webglTexture,Z,Pt)}}else if(M!==null&&Z!==0){let Pt=H.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pt.__webglTexture,Z)}Q=-1};function Th(M){let F=H.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=A.textureFormatReadable(M.format),F.__typeReadable=A.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,Z,W,X,Nt,zt,Pt=0){if(!(M&&M.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt){x.bindFramebuffer(P.FRAMEBUFFER,Gt);try{let Zt=M.textures[Pt],le=Zt.format,fe=Zt.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Pt);let Ht=Th(Zt);if(Ht.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-W&&Z>=0&&Z<=M.height-X&&P.readPixels(F,Z,W,X,Et.convert(le),Et.convert(fe),Nt)}finally{let Zt=ht!==null?H.get(ht).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(M,F,Z,W,X,Nt,zt,Pt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt)if(F>=0&&F<=M.width-W&&Z>=0&&Z<=M.height-X){x.bindFramebuffer(P.FRAMEBUFFER,Gt);let Zt=M.textures[Pt],le=Zt.format,fe=Zt.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Pt);let Ht=Th(Zt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.bufferData(P.PIXEL_PACK_BUFFER,Nt.byteLength,P.STREAM_READ),P.readPixels(F,Z,W,X,Et.convert(le),Et.convert(fe),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let We=ht!==null?H.get(ht).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,We);let Fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wu(P,Fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Nt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(be),P.deleteSync(Fe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,Z=0){let W=Math.pow(2,-Z),X=Math.floor(M.image.width*W),Nt=Math.floor(M.image.height*W),zt=F!==null?F.x:0,Pt=F!==null?F.y:0;tt.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,zt,Pt,X,Nt),x.unbindTexture()},this.copyTextureToTexture=function(M,F,Z=null,W=null,X=0,Nt=0){let zt,Pt,Gt,Zt,le,fe,Ht,be,We,Fe=M.isCompressedTexture?M.mipmaps[Nt]:M.image;if(Z!==null)zt=Z.max.x-Z.min.x,Pt=Z.max.y-Z.min.y,Gt=Z.isBox3?Z.max.z-Z.min.z:1,Zt=Z.min.x,le=Z.min.y,fe=Z.isBox3?Z.min.z:0;else{let Ge=Math.pow(2,-X);zt=Math.floor(Fe.width*Ge),Pt=Math.floor(Fe.height*Ge),M.isDataArrayTexture?Gt=Fe.depth:M.isData3DTexture?Gt=Math.floor(Fe.depth*Ge):Gt=1,Zt=0,le=0,fe=0}W!==null?(Ht=W.x,be=W.y,We=W.z):(Ht=0,be=0,We=0);let Ie=Et.convert(F.format),ln=Et.convert(F.type),Ot;F.isData3DTexture?(tt.setTexture3D(F,0),Ot=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(tt.setTexture2DArray(F,0),Ot=P.TEXTURE_2D_ARRAY):(tt.setTexture2D(F,0),Ot=P.TEXTURE_2D),x.activeTexture(P.TEXTURE0),x.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let gn=x.getParameter(P.UNPACK_ROW_LENGTH),ve=x.getParameter(P.UNPACK_IMAGE_HEIGHT),Un=x.getParameter(P.UNPACK_SKIP_PIXELS),ni=x.getParameter(P.UNPACK_SKIP_ROWS),Ti=x.getParameter(P.UNPACK_SKIP_IMAGES);x.pixelStorei(P.UNPACK_ROW_LENGTH,Fe.width),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Fe.height),x.pixelStorei(P.UNPACK_SKIP_PIXELS,Zt),x.pixelStorei(P.UNPACK_SKIP_ROWS,le),x.pixelStorei(P.UNPACK_SKIP_IMAGES,fe);let ms=M.isDataArrayTexture||M.isData3DTexture,Ee=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Ge=H.get(M),Ai=H.get(F),Ne=H.get(Ge.__renderTarget),Ei=H.get(Ai.__renderTarget);x.bindFramebuffer(P.READ_FRAMEBUFFER,Ne.__webglFramebuffer),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let gs=0;gs<Gt;gs++)ms&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(M).__webglTexture,X,fe+gs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(F).__webglTexture,Nt,We+gs)),P.blitFramebuffer(Zt,le,zt,Pt,Ht,be,zt,Pt,P.DEPTH_BUFFER_BIT,P.NEAREST);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||H.has(M)){let Ge=H.get(M),Ai=H.get(F);x.bindFramebuffer(P.READ_FRAMEBUFFER,U),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let Ne=0;Ne<Gt;Ne++)ms?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ge.__webglTexture,X,fe+Ne):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ge.__webglTexture,X),Ee?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ai.__webglTexture,Nt,We+Ne):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ai.__webglTexture,Nt),X!==0?P.blitFramebuffer(Zt,le,zt,Pt,Ht,be,zt,Pt,P.COLOR_BUFFER_BIT,P.NEAREST):Ee?P.copyTexSubImage3D(Ot,Nt,Ht,be,We+Ne,Zt,le,zt,Pt):P.copyTexSubImage2D(Ot,Nt,Ht,be,Zt,le,zt,Pt);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ee?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Ot,Nt,Ht,be,We,zt,Pt,Gt,Ie,ln,Fe.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,Nt,Ht,be,We,zt,Pt,Gt,Ie,Fe.data):P.texSubImage3D(Ot,Nt,Ht,be,We,zt,Pt,Gt,Ie,ln,Fe):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Nt,Ht,be,zt,Pt,Ie,ln,Fe.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Nt,Ht,be,Fe.width,Fe.height,Ie,Fe.data):P.texSubImage2D(P.TEXTURE_2D,Nt,Ht,be,zt,Pt,Ie,ln,Fe);x.pixelStorei(P.UNPACK_ROW_LENGTH,gn),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve),x.pixelStorei(P.UNPACK_SKIP_PIXELS,Un),x.pixelStorei(P.UNPACK_SKIP_ROWS,ni),x.pixelStorei(P.UNPACK_SKIP_IMAGES,Ti),Nt===0&&F.generateMipmaps&&P.generateMipmap(Ot),x.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&tt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?tt.setTextureCube(M,0):M.isData3DTexture?tt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?tt.setTexture2DArray(M,0):tt.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){$=0,J=0,ht=null,x.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var wl=class extends ss{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new yn;t.deleteAttribute("uv");let e=new de({side:Ye}),n=new de,s=new Yr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Tt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Zn(t,n,6),o=new ze;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Tt(t,sr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Tt(t,sr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Tt(t,sr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Tt(t,sr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Tt(t,sr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Tt(t,sr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function sr(i){return new Gr({color:0,emissive:16777215,emissiveIntensity:i})}function Tl(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ce,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Cd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let g=Cd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Cd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new xn(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Ue={hand:'"Caveat", "Comic Sans MS", cursive',marker:'"Permanent Marker", "Impact", sans-serif',chalk:'"Cabin Sketch", "Chalkboard SE", "Comic Sans MS", cursive',type:'"Special Elite", "Courier New", monospace',brush:'"Yuji Syuku", serif',sign:'"Arial Black", "Helvetica Neue", Arial, sans-serif'},Je=(i,t)=>{let e=Object.assign(document.createElement("canvas"),{width:i,height:t});return[e,e.getContext("2d")]};function Ke(i,t=!0){let e=new Rn(i);return e.wrapS=e.wrapT=Di,e.anisotropy=8,t&&(e.colorSpace=rn),e}var jn=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function ca(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n;s=s*s*(3-2*s),r=r*r*(3-2*r);let a=jn(e,n),o=jn(e+1,n),l=jn(e,n+1),c=jn(e+1,n+1);return a+(o-a)*s+(l-a)*r+(a-o-l+c)*s*r}function Rd(i,t,e){let[n,s]=Je(i,t),r=s.createImageData(i,t),a=r.data;for(let o=0,l=0;o<t;o++)for(let c=0;c<i;c++,l+=4){let[h,d,u]=e(c/i,o/t,c,o);a[l]=h,a[l+1]=d,a[l+2]=u,a[l+3]=255}return s.putImageData(r,0,0),[n,s]}function di({planks:i=5,base:t=[120,78,45],spread:e=.16,rings:n=150,joints:s=1.3,seed:r=1,size:a=512,seams:o=!0}={}){return Ke(Rd(a,a,(l,c,h,d)=>{let u=Math.floor(l*i),f=l*i-u,g=c+jn(u,r)*3,v=o&&(g*s+jn(u,r+7))%1<.006,m=ca(f*1.5+u*13,g*2.5)*.22+ca(f*4+u,g*9)*.03,p=Math.sin((f+m)*n),S=ca(f*70+u*7,g*1.2),C=jn(h,Math.floor(d/5))*.05,y=Math.max(0,1-Math.hypot((f-jn(u,r+3))*3,(g*2%1-.5)*1.2)*4)*(jn(u,r+5)>.75),b=(1+(jn(u,r+1)-.5)*2*e)*(.84+.07*p+.1*(S-.5)-C-y*.3);return o&&(f<.012||f>.988||v)&&(b*=.42),t.map(w=>w*b)})[0])}function Id(){return Ke(Rd(512,512,(i,t,e,n)=>{let s=.93+.05*ca(i*9,t*9)+.03*ca(i*40,t*40)+(jn(e,n)-.5)*.03;return[236*s,232*s,222*s]})[0])}function Pd(i,t,e,n){let[s,r]=Je(t,e);r.fillStyle=r.strokeStyle="rgba(240,240,232,.92)",r.lineCap=r.lineJoin="round",n(r),r.globalCompositeOperation="destination-out";for(let a=0;a<t*e/9;a++)r.globalAlpha=Math.random()*.8,r.fillRect(Math.random()*t,Math.random()*e,1+Math.random()*2,1);i.drawImage(s,0,0)}var Si=(i,t,e)=>{i.lineWidth=e,i.beginPath(),t.forEach(([n,s],r)=>i[r?"lineTo":"moveTo"](n+Math.random()*3,s+Math.random()*3)),i.stroke()};function Ld(){let[e,n]=Je(2048,660);n.fillStyle="#18231d",n.fillRect(0,0,2048,660);for(let s=0;s<260;s++)n.strokeStyle=`rgba(200,210,200,${Math.random()*.035})`,n.lineWidth=30+Math.random()*80,n.beginPath(),n.arc(Math.random()*2048,Math.random()*660,60+Math.random()*260,Math.random()*6,Math.random()*6),n.stroke();return Pd(n,2048,660,s=>{s.font=`700 44px ${Ue.chalk}`,s.fillText("Tuesday (again)",60,70),s.font=`700 76px ${Ue.chalk}`,s.fillText("TODAY: STRUCTURAL INTEGRITY",60,165),Si(s,[[60,185],[1060,180]],5),s.font=`700 46px ${Ue.chalk}`,["1. Walls hold up the ceiling.","2. The ceiling holds up the 2nd floor.","3. The 2nd floor holds up the principal.","4. Do you see where this is going, D.B.?"].forEach((l,c)=>s.fillText(l,80,260+c*66)),s.font=`700 36px ${Ue.chalk}`,s.fillText("Pop quiz: how many walls does this room have?",80,560),s.fillText("(answer may change before the bell)",120,604),s.save(),s.translate(1e3,615),s.rotate(-.08),s.font=`28px ${Ue.hand}`,s.fillText("4 for now ;)",0,0),s.restore();let r=1290,a=540;Si(s,[[r,a],[r,a-230],[r+300,a-230],[r+300,a]],6),Si(s,[[r-20,a-225],[r+150,a-330],[r+320,a-225]],6);for(let l=0;l<2;l++)for(let c=0;c<3;c++)s.strokeRect(r+30+c*90,a-200+l*85,50,50);Si(s,[[r+160,a-330],[r+190,a-250],[r+150,a-170],[r+200,a-60],[r+170,a]],4);let o=r+470;s.beginPath(),s.arc(o,a-150,22,0,7),s.stroke(),Si(s,[[o,a-128],[o,a-60],[o-25,a]],5),Si(s,[[o,a-60],[o+25,a]],5),Si(s,[[o,a-110],[o+55,a-90]],5),s.strokeRect(o+50,a-70,70,70),Si(s,[[o+85,a-70],[o+85,a-120]],5),Si(s,[[o+60,a-120],[o+110,a-120]],7);for(let l=0;l<3;l++)s.lineWidth=6,s.beginPath(),s.ellipse(o+30,a-90,150+l*9,130+l*7,l*.2,0,7),s.stroke();s.font=`700 90px ${Ue.chalk}`,s.fillText("NO.",o+150,a-230),s.font=`700 42px ${Ue.chalk}`,s.fillText("DEMOLITION BOY: STAY AFTER CLASS",1170,80),s.strokeRect(1150,30,820,70)}),Ke(e)}function Al(i){let[n,s]=Je(1600,150);return i&&Pd(s,1600,150,r=>{let a=88;do r.font=`700 ${a-=4}px ${Ue.chalk}`;while(r.measureText(i).width>1560);r.fillText(i,20,105)}),n}function El(i,t,e){let n=[];for(let s of t.split(`
`)){let r="";for(let a of s.split(" ")){let o=r?`${r} ${a}`:a;i.measureText(o).width>e&&r?(n.push(r),r=a):r=o}n.push(r)}return n}var L_={yellow:"#f7e26b",pink:"#f6a6c1",blue:"#9fd4f2",green:"#b8e68a",orange:"#f8b26a"};function Cl(i,t="yellow",e=46){let[n,s]=Je(512,512),r=s.createLinearGradient(0,0,0,512);r.addColorStop(0,"rgba(90,70,20,0)"),r.addColorStop(1,"rgba(90,70,20,.2)"),s.fillStyle=L_[t],s.fillRect(0,0,512,512),s.fillStyle=r,s.fillRect(0,0,512,512),s.fillStyle="rgba(0,0,0,.06)",s.fillRect(0,0,512,70),s.fillStyle="#1d2433",s.font=`600 ${e}px ${Ue.hand}`,s.translate(256,0),s.rotate((Math.random()-.5)*.06);let a=El(s,i,440);return a.forEach((o,l)=>{s.textAlign="center",s.fillText(o,0,256-(a.length-1)*e*.55+l*e*1.1+e*.35)}),Ke(n)}function Rl(i,t){let[e,n]=Je(768,1024);return n.fillStyle="#f4efe2",n.fillRect(0,0,768,1024),n.fillStyle="#7a1f1f",n.font=`700 30px ${Ue.sign}`,n.fillText(i,60,90),n.fillRect(60,108,648,4),n.fillStyle="#2a2622",n.font=`27px ${Ue.type}`,El(n,t,640).forEach((s,r)=>n.fillText(s,60,170+r*40)),n.strokeStyle="rgba(120,60,20,.35)",n.lineWidth=7,n.beginPath(),n.arc(560,880,70,0,7),n.stroke(),Ke(e)}function Nd(i,t,e){let[n,s]=Je(256,768);if(s.fillStyle="#3b3328",s.fillRect(0,0,256,768),s.fillStyle="#efe7d3",s.fillRect(18,60,220,640),s.fillStyle="#16120e",s.textAlign="center",e){let a=Math.min(130,520/i.length);s.font=`${a}px ${Ue.brush}`,[...i].forEach((o,l)=>s.fillText(o,128,90+a*.95+l*a*1.02))}s.font=`600 ${e?26:36}px ${Ue.hand}`;let r=El(s,t,190);return r.forEach((a,o)=>s.fillText(a,128,(e?690-(r.length-1)*28:380-r.length*20)+o*(e?28:42))),Ke(n)}function Il(i,t,{bg:e="#f5f2ea",bar:n="#c0262d",ink:s="#1b1b1b",w:r=1024,h:a=512,size:o=70,foot:l=""}={}){let[c,h]=Je(r,a);return h.fillStyle=e,h.fillRect(0,0,r,a),h.fillStyle=n,h.fillRect(0,0,r,a*.26),h.fillStyle="#fff",h.textAlign="center",h.font=`900 ${a*.14}px ${Ue.sign}`,h.fillText(i,r/2,a*.18),h.fillStyle=s,h.font=`900 ${o}px ${Ue.sign}`,El(h,t,r*.86).forEach((d,u)=>h.fillText(d,r/2,a*.45+u*o*1.15)),l&&(h.font=`600 ${a*.08}px ${Ue.hand}`,h.textAlign="right",h.fillText(l,r*.95,a*.93)),Ke(c)}function Dd(i){let[t,e]=Je(512,640);e.fillStyle="#fbfaf4",e.fillRect(0,0,512,640),e.strokeStyle="rgba(70,110,200,.35)",e.lineWidth=2;for(let n=70;n<640;n+=48)e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();return e.strokeStyle="rgba(220,60,60,.4)",e.beginPath(),e.moveTo(60,0),e.lineTo(60,640),e.stroke(),i.forEach((n,s)=>{e.fillStyle=s%2?"#2b3fa0":"#202020",e.font=s%2?`700 40px ${Ue.marker}`:`600 44px ${Ue.hand}`,e.fillText(n,s%2?110:80,112+s*96)}),Ke(t)}function Ud(){let[i,t]=Je(256,128);for(let e of[72,184]){let n=t.createRadialGradient(e,64,0,e,64,46);n.addColorStop(0,"rgba(255,250,170,1)"),n.addColorStop(.35,"rgba(210,240,80,.9)"),n.addColorStop(1,"rgba(120,200,40,0)"),t.fillStyle=n,t.beginPath(),t.ellipse(e,64,46,34,0,0,7),t.fill(),t.fillStyle="#050505",t.beginPath(),t.ellipse(e+4,64,6,24,0,0,7),t.fill()}return Ke(i)}function Fd(i){let[t,e]=Je(128,192);return e.fillStyle="#121212",e.fillRect(0,0,128,192),e.fillStyle="#fafafa",e.textAlign="center",e.font=`900 150px ${Ue.sign}`,e.fillText(i,64,150),e.fillStyle="rgba(0,0,0,.6)",e.fillRect(0,94,128,4),Ke(t)}function Od(){let[i,t]=Je(512,512);t.fillStyle="#f7f5ee",t.beginPath(),t.arc(256,256,250,0,7),t.fill(),t.fillStyle="#222",t.textAlign="center",t.font=`700 52px ${Ue.sign}`;for(let e=1;e<=12;e++){let n=(12-e)/12*Math.PI*2;t.fillText(String(e),256-Math.sin(n)*190,274-Math.cos(n)*190)}return t.font=`500 28px ${Ue.hand}`,t.fillStyle="#b02020",t.fillText("detention ends: never",256,360),Ke(i)}function Bd(){let[i,t]=Je(1024,1024);t.strokeStyle="rgba(40,34,28,.85)",t.lineCap="round";for(let e=0;e<16;e++){let n=512,s=512,r=e/16*Math.PI*2+Math.random()*.3,a=6;t.beginPath(),t.moveTo(n,s);for(let o=0,l=6+Math.random()*8;o<l;o++)r+=(Math.random()-.5)*.9,n+=Math.cos(r)*34,s+=Math.sin(r)*34,t.lineWidth=a*=.86,t.lineTo(n,s);t.stroke()}return Ke(i)}function zd(i=.55){let[t,e]=Je(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(0,0,0,${i})`),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Ke(t)}function kd(){let[i,t]=Je(256,256),e=t.createRadialGradient(128,128,30,128,128,128);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),Ke(i)}function Vd(){let[i,t]=Je(4,128),e=t.createLinearGradient(0,0,0,128);return e.addColorStop(0,"rgba(0,0,0,.5)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,4,128),Ke(i)}function dh(i=""){let[t,e]=Je(512,512);for(let s=0;s<70;s++){let r=Math.random()*Math.PI*2,a=120+Math.random()*130,o=e.createLinearGradient(256,256,256+Math.cos(r)*a,256+Math.sin(r)*a);o.addColorStop(0,"rgba(15,10,6,.5)"),o.addColorStop(1,"rgba(15,10,6,0)"),e.strokeStyle=o,e.lineWidth=10+Math.random()*30,e.beginPath(),e.moveTo(256,256),e.lineTo(256+Math.cos(r)*a,256+Math.sin(r)*a),e.stroke()}let n=e.createRadialGradient(256,256,0,256,256,120);return n.addColorStop(0,"rgba(8,5,3,.95)"),n.addColorStop(.6,"rgba(25,14,6,.7)"),n.addColorStop(1,"rgba(25,14,6,0)"),e.fillStyle=n,e.fillRect(0,0,512,512),i&&(e.font=`700 54px ${Ue.marker}`,e.textAlign="center",e.fillStyle="rgba(255,230,190,.35)",e.fillText(i,258,452),e.fillStyle="rgba(40,22,10,.85)",e.fillText(i,256,450)),Ke(t)}function Gd(){let[i,t]=Je(1024,512),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#b9d3ea"),e.addColorStop(.55,"#eef3f3"),e.addColorStop(1,"#f6f7f0"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.filter="blur(8px)";for(let n=0;n<140;n++){let s=Math.random()*1024,r=330+Math.random()*200,a=25+Math.random()*70;t.fillStyle=`hsla(${80+Math.random()*30}, ${18+Math.random()*20}%, ${58+Math.random()*25}%, .9)`,t.beginPath(),t.arc(s,r-a*.3,a,0,7),t.fill()}return Ke(i)}function Hd(i,t){let[,e]=Je(64,64),n=s=>(e.clearRect(0,0,64,64),e.font=`48px ${t}`,e.fillText(s,4,52),e.getImageData(0,0,64,64).data.join());return n(i[0])!==n("\uFFFF")}var oe=9,Pe=9.6,je=3.3,Pl=new I(-1,.55,.25).normalize(),ps=[-3.15,-1.05,1.05,3.15].map(i=>[i-.85,i+.85]),fn=.9,wn=2.75;function bi(i,t,e,n=1){let s=new yn(i,t,e),r=s.attributes.uv,a=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let o=0;o<24;o++){let[l,c]=a[o>>2];r.setXY(o,r.getX(o)*l/n,r.getY(o)*c/n)}return s}var fs=(i,t,e,n,s=0,r=0,a=0)=>i.applyMatrix4(new ue().compose(new I(t,e,n),new He().setFromEuler(new Cn(s,r,a)),new I(1,1,1)));function Wd(i,{cjk:t}){let e=(q,it,P={})=>new de({map:q,roughness:it,envMapIntensity:.6,...P}),n={floor:e(di({planks:8,base:[96,60,36],rings:90,joints:.7,seed:2}),.38),ceiling:e(di({planks:6,base:[140,90,52],seed:3,spread:.12,joints:0}),.75),beam:e(di({planks:1,base:[104,66,40],seed:4,seams:!1}),.6),wains:e(di({planks:7,base:[86,54,33],seed:5,joints:0}),.5),trim:e(di({planks:1,base:[74,46,28],seed:6,seams:!1}),.5),plaster:e(Id(),.95),desk:e(di({planks:2,base:[128,86,52],seed:7,spread:.06,seams:!1}),.42),chair:e(di({planks:2,base:[104,68,40],seed:8,seams:!1}),.55),metal:new de({color:12170926,roughness:.45,metalness:.3}),dark:new de({color:657414,roughness:1}),glass:new de({color:16777215,roughness:.05,metalness:.9,transparent:!0,opacity:.06,depthWrite:!1}),frosted:new un({color:10135731})},s=(q,it,P,It,Y,A,x,{tile:z=1,parent:H=i,cast:tt=!0,ry:mt=0}={})=>{let gt=new Tt(bi(it,P,It,z),q);return gt.position.set(Y,A,x),gt.rotation.y=mt,gt.castShadow=tt,gt.receiveShadow=!0,gt.userData.bake=H===i,H.add(gt),gt},r=(q,it,P,It,Y,A,{ry:x=0,rx:z=0,rz:H=0,parent:tt=i,lit:mt=!0,blend:gt}={})=>{let et=mt?new de({map:q,roughness:.9,transparent:!0,alphaTest:.02,polygonOffset:!0,polygonOffsetFactor:-2}):new un({map:q,transparent:!0,depthWrite:!1,toneMapped:!1,...gt&&{blending:gt}}),rt=new Tt(new qe(it,P),et);return rt.position.set(It,Y,A),rt.rotation.set(z,x,H,"YXZ"),rt.receiveShadow=mt,tt.add(rt),rt},a=(q,it,P,It,Y,A=0,x=(Math.random()-.5)*.2,z)=>r(Cl(q,it,z),.13,.13,P,It,Y,{ry:A,rz:x}),o=(q,it,P,It,Y,A)=>r(Cl(q,it),.12,.12,P,It,Y,{rx:-Math.PI/2,rz:A});s(n.floor,oe,.1,Pe,0,-.05,0,{tile:1.6}),s(n.floor,6.6,.16,1.5,0,.08,-Pe/2+.75,{tile:1.6}),s(n.ceiling,oe+.6,.1,Pe+.6,0,je+.05,0,{tile:1.2});for(let q=-3;q<=3;q+=1.5)s(n.beam,.12,.17,Pe,q,je-.085,0,{cast:!1});for(let q=-3.2;q<=3.2;q+=1.6)s(n.beam,oe,.17,.12,0,je-.085,q,{cast:!1});for(let q of[-1,1]){let it=q*Pe/2;s(n.plaster,oe,je,.2,0,je/2,it+q*.1,{tile:2}),s(n.wains,oe,.95,.03,0,.475,it-q*.015,{tile:1.2}),s(n.trim,oe,.06,.06,0,.98,it-q*.03),s(n.trim,oe,.05,.04,0,2.38,it-q*.02),s(n.trim,oe,.1,.06,0,je-.05,it-q*.03)}s(n.plaster,.2,je,Pe,oe/2+.1,je/2,0,{tile:2}),s(n.wains,.03,1,Pe,oe/2-.015,.5,0,{tile:1.2}),s(n.trim,.06,.06,Pe,oe/2-.03,1.02,0);for(let q of[-2.4,-.8,.8,2.4]){let it=new Tt(new qe(1.45,1.35),n.frosted);it.position.set(oe/2-.012,1.75,q),it.rotation.y=-Math.PI/2,i.add(it);for(let P of[-.725,0,.725])s(n.trim,.05,1.4,.05,oe/2-.03,1.75,q+P,{cast:!1});for(let P of[1.08,1.75,2.42])s(n.trim,.05,.05,1.45,oe/2-.03,P,q,{cast:!1})}for(let q of[-3.95,3.95]){s(n.chair,.05,2,.92,oe/2-.04,1,q,{tile:.9});let it=new Tt(new qe(.5,.6),n.frosted);it.position.set(oe/2-.068,1.45,q),it.rotation.y=-Math.PI/2,i.add(it),s(n.trim,.07,.08,1,oe/2-.04,2.04,q)}a("Bomb squad: knock twice. Everyone else: run.","orange",oe/2-.07,1.2,3.75,-Math.PI/2);let l=[[-Pe/2,ps[0][0]],...ps.slice(1).map(([q],it)=>[ps[it][1],q]),[ps[3][1],Pe/2]];s(n.plaster,.25,fn,Pe,-oe/2-.125,fn/2,0,{tile:2}),s(n.wains,.03,fn,Pe,-oe/2+.015,fn/2,0,{tile:1.2}),s(n.plaster,.25,je-wn,Pe,-oe/2-.125,(je+wn)/2,0,{tile:2});for(let[q,it]of l)s(n.trim,.3,wn-fn,it-q,-oe/2-.12,(fn+wn)/2,(q+it)/2);s(n.trim,.34,.05,Pe,-oe/2-.05,fn+.02,0),s(n.trim,.3,.08,Pe,-oe/2-.1,wn+.04,0);let c=[];for(let[q,it]of ps){let P=(q+it)/2,It=new Tt(new qe(it-q,wn-fn),n.glass.clone());It.material.opacity=.16,c.push(It),It.position.set(-oe/2-.08,(fn+wn)/2,P),It.rotation.y=Math.PI/2,i.add(It);for(let Y of[-.425,0,.425])s(n.trim,.06,wn-fn,Y?.03:.06,-oe/2-.08,(fn+wn)/2,P+Y);for(let Y=1;Y<4;Y++)s(n.trim,.06,.03,it-q,-oe/2-.08,fn+(wn-fn)*Y/4,P)}a("This window has been tested. From both sides.","blue",-oe/2-.05,1.55,1.4,Math.PI/2),r(Gd(),46,18,-16,5,0,{ry:Math.PI/2,lit:!1});let h=Vd(),d=(q,it,P,It,Y,A,x)=>r(h,q,it,P,It,Y,{rx:A,ry:x,lit:!1});for(let[q,it,P,It]of[[oe,0,-Pe/2,0],[oe,0,Pe/2,Math.PI],[Pe,-oe/2,0,Math.PI/2],[Pe,oe/2,0,-Math.PI/2]]){let Y=new I(0,0,.18).applyAxisAngle(new I(0,1,0),It);d(q,.36,it+Y.x,.003,P+Y.z,-Math.PI/2,It),d(q,.4,it+Y.x*1.1,je-.01,P+Y.z*1.1,Math.PI/2,It+Math.PI)}let u=-Pe/2;s(n.trim,4.24,1.48,.06,0,1.55,u+.03);let f=new Tt(new qe(4,1.29),new de({map:Ld(),roughness:.82,envMapIntensity:.4}));f.position.set(0,1.55,u+.062),f.receiveShadow=!0,i.add(f),s(n.trim,4.1,.035,.11,0,.84,u+.1),[[16184554,-1.2],[15915104,-1.1],[15967160,.9]].forEach(([q,it])=>{let P=new Tt(new Te(.006,.006,.07),new de({color:q,roughness:1}));P.position.set(it,.865,u+.1),P.rotation.z=Math.PI/2+.2,i.add(P)}),s(new de({color:2829107,roughness:.9}),.14,.04,.05,1.5,.877,u+.1);let g=Al(""),v=r(Ke(g),1.68,.1575,1.12,1.885,u+.064,{lit:!0});v.material.alphaTest=0;let m=[["\u58CA\u3059\u306A","Rule 1: No demolishing."],["\u67F1\u306F\u53CB\u9054","The pillar is your friend."],["\u7206\u767A\u7981\u6B62","No explosions. Yes, small ones too."],["\u5ECA\u4E0B\u3092\u8D70\u308B\u306A","No running from the blast radius."]],p=[-3.35,-2.6,2.6,3.35].map((q,it)=>{let P=new _e;P.position.set(q,2.25,u+.04),r(Nd(...m[it],t),.36,1.08,0,-.56,0,{parent:P});for(let It of[-.02,-1.1]){let Y=new Tt(new Te(.012,.012,.42),n.trim);Y.rotation.z=Math.PI/2,Y.position.y=It,Y.position.z=.01,P.add(Y)}return i.add(P),P});r(Il("SAFETY FIRST","DAYS WITHOUT AN EXPLOSION",{size:64,foot:"record: \xBD"}),.84,.42,-1.55,2.68,u+.035);let S=new _e,C=r(Fd("0"),.075,.11,0,0,0,{parent:S});S.position.set(-1.55,2.54,u+.04),i.add(S);let y=new _e;y.position.set(1.55,2.68,u+.04),r(Od(),.36,.36,0,0,.012,{parent:y});let b=new Tt(new Te(.19,.19,.04,40),n.metal);b.rotation.x=Math.PI/2,y.add(b);let w=(q,it,P)=>{let It=new _e,Y=new Tt(new yn(it,q,.004),new de({color:P}));return Y.position.y=q*.4,It.add(Y),It.position.z=.026,y.add(It),It},L={hour:w(.09,.012,1381653),minute:w(.14,.008,1381653),second:w(.15,.003,12591136)};i.add(y),s(new de({color:3815475,roughness:.8}),.34,.22,.12,0,2.7,u+.06),s(n.desk,.95,1.05,.55,0,.16+.525,-3.8,{tile:.9});let _=new _e,E=.16+1.05;_.position.set(.12,E,-3.78),_.rotation.y=-.35,s(new de({color:8002068,roughness:.6}),.18,.13,.13,0,.065,0,{parent:_});for(let q of[-.05,.05])s(new de({color:10132120,roughness:.5}),.03,.135,.14,q,.066,0,{parent:_});let N=new _e,D=new Tt(new Te(.008,.008,.16),n.metal);D.position.y=-.08,N.add(D);let B=new Tt(new Te(.014,.014,.17),new de({color:1710618,roughness:.5}));B.rotation.z=Math.PI/2,N.add(B),N.position.y=.21,_.add(N),r(Cl("CONFISCATED. Do NOT push. \u2014 Mgmt.","pink",40),.09,.09,0,.08,.0665,{parent:_,rz:.12}),i.add(_),r(Rl("TIL FOR\xC6LDRE / TO PARENTS",`K\xE6re for\xE6ldre. Deres s\xF8n har igen spr\xE6ngt kantinen. Vi har derfor ingen kantine. Vi har heller ingen skole, s\xE5 vi skriver dette fra en b\xE5d. B\xE5den er ogs\xE5 v\xE6k nu. Venlig hilsen, Rektor (sv\xF8mmer)

Dear parents: your son has once again blown up the cafeteria. The school is gone. We are writing from a boat. The boat is also gone. Regards, the Principal (swimming).`),.21,.28,-.22,E+.002,-3.75,{rx:-Math.PI/2,rz:.25});let G=Tl([bi(1.2,.035,.46),...[-.56,.56].flatMap(q=>[-.19,.19].map(it=>fs(bi(.04,.68,.04),q,-.357,it))),fs(bi(1.1,.015,.38),0,-.11,0),fs(bi(1.14,.1,.015),0,-.065,-.2)]),U=Tl([fs(bi(.38,.03,.36),0,.42,0),fs(bi(.36,.22,.022),0,.72,.17,-.08),...[-.16,.16].flatMap(q=>[fs(bi(.03,.42,.03),q,.21,-.15),fs(bi(.03,.84,.03),q,.42,.16)])]),k=[];for(let q=0;q<5;q++)for(let it=0;it<3;it++)k.push({x:(it-1)*2.7+(Math.random()-.5)*.1,z:-2.45+q*1.15+(Math.random()-.5)*.08,ry:(Math.random()-.5)*.07,row:q,col:it});let $=.7,J=new Zn(G,n.desk,k.length),ht=new Zn(U,n.chair,k.length*2),Q=new Zn(new qe(1,1),new un({map:zd(.55),transparent:!0,depthWrite:!1}),k.length*3),st=new ue,lt=new He,vt=new Cn,Lt=new I(1,1,1),pe=0,ee=0;k.forEach((q,it)=>{J.setMatrixAt(it,st.compose(new I(q.x,$,q.z),lt.setFromEuler(vt.set(0,q.ry,0)),Lt)),Q.setMatrixAt(ee++,st.compose(new I(q.x,.004,q.z),lt.setFromEuler(vt.set(-Math.PI/2,0,0)),new I(1.6,.8,1)));for(let P of[-.3,.3]){let It=q.row===3&&q.col===0&&P>0,Y=.42+Math.random()*.2,A=new I(q.x+P+(Math.random()-.5)*.08,It?.185:0,q.z+Y+(It?.1:0));ht.setMatrixAt(pe++,st.compose(A,lt.setFromEuler(It?vt.set(Math.PI/2,0,.6,"YXZ"):vt.set(0,(Math.random()-.5)*.35,0)),Lt)),Q.setMatrixAt(ee++,st.compose(new I(A.x,.005,A.z),lt.setFromEuler(vt.set(-Math.PI/2,0,0)),new I(.6,.6,1)))}});for(let q of[J,ht])q.castShadow=q.receiveShadow=!0,i.add(q);i.add(Q);let re=(q,it)=>k.find(P=>P.row===q&&P.col===it),K=$+.019,ot=re(2,0);r(dh("D.B. WAS HERE"),.62,.62,ot.x-.2,K,ot.z,{rx:-Math.PI/2,rz:.4}),o("Science project: 'What if\u2026?' Grade: F. (The F is also on fire.)","yellow",ot.x+.38,K+.001,ot.z+.05,-.3),[[re(4,1),"This desk has been replaced 14 times. It is new. Be gentle.","green"],[re(1,1),"LOST: one (1) eyebrow. Reward: the other one. \u2014 D.B.","yellow"],[re(3,2),"Nothing matters. Except load-bearing walls. Those REALLY matter.","blue"],[re(0,0),"Tip: the fire alarm is NOT a starting pistol.","orange"]].forEach(([q,it,P],It)=>o(it,P,q.x+(It%2?.3:-.3),K+.001,q.z+.04,(Math.random()-.5)*.6));let yt=re(1,2),$t=s(n.dark,1.02,.085,.3,yt.x,$-.067,yt.z-.02,{cast:!1});$t.rotation.y=yt.ry;let Dt=r(Ud(),.15,.075,yt.x+.2,$-.065,yt.z+.135,{lit:!1,blend:Bn});o("Homework. It bites. Do NOT feed it.","pink",yt.x-.25,K+.001,yt.z,.2),r(Dd(["u still got the big one?","under the floor","WHICH floor","ALL OF THEM"]),.2,.25,1.3,.004,1.6,{rx:-Math.PI/2,rz:.7});let kt=Pe/2,Jt=new _e;for(let q=0;q<=18;q++)s(n.chair,.025,1.2,.36,-3.6+q*.4,.6,kt-.18,{parent:Jt,cast:!1});for(let q of[.01,.4,.8,1.2])s(n.chair,7.25,.025,.36,0,q,kt-.18,{parent:Jt,cast:!1});s(n.dark,7.2,1.2,.01,0,.6,kt-.005,{parent:Jt,cast:!1}),i.add(Jt);for(let q=0;q<26;q++){let it=Math.floor(Math.random()*18),P=Math.floor(Math.random()*3),It=.04+Math.random()*.12,Y=.1+Math.random()*.2;s(new de({color:[8007471,3100538,13218426,4156230,14209732,7031434][q%6],roughness:.8}),It,Math.min(Y,.36),.22,-3.4+it*.4+(Math.random()-.5)*.15,P*.4+.025+Math.min(Y,.36)/2,kt-.2,{parent:Jt,cast:!1})}let nt=new Tt(new Sn(.13,24,12,0,Math.PI*2,0,Math.PI/2),new de({color:15909912,roughness:.35}));nt.position.set(-2.2,1.213,kt-.2),nt.scale.y=.85,nt.castShadow=!0;let dt=new Tt(new Te(.16,.16,.012,24),nt.material);dt.position.y=.006,nt.add(dt),i.add(nt),a("Property of D.B. NOT a helmet for indoor use. (It is. That is the problem.)","yellow",-2.2,1.38,kt-.006,Math.PI,.1,36);let pt=[r(Bd(),2.2,2.2,2,2,kt-.004,{ry:Math.PI})];pt.push(r(kd(),1.25,.85,2.03,1.98,kt-.007,{ry:Math.PI,lit:!1,blend:Bn})),pt[1].material.color.set(9071172),pt.push(r(Il("FACILITY MANAGEMENT","THIS IS NOT A HOLE.",{bar:"#1f3d7a",size:92,h:640,foot:"please stop asking"}),1.05,.66,2,2,kt-.012,{ry:Math.PI,rz:-.04})),r(Il("SCIENCE FAIR","2nd PLACE: 'Volcano'",{bar:"#1d7a3a",size:74,foot:"judges were evacuated"}),.5,.25,.4,1.75,kt-.006,{ry:Math.PI,rz:.05});let ct=new Tt(new Te(.075,.075,.5,24),new de({color:11735578,roughness:.35,metalness:.1}));ct.position.set(oe/2-.18,1.25,kt-.6),ct.castShadow=!0,i.add(ct),a("Use BEFORE. Not after.","yellow",oe/2-.01,1.62,kt-.6,-Math.PI/2,-.08);let ft=(q,it)=>{let P=new _e;s(n.metal,1.3,.05,.17,.62,0,0,{parent:P,cast:!1});let It=new de({color:15921902,emissive:16054015,emissiveIntensity:.05,roughness:.3});for(let Y of[-.045,.045]){let A=new Tt(new Te(.016,.016,1.22,12),It);A.rotation.z=Math.PI/2,A.position.set(.62,-.04,Y),P.add(A)}return P.position.set(q-.62,je-.72,it),i.add(P),{g:P,tubes:It}},Ut=(q,it,P)=>{let It=new Tt(new Te(.003,.003,P),n.dark);It.position.set(q,je-P/2,it),i.add(It)};for(let[q,it]of[[-1.8,-1.6],[1.8,-1.6],[-1.8,1.6]])ft(q,it),Ut(q-.55,it,.72),Ut(q+.55,it,.72);let Vt=ft(1.8,1.6);return Ut(1.8-.55,1.6,.72),Vt.g.position.x=1.8-.55,Vt.g.children.forEach(q=>{q.position.x-=.07}),Vt.g.rotation.z=-.62,r(dh(),1.8,1.8,2.3,je-.004,1.5,{rx:Math.PI/2,rz:1.1}),D_(i),{M:n,seats:k,desks:J,chairs:ht,glass:c,board:f,status:v,statusCanvas:g,scrolls:p,flip:S,card:C,hands:L,plunger:_,handle:N,eyes:Dt,lair:yt,crooked:Vt,hat:nt,ext:ct,notAHole:pt}}function D_(i){let t=new Map;for(let e of i.children.filter(n=>n.userData.bake))e.updateMatrixWorld(),t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(e.geometry.applyMatrix4(e.matrixWorld)),i.remove(e);for(let[e,n]of t){let s=new Tt(Tl(n),e);s.castShadow=s.receiveShadow=!0,i.add(s)}}function Xd(i){let t=`
        uniform vec3 sun; uniform vec4 bays[4]; uniform float time; uniform float haze;
        float inBeam(vec3 p) {
            float t = (${(-oe/2).toFixed(2)} - p.x) / sun.x;   // walk back along the light to the window plane
            vec2 q = p.zy + sun.zy * t;
            float m = 0.;
            for (int i = 0; i < 4; i++) {
                vec2 lo = bays[i].xy, hi = bays[i].zw;
                float edge = smoothstep(lo.x, lo.x + .04, q.x) * smoothstep(hi.x, hi.x - .04, q.x) * smoothstep(lo.y, lo.y + .04, q.y) * smoothstep(hi.y, hi.y - .04, q.y);
                vec2 cell = vec2((q.x - lo.x) / ((hi.x - lo.x) * .25), (q.y - lo.y) / ((hi.y - lo.y) * .25));
                vec2 bar = smoothstep(.0, .06, abs(fract(cell) - .0)) * smoothstep(.0, .06, abs(fract(cell) - 1.));
                m += edge * bar.x * bar.y;
            }
            return m * step(0., t) * exp(-t * .12);
        }`,e={sun:{value:Pl},bays:{value:ps.map(([d,u])=>new De(d,fn,u,wn))},time:{value:0},haze:{value:1}},n=[],s=Pl.clone().negate();for(let[d,u]of ps)for(let f=0;f<7;f++){let g=d+(u-d)*(f+.5)/7,v=wn/-s.y+.5,m=(S,C)=>new I(-oe/2,S,g).addScaledVector(s,C),p=[m(fn-.1,0),m(wn+.1,0),m(wn+.1,v),m(fn-.1,v)];[0,1,2,0,2,3].forEach(S=>n.push(...p[S].toArray()))}let r=new Ce;r.setAttribute("position",new ae(n,3));let a=new Tt(r,new en({uniforms:e,transparent:!0,depthWrite:!1,blending:Bn,side:On,vertexShader:"varying vec3 vP; void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`${t} varying vec3 vP;
            void main() {
                float near = smoothstep(.3, 1.2, distance(vP, cameraPosition));
                float m = inBeam(vP) * near * step(0., vP.y);
                gl_FragColor = vec4(vec3(1., .86, .62) * m * .035 * haze, 1.);
            }`}));a.frustumCulled=!1,i.add(a);let o=2600,l=new Float32Array(o*3);for(let d=0;d<o;d++)l.set([(Math.random()-.5)*oe*.95,Math.random()*je*.9,(Math.random()-.5)*Pe*.95],d*3);let c=new Ce;c.setAttribute("position",new ae(l,3));let h=new vi(c,new en({uniforms:e,transparent:!0,depthWrite:!1,blending:Bn,vertexShader:`${t} varying float vB;
            void main() {
                vec3 p = position + vec3(sin(time * .11 + position.y * 3.), sin(time * .07 + position.x * 2.) * .5 - .2, cos(time * .09 + position.z * 3.)) * .25;
                p.y = mod(p.y, ${je.toFixed(1)});
                vB = .06 / haze + inBeam(p) * (.6 + .4 * haze);   // in a thick haze the shadows go dark and the beams go solid
                vec4 mv = modelViewMatrix * vec4(p, 1.);
                gl_PointSize = clamp(5. / -mv.z, 1., 6.);
                gl_Position = projectionMatrix * mv;
            }`,fragmentShader:"varying float vB; void main() { float d = length(gl_PointCoord - .5); gl_FragColor = vec4(vec3(1., .9, .7) * vB * smoothstep(.5, 0., d) * .5, 1.); }"}));return h.frustumCulled=!1,i.add(h),e}var Ln=(i,t=.5,e={})=>new de({color:i,roughness:t,...e}),ha=i=>(i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i),fh=(i,t,e=24)=>new Tt(new Fi(i.map(([n,s])=>new xt(n,s)),e),t);function qd(){let i=new _e;i.add(fh([[0,0],[.05,0],[.065,.12],[.075,.13],[.072,.14],[0,.14]],Ln(11884079,.85)));let t=new Tt(new Te(.062,.062,.01,16),Ln(3810324,1));t.position.y=.13,i.add(t);let e=Ln(4160051,.6);for(let n=0;n<6;n++){let s=new Tt(new as(.018,.16,5),e);s.position.set(Math.cos(n)*.02,.2,Math.sin(n)*.02),s.rotation.set(Math.sin(n*2.3)*.6,0,Math.cos(n*1.7)*.6),i.add(s)}return i.userData.leaves=i.children.slice(2),ha(i)}function ph(i=2838426){let t=new _e,e=Object.assign(document.createElement("canvas"),{width:256,height:128}),n=e.getContext("2d");n.fillStyle="#f4f1ea",n.fillRect(0,0,256,128),n.strokeStyle=`#${i.toString(16).padStart(6,"0")}`,n.lineWidth=5;for(let s=0;s<8;s++)n.beginPath(),n.arc(s*32+16,64,12,0,7),n.stroke();return n.fillStyle=n.strokeStyle,n.fillRect(0,14,256,6),n.fillRect(0,108,256,6),t.add(fh([[0,0],[.045,0],[.07,.07],[.065,.14],[.03,.2],[.032,.24],[0,.24]],Ln(16777215,.2,{map:new Rn(e)}))),ha(t)}function Yd(){let i=new _e,t=Ln(16249834,.25),e=Ln(13117484,.35),n=Ln(14856764,.25,{metalness:.8}),s=new Tt(new Sn(.075,20,14),t);s.scale.set(1,1.15,.85),s.position.y=.085,i.add(s);let r=new _e;r.position.y=.2,i.add(r),r.add(new Tt(new Sn(.065,20,14),t));for(let d of[-1,1]){let u=new Tt(new as(.022,.04,8),t);u.position.set(d*.038,.055,0),u.rotation.z=-d*.35,r.add(u);let f=new Tt(new Sn(.008,8,6),Ln(1118481,.3));f.position.set(d*.024,.008,.058),f.scale.y=.4,r.add(f)}let a=new Tt(new Xs(.045,.008,8,20),e);a.rotation.x=Math.PI/2,a.position.y=.155,i.add(a);let o=new Tt(new Sn(.012,10,8),n);o.position.set(0,.14,.045),i.add(o);let l=new _e;l.position.set(.055,.17,.02),i.add(l);let c=new Tt(new Te(.016,.018,.08,10),t);c.position.y=.04,l.add(c);let h=new Tt(new Te(.03,.03,.008,16),n);return h.rotation.x=Math.PI/2,h.position.set(-.04,.07,.05),i.add(h),i.userData={head:r,paw:l},ha(i)}function Zd(){let i=new _e,t=Ln(15262420,.9),e=Ln(2762274,.6),n=new Tt(new Te(.09,.1,.06,16),t);n.position.y=.03,i.add(n);let s=new Tt(new Sn(.13,20,12,0,Math.PI*2,0,Math.PI/2),t);s.scale.set(1,.6,.6),s.position.y=.06,i.add(s);let r=new _e;r.position.y=.21,i.add(r);let a=new Tt(new Sn(.075,20,14),t);a.scale.set(.9,1.1,.95),r.add(a);let o=new Tt(new as(.014,.04,8),t);o.rotation.x=Math.PI/2,o.position.set(0,0,.075),r.add(o);let l=new Tt(new Te(.008,.008,.07,8),e);l.rotation.z=Math.PI/2,l.position.set(0,-.025,.07),r.add(l);for(let c of[-1,1]){let h=new Tt(new Xs(.018,.003,6,16),e);h.position.set(c*.027,.018,.072),r.add(h)}return i.userData={head:r},ha(i)}function $d(){let i=new _e;i.add(fh([[0,0],[.2,0],[.16,.05],[.08,.2],[.05,.24],[.035,.22],[0,.2]],Ln(9071445,.95)));let t=new Tt(new Te(.04,.03,.01,12),Ln(16734751,.6,{emissive:16726528,emissiveIntensity:.6}));t.position.y=.228,i.add(t);for(let e=0;e<5;e++){let n=new Tt(new Te(.008,.012,.1,6),Ln(14239772,.7)),s=e*1.3;n.position.set(Math.cos(s)*.075,.17,Math.sin(s)*.075),n.rotation.set(Math.sin(s)*.5,0,-Math.cos(s)*.5),i.add(n)}return ha(i)}function Jd(){let i=Object.assign(document.createElement("canvas"),{width:512,height:512}),t=i.getContext("2d");t.beginPath();for(let l=0;l<=40;l++){let c=l/40*Math.PI*2,h=170+Math.sin(l*3.7)*30+Math.random()*40;t.lineTo(256+Math.cos(c)*h,256+Math.sin(c)*h*.85)}let e=t.createRadialGradient(256,256,0,256,256,230);e.addColorStop(0,"#fffdf3"),e.addColorStop(.7,"#f4f1dc"),e.addColorStop(1,"#c9b48d"),t.fillStyle=e,t.fill(),t.lineWidth=18,t.strokeStyle="#6b5a45",t.stroke();let n=new _e;n.add(new Tt(new qe(1.2,1.2),new un({map:new Rn(i),transparent:!0,toneMapped:!1})));let s=Object.assign(document.createElement("canvas"),{width:128,height:128}),r=s.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,235,190,.9)"),a.addColorStop(1,"rgba(255,235,190,0)"),r.fillStyle=a,r.fillRect(0,0,128,128);let o=new Tt(new qe(3.4,3.4),new un({map:new Rn(s),transparent:!0,depthWrite:!1,blending:Bn,toneMapped:!1}));return o.position.z=.02,n.add(o),n.userData={halo:o},n}function Kd(){let i=Object.assign(document.createElement("canvas"),{width:256,height:256}),t=i.getContext("2d"),e=t.createRadialGradient(128,128,10,128,128,110);e.addColorStop(0,"rgba(60,50,40,.85)"),e.addColorStop(.45,"rgba(120,110,95,.55)"),e.addColorStop(.62,"rgba(250,246,236,.7)"),e.addColorStop(1,"rgba(250,246,236,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),t.strokeStyle="rgba(50,42,34,.8)",t.lineCap="round";for(let n=0;n<9;n++){let s=128,r=128,a=Math.random()*7,o=4;t.beginPath(),t.moveTo(s,r);for(let l=0;l<6;l++)a+=Math.random()-.5,s+=Math.cos(a)*18,r+=Math.sin(a)*18,t.lineWidth=o*=.8,t.lineTo(s,r);t.stroke()}return new Rn(i)}function jd(){let i=Object.assign(document.createElement("canvas"),{width:64,height:64}),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.4)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Rn(i)}var mh=(i,t)=>{let e=Object.assign(document.createElement("canvas"),{width:i,height:t});return[e,e.getContext("2d")]},gh=(i,t=!0)=>{let e=new Rn(i);return e.anisotropy=8,t&&(e.colorSpace=rn),e};function Qd(i,t,e,n=0){let s=new Fi(i.map(([c,h])=>new xt(c,-h)),14),r=s.attributes.position,a=Math.abs(i.at(-1)[1]-i[0][1]);for(let c=0;c<r.count;c++){let h=(r.getY(c)+i[0][1])/a;r.setX(c,r.getX(c)+Math.sin(h*Math.PI)*n)}s.rotateX(-Math.PI/2),s.computeVertexNormals();let o=di({planks:1,base:t,seed:e,rings:70,seams:!1,size:256});o.repeat.set(.15,a);let l=new Tt(s,new de({map:o,roughness:.48,envMapIntensity:.6}));return l.castShadow=!0,l}function tf(i,t){let[e,n]=mh(512,512),[s,r]=mh(512,512),[a,o,l,c]=i;t(n,r,(f,g)=>[(f-a)/(l-a)*512,(1-(g-o)/(c-o))*512],512/(l-a));let d=gh(e),u=gh(s,!1);for(let f of[d,u])f.wrapS=f.wrapT=Di,f.repeat.set(1/(l-a),1/(c-o)),f.offset.set(-a/(l-a),-o/(c-o));return new de({map:d,roughnessMap:u,metalnessMap:u,roughness:1,metalness:1,envMapIntensity:1.1})}function F_(i,t,e,n=[44,44,46]){i.fillStyle=`rgb(${n})`,i.fillRect(0,0,t,e);for(let s=0;s<900;s++){let r=Math.random()*30-15;i.fillStyle=`rgba(${n.map(a=>a+r)},.5)`,i.beginPath(),i.arc(Math.random()*t,Math.random()*e,2+Math.random()*10,0,7),i.fill()}}function ef(){let i=new _e;i.add(Qd([[0,.085],[.017,.085],[.021,.07],[.016,.03],[.015,-.2],[.0145,-.44],[.016,-.54],[.014,-.545],[0,-.545]],[214,166,108],21,.012));let t=new Hs;t.moveTo(-.032,-.036),t.lineTo(.032,-.036),t.lineTo(.03,.02),t.quadraticCurveTo(.036,.07,.072,.118),t.quadraticCurveTo(.002,.162,-.078,.122),t.quadraticCurveTo(-.046,.07,-.03,.02),t.lineTo(-.032,-.036);let e=.026,n=new kr(t,{depth:e,bevelEnabled:!0,bevelThickness:.003,bevelSize:.0025,bevelSegments:2,curveSegments:18});n.translate(0,0,-e/2);let s=n.attributes.position;for(let l=0;l<s.count;l++){let c=s.getY(l),h=Math.min(1,Math.max(0,(c-.02)/.13));s.setZ(l,s.getZ(l)*(1-.9*h*h*(3-2*h)))}n.applyMatrix4(new ue().makeBasis(new I(0,0,-1),new I(0,-1,0),new I(-1,0,0))),n.computeVertexNormals();let r=tf([-.1,-.06,.1,.18],(l,c,h,d)=>{l.fillStyle="#7a1610",l.fillRect(0,0,512,512);for(let m=0;m<300;m++)l.fillStyle=`rgba(40,8,5,${Math.random()*.25})`,l.beginPath(),l.arc(Math.random()*512,Math.random()*512,Math.random()*6,0,7),l.fill();c.fillStyle="rgb(0,110,0)",c.fillRect(0,0,512,512);let[,u]=h(0,.088),f=(m,p)=>{m.fillStyle=p,m.beginPath(),m.moveTo(0,u);for(let S=0;S<=512;S+=16)m.lineTo(S,u+Math.sin(S*.05)*6+Math.random()*3);m.lineTo(512,0),m.lineTo(0,0),m.fill()};f(l,"#c9ccd0"),f(c,"rgb(0,60,255)");for(let m=0;m<140;m++){let p=Math.random()*512,S=u-10-Math.random()*200;l.strokeStyle=`rgba(255,255,255,${Math.random()*.35})`,l.lineWidth=1,l.beginPath(),l.moveTo(p,S),l.lineTo(p+30+Math.random()*40,S+4),l.stroke()}let[g,v]=h(0,.035);l.strokeStyle="rgba(30,8,6,.8)",l.lineWidth=.002*d,l.beginPath(),l.arc(g,v,.009*d,0,7),l.stroke(),l.beginPath(),l.moveTo(g-.005*d,v),l.lineTo(g+.005*d,v),l.moveTo(g,v-.005*d),l.lineTo(g,v+.005*d),l.stroke(),l.strokeStyle="rgba(20,6,4,.5)",l.lineWidth=3;for(let m=0;m<12;m++){let[p,S]=h((Math.random()-.5)*.06,-.03+Math.random()*.01);l.beginPath(),l.arc(p,S,2+Math.random()*5,0,7),l.fillStyle="#5a5a5c",l.fill()}}),a=new Tt(n,r);a.position.z=-.5,a.castShadow=!0,i.add(a);let o=new Tt(new Te(.0015,.0015,.03,4),new de({color:3815994,metalness:.9,roughness:.4}));return o.rotation.x=Math.PI/2,o.position.set(0,.0385,-.5),i.add(o),i.userData={tip:new I(0,-.13,-.5),band:sf(i,.0175,-.075)},i}function nf(){let i=new _e;i.add(Qd([[0,.07],[.018,.07],[.021,.055],[.018,0],[.016,-.25],[.0155,-.375],[0,-.375]],[226,190,140],22));let t=.034,e=.18,n=tf([-.12,-.12,.12,.12],(c,h)=>{F_(c,512,512,[86,88,92]),h.fillStyle="rgb(0,120,230)",h.fillRect(0,0,512,512);for(let d=0;d<260;d++)h.fillStyle=`rgba(0,${80+Math.random()*100},230,.6)`,h.beginPath(),h.arc(Math.random()*512,Math.random()*512,3+Math.random()*12,0,7),h.fill()}),s=new Tt(new Fi([[0,-e/2],[t*.82,-e/2],[t,-e/2+.008],[t*.97,0],[t,e/2-.008],[t*.82,e/2],[0,e/2]].map(([c,h])=>new xt(c,h)),8),n);s.position.z=-.355,s.castShadow=!0,i.add(s);let r=new de({color:14277855,metalness:1,roughness:.16});for(let c of[-e/2-5e-4,e/2+5e-4]){let h=new Tt(new Te(t*.8,t*.8,.001,8),r);h.position.set(0,c,-.355),i.add(h)}let a=new de({color:1315860,metalness:.6,roughness:.6});for(let c of[-e/2+.024,e/2-.024]){let h=new Tt(new Te(t*1.004,t*1.004,.003,8,1,!0),a);h.position.set(0,c,-.355),i.add(h)}let o=new de({color:12567495,metalness:1,roughness:.25});for(let c of[-e/2+.004,e/2-.004]){let h=new Tt(new Te(t*.93,t*.93,.0075,8,1,!0),o);h.position.set(0,c,-.355),i.add(h)}let l=new Tt(new Te(.0205,.0205,.012,14,1,!0),new de({color:11570519,metalness:.9,roughness:.35}));return l.rotation.x=Math.PI/2,l.position.z=-.318,i.add(l),i.userData={tip:new I(0,-e/2-.005,-.355),band:sf(i,.0185,-.07)},i}function sf(i,t,e){let[n,s]=mh(512,96),r=gh(n),a=new Tt(new Te(t,t,.04,20,1,!0),new de({map:r,roughness:.85}));return a.rotation.x=Math.PI/2,a.position.z=e,i.add(a),(o,l)=>{s.fillStyle=l?"#f2c418":"#e6dcc0",s.fillRect(0,0,512,96),s.fillStyle="rgba(120,100,60,.25)",s.fillRect(0,0,512,6),s.fillRect(0,90,512,6),s.fillStyle=l?"#b3121a":"#1d2433",s.font=`72px ${Ue.marker}`,s.textAlign="center";for(let c of[128,384])s.fillText(o,c,76);r.needsUpdate=!0}}var O_=90,rf=.5,B_={axe:{wood:1,drywall:1,glass:.45,ceramic:.45,plaster:.5,metal:.15,slate:.1},hammer:{wood:.5,drywall:.6,glass:1,ceramic:1,plaster:1,metal:.15,slate:.1}},z_=["wood","glass","ceramic","plaster","drywall","metal"],af={glass:"GLASS PREFERS A HAMMER. SO DO I.",ceramic:"POTTERY WANTS THE HAMMER.",plaster:"PLASTER WANTS THE HAMMER. TRUST ME.",wood:"WOOD WANTS THE AXE.",drywall:"DRYWALL WANTS THE AXE."},k_={desk:["THAT DESK WAS NEW.","IT WAS REPLACED 14 TIMES. NOW 15.","SPLINTERS. EVERYWHERE."],chair:["SIT DOWN. OH.","THAT CHAIR HAD A FAMILY."],window:["THAT WINDOW HAS NOW BEEN TESTED. FROM BOTH SIDES.","FRESH AIR!","VENTILATION: IMPROVED."],pot:["THE PLANT IS FINE. THE PLANT IS NOT FINE.","IT WAS A CACTUS. EMOTIONALLY."],vase:["A VASE. FROM A TRIP. NOBODY REMEMBERS THE TRIP.","MING DYNASTY. (IT WAS NOT.)"],cat:["THERE GOES OUR LUCK."],bust:["THE PRINCIPAL WILL HEAR ABOUT THIS. HE IS IN PIECES."],volcano:["STILL 2ND PLACE."],drywall:["OK. IT WAS A HOLE."],ext:["USE BEFORE. NOT AFTER."]},of={wall:"WALLS HOLD UP THE CEILING. REMEMBER?",board:"NO.",hat:"IT IS A HELMET. THAT IS THE PROBLEM."},lf=["NO.","STILL NO.","I AM SLATE. YOU ARE NOT.","THE BOARD IS NOT PART OF THE LESSON.","DETENTION."];function cf({scene:i,renderer:t,rig:e,camera:n,room:s,audio:r,say:a,flip:o}){let l=[{name:"axe",mesh:ef()},{name:"hammer",mesh:nf()}],c=[0,1].map(T=>t.xr.getControllerGrip(T)),h=[0,1].map(()=>{let T=new _e;return T.matrixAutoUpdate=!1,T.visible=!1,e.add(T),T});function d(){let T=t.xr.getSession(),V=t.xr.getFrame(),j=t.xr.getReferenceSpace();h.forEach((R,Mt)=>{let bt=T?.inputSources[Mt],Wt=!c[Mt].visible&&bt?.gripSpace&&V&&j?V.getPose(bt.gripSpace,j):null;c[Mt].visible?R.matrix.copy(c[Mt].matrix):Wt&&R.matrix.fromArray(Wt.transform.matrix),R.visible=c[Mt].visible||!!Wt,R.matrixWorldNeedsUpdate=!0})}for(let T of l)T.prev=null,T.vel=new I,T.mesh.visible=!1,T.mesh.traverse(V=>{V.material?.metalness>0&&(V.material.envMap=i.environment,V.material.envMapIntensity=.9)});let u={tool:0,hand:null},f=()=>Math.max(0,[...t.xr.getSession()?.inputSources??[]].findIndex(T=>T.handedness==="right"));function g(T,V=u.hand??f()){if(l.some(R=>R.lodged))return;for(let R of l)R.mesh.removeFromParent();let j=l[T];j.grip=h[V],j.hand=V,j.grip.add(j.mesh),j.mesh.position.set(0,0,0),j.mesh.quaternion.identity(),j.mesh.rotation.x=rf,j.prev=null,j.vel.set(0,0,0),j.follow=null,j.settle=performance.now()/1e3+.3,u.tool=T,u.hand=V,Y.phase!=="intro"&&(Ut.swap(),A(V,.4,30),z(.25,R=>j.mesh.scale.setScalar(.5+.5*R+Math.sin(R*Math.PI)*.12)))}let v=T=>{Y.phase!=="intro"&&g(1-u.tool,T)};[0,1].forEach(T=>{let V=t.xr.getController(T);V.addEventListener("select",()=>v(T)),V.addEventListener("squeezestart",()=>v(T))});let m=()=>l[u.tool],p=4.8,S=1.2125,C=(T,V,j,R,Mt=0)=>(T.position.set(V,j,R),T.rotation.y=Mt,i.add(T),T),y=[...[-2.1,0,2.1].map(T=>({kind:"pot",material:"ceramic",hp:.35,object:C(qd(),-4.42,.945,T),half:[.09,.14,.09],up:.12,value:350,colors:[11884079,10110502,3810324]})),{kind:"vase",material:"ceramic",hp:.3,object:C(ph(),-3,S,p-.2),half:[.09,.14,.09],up:.12,value:400,colors:[16052714,2838426]},{kind:"vase",material:"ceramic",hp:.3,object:C(ph(10103595),3.15,S,p-.2),half:[.09,.14,.09],up:.12,value:400,colors:[16052714,10103595]},{kind:"cat",material:"ceramic",hp:.3,object:C(Yd(),1.2,S,p-.22,Math.PI),half:[.1,.15,.1],up:.14,value:900,colors:[16249834,13117484,14856764]},{kind:"bust",material:"plaster",hp:.9,object:C(Zd(),-.9,S,p-.2,Math.PI),half:[.14,.17,.12],up:.16,value:1200,colors:[15262420,14012095]},{kind:"volcano",material:"plaster",hp:.7,object:C($d(),.4,S,p-.22),half:[.2,.13,.2],up:.12,value:800,colors:[9071445,14239772]}],b=[],w=new ue,L=new ue().makeScale(0,0,0);for(let T of y)b.push({...T,center:T.object.position.clone().setY(T.object.position.y+T.up),half:new I(...T.half)});b.push({kind:"drywall",material:"drywall",hp:1.1,center:new I(2,2,p-.06),half:new I(.55,.36,.12),value:1500,colors:[15921128,14275524,2047354]}),s.glass.forEach(T=>b.push({kind:"window",material:"glass",hp:.2,pane:T,center:T.position.clone().setX(T.position.x+.1),half:new I(.25,.95,.85),value:600,colors:[14676991]})),s.seats.forEach((T,V)=>b.push({kind:"desk",material:"wood",hp:1.4,mesh:s.desks,index:V,center:new I(T.x,.55,T.z),half:new I(.62,.25,.26),value:400,colors:[10119742,8410415]}));for(let T=0;T<s.chairs.count;T++){s.chairs.getMatrixAt(T,w);let V=new I().setFromMatrixPosition(w);b.push({kind:"chair",material:"wood",hp:.7,mesh:s.chairs,index:T,center:new I(V.x,.45,V.z),half:new I(.22,.45,.22),value:150,colors:[8345138,7030055]})}b.push({kind:"ext",material:"metal",hp:.25,center:s.ext.position.clone(),half:new I(.11,.28,.11),value:700,colors:[11735578]}),b.push({kind:"hat",material:"metal",hp:1/0,center:s.hat.position.clone().setY(s.hat.position.y+.06),half:new I(.17,.12,.17)}),b.push({kind:"board",material:"slate",hp:1/0,center:new I(0,1.55,-4.74),half:new I(2.05,.68,.12)});for(let[T,V,j,R]of[[0,p,4.5,-1],[-3.35,-p,1.15,1],[3.35,-p,1.15,1]])b.push({kind:"wall",material:"plaster",hp:1/0,center:new I(T,2.25,V),half:new I(j,1.05,.14),normal:new I(0,0,R)});for(let T of b)T.max=T.hp,T.mesh&&(T.mesh.getMatrixAt(T.index,w),T.matrix=w.clone());let _=C(Jd(),2,2,p-.008,Math.PI);_.visible=!1;let E=new Tt(new qe(2.6,3.4),_.userData.halo.material.clone());E.material.opacity=0,E.material.color.set(16756848),E.rotation.x=-Math.PI/2,E.position.set(2,.008,p-1.7),i.add(E);let N=s.notAHole[2].position.clone(),D=s.notAHole[2].rotation.clone(),B=s.ext.rotation.clone(),G=s.hat.position.clone(),U=600,k=(T,V={})=>new de({color:16777215,roughness:T,...V}),$={wood:ht(new yn(1,1,1),k(.65)),glass:ht(new yn(1,1,1),k(.04,{metalness:.9,transparent:!0,opacity:.75})),shard:ht(new yn(1,1,1),k(.3)),lump:ht(new Vr(.5,0),k(.95,{flatShading:!0}))},J={wood:"wood",glass:"glass",ceramic:"shard",drywall:"shard",plaster:"lump",metal:"shard"};function ht(T,V){let j=new Zn(T,V,U);j.castShadow=!0,j.frustumCulled=!1;for(let R=0;R<U;R++)j.setMatrixAt(R,L),j.setColorAt(R,new ne(16777215));return i.add(j),{mesh:j,next:0,parts:Array.from({length:U},()=>({alive:!1,p:new I,v:new I,q:new He,w:new I,s:new I}))}}let Q=new He,st=new ze,lt=new ne,vt=()=>Math.random()-.5;function Lt(T,V,j,R,Mt,bt,Wt=[16777215],Yt=bt?.4:.06){let Qt=J[T],ye=$[Qt];for(let ke=0;ke<R;ke++){let me=ye.next,xe=ye.parts[me];ye.next=(ye.next+1)%U,xe.alive=!0,xe.rest=0,xe.material=T,xe.p.copy(V).add(new I(vt(),vt(),vt()).multiplyScalar(Yt)),xe.v.copy(j).multiplyScalar(Mt*(.4+Math.random())).add(new I(vt()*2,Math.random()*2,vt()*2).multiplyScalar(.5+Mt*.35)),xe.w.set(vt(),vt(),vt()).multiplyScalar(T==="plaster"?10:22),xe.q.random();let Ae=Math.random();T==="wood"?xe.s.set(.015+Ae*(bt?.45:.025),.015+Math.random()*.02,bt?.05+Math.random()*.12:.08+Math.random()*.1):T==="glass"?xe.s.set(.03+Ae*.13,.003,.03+Math.random()*.16):T==="ceramic"?xe.s.set(.015+Ae*.05,.006,.015+Math.random()*.05):T==="drywall"?xe.s.set(.04+Ae*(bt?.2:.06),.013,.04+Math.random()*(bt?.18:.05)):T==="plaster"?xe.s.setScalar(.015+Ae*Ae*(bt?.11:.04)):xe.s.set(.01,.01,.01),ye.mesh.setColorAt(me,lt.set(Wt[ke%Wt.length]).offsetHSL(0,0,vt()*.08))}ye.mesh.instanceColor.needsUpdate=!0}function pe(T,V){let j=new Ce,R=new Float32Array(T*3),Mt=new Float32Array(T*3),bt=new Float32Array(T),Wt=new Float32Array(T);j.setAttribute("position",new ae(R,3)),j.setAttribute("color",new ae(Mt,3)),j.setAttribute("alpha",new ae(bt,1)),j.setAttribute("size",new ae(Wt,1));let Yt=new vi(j,new en({uniforms:{map:{value:jd()},scale:{value:900}},transparent:!0,depthWrite:!1,blending:V,vertexColors:!0,vertexShader:"attribute float alpha; attribute float size; uniform float scale; varying float vA; varying vec3 vC; void main() { vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying float vA; varying vec3 vC; void main() { gl_FragColor = vec4(vC, vA * texture2D(map, gl_PointCoord).a); }"}));return Yt.frustumCulled=!1,i.add(Yt),{g:j,pos:R,col:Mt,a:bt,size:Wt,n:T,next:0,vel:new Float32Array(T*3),life:new Float32Array(T),max:new Float32Array(T),grow:new Float32Array(T),peak:new Float32Array(T),drag:new Float32Array(T)}}let ee=pe(900,Vi),re=pe(300,Bn);function K(T,V,j,{color:R=14209732,spread:Mt=.1,speed:bt=.4,size:Wt=.12,life:Yt=2.5,up:Qt=.2,grow:ye=.5,alpha:ke=.45,dir:me=null,drag:xe=1.6}){for(let Ae=0;Ae<j;Ae++){let sn=T.next;T.next=(T.next+1)%T.n,T.pos.set([V.x+vt()*Mt,V.y+vt()*Mt,V.z+vt()*Mt],sn*3);let cr=new I(vt(),vt()+Qt,vt()).normalize().multiplyScalar(bt*(.3+Math.random()));me&&cr.addScaledVector(me,bt*(.5+Math.random())),T.vel.set(cr.toArray(),sn*3),T.col.set(lt.set(R).offsetHSL(0,0,vt()*.06).toArray(),sn*3),T.life[sn]=T.max[sn]=Yt*(.6+Math.random()*.6),T.size[sn]=Wt*(.5+Math.random()),T.grow[sn]=ye,T.peak[sn]=ke,T.drag[sn]=xe}}function ot(T,V,j){for(let R=0;R<T.n;R++){if(T.life[R]<=0){T.a[R]=0;continue}T.life[R]-=V;let Mt=R*3,bt=T.life[R]/T.max[R],Wt=Math.exp(-V*T.drag[R]);T.vel[Mt]*=Wt,T.vel[Mt+2]*=Wt,T.vel[Mt+1]=T.vel[Mt+1]*Wt-j*V,T.pos[Mt]+=T.vel[Mt]*V,T.pos[Mt+1]=Math.max(.02,T.pos[Mt+1]+T.vel[Mt+1]*V),T.pos[Mt+2]+=T.vel[Mt+2]*V,T.size[R]*=1+T.grow[R]*V,T.a[R]=T.peak[R]*Math.min(1,(1-bt)*8)*bt}for(let R of["position","color","alpha","size"])T.g.attributes[R].needsUpdate=!0}let yt=new de({map:Kd(),transparent:!0,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),$t=Array.from({length:40},()=>{let T=new Tt(new qe(1,1),yt);return T.visible=!1,T.receiveShadow=!0,i.add(T),T}),Dt=0;function kt(T,V,j){let R=$t[Dt++%$t.length];R.visible=!0,R.position.copy(T).setZ(V.z>0?-p+.006:p-.006),R.rotation.set(0,V.z>0?0:Math.PI,Math.random()*6),R.scale.setScalar(.12+j*.22)}let Jt=()=>r()?.ctx,nt=null,dt=null,pt=T=>(dt||(dt=new DynamicsCompressorNode(T,{threshold:-14,knee:8,ratio:6,attack:.003,release:.2}),dt.connect(T.destination)),dt);function ct(T,{dur:V,type:j,freq:R,to:Mt=R,gain:bt,q:Wt=1,delay:Yt=0}){if(!nt){nt=T.createBuffer(1,T.sampleRate,T.sampleRate);let xe=nt.getChannelData(0);for(let Ae=0;Ae<xe.length;Ae++)xe[Ae]=Math.random()*2-1}let Qt=T.currentTime+Yt,ye=new AudioBufferSourceNode(T,{buffer:nt,loop:!0}),ke=new BiquadFilterNode(T,{type:j,frequency:R,Q:Wt}),me=new GainNode(T,{gain:bt});ke.frequency.exponentialRampToValueAtTime(Mt,Qt+V),me.gain.setValueAtTime(bt,Qt),me.gain.exponentialRampToValueAtTime(1e-4,Qt+V),ye.connect(ke).connect(me).connect(pt(T)),ye.start(Qt,Math.random()*.5),ye.stop(Qt+V+.05)}function ft(T,V,j,R,Mt=0,bt="sine",Wt=V){let Yt=T.currentTime+Mt,Qt=new OscillatorNode(T,{type:bt,frequency:V}),ye=new GainNode(T,{gain:R});Wt!==V&&Qt.frequency.exponentialRampToValueAtTime(Wt,Yt+j),ye.gain.setValueAtTime(R,Yt),ye.gain.exponentialRampToValueAtTime(1e-4,Yt+j),Qt.connect(ye).connect(pt(T)),Qt.start(Yt),Qt.stop(Yt+j+.05)}let Ut={wood(T,V){let j=Jt();if(j){ft(j,150+Math.random()*40,.18,.5*T);for(let R=0;R<(V?12:3);R++)ct(j,{dur:.05,type:"bandpass",freq:700+Math.random()*1600,gain:.5*T,q:3,delay:Math.random()*(V?.3:.05)});V&&ct(j,{dur:.6,type:"lowpass",freq:900,to:120,gain:.6})}},glass(T,V){let j=Jt();if(j){ct(j,{dur:V?.5:.12,type:"highpass",freq:4e3,gain:.5*T});for(let R=0;R<(V?12:3);R++)ft(j,2200+Math.random()*4800,.25+Math.random()*.5,.08,Math.random()*(V?.5:.05))}},ceramic(T,V){let j=Jt();if(j&&(ct(j,{dur:.08,type:"bandpass",freq:3200,gain:.55*T,q:2}),ft(j,1800+Math.random()*600,.12,.18*T,0,"triangle"),V))for(let R=0;R<16;R++)ft(j,3500+Math.random()*5e3,.06+Math.random()*.1,.06,Math.random()*.35)},plaster(T,V){let j=Jt();if(j){ft(j,75,.25,.7*T,0,"sine",50),ct(j,{dur:.3,type:"lowpass",freq:500,to:150,gain:.6*T});for(let R=0;R<(V?10:3);R++)ct(j,{dur:.06,type:"lowpass",freq:900+Math.random()*600,gain:.2,delay:.05+Math.random()*(V?.7:.25)})}},drywall(T,V){let j=Jt();if(j&&(ft(j,95,.2,.6*T,0,"sine",70),ct(j,{dur:.14,type:"bandpass",freq:1500,to:900,gain:.6*T,q:1.5}),V)){ct(j,{dur:1.2,type:"lowpass",freq:700,to:100,gain:.7});for(let R=0;R<8;R++)ct(j,{dur:.08,type:"bandpass",freq:1200+Math.random()*800,gain:.3,delay:Math.random()*.5})}},metal(T){let V=Jt();if(!V)return;let j=380+Math.random()*80;[1,2.76,5.4,8.93].forEach((R,Mt)=>ft(V,j*R,.9/(Mt+1),.22*T/(Mt+1))),ct(V,{dur:.04,type:"highpass",freq:3e3,gain:.4*T})},slate(T){let V=Jt();V&&(ft(V,110,.15,.6*T),ct(V,{dur:.25,type:"lowpass",freq:400,gain:.3*T}))},bonk(){let T=Jt();T&&(ft(T,700,.18,.35,0,"sine",180),ft(T,160,.6,.2,.05,"triangle",240))},squeak(){let T=Jt();T&&ft(T,1300,.12,.08,0,"sine",2100)},powder(){let T=Jt();T&&(ct(T,{dur:2.6,type:"bandpass",freq:2500,to:1200,gain:.45,q:.8}),ft(T,90,.4,.4,0,"sine",40))},erupt(){let T=Jt();if(T){for(let V=0;V<10;V++)ft(T,120+Math.random()*200,.15,.2,V*.08+Math.random()*.04,"sine",400);ct(T,{dur:1.2,type:"lowpass",freq:600,gain:.3})}},lodge(){let T=Jt();if(!T)return;ft(T,115,.35,.7),ct(T,{dur:.12,type:"bandpass",freq:500,gain:.6,q:2});let V=T.currentTime,j=new OscillatorNode(T,{type:"sawtooth",frequency:105}),R=new OscillatorNode(T,{frequency:9}),Mt=new GainNode(T,{gain:12}),bt=new BiquadFilterNode(T,{type:"lowpass",frequency:700}),Wt=new GainNode(T,{gain:.16});Wt.gain.setValueAtTime(.16,V),Wt.gain.exponentialRampToValueAtTime(1e-4,V+.7),R.connect(Mt).connect(j.frequency),j.connect(bt).connect(Wt).connect(pt(T)),j.start(V),R.start(V),j.stop(V+.75),R.stop(V+.75)},yank(){let T=Jt();T&&(ct(T,{dur:.22,type:"bandpass",freq:1400,to:380,gain:.5,q:4}),ft(T,260,.12,.4,.15))},glance(){let T=Jt();T&&ct(T,{dur:.18,type:"bandpass",freq:2600,to:1500,gain:.3,q:6})},tink(T){let V=Jt();V&&ft(V,(T==="glass"?3e3:2200)+Math.random()*4e3,.1,.025)},swap(){let T=Jt();T&&(ct(T,{dur:.16,type:"bandpass",freq:800,to:2400,gain:.25,q:2}),ft(T,420,.08,.15,.12,"triangle"))},bell(T){let V=Jt();V&&T.forEach((j,R)=>{ft(V,j,1.6,.25,R*.55),ft(V,j*2.76,.8,.05,R*.55)})}},Vt=[329.6,261.6,293.7,196],q=(T,V)=>{for(let j of l)j.mesh.userData.band(T,V)};q("1:30");let it=new Tt(new qe(.42,.56),new un({transparent:!0,opacity:0,side:2,toneMapped:!1}));it.visible=!1,i.add(it);function P(T,V,j){let R=Y.hits?Math.round(Y.right/Y.hits*100):0,Mt=T>3e4?"Your child has demolished the classroom, the corridor and, we suspect, the concept of school.":T>15e3?"Shows real promise. The school does not.":T>5e3?"Tries hard. Breaks things. Could break more things.":"Your child was gentle with the furniture. We are worried.";it.material.map?.dispose(),it.material.map=Rl("REPORT CARD: DEMOLITION",`Score: ${T}
Materials broken: ${V} of 6
Things destroyed: ${Y.broken}
Right tool for the job: ${R}%
Follow-through: ${Y.followThroughs} swings
Best combo: x${Y.bestCombo}

GRADE: ${j.split(".")[0]}

Teacher's comment: ${Mt}

Swing hard to stay after class (again).`),it.material.needsUpdate=!0;let bt=n.getWorldPosition(new I),Wt=n.getWorldDirection(new I).setY(0).normalize();it.position.copy(bt).addScaledVector(Wt,.75).setY(bt.y-.12),it.lookAt(bt.x,it.position.y,bt.z),it.visible=!0;let Yt=it.position.y;z(1.2,Qt=>{it.material.opacity=Qt,it.position.y=Yt-.15*(1-Qt)**2})}let It=()=>({bestCombo:0,slowUntil:0,dust:0,score:0,combo:0,lastBreak:-9,broken:0,materials:new Set,right:0,hits:0,lodges:0,followThroughs:0,wrong:{},said:new Set,boardHits:0,powderUntil:0}),Y={phase:"intro",endsAt:0,...It()},A=(T,V,j)=>t.xr.getSession()?.inputSources[T]?.gamepad?.hapticActuators?.[0]?.pulse?.(V,j),x=[],z=(T,V,j)=>x.push({t:0,dur:T,run:V,done:j}),H=new I,tt=new I,mt=new He;function gt(T,V){let j=V.clone().sub(T.center),R=T.half,Mt=Math.abs(j.x)/R.x,bt=Math.abs(j.y)/R.y,Wt=Math.abs(j.z)/R.z;return Mt>bt&&Mt>Wt?tt.set(Math.sign(j.x),0,0):bt>Wt?tt.set(0,Math.sign(j.y),0):tt.set(0,0,Math.sign(j.z))}function et(T,V,j,R,Mt,bt,Wt,Yt){if(Yt-(R.lastHit??-9)<.2)return!1;R.lastHit=Yt,T.mesh.getWorldQuaternion(mt);let Qt=H.set(0,-1,0).applyQuaternion(mt).dot(Wt),ye=Math.max(0,-(R.normal??gt(R,T.entry??Mt)).dot(Wt)),ke=T.name==="axe"?.25+.75*Math.max(0,Qt)**1.5:.6+.4*Math.abs(Qt),me=Math.min(1.3,(bt-.8)/5)*ke*(.35+.65*ye),xe=R.material==="glass"||R.material==="ceramic";if(ye<.3&&!xe)return Ut.glance(),A(V,.2,25),Y.score+=5,!0;let Ae=B_[T.name][R.material];if(Y.hits++,Ae===1?Y.right++:Ae<.9&&af[R.material]&&(Y.wrong[R.material]=(Y.wrong[R.material]??0)+1)>=3&&!Y.said.has(R.material)&&(Y.said.add(R.material),a(af[R.material])),A(V,Math.min(1,.3+me),20+me*60),R.hp===1/0)return rt(T,V,R,Mt,Wt,me,Yt),!0;R.hp-=me*Ae,T.follow={target:R,at:Yt+.1,speed:bt,e:me,affinity:Ae,dir:Wt.clone(),point:Mt.clone()},T.name==="axe"&&(R.kind==="desk"||R.kind==="drywall")&&R.hp>0&&Qt>.55&&ye>.5&&me>.2&&Ct(T,V,R,Mt,Wt,Yt);let sn=R.hp<=0;return Ut[R.material](Math.max(.3,me),sn),Lt(R.material,Mt,Wt,Math.round(4+me*14),bt*.35,!1,R.colors),(R.material==="plaster"||R.material==="drywall")&&K(ee,Mt,6+me*14,{color:14999248,speed:.3+me*.6,size:.12,dir:Wt}),R.material==="metal"&&K(re,Mt,10+me*20,{color:16756816,speed:2+me*3,size:.012,life:.4,alpha:1,grow:0,drag:.5,dir:Wt}),R.mesh&&!sn&&(R.shove=Wt.clone().setY(0).multiplyScalar(.04*me)),R.object&&!sn&&(R.wobble=1),sn?(At(T,R,Mt,Wt,bt,me,Ae,Yt),!0):(Y.score+=Math.round(10*me*(Ae===1?2:1)),!0)}function rt(T,V,j,R,Mt,bt,Wt){if(of[j.kind]&&!Y.said.has(j.kind)&&bt>.15&&(Y.said.add(j.kind),a(of[j.kind])),j.kind==="wall")Ut.plaster(Math.max(.3,bt),!1),bt>.12&&kt(R,j.normal,bt),Lt("plaster",R,j.normal.clone().multiplyScalar(-1).add(Mt).normalize(),Math.round(3+bt*10),1+bt*2,!1,[15262420,14012095]),K(ee,R,8+bt*16,{color:15262420,speed:.3+bt*.5,size:.14,dir:j.normal}),Y.score+=Math.round(15*bt),Y.dust=Math.min(2.6,Y.dust+.05*bt),Y.materials.add("plaster");else if(j.kind==="board")Ut.slate(Math.max(.3,bt)),K(ee,R,14,{color:15921898,speed:.3,size:.08,dir:new I(0,0,1)}),a(lf[Math.min(lf.length-1,Y.boardHits++)]);else if(j.kind==="hat"){Ut.bonk(),Ut.metal(.4);let Yt=s.hat,Qt=G.y;z(.6,ye=>{Yt.position.y=Qt+Math.sin(ye*Math.PI)*.25,Yt.rotation.y+=.4},()=>{Yt.position.copy(G)}),Y.score+=50,Y.materials.add("metal")}}function At(T,V,j,R,Mt,bt,Wt,Yt){V.mesh&&(V.mesh.setMatrixAt(V.index,L),V.mesh.instanceMatrix.needsUpdate=!0),V.pane&&(V.pane.visible=!1),V.object&&(V.object.visible=!1),t.shadowMap.needsUpdate=!0;for(let xe of l)xe.lodged?.target===V&&wt(xe,!1);let Qt={wood:14,glass:40,ceramic:45,plaster:30,drywall:26,metal:0}[V.material];if(Lt(V.material,V.center,R,Qt,Mt*.5,!0,V.colors,V.kind==="desk"||V.kind==="window"?.45:.12),V.kind==="pot"&&Lt("plaster",V.center,R,18,Mt*.3,!1,[3810324,4861978,4160051]),(V.material==="plaster"||V.material==="drywall")&&(K(ee,V.center,70,{color:14999248,spread:.3,speed:.6,size:.22,life:4,dir:R}),Y.dust+=.4),V.kind==="volcano"){Ut.erupt();for(let xe=0;xe<6;xe++)setTimeout(()=>K(ee,V.center.clone().setY(V.center.y+.1),12,{color:xe%2?16738858:16770720,speed:1.6,up:3,size:.1,life:2,dir:new I(0,1,0)}),xe*90)}if(V.kind==="drywall"&&Xt(),V.kind==="ext"){Ut.powder(),Y.powderUntil=Yt+2.6;let xe=s.ext;z(.5,Ae=>{xe.rotation.z=B.z+Ae*.5,xe.rotation.x=B.x-Ae*.2})}Y.combo=Yt-Y.lastBreak<2.5?Y.combo+1:1,Y.bestCombo=Math.max(Y.bestCombo,Y.combo),Y.lastBreak=Yt,Y.broken++,Y.materials.add(V.material),Y.dust=Math.min(2.6,Y.dust+(V.kind==="chair"?.12:.3));let ye=Math.round(V.value*(Wt===1?1.5:1)*Math.min(8,Y.combo)*(.6+bt*.5));Y.score+=ye,o();let ke=k_[V.kind]??[""],me=!["desk","chair","window"].includes(V.kind);a(me?ke[Math.floor(Math.random()*ke.length)]:Y.combo>2?`COMBO x${Y.combo}! +${ye}`:Math.random()<.4?ke[Math.floor(Math.random()*ke.length)]:`+${ye}`)}function Xt(){let[T,V,j]=s.notAHole;T.visible=V.visible=!1,_.visible=!0,z(1.1,R=>{j.position.set(N.x,N.y-(N.y-.05)*R*R,N.z-.25*R),j.rotation.set(-Math.PI/2*R*R,D.y,D.z+R*.6,"YXZ")}),z(1.5,R=>{E.material.opacity=.55*R,_.userData.halo.material.opacity=.4+.6*R})}function Ct(T,V,j,R,Mt,bt){let Wt=new _e;Wt.position.copy(R),Wt.quaternion.copy(mt),i.add(Wt),Wt.updateMatrixWorld(),Wt.attach(T.mesh),Wt.position.addScaledVector(Mt,.035),T.lodged={target:j,pivot:Wt,at:bt,hand:T.grip.getWorldPosition(new I)},T.follow=null,Ut.lodge(),A(V,1,140),Y.lodges++||a("IT IS STUCK. PULL.")}function wt(T,V,j=0,R=0){let{pivot:Mt,target:bt}=T.lodged;T.grip.attach(T.mesh),T.mesh.position.set(0,0,0),T.mesh.quaternion.identity(),T.mesh.rotation.set(rf,0,0),i.remove(Mt),T.lodged=null,T.prev=null,T.vel.set(0,0,0),V&&(Ut.yank(),A(j,.8,60),Lt(bt.material,Mt.position,Mt.position.clone().sub(bt.center).setY(.5).normalize(),12,2.5,!1,bt.colors),bt.lastHit=-9,bt.hp-=.35,Y.score+=60,bt.hp<=0&&(bt.hp=.001,et(T,j,R,bt,Mt.position.clone(),6,new I(0,1,0),R+1)))}function qt(T,V,j){let R=T.follow;!R||j<R.at||(T.follow=null,!(R.target.hp<=0||T.vel.length()<R.speed*.55)&&(R.target.hp-=R.e*R.affinity*.4,Y.score+=Math.round(25*R.e),Y.followThroughs++,R.target.hp<=0&&(R.target.hp=.001,R.target.lastHit=-9,et(T,V,j,R.target,R.point,R.speed*1.15,R.dir,j))))}function Kt(T){Y.phase="play",Y.endsAt=T+O_,it.visible=!1,Ut.bell(Vt),a("LESSON 2: DEMOLITION. 90 SECONDS. GO.")}function ie(){Y.phase="over",Ut.bell([...Vt].reverse());let T=z_.filter(R=>Y.materials.has(R)).length,V=Y.score+T*T*400,j=V>3e4?"A+ (PLEASE LEAVE)":V>15e3?"B. SHOWS PROMISE. THE SCHOOL DOES NOT.":V>5e3?"C. NEEDS MORE DEMOLITION.":"F. GENTLE. SUSPICIOUSLY GENTLE.";a(`PENCILS DOWN. ${V} PTS, ${T}/6 MATERIALS. ${j}`),Y.total=V,Y.finishedAt=performance.now()/1e3,Y.slowUntil=Y.finishedAt+1.8,q("0:00",!0),setTimeout(()=>Y.phase==="over"&&P(V,T,j),2200)}function O(){for(let R of b)R.hp=R.max,R.mesh&&R.mesh.setMatrixAt(R.index,R.matrix),R.pane&&(R.pane.visible=!0),R.object&&(R.object.visible=!0);s.desks.instanceMatrix.needsUpdate=s.chairs.instanceMatrix.needsUpdate=!0,t.shadowMap.needsUpdate=!0;for(let R of Object.values($))R.parts.forEach((Mt,bt)=>{Mt.alive=!1,R.mesh.setMatrixAt(bt,L)}),R.mesh.instanceMatrix.needsUpdate=!0;for(let R of[ee,re])R.life.fill(0);for(let R of $t)R.visible=!1;for(let R of l)R.lodged&&wt(R,!1);let[T,V,j]=s.notAHole;T.visible=V.visible=!0,j.position.copy(N),j.rotation.copy(D),_.visible=!1,E.material.opacity=0,it.visible=!1,s.ext.rotation.copy(B),s.hat.position.copy(G),x.length=0,Object.assign(Y,{phase:"ready",...It()}),q("1:30"),a("TUESDAY (AGAIN). SWING TO START.")}let St=y.find(T=>T.kind==="cat"),at=y.find(T=>T.kind==="bust"),Et=y.filter(T=>T.kind==="pot"),_t={cat:0,bust:0,squeakAt:-9};function ut(T,V,j){let R=(Qt,ye)=>j.some(({p:ke,speed:me})=>me>1&&ke.distanceTo(Qt.position)<ye),Mt=1-Math.exp(-V*14),bt=St.object.visible&&R(St.object,.7);bt&&_t.cat<.3&&T-_t.squeakAt>1.2&&(_t.squeakAt=T,Ut.squeak()),_t.cat+=((bt?1:0)-_t.cat)*Mt;let{head:Wt,paw:Yt}=St.object.userData;Wt.rotation.set(-.3*_t.cat,1.1*_t.cat,0),Yt.rotation.z=_t.cat>.5?1.2:Math.sin(T*4)*.35,St.object.scale.set(1+.08*_t.cat,1-.14*_t.cat,1),_t.bust+=((at.object.visible&&R(at.object,.8)?1:0)-_t.bust)*Mt,at.object.userData.head.rotation.set(-.35*_t.bust,0,.12*_t.bust),at.object.rotation.x=-.1*_t.bust;for(let Qt of Et)if(Qt.object.visible){let ye=R(Qt.object,.6)?1:0;Qt.object.userData.leaves.forEach((ke,me)=>{ke.rotation.y=ye*Math.sin(T*40+me)*.25})}for(let Qt of y)Qt.wobble&&(Qt.wobble*=Math.exp(-V*5),Qt.object.rotation.z=Math.sin(T*30)*.12*Qt.wobble,Qt.wobble<.01&&(Qt.wobble=0,Qt.object.rotation.z=0))}let Ft=new I,Bt=new I,Se=l.map(()=>({p:new I,speed:0}));function Me(T,V){Y.dust*=Math.exp(-V/35);for(let R of l)R.mesh.visible=Y.phase!=="intro"&&(R===m()||!!R.lodged);for(let R=x.length-1;R>=0;R--){let Mt=x[R];Mt.t+=V;let bt=Math.min(1,Mt.t/Mt.dur);Mt.run(bt),bt===1&&(x.splice(R,1),Mt.done?.())}let j=T<Y.slowUntil?.15+.85*((1.8-(Y.slowUntil-T))/1.8)**3:1;if(ot(ee,V*j,.02),ot(re,V*j,6),T<Y.powderUntil&&K(ee,s.ext.position.clone().setY(1.55),6,{color:16777215,speed:2.2,size:.09,life:3,grow:1.4,alpha:.35,dir:new I(Math.sin(T*7)-.8,.2,Math.cos(T*5)*.8).normalize(),drag:1.2}),t.xr.isPresenting&&d(),!(!t.xr.isPresenting||Y.phase==="intro")){Y.phase==="play"&&T>Y.endsAt&&ie(),Y.phase==="play"&&Math.ceil(Y.endsAt-T)!==Y.shown&&(Y.shown=Math.ceil(Y.endsAt-T),q(`${Math.floor(Y.shown/60)}:${String(Y.shown%60).padStart(2,"0")}`,Y.shown<=10),(Y.shown<=10||Y.shown%15===0)&&a(`${Y.shown}s LEFT  \xB7  SCORE ${Y.score}`),Y.shown<=10&&Jt()&&(ft(Jt(),Y.shown<=3?1900:1500,.06,.25,0,"square"),A(1,.15,15)));for(let R of Se)R.speed=0;u.hand===null&&g(0),l.forEach(R=>{let Mt=R.hand??0;if(R!==m()&&!R.lodged)return;if(!R.grip.visible){R.prev=null;return}if(R.lodged){let Yt=R.lodged,Qt=T-Yt.at;Yt.pivot.quaternion.copy(Yt.pivot.userData.q??=Yt.pivot.quaternion.clone()),Yt.pivot.rotateX(Math.sin(Qt*57)*.22*Math.exp(-Qt*5)),(R.grip.getWorldPosition(Bt).distanceTo(Yt.hand)>.3||Qt>6)&&wt(R,Qt<=6,Mt,T);return}qt(R,Mt,T),R.mesh.localToWorld(Ft.copy(R.mesh.userData.tip)),R.prev&&V>0&&R.vel.lerp(Bt.subVectors(Ft,R.prev).divideScalar(V),.6),R.prev=(R.prev??new I).copy(Ft);let bt=R.vel.length();if(T<(R.settle??0)){R.vel.set(0,0,0);return}if(Se[0].p.copy(Ft),Se[0].speed=bt,bt<1.2)return;if(Tn(Ft,R.vel),Y.phase==="ready"&&Kt(T),Y.phase==="over"){T-Y.finishedAt>4&&bt>3&&O();return}Bt.copy(R.vel).normalize();let Wt=Ft.clone().addScaledVector(R.vel,-V*1.5);for(let Yt of b)if(!(Yt.hp<=0||R.lodged)&&Math.abs(Ft.x-Yt.center.x)<Yt.half.x&&Math.abs(Ft.y-Yt.center.y)<Yt.half.y&&Math.abs(Ft.z-Yt.center.z)<Yt.half.z&&(R.entry=Wt,et(R,Mt,T,Yt,Ft.clone(),bt,Bt.clone(),T)))break}),ut(T,V,Se);for(let R of b)R.shove&&(w.copy(R.matrix),w.elements[12]+=R.shove.x,w.elements[14]+=R.shove.z,R.mesh.setMatrixAt(R.index,w),R.mesh.instanceMatrix.needsUpdate=!0,R.shove.multiplyScalar(.8),R.shove.lengthSq()<1e-7&&(R.shove=null));Dn(V*j)}}function Tn(T,V){for(let j of Object.values($))for(let R of j.parts)!R.alive||Math.abs(R.p.x-T.x)>.15||Math.abs(R.p.z-T.z)>.15||Math.abs(R.p.y-T.y)>.15||(R.v.copy(V).multiplyScalar(.5+Math.random()*.3).add(new I(0,1+Math.random(),0)),R.w.set(vt(),vt(),vt()).multiplyScalar(18),R.rest=0)}function Dn(T){for(let V of Object.values($)){let j=!1;V.parts.forEach((R,Mt)=>{if(!R.alive||R.rest>1)return;j=!0;let bt=R.material==="drywall"||R.material==="glass"?.97:.995;R.v.y-=9.8*T,R.v.x*=bt,R.v.z*=bt,R.p.addScaledVector(R.v,T),Q.setFromAxisAngle(Bt.copy(R.w).normalize(),R.w.length()*T),R.q.premultiply(Q);let Wt=Math.min(R.s.x,R.s.y,R.s.z)/2;if(R.p.y<Wt){let Yt=-R.v.y;if(R.p.y=Wt,R.v.y*=R.material==="plaster"?-.15:-.3,R.v.x*=.6,R.v.z*=.6,R.w.multiplyScalar(.5),(R.material==="glass"||R.material==="ceramic")&&Yt>1&&Math.random()<.12&&Ut.tink(R.material),R.v.lengthSq()<.02&&(R.rest+=T*10,R.w.set(0,0,0),R.material!=="plaster")){let Qt=R.s.y<R.s.x?"y":"x";R.q.setFromAxisAngle(new I(0,1,0),Math.random()*6),Qt==="x"&&R.q.multiply(new He().setFromAxisAngle(new I(0,0,1),Math.PI/2))}}R.p.x=Math.max(-4.4,Math.min(4.4,R.p.x)),R.p.z=Math.max(-4.7,Math.min(4.7,R.p.z)),st.position.copy(R.p),st.quaternion.copy(R.q),st.scale.copy(R.s),st.updateMatrix(),V.mesh.setMatrixAt(Mt,st.matrix)}),j&&(V.mesh.instanceMatrix.needsUpdate=!0)}}return{update:Me,state:Y,tools:l,targets:b,props:y,reset:O,start:Kt,finish:ie,equip:g,holder:u,hole:_,report:it}}var ti=new URLSearchParams(location.search),bh=document.getElementById("enter"),gf=['600 40px "Caveat"','40px "Permanent Marker"','700 40px "Cabin Sketch"','40px "Special Elite"'].map(i=>document.fonts.load(i));gf.push(document.fonts.load('40px "Yuji Syuku"',"\u58CA\u3059\u306A"));await Promise.race([Promise.allSettled(gf),new Promise(i=>setTimeout(i,3500))]);var Le=new Ml({antialias:!0,powerPreference:"high-performance"});Le.setPixelRatio(Math.min(devicePixelRatio,2));Le.setSize(innerWidth,innerHeight);Le.toneMapping=Jr;Le.toneMappingExposure=Number(ti.get("exposure"))||1.05;Le.shadowMap.enabled=!0;Le.shadowMap.type=ls;Le.shadowMap.autoUpdate=!1;Le.xr.enabled=!0;Le.xr.setReferenceSpaceType("local-floor");Le.xr.setFoveation(.6);document.body.prepend(Le.domElement);var Nn=new ss,pn=new _e,nn=new an(70,innerWidth/innerHeight,.03,80);Nn.background=new ne(15331302);Nn.environment=new nr(Le).fromScene(new wl,.04).texture;Nn.environmentIntensity=ti.has("sunonly")?0:.22;nn.position.y=Number(ti.get("y")??1.6);nn.rotation.order="YXZ";nn.rotation.set(Number(ti.get("pitch")??-.08),Number(ti.get("yaw")??0),0);pn.position.set(Number(ti.get("x")??.4),0,Number(ti.get("z")??3.9));pn.add(nn);Nn.add(pn);var Ve=Wd(Nn,{cjk:Hd("\u58CA",Ue.brush)}),vh=Xd(Nn),ei=new Zs(16767398,7);ei.position.copy(Pl).multiplyScalar(14);ei.castShadow=!0;ei.shadow.mapSize.set(2048,2048);Object.assign(ei.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:2,far:30});ei.shadow.bias=-4e-4;ei.shadow.normalBias=.025;ei.shadow.radius=3;Nn.add(ei,ei.target);var Ul=new Zs(13622514,1.1);Ul.position.set(-10,2.5,1);var xf=new Wr(13227754,6963236,.22);ti.has("sunonly")||Nn.add(Ul,xf);Le.shadowMap.needsUpdate=!0;var mn=null;function wh(){if(mn)return mn.ctx.resume();let i=new Zr,t=i.context,e=i.getInput();nn.add(i);let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=n.getChannelData(0);for(let b=0;b<s.length;b++)s[b]=Math.random()*2-1;let r=(b,w,L)=>{let _=new PannerNode(t,{panningModel:"HRTF",refDistance:1.5,positionX:b,positionY:w,positionZ:L});return _.connect(e),_},a=(b,{dur:w=.3,type:L="lowpass",freq:_=800,to:E=_,gain:N=.5,q:D=.7}={})=>{let B=t.currentTime,G=new AudioBufferSourceNode(t,{buffer:n,loop:!0}),U=new BiquadFilterNode(t,{type:L,frequency:_,Q:D}),k=new GainNode(t,{gain:N});U.frequency.exponentialRampToValueAtTime(E,B+w),k.gain.setValueAtTime(N,B),k.gain.exponentialRampToValueAtTime(1e-4,B+w),G.connect(U).connect(k).connect(b),G.start(B,Math.random()),G.stop(B+w+.05)},o=(b,{from:w,to:L,dur:_,gain:E=.3,type:N="sine"})=>{let D=t.currentTime,B=new OscillatorNode(t,{type:N,frequency:w}),G=new GainNode(t,{gain:E});B.frequency.exponentialRampToValueAtTime(L,D+_),G.gain.setValueAtTime(E,D),G.gain.exponentialRampToValueAtTime(1e-4,D+_),B.connect(G).connect(b),B.start(D),B.stop(D+_+.05)},l=r(-oe/2-3,2.5,0),c=new GainNode(t,{gain:0}),h=new GainNode(t,{gain:.05}),d=new AudioBufferSourceNode(t,{buffer:n,loop:!0}),u=new GainNode(t,{gain:1});d.connect(new BiquadFilterNode(t,{type:"bandpass",frequency:5200,Q:3})).connect(c).connect(h).connect(u).connect(l);let f=new OscillatorNode(t,{type:"square",frequency:38}),g=new GainNode(t,{gain:.5});f.connect(g).connect(c.gain),c.gain.value=.5;let v=new OscillatorNode(t,{frequency:.07}),m=new GainNode(t,{gain:.035});v.connect(m).connect(h.gain),d.start(),f.start(),v.start();let p=r(1.55,2.68,-Pe/2),S=r(.12,1.3,-3.78),C=r(2.2,je,1.5),y=r(Ve.lair.x,.6,Ve.lair.z);mn={ctx:t,hush:u,out:e,scratch:()=>a(S,{dur:.05+Math.random()*.05,type:"bandpass",freq:2400+Math.random()*1500,gain:.12,q:5}),whistle:()=>{o(e,{from:500,to:1500,dur:.35,gain:.07,type:"sine"}),setTimeout(()=>o(e,{from:1500,to:1400,dur:.25,gain:.05,type:"triangle"}),330)},tick:b=>a(p,{dur:.04,type:"highpass",freq:b?3e3:2200,gain:.25}),click:()=>a(S,{dur:.06,type:"highpass",freq:1800,gain:.6}),pfft:()=>{a(S,{dur:.7,type:"bandpass",freq:1400,to:300,gain:.5,q:2}),o(S,{from:700,to:180,dur:.6,gain:.08,type:"triangle"})},boom:()=>{a(S,{dur:2.6,freq:600,to:40,gain:1.6}),o(S,{from:90,to:28,dur:2.2,gain:.9}),a(C,{dur:1.4,type:"highpass",freq:3e3,to:900,gain:.25})},clatter:()=>{for(let b=0;b<4;b++)setTimeout(()=>a(S,{dur:.09,type:"bandpass",freq:900+Math.random()*900,gain:.5,q:4}),b*70+Math.random()*40)},giggle:()=>{for(let b=0;b<5;b++)setTimeout(()=>o(y,{from:520+b*25,to:380,dur:.09,gain:.05,type:"triangle"}),b*95)}}}var lr=600,qi=new Float32Array(lr*3),_f=new Float32Array(lr*3),Qn=new Float32Array(lr*3),Ll=new Float32Array(lr),Fl=new Ce;Fl.setAttribute("position",new ae(qi,3));Fl.setAttribute("color",new ae(_f,3));var yf=new vi(Fl,new Vs({size:.012,vertexColors:!0,transparent:!0,depthWrite:!1}));yf.frustumCulled=!1;Nn.add(yf);var rr=0;function Mh(i,t,e,n,s,r=1){for(let a=0;a<i;a++,rr=(rr+1)%lr)qi.set([t.x+(Math.random()-.5)*e.x,t.y+(Math.random()-.5)*e.y,t.z+(Math.random()-.5)*e.z],rr*3),Qn.set([(Math.random()-.5)*n,Math.random()*n*r,(Math.random()-.5)*n],rr*3),_f.set(new ne(s[a%s.length]).toArray(),rr*3),Ll[rr]=2+Math.random()*2}var vf=[16731501,16765503,4112851,9095462,11765995],V_=[13617336,12169632,14999248],hf=["WHO PUSHED THE PLUNGER?","IT IS NOT CONNECTED TO ANYTHING.","IT IS NOW CONNECTED TO SOMETHING.","FINE. DETENTION. YOU TOO, VISITOR.","STOP.","I AM CALLING YOUR MOTHER.",'SHE ASKED "WHICH ONE?"',"IT IS NOW CONNECTED TO EVERYTHING.","WE ARE ALL IN DETENTION NOW."],Re={pushes:0,explosions:0,pressedAt:-9,armed:!0,fallen:0,lampSpin:0,lampAngle:0,flicker:0,flipAt:-9,eyesHidden:0},Nl=[],Mf=i=>Nl.push({start:performance.now()/1e3,...i});function da(i){let t=Ve.statusCanvas.getContext("2d");t.clearRect(0,0,Ve.statusCanvas.width,Ve.statusCanvas.height),t.drawImage(Al(i),0,0),Ve.status.material.map.needsUpdate=!0}var Yi=new I;function Ol(){let i=performance.now()/1e3;if(!(i-Re.pressedAt<1.2)){if(Re.pressedAt=i,Re.pushes++,wh(),mn.click(),Mf({dur:.5,run:t=>{Ve.handle.position.y=.21-.1*Math.sin(Math.min(1,t*2)*Math.PI/2)*(t<.6?1:1-(t-.6)/.4)}}),da(hf[Math.min(Re.pushes,hf.length)-1]),Ve.handle.getWorldPosition(Yi),Re.pushes%3===0)return setTimeout(G_,900);mn.pfft(),Mh(40,Yi,new I(.05,.02,.05),.9,vf)}}function G_(){Re.explosions++,mn.boom(),Re.flicker=1.6,Re.lampSpin+=2.4,Re.flipAt=performance.now()/1e3,Mh(260,new I(2.2,je-.05,1.5),new I(2.6,.02,2.2),.15,V_,-1),Mh(80,Yi,new I(.1,.05,.1),2.2,vf);let i=Ve.scrolls[Re.fallen++];if(i){let t=i.position.y;setTimeout(()=>Mf({dur:.8,run:e=>{i.position.y=t-(t-.19)*e*e,i.rotation.x=-Math.PI/2*e*e,i.position.z=-Pe/2+.04+.08*e},done:()=>mn.clatter()}),350)}}var Sh={built:{sun:7,sky:1.1,bounce:.22,env:.22,exposure:1.05,haze:1,skyColor:13622514},film:{sun:10,sky:.34,bounce:.09,env:.07,exposure:1,haze:1.5,skyColor:8362198}},Dl=ti.get("look")==="built",Vn={...Dl?Sh.built:Sh.film,fill:1};Ul.color.set(Vn.skyColor);function H_(i,t){let e=1-Math.exp(-t*1.5);Vn.fill+=(i.fill-Vn.fill)*e,ei.intensity+=(i.sun-ei.intensity)*e,Ul.intensity=Vn.sky*Vn.fill,xf.intensity=Vn.bounce*Vn.fill,ti.has("sunonly")||(Nn.environmentIntensity=Vn.env*Vn.fill),vh.haze.value+=(i.haze-vh.haze.value)*e}ti.has("exposure")||(Le.toneMappingExposure=Vn.exposure);var wi=cf({scene:Nn,renderer:Le,rig:pn,camera:nn,room:Ve,audio:()=>mn,say:da,flip:()=>{Re.flipAt=performance.now()/1e3}});function W_(i,t){let e=Ve.eyes,n=e.position.clone().sub(t),s=n.length(),r=nn.getWorldDirection(new I).dot(n.normalize());s<1.4&&r>.93&&i>Re.eyesHidden&&(Re.eyesHidden=i+5,mn?.giggle());let a=i<Re.eyesHidden,o=Math.sin(i*1.3)>.985||Math.sin(i*.37+2)>.995;e.scale.y+=((a||o?.02:1)-e.scale.y)*(a?.5:.35),e.position.x=Ve.lair.x+.2+Math.sin(i*.21)*.25}var X_=[0,1].map(i=>{let t=Le.xr.getController(i);t.add(new Rr(new Ce().setFromPoints([new I,new I(0,0,-.4)]),new ks({color:16777215,transparent:!0,opacity:.35}))),t.addEventListener("select",()=>{q_(t)&&Ol()}),pn.add(t);let e=Le.xr.getControllerGrip(i),n=Le.xr.getHand(i);return pn.add(e,n),{c:t,grip:e,hand:n}}),ua=new $r;function q_(i){return i.updateMatrixWorld(!0),ua.ray.origin.setFromMatrixPosition(i.matrixWorld),ua.ray.direction.set(0,0,-1).applyQuaternion(i.getWorldQuaternion(new He)),ua.intersectObject(Ve.plunger,!0).length>0}var uf=new I;function Y_(){Ve.handle.getWorldPosition(Yi);for(let{grip:i,hand:t}of X_){let e=t.joints?.["index-finger-tip"],n=e?.visible?e.getWorldPosition(uf):i.visible?i.getWorldPosition(uf):null;if(n&&Math.hypot(n.x-Yi.x,n.z-Yi.z)<.09&&n.y<Yi.y+.02&&n.y>Yi.y-.12)return!0}return!1}Le.domElement.addEventListener("pointermove",i=>{i.buttons&&(nn.rotation.y+=i.movementX*.004,nn.rotation.x=Math.min(1.4,Math.max(-1.4,nn.rotation.x+i.movementY*.004)))});Le.domElement.addEventListener("click",i=>{wh(),ua.setFromCamera(new xt(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),nn),ua.intersectObject(Ve.plunger,!0).length&&Ol()});var or=new Set;addEventListener("keydown",i=>or.add(i.key.toLowerCase()));addEventListener("keyup",i=>or.delete(i.key.toLowerCase()));addEventListener("resize",()=>{nn.aspect=innerWidth/innerHeight,nn.updateProjectionMatrix(),Le.setSize(innerWidth,innerHeight)});var Zi=new Tt(new Sn(.3,16,8),new un({color:0,side:Ye,transparent:!0,depthTest:!1,depthWrite:!1}));Zi.renderOrder=999;Zi.visible=!1;nn.add(Zi);var fi={at:-1,written:0,lastPhase:null},df="DEMOLITION BOY",Z_="LESSON 2: DEMOLITION. SWING TO START.";function $_(){wi.state.phase!=="intro"&&wi.reset(),fi.at=performance.now()/1e3,fi.written=0,wi.state.phase="intro",Zi.visible=!0,Zi.material.opacity=1,da("")}function J_(i){if(fi.at<0)return;let t=i-fi.at;Zi.material.opacity=1-Math.min(1,Math.max(0,(t-.8)/3.7))**1.6,Zi.visible=Zi.material.opacity>.002;let e=Math.min(df.length,Math.floor(Math.max(0,t-4.2)/.16));e>fi.written&&(fi.written=e,da(df.slice(0,e)),mn?.scratch()),t>9.5&&wi.state.phase==="intro"&&(wi.state.phase="ready",mn?.whistle(),da(Z_),fi.at=-1)}var ar=new I,xh=new I,ff=new I,pf=new I(0,1,0),mf=performance.now(),_h=!1,yh=0;Le.setAnimationLoop(i=>{let t=performance.now()/1e3,e=Math.min(.05,(i-mf)/1e3);mf=i,vh.time.value=t,nn.getWorldPosition(ar);let n=new xt(+or.has("d")-+or.has("a"),+or.has("s")-+or.has("w"));for(let h of Le.xr.getSession()?.inputSources??[]){let d=h.gamepad?.axes;if(!(!d||d.length<4))if(h.handedness==="left")n.set(d[2],d[3]);else if(Math.abs(d[2])>.7&&!_h){let u=-Math.sign(d[2])*Math.PI/6;pn.position.sub(ar).applyAxisAngle(pf,u).add(ar),pn.rotation.y+=u,_h=!0}else Math.abs(d[2])<.3&&(_h=!1)}if(n.lengthSq()>.01){let h=ar.x-pn.position.x,d=ar.z-pn.position.z;nn.getWorldDirection(xh).setY(0).normalize(),ff.crossVectors(xh,pf),pn.position.addScaledVector(xh,-n.y*e*1.3).addScaledVector(ff,n.x*e*1.3),pn.position.x=Math.min(oe/2-.35,Math.max(-oe/2+.35,pn.position.x+h))-h,pn.position.z=Math.min(Pe/2-.35,Math.max(-Pe/2+.9,pn.position.z+d))-d}let s=Le.xr.isPresenting&&Y_();s&&Re.armed&&(Re.armed=!1,Ol()),s||(Re.armed=!0);for(let h=Nl.length-1;h>=0;h--){let d=Nl[h],u=Math.min(1,(t-d.start)/d.dur);d.run(u),u===1&&(Nl.splice(h,1),d.done?.())}Re.lampSpin+=(-Re.lampAngle*9-Re.lampSpin*.9)*e,Re.lampAngle+=Re.lampSpin*e,Ve.crooked.g.rotation.z=-.62+Re.lampAngle*.35+Math.sin(t*.8)*.012,Re.flicker=Math.max(0,Re.flicker-e);let r=Re.flicker>0?Math.random()>.5:Math.sin(t*.5)>.97&&Math.random()>.6;Ve.crooked.tubes.emissiveIntensity=r?2.2:.05;let a=Math.min(1,(t-Re.flipAt)/.6);Ve.flip.rotation.x=a<1?-a*Math.PI*2:0,W_(t,ar),wi.update(t,e),J_(t,e);let o=wi.state.phase;if(H_({fill:Dl?1:fi.at>=0?.3:o==="over"?.45:1,sun:Dl?Sh.built.sun:o==="over"?11.5:Vn.sun,haze:Dl?1:(o==="intro"?1.9:Vn.haze)+wi.state.dust},e),mn&&o!==fi.lastPhase){fi.lastPhase=o;let h=o==="play"?.05:1;mn.hush.gain.setTargetAtTime(h,mn.ctx.currentTime,o==="play"?.3:2.5)}let l=new Date,c=l.getSeconds()+l.getMilliseconds()/1e3;Ve.hands.second.rotation.z=c/60*Math.PI*2,Ve.hands.minute.rotation.z=(l.getMinutes()+c/60)/60*Math.PI*2,Ve.hands.hour.rotation.z=(l.getHours()%12+l.getMinutes()/60)/12*Math.PI*2,mn&&Math.floor(c)!==yh&&(yh=Math.floor(c),mn.tick(yh%2));for(let h=0;h<lr;h++){if(Ll[h]<=0)continue;Ll[h]-=e;let d=h*3;Qn[d+1]-=1.6*e,Qn[d]*=.985,Qn[d+2]*=.985,Qn[d+1]=Math.max(Qn[d+1],-.45),qi[d]+=(Qn[d]+Math.sin(t*7+h)*.05)*e,qi[d+1]+=Qn[d+1]*e,qi[d+2]+=Qn[d+2]*e,qi[d+1]<.005&&(qi[d+1]=.005,Qn[d]=Qn[d+2]=0),Ll[h]<=0&&(qi[d+1]=-10)}Fl.attributes.position.needsUpdate=!0,Le.render(Nn,nn)});var Sf=await navigator.xr?.isSessionSupported("immersive-vr").catch(()=>!1);bh.disabled=!Sf;bh.textContent=Sf?"Enter the classroom":"Open on a headset to step in";document.body.classList.add("ready");bh.addEventListener("click",async()=>{wh();let i=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","hand-tracking"]});await Le.xr.setSession(i),$_(),document.body.classList.add("immersive"),i.addEventListener("end",()=>document.body.classList.remove("immersive"))});Object.assign(globalThis,{classroom:{renderer:Le,scene:Nn,camera:nn,rig:pn,room:Ve,state:Re,push:Ol,game:wi}});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
