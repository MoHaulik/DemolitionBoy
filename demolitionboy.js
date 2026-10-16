var du=0,Pc=1,fu=2;var os=1,pu=2,Js=3,Bi=0,Ge=1,Dn=2,ai=0,zi=1,Un=2,Lc=3,Nc=4,mu=5;var ls=100,gu=101,xu=102,_u=103,yu=104,vu=200,Mu=201,Su=202,bu=203,Dc=204,Uc=205,wu=206,Tu=207,Au=208,Eu=209,Cu=210,Ru=211,Iu=212,Pu=213,Lu=214,Ya=0,Za=1,$a=2,Ns=3,Ja=4,Ka=5,ja=6,Qa=7,Do=0,Nu=1,Du=2,qn=0,Fc=1,Oc=2,Bc=3,Kr=4,zc=5,kc=6,Vc=7;var Gc=300,ki=301,cs=302,Uo=303,Fo=304,jr=306,Li=1e3,ei=1001,to=1002,$e=1003,Uu=1004;var Qr=1005;var en=1006,Oo=1007;var Vi=1008;var yn=1009,Hc=1010,Wc=1011,Ks=1012,Bo=1013,Yn=1014,Fn=1015,Zn=1016,zo=1017,ko=1018,js=1020,Xc=35902,qc=35899,Yc=1021,Zc=1022,On=1023,ni=1026,Gi=1027,Vo=1028,Go=1029,Hi=1030,Ho=1031;var Wo=1033,ta=33776,ea=33777,na=33778,ia=33779,Xo=35840,qo=35841,Yo=35842,Zo=35843,$o=36196,Jo=37492,Ko=37496,jo=37488,Qo=37489,sa=37490,tl=37491,el=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,xl=36495,_l=36283,yl=36284,ra=36285,vl=36286;var Sr=2300,eo=2301,Xa=2302,xc=2303,_c=2400,yc=2401,vc=2402;var Fu=3200;var aa=0,Ou=1,_i="",Qe="srgb",br="srgb-linear",wr="linear",Me="srgb";var qa=7680;var Bu=519,zu=512,ku=513,Vu=514,Ml=515,Gu=516,Hu=517,Sl=518,Wu=519,Xu=35044;var $c="300 es",Hn=2e3,Ds=2001;function Ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qu(){let i=Tr("canvas");return i.style.display="block",i}var Ph={},Us=null;function Jc(...i){let t="THREE."+i.shift();Us?Us("log",t,...i):console.log(t,...i)}function Yu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=Yu(i);let t="THREE."+i.shift();if(Us)Us("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=Yu(i);let t="THREE."+i.shift();if(Us)Us("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ns(...i){let t=i.join(" ");t in Ph||(Ph[t]=!0,Kt(...i))}function Zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $u={[Ya]:Za,[$a]:ja,[Ja]:Qa,[Ns]:Ka,[Za]:Ya,[ja]:$a,[Qa]:Ja,[Ka]:Ns},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hl=Math.PI/180,no=180/Math.PI;function Qs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function Rf(i,t){return(i%t+t)%t}function Wl(i,t,e){return(1-e)*i+e*t}function ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _t=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),I=Math.sin(S);p=Math.sin(p*S)/I,o=Math.sin(o*S)/I,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xl=new C,Lh=new Be,ne=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],S=s[1],I=s[4],v=s[7],w=s[2],b=s[5],L=s[8];return r[0]=a*M+o*S+l*w,r[3]=a*m+o*I+l*b,r[6]=a*p+o*v+l*L,r[1]=c*M+h*S+d*w,r[4]=c*m+h*I+d*b,r[7]=c*p+h*v+d*L,r[2]=u*M+f*S+g*w,r[5]=u*m+f*I+g*b,r[8]=u*p+f*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ql.makeScale(t,e)),this}rotate(t){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ql=new ne,Nh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){let i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:t,whitePoint:n,transfer:wr,toXYZ:Nh,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Nh,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}var me=If();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,io=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_s===void 0&&(_s=Tr("canvas")),_s.width=t.width,_s.height=t.height;let s=_s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,Fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yl(s[a].image)):r.push(Yl(s[a]))}else r=Yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Lf=0,Zl=new C,fn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=en,a=Vi,o=On,l=yn,c=i.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Qs(),this.name="",this.source=new Fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Li:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Li:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Gc;fn.DEFAULT_ANISOTROPY=1;var Ie=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,v=(f+1)/2,w=(p+1)/2,b=(h+u)/4,L=(d+M)/4,_=(g+m)/4;return I>v&&I>w?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=b/n,r=L/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=L/r,s=_/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},so=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new fn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends so{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ce=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Df)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ai.crossVectors(n,wn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ai.crossVectors(n,wn)),Ai.normalize(),_a.crossVectors(wn,Ai),s[0]=Ai.x,s[4]=_a.x,s[8]=wn.x,s[1]=Ai.y,s[5]=_a.y,s[9]=wn.y,s[2]=Ai.z,s[6]=_a.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],S=n[3],I=n[7],v=n[11],w=n[15],b=s[0],L=s[4],_=s[8],E=s[12],N=s[1],U=s[5],B=s[9],W=s[13],F=s[2],H=s[6],j=s[10],J=s[14],lt=s[3],tt=s[7],st=s[11],rt=s[15];return r[0]=a*b+o*N+l*F+c*lt,r[4]=a*L+o*U+l*H+c*tt,r[8]=a*_+o*B+l*j+c*st,r[12]=a*E+o*W+l*J+c*rt,r[1]=h*b+d*N+u*F+f*lt,r[5]=h*L+d*U+u*H+f*tt,r[9]=h*_+d*B+u*j+f*st,r[13]=h*E+d*W+u*J+f*rt,r[2]=g*b+M*N+m*F+p*lt,r[6]=g*L+M*U+m*H+p*tt,r[10]=g*_+M*B+m*j+p*st,r[14]=g*E+M*W+m*J+p*rt,r[3]=S*b+I*N+v*F+w*lt,r[7]=S*L+I*U+v*H+w*tt,r[11]=S*_+I*B+v*j+w*st,r[15]=S*E+I*W+v*J+w*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],S=l*f-c*u,I=o*f-c*d,v=o*u-l*d,w=a*f-c*h,b=a*u-l*h,L=a*d-o*h;return e*(M*S-m*I+p*v)-n*(g*S-m*w+p*b)+s*(g*I-M*w+p*L)-r*(g*v-M*b+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],S=e*o-n*a,I=e*l-s*a,v=e*c-r*a,w=n*l-s*o,b=n*c-r*o,L=s*c-r*l,_=h*M-d*g,E=h*m-u*g,N=h*p-f*g,U=d*m-u*M,B=d*p-f*M,W=u*p-f*m,F=S*W-I*B+v*U+w*N-b*E+L*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/F;return t[0]=(o*W-l*B+c*U)*H,t[1]=(s*B-n*W-r*U)*H,t[2]=(M*L-m*b+p*w)*H,t[3]=(u*b-d*L-f*w)*H,t[4]=(l*N-a*W-c*E)*H,t[5]=(e*W-s*N+r*E)*H,t[6]=(m*v-g*L-p*I)*H,t[7]=(h*L-u*v+f*I)*H,t[8]=(a*B-o*N+c*_)*H,t[9]=(n*N-e*B-r*_)*H,t[10]=(g*b-M*v+p*S)*H,t[11]=(d*v-h*b-f*S)*H,t[12]=(o*E-a*U-l*_)*H,t[13]=(e*U-n*E+s*_)*H,t[14]=(M*I-g*w-m*S)*H,t[15]=(h*w-d*I+u*S)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,M=a*h,m=a*d,p=o*d,S=l*c,I=l*h,v=l*d,w=n.x,b=n.y,L=n.z;return s[0]=(1-(M+p))*w,s[1]=(f+v)*w,s[2]=(g-I)*w,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(u+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+I)*L,s[9]=(m-S)*L,s[10]=(1-(u+M))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ys.set(s[0],s[1],s[2]).length(),o=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);let c=1/a,h=1/o,d=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,e.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Hn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ds)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Hn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ds)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ys=new C,zn=new ce,Nf=new C(0,0,0),Df=new C(1,1,1),Ai=new C,_a=new C,wn=new C,Uh=new ce,Fh=new Be,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uf=0,Oh=new C,vs=new Be,ui=new ce,ya=new C,dr=new C,Ff=new C,Of=new Be,Bh=new C(1,0,0),zh=new C(0,1,0),kh=new C(0,0,1),Vh={type:"added"},Bf={type:"removed"},Ms={type:"childadded",child:null},$l={type:"childremoved",child:null},Ue=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new An,n=new Be,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new ne}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ya.copy(t):ya.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(dr,ya,this.up):ui.lookAt(ya,dr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ui),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ue.DEFAULT_UP=new C(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},zf={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},va={h:0,s:0,l:0};function Jl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Rf(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jl(a,r,t+1/3),this.g=Jl(a,r,t),this.b=Jl(a,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=Ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return me.workingToColorSpace(rn.copy(this),t),Math.round(ue(rn.r*255,0,255))*65536+Math.round(ue(rn.g*255,0,255))*256+Math.round(ue(rn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Qe){me.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(va);let n=Wl(Ei.h,va.h,e),s=Wl(Ei.s,va.s,e),r=Wl(Ei.l,va.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new te;te.NAMES=Ju;var is=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new C,di=new C,Kl=new C,fi=new C,Ss=new C,bs=new C,Gh=new C,jl=new C,Ql=new C,tc=new C,ec=new Ie,nc=new Ie,ic=new Ie,Pi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),di.subVectors(n,e),Kl.subVectors(t,e);let a=kn.dot(kn),o=kn.dot(di),l=kn.dot(Kl),c=di.dot(di),h=di.dot(Kl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,n),ic.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(nc,r.y),a.addScaledVector(ic,r.z),a}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),di.subVectors(t,e),kn.cross(di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),kn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,n),bs.subVectors(r,n),jl.subVectors(t,n);let l=Ss.dot(jl),c=bs.dot(jl);if(l<=0&&c<=0)return e.copy(n);Ql.subVectors(t,s);let h=Ss.dot(Ql),d=bs.dot(Ql);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ss,a);tc.subVectors(t,r);let f=Ss.dot(tc),g=bs.dot(tc);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(bs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Gh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Gh,o);let p=1/(m+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},si=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Sa.subVectors(this.max,fr),ws.subVectors(t.a,fr),Ts.subVectors(t.b,fr),As.subVectors(t.c,fr),Ci.subVectors(Ts,ws),Ri.subVectors(As,Ts),Zi.subVectors(ws,As);let e=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Zi.z,Zi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Zi.z,0,-Zi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Zi.y,Zi.x,0];return!sc(e,ws,Ts,As,Sa)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,ws,Ts,As,Sa))?!1:(ba.crossVectors(Ci,Ri),e=[ba.x,ba.y,ba.z],sc(e,ws,Ts,As,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pi=[new C,new C,new C,new C,new C,new C,new C,new C],Vn=new C,Ma=new si,ws=new C,Ts=new C,As=new C,Ci=new C,Ri=new C,Zi=new C,fr=new C,Sa=new C,ba=new C,$i=new C;function sc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$i.fromArray(i,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ke=new C,wa=new _t,kf=0,dn=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wa.fromBufferAttribute(this,e),wa.applyMatrix3(t),this.setXY(e,wa.x,wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Er=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vf=new si,pr=new C,rc=new C,ri=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(rc)),this.expandByPoint(pr.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gf=0,Nn=new ce,ac=new Ue,Es=new C,Tn=new si,mr=new si,Ze=new C,we=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ef(t)?Cr:Er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return ac.lookAt(t),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(Tn.min,mr.min),Tn.expandByPoint(Ze),Ze.addVectors(Tn.max,mr.max),Tn.expandByPoint(Ze)):(Tn.expandByPoint(mr.min),Tn.expandByPoint(mr.max))}Tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(t,c),Ze.add(Es)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new C,l[_]=new C;let c=new C,h=new C,d=new C,u=new _t,f=new _t,g=new _t,M=new C,m=new C;function p(_,E,N){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,N),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,N),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[_].add(M),o[E].add(M),o[N].add(M),l[_].add(m),l[E].add(m),l[N].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,E=S.length;_<E;++_){let N=S[_],U=N.start,B=N.count;for(let W=U,F=U+B;W<F;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let I=new C,v=new C,w=new C,b=new C;function L(_){w.fromBufferAttribute(s,_),b.copy(w);let E=o[_];I.copy(E),I.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(b,E);let U=v.dot(l[_])<0?-1:1;a.setXYZW(_,I.x,I.y,I.z,U)}for(let _=0,E=S.length;_<E;++_){let N=S[_],U=N.start,B=N.count;for(let W=U,F=U+B;W<F;W+=3)L(t.getX(W+0)),L(t.getX(W+1)),L(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new dn(u,h,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oc=new C,Hf=new C,Wf=new ne,Gn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oc.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wf.getNormalMatrix(t),s=this.coplanarPoint(oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xf=0,Wn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=zi,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Uc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mi=new C,lc=new C,Ta=new C,Aa=new C,ss=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lc.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),Aa.copy(this.origin).sub(lc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ta),o=Aa.dot(this.direction),l=-Aa.dot(Ta),c=Aa.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lc).addScaledVector(Ta,u),f}intersectSphere(t,e){if(t.radius<0)return null;mi.subVectors(t.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,I=n.z-a.z,v=Math.abs(l),w=Math.abs(c),b=Math.abs(h),L,_,E,N,U,B,W,F,H,j,J,lt;if(v>=w&&v>=b?(E=l,B=d,H=g,lt=p,l>=0?(L=c,_=h,N=u,U=f,W=M,F=m,j=S,J=I):(L=h,_=c,N=f,U=u,W=m,F=M,j=I,J=S)):w>=b?(E=c,B=u,H=M,lt=S,c>=0?(L=h,_=l,N=f,U=d,W=m,F=g,j=I,J=p):(L=l,_=h,N=d,U=f,W=g,F=m,j=p,J=I)):(E=h,B=f,H=m,lt=I,h>=0?(L=l,_=c,N=d,U=u,W=g,F=M,j=p,J=S):(L=c,_=l,N=u,U=d,W=M,F=g,j=S,J=p)),E===0)return null;let tt=L/E,st=_/E,rt=1/E,Dt=N-tt*B,Nt=U-st*B,fe=W-tt*H,ie=F-st*H,ee=j-tt*lt,et=J-st*lt,at=ee*ie-et*fe,St=Dt*et-Nt*ee,$t=fe*Nt-ie*Dt;if(s){if(at<0||St<0||$t<0)return null}else if((at<0||St<0||$t<0)&&(at>0||St>0||$t>0))return null;let It=at+St+$t;if(It===0)return null;let Ot=rt*(at*B+St*H+$t*lt);return(It>0?Ot<0:Ot>0)?null:this.at(Ot/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hh=new ce,Ji=new ss,Ea=new ri,Wh=new C,Ca=new C,Ra=new C,Ia=new C,cc=new C,Pa=new C,Xh=new C,La=new C,At=class extends Ue{constructor(t=new we,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(cc.fromBufferAttribute(d,t),a?Pa.addScaledVector(cc,h):Pa.addScaledVector(cc.sub(e),h))}e.add(Pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(Ea.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ea,Wh)===null||Ji.origin.distanceToSquared(Wh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),I=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,w=I;v<w;v+=3){let b=o.getX(v),L=o.getX(v+1),_=o.getX(v+2);s=Na(this,p,t,n,c,h,d,b,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let S=o.getX(m),I=o.getX(m+1),v=o.getX(m+2);s=Na(this,a,t,n,c,h,d,S,I,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),I=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,w=I;v<w;v+=3){let b=v,L=v+1,_=v+2;s=Na(this,p,t,n,c,h,d,b,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let S=m,I=m+1,v=m+2;s=Na(this,a,t,n,c,h,d,S,I,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function qf(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Bi,o),l===null)return null;La.copy(o),La.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:i}}function Na(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ca),i.getVertexPosition(l,Ra),i.getVertexPosition(c,Ia);let h=qf(i,t,e,n,Ca,Ra,Ia,Xh);if(h){let d=new C;Pi.getBarycoord(Xh,Ca,Ra,Ia,d),s&&(h.uv=Pi.getInterpolatedAttribute(s,o,l,c,d,new _t)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,o,l,c,d,new _t)),a&&(h.normal=Pi.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Pi.getNormal(Ca,Ra,Ia,u.normal),h.face=u,h.barycoord=d}return h}var Rr=class extends fn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=$e,h=$e,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zs=class extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new ce,qh=new ce,Da=[],Yh=new si,Yf=new ce,gr=new At,xr=new ri,Xn=class extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Yh.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),xr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),qh.multiplyMatrices(n,Cs),gr.matrixWorld=qh,gr.raycast(t,Da);for(let a=0,o=Da.length;a<o;a++){let l=Da[a];l.instanceId=r,l.object=this,e.push(l)}Da.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rr(new Float32Array(s*this.count),s,this.count,Vo,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new ri,Zf=new _t(.5,.5),Ua=new C,ks=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],S=r[12],I=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-g,w-S).normalize(),s[1].setComponents(c+a,f+h,p+g,w+S).normalize(),s[2].setComponents(c+o,f+d,p+M,w+I).normalize(),s[3].setComponents(c-o,f-d,p-M,w-I).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,p-m,w-v).normalize();else if(s[4].setComponents(c-l,f-u,p-m,w-v).normalize(),e===Hn)s[5].setComponents(c+l,f+u,p+m,w+v).normalize();else if(e===Ds)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);let e=Zf.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ua.x=s.normal.x>0?t.max.x:t.min.x,Ua.y=s.normal.y>0?t.max.y:t.min.y,Ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vs=class extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ao=new C,oo=new C,Zh=new ce,_r=new ss,Fa=new ri,hc=new C,$h=new C,Ir=class extends Ue{constructor(t=new we,e=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ao.fromBufferAttribute(e,s-1),oo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ao.distanceTo(oo);t.setAttribute("lineDistance",new re(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,t.ray.intersectsSphere(Fa)===!1)return;Zh.copy(s).invert(),_r.copy(t.ray).applyMatrix4(Zh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=h.getX(M),S=h.getX(M+1),I=Oa(this,t,_r,l,p,S,M);I&&e.push(I)}if(this.isLineLoop){let M=h.getX(g-1),m=h.getX(f),p=Oa(this,t,_r,l,M,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=Oa(this,t,_r,l,M,M+1,M);p&&e.push(p)}if(this.isLineLoop){let M=Oa(this,t,_r,l,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Oa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(ao.fromBufferAttribute(o,s),oo.fromBufferAttribute(o,r),e.distanceSqToSegment(ao,oo,hc,$h)>n)return;hc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(hc);if(!(c<t.near||c>t.far))return{distance:c,point:$h.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Gs=class extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jh=new ce,Mc=new ss,Ba=new ri,za=new C,xi=class extends Ue{constructor(t=new we,e=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,t.ray.intersectsSphere(Ba)===!1)return;Jh.copy(s).invert(),Mc.copy(t.ray).applyMatrix4(Jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,M=f;g<M;g++){let m=c.getX(g);za.fromBufferAttribute(d,m),Kh(za,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,M=f;g<M;g++)za.fromBufferAttribute(d,g),Kh(za,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Kh(i,t,e,n,s,r,a){let o=Mc.distanceSqToPoint(i);if(o<e){let l=new C;Mc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Pr=class extends fn{constructor(t=[],e=ki,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},En=class extends fn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends fn{constructor(t,e,n=Yn,s,r,a,o=$e,l=$e,c,h=ni,d=1){if(h!==ni&&h!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},lo=class extends Ni{constructor(t,e=Yn,n=ki,s,r,a=$e,o=$e,l,c=ni){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lr=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pn=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function g(M,m,p,S,I,v,w,b,L,_,E){let N=v/L,U=w/_,B=v/2,W=w/2,F=b/2,H=L+1,j=_+1,J=0,lt=0,tt=new C;for(let st=0;st<j;st++){let rt=st*U-W;for(let Dt=0;Dt<H;Dt++){let Nt=Dt*N-B;tt[M]=Nt*S,tt[m]=rt*I,tt[p]=F,c.push(tt.x,tt.y,tt.z),tt[M]=0,tt[m]=0,tt[p]=b>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Dt/L),d.push(1-st/_),J+=1}}for(let st=0;st<_;st++)for(let rt=0;rt<L;rt++){let Dt=u+rt+H*st,Nt=u+rt+H*(st+1),fe=u+(rt+1)+H*(st+1),ie=u+(rt+1)+H*st;l.push(Dt,Nt,ie),l.push(Nt,fe,ie),lt+=6}o.addGroup(f,lt,E),f+=lt,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Se=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,M=[],m=n/2,p=0;S(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function S(){let v=new C,w=new C,b=0,L=(e-t)/n;for(let _=0;_<=r;_++){let E=[],N=_/r,U=N*(e-t)+t;for(let B=0;B<=s;B++){let W=B/s,F=W*l+o,H=Math.sin(F),j=Math.cos(F);w.x=U*H,w.y=-N*n+m,w.z=U*j,d.push(w.x,w.y,w.z),v.set(H,L,j).normalize(),u.push(v.x,v.y,v.z),f.push(W,1-N),E.push(g++)}M.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let N=M[E][_],U=M[E+1][_],B=M[E+1][_+1],W=M[E][_+1];(t>0||E!==0)&&(h.push(N,U,W),b+=3),(e>0||E!==r-1)&&(h.push(U,B,W),b+=3)}c.addGroup(p,b,0),p+=b}function I(v){let w=g,b=new _t,L=new C,_=0,E=v===!0?t:e,N=v===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;let U=g;for(let B=0;B<=s;B++){let F=B/s*l+o,H=Math.cos(F),j=Math.sin(F);L.x=E*j,L.y=m*N,L.z=E*H,d.push(L.x,L.y,L.z),u.push(0,N,0),b.x=H*.5+.5,b.y=j*.5*N+.5,f.push(b.x,b.y),g++}for(let B=0;B<s;B++){let W=w+B,F=U+B;v===!0?h.push(F,F+1,W):h.push(F+1,F,W),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rs=class i extends Se{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},co=class i extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let I=new C,v=new C,w=new C;for(let b=0;b<e.length;b+=3)f(e[b+0],I),f(e[b+1],v),f(e[b+2],w),l(I,v,w,S)}function l(S,I,v,w){let b=w+1,L=[];for(let _=0;_<=b;_++){L[_]=[];let E=S.clone().lerp(v,_/b),N=I.clone().lerp(v,_/b),U=b-_;for(let B=0;B<=U;B++)B===0&&_===b?L[_][B]=E:L[_][B]=E.clone().lerp(N,B/U)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){let N=Math.floor(E/2);E%2===0?(u(L[_][N+1]),u(L[_+1][N]),u(L[_][N])):(u(L[_][N+1]),u(L[_+1][N+1]),u(L[_+1][N]))}}function c(S){let I=new C;for(let v=0;v<r.length;v+=3)I.x=r[v+0],I.y=r[v+1],I.z=r[v+2],I.normalize().multiplyScalar(S),r[v+0]=I.x,r[v+1]=I.y,r[v+2]=I.z}function h(){let S=new C;for(let I=0;I<r.length;I+=3){S.x=r[I+0],S.y=r[I+1],S.z=r[I+2];let v=m(S)/2/Math.PI+.5,w=p(S)/Math.PI+.5;a.push(v,1-w)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let I=a[S+0],v=a[S+2],w=a[S+4],b=Math.max(I,v,w),L=Math.min(I,v,w);b>.9&&L<.1&&(I<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,I){let v=S*3;I.x=t[v+0],I.y=t[v+1],I.z=t[v+2]}function g(){let S=new C,I=new C,v=new C,w=new C,b=new _t,L=new _t,_=new _t;for(let E=0,N=0;E<r.length;E+=9,N+=6){S.set(r[E+0],r[E+1],r[E+2]),I.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),b.set(a[N+0],a[N+1]),L.set(a[N+2],a[N+3]),_.set(a[N+4],a[N+5]),w.copy(S).add(I).add(v).divideScalar(3);let U=m(w);M(b,N+0,S,U),M(L,N+2,I,U),M(_,N+4,v,U)}}function M(S,I,v,w){w<0&&S.x===1&&(a[I]=S.x-1),v.x===0&&v.z===0&&(a[I]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new ce;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hs=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ho=class extends Hs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var jh=new C,Qh=new C,uc=new Kc,dc=new Kc,fc=new Kc,uo=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qh.subVectors(s[0],s[1]).add(s[0]),c=Qh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),uc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,m),dc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,m),fc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),dc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),fc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(uc.calc(l),dc.calc(l),fc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function tu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function $f(i,t){let e=1-i;return e*e*t}function Jf(i,t){return 2*(1-i)*i*t}function Kf(i,t){return i*i*t}function vr(i,t,e,n){return $f(i,t)+Jf(i,e)+Kf(i,n)}function jf(i,t){let e=1-i;return e*e*e*t}function Qf(i,t){let e=1-i;return 3*e*e*i*t}function tp(i,t){return 3*(1-i)*i*i*t}function ep(i,t){return i*i*i*t}function Mr(i,t,e,n,s){return jf(i,t)+Qf(i,e)+tp(i,n)+ep(i,s)}var Nr=class extends Cn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mr(t,s.x,r.x,a.x,o.x),Mr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fo=class extends Cn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mr(t,s.x,r.x,a.x,o.x),Mr(t,s.y,r.y,a.y,o.y),Mr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dr=class extends Cn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Cn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends Cn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(t,s.x,r.x,a.x),vr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends Cn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(t,s.x,r.x,a.x),vr(t,s.y,r.y,a.y),vr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(tu(o,l.x,c.x,h.x,d.x),tu(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Sc=Object.freeze({__proto__:null,ArcCurve:ho,CatmullRomCurve3:uo,CubicBezierCurve:Nr,CubicBezierCurve3:fo,EllipseCurve:Hs,LineCurve:Dr,LineCurve3:po,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:mo,SplineCurve:Fr}),go=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}},Or=class extends go{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Dr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ur(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Nr(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Hs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ws=class extends Or{constructor(t){super(t),this.uuid=Qs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Or().fromJSON(s))}return this}};function np(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ku(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=op(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Br(r,a,e,o,l,c,0),a}function Ku(i,t,e,n,s){let r;if(s===_p(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=eu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=eu(a/n|0,i[a],i[a+1],r);return r&&Xs(r,r.next)&&(kr(r),r=r.next),r}function as(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xs(e,e.next)||De(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Br(i,t,e,n,s,r,a){if(!i)return;!a&&r&&dp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sp(i,n,s,r):ip(i)){t.push(l.i,i.i,c.i),kr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rp(as(i),t),Br(i,t,e,n,s,r,2)):a===2&&ap(i,t,e,n,s,r):Br(as(i),t,e,n,s,r,1);break}}}function ip(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&yr(s,o,r,l,a,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(De(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),p=bc(f,g,t,e,n),S=bc(M,m,t,e,n),I=i.prevZ,v=i.nextZ;for(;I&&I.z>=p&&v&&v.z<=S;){if(I.x>=f&&I.x<=M&&I.y>=g&&I.y<=m&&I!==s&&I!==a&&yr(o,h,l,d,c,u,I.x,I.y)&&De(I.prev,I,I.next)>=0||(I=I.prevZ,v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&yr(o,h,l,d,c,u,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;I&&I.z>=p;){if(I.x>=f&&I.x<=M&&I.y>=g&&I.y<=m&&I!==s&&I!==a&&yr(o,h,l,d,c,u,I.x,I.y)&&De(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&yr(o,h,l,d,c,u,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function rp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Xs(n,s)&&Qu(n,e,e.next,s)&&zr(n,s)&&zr(s,n)&&(t.push(n.i,e.i,s.i),kr(e),kr(e.next),e=i=s),e=e.next}while(e!==i);return as(e)}function ap(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mp(a,o)){let l=td(a,o);a=as(a,a.next),l=as(l,l.next),Br(a,t,e,n,s,r,0),Br(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function op(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Ku(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pp(c))}s.sort(lp);for(let r=0;r<s.length;r++)e=cp(s[r],e);return e}function lp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cp(i,t){let e=hp(i,t);if(!e)return t;let n=td(e,i);return as(n,n.next),as(e,e.next)}function hp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Xs(i,e))return e;do{if(Xs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ju(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);zr(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&up(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function up(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function dp(i,t,e,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fp(s)}function fp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ju(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function yr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&ju(i,t,e,n,s,r,a,o)}function mp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gp(i,t)&&(zr(i,t)&&zr(t,i)&&xp(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||Xs(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xs(i,t){return i.x===t.x&&i.y===t.y}function Qu(i,t,e,n){let s=Va(De(i,t,e)),r=Va(De(i,t,n)),a=Va(De(e,n,i)),o=Va(De(e,n,t));return!!(s!==r&&a!==o||s===0&&ka(i,e,t)||r===0&&ka(i,n,t)||a===0&&ka(e,i,n)||o===0&&ka(e,t,n))}function ka(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Va(i){return i>0?1:i<0?-1:0}function gp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function xp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function td(i,t){let e=wc(i.i,i.x,i.y),n=wc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function eu(i,t,e,n){let s=wc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Tc=class{static triangulate(t,e,n=2){return np(t,e,n)}},es=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];nu(t),iu(n,t);let a=t.length;e.forEach(nu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,iu(n,e[l]);let o=Tc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function nu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function iu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vr=class i extends we{constructor(t=new Ws([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:yp,I,v=!1,w,b,L,_;if(p){I=p.getSpacedPoints(h),v=!0,u=!1;let Q=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,Q),b=new C,L=new C,_=new C}u||(m=0,f=0,g=0,M=0);let E=o.extractPoints(c),N=E.shape,U=E.holes;if(!es.isClockWise(N)){N=N.reverse();for(let Q=0,ut=U.length;Q<ut;Q++){let pt=U[Q];es.isClockWise(pt)&&(U[Q]=pt.reverse())}}function W(Q){let pt=10000000000000001e-36,ft=Q[0];for(let vt=1;vt<=Q.length;vt++){let zt=vt%Q.length,Vt=Q[zt],$=Vt.x-ft.x,ct=Vt.y-ft.y,P=$*$+ct*ct,Pt=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(ft.x),Math.abs(ft.y)),gt=pt*Pt*Pt;if(P<=gt){Q.splice(zt,1),vt--;continue}ft=Vt}}W(N),U.forEach(W);let F=U.length,H=N;for(let Q=0;Q<F;Q++){let ut=U[Q];N=N.concat(ut)}function j(Q,ut,pt){return ut||jt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ut,pt)}let J=N.length;function lt(Q,ut,pt){let ft,vt,zt,Vt=Q.x-ut.x,$=Q.y-ut.y,ct=pt.x-Q.x,P=pt.y-Q.y,Pt=Vt*Vt+$*$,gt=Vt*P-$*ct;if(Math.abs(gt)>Number.EPSILON){let A=Math.sqrt(Pt),x=Math.sqrt(ct*ct+P*P),V=ut.x-$/A,X=ut.y+Vt/A,Z=pt.x-P/x,ht=pt.y+ct/x,mt=((Z-V)*P-(ht-X)*ct)/(Vt*P-$*ct);ft=V+Vt*mt-Q.x,vt=X+$*mt-Q.y;let it=ft*ft+vt*vt;if(it<=2)return new _t(ft,vt);zt=Math.sqrt(it/2)}else{let A=!1;Vt>Number.EPSILON?ct>Number.EPSILON&&(A=!0):Vt<-Number.EPSILON?ct<-Number.EPSILON&&(A=!0):Math.sign($)===Math.sign(P)&&(A=!0),A?(ft=-$,vt=Vt,zt=Math.sqrt(Pt)):(ft=Vt,vt=$,zt=Math.sqrt(Pt/2))}return new _t(ft/zt,vt/zt)}let tt=[];for(let Q=0,ut=H.length,pt=ut-1,ft=Q+1;Q<ut;Q++,pt++,ft++)pt===ut&&(pt=0),ft===ut&&(ft=0),tt[Q]=lt(H[Q],H[pt],H[ft]);let st=[],rt,Dt=tt.concat();for(let Q=0,ut=F;Q<ut;Q++){let pt=U[Q];rt=[];for(let ft=0,vt=pt.length,zt=vt-1,Vt=ft+1;ft<vt;ft++,zt++,Vt++)zt===vt&&(zt=0),Vt===vt&&(Vt=0),rt[ft]=lt(pt[ft],pt[zt],pt[Vt]);st.push(rt),Dt=Dt.concat(rt)}let Nt;if(m===0)Nt=es.triangulateShape(H,U);else{let Q=[],ut=[];for(let pt=0;pt<m;pt++){let ft=pt/m,vt=f*Math.cos(ft*Math.PI/2),zt=g*Math.sin(ft*Math.PI/2)+M;for(let Vt=0,$=H.length;Vt<$;Vt++){let ct=j(H[Vt],tt[Vt],zt);St(ct.x,ct.y,-vt),ft===0&&Q.push(ct)}for(let Vt=0,$=F;Vt<$;Vt++){let ct=U[Vt];rt=st[Vt];let P=[];for(let Pt=0,gt=ct.length;Pt<gt;Pt++){let A=j(ct[Pt],rt[Pt],zt);St(A.x,A.y,-vt),ft===0&&P.push(A)}ft===0&&ut.push(P)}}Nt=es.triangulateShape(Q,ut)}let fe=Nt.length,ie=g+M;for(let Q=0;Q<J;Q++){let ut=u?j(N[Q],Dt[Q],ie):N[Q];v?(L.copy(w.normals[0]).multiplyScalar(ut.x),b.copy(w.binormals[0]).multiplyScalar(ut.y),_.copy(I[0]).add(L).add(b),St(_.x,_.y,_.z)):St(ut.x,ut.y,0)}for(let Q=1;Q<=h;Q++)for(let ut=0;ut<J;ut++){let pt=u?j(N[ut],Dt[ut],ie):N[ut];v?(L.copy(w.normals[Q]).multiplyScalar(pt.x),b.copy(w.binormals[Q]).multiplyScalar(pt.y),_.copy(I[Q]).add(L).add(b),St(_.x,_.y,_.z)):St(pt.x,pt.y,d/h*Q)}for(let Q=m-1;Q>=0;Q--){let ut=Q/m,pt=f*Math.cos(ut*Math.PI/2),ft=g*Math.sin(ut*Math.PI/2)+M;for(let vt=0,zt=H.length;vt<zt;vt++){let Vt=j(H[vt],tt[vt],ft);St(Vt.x,Vt.y,d+pt)}for(let vt=0,zt=U.length;vt<zt;vt++){let Vt=U[vt];rt=st[vt];for(let $=0,ct=Vt.length;$<ct;$++){let P=j(Vt[$],rt[$],ft);v?St(P.x,P.y+I[h-1].y,I[h-1].x+pt):St(P.x,P.y,d+pt)}}}ee(),et();function ee(){let Q=s.length/3;if(u){let ut=0,pt=J*ut;for(let ft=0;ft<fe;ft++){let vt=Nt[ft];$t(vt[2]+pt,vt[1]+pt,vt[0]+pt)}ut=h+m*2,pt=J*ut;for(let ft=0;ft<fe;ft++){let vt=Nt[ft];$t(vt[0]+pt,vt[1]+pt,vt[2]+pt)}}else{for(let ut=0;ut<fe;ut++){let pt=Nt[ut];$t(pt[2],pt[1],pt[0])}for(let ut=0;ut<fe;ut++){let pt=Nt[ut];$t(pt[0]+J*h,pt[1]+J*h,pt[2]+J*h)}}n.addGroup(Q,s.length/3-Q,0)}function et(){let Q=s.length/3,ut=0;at(H,ut),ut+=H.length;for(let pt=0,ft=U.length;pt<ft;pt++){let vt=U[pt];at(vt,ut),ut+=vt.length}n.addGroup(Q,s.length/3-Q,1)}function at(Q,ut){let pt=Q.length;for(;--pt>=0;){let ft=pt,vt=pt-1;vt<0&&(vt=Q.length-1);for(let zt=0,Vt=h+m*2;zt<Vt;zt++){let $=J*zt,ct=J*(zt+1),P=ut+ft+$,Pt=ut+vt+$,gt=ut+vt+ct,A=ut+ft+ct;It(P,Pt,gt,A)}}}function St(Q,ut,pt){l.push(Q),l.push(ut),l.push(pt)}function $t(Q,ut,pt){Ot(Q),Ot(ut),Ot(pt);let ft=s.length/3,vt=S.generateTopUV(n,s,ft-3,ft-2,ft-1);he(vt[0]),he(vt[1]),he(vt[2])}function It(Q,ut,pt,ft){Ot(Q),Ot(ut),Ot(ft),Ot(ut),Ot(pt),Ot(ft);let vt=s.length/3,zt=S.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);he(zt[0]),he(zt[1]),he(zt[3]),he(zt[1]),he(zt[2]),he(zt[3])}function Ot(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function he(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sc[s.type]().fromJSON(s)),new i(n,t.options)}},yp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new _t(r,a),new _t(o,l),new _t(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _t(a,1-l),new _t(c,1-d),new _t(u,1-g),new _t(M,1-p)]:[new _t(o,1-l),new _t(h,1-d),new _t(f,1-g),new _t(m,1-p)]}};function vp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gr=class i extends co{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Di=class i extends we{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ue(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new C,u=new _t,f=new C,g=new C,M=new C,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(g)}for(let S=0;S<=e;S++){let I=n+S*h*s,v=Math.sin(I),w=Math.cos(I);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*w,a.push(d.x,d.y,d.z),u.x=S/e,u.y=b/(t.length-1),o.push(u.x,u.y);let L=l[3*b+0]*v,_=l[3*b+1],E=l[3*b+0]*w;c.push(L,_,E)}}for(let S=0;S<e;S++)for(let I=0;I<t.length-1;I++){let v=I+S*t.length,w=v,b=v+t.length,L=v+t.length+1,_=v+1;r.push(w,b,_),r.push(L,_,b)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ve=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let I=0;I<c;I++){let v=I*d-r;g.push(v,-S,0),M.push(0,0,1),m.push(I/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let I=S+c*p,v=S+c*(p+1),w=S+1+c*(p+1),b=S+1+c*p;f.push(I,v,b),f.push(v,w,b)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(M,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var _n=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,u=new C,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let S=[],I=p/n,v=a+I*o,w=t*Math.cos(v),b=Math.sqrt(t*t-w*w),L=0;p===0&&a===0?L=.5/e:p===n&&l===Math.PI&&(L=-.5/e);for(let _=0;_<=e;_++){let E=_/e,N=s+E*r;d.x=-b*Math.cos(N),d.y=w,d.z=b*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(E+L,1-I),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let I=h[p][S+1],v=h[p][S],w=h[p+1][S],b=h[p+1][S+1];(p!==0||a>0)&&f.push(I,v,b),(p!==n-1||l<Math.PI)&&f.push(v,w,b)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(M,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qs=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,S=(s+1)*(M-1)+m-1,I=(s+1)*(M-1)+m,v=(s+1)*M+m;l.push(p,S,v),l.push(S,I,v)}this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(su(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(su(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let s in n)t[s]=n[s]}return t}function su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var ed={clone:hs,merge:on},Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xo=class extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},de=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Hr=class extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Do,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_o=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yo=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vo=class extends Ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_c,endingEnd:_c}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case yc:r=t,o=2*e-n;break;case vc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yc:a=t,l=2*n-e;break;case vc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,p=-u*m+2*u*M-u*g,S=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,I=(-1-f)*m+(1.5+f)*M+.5*g,v=f*m-f*M;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+S*a[c+w]+I*a[l+w]+v*a[d+w];return r}},Mo=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},So=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bo=class extends Ui{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*u+g*2,S=d[p],I=d[p+1],v=t*u+g*2,w=h[v],b=h[v+1],L=Tp(n,e,S,w,s);r[g]=nd(L,M,I,b,m)}return r}};function nd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Tp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=nd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=wp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),pc(t.settings)&&(n.settings={inTangents:Rs(t.settings.inTangents,Array),outTangents:Rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new bo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break;case xc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;pc(this.settings)&&(ru(this.settings.inTangents,t),ru(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Cf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,pc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ru(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=eo;var Fi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Sr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};wo.prototype.ValueTypeName="color";var To=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};To.prototype.ValueTypeName="number";var Ao=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Be.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wr=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ao(this.times,this.values,this.getValueSize(),t)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Sr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Eo.prototype.ValueTypeName="vector";var Co=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new Co,Ro=class{constructor(t){this.manager=t!==void 0?t:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Xr=class extends Ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},mc=new ce,au=new C,ou=new C,qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;au.setFromMatrixPosition(t.matrixWorld),e.position.copy(au),ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ou),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ga=new C,Ha=new Be,ti=new C,Yr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ga,Ha,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ga,Ha,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new C,lu=new _t,cu=new _t,tn=class extends Yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ac=class extends qr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Zr=class extends Ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ac}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zs=class extends Yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ec=class extends qr{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Ec}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Wa,Io=class{static getContext(){return Wa===void 0&&(Wa=new(window.AudioContext||window.webkitAudioContext)),Wa}static setContext(t){Wa=t}};var Is=-90,Ps=1,Po=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Is,Ps,t,e);s.layers=this.layers,this.add(s);let r=new tn(Is,Ps,t,e);r.layers=this.layers,this.add(r);let a=new tn(Is,Ps,t,e);a.layers=this.layers,this.add(a);let o=new tn(Is,Ps,t,e);o.layers=this.layers,this.add(o);let l=new tn(Is,Ps,t,e);l.layers=this.layers,this.add(l);let c=new tn(Is,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Lo=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},No=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ap.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ap(){this._document.hidden===!1&&this.reset()}var ji=new C,gc=new Be,Ep=new C,Qi=new C,ts=new C,$r=class extends Ue{constructor(){super(),this.type="AudioListener",this.context=Io.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new No}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(ji,gc,Ep),Qi.set(0,0,-1).applyQuaternion(gc),ts.set(0,1,0).applyQuaternion(gc),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ji.x,n),e.positionY.linearRampToValueAtTime(ji.y,n),e.positionZ.linearRampToValueAtTime(ji.z,n),e.forwardX.linearRampToValueAtTime(Qi.x,n),e.forwardY.linearRampToValueAtTime(Qi.y,n),e.forwardZ.linearRampToValueAtTime(Qi.z,n),e.upX.linearRampToValueAtTime(ts.x,n),e.upY.linearRampToValueAtTime(ts.y,n),e.upZ.linearRampToValueAtTime(ts.z,n)}else e.setPosition(ji.x,ji.y,ji.z),e.setOrientation(Qi.x,Qi.y,Qi.z,ts.x,ts.y,ts.z)}};var Qc="\\[\\]\\.:\\/",Cp=new RegExp("["+Qc+"]","g"),th="[^"+Qc+"]",Rp="[^"+Qc.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",th),Pp=/(WCOD+)?/.source.replace("WCOD",Rp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),Dp=new RegExp("^"+Ip+Pp+Lp+Np+"$"),Up=["material","materials","bones","map"],Cc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){let e=Dp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Up.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Cc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);var hu=new ce,Jr=class{constructor(t,e,n=0,s=1/0){this.ray=new ss(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hu),this}intersectObject(t,e=!0,n=[]){return Rc(t,this,n,e),n.sort(uu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Rc(t[s],this,n,e);return n.sort(uu),n}};function uu(i,t){return i.distance-t.distance}function Rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Rc(r[a],t,e,!0)}}var Ic=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function eh(i,t,e,n){let s=Fp(n);switch(e){case Yc:return i*t;case Vo:return i*t/s.components*s.byteLength;case Go:return i*t/s.components*s.byteLength;case Hi:return i*t*2/s.components*s.byteLength;case Ho:return i*t*2/s.components*s.byteLength;case Zc:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case Wo:return i*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:case Zo:return Math.max(i,16)*Math.max(t,8)/4;case Xo:case Yo:return Math.max(i,8)*Math.max(t,8)/2;case $o:case Jo:case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:case sa:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _l:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fp(i){switch(i){case yn:case Hc:return{byteLength:1,components:1};case Ks:case Wc:case Zn:return{byteLength:2,components:1};case zo:case ko:return{byteLength:2,components:4};case Yn:case Bo:case Fn:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Td(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wp=`#ifdef USE_ALPHAHASH
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
}`,le={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:$p,aomap_fragment:Jp,aomap_pars_fragment:Kp,batching_pars_vertex:jp,batching_vertex:Qp,begin_vertex:tm,beginnormal_vertex:em,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:xm,emissivemap_fragment:_m,emissivemap_pars_fragment:ym,colorspace_fragment:vm,colorspace_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:bm,envmap_pars_fragment:wm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:Am,fog_vertex:Em,fog_pars_vertex:Cm,fog_fragment:Rm,fog_pars_fragment:Im,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Hm,lights_fragment_maps:Wm,lights_fragment_end:Xm,lightprobes_pars_fragment:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Jm,map_fragment:Km,map_pars_fragment:jm,map_particle_fragment:Qm,map_particle_pars_fragment:t0,metalnessmap_fragment:e0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:x0,opaque_fragment:_0,packing:y0,premultiplied_alpha_fragment:v0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:E0,shadowmap_vertex:C0,shadowmask_pars_fragment:R0,skinbase_vertex:I0,skinning_pars_vertex:P0,skinning_vertex:L0,skinnormal_vertex:N0,specularmap_fragment:D0,specularmap_pars_fragment:U0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:k0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:H0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:Z0,cube_frag:$0,depth_vert:J0,depth_frag:K0,distance_vert:j0,distance_frag:Q0,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:xg,points_vert:_g,points_frag:yg,shadow_vert:vg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:bg},Ct={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},li={basic:{uniforms:on([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:on([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:on([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:on([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:on([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new te(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:on([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:on([Ct.points,Ct.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:on([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:on([Ct.common,Ct.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:on([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:on([Ct.sprite,Ct.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:on([Ct.common,Ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:on([Ct.lights,Ct.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};li.physical={uniforms:on([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var bl={r:0,b:0,g:0},wg=new ce,Ad=new ne;Ad.set(-1,0,0,0,1,0,0,0,1);function Tg(i,t,e,n,s,r){let a=new te(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let I=S.isScene===!0?S.background:null;if(I&&I.isTexture){let v=S.backgroundBlurriness>0;I=t.get(I,v)}return I}function g(S){let I=!1,v=f(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),I=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,I){let v=f(I);v&&(v.isCubeTexture||v.mapping===jr)?(c===void 0&&(c=new At(new pn(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:hs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(I.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ad),c.material.toneMapped=me.getTransfer(v.colorSpace)!==Me,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new Ve(2,2),new Je({name:"BackgroundMaterial",uniforms:hs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=me.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,I){S.getRGB(bl,jc(i)),e.buffers.color.setClear(bl.r,bl.g,bl.b,I,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,I=1){a.set(S),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:M,dispose:p}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,B,W,F,H){let j=!1,J=d(U,F,W,B);r!==J&&(r=J,c(r.object)),j=f(U,F,W,H),j&&g(U,F,W,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(U,B,W,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,B,W,F){let H=F.wireframe===!0,j=n[B.id];j===void 0&&(j={},n[B.id]=j);let J=U.isInstancedMesh===!0?U.id:0,lt=j[J];lt===void 0&&(lt={},j[J]=lt);let tt=lt[W.id];tt===void 0&&(tt={},lt[W.id]=tt);let st=tt[H];return st===void 0&&(st=u(l()),tt[H]=st),st}function u(U){let B=[],W=[],F=[];for(let H=0;H<e;H++)B[H]=0,W[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:F,object:U,attributes:{},index:null}}function f(U,B,W,F){let H=r.attributes,j=B.attributes,J=0,lt=W.getAttributes();for(let tt in lt)if(lt[tt].location>=0){let rt=H[tt],Dt=j[tt];if(Dt===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(Dt=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(Dt=U.instanceColor)),rt===void 0||rt.attribute!==Dt||Dt&&rt.data!==Dt.data)return!0;J++}return r.attributesNum!==J||r.index!==F}function g(U,B,W,F){let H={},j=B.attributes,J=0,lt=W.getAttributes();for(let tt in lt)if(lt[tt].location>=0){let rt=j[tt];rt===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(rt=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(rt=U.instanceColor));let Dt={};Dt.attribute=rt,rt&&rt.data&&(Dt.data=rt.data),H[tt]=Dt,J++}r.attributes=H,r.attributesNum=J,r.index=F}function M(){let U=r.newAttributes;for(let B=0,W=U.length;B<W;B++)U[B]=0}function m(U){p(U,0)}function p(U,B){let W=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;W[U]=1,F[U]===0&&(i.enableVertexAttribArray(U),F[U]=1),H[U]!==B&&(i.vertexAttribDivisor(U,B),H[U]=B)}function S(){let U=r.newAttributes,B=r.enabledAttributes;for(let W=0,F=B.length;W<F;W++)B[W]!==U[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function I(U,B,W,F,H,j,J){J===!0?i.vertexAttribIPointer(U,B,W,H,j):i.vertexAttribPointer(U,B,W,F,H,j)}function v(U,B,W,F){M();let H=F.attributes,j=W.getAttributes(),J=B.defaultAttributeValues;for(let lt in j){let tt=j[lt];if(tt.location>=0){let st=H[lt];if(st===void 0&&(lt==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),lt==="instanceColor"&&U.instanceColor&&(st=U.instanceColor)),st!==void 0){let rt=st.normalized,Dt=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;let fe=Nt.buffer,ie=Nt.type,ee=Nt.bytesPerElement,et=ie===i.INT||ie===i.UNSIGNED_INT||st.gpuType===Bo;if(st.isInterleavedBufferAttribute){let at=st.data,St=at.stride,$t=st.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<tt.locationSize;It++)p(tt.location+It,at.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let It=0;It<tt.locationSize;It++)m(tt.location+It);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let It=0;It<tt.locationSize;It++)I(tt.location+It,Dt/tt.locationSize,ie,rt,St*ee,($t+Dt/tt.locationSize*It)*ee,et)}else{if(st.isInstancedBufferAttribute){for(let at=0;at<tt.locationSize;at++)p(tt.location+at,st.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let at=0;at<tt.locationSize;at++)m(tt.location+at);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let at=0;at<tt.locationSize;at++)I(tt.location+at,Dt/tt.locationSize,ie,rt,Dt*ee,Dt/tt.locationSize*at*ee,et)}}else if(J!==void 0){let rt=J[lt];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(tt.location,rt);break;case 3:i.vertexAttrib3fv(tt.location,rt);break;case 4:i.vertexAttrib4fv(tt.location,rt);break;default:i.vertexAttrib1fv(tt.location,rt)}}}}S()}function w(){E();for(let U in n){let B=n[U];for(let W in B){let F=B[W];for(let H in F){let j=F[H];for(let J in j)h(j[J].object),delete j[J];delete F[H]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let B=n[U.id];for(let W in B){let F=B[W];for(let H in F){let j=F[H];for(let J in j)h(j[J].object),delete j[J];delete F[H]}}delete n[U.id]}function L(U){for(let B in n){let W=n[B];for(let F in W){let H=W[F];if(H[U.id]===void 0)continue;let j=H[U.id];for(let J in j)h(j[J].object),delete j[J];delete H[U.id]}}}function _(U){for(let B in n){let W=n[B],F=U.isInstancedMesh===!0?U.id:0,H=W[F];if(H!==void 0){for(let j in H){let J=H[j];for(let lt in J)h(J[lt].object),delete J[lt];delete H[j]}delete W[F],Object.keys(W).length===0&&delete n[B]}}}function E(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Eg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==On&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let _=L===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==yn&&L!==Fn&&!_&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:I,maxFragmentUniforms:v,maxSamples:w,samples:b}}function Rg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Gn,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,I=S*4,v=p.clippingState||null;l.value=v,v=h(g,u,I,f);for(let w=0;w!==I;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,v=f;I!==M;++I,v+=4)a.copy(d[I]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var er=4,Ig=6,Pg=20,Lg=256,oa=new Zs,sd=new te,nh=null,ih=0,sh=0,rh=!1,Ng=new C,us=new C,ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ng}=r;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=rh,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Zn,format:On,colorSpace:br,depthBuffer:!1},s=rd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dg(r)),this._blurMaterial=Fg(r,t,e),this._ggxMaterial=Ug(r,t,e)}return s}_compileMaterial(t){let e=new At(new we,t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s,r){let l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(sd),d.toneMapping=qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new pn,new an({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(sd),p=!0);for(let I=0;I<6;I++){let v=I%3;v===0?(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[I],r.y,r.z)):v===1?(l.up.set(0,0,c[I]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[I],r.z)):(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[I]));let w=this._cubeSize;tr(s,v*w,I>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ki||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-er?n-g+er:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,tr(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,tr(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,oa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-er?s-this._lodMax+er:0),u=4*(this._cubeSize-h);tr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,oa)}};function Dg(i){let t=[],e=[],n=i,s=i-er+1+Ig;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),M=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,I=p>2?0:-1,v=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];g.set(v,f*u*p);for(let w=0;w<u;w++){let b=h[w*2]*2-1,L=h[w*2+1]*2-1;p===0?us.set(1,L,b):p===1?us.set(-b,1,-L):p===2?us.set(-b,L,1):p===3?us.set(-1,L,-b):p===4?us.set(-b,-1,L):us.set(b,L,-1),us.toArray(M,(p*u+w)*f)}}let m=new we;m.setAttribute("position",new dn(g,f)),m.setAttribute("outputDirection",new dn(M,f)),e.push(new At(m,null)),n>er&&n--}return{lodMeshes:e,sizeLods:t}}function rd(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ug(i,t,e){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Fg(i,t,e){return new Je({name:"SphericalGaussianBlur",defines:{SAMPLES:Pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ad(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function od(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tl=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:ai});r.uniforms.tEquirect.value=e;let a=new At(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=en),new Po(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Og(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Uo||f===Fo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new Tl(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Uo||f===Fo,M=f===ki||f===cs;if(g||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ir(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new ir(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Uo?u.mapping=ki:f===Fo&&(u.mapping=cs),u}function l(u){let f=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Bg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("WebGLRenderer: "+n+" extension not supported."),s}}}function zg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(f!==null){let S=f.array;M=f.version;for(let I=0,v=S.length;I<v;I+=3){let w=S[I+0],b=S[I+1],L=S[I+2];u.push(w,b,b,L,L,w)}}else{let S=g.array;M=g.version;for(let I=0,v=S.length/3-1;I<v;I+=3){let w=I+0,b=I+1,L=I+2;u.push(w,b,b,L,L,w)}}let m=new(g.count>=65535?Cr:Er)(u,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function kg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,t,e){let n=new WeakMap,s=new Ie;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],I=0;f===!0&&(I=1),g===!0&&(I=2),M===!0&&(I=3);let v=o.attributes.position.count*I,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*w*4*d),L=new Ar(b,v,w,d);L.type=Fn,L.needsUpdate=!0;let _=I*4;for(let N=0;N<d;N++){let U=m[N],B=p[N],W=S[N],F=v*w*4*N;for(let H=0;H<U.count;H++){let j=H*_;f===!0&&(s.fromBufferAttribute(U,H),b[F+j+0]=s.x,b[F+j+1]=s.y,b[F+j+2]=s.z,b[F+j+3]=0),g===!0&&(s.fromBufferAttribute(B,H),b[F+j+4]=s.x,b[F+j+5]=s.y,b[F+j+6]=s.z,b[F+j+7]=0),M===!0&&(s.fromBufferAttribute(W,H),b[F+j+8]=s.x,b[F+j+9]=s.y,b[F+j+10]=s.z,b[F+j+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new _t(v,w)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Wg={[Fc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[Kr]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[zc]:"CUSTOM_TONE_MAPPING"};function Xg(i,t,e,n,s,r){let a=new xn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new we;c.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new re([0,2,0,0,2,0],2));let h=new xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new At(c,h),u=new Zs(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,p=null,S=[],I=!1;this.setSize=function(v,w){a.setSize(v,w),o!==null&&o.setSize(v,w),l!==null&&l.setSize(v,w);for(let b=0;b<S.length;b++){let L=S[b];L.setSize&&L.setSize(v,w)}},this.setEffects=function(v){S=v,I=S.length>0&&S[0].isRenderPass===!0;let w=a.width,b=a.height;S.length>0&&o===null&&(o=new xn(w,b,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(w,b,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){let _=S[L];_.setSize&&_.setSize(w,b)}},this.begin=function(v,w){if(M||v.toneMapping===qn&&S.length===0)return!1;if(p=w,w!==null){let b=w.width,L=w.height;(a.width!==b||a.height!==L)&&this.setSize(b,L)}return I===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=qn,!0},this.hasRenderPass=function(){return I},this.end=function(v,w){v.toneMapping=m,M=!0;let b=a,L=o;for(let _=0;_<S.length;_++){let E=S[_];E.enabled!==!1&&(E.render(v,L,b,w),E.needsSwap!==!1&&(b=L,L=L===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},me.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");let _=Wg[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(d,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ed=new fn,lh=new Ni(1,1),Cd=new Ar,Rd=new ro,Id=new Pr,ld=[],cd=[],hd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function sr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cl(i,t){let e=cd[t];e===void 0&&(e=new Int32Array(t),cd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),We(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;ud.set(n),i.uniformMatrix3fv(this.addr,!1,ud),We(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;hd.set(n),i.uniformMatrix4fv(this.addr,!1,hd),We(e,n)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=e.isReversedDepthBuffer()?Sl:Ml,r=lh):r=Ed,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rd,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Id,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cd,s)}function ux(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return $g;case 35674:return Jg;case 35675:return Kg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(i,t){i.uniform1fv(this.addr,t)}function fx(i,t){let e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function px(i,t){let e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function mx(i,t){let e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function gx(i,t){let e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xx(i,t){let e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _x(i,t){let e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yx(i,t){i.uniform1iv(this.addr,t)}function vx(i,t){i.uniform2iv(this.addr,t)}function Mx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function bx(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Ex(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=lh:a=Ed;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rd,r[a])}function Rx(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Id,r[a])}function Ix(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cd,r[a])}function Px(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return _x;case 5124:case 35670:return yx;case 35667:case 35671:return vx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Ix}}var ch=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}},hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}},uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;function fd(i,t){i.seq.push(t),i.map[t.id]=t}function Lx(i,t,e){let n=i.name,s=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),a=ah.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fd(e,c===void 0?new ch(o,i,t):new hh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new uh(o),fd(e,d)),e=d}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Lx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function pd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Nx=37297,Dx=0;function Ux(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var md=new ne;function Fx(i){me._getMatrix(md,me.workingColorSpace,i);let t=`mat3( ${md.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ux(i.getShaderSource(t),o)}else return r}function Ox(i,t){let e=Fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Bx={[Fc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[Kr]:"ACESFilmic",[kc]:"AgX",[Vc]:"Neutral",[zc]:"Custom"};function zx(i,t){let e=Bx[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wl=new C;function kx(){me.getLuminanceCoefficients(wl);let i=wl.x.toFixed(4),t=wl.y.toFixed(4),e=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Gx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ca(i){return i!==""}function xd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _d(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(Wx,qx)}var Xx=new Map;function qx(i,t){let e=le[t];if(e===void 0){let n=Xx.get(t);if(n!==void 0)e=le[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dh(e)}var Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(i){return i.replace(Yx,Zx)}function Zx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var $x={[os]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Jx(i){return $x[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kx={[ki]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function jx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qx={[cs]:"ENVMAP_MODE_REFRACTION"};function t_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var e_={[Do]:"ENVMAP_BLENDING_MULTIPLY",[Nu]:"ENVMAP_BLENDING_MIX",[Du]:"ENVMAP_BLENDING_ADD"};function n_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":e_[i.combine]||"ENVMAP_BLENDING_NONE"}function i_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function s_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Jx(e),c=jx(e),h=t_(e),d=n_(e),u=i_(e),f=Vx(e),g=Gx(r),M=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(m=[vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?le.tonemapping_pars_fragment:"",e.toneMapping!==qn?zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Ox("linearToOutputTexel",e.outputColorSpace),kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),a=dh(a),a=xd(a,e),a=_d(a,e),o=dh(o),o=xd(o,e),o=_d(o,e),a=yd(a),o=yd(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=S+m+a,v=S+p+o,w=pd(s,s.VERTEX_SHADER,I),b=pd(s,s.FRAGMENT_SHADER,v);s.attachShader(M,w),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function L(U){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(b)||"",H=B.trim(),j=W.trim(),J=F.trim(),lt=!0,tt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,w,b);else{let st=gd(s,w,"vertex"),rt=gd(s,b,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+st+`
`+rt)}else H!==""?Kt("WebGLProgram: Program Info Log:",H):(j===""||J==="")&&(tt=!1);tt&&(U.diagnostics={runnable:lt,programLog:H,vertexShader:{log:j,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(w),s.deleteShader(b),_=new nr(s,M),E=Hx(s,M)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,Nx)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=b,this}var r_=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ph(t),e.set(t,n)),n}},ph=class{constructor(t){this.id=r_++,this.code=t,this.usedTimes=0}};function a_(i){return i===Hi||i===sa||i===ra}function o_(i,t,e,n,s,r){let a=new Os,o=new fh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,E,N,U,B,W){let F=U.fog,H=B.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,lt=t.get(_.envMap||j,J),tt=lt&&lt.mapping===jr?lt.image.height:null,st=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Kt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dt=rt!==void 0?rt.length:0,Nt=0;H.morphAttributes.position!==void 0&&(Nt=1),H.morphAttributes.normal!==void 0&&(Nt=2),H.morphAttributes.color!==void 0&&(Nt=3);let fe,ie,ee,et;if(st){let ye=li[st];fe=ye.vertexShader,ie=ye.fragmentShader}else{fe=_.vertexShader,ie=_.fragmentShader;let ye=o.getVertexShaderStage(_),_e=o.getFragmentShaderStage(_);o.update(_,ye,_e),ee=ye.id,et=_e.id}let at=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),$t=B.isInstancedMesh===!0,It=B.isBatchedMesh===!0,Ot=!!_.map,he=!!_.matcap,Q=!!lt,ut=!!_.aoMap,pt=!!_.lightMap,ft=!!_.bumpMap&&_.wireframe===!1,vt=!!_.normalMap,zt=!!_.displacementMap,Vt=!!_.emissiveMap,$=!!_.metalnessMap,ct=!!_.roughnessMap,P=_.anisotropy>0,Pt=_.clearcoat>0,gt=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,V=_.sheen>0,X=_.transmission>0,Z=P&&!!_.anisotropyMap,ht=Pt&&!!_.clearcoatMap,mt=Pt&&!!_.clearcoatNormalMap,it=Pt&&!!_.clearcoatRoughnessMap,nt=x&&!!_.iridescenceMap,Et=x&&!!_.iridescenceThicknessMap,Xt=V&&!!_.sheenColorMap,Y=V&&!!_.sheenRoughnessMap,bt=!!_.specularMap,kt=!!_.specularColorMap,Yt=!!_.specularIntensityMap,se=X&&!!_.transmissionMap,O=X&&!!_.thicknessMap,wt=!!_.gradientMap,ot=!!_.alphaMap,Tt=_.alphaTest>0,Lt=!!_.alphaHash,dt=!!_.extensions,Zt=qn;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Gt={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:fe,fragmentShader:ie,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:It,batchingColor:It&&B._colorsTexture!==null,instancing:$t,instancingColor:$t&&B.instanceColor!==null,instancingMorph:$t&&B.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ot,matcap:he,envMap:Q,envMapMode:Q&&lt.mapping,envMapCubeUVHeight:tt,aoMap:ut,lightMap:pt,bumpMap:ft,normalMap:vt,displacementMap:zt,emissiveMap:Vt,normalMapObjectSpace:vt&&_.normalMapType===Ou,normalMapTangentSpace:vt&&_.normalMapType===aa,packedNormalMap:vt&&_.normalMapType===aa&&a_(_.normalMap.format),metalnessMap:$,roughnessMap:ct,anisotropy:P,anisotropyMap:Z,clearcoat:Pt,clearcoatMap:ht,clearcoatNormalMap:mt,clearcoatRoughnessMap:it,dispersion:gt,retroreflection:A,iridescence:x,iridescenceMap:nt,iridescenceThicknessMap:Et,sheen:V,sheenColorMap:Xt,sheenRoughnessMap:Y,specularMap:bt,specularColorMap:kt,specularIntensityMap:Yt,transmission:X,transmissionMap:se,thicknessMap:O,gradientMap:wt,opaque:_.transparent===!1&&_.blending===zi&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:Tt,alphaHash:Lt,combine:_.combine,mapUv:Ot&&g(_.map.channel),aoMapUv:ut&&g(_.aoMap.channel),lightMapUv:pt&&g(_.lightMap.channel),bumpMapUv:ft&&g(_.bumpMap.channel),normalMapUv:vt&&g(_.normalMap.channel),displacementMapUv:zt&&g(_.displacementMap.channel),emissiveMapUv:Vt&&g(_.emissiveMap.channel),metalnessMapUv:$&&g(_.metalnessMap.channel),roughnessMapUv:ct&&g(_.roughnessMap.channel),anisotropyMapUv:Z&&g(_.anisotropyMap.channel),clearcoatMapUv:ht&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(_.sheenRoughnessMap.channel),specularMapUv:bt&&g(_.specularMap.channel),specularColorMapUv:kt&&g(_.specularColorMap.channel),specularIntensityMapUv:Yt&&g(_.specularIntensityMap.channel),transmissionMapUv:se&&g(_.transmissionMap.channel),thicknessMapUv:O&&g(_.thicknessMap.channel),alphaMapUv:ot&&g(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(vt||P),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Ot||ot),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Nt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Ot&&_.map.isVideoTexture===!0&&me.getTransfer(_.map.colorSpace)===Me,decodeVideoTextureEmissive:Vt&&_.emissiveMap.isVideoTexture===!0&&me.getTransfer(_.emissiveMap.colorSpace)===Me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:dt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&_.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)E.push(N),E.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(E,_),S(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function I(_){let E=f[_.type],N;if(E){let U=li[E];N=ed.clone(U.uniforms)}else N=_.uniforms;return N}function v(_,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new s_(i,E,_,s),c.push(N),h.set(E,N)),N}function w(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function L(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:I,acquireProgram:v,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:L}}function l_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function c_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Md(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,m,p){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,g,M,m,p,S){S.reversedDepth===!0&&(m=-m);let I=o(u,f,g,M,m,p);g.transmission>0?n.push(I):g.transparent===!0?s.push(I):e.push(I)}function c(u,f,g,M,m,p){let S=o(u,f,g,M,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||c_),n.length>1&&n.sort(f||Md),s.length>1&&s.sort(f||Md)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function h_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Sd,i.set(n,[a])):s>=r.length?(a=new Sd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new te};break;case"SpotLight":e={position:new C,direction:new C,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f_=0;function p_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m_(i){let t=new u_,e=d_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ce,a=new ce;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,S=0,I=0,v=0,w=0,b=0,L=0,_=0,E=0,N=0;c.sort(p_);for(let B=0,W=c.length;B<W;B++){let F=c[B],H=F.color,j=F.intensity,J=F.distance,lt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Hi?lt=F.shadow.map.texture:lt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=H.r*j,d+=H.g*j,u+=H.b*j;else if(F.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(F.sh.coefficients[tt],j);N++}else if(F.isSunLight){let tt=t.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let st=F.shadow,rt=e.get(F);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=rt,n.sunShadowMap[g]=lt;let Dt=st.getViewportCount();for(let Nt=0;Nt<Dt;Nt++)n.sunShadowMatrix[M+Nt]=st.getMatrix(Nt),n.sunShadowCascade[M+Nt]=st._cascadeData[Nt];M+=Dt,g++}n.sun[f]=tt,f++}else if(F.isDirectionalLight){let tt=t.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let st=F.shadow,rt=e.get(F);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=lt,n.directionalShadowMatrix[m]=F.shadow.matrix,w++}n.directional[m]=tt,m++}else if(F.isSpotLight){let tt=t.get(F);tt.position.setFromMatrixPosition(F.matrixWorld),tt.color.copy(H).multiplyScalar(j),tt.distance=J,tt.coneCos=Math.cos(F.angle),tt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),tt.decay=F.decay,n.spot[S]=tt;let st=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,st.updateMatrices(F),F.castShadow&&E++),n.spotLightMatrix[S]=st.matrix,F.castShadow){let rt=e.get(F);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.spotShadow[S]=rt,n.spotShadowMap[S]=lt,L++}S++}else if(F.isRectAreaLight){let tt=t.get(F);tt.color.copy(H).multiplyScalar(j),tt.halfWidth.set(F.width*.5,0,0),tt.halfHeight.set(0,F.height*.5,0),n.rectArea[I]=tt,I++}else if(F.isPointLight){let tt=t.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity),tt.distance=F.distance,tt.decay=F.decay,F.castShadow){let st=F.shadow,rt=e.get(F);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,rt.shadowCameraNear=st.camera.near,rt.shadowCameraFar=st.camera.far,n.pointShadow[p]=rt,n.pointShadowMap[p]=lt,n.pointShadowMatrix[p]=F.shadow.matrix,b++}n.point[p]=tt,p++}else if(F.isHemisphereLight){let tt=t.get(F);tt.skyColor.copy(F.color).multiplyScalar(j),tt.groundColor.copy(F.groundColor).multiplyScalar(j),n.hemi[v]=tt,v++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==S||U.rectAreaLength!==I||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==w||U.numPointShadows!==b||U.numSpotShadows!==L||U.numSpotMaps!==_||U.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=I,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=N,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=S,U.rectAreaLength=I,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=w,U.numPointShadows=b,U.numSpotShadows=L,U.numSpotMaps=_,U.numLightProbes=N,n.version=f_++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let S=0,I=c.length;S<I;S++){let v=c[S];if(v.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(v.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let w=n.rectArea[M];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function bd(i){let t=new m_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function g_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bd(i),t.set(s,[o])):r>=a.length?(o=new bd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var x_=`void main() {
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
}`,y_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],v_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],wd=new ce,la=new C,oh=new C;function M_(i,t,e){let n=new ks,s=new _t,r=new _t,a=new Ie,o=new _o,l=new yo,c={},h=e.maxTextureSize,d={[Bi]:Ge,[Ge]:Bi,[Dn]:Dn},u=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:x_,fragmentShader:__}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new At(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let p=this.type;this.render=function(b,L,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===pu&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);let E=i.getRenderTarget(),N=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ai),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=p!==this.type;W&&L.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=b.length;F<H;F++){let j=b[F],J=j.shadow;if(J===void 0){Kt("WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let lt=J.getFrameExtents();s.multiply(lt),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,J.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=tt,J.map===null||W===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Js){if(j.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new xn(s.x,s.y,{format:Hi,type:Zn,minFilter:en,magFilter:en,generateMipmaps:!1}),J.map.texture.name=j.name+".shadowMap",J.map.depthTexture=new Ni(s.x,s.y,Fn),J.map.depthTexture.name=j.name+".shadowMapDepth",J.map.depthTexture.format=ni,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=$e,J.map.depthTexture.magFilter=$e}else j.isPointLight?(J.map=new Tl(s.x),J.map.depthTexture=new lo(s.x,Yn)):(J.map=new xn(s.x,s.y),J.map.depthTexture=new Ni(s.x,s.y,Yn)),J.map.depthTexture.name=j.name+".shadowMap",J.map.depthTexture.format=ni,this.type===os?(J.map.depthTexture.compareFunction=tt?Sl:Ml,J.map.depthTexture.minFilter=en,J.map.depthTexture.magFilter=en):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=$e,J.map.depthTexture.magFilter=$e);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let st=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();j.isPointLight!==!0&&J.updateMatrices(j,_);for(let rt=0;rt<st;rt++){let Dt=J.getCamera(rt);if(j.isPointLight){let Nt=J.camera,fe=J.matrix,ie=j.distance||Nt.far;ie!==Nt.far&&(Nt.far=ie,Nt.updateProjectionMatrix()),la.setFromMatrixPosition(j.matrixWorld),Nt.position.copy(la),oh.copy(Nt.position),oh.add(y_[rt]),Nt.up.copy(v_[rt]),Nt.lookAt(oh),Nt.updateMatrixWorld(),fe.makeTranslation(-la.x,-la.y,-la.z),wd.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(wd,Nt.coordinateSystem,Nt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(J.map),i.clear());let Nt=J.getViewport(rt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),B.viewport(a)}n=J.getFrustum(rt),v(L,_,Dt,j,this.type)}J.isPointLightShadow!==!0&&this.type===Js&&S(J,_),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,N,U)};function S(b,L){let _=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new xn(s.x,s.y,{format:Hi,type:Zn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(L,null,_,u,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(L,null,_,f,M,null)}function I(b,L,_,E){let N=null,U=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)N=U;else if(N=_.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let B=N.uuid,W=L.uuid,F=c[B];F===void 0&&(F={},c[B]=F);let H=F[W];H===void 0&&(H=N.clone(),F[W]=H,L.addEventListener("dispose",w)),N=H}if(N.visible=L.visible,N.wireframe=L.wireframe,E===Js?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:d[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let B=i.properties.get(N);B.light=_}return N}function v(b,L,_,E,N){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Js)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let W=t.update(b),F=b.material;if(Array.isArray(F)){let H=W.groups;for(let j=0,J=H.length;j<J;j++){let lt=H[j],tt=F[lt.materialIndex];if(tt&&tt.visible){let st=I(b,tt,E,N);b.onBeforeShadow(i,b,L,_,W,st,lt),i.renderBufferDirect(_,null,W,st,b,lt),b.onAfterShadow(i,b,L,_,W,st,lt)}}}else if(F.visible){let H=I(b,F,E,N);b.onBeforeShadow(i,b,L,_,W,H,null),i.renderBufferDirect(_,null,W,H,b,null),b.onAfterShadow(i,b,L,_,W,H,null)}}let B=b.children;for(let W=0,F=B.length;W<F;W++)v(B[W],L,_,E,N)}function w(b){b.target.removeEventListener("dispose",w);for(let _ in c){let E=c[_],N=b.target.uuid;N in E&&(E[N].dispose(),delete E[N])}}}function S_(i,t){function e(){let O=!1,wt=new Ie,ot=null,Tt=new Ie(0,0,0,0);return{setMask:function(Lt){ot!==Lt&&!O&&(i.colorMask(Lt,Lt,Lt,Lt),ot=Lt)},setLocked:function(Lt){O=Lt},setClear:function(Lt,dt,Zt,Gt,ye){ye===!0&&(Lt*=Gt,dt*=Gt,Zt*=Gt),wt.set(Lt,dt,Zt,Gt),Tt.equals(wt)===!1&&(i.clearColor(Lt,dt,Zt,Gt),Tt.copy(wt))},reset:function(){O=!1,ot=null,Tt.set(-1,0,0,0)}}}function n(){let O=!1,wt=!1,ot=null,Tt=null,Lt=null;return{setReversed:function(dt){if(wt!==dt){let Zt=t.get("EXT_clip_control");dt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),wt=dt;let Gt=Lt;Lt=null,this.setClear(Gt)}},getReversed:function(){return wt},setTest:function(dt){dt?at(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(dt){ot!==dt&&!O&&(i.depthMask(dt),ot=dt)},setFunc:function(dt){if(wt&&(dt=$u[dt]),Tt!==dt){switch(dt){case Ya:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Ja:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=dt}},setLocked:function(dt){O=dt},setClear:function(dt){Lt!==dt&&(Lt=dt,wt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){O=!1,ot=null,Tt=null,Lt=null,wt=!1}}}function s(){let O=!1,wt=null,ot=null,Tt=null,Lt=null,dt=null,Zt=null,Gt=null,ye=null;return{setTest:function(_e){O||(_e?at(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(_e){wt!==_e&&!O&&(i.stencilMask(_e),wt=_e)},setFunc:function(_e,mn,Mn){(ot!==_e||Tt!==mn||Lt!==Mn)&&(i.stencilFunc(_e,mn,Mn),ot=_e,Tt=mn,Lt=Mn)},setOp:function(_e,mn,Mn){(dt!==_e||Zt!==mn||Gt!==Mn)&&(i.stencilOp(_e,mn,Mn),dt=_e,Zt=mn,Gt=Mn)},setLocked:function(_e){O=_e},setClear:function(_e){ye!==_e&&(i.clearStencil(_e),ye=_e)},reset:function(){O=!1,wt=null,ot=null,Tt=null,Lt=null,dt=null,Zt=null,Gt=null,ye=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,S=null,I=null,v=null,w=null,b=null,L=null,_=new te(0,0,0),E=0,N=!1,U=null,B=null,W=null,F=null,H=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,lt=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=lt>=1):tt.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=lt>=2);let st=null,rt={},Dt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),fe=new Ie().fromArray(Dt),ie=new Ie().fromArray(Nt);function ee(O,wt,ot,Tt){let Lt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(O,dt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<ot;Zt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(wt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return dt}let et={};et[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Ns),ft(!1),vt(Pc),at(i.CULL_FACE),ut(ai);function at(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function St(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function $t(O,wt){return u[O]!==wt?(i.bindFramebuffer(O,wt),u[O]=wt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function It(O,wt){let ot=g,Tt=!1;if(O){ot=f.get(wt),ot===void 0&&(ot=[],f.set(wt,ot));let Lt=O.textures;if(ot.length!==Lt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Zt=Lt.length;dt<Zt;dt++)ot[dt]=i.COLOR_ATTACHMENT0+dt;ot.length=Lt.length,Tt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(ot)}function Ot(O){return M!==O?(i.useProgram(O),M=O,!0):!1}let he={[ls]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};he[_u]=i.MIN,he[yu]=i.MAX;let Q={[vu]:i.ZERO,[Mu]:i.ONE,[Su]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[wu]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[Eu]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Iu]:i.ONE_MINUS_CONSTANT_COLOR,[Pu]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(O,wt,ot,Tt,Lt,dt,Zt,Gt,ye,_e){if(O===ai){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(at(i.BLEND),m=!0),O!==mu){if(O!==p||_e!==N){if((S!==ls||w!==ls)&&(i.blendEquation(i.FUNC_ADD),S=ls,w=ls),_e)switch(O){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",O);break}else switch(O){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lc:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",O);break}I=null,v=null,b=null,L=null,_.set(0,0,0),E=0,p=O,N=_e}return}Lt=Lt||wt,dt=dt||ot,Zt=Zt||Tt,(wt!==S||Lt!==w)&&(i.blendEquationSeparate(he[wt],he[Lt]),S=wt,w=Lt),(ot!==I||Tt!==v||dt!==b||Zt!==L)&&(i.blendFuncSeparate(Q[ot],Q[Tt],Q[dt],Q[Zt]),I=ot,v=Tt,b=dt,L=Zt),(Gt.equals(_)===!1||ye!==E)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ye),_.copy(Gt),E=ye),p=O,N=!1}function pt(O,wt){O.side===Dn?St(i.CULL_FACE):at(i.CULL_FACE);let ot=O.side===Ge;wt&&(ot=!ot),ft(ot),O.blending===zi&&O.transparent===!1?ut(ai):ut(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Tt=O.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(O){U!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),U=O)}function vt(O){O!==du?(at(i.CULL_FACE),O!==B&&(O===Pc?i.cullFace(i.BACK):O===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),B=O}function zt(O){O!==W&&(J&&i.lineWidth(O),W=O)}function Vt(O,wt,ot){O?(at(i.POLYGON_OFFSET_FILL),(F!==wt||H!==ot)&&(F=wt,H=ot,a.getReversed()&&(wt=-wt),i.polygonOffset(wt,ot))):St(i.POLYGON_OFFSET_FILL)}function $(O){O?at(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ct(O){O===void 0&&(O=i.TEXTURE0+j-1),st!==O&&(i.activeTexture(O),st=O)}function P(O,wt,ot){ot===void 0&&(st===null?ot=i.TEXTURE0+j-1:ot=st);let Tt=rt[ot];Tt===void 0&&(Tt={type:void 0,texture:void 0},rt[ot]=Tt),(Tt.type!==O||Tt.texture!==wt)&&(st!==ot&&(i.activeTexture(ot),st=ot),i.bindTexture(O,wt||et[O]),Tt.type=O,Tt.texture=wt)}function Pt(){let O=rt[st];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function x(){try{i.texSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function V(){try{i.texSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function ht(){try{i.texStorage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function mt(){try{i.texStorage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function it(){try{i.texImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function nt(){try{i.texImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function Et(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Xt(O,wt){d[O]!==wt&&(i.pixelStorei(O,wt),d[O]=wt)}function Y(O){fe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),fe.copy(O))}function bt(O){ie.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function kt(O,wt){let ot=c.get(wt);ot===void 0&&(ot=new WeakMap,c.set(wt,ot));let Tt=ot.get(O);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,O.name),ot.set(O,Tt))}function Yt(O,wt){let Tt=c.get(wt).get(O);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,O.__bindingPointIndex),l.set(wt,Tt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},st=null,rt={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,S=null,I=null,v=null,w=null,b=null,L=null,_=new te(0,0,0),E=0,N=!1,U=null,B=null,W=null,F=null,H=null,fe.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:St,bindFramebuffer:$t,drawBuffers:It,useProgram:Ot,setBlending:ut,setMaterial:pt,setFlipSided:ft,setCullFace:vt,setLineWidth:zt,setPolygonOffset:Vt,setScissorTest:$,activeTexture:ct,bindTexture:P,unbindTexture:Pt,compressedTexImage2D:gt,compressedTexImage3D:A,texImage2D:it,texImage3D:nt,pixelStorei:Xt,getParameter:Et,updateUBOMapping:kt,uniformBlockBinding:Yt,texStorage2D:ht,texStorage3D:mt,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:Y,viewport:bt,reset:se}}function b_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,x){return g?new OffscreenCanvas(A,x):Tr("canvas")}function m(A,x,V){let X=1,Z=gt(A);if((Z.width>V||Z.height>V)&&(X=V/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(X*Z.width),mt=Math.floor(X*Z.height);u===void 0&&(u=M(ht,mt));let it=x?M(ht,mt):u;return it.width=ht,it.height=mt,it.getContext("2d").drawImage(A,0,0,ht,mt),Kt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ht+"x"+mt+")."),it}else return"data"in A&&Kt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,x,V,X,Z,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;X&&(mt=t.get("EXT_texture_norm16"),mt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=x;if(x===i.RED&&(V===i.FLOAT&&(it=i.R32F),V===i.HALF_FLOAT&&(it=i.R16F),V===i.UNSIGNED_BYTE&&(it=i.R8),V===i.UNSIGNED_SHORT&&mt&&(it=mt.R16_EXT),V===i.SHORT&&mt&&(it=mt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.R8UI),V===i.UNSIGNED_SHORT&&(it=i.R16UI),V===i.UNSIGNED_INT&&(it=i.R32UI),V===i.BYTE&&(it=i.R8I),V===i.SHORT&&(it=i.R16I),V===i.INT&&(it=i.R32I)),x===i.RG&&(V===i.FLOAT&&(it=i.RG32F),V===i.HALF_FLOAT&&(it=i.RG16F),V===i.UNSIGNED_BYTE&&(it=i.RG8),V===i.UNSIGNED_SHORT&&mt&&(it=mt.RG16_EXT),V===i.SHORT&&mt&&(it=mt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RG8UI),V===i.UNSIGNED_SHORT&&(it=i.RG16UI),V===i.UNSIGNED_INT&&(it=i.RG32UI),V===i.BYTE&&(it=i.RG8I),V===i.SHORT&&(it=i.RG16I),V===i.INT&&(it=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGB8UI),V===i.UNSIGNED_SHORT&&(it=i.RGB16UI),V===i.UNSIGNED_INT&&(it=i.RGB32UI),V===i.BYTE&&(it=i.RGB8I),V===i.SHORT&&(it=i.RGB16I),V===i.INT&&(it=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),V===i.UNSIGNED_INT&&(it=i.RGBA32UI),V===i.BYTE&&(it=i.RGBA8I),V===i.SHORT&&(it=i.RGBA16I),V===i.INT&&(it=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&mt&&(it=mt.RGB16_EXT),V===i.SHORT&&mt&&(it=mt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),x===i.RGBA){let nt=ht?wr:me.getTransfer(Z);V===i.FLOAT&&(it=i.RGBA32F),V===i.HALF_FLOAT&&(it=i.RGBA16F),V===i.UNSIGNED_BYTE&&(it=nt===Me?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&mt&&(it=mt.RGBA16_EXT),V===i.SHORT&&mt&&(it=mt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function w(A,x){let V;return A?x===null||x===Yn||x===js?V=i.DEPTH24_STENCIL8:x===Fn?V=i.DEPTH32F_STENCIL8:x===Ks&&(V=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yn||x===js?V=i.DEPTH_COMPONENT24:x===Fn?V=i.DEPTH_COMPONENT32F:x===Ks&&(V=i.DEPTH_COMPONENT16),V}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function L(A){let x=A.target;x.removeEventListener("dispose",L),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),U(x)}function E(A){let x=n.get(A);if(x.__webglInit===void 0)return;let V=A.source,X=f.get(V);if(X){let Z=X[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(A),Object.keys(X).length===0&&f.delete(V)}n.remove(A)}function N(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let V=A.source,X=f.get(V);delete X[x.__cacheKey],a.memory.textures--}function U(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Z=0;Z<x.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=A.textures;for(let X=0,Z=V.length;X<Z;X++){let ht=n.get(V[X]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(V[X])}n.remove(A)}let B=0;function W(){B=0}function F(){return B}function H(A){B=A}function j(){let A=B;return A>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function lt(A,x){let V=n.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let X=A.image;if(X===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(V,A,x);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function tt(A,x){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){St(V,A,x);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function st(A,x){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){St(V,A,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function rt(A,x){let V=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){$t(V,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let Dt={[Li]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},Nt={[$e]:i.NEAREST,[Uu]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},fe={[zu]:i.NEVER,[Wu]:i.ALWAYS,[ku]:i.LESS,[Ml]:i.LEQUAL,[Vu]:i.EQUAL,[Sl]:i.GEQUAL,[Gu]:i.GREATER,[Hu]:i.NOTEQUAL};function ie(A,x){if(x.type===Fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Oo||x.magFilter===Qr||x.magFilter===Vi||x.minFilter===en||x.minFilter===Oo||x.minFilter===Qr||x.minFilter===Vi)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Dt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Dt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Dt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Nt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Nt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$e||x.minFilter!==Qr&&x.minFilter!==Vi||x.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L));let X=x.source,Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));let ht=J(x);if(ht!==A.__cacheKey){Z[ht]===void 0&&(Z[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[ht].usedTimes++;let mt=Z[A.__cacheKey];mt!==void 0&&(Z[A.__cacheKey].usedTimes--,mt.usedTimes===0&&N(x)),A.__cacheKey=ht,A.__webglTexture=Z[ht].texture}return V}function et(A,x,V){return Math.floor(Math.floor(A/V)/x)}function at(A,x,V,X){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,X,x.data);else{ht.sort((Xt,Y)=>Xt.start-Y.start);let mt=0;for(let Xt=1;Xt<ht.length;Xt++){let Y=ht[mt],bt=ht[Xt],kt=Y.start+Y.count,Yt=et(bt.start,x.width,4),se=et(Y.start,x.width,4);bt.start<=kt+1&&Yt===se&&et(bt.start+bt.count-1,x.width,4)===Yt?Y.count=Math.max(Y.count,bt.start+bt.count-Y.start):(++mt,ht[mt]=bt)}ht.length=mt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Xt=0,Y=ht.length;Xt<Y;Xt++){let bt=ht[Xt],kt=Math.floor(bt.start/4),Yt=Math.ceil(bt.count/4),se=kt%x.width,O=Math.floor(kt/x.width),wt=Yt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,se,O,wt,ot,V,X,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function St(A,x,V){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let Z=ee(A,x),ht=x.source;e.bindTexture(X,A.__webglTexture,i.TEXTURE0+V);let mt=n.get(ht);if(ht.version!==mt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ot=me.getPrimaries(me.workingColorSpace),Tt=x.colorSpace===_i?null:me.getPrimaries(x.colorSpace),Lt=x.colorSpace===_i||ot===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let nt=m(x.image,!1,s.maxTextureSize);nt=Pt(x,nt);let Et=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type),Y=v(x.internalFormat,Et,Xt,x.normalized,x.colorSpace,x.isVideoTexture);ie(X,x);let bt,kt=x.mipmaps,Yt=x.isVideoTexture!==!0,se=mt.__version===void 0||Z===!0,O=ht.dataReady,wt=b(x,nt);if(x.isDepthTexture)Y=w(x.format===Gi,x.type),se&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Y,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Y,nt.width,nt.height,0,Et,Xt,null));else if(x.isDataTexture)if(kt.length>0){Yt&&se&&e.texStorage2D(i.TEXTURE_2D,wt,Y,kt[0].width,kt[0].height);for(let ot=0,Tt=kt.length;ot<Tt;ot++)bt=kt[ot],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,Et,Xt,bt.data):e.texImage2D(i.TEXTURE_2D,ot,Y,bt.width,bt.height,0,Et,Xt,bt.data);x.generateMipmaps=!1}else Yt?(se&&e.texStorage2D(i.TEXTURE_2D,wt,Y,nt.width,nt.height),O&&at(x,nt,Et,Xt)):e.texImage2D(i.TEXTURE_2D,0,Y,nt.width,nt.height,0,Et,Xt,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Yt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Y,kt[0].width,kt[0].height,nt.depth);for(let ot=0,Tt=kt.length;ot<Tt;ot++)if(bt=kt[ot],x.format!==On)if(Et!==null)if(Yt){if(O)if(x.layerUpdates.size>0){let Lt=eh(bt.width,bt.height,x.format,x.type);for(let dt of x.layerUpdates){let Zt=bt.data.subarray(dt*Lt/bt.data.BYTES_PER_ELEMENT,(dt+1)*Lt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,dt,bt.width,bt.height,1,Et,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,bt.width,bt.height,nt.depth,Et,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Y,bt.width,bt.height,nt.depth,0,bt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,bt.width,bt.height,nt.depth,Et,Xt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Y,bt.width,bt.height,nt.depth,0,Et,Xt,bt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Yt&&se&&e.texStorage2D(i.TEXTURE_2D,wt,Y,kt[0].width,kt[0].height);for(let ot=0,Tt=kt.length;ot<Tt;ot++)bt=kt[ot],x.format!==On?Et!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Y,bt.width,bt.height,0,bt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,Et,Xt,bt.data):e.texImage2D(i.TEXTURE_2D,ot,Y,bt.width,bt.height,0,Et,Xt,bt.data)}else if(x.isDataArrayTexture)if(Yt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Y,nt.width,nt.height,nt.depth),O)if(x.layerUpdates.size>0){let ot=eh(nt.width,nt.height,x.format,x.type);for(let Tt of x.layerUpdates){let Lt=nt.data.subarray(Tt*ot/nt.data.BYTES_PER_ELEMENT,(Tt+1)*ot/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,nt.width,nt.height,1,Et,Xt,Lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Et,Xt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,nt.width,nt.height,nt.depth,0,Et,Xt,nt.data);else if(x.isData3DTexture)Yt?(se&&e.texStorage3D(i.TEXTURE_3D,wt,Y,nt.width,nt.height,nt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Et,Xt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Y,nt.width,nt.height,nt.depth,0,Et,Xt,nt.data);else if(x.isFramebufferTexture){if(se)if(Yt)e.texStorage2D(i.TEXTURE_2D,wt,Y,nt.width,nt.height);else{let ot=nt.width,Tt=nt.height;for(let Lt=0;Lt<wt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Y,ot,Tt,0,Et,Xt,null),ot>>=1,Tt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),nt.parentNode!==ot){ot.appendChild(nt),d.add(x),ot.onpaint=Tt=>{let Lt=Tt.changedElements;for(let dt of d)Lt.includes(dt.image)&&(dt.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let Lt=i.RGBA,dt=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,dt,Zt,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Yt&&se){let ot=gt(kt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Y,ot.width,ot.height)}for(let ot=0,Tt=kt.length;ot<Tt;ot++)bt=kt[ot],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Et,Xt,bt):e.texImage2D(i.TEXTURE_2D,ot,Y,Et,Xt,bt);x.generateMipmaps=!1}else if(Yt){if(se){let ot=gt(nt);e.texStorage2D(i.TEXTURE_2D,wt,Y,ot.width,ot.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Xt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Y,Et,Xt,nt);p(x)&&S(X),mt.__version=ht.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $t(A,x,V){if(x.image.length!==6)return;let X=ee(A,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let ht=n.get(Z);if(Z.version!==ht.__version||X===!0){e.activeTexture(i.TEXTURE0+V);let mt=me.getPrimaries(me.workingColorSpace),it=x.colorSpace===_i?null:me.getPrimaries(x.colorSpace),nt=x.colorSpace===_i||mt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Et=x.isCompressedTexture||x.image[0].isCompressedTexture,Xt=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let dt=0;dt<6;dt++)!Et&&!Xt?Y[dt]=m(x.image[dt],!0,s.maxCubemapSize):Y[dt]=Xt?x.image[dt].image:x.image[dt],Y[dt]=Pt(x,Y[dt]);let bt=Y[0],kt=r.convert(x.format,x.colorSpace),Yt=r.convert(x.type),se=v(x.internalFormat,kt,Yt,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,wt=ht.__version===void 0||X===!0,ot=Z.dataReady,Tt=b(x,bt);ie(i.TEXTURE_CUBE_MAP,x);let Lt;if(Et){O&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,se,bt.width,bt.height);for(let dt=0;dt<6;dt++){Lt=Y[dt].mipmaps;for(let Zt=0;Zt<Lt.length;Zt++){let Gt=Lt[Zt];x.format!==On?kt!==null?O?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt,0,0,Gt.width,Gt.height,kt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt,se,Gt.width,Gt.height,0,Gt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt,0,0,Gt.width,Gt.height,kt,Yt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt,se,Gt.width,Gt.height,0,kt,Yt,Gt.data)}}}else{if(Lt=x.mipmaps,O&&wt){Lt.length>0&&Tt++;let dt=gt(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,se,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Xt){O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Y[dt].width,Y[dt].height,kt,Yt,Y[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,se,Y[dt].width,Y[dt].height,0,kt,Yt,Y[dt].data);for(let Zt=0;Zt<Lt.length;Zt++){let ye=Lt[Zt].image[dt].image;O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt+1,0,0,ye.width,ye.height,kt,Yt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt+1,se,ye.width,ye.height,0,kt,Yt,ye.data)}}else{O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,kt,Yt,Y[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,se,kt,Yt,Y[dt]);for(let Zt=0;Zt<Lt.length;Zt++){let Gt=Lt[Zt];O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt+1,0,0,kt,Yt,Gt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt+1,se,kt,Yt,Gt.image[dt])}}}p(x)&&S(i.TEXTURE_CUBE_MAP),ht.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function It(A,x,V,X,Z,ht){let mt=r.convert(V.format,V.colorSpace),it=r.convert(V.type),nt=v(V.internalFormat,mt,it,V.normalized,V.colorSpace),Et=n.get(x),Xt=n.get(V);if(Xt.__renderTarget=x,!Et.__hasExternalTextures){let Y=Math.max(1,x.width>>ht),bt=Math.max(1,x.height>>ht);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ht,nt,Y,bt,x.depth,0,mt,it,null):e.texImage2D(Z,ht,nt,Y,bt,0,mt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ct(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,Xt.__webglTexture,0,$(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,Xt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let X=x.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ht=w(x.stencilBuffer,Z),mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$(x),ht,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,$(x),ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let X=x.textures;for(let Z=0;Z<X.length;Z++){let ht=X[Z],mt=r.convert(ht.format,ht.colorSpace),it=r.convert(ht.type),nt=v(ht.internalFormat,mt,it,ht.normalized,ht.colorSpace);ct(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$(x),nt,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,$(x),nt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,nt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(A,x,V){let X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",L)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x.depthTexture);let Et=r.convert(x.depthTexture.format),Xt=r.convert(x.depthTexture.type),Y;x.depthTexture.format===ni?Y=i.DEPTH_COMPONENT24:x.depthTexture.format===Gi&&(Y=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Y,x.width,x.height,0,Et,Xt,null)}}else lt(x.depthTexture,0);let ht=Z.__webglTexture,mt=$(x),it=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,nt=x.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ni)ct(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,it,ht,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,it,ht,0);else if(x.depthTexture.format===Gi)ct(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,it,ht,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,it,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(A){let x=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let X=0;X<6;X++)he(x.__webglFramebuffer[X],A,X);else{let X=A.texture.mipmaps;X&&X.length>0?he(x.__webglFramebuffer[0],A,0):he(x.__webglFramebuffer,A,0)}else if(V){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Ot(x.__webglDepthbuffer[X],A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ht)}}else{let X=A.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ot(x.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,x,V){let X=n.get(A);x!==void 0&&It(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Q(A)}function pt(A){let x=A.texture,V=n.get(A),X=n.get(x);A.addEventListener("dispose",_);let Z=A.textures,ht=A.isWebGLCubeRenderTarget===!0,mt=Z.length>1;if(mt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),ht){V.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[it]=[];for(let nt=0;nt<x.mipmaps.length;nt++)V.__webglFramebuffer[it][nt]=i.createFramebuffer()}else V.__webglFramebuffer[it]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)V.__webglFramebuffer[it]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(mt)for(let it=0,nt=Z.length;it<nt;it++){let Et=n.get(Z[it]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ct(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let it=0;it<Z.length;it++){let nt=Z[it];V.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[it]);let Et=r.convert(nt.format,nt.colorSpace),Xt=r.convert(nt.type),Y=v(nt.internalFormat,Et,Xt,nt.normalized,nt.colorSpace,A.isXRRenderTarget===!0),bt=$(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Y,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,V.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)It(V.__webglFramebuffer[it][nt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,nt);else It(V.__webglFramebuffer[it],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(x)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let it=0,nt=Z.length;it<nt;it++){let Et=Z[it],Xt=n.get(Et),Y=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,Xt.__webglTexture),ie(Y,Et),It(V.__webglFramebuffer,A,Et,i.COLOR_ATTACHMENT0+it,Y,0),p(Et)&&S(Y)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,X.__webglTexture),ie(it,x),x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)It(V.__webglFramebuffer[nt],A,x,i.COLOR_ATTACHMENT0,it,nt);else It(V.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,it,0);p(x)&&S(it),e.unbindTexture()}A.depthBuffer&&Q(A)}function ft(A){let x=A.textures;for(let V=0,X=x.length;V<X;V++){let Z=x[V];if(p(Z)){let ht=I(A),mt=n.get(Z).__webglTexture;e.bindTexture(ht,mt),S(ht),e.unbindTexture()}}}let vt=[],zt=[];function Vt(A){if(A.samples>0){if(ct(A)===!1){let x=A.textures,V=A.width,X=A.height,Z=i.COLOR_BUFFER_BIT,ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),it=x.length>1;if(it)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let nt=A.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[Et]);let Xt=n.get(x[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,V,X,0,0,V,X,Z,i.NEAREST),l===!0&&(vt.length=0,zt.length=0,vt.push(i.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(vt.push(ht),zt.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,mt.__webglColorRenderbuffer[Et]);let Xt=n.get(x[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function $(A){return Math.min(s.maxSamples,A.samples)}function ct(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Pt(A,x){let V=A.colorSpace,X=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==br&&V!==_i&&(me.getTransfer(V)===Me?(X!==On||Z!==yn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",V)),x}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=W,this.getTextureUnits=F,this.setTextureUnits=H,this.setTexture2D=lt,this.setTexture2DArray=tt,this.setTexture3D=st,this.setTextureCube=rt,this.rebindTextures=ut,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=It,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function w_(i,t){function e(n,s=_i){let r,a=me.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===Bo)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===Zc)return i.RGB;if(n===On)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===Wo)return i.RGBA_INTEGER;if(n===ta||n===ea||n===na||n===ia)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$o||n===Jo||n===Ko||n===jo||n===Qo||n===sa||n===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$o||n===Jo)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jo)return r.COMPRESSED_R11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===yl||n===ra||n===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var T_=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:T_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new mh,p={},S=e.getContextAttributes(),I=null,v=null,w=[],b=[],L=new _t,_=null,E=null,N=new tn;N.viewport=new Ie;let U=new tn;U.viewport=new Ie;let B=[N,U],W=new Lo,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let at=w[et];return at===void 0&&(at=new Bs,w[et]=at),at.getTargetRaySpace()},this.getControllerGrip=function(et){let at=w[et];return at===void 0&&(at=new Bs,w[et]=at),at.getGripSpace()},this.getHand=function(et){let at=w[et];return at===void 0&&(at=new Bs,w[et]=at),at.getHandSpace()};function j(et){let at=b.indexOf(et.inputSource);if(at===-1)return;let St=w[at];St!==void 0&&(St.update(et.inputSource,et.frame,c||a),St.dispatchEvent({type:et.type,data:et.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",lt);for(let et=0;et<w.length;et++){let at=b[et];at!==null&&(b[et]=null,w[et].disconnect(at))}F=null,H=null,m.reset();for(let et in p)delete p[et];if(t.setRenderTarget(I),f=null,u=null,d=null,s=null,v=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(L.width,L.height,!1),E!==null){let et=E.camera;et.fov=E.fov,et.zoom=E.zoom,et.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",lt),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(L),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,$t=null,It=null;S.depth&&(It=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=S.stencil?Gi:ni,$t=S.stencil?js:Yn);let Ot={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new xn(u.textureWidth,u.textureHeight,{format:On,type:yn,depthTexture:new Ni(u.textureWidth,u.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new xn(f.framebufferWidth,f.framebufferHeight,{format:On,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function lt(et){for(let at=0;at<et.removed.length;at++){let St=et.removed[at],$t=b.indexOf(St);$t>=0&&(b[$t]=null,w[$t].disconnect(St))}for(let at=0;at<et.added.length;at++){let St=et.added[at],$t=b.indexOf(St);if($t===-1){for(let Ot=0;Ot<w.length;Ot++)if(Ot>=b.length){b.push(St),$t=Ot;break}else if(b[Ot]===null){b[Ot]=St,$t=Ot;break}if($t===-1)break}let It=w[$t];It&&It.connect(St)}}let tt=new C,st=new C;function rt(et,at,St){tt.setFromMatrixPosition(at.matrixWorld),st.setFromMatrixPosition(St.matrixWorld);let $t=tt.distanceTo(st),It=at.projectionMatrix.elements,Ot=St.projectionMatrix.elements,he=It[14]/(It[10]-1),Q=It[14]/(It[10]+1),ut=(It[9]+1)/It[5],pt=(It[9]-1)/It[5],ft=(It[8]-1)/It[0],vt=(Ot[8]+1)/Ot[0],zt=he*ft,Vt=he*vt,$=$t/(-ft+vt),ct=$*-ft;if(at.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ct),et.translateZ($),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let P=he+$,Pt=Q+$,gt=zt-ct,A=Vt+($t-ct),x=ut*Q/Pt*P,V=pt*Q/Pt*P;et.projectionMatrix.makePerspective(gt,A,x,V,P,Pt),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Dt(et,at){at===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(at.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let at=et.near,St=et.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(St=m.depthFar)),W.near=U.near=N.near=at,W.far=U.far=N.far=St,(F!==W.near||H!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),F=W.near,H=W.far),W.layers.mask=et.layers.mask|6,N.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;let $t=et.parent,It=W.cameras;Dt(W,$t);for(let Ot=0;Ot<It.length;Ot++)Dt(It[Ot],$t);It.length===2?rt(W,N,U):W.projectionMatrix.copy(N.projectionMatrix),E===null&&et.isPerspectiveCamera&&(E={camera:et,fov:et.fov,zoom:et.zoom}),Nt(et,W,$t)};function Nt(et,at,St){St===null?et.matrix.copy(at.matrixWorld):(et.matrix.copy(St.matrixWorld),et.matrix.invert(),et.matrix.multiply(at.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=no*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(et){return p[et]};let fe=null;function ie(et,at){if(h=at.getViewerPose(c||a),g=at,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let $t=!1;St.length!==W.cameras.length&&(W.cameras.length=0,$t=!0);for(let Q=0;Q<St.length;Q++){let ut=St[Q],pt=null;if(f!==null)pt=f.getViewport(ut);else{let vt=d.getViewSubImage(u,ut);pt=vt.viewport,Q===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let ft=B[Q];ft===void 0&&(ft=new tn,ft.layers.enable(Q),ft.viewport=new Ie,B[Q]=ft),ft.matrix.fromArray(ut.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ut.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(pt.x,pt.y,pt.width,pt.height),Q===0&&(W.matrix.copy(ft.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),$t===!0&&W.cameras.push(ft)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Q=d.getDepthInformation(St[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,s.renderState)}if(It&&It.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<St.length;Q++){let ut=St[Q].camera;if(ut){let pt=p[ut];pt||(pt=new Lr,p[ut]=pt);let ft=d.getCameraImage(ut);pt.sourceTexture=ft}}}}for(let St=0;St<w.length;St++){let $t=b[St],It=w[St];$t!==null&&It!==void 0&&It.update($t,at,c||a)}fe&&fe(et,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let ee=new Td;ee.setAnimationLoop(ie),this.setAnimationLoop=function(et){fe=et},this.dispose=function(){}}},E_=new ce,Pd=new ne;Pd.set(-1,0,0,0,1,0,0,0,1);function C_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,I,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,I):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),I=S.envMap,v=S.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(v)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=I*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,w){let b=w.program;n.uniformBlockBinding(v,b)}function c(v,w){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",S));let L=w.program;n.updateUBOMapping(v,L);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let w=d();v.__bindingPointIndex=w;let b=i.createBuffer(),L=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let w=s[v.id],b=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,E=b.length;_<E;_++){let N=b[_];if(Array.isArray(N))for(let U=0,B=N.length;U<B;U++)f(N[U],_,U,L);else f(N,_,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,w,b,L){if(M(v,w,b,L)===!0){let _=v.__offset,E=v.value;if(Array.isArray(E)){let N=0;for(let U=0;U<E.length;U++){let B=E[U],W=p(B);g(B,v.__data,N),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,w,b){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,b)}function M(v,w,b,L){let _=v.value,E=w+"_"+b;if(L[E]===void 0)return typeof _=="number"||typeof _=="boolean"?L[E]=_:ArrayBuffer.isView(_)?L[E]=_.slice():L[E]=_.clone(),!0;{let N=L[E];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return L[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function m(v){let w=v.uniforms,b=0,L=16;for(let E=0,N=w.length;E<N;E++){let U=Array.isArray(w[E])?w[E]:[w[E]];for(let B=0,W=U.length;B<W;B++){let F=U[B],H=Array.isArray(F.value)?F.value:[F.value];for(let j=0,J=H.length;j<J;j++){let lt=H[j],tt=p(lt),st=b%L,rt=st%tt.boundary,Dt=st+rt;b+=rt,Dt!==0&&L-Dt<tt.storage&&(b+=L-Dt),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=tt.storage}}}let _=b%L;return _>0&&(b+=L-_),v.__size=b,v.__cache={},this}function p(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",v),w}function S(v){let w=v.target;w.removeEventListener("dispose",S);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function I(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:I}}var I_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function P_(){return oi===null&&(oi=new Rr(I_,16,16,Hi,Zn),oi.name="DFG_LUT",oi.minFilter=en,oi.magFilter=en,oi.wrapS=ei,oi.wrapT=ei,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Al=class{constructor(t={}){let{canvas:e=qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,m=new Set([Wo,Ho,Go]),p=new Set([yn,Yn,Ks,js,zo,ko]),S=new Uint32Array(4),I=new Int32Array(4),v=new C,w=null,b=null,L=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,U=!1,B=null,W=null,F=null,H=null;this._outputColorSpace=Qe;let j=0,J=0,lt=null,tt=-1,st=null,rt=new Ie,Dt=new Ie,Nt=null,fe=new te(0),ie=0,ee=e.width,et=e.height,at=1,St=null,$t=null,It=new Ie(0,0,ee,et),Ot=new Ie(0,0,ee,et),he=!1,Q=new ks,ut=!1,pt=!1,ft=new ce,vt=new C,zt=new Ie,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function ct(){return lt===null?at:1}let P=n;function Pt(y,D){return e.getContext(y,D)}let gt,A,x,V,X,Z,ht,mt,it,nt,Et,Xt,Y,bt,kt,Yt,se,O,wt,ot,Tt,Lt,dt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",mn,!1),P===null){let D="webgl2";if(P=Pt(D,y),P===null)throw Pt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(y){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),jt("WebGLRenderer: "+y.message),y}function Zt(){gt=new Bg(P),gt.init(),Tt=new w_(P,gt),A=new Cg(P,gt,t,Tt),x=new S_(P,gt),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),W=P.createFramebuffer(),F=P.createFramebuffer(),H=P.createFramebuffer(),V=new Vg(P),X=new l_,Z=new b_(P,gt,x,X,A,Tt,V),ht=new Og(N),mt=new Hp(P),Lt=new Ag(P,mt),it=new zg(P,mt,V,Lt),nt=new Hg(P,it,mt,Lt,V),O=new Gg(P,A,Z),kt=new Rg(X),Et=new o_(N,ht,gt,A,Lt,kt),Xt=new C_(N,X),Y=new h_,bt=new g_(gt),se=new Tg(N,ht,x,nt,g,l),Yt=new M_(N,nt,A),dt=new R_(P,V,A,x),wt=new Eg(P,gt,V),ot=new kg(P,gt,V),V.programs=Et.programs,N.capabilities=A,N.extensions=gt,N.properties=X,N.renderLists=Y,N.shadowMap=Yt,N.state=x,N.info=V}M!==yn&&(E=new Xg(M,e.width,e.height,o,s,r));let Gt=new gh(N,P);this.xr=Gt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(y){y!==void 0&&(at=y,this.setSize(ee,et,!1))},this.getSize=function(y){return y.set(ee,et)},this.setSize=function(y,D,q=!0){if(Gt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=y,et=D,e.width=Math.floor(y*at),e.height=Math.floor(D*at),q===!0&&(e.style.width=y+"px",e.style.height=D+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(ee*at,et*at).floor()},this.setDrawingBufferSize=function(y,D,q){ee=y,et=D,at=q,e.width=Math.floor(y*q),e.height=Math.floor(D*q),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(M===yn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(rt)},this.getViewport=function(y){return y.copy(It)},this.setViewport=function(y,D,q,z){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,D,q,z),x.viewport(rt.copy(It).multiplyScalar(at).round())},this.getScissor=function(y){return y.copy(Ot)},this.setScissor=function(y,D,q,z){y.isVector4?Ot.set(y.x,y.y,y.z,y.w):Ot.set(y,D,q,z),x.scissor(Dt.copy(Ot).multiplyScalar(at).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(y){x.setScissorTest(he=y)},this.setOpaqueSort=function(y){St=y},this.setTransparentSort=function(y){$t=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,q=!0){let z=0;if(y){let G=!1;if(lt!==null){let yt=lt.texture.format;G=m.has(yt)}if(G){let yt=lt.texture.type,Ut=p.has(yt),Rt=se.getClearColor(),Ht=se.getClearAlpha(),qt=Rt.r,oe=Rt.g,pe=Rt.b;Ut?(S[0]=qt,S[1]=oe,S[2]=pe,S[3]=Ht,P.clearBufferuiv(P.COLOR,0,S)):(I[0]=qt,I[1]=oe,I[2]=pe,I[3]=Ht,P.clearBufferiv(P.COLOR,0,I))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),se.dispose(),Y.dispose(),bt.dispose(),X.dispose(),ht.dispose(),nt.dispose(),Lt.dispose(),dt.dispose(),Et.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",ma),Gt.removeEventListener("sessionend",Sn),bn.stop()};function ye(y){y.preventDefault(),Jc("WebGLRenderer: Context Lost."),U=!0}function _e(){Jc("WebGLRenderer: Context Restored."),U=!1;let y=V.autoReset,D=Yt.enabled,q=Yt.autoUpdate,z=Yt.needsUpdate,G=Yt.type;Zt(),V.autoReset=y,Yt.enabled=D,Yt.autoUpdate=q,Yt.needsUpdate=z,Yt.type=G}function mn(y){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Mn(y){let D=y.target;D.removeEventListener("dispose",Mn),pa(D)}function pa(y){ps(y),X.remove(y)}function ps(y){let D=X.get(y).programs;D!==void 0&&(D.forEach(function(q){Et.releaseProgram(q)}),y.isShaderMaterial&&Et.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,q,z,G,yt){D===null&&(D=Vt);let Ut=G.isMesh&&G.matrixWorld.determinantAffine()<0,Rt=xt(y,D,q,z,G);x.setMaterial(z,Ut);let Ht=q.index,qt=1;if(z.wireframe===!0){if(Ht=it.getWireframeAttribute(q),Ht===void 0)return;qt=2}let oe=q.drawRange,pe=q.attributes.position,Wt=oe.start*qt,ve=(oe.start+oe.count)*qt;yt!==null&&(Wt=Math.max(Wt,yt.start*qt),ve=Math.min(ve,(yt.start+yt.count)*qt)),Ht!==null?(Wt=Math.max(Wt,0),ve=Math.min(ve,Ht.count)):pe!=null&&(Wt=Math.max(Wt,0),ve=Math.min(ve,pe.count));let ze=ve-Wt;if(ze<0||ze===1/0)return;Lt.setup(G,z,Rt,q,Ht);let Le,Ae=wt;if(Ht!==null&&(Le=mt.get(Ht),Ae=ot,Ae.setIndex(Le)),G.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*ct()),Ae.setMode(P.LINES)):Ae.setMode(P.TRIANGLES);else if(G.isLine){let nn=z.linewidth;nn===void 0&&(nn=1),x.setLineWidth(nn*ct()),G.isLineSegments?Ae.setMode(P.LINES):G.isLineLoop?Ae.setMode(P.LINE_LOOP):Ae.setMode(P.LINE_STRIP)}else G.isPoints?Ae.setMode(P.POINTS):G.isSprite&&Ae.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let nn=G._multiDrawStarts,Bt=G._multiDrawCounts,un=G._multiDrawCount,xe=Ht?mt.get(Ht).bytesPerElement:1,Ln=X.get(z).currentProgram.getUniforms();for(let Qn=0;Qn<un;Qn++)Ln.setValue(P,"_gl_DrawID",Qn),Ae.render(nn[Qn]/xe,Bt[Qn])}else if(G.isInstancedMesh)Ae.renderInstances(Wt,ze,G.count);else if(q.isInstancedBufferGeometry){let nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Bt=Math.min(q.instanceCount,nn);Ae.renderInstances(Wt,ze,Bt)}else Ae.render(Wt,ze)};function Yi(y,D,q,z){B!==null&&y.isNodeMaterial&&B.setObject(z,y),ut===!0&&kt.setState(y,q,!1),y.transparent===!0&&y.side===Dn&&y.forceSinglePass===!1?(y.side=Ge,y.needsUpdate=!0,k(y,D,z),y.side=Bi,y.needsUpdate=!0,k(y,D,z),y.side=Dn):k(y,D,z)}this.compile=function(y,D,q=null){q===null&&(q=y),B!==null&&B.renderStart(y,D,q),b=bt.get(q),b.init(D),_.push(b),q.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),y!==q&&y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),pt=this.localClippingEnabled,ut=kt.init(this.clippingPlanes,pt),ut===!0&&kt.setGlobalState(this.clippingPlanes,D),B!==null&&Yt.render(b.state.shadowsArray,q,D);let z=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let yt=G.material;if(yt)if(Array.isArray(yt))for(let Ut=0;Ut<yt.length;Ut++){let Rt=yt[Ut];Yi(Rt,q,D,G),z.add(Rt)}else Yi(yt,q,D,G),z.add(yt)}),b=_.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(y,D,q=null){let z=this.compile(y,D,q);return new Promise(G=>{function yt(){if(z.forEach(function(Ut){let Ht=X.get(Ut).currentProgram;(Ht===void 0||Ht.isReady())&&z.delete(Ut)}),z.size===0){G(y);return}setTimeout(yt,10)}gt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let hr=null;function je(y){hr&&hr(y)}function ma(){bn.stop()}function Sn(){bn.start()}let bn=new Td;bn.setAnimationLoop(je),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(y){hr=y,Gt.setAnimationLoop(y),y===null?bn.stop():bn.start()},Gt.addEventListener("sessionstart",ma),Gt.addEventListener("sessionend",Sn),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(y,D);let q=Gt.enabled===!0&&Gt.isPresenting===!0,z=E!==null&&(lt===null||q)&&E.begin(N,lt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(D),D=Gt.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,D,lt),b=bt.get(y,_.length),b.init(D),b.state.textureUnits=Z.getTextureUnits(),_.push(b),ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Q.setFromProjectionMatrix(ft,Hn,D.reversedDepth),pt=this.localClippingEnabled,ut=kt.init(this.clippingPlanes,pt),w=Y.get(y,L.length),w.init(),L.push(w),Gt.enabled===!0&&Gt.isPresenting===!0){let Ut=N.xr.getDepthSensingMesh();Ut!==null&&Si(Ut,D,-1/0,N.sortObjects)}Si(y,D,0,N.sortObjects),w.finish(),B!==null&&B.updateLights(b.state.lightsArray),N.sortObjects===!0&&w.sort(St,$t),$=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,$&&se.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&kt.beginShadows();let G=b.state.shadowsArray;if(Yt.render(G,y,D),ut===!0&&kt.endShadows(),(z&&E.hasRenderPass())===!1){let Ut=w.opaque,Rt=w.transmissive;if(b.setupLights(),D.isArrayCamera){let Ht=D.cameras;if(Rt.length>0)for(let qt=0,oe=Ht.length;qt<oe;qt++){let pe=Ht[qt];xa(Ut,Rt,y,pe)}$&&se.render(y);for(let qt=0,oe=Ht.length;qt<oe;qt++){let pe=Ht[qt];ga(w,y,pe,pe.viewport)}}else Rt.length>0&&xa(Ut,Rt,y,D),$&&se.render(y),ga(w,y,D)}lt!==null&&J===0&&(Z.updateMultisampleRenderTarget(lt),Z.updateRenderTargetMipmap(lt)),z&&E.end(N),y.isScene===!0&&y.onAfterRender(N,y,D),Lt.resetDefaultState(),tt=-1,st=null,_.pop(),_.length>0?(b=_[_.length-1],Z.setTextureUnits(b.state.textureUnits),ut===!0&&kt.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?w=L[L.length-1]:w=null,B!==null&&B.renderEnd()};function Si(y,D,q,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Q)){z&&zt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ft);let Ut=nt.update(y),Rt=y.material;Rt.visible&&w.push(y,Ut,Rt,q,zt.z,null,D)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Q))){let Ut=nt.update(y),Rt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),zt.copy(y.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),zt.copy(Ut.boundingSphere.center)),zt.applyMatrix4(y.matrixWorld).applyMatrix4(ft)),Array.isArray(Rt)){let Ht=Ut.groups;for(let qt=0,oe=Ht.length;qt<oe;qt++){let pe=Ht[qt],Wt=Rt[pe.materialIndex];Wt&&Wt.visible&&w.push(y,Ut,Wt,q,zt.z,pe,D)}}else Rt.visible&&w.push(y,Ut,Rt,q,zt.z,null,D)}}let yt=y.children;for(let Ut=0,Rt=yt.length;Ut<Rt;Ut++)Si(yt[Ut],D,q,z)}function ga(y,D,q,z){let{opaque:G,transmissive:yt,transparent:Ut}=y;b.setupLightsView(q),ut===!0&&kt.setGlobalState(N.clippingPlanes,q),z&&x.viewport(rt.copy(z)),G.length>0&&ms(G,D,q),yt.length>0&&ms(yt,D,q),Ut.length>0&&ms(Ut,D,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function xa(y,D,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let Wt=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new xn(1,1,{generateMipmaps:!0,type:Wt?Zn:yn,minFilter:Vi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let yt=b.state.transmissionRenderTarget[z.id],Ut=z.viewport||rt;yt.setSize(Ut.z*N.transmissionResolutionScale,Ut.w*N.transmissionResolutionScale);let Rt=N.getRenderTarget(),Ht=N.getActiveCubeFace(),qt=N.getActiveMipmapLevel();N.setRenderTarget(yt),N.getClearColor(fe),ie=N.getClearAlpha(),ie<1&&N.setClearColor(16777215,.5),N.clear(),$&&se.render(q);let oe=N.toneMapping;N.toneMapping=qn;let pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),ut===!0&&kt.setGlobalState(N.clippingPlanes,z),ms(y,q,z),Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ve=0,ze=D.length;ve<ze;ve++){let Le=D[ve],{object:Ae,geometry:nn,material:Bt,group:un}=Le;if(Bt.side===Dn&&Ae.layers.test(z.layers)){let xe=Bt.side;Bt.side=Ge,Bt.needsUpdate=!0,T(Ae,q,z,nn,Bt,un),Bt.side=xe,Bt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt))}N.setRenderTarget(Rt,Ht,qt),N.setClearColor(fe,ie),pe!==void 0&&(z.viewport=pe),N.toneMapping=oe}function ms(y,D,q){let z=D.isScene===!0?D.overrideMaterial:null;for(let G=0,yt=y.length;G<yt;G++){let Ut=y[G],{object:Rt,geometry:Ht,group:qt}=Ut,oe=Ut.material;oe.allowOverride===!0&&z!==null&&(oe=z),Rt.layers.test(q.layers)&&T(Rt,D,q,Ht,oe,qt)}}function T(y,D,q,z,G,yt){B!==null&&G.isNodeMaterial&&B.setObject(y,G),y.onBeforeRender(N,D,q,z,G,yt),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(N,D,q,z,y,yt),G.transparent===!0&&G.side===Dn&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,N.renderBufferDirect(q,D,z,G,y,yt),G.side=Bi,G.needsUpdate=!0,N.renderBufferDirect(q,D,z,G,y,yt),G.side=Dn):N.renderBufferDirect(q,D,z,G,y,yt),y.onAfterRender(N,D,q,z,G,yt)}function k(y,D,q){D.isScene!==!0&&(D=Vt);let z=X.get(y),G=b.state.lights,yt=b.state.shadowsArray,Ut=G.state.version,Rt=Et.getParameters(y,G.state,yt,D,q,b.state.lightProbeGridArray),Ht=Et.getProgramCacheKey(Rt),qt=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=ht.get(y.envMap||z.environment,oe),z.envMapRotation=z.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,qt===void 0&&(y.addEventListener("dispose",Mn),qt=new Map,z.programs=qt);let pe=qt.get(Ht);if(pe!==void 0){if(z.currentProgram===pe&&z.lightsStateVersion===Ut)return R(y,Rt),pe}else Rt.uniforms=Et.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,q,Rt),y.onBeforeCompile(Rt,N),pe=Et.acquireProgram(Rt,Ht),qt.set(Ht,pe),z.uniforms=Rt.uniforms;let Wt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Wt.clippingPlanes=kt.uniform),R(y,Rt),z.needsLights=Jt(y),z.lightsStateVersion=Ut,z.needsLights&&(Wt.ambientLightColor.value=G.state.ambient,Wt.lightProbe.value=G.state.probe,Wt.sunLights.value=G.state.sun,Wt.sunLightShadows.value=G.state.sunShadow,Wt.directionalLights.value=G.state.directional,Wt.directionalLightShadows.value=G.state.directionalShadow,Wt.spotLights.value=G.state.spot,Wt.spotLightShadows.value=G.state.spotShadow,Wt.rectAreaLights.value=G.state.rectArea,Wt.ltc_1.value=G.state.rectAreaLTC1,Wt.ltc_2.value=G.state.rectAreaLTC2,Wt.pointLights.value=G.state.point,Wt.pointLightShadows.value=G.state.pointShadow,Wt.hemisphereLights.value=G.state.hemi,Wt.sunShadowMatrix.value=G.state.sunShadowMatrix,Wt.sunShadowCascade.value=G.state.sunShadowCascade,Wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Wt.spotLightMatrix.value=G.state.spotLightMatrix,Wt.spotLightMap.value=G.state.spotLightMap,Wt.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=pe,z.uniformsList=null,pe}function K(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=nr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function R(y,D){let q=X.get(y);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Mt(y,D){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let q=0,z=y.length;q<z;q++){let G=y[q];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function xt(y,D,q,z,G){D.isScene!==!0&&(D=Vt),Z.resetTextureUnits();let yt=D.fog,Ut=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,Rt=lt===null?N.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:me.workingColorSpace,Ht=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,qt=ht.get(z.envMap||Ut,Ht),oe=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pe=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Wt=!!q.morphAttributes.position,ve=!!q.morphAttributes.normal,ze=!!q.morphAttributes.color,Le=qn;z.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Le=N.toneMapping);let Ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nn=Ae!==void 0?Ae.length:0,Bt=X.get(z),un=b.state.lights;if(ut===!0&&(pt===!0||y!==st)){let Re=y===st&&z.id===tt;kt.setState(z,y,Re)}let xe=!1;z.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==un.state.version||Bt.outputColorSpace!==Rt||G.isBatchedMesh&&Bt.batching===!1||!G.isBatchedMesh&&Bt.batching===!0||G.isBatchedMesh&&Bt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Bt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Bt.instancingMorph===!1&&G.morphTexture!==null||Bt.envMap!==qt||z.fog===!0&&Bt.fog!==yt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==kt.numPlanes||Bt.numIntersection!==kt.numIntersection)||Bt.vertexAlphas!==oe||Bt.vertexTangents!==pe||Bt.morphTargets!==Wt||Bt.morphNormals!==ve||Bt.morphColors!==ze||Bt.toneMapping!==Le||Bt.morphTargetsCount!==nn||!!Bt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Bt.__version=z.version);let Ln=Bt.currentProgram;xe===!0&&(Ln=k(z,D,G),B&&z.isNodeMaterial&&B.onUpdateProgram(z,Ln,Bt));let Qn=!1,bi=!1,gs=!1,be=Ln.getUniforms(),Oe=Bt.uniforms;if(x.useProgram(Ln.program)&&(Qn=!0,bi=!0,gs=!0),z.id!==tt&&(tt=z.id,bi=!0),Bt.needsLights){let Re=Mt(b.state.lightProbeGridArray,G);Bt.lightProbeGrid!==Re&&(Bt.lightProbeGrid=Re,bi=!0)}if(Qn||st!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),be.setValue(P,"projectionMatrix",y.projectionMatrix),be.setValue(P,"viewMatrix",y.matrixWorldInverse);let Ti=be.map.cameraPosition;Ti!==void 0&&Ti.setValue(P,vt.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&be.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&be.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),st!==y&&(st=y,bi=!0,gs=!0)}if(Bt.needsLights&&(un.state.sunShadowMap.length>0&&be.setValue(P,"sunShadowMap",un.state.sunShadowMap,Z),un.state.directionalShadowMap.length>0&&be.setValue(P,"directionalShadowMap",un.state.directionalShadowMap,Z),un.state.spotShadowMap.length>0&&be.setValue(P,"spotShadowMap",un.state.spotShadowMap,Z),un.state.pointShadowMap.length>0&&be.setValue(P,"pointShadowMap",un.state.pointShadowMap,Z)),G.isSkinnedMesh){be.setOptional(P,G,"bindMatrix"),be.setOptional(P,G,"bindMatrixInverse");let Re=G.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),be.setValue(P,"boneTexture",Re.boneTexture,Z))}G.isBatchedMesh&&(be.setOptional(P,G,"batchingTexture"),be.setValue(P,"batchingTexture",G._matricesTexture,Z),be.setOptional(P,G,"batchingIdTexture"),be.setValue(P,"batchingIdTexture",G._indirectTexture,Z),be.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&be.setValue(P,"batchingColorTexture",G._colorsTexture,Z));let wi=q.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&O.update(G,q,Ln),(bi||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,be.setValue(P,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Oe.envMapIntensity.value=D.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=P_()),bi){if(be.setValue(P,"toneMappingExposure",N.toneMappingExposure),Bt.needsLights&&Ft(Oe,gs),yt&&z.fog===!0&&Xt.refreshFogUniforms(Oe,yt),Xt.refreshMaterialUniforms(Oe,z,at,et,b.state.transmissionRenderTarget[y.id]),Bt.needsLights&&Bt.lightProbeGrid){let Re=Bt.lightProbeGrid;Oe.probesSH.value=Re.texture,Oe.probesMin.value.copy(Re.boundingBox.min),Oe.probesMax.value.copy(Re.boundingBox.max),Oe.probesResolution.value.copy(Re.resolution)}nr.upload(P,K(Bt),Oe,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(nr.upload(P,K(Bt),Oe,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&be.setValue(P,"center",G.center),be.setValue(P,"modelViewMatrix",G.modelViewMatrix),be.setValue(P,"normalMatrix",G.normalMatrix),be.setValue(P,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Re=z.uniformsGroups;for(let Ti=0,xs=Re.length;Ti<xs;Ti++){let Ih=Re[Ti];dt.update(Ih,Ln),dt.bind(Ih,Ln)}}return Ln}function Ft(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Jt(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(y,D,q){let z=X.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=D,X.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let q=X.get(y);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,q=0){lt=y,j=D,J=q;let z=null,G=!1,yt=!1;if(y){let Rt=X.get(y);if(Rt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(P.FRAMEBUFFER,Rt.__webglFramebuffer),rt.copy(y.viewport),Dt.copy(y.scissor),Nt=y.scissorTest,x.viewport(rt),x.scissor(Dt),x.setScissorTest(Nt),tt=-1;return}else if(Rt.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(Rt.__hasExternalTextures)Z.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let oe=y.depthTexture;if(Rt.__boundDepthTexture!==oe){if(oe!==null&&X.has(oe)&&(y.width!==oe.image.width||y.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}let Ht=y.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(yt=!0);let qt=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(qt[D])?z=qt[D][q]:z=qt[D],G=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?z=X.get(y).__webglMultisampledFramebuffer:Array.isArray(qt)?z=qt[q]:z=qt,rt.copy(y.viewport),Dt.copy(y.scissor),Nt=y.scissorTest}else rt.copy(It).multiplyScalar(at).floor(),Dt.copy(Ot).multiplyScalar(at).floor(),Nt=he;if(q!==0&&(z=W),x.bindFramebuffer(P.FRAMEBUFFER,z)&&x.drawBuffers(y,z),x.viewport(rt),x.scissor(Dt),x.setScissorTest(Nt),G){let Rt=X.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,Rt.__webglTexture,q)}else if(yt){let Rt=D;for(let Ht=0;Ht<y.textures.length;Ht++){let qt=X.get(y.textures[Ht]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ht,qt.__webglTexture,q,Rt)}}else if(y!==null&&q!==0){let Rt=X.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rt.__webglTexture,q)}tt=-1};function Qt(y){let D=X.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=A.textureFormatReadable(y.format),D.__typeReadable=A.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,q,z,G,yt,Ut,Rt=0){if(!(y&&y.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){x.bindFramebuffer(P.FRAMEBUFFER,Ht);try{let qt=y.textures[Rt],oe=qt.format,pe=qt.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Rt);let Wt=Qt(qt);if(Wt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&q>=0&&q<=y.height-G&&P.readPixels(D,q,z,G,Tt.convert(oe),Tt.convert(pe),yt)}finally{let qt=lt!==null?X.get(lt).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(y,D,q,z,G,yt,Ut,Rt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht)if(D>=0&&D<=y.width-z&&q>=0&&q<=y.height-G){x.bindFramebuffer(P.FRAMEBUFFER,Ht);let qt=y.textures[Rt],oe=qt.format,pe=qt.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Rt);let Wt=Qt(qt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),P.readPixels(D,q,z,G,Tt.convert(oe),Tt.convert(pe),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let ze=lt!==null?X.get(lt).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,ze);let Le=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zu(P,Le,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ve),P.deleteSync(Le),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,q=0){let z=Math.pow(2,-q),G=Math.floor(y.image.width*z),yt=Math.floor(y.image.height*z),Ut=D!==null?D.x:0,Rt=D!==null?D.y:0;Z.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,Ut,Rt,G,yt),x.unbindTexture()},this.copyTextureToTexture=function(y,D,q=null,z=null,G=0,yt=0){let Ut,Rt,Ht,qt,oe,pe,Wt,ve,ze,Le=y.isCompressedTexture?y.mipmaps[yt]:y.image;if(q!==null)Ut=q.max.x-q.min.x,Rt=q.max.y-q.min.y,Ht=q.isBox3?q.max.z-q.min.z:1,qt=q.min.x,oe=q.min.y,pe=q.isBox3?q.min.z:0;else{let Oe=Math.pow(2,-G);Ut=Math.floor(Le.width*Oe),Rt=Math.floor(Le.height*Oe),y.isDataArrayTexture?Ht=Le.depth:y.isData3DTexture?Ht=Math.floor(Le.depth*Oe):Ht=1,qt=0,oe=0,pe=0}z!==null?(Wt=z.x,ve=z.y,ze=z.z):(Wt=0,ve=0,ze=0);let Ae=Tt.convert(D.format),nn=Tt.convert(D.type),Bt;D.isData3DTexture?(Z.setTexture3D(D,0),Bt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),Bt=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),Bt=P.TEXTURE_2D),x.activeTexture(P.TEXTURE0),x.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let un=x.getParameter(P.UNPACK_ROW_LENGTH),xe=x.getParameter(P.UNPACK_IMAGE_HEIGHT),Ln=x.getParameter(P.UNPACK_SKIP_PIXELS),Qn=x.getParameter(P.UNPACK_SKIP_ROWS),bi=x.getParameter(P.UNPACK_SKIP_IMAGES);x.pixelStorei(P.UNPACK_ROW_LENGTH,Le.width),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Le.height),x.pixelStorei(P.UNPACK_SKIP_PIXELS,qt),x.pixelStorei(P.UNPACK_SKIP_ROWS,oe),x.pixelStorei(P.UNPACK_SKIP_IMAGES,pe);let gs=y.isDataArrayTexture||y.isData3DTexture,be=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let Oe=X.get(y),wi=X.get(D),Re=X.get(Oe.__renderTarget),Ti=X.get(wi.__renderTarget);x.bindFramebuffer(P.READ_FRAMEBUFFER,Re.__webglFramebuffer),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let xs=0;xs<Ht;xs++)gs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,X.get(y).__webglTexture,G,pe+xs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,X.get(D).__webglTexture,yt,ze+xs)),P.blitFramebuffer(qt,oe,Ut,Rt,Wt,ve,Ut,Rt,P.DEPTH_BUFFER_BIT,P.NEAREST);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||X.has(y)){let Oe=X.get(y),wi=X.get(D);x.bindFramebuffer(P.READ_FRAMEBUFFER,F),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,H);for(let Re=0;Re<Ht;Re++)gs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.__webglTexture,G,pe+Re):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oe.__webglTexture,G),be?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wi.__webglTexture,yt,ze+Re):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wi.__webglTexture,yt),G!==0?P.blitFramebuffer(qt,oe,Ut,Rt,Wt,ve,Ut,Rt,P.COLOR_BUFFER_BIT,P.NEAREST):be?P.copyTexSubImage3D(Bt,yt,Wt,ve,ze+Re,qt,oe,Ut,Rt):P.copyTexSubImage2D(Bt,yt,Wt,ve,qt,oe,Ut,Rt);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else be?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Bt,yt,Wt,ve,ze,Ut,Rt,Ht,Ae,nn,Le.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Bt,yt,Wt,ve,ze,Ut,Rt,Ht,Ae,Le.data):P.texSubImage3D(Bt,yt,Wt,ve,ze,Ut,Rt,Ht,Ae,nn,Le):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,yt,Wt,ve,Ut,Rt,Ae,nn,Le.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,yt,Wt,ve,Le.width,Le.height,Ae,Le.data):P.texSubImage2D(P.TEXTURE_2D,yt,Wt,ve,Ut,Rt,Ae,nn,Le);x.pixelStorei(P.UNPACK_ROW_LENGTH,un),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe),x.pixelStorei(P.UNPACK_SKIP_PIXELS,Ln),x.pixelStorei(P.UNPACK_SKIP_ROWS,Qn),x.pixelStorei(P.UNPACK_SKIP_IMAGES,bi),yt===0&&D.generateMipmaps&&P.generateMipmap(Bt),x.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){j=0,J=0,lt=null,x.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Rl=class extends is{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new pn;t.deleteAttribute("uv");let e=new de({side:Ge}),n=new de,s=new Zr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new At(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Xn(t,n,6),o=new Ue;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new At(t,rr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new At(t,rr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new At(t,rr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new At(t,rr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new At(t,rr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new At(t,rr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function rr(i){return new Hr({color:0,emissive:16777215,emissiveIntensity:i})}function Il(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new we,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Ld(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let M=0;M<a[h].length;++M)f.push(a[h][M][u]);let g=Ld(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Ld(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new dn(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let M=h.getComponent(u,g);o.setComponent(u+d,g,M)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Pe={hand:'"Caveat", "Comic Sans MS", cursive',marker:'"Permanent Marker", "Impact", sans-serif',chalk:'"Cabin Sketch", "Chalkboard SE", "Comic Sans MS", cursive',type:'"Special Elite", "Courier New", monospace',brush:'"Yuji Syuku", serif',sign:'"Arial Black", "Helvetica Neue", Arial, sans-serif'},Xe=(i,t)=>{let e=Object.assign(document.createElement("canvas"),{width:i,height:t});return[e,e.getContext("2d")]};function qe(i,t=!0){let e=new En(i);return e.wrapS=e.wrapT=Li,e.anisotropy=8,t&&(e.colorSpace=Qe),e}var $n=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function ha(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n;s=s*s*(3-2*s),r=r*r*(3-2*r);let a=$n(e,n),o=$n(e+1,n),l=$n(e,n+1),c=$n(e+1,n+1);return a+(o-a)*s+(l-a)*r+(a-o-l+c)*s*r}function Nd(i,t,e){let[n,s]=Xe(i,t),r=s.createImageData(i,t),a=r.data;for(let o=0,l=0;o<t;o++)for(let c=0;c<i;c++,l+=4){let[h,d,u]=e(c/i,o/t,c,o);a[l]=h,a[l+1]=d,a[l+2]=u,a[l+3]=255}return s.putImageData(r,0,0),[n,s]}function ci({planks:i=5,base:t=[120,78,45],spread:e=.16,rings:n=150,joints:s=1.3,seed:r=1,size:a=512,seams:o=!0}={}){return qe(Nd(a,a,(l,c,h,d)=>{let u=Math.floor(l*i),f=l*i-u,g=c+$n(u,r)*3,M=o&&(g*s+$n(u,r+7))%1<.006,m=ha(f*1.5+u*13,g*2.5)*.22+ha(f*4+u,g*9)*.03,p=Math.sin((f+m)*n),S=ha(f*70+u*7,g*1.2),I=$n(h,Math.floor(d/5))*.05,v=Math.max(0,1-Math.hypot((f-$n(u,r+3))*3,(g*2%1-.5)*1.2)*4)*($n(u,r+5)>.75),w=(1+($n(u,r+1)-.5)*2*e)*(.84+.07*p+.1*(S-.5)-I-v*.3);return o&&(f<.012||f>.988||M)&&(w*=.42),t.map(b=>b*w)})[0])}function Dd(){return qe(Nd(512,512,(i,t,e,n)=>{let s=.93+.05*ha(i*9,t*9)+.03*ha(i*40,t*40)+($n(e,n)-.5)*.03;return[236*s,232*s,222*s]})[0])}function Ud(i,t,e,n){let[s,r]=Xe(t,e);r.fillStyle=r.strokeStyle="rgba(240,240,232,.92)",r.lineCap=r.lineJoin="round",n(r),r.globalCompositeOperation="destination-out";for(let a=0;a<t*e/9;a++)r.globalAlpha=Math.random()*.8,r.fillRect(Math.random()*t,Math.random()*e,1+Math.random()*2,1);i.drawImage(s,0,0)}var yi=(i,t,e)=>{i.lineWidth=e,i.beginPath(),t.forEach(([n,s],r)=>i[r?"lineTo":"moveTo"](n+Math.random()*3,s+Math.random()*3)),i.stroke()};function Fd(){let[e,n]=Xe(2048,660);n.fillStyle="#18231d",n.fillRect(0,0,2048,660);for(let s=0;s<260;s++)n.strokeStyle=`rgba(200,210,200,${Math.random()*.035})`,n.lineWidth=30+Math.random()*80,n.beginPath(),n.arc(Math.random()*2048,Math.random()*660,60+Math.random()*260,Math.random()*6,Math.random()*6),n.stroke();return Ud(n,2048,660,s=>{s.font=`700 44px ${Pe.chalk}`,s.fillText("Tuesday (again)",60,70),s.font=`700 76px ${Pe.chalk}`,s.fillText("TODAY: STRUCTURAL INTEGRITY",60,165),yi(s,[[60,185],[1060,180]],5),s.font=`700 46px ${Pe.chalk}`,["1. Walls hold up the ceiling.","2. The ceiling holds up the 2nd floor.","3. The 2nd floor holds up the principal.","4. Do you see where this is going, D.B.?"].forEach((l,c)=>s.fillText(l,80,260+c*66)),s.font=`700 36px ${Pe.chalk}`,s.fillText("Pop quiz: how many walls does this room have?",80,560),s.fillText("(answer may change before the bell)",120,604),s.save(),s.translate(1e3,615),s.rotate(-.08),s.font=`28px ${Pe.hand}`,s.fillText("4 for now ;)",0,0),s.restore();let r=1290,a=540;yi(s,[[r,a],[r,a-230],[r+300,a-230],[r+300,a]],6),yi(s,[[r-20,a-225],[r+150,a-330],[r+320,a-225]],6);for(let l=0;l<2;l++)for(let c=0;c<3;c++)s.strokeRect(r+30+c*90,a-200+l*85,50,50);yi(s,[[r+160,a-330],[r+190,a-250],[r+150,a-170],[r+200,a-60],[r+170,a]],4);let o=r+470;s.beginPath(),s.arc(o,a-150,22,0,7),s.stroke(),yi(s,[[o,a-128],[o,a-60],[o-25,a]],5),yi(s,[[o,a-60],[o+25,a]],5),yi(s,[[o,a-110],[o+55,a-90]],5),s.strokeRect(o+50,a-70,70,70),yi(s,[[o+85,a-70],[o+85,a-120]],5),yi(s,[[o+60,a-120],[o+110,a-120]],7);for(let l=0;l<3;l++)s.lineWidth=6,s.beginPath(),s.ellipse(o+30,a-90,150+l*9,130+l*7,l*.2,0,7),s.stroke();s.font=`700 90px ${Pe.chalk}`,s.fillText("NO.",o+150,a-230),s.font=`700 42px ${Pe.chalk}`,s.fillText("DEMOLITION BOY: STAY AFTER CLASS",1170,80),s.strokeRect(1150,30,820,70)}),qe(e)}function Pl(i){let[n,s]=Xe(1600,150);return i&&Ud(s,1600,150,r=>{let a=88;do r.font=`700 ${a-=4}px ${Pe.chalk}`;while(r.measureText(i).width>1560);r.fillText(i,20,105)}),n}function Ll(i,t,e){let n=[];for(let s of t.split(`
`)){let r="";for(let a of s.split(" ")){let o=r?`${r} ${a}`:a;i.measureText(o).width>e&&r?(n.push(r),r=a):r=o}n.push(r)}return n}var L_={yellow:"#f7e26b",pink:"#f6a6c1",blue:"#9fd4f2",green:"#b8e68a",orange:"#f8b26a"};function Nl(i,t="yellow",e=46){let[n,s]=Xe(512,512),r=s.createLinearGradient(0,0,0,512);r.addColorStop(0,"rgba(90,70,20,0)"),r.addColorStop(1,"rgba(90,70,20,.2)"),s.fillStyle=L_[t],s.fillRect(0,0,512,512),s.fillStyle=r,s.fillRect(0,0,512,512),s.fillStyle="rgba(0,0,0,.06)",s.fillRect(0,0,512,70),s.fillStyle="#1d2433",s.font=`600 ${e}px ${Pe.hand}`,s.translate(256,0),s.rotate((Math.random()-.5)*.06);let a=Ll(s,i,440);return a.forEach((o,l)=>{s.textAlign="center",s.fillText(o,0,256-(a.length-1)*e*.55+l*e*1.1+e*.35)}),qe(n)}function Dl(i,t){let[e,n]=Xe(768,1024);return n.fillStyle="#f4efe2",n.fillRect(0,0,768,1024),n.fillStyle="#7a1f1f",n.font=`700 30px ${Pe.sign}`,n.fillText(i,60,90),n.fillRect(60,108,648,4),n.fillStyle="#2a2622",n.font=`27px ${Pe.type}`,Ll(n,t,640).forEach((s,r)=>n.fillText(s,60,170+r*40)),n.strokeStyle="rgba(120,60,20,.35)",n.lineWidth=7,n.beginPath(),n.arc(560,880,70,0,7),n.stroke(),qe(e)}function Od(i,t,e){let[n,s]=Xe(256,768);if(s.fillStyle="#3b3328",s.fillRect(0,0,256,768),s.fillStyle="#efe7d3",s.fillRect(18,60,220,640),s.fillStyle="#16120e",s.textAlign="center",e){let a=Math.min(130,520/i.length);s.font=`${a}px ${Pe.brush}`,[...i].forEach((o,l)=>s.fillText(o,128,90+a*.95+l*a*1.02))}s.font=`600 ${e?26:36}px ${Pe.hand}`;let r=Ll(s,t,190);return r.forEach((a,o)=>s.fillText(a,128,(e?690-(r.length-1)*28:380-r.length*20)+o*(e?28:42))),qe(n)}function Ul(i,t,{bg:e="#f5f2ea",bar:n="#c0262d",ink:s="#1b1b1b",w:r=1024,h:a=512,size:o=70,foot:l=""}={}){let[c,h]=Xe(r,a);return h.fillStyle=e,h.fillRect(0,0,r,a),h.fillStyle=n,h.fillRect(0,0,r,a*.26),h.fillStyle="#fff",h.textAlign="center",h.font=`900 ${a*.14}px ${Pe.sign}`,h.fillText(i,r/2,a*.18),h.fillStyle=s,h.font=`900 ${o}px ${Pe.sign}`,Ll(h,t,r*.86).forEach((d,u)=>h.fillText(d,r/2,a*.45+u*o*1.15)),l&&(h.font=`600 ${a*.08}px ${Pe.hand}`,h.textAlign="right",h.fillText(l,r*.95,a*.93)),qe(c)}function Bd(i){let[t,e]=Xe(512,640);e.fillStyle="#fbfaf4",e.fillRect(0,0,512,640),e.strokeStyle="rgba(70,110,200,.35)",e.lineWidth=2;for(let n=70;n<640;n+=48)e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();return e.strokeStyle="rgba(220,60,60,.4)",e.beginPath(),e.moveTo(60,0),e.lineTo(60,640),e.stroke(),i.forEach((n,s)=>{e.fillStyle=s%2?"#2b3fa0":"#202020",e.font=s%2?`700 40px ${Pe.marker}`:`600 44px ${Pe.hand}`,e.fillText(n,s%2?110:80,112+s*96)}),qe(t)}function zd(){let[i,t]=Xe(256,128);for(let e of[72,184]){let n=t.createRadialGradient(e,64,0,e,64,46);n.addColorStop(0,"rgba(255,250,170,1)"),n.addColorStop(.35,"rgba(210,240,80,.9)"),n.addColorStop(1,"rgba(120,200,40,0)"),t.fillStyle=n,t.beginPath(),t.ellipse(e,64,46,34,0,0,7),t.fill(),t.fillStyle="#050505",t.beginPath(),t.ellipse(e+4,64,6,24,0,0,7),t.fill()}return qe(i)}function kd(i){let[t,e]=Xe(128,192);return e.fillStyle="#121212",e.fillRect(0,0,128,192),e.fillStyle="#fafafa",e.textAlign="center",e.font=`900 150px ${Pe.sign}`,e.fillText(i,64,150),e.fillStyle="rgba(0,0,0,.6)",e.fillRect(0,94,128,4),qe(t)}function Vd(){let[i,t]=Xe(512,512);t.fillStyle="#f7f5ee",t.beginPath(),t.arc(256,256,250,0,7),t.fill(),t.fillStyle="#222",t.textAlign="center",t.font=`700 52px ${Pe.sign}`;for(let e=1;e<=12;e++){let n=(12-e)/12*Math.PI*2;t.fillText(String(e),256-Math.sin(n)*190,274-Math.cos(n)*190)}return t.font=`500 28px ${Pe.hand}`,t.fillStyle="#b02020",t.fillText("detention ends: never",256,360),qe(i)}function Gd(){let[i,t]=Xe(1024,1024);t.strokeStyle="rgba(40,34,28,.85)",t.lineCap="round";for(let e=0;e<16;e++){let n=512,s=512,r=e/16*Math.PI*2+Math.random()*.3,a=6;t.beginPath(),t.moveTo(n,s);for(let o=0,l=6+Math.random()*8;o<l;o++)r+=(Math.random()-.5)*.9,n+=Math.cos(r)*34,s+=Math.sin(r)*34,t.lineWidth=a*=.86,t.lineTo(n,s);t.stroke()}return qe(i)}function Hd(i=.55){let[t,e]=Xe(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(0,0,0,${i})`),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),qe(t)}function Wd(){let[i,t]=Xe(256,256),e=t.createRadialGradient(128,128,30,128,128,128);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),qe(i)}function Xd(){let[i,t]=Xe(4,128),e=t.createLinearGradient(0,0,0,128);return e.addColorStop(0,"rgba(0,0,0,.5)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,4,128),qe(i)}function xh(i=""){let[t,e]=Xe(512,512);for(let s=0;s<70;s++){let r=Math.random()*Math.PI*2,a=120+Math.random()*130,o=e.createLinearGradient(256,256,256+Math.cos(r)*a,256+Math.sin(r)*a);o.addColorStop(0,"rgba(15,10,6,.5)"),o.addColorStop(1,"rgba(15,10,6,0)"),e.strokeStyle=o,e.lineWidth=10+Math.random()*30,e.beginPath(),e.moveTo(256,256),e.lineTo(256+Math.cos(r)*a,256+Math.sin(r)*a),e.stroke()}let n=e.createRadialGradient(256,256,0,256,256,120);return n.addColorStop(0,"rgba(8,5,3,.95)"),n.addColorStop(.6,"rgba(25,14,6,.7)"),n.addColorStop(1,"rgba(25,14,6,0)"),e.fillStyle=n,e.fillRect(0,0,512,512),i&&(e.font=`700 54px ${Pe.marker}`,e.textAlign="center",e.fillStyle="rgba(255,230,190,.35)",e.fillText(i,258,452),e.fillStyle="rgba(40,22,10,.85)",e.fillText(i,256,450)),qe(t)}function qd(){let[i,t]=Xe(1024,512),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#b9d3ea"),e.addColorStop(.55,"#eef3f3"),e.addColorStop(1,"#f6f7f0"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.filter="blur(8px)";for(let n=0;n<140;n++){let s=Math.random()*1024,r=330+Math.random()*200,a=25+Math.random()*70;t.fillStyle=`hsla(${80+Math.random()*30}, ${18+Math.random()*20}%, ${58+Math.random()*25}%, .9)`,t.beginPath(),t.arc(s,r-a*.3,a,0,7),t.fill()}return qe(i)}function Yd(i,t){let[,e]=Xe(64,64),n=s=>(e.clearRect(0,0,64,64),e.font=`48px ${t}`,e.fillText(s,4,52),e.getImageData(0,0,64,64).data.join());return n(i[0])!==n("\uFFFF")}var ae=9,Ee=9.6,Ye=3.3,Fl=new C(-1,.55,.25).normalize(),fs=[-3.15,-1.05,1.05,3.15].map(i=>[i-.85,i+.85]),ln=.9,vn=2.75;function vi(i,t,e,n=1){let s=new pn(i,t,e),r=s.attributes.uv,a=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let o=0;o<24;o++){let[l,c]=a[o>>2];r.setXY(o,r.getX(o)*l/n,r.getY(o)*c/n)}return s}var ds=(i,t,e,n,s=0,r=0,a=0)=>i.applyMatrix4(new ce().compose(new C(t,e,n),new Be().setFromEuler(new An(s,r,a)),new C(1,1,1)));function Zd(i,{cjk:t}){let e=($,ct,P={})=>new de({map:$,roughness:ct,envMapIntensity:.6,...P}),n={floor:e(ci({planks:8,base:[96,60,36],rings:90,joints:.7,seed:2}),.38),ceiling:e(ci({planks:6,base:[140,90,52],seed:3,spread:.12,joints:0}),.75),beam:e(ci({planks:1,base:[104,66,40],seed:4,seams:!1}),.6),wains:e(ci({planks:7,base:[86,54,33],seed:5,joints:0}),.5),trim:e(ci({planks:1,base:[74,46,28],seed:6,seams:!1}),.5),plaster:e(Dd(),.95),desk:e(ci({planks:2,base:[128,86,52],seed:7,spread:.06,seams:!1}),.42),chair:e(ci({planks:2,base:[104,68,40],seed:8,seams:!1}),.55),metal:new de({color:12170926,roughness:.45,metalness:.3}),dark:new de({color:657414,roughness:1}),glass:new de({color:16777215,roughness:.05,metalness:.9,transparent:!0,opacity:.06,depthWrite:!1}),frosted:new an({color:10135731})},s=($,ct,P,Pt,gt,A,x,{tile:V=1,parent:X=i,cast:Z=!0,ry:ht=0}={})=>{let mt=new At(vi(ct,P,Pt,V),$);return mt.position.set(gt,A,x),mt.rotation.y=ht,mt.castShadow=Z,mt.receiveShadow=!0,mt.userData.bake=X===i,X.add(mt),mt},r=($,ct,P,Pt,gt,A,{ry:x=0,rx:V=0,rz:X=0,parent:Z=i,lit:ht=!0,blend:mt}={})=>{let it=ht?new de({map:$,roughness:.9,transparent:!0,alphaTest:.02,polygonOffset:!0,polygonOffsetFactor:-2}):new an({map:$,transparent:!0,depthWrite:!1,toneMapped:!1,...mt&&{blending:mt}}),nt=new At(new Ve(ct,P),it);return nt.position.set(Pt,gt,A),nt.rotation.set(V,x,X,"YXZ"),nt.receiveShadow=ht,Z.add(nt),nt},a=($,ct,P,Pt,gt,A=0,x=(Math.random()-.5)*.2,V)=>r(Nl($,ct,V),.13,.13,P,Pt,gt,{ry:A,rz:x}),o=($,ct,P,Pt,gt,A)=>r(Nl($,ct),.12,.12,P,Pt,gt,{rx:-Math.PI/2,rz:A});s(n.floor,ae,.1,Ee,0,-.05,0,{tile:1.6}),s(n.floor,6.6,.16,1.5,0,.08,-Ee/2+.75,{tile:1.6}),s(n.ceiling,ae+.6,.1,Ee+.6,0,Ye+.05,0,{tile:1.2});for(let $=-3;$<=3;$+=1.5)s(n.beam,.12,.17,Ee,$,Ye-.085,0,{cast:!1});for(let $=-3.2;$<=3.2;$+=1.6)s(n.beam,ae,.17,.12,0,Ye-.085,$,{cast:!1});for(let $ of[-1,1]){let ct=$*Ee/2;s(n.plaster,ae,Ye,.2,0,Ye/2,ct+$*.1,{tile:2}),s(n.wains,ae,.95,.03,0,.475,ct-$*.015,{tile:1.2}),s(n.trim,ae,.06,.06,0,.98,ct-$*.03),s(n.trim,ae,.05,.04,0,2.38,ct-$*.02),s(n.trim,ae,.1,.06,0,Ye-.05,ct-$*.03)}s(n.plaster,.2,Ye,Ee,ae/2+.1,Ye/2,0,{tile:2}),s(n.wains,.03,1,Ee,ae/2-.015,.5,0,{tile:1.2}),s(n.trim,.06,.06,Ee,ae/2-.03,1.02,0);for(let $ of[-2.4,-.8,.8,2.4]){let ct=new At(new Ve(1.45,1.35),n.frosted);ct.position.set(ae/2-.012,1.75,$),ct.rotation.y=-Math.PI/2,i.add(ct);for(let P of[-.725,0,.725])s(n.trim,.05,1.4,.05,ae/2-.03,1.75,$+P,{cast:!1});for(let P of[1.08,1.75,2.42])s(n.trim,.05,.05,1.45,ae/2-.03,P,$,{cast:!1})}for(let $ of[-3.95,3.95]){s(n.chair,.05,2,.92,ae/2-.04,1,$,{tile:.9});let ct=new At(new Ve(.5,.6),n.frosted);ct.position.set(ae/2-.068,1.45,$),ct.rotation.y=-Math.PI/2,i.add(ct),s(n.trim,.07,.08,1,ae/2-.04,2.04,$)}a("Bomb squad: knock twice. Everyone else: run.","orange",ae/2-.07,1.2,3.75,-Math.PI/2);let l=[[-Ee/2,fs[0][0]],...fs.slice(1).map(([$],ct)=>[fs[ct][1],$]),[fs[3][1],Ee/2]];s(n.plaster,.25,ln,Ee,-ae/2-.125,ln/2,0,{tile:2}),s(n.wains,.03,ln,Ee,-ae/2+.015,ln/2,0,{tile:1.2}),s(n.plaster,.25,Ye-vn,Ee,-ae/2-.125,(Ye+vn)/2,0,{tile:2});for(let[$,ct]of l)s(n.trim,.3,vn-ln,ct-$,-ae/2-.12,(ln+vn)/2,($+ct)/2);s(n.trim,.34,.05,Ee,-ae/2-.05,ln+.02,0),s(n.trim,.3,.08,Ee,-ae/2-.1,vn+.04,0);let c=[];for(let[$,ct]of fs){let P=($+ct)/2,Pt=new At(new Ve(ct-$,vn-ln),n.glass.clone());Pt.material.opacity=.16,c.push(Pt),Pt.position.set(-ae/2-.08,(ln+vn)/2,P),Pt.rotation.y=Math.PI/2,i.add(Pt);for(let gt of[-.425,0,.425])s(n.trim,.06,vn-ln,gt?.03:.06,-ae/2-.08,(ln+vn)/2,P+gt);for(let gt=1;gt<4;gt++)s(n.trim,.06,.03,ct-$,-ae/2-.08,ln+(vn-ln)*gt/4,P)}a("This window has been tested. From both sides.","blue",-ae/2-.05,1.55,1.4,Math.PI/2),r(qd(),46,18,-16,5,0,{ry:Math.PI/2,lit:!1});let h=Xd(),d=($,ct,P,Pt,gt,A,x)=>r(h,$,ct,P,Pt,gt,{rx:A,ry:x,lit:!1});for(let[$,ct,P,Pt]of[[ae,0,-Ee/2,0],[ae,0,Ee/2,Math.PI],[Ee,-ae/2,0,Math.PI/2],[Ee,ae/2,0,-Math.PI/2]]){let gt=new C(0,0,.18).applyAxisAngle(new C(0,1,0),Pt);d($,.36,ct+gt.x,.003,P+gt.z,-Math.PI/2,Pt),d($,.4,ct+gt.x*1.1,Ye-.01,P+gt.z*1.1,Math.PI/2,Pt+Math.PI)}let u=-Ee/2;s(n.trim,4.24,1.48,.06,0,1.55,u+.03);let f=new At(new Ve(4,1.29),new de({map:Fd(),roughness:.82,envMapIntensity:.4}));f.position.set(0,1.55,u+.062),f.receiveShadow=!0,i.add(f),s(n.trim,4.1,.035,.11,0,.84,u+.1),[[16184554,-1.2],[15915104,-1.1],[15967160,.9]].forEach(([$,ct])=>{let P=new At(new Se(.006,.006,.07),new de({color:$,roughness:1}));P.position.set(ct,.865,u+.1),P.rotation.z=Math.PI/2+.2,i.add(P)}),s(new de({color:2829107,roughness:.9}),.14,.04,.05,1.5,.877,u+.1);let g=Pl(""),M=r(qe(g),1.68,.1575,1.12,1.885,u+.064,{lit:!0});M.material.alphaTest=0;let m=[["\u58CA\u3059\u306A","Rule 1: No demolishing."],["\u67F1\u306F\u53CB\u9054","The pillar is your friend."],["\u7206\u767A\u7981\u6B62","No explosions. Yes, small ones too."],["\u5ECA\u4E0B\u3092\u8D70\u308B\u306A","No running from the blast radius."]],p=[-3.35,-2.6,2.6,3.35].map(($,ct)=>{let P=new ge;P.position.set($,2.25,u+.04),r(Od(...m[ct],t),.36,1.08,0,-.56,0,{parent:P});for(let Pt of[-.02,-1.1]){let gt=new At(new Se(.012,.012,.42),n.trim);gt.rotation.z=Math.PI/2,gt.position.y=Pt,gt.position.z=.01,P.add(gt)}return i.add(P),P});r(Ul("SAFETY FIRST","DAYS WITHOUT AN EXPLOSION",{size:64,foot:"record: \xBD"}),.84,.42,-1.55,2.68,u+.035);let S=new ge,I=r(kd("0"),.075,.11,0,0,0,{parent:S});S.position.set(-1.55,2.54,u+.04),i.add(S);let v=new ge;v.position.set(1.55,2.68,u+.04),r(Vd(),.36,.36,0,0,.012,{parent:v});let w=new At(new Se(.19,.19,.04,40),n.metal);w.rotation.x=Math.PI/2,v.add(w);let b=($,ct,P)=>{let Pt=new ge,gt=new At(new pn(ct,$,.004),new de({color:P}));return gt.position.y=$*.4,Pt.add(gt),Pt.position.z=.026,v.add(Pt),Pt},L={hour:b(.09,.012,1381653),minute:b(.14,.008,1381653),second:b(.15,.003,12591136)};i.add(v),s(new de({color:3815475,roughness:.8}),.34,.22,.12,0,2.7,u+.06),s(n.desk,.95,1.05,.55,0,.16+.525,-3.8,{tile:.9});let _=new ge,E=.16+1.05;_.position.set(.12,E,-3.78),_.rotation.y=-.35,s(new de({color:8002068,roughness:.6}),.18,.13,.13,0,.065,0,{parent:_});for(let $ of[-.05,.05])s(new de({color:10132120,roughness:.5}),.03,.135,.14,$,.066,0,{parent:_});let N=new ge,U=new At(new Se(.008,.008,.16),n.metal);U.position.y=-.08,N.add(U);let B=new At(new Se(.014,.014,.17),new de({color:1710618,roughness:.5}));B.rotation.z=Math.PI/2,N.add(B),N.position.y=.21,_.add(N),r(Nl("CONFISCATED. Do NOT push. \u2014 Mgmt.","pink",40),.09,.09,0,.08,.0665,{parent:_,rz:.12}),i.add(_),r(Dl("TIL FOR\xC6LDRE / TO PARENTS",`K\xE6re for\xE6ldre. Deres s\xF8n har igen spr\xE6ngt kantinen. Vi har derfor ingen kantine. Vi har heller ingen skole, s\xE5 vi skriver dette fra en b\xE5d. B\xE5den er ogs\xE5 v\xE6k nu. Venlig hilsen, Rektor (sv\xF8mmer)

Dear parents: your son has once again blown up the cafeteria. The school is gone. We are writing from a boat. The boat is also gone. Regards, the Principal (swimming).`),.21,.28,-.22,E+.002,-3.75,{rx:-Math.PI/2,rz:.25});let W=Il([vi(1.2,.035,.46),...[-.56,.56].flatMap($=>[-.19,.19].map(ct=>ds(vi(.04,.68,.04),$,-.357,ct))),ds(vi(1.1,.015,.38),0,-.11,0),ds(vi(1.14,.1,.015),0,-.065,-.2)]),F=Il([ds(vi(.38,.03,.36),0,.42,0),ds(vi(.36,.22,.022),0,.72,.17,-.08),...[-.16,.16].flatMap($=>[ds(vi(.03,.42,.03),$,.21,-.15),ds(vi(.03,.84,.03),$,.42,.16)])]),H=[];for(let $=0;$<5;$++)for(let ct=0;ct<3;ct++)H.push({x:(ct-1)*2.7+(Math.random()-.5)*.1,z:-2.45+$*1.15+(Math.random()-.5)*.08,ry:(Math.random()-.5)*.07,row:$,col:ct});let j=.7,J=new Xn(W,n.desk,H.length),lt=new Xn(F,n.chair,H.length*2),tt=new Xn(new Ve(1,1),new an({map:Hd(.55),transparent:!0,depthWrite:!1}),H.length*3),st=new ce,rt=new Be,Dt=new An,Nt=new C(1,1,1),fe=0,ie=0;H.forEach(($,ct)=>{J.setMatrixAt(ct,st.compose(new C($.x,j,$.z),rt.setFromEuler(Dt.set(0,$.ry,0)),Nt)),tt.setMatrixAt(ie++,st.compose(new C($.x,.004,$.z),rt.setFromEuler(Dt.set(-Math.PI/2,0,0)),new C(1.6,.8,1)));for(let P of[-.3,.3]){let Pt=$.row===3&&$.col===0&&P>0,gt=.42+Math.random()*.2,A=new C($.x+P+(Math.random()-.5)*.08,Pt?.185:0,$.z+gt+(Pt?.1:0));lt.setMatrixAt(fe++,st.compose(A,rt.setFromEuler(Pt?Dt.set(Math.PI/2,0,.6,"YXZ"):Dt.set(0,(Math.random()-.5)*.35,0)),Nt)),tt.setMatrixAt(ie++,st.compose(new C(A.x,.005,A.z),rt.setFromEuler(Dt.set(-Math.PI/2,0,0)),new C(.6,.6,1)))}});for(let $ of[J,lt])$.castShadow=$.receiveShadow=!0,i.add($);i.add(tt);let ee=($,ct)=>H.find(P=>P.row===$&&P.col===ct),et=j+.019,at=ee(2,0);r(xh("D.B. WAS HERE"),.62,.62,at.x-.2,et,at.z,{rx:-Math.PI/2,rz:.4}),o("Science project: 'What if\u2026?' Grade: F. (The F is also on fire.)","yellow",at.x+.38,et+.001,at.z+.05,-.3),[[ee(4,1),"This desk has been replaced 14 times. It is new. Be gentle.","green"],[ee(1,1),"LOST: one (1) eyebrow. Reward: the other one. \u2014 D.B.","yellow"],[ee(3,2),"Nothing matters. Except load-bearing walls. Those REALLY matter.","blue"],[ee(0,0),"Tip: the fire alarm is NOT a starting pistol.","orange"]].forEach(([$,ct,P],Pt)=>o(ct,P,$.x+(Pt%2?.3:-.3),et+.001,$.z+.04,(Math.random()-.5)*.6));let St=ee(1,2),$t=s(n.dark,1.02,.085,.3,St.x,j-.067,St.z-.02,{cast:!1});$t.rotation.y=St.ry;let It=r(zd(),.15,.075,St.x+.2,j-.065,St.z+.135,{lit:!1,blend:Un});o("Homework. It bites. Do NOT feed it.","pink",St.x-.25,et+.001,St.z,.2),r(Bd(["u still got the big one?","under the floor","WHICH floor","ALL OF THEM"]),.2,.25,1.3,.004,1.6,{rx:-Math.PI/2,rz:.7});let Ot=Ee/2,he=new ge;for(let $=0;$<=18;$++)s(n.chair,.025,1.2,.36,-3.6+$*.4,.6,Ot-.18,{parent:he,cast:!1});for(let $ of[.01,.4,.8,1.2])s(n.chair,7.25,.025,.36,0,$,Ot-.18,{parent:he,cast:!1});s(n.dark,7.2,1.2,.01,0,.6,Ot-.005,{parent:he,cast:!1}),i.add(he);for(let $=0;$<26;$++){let ct=Math.floor(Math.random()*18),P=Math.floor(Math.random()*3),Pt=.04+Math.random()*.12,gt=.1+Math.random()*.2;s(new de({color:[8007471,3100538,13218426,4156230,14209732,7031434][$%6],roughness:.8}),Pt,Math.min(gt,.36),.22,-3.4+ct*.4+(Math.random()-.5)*.15,P*.4+.025+Math.min(gt,.36)/2,Ot-.2,{parent:he,cast:!1})}let Q=new At(new _n(.13,24,12,0,Math.PI*2,0,Math.PI/2),new de({color:15909912,roughness:.35}));Q.position.set(-2.2,1.213,Ot-.2),Q.scale.y=.85,Q.castShadow=!0;let ut=new At(new Se(.16,.16,.012,24),Q.material);ut.position.y=.006,Q.add(ut),i.add(Q),a("Property of D.B. NOT a helmet for indoor use. (It is. That is the problem.)","yellow",-2.2,1.38,Ot-.006,Math.PI,.1,36);let pt=[r(Gd(),2.2,2.2,2,2,Ot-.004,{ry:Math.PI})];pt.push(r(Wd(),1.25,.85,2.03,1.98,Ot-.007,{ry:Math.PI,lit:!1,blend:Un})),pt[1].material.color.set(9071172),pt.push(r(Ul("FACILITY MANAGEMENT","THIS IS NOT A HOLE.",{bar:"#1f3d7a",size:92,h:640,foot:"please stop asking"}),1.05,.66,2,2,Ot-.012,{ry:Math.PI,rz:-.04})),r(Ul("SCIENCE FAIR","2nd PLACE: 'Volcano'",{bar:"#1d7a3a",size:74,foot:"judges were evacuated"}),.5,.25,.4,1.75,Ot-.006,{ry:Math.PI,rz:.05});let ft=new At(new Se(.075,.075,.5,24),new de({color:11735578,roughness:.35,metalness:.1}));ft.position.set(ae/2-.18,1.25,Ot-.6),ft.castShadow=!0,i.add(ft),a("Use BEFORE. Not after.","yellow",ae/2-.01,1.62,Ot-.6,-Math.PI/2,-.08);let vt=($,ct)=>{let P=new ge;s(n.metal,1.3,.05,.17,.62,0,0,{parent:P,cast:!1});let Pt=new de({color:15921902,emissive:16054015,emissiveIntensity:.05,roughness:.3});for(let gt of[-.045,.045]){let A=new At(new Se(.016,.016,1.22,12),Pt);A.rotation.z=Math.PI/2,A.position.set(.62,-.04,gt),P.add(A)}return P.position.set($-.62,Ye-.72,ct),i.add(P),{g:P,tubes:Pt}},zt=($,ct,P)=>{let Pt=new At(new Se(.003,.003,P),n.dark);Pt.position.set($,Ye-P/2,ct),i.add(Pt)};for(let[$,ct]of[[-1.8,-1.6],[1.8,-1.6],[-1.8,1.6]])vt($,ct),zt($-.55,ct,.72),zt($+.55,ct,.72);let Vt=vt(1.8,1.6);return zt(1.8-.55,1.6,.72),Vt.g.position.x=1.8-.55,Vt.g.children.forEach($=>{$.position.x-=.07}),Vt.g.rotation.z=-.62,r(xh(),1.8,1.8,2.3,Ye-.004,1.5,{rx:Math.PI/2,rz:1.1}),D_(i),{M:n,seats:H,desks:J,chairs:lt,glass:c,board:f,status:M,statusCanvas:g,scrolls:p,flip:S,card:I,hands:L,plunger:_,handle:N,eyes:It,lair:St,crooked:Vt,hat:Q,ext:ft,notAHole:pt}}function D_(i){let t=new Map;for(let e of i.children.filter(n=>n.userData.bake))e.updateMatrixWorld(),t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(e.geometry.applyMatrix4(e.matrixWorld)),i.remove(e);for(let[e,n]of t){let s=new At(Il(n),e);s.castShadow=s.receiveShadow=!0,i.add(s)}}function $d(i){let t=`
        uniform vec3 sun; uniform vec4 bays[4]; uniform float time; uniform float haze;
        float inBeam(vec3 p) {
            float t = (${(-ae/2).toFixed(2)} - p.x) / sun.x;   // walk back along the light to the window plane
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
        }`,e={sun:{value:Fl},bays:{value:fs.map(([d,u])=>new Ie(d,ln,u,vn))},time:{value:0},haze:{value:1}},n=[],s=Fl.clone().negate();for(let[d,u]of fs)for(let f=0;f<7;f++){let g=d+(u-d)*(f+.5)/7,M=vn/-s.y+.5,m=(S,I)=>new C(-ae/2,S,g).addScaledVector(s,I),p=[m(ln-.1,0),m(vn+.1,0),m(vn+.1,M),m(ln-.1,M)];[0,1,2,0,2,3].forEach(S=>n.push(...p[S].toArray()))}let r=new we;r.setAttribute("position",new re(n,3));let a=new At(r,new Je({uniforms:e,transparent:!0,depthWrite:!1,blending:Un,side:Dn,vertexShader:"varying vec3 vP; void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`${t} varying vec3 vP;
            void main() {
                float near = smoothstep(.3, 1.2, distance(vP, cameraPosition));
                float m = inBeam(vP) * near * step(0., vP.y);
                gl_FragColor = vec4(vec3(1., .86, .62) * m * .035 * haze, 1.);
            }`}));a.frustumCulled=!1,i.add(a);let o=2600,l=new Float32Array(o*3);for(let d=0;d<o;d++)l.set([(Math.random()-.5)*ae*.95,Math.random()*Ye*.9,(Math.random()-.5)*Ee*.95],d*3);let c=new we;c.setAttribute("position",new re(l,3));let h=new xi(c,new Je({uniforms:e,transparent:!0,depthWrite:!1,blending:Un,vertexShader:`${t} varying float vB;
            void main() {
                vec3 p = position + vec3(sin(time * .11 + position.y * 3.), sin(time * .07 + position.x * 2.) * .5 - .2, cos(time * .09 + position.z * 3.)) * .25;
                p.y = mod(p.y, ${Ye.toFixed(1)});
                vB = .06 / haze + inBeam(p) * (.6 + .4 * haze);   // in a thick haze the shadows go dark and the beams go solid
                vec4 mv = modelViewMatrix * vec4(p, 1.);
                gl_PointSize = clamp(5. / -mv.z, 1., 6.);
                gl_Position = projectionMatrix * mv;
            }`,fragmentShader:"varying float vB; void main() { float d = length(gl_PointCoord - .5); gl_FragColor = vec4(vec3(1., .9, .7) * vB * smoothstep(.5, 0., d) * .5, 1.); }"}));return h.frustumCulled=!1,i.add(h),e}var In=(i,t=.5,e={})=>new de({color:i,roughness:t,...e}),ua=i=>(i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i),_h=(i,t,e=24)=>new At(new Di(i.map(([n,s])=>new _t(n,s)),e),t);function Jd(){let i=new ge;i.add(_h([[0,0],[.05,0],[.065,.12],[.075,.13],[.072,.14],[0,.14]],In(11884079,.85)));let t=new At(new Se(.062,.062,.01,16),In(3810324,1));t.position.y=.13,i.add(t);let e=In(4160051,.6);for(let n=0;n<6;n++){let s=new At(new rs(.018,.16,5),e);s.position.set(Math.cos(n)*.02,.2,Math.sin(n)*.02),s.rotation.set(Math.sin(n*2.3)*.6,0,Math.cos(n*1.7)*.6),i.add(s)}return i.userData.leaves=i.children.slice(2),ua(i)}function yh(i=2838426){let t=new ge,e=Object.assign(document.createElement("canvas"),{width:256,height:128}),n=e.getContext("2d");n.fillStyle="#f4f1ea",n.fillRect(0,0,256,128),n.strokeStyle=`#${i.toString(16).padStart(6,"0")}`,n.lineWidth=5;for(let s=0;s<8;s++)n.beginPath(),n.arc(s*32+16,64,12,0,7),n.stroke();return n.fillStyle=n.strokeStyle,n.fillRect(0,14,256,6),n.fillRect(0,108,256,6),t.add(_h([[0,0],[.045,0],[.07,.07],[.065,.14],[.03,.2],[.032,.24],[0,.24]],In(16777215,.2,{map:new En(e)}))),ua(t)}function Kd(){let i=new ge,t=In(16249834,.25),e=In(13117484,.35),n=In(14856764,.25,{metalness:.8}),s=new At(new _n(.075,20,14),t);s.scale.set(1,1.15,.85),s.position.y=.085,i.add(s);let r=new ge;r.position.y=.2,i.add(r),r.add(new At(new _n(.065,20,14),t));for(let d of[-1,1]){let u=new At(new rs(.022,.04,8),t);u.position.set(d*.038,.055,0),u.rotation.z=-d*.35,r.add(u);let f=new At(new _n(.008,8,6),In(1118481,.3));f.position.set(d*.024,.008,.058),f.scale.y=.4,r.add(f)}let a=new At(new qs(.045,.008,8,20),e);a.rotation.x=Math.PI/2,a.position.y=.155,i.add(a);let o=new At(new _n(.012,10,8),n);o.position.set(0,.14,.045),i.add(o);let l=new ge;l.position.set(.055,.17,.02),i.add(l);let c=new At(new Se(.016,.018,.08,10),t);c.position.y=.04,l.add(c);let h=new At(new Se(.03,.03,.008,16),n);return h.rotation.x=Math.PI/2,h.position.set(-.04,.07,.05),i.add(h),i.userData={head:r,paw:l},ua(i)}function jd(){let i=new ge,t=In(15262420,.9),e=In(2762274,.6),n=new At(new Se(.09,.1,.06,16),t);n.position.y=.03,i.add(n);let s=new At(new _n(.13,20,12,0,Math.PI*2,0,Math.PI/2),t);s.scale.set(1,.6,.6),s.position.y=.06,i.add(s);let r=new ge;r.position.y=.21,i.add(r);let a=new At(new _n(.075,20,14),t);a.scale.set(.9,1.1,.95),r.add(a);let o=new At(new rs(.014,.04,8),t);o.rotation.x=Math.PI/2,o.position.set(0,0,.075),r.add(o);let l=new At(new Se(.008,.008,.07,8),e);l.rotation.z=Math.PI/2,l.position.set(0,-.025,.07),r.add(l);for(let c of[-1,1]){let h=new At(new qs(.018,.003,6,16),e);h.position.set(c*.027,.018,.072),r.add(h)}return i.userData={head:r},ua(i)}function Qd(){let i=new ge;i.add(_h([[0,0],[.2,0],[.16,.05],[.08,.2],[.05,.24],[.035,.22],[0,.2]],In(9071445,.95)));let t=new At(new Se(.04,.03,.01,12),In(16734751,.6,{emissive:16726528,emissiveIntensity:.6}));t.position.y=.228,i.add(t);for(let e=0;e<5;e++){let n=new At(new Se(.008,.012,.1,6),In(14239772,.7)),s=e*1.3;n.position.set(Math.cos(s)*.075,.17,Math.sin(s)*.075),n.rotation.set(Math.sin(s)*.5,0,-Math.cos(s)*.5),i.add(n)}return ua(i)}function tf(){let i=Object.assign(document.createElement("canvas"),{width:512,height:512}),t=i.getContext("2d");t.beginPath();for(let l=0;l<=40;l++){let c=l/40*Math.PI*2,h=170+Math.sin(l*3.7)*30+Math.random()*40;t.lineTo(256+Math.cos(c)*h,256+Math.sin(c)*h*.85)}let e=t.createRadialGradient(256,256,0,256,256,230);e.addColorStop(0,"#fffdf3"),e.addColorStop(.7,"#f4f1dc"),e.addColorStop(1,"#c9b48d"),t.fillStyle=e,t.fill(),t.lineWidth=18,t.strokeStyle="#6b5a45",t.stroke();let n=new ge;n.add(new At(new Ve(1.2,1.2),new an({map:new En(i),transparent:!0,toneMapped:!1})));let s=Object.assign(document.createElement("canvas"),{width:128,height:128}),r=s.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,235,190,.9)"),a.addColorStop(1,"rgba(255,235,190,0)"),r.fillStyle=a,r.fillRect(0,0,128,128);let o=new At(new Ve(3.4,3.4),new an({map:new En(s),transparent:!0,depthWrite:!1,blending:Un,toneMapped:!1}));return o.position.z=.02,n.add(o),n.userData={halo:o},n}function ef(){let i=Object.assign(document.createElement("canvas"),{width:256,height:256}),t=i.getContext("2d"),e=t.createRadialGradient(128,128,10,128,128,110);e.addColorStop(0,"rgba(60,50,40,.85)"),e.addColorStop(.45,"rgba(120,110,95,.55)"),e.addColorStop(.62,"rgba(250,246,236,.7)"),e.addColorStop(1,"rgba(250,246,236,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),t.strokeStyle="rgba(50,42,34,.8)",t.lineCap="round";for(let n=0;n<9;n++){let s=128,r=128,a=Math.random()*7,o=4;t.beginPath(),t.moveTo(s,r);for(let l=0;l<6;l++)a+=Math.random()-.5,s+=Math.cos(a)*18,r+=Math.sin(a)*18,t.lineWidth=o*=.8,t.lineTo(s,r);t.stroke()}return new En(i)}function nf(){let i=Object.assign(document.createElement("canvas"),{width:64,height:64}),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.4)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new En(i)}var vh=(i,t)=>{let e=Object.assign(document.createElement("canvas"),{width:i,height:t});return[e,e.getContext("2d")]},Mh=(i,t=!0)=>{let e=new En(i);return e.anisotropy=8,t&&(e.colorSpace=Qe),e};function sf(i,t,e,n=0){let s=new Di(i.map(([c,h])=>new _t(c,-h)),14),r=s.attributes.position,a=Math.abs(i.at(-1)[1]-i[0][1]);for(let c=0;c<r.count;c++){let h=(r.getY(c)+i[0][1])/a;r.setX(c,r.getX(c)+Math.sin(h*Math.PI)*n)}s.rotateX(-Math.PI/2),s.computeVertexNormals();let o=ci({planks:1,base:t,seed:e,rings:70,seams:!1,size:256});o.repeat.set(.15,a);let l=new At(s,new de({map:o,roughness:.48,envMapIntensity:.6}));return l.castShadow=!0,l}function rf(i,t){let[e,n]=vh(512,512),[s,r]=vh(512,512),[a,o,l,c]=i;t(n,r,(f,g)=>[(f-a)/(l-a)*512,(1-(g-o)/(c-o))*512],512/(l-a));let d=Mh(e),u=Mh(s,!1);for(let f of[d,u])f.wrapS=f.wrapT=Li,f.repeat.set(1/(l-a),1/(c-o)),f.offset.set(-a/(l-a),-o/(c-o));return new de({map:d,roughnessMap:u,metalnessMap:u,roughness:1,metalness:1,envMapIntensity:1.1})}function F_(i,t,e,n=[44,44,46]){i.fillStyle=`rgb(${n})`,i.fillRect(0,0,t,e);for(let s=0;s<900;s++){let r=Math.random()*30-15;i.fillStyle=`rgba(${n.map(a=>a+r)},.5)`,i.beginPath(),i.arc(Math.random()*t,Math.random()*e,2+Math.random()*10,0,7),i.fill()}}function af(){let i=new ge;i.add(sf([[0,.085],[.017,.085],[.021,.07],[.016,.03],[.015,-.2],[.0145,-.44],[.016,-.54],[.014,-.545],[0,-.545]],[214,166,108],21,.012));let t=new Ws;t.moveTo(-.032,-.036),t.lineTo(.032,-.036),t.lineTo(.03,.02),t.quadraticCurveTo(.036,.07,.072,.118),t.quadraticCurveTo(.002,.162,-.078,.122),t.quadraticCurveTo(-.046,.07,-.03,.02),t.lineTo(-.032,-.036);let e=.026,n=new Vr(t,{depth:e,bevelEnabled:!0,bevelThickness:.003,bevelSize:.0025,bevelSegments:2,curveSegments:18});n.translate(0,0,-e/2);let s=n.attributes.position;for(let l=0;l<s.count;l++){let c=s.getY(l),h=Math.min(1,Math.max(0,(c-.02)/.13));s.setZ(l,s.getZ(l)*(1-.9*h*h*(3-2*h)))}n.applyMatrix4(new ce().makeBasis(new C(0,0,-1),new C(0,-1,0),new C(-1,0,0))),n.computeVertexNormals();let r=rf([-.1,-.06,.1,.18],(l,c,h,d)=>{l.fillStyle="#7a1610",l.fillRect(0,0,512,512);for(let m=0;m<300;m++)l.fillStyle=`rgba(40,8,5,${Math.random()*.25})`,l.beginPath(),l.arc(Math.random()*512,Math.random()*512,Math.random()*6,0,7),l.fill();c.fillStyle="rgb(0,110,0)",c.fillRect(0,0,512,512);let[,u]=h(0,.088),f=(m,p)=>{m.fillStyle=p,m.beginPath(),m.moveTo(0,u);for(let S=0;S<=512;S+=16)m.lineTo(S,u+Math.sin(S*.05)*6+Math.random()*3);m.lineTo(512,0),m.lineTo(0,0),m.fill()};f(l,"#c9ccd0"),f(c,"rgb(0,60,255)");for(let m=0;m<140;m++){let p=Math.random()*512,S=u-10-Math.random()*200;l.strokeStyle=`rgba(255,255,255,${Math.random()*.35})`,l.lineWidth=1,l.beginPath(),l.moveTo(p,S),l.lineTo(p+30+Math.random()*40,S+4),l.stroke()}let[g,M]=h(0,.035);l.strokeStyle="rgba(30,8,6,.8)",l.lineWidth=.002*d,l.beginPath(),l.arc(g,M,.009*d,0,7),l.stroke(),l.beginPath(),l.moveTo(g-.005*d,M),l.lineTo(g+.005*d,M),l.moveTo(g,M-.005*d),l.lineTo(g,M+.005*d),l.stroke(),l.strokeStyle="rgba(20,6,4,.5)",l.lineWidth=3;for(let m=0;m<12;m++){let[p,S]=h((Math.random()-.5)*.06,-.03+Math.random()*.01);l.beginPath(),l.arc(p,S,2+Math.random()*5,0,7),l.fillStyle="#5a5a5c",l.fill()}}),a=new At(n,r);a.position.z=-.5,a.castShadow=!0,i.add(a);let o=new At(new Se(.0015,.0015,.03,4),new de({color:3815994,metalness:.9,roughness:.4}));return o.rotation.x=Math.PI/2,o.position.set(0,.0385,-.5),i.add(o),i.userData={tip:new C(0,-.13,-.5),band:lf(i,.0175,-.075)},i}function of(){let i=new ge;i.add(sf([[0,.07],[.018,.07],[.021,.055],[.018,0],[.016,-.25],[.0155,-.375],[0,-.375]],[226,190,140],22));let t=.034,e=.18,n=rf([-.12,-.12,.12,.12],(c,h)=>{F_(c,512,512,[86,88,92]),h.fillStyle="rgb(0,120,230)",h.fillRect(0,0,512,512);for(let d=0;d<260;d++)h.fillStyle=`rgba(0,${80+Math.random()*100},230,.6)`,h.beginPath(),h.arc(Math.random()*512,Math.random()*512,3+Math.random()*12,0,7),h.fill()}),s=new At(new Di([[0,-e/2],[t*.82,-e/2],[t,-e/2+.008],[t*.97,0],[t,e/2-.008],[t*.82,e/2],[0,e/2]].map(([c,h])=>new _t(c,h)),8),n);s.position.z=-.355,s.castShadow=!0,i.add(s);let r=new de({color:14277855,metalness:1,roughness:.16});for(let c of[-e/2-5e-4,e/2+5e-4]){let h=new At(new Se(t*.8,t*.8,.001,8),r);h.position.set(0,c,-.355),i.add(h)}let a=new de({color:1315860,metalness:.6,roughness:.6});for(let c of[-e/2+.024,e/2-.024]){let h=new At(new Se(t*1.004,t*1.004,.003,8,1,!0),a);h.position.set(0,c,-.355),i.add(h)}let o=new de({color:12567495,metalness:1,roughness:.25});for(let c of[-e/2+.004,e/2-.004]){let h=new At(new Se(t*.93,t*.93,.0075,8,1,!0),o);h.position.set(0,c,-.355),i.add(h)}let l=new At(new Se(.0205,.0205,.012,14,1,!0),new de({color:11570519,metalness:.9,roughness:.35}));return l.rotation.x=Math.PI/2,l.position.z=-.318,i.add(l),i.userData={tip:new C(0,-e/2-.005,-.355),band:lf(i,.0185,-.07)},i}function lf(i,t,e){let[n,s]=vh(512,96),r=Mh(n),a=new At(new Se(t,t,.04,20,1,!0),new de({map:r,roughness:.85}));return a.rotation.x=Math.PI/2,a.position.z=e,i.add(a),(o,l)=>{s.fillStyle=l?"#f2c418":"#e6dcc0",s.fillRect(0,0,512,96),s.fillStyle="rgba(120,100,60,.25)",s.fillRect(0,0,512,6),s.fillRect(0,90,512,6),s.fillStyle=l?"#b3121a":"#1d2433",s.font=`72px ${Pe.marker}`,s.textAlign="center";for(let c of[128,384])s.fillText(o,c,76);r.needsUpdate=!0}}var O_=90,cf=0,B_={axe:{wood:1,drywall:1,glass:.45,ceramic:.45,plaster:.5,metal:.15,slate:.1},hammer:{wood:.5,drywall:.6,glass:1,ceramic:1,plaster:1,metal:.15,slate:.1}},z_=["wood","glass","ceramic","plaster","drywall","metal"],hf={glass:"GLASS PREFERS A HAMMER. SO DO I.",ceramic:"POTTERY WANTS THE HAMMER.",plaster:"PLASTER WANTS THE HAMMER. TRUST ME.",wood:"WOOD WANTS THE AXE.",drywall:"DRYWALL WANTS THE AXE."},k_={desk:["THAT DESK WAS NEW.","IT WAS REPLACED 14 TIMES. NOW 15.","SPLINTERS. EVERYWHERE."],chair:["SIT DOWN. OH.","THAT CHAIR HAD A FAMILY."],window:["THAT WINDOW HAS NOW BEEN TESTED. FROM BOTH SIDES.","FRESH AIR!","VENTILATION: IMPROVED."],pot:["THE PLANT IS FINE. THE PLANT IS NOT FINE.","IT WAS A CACTUS. EMOTIONALLY."],vase:["A VASE. FROM A TRIP. NOBODY REMEMBERS THE TRIP.","MING DYNASTY. (IT WAS NOT.)"],cat:["THERE GOES OUR LUCK."],bust:["THE PRINCIPAL WILL HEAR ABOUT THIS. HE IS IN PIECES."],volcano:["STILL 2ND PLACE."],drywall:["OK. IT WAS A HOLE."],ext:["USE BEFORE. NOT AFTER."]},uf={wall:"WALLS HOLD UP THE CEILING. REMEMBER?",board:"NO.",hat:"IT IS A HELMET. THAT IS THE PROBLEM."},df=["NO.","STILL NO.","I AM SLATE. YOU ARE NOT.","THE BOARD IS NOT PART OF THE LESSON.","DETENTION."];function ff({scene:i,renderer:t,rig:e,camera:n,room:s,audio:r,say:a,flip:o}){let l=[{name:"axe",mesh:af()},{name:"hammer",mesh:of()}],c=[0,1].map(T=>t.xr.getControllerGrip(T)),h=[0,1].map(()=>{let T=new ge;return T.matrixAutoUpdate=!1,T.visible=!1,e.add(T),T}),d=new ce,u=new C,f=new C,g=new C,M=new C,m=new C,p=new C,S=new C;function I(T,k,K,R){let Mt=T.hand?.get("middle-finger-metacarpal"),xt=Mt&&k.getJointPose?.(Mt,K);return xt?(d.fromArray(xt.transform.matrix).extractBasis(u,f,g),M.setFromMatrixPosition(d).addScaledVector(f,-.03).addScaledVector(g,-.02),m.copy(u).multiplyScalar(T.handedness==="left"?1:-1).addScaledVector(g,-.25).normalize(),p.copy(g).negate().addScaledVector(m,-g.clone().negate().dot(m)).normalize(),S.crossVectors(p,m),R.makeBasis(S,p.negate(),m.negate()).setPosition(M),!0):!1}function v(){let T=t.xr.getSession(),k=t.xr.getFrame(),K=t.xr.getReferenceSpace();h.forEach((R,Mt)=>{let xt=T?.inputSources[Mt],Ft=c[Mt].visible;if(Ft)R.matrix.copy(c[Mt].matrix);else if(xt&&k&&K){Ft=I(xt,k,K,R.matrix);let Jt=!Ft&&xt.gripSpace?k.getPose(xt.gripSpace,K):null;Jt&&(R.matrix.fromArray(Jt.transform.matrix),Ft=!0)}R.visible=Ft,R.matrixWorldNeedsUpdate=!0})}let w={min:.6,max:6,push:1.1,top:1.4,damping:.965},b={v:new C,last:[null,null],hand:new C,look:new C,head:new C};function L(T){let k=_.hand===null?-1:1-_.hand;n.getWorldDirection(b.look).setY(0).normalize(),h.forEach((Mt,xt)=>{if(!Mt.visible){b.last[xt]=null;return}if(b.hand.setFromMatrixPosition(Mt.matrix),b.last[xt]&&T>0&&xt===k&&!l.some(Ft=>Ft.lodged&&Ft.hand===xt)){let Ft=b.hand.distanceTo(b.last[xt])/T;Ft>w.min&&b.v.addScaledVector(b.look,Math.min(Ft,w.max)*w.push*T)}(b.last[xt]??=new C).copy(b.hand)}),b.v.length()>w.top&&b.v.setLength(w.top),b.v.multiplyScalar(Math.pow(w.damping,T*60)),e.position.addScaledVector(b.v,T),n.getWorldPosition(b.head);let K=b.head.x-e.position.x,R=b.head.z-e.position.z;e.position.x=Math.min(4.5-.35,Math.max(-4.5+.35,e.position.x+K))-K,e.position.z=Math.min(4.8-.35,Math.max(-4.8+.9,e.position.z+R))-R,Y.speed=b.v.length()}for(let T of l)T.prev=null,T.vel=new C,T.mesh.visible=!1,T.mesh.traverse(k=>{k.material?.metalness>0&&(k.material.envMap=i.environment,k.material.envMapIntensity=.9)});let _={tool:0,hand:null},E=()=>Math.max(0,[...t.xr.getSession()?.inputSources??[]].findIndex(T=>T.handedness==="right"));function N(T,k=_.hand??E()){if(l.some(R=>R.lodged))return;for(let R of l)R.mesh.removeFromParent();let K=l[T];K.grip=h[k],K.hand=k,K.grip.add(K.mesh),K.mesh.position.set(0,0,0),K.mesh.quaternion.identity(),K.mesh.rotation.x=cf,K.prev=null,K.vel.set(0,0,0),K.follow=null,K.settle=performance.now()/1e3+.3,_.tool=T,_.hand=k,Y.phase!=="intro"&&(ht.swap(),bt(k,.4,30),Yt(.25,R=>K.mesh.scale.setScalar(.5+.5*R+Math.sin(R*Math.PI)*.12)))}let U=T=>{Y.phase!=="intro"&&N(1-_.tool,T)};[0,1].forEach(T=>{let k=t.xr.getController(T);k.addEventListener("select",()=>U(T)),k.addEventListener("squeezestart",()=>U(T))});let B=()=>l[_.tool],W=4.8,F=1.2125,H=(T,k,K,R,Mt=0)=>(T.position.set(k,K,R),T.rotation.y=Mt,i.add(T),T),j=[...[-2.1,0,2.1].map(T=>({kind:"pot",material:"ceramic",hp:.35,object:H(Jd(),-4.42,.945,T),half:[.09,.14,.09],up:.12,value:350,colors:[11884079,10110502,3810324]})),{kind:"vase",material:"ceramic",hp:.3,object:H(yh(),-3,F,W-.2),half:[.09,.14,.09],up:.12,value:400,colors:[16052714,2838426]},{kind:"vase",material:"ceramic",hp:.3,object:H(yh(10103595),3.15,F,W-.2),half:[.09,.14,.09],up:.12,value:400,colors:[16052714,10103595]},{kind:"cat",material:"ceramic",hp:.3,object:H(Kd(),1.2,F,W-.22,Math.PI),half:[.1,.15,.1],up:.14,value:900,colors:[16249834,13117484,14856764]},{kind:"bust",material:"plaster",hp:.9,object:H(jd(),-.9,F,W-.2,Math.PI),half:[.14,.17,.12],up:.16,value:1200,colors:[15262420,14012095]},{kind:"volcano",material:"plaster",hp:.7,object:H(Qd(),.4,F,W-.22),half:[.2,.13,.2],up:.12,value:800,colors:[9071445,14239772]}],J=[],lt=new ce,tt=new ce().makeScale(0,0,0);for(let T of j)J.push({...T,center:T.object.position.clone().setY(T.object.position.y+T.up),half:new C(...T.half)});J.push({kind:"drywall",material:"drywall",hp:1.1,center:new C(2,2,W-.06),half:new C(.55,.36,.12),value:1500,colors:[15921128,14275524,2047354]}),s.glass.forEach(T=>J.push({kind:"window",material:"glass",hp:.2,pane:T,center:T.position.clone().setX(T.position.x+.1),half:new C(.25,.95,.85),value:600,colors:[14676991]})),s.seats.forEach((T,k)=>J.push({kind:"desk",material:"wood",hp:1.4,mesh:s.desks,index:k,center:new C(T.x,.55,T.z),half:new C(.62,.25,.26),value:400,colors:[10119742,8410415]}));for(let T=0;T<s.chairs.count;T++){s.chairs.getMatrixAt(T,lt);let k=new C().setFromMatrixPosition(lt);J.push({kind:"chair",material:"wood",hp:.7,mesh:s.chairs,index:T,center:new C(k.x,.45,k.z),half:new C(.22,.45,.22),value:150,colors:[8345138,7030055]})}J.push({kind:"ext",material:"metal",hp:.25,center:s.ext.position.clone(),half:new C(.11,.28,.11),value:700,colors:[11735578]}),J.push({kind:"hat",material:"metal",hp:1/0,center:s.hat.position.clone().setY(s.hat.position.y+.06),half:new C(.17,.12,.17)}),J.push({kind:"board",material:"slate",hp:1/0,center:new C(0,1.55,-4.74),half:new C(2.05,.68,.12)});for(let[T,k,K,R]of[[0,W,4.5,-1],[-3.35,-W,1.15,1],[3.35,-W,1.15,1]])J.push({kind:"wall",material:"plaster",hp:1/0,center:new C(T,2.25,k),half:new C(K,1.05,.14),normal:new C(0,0,R)});for(let T of J)T.max=T.hp,T.mesh&&(T.mesh.getMatrixAt(T.index,lt),T.matrix=lt.clone());let st=H(tf(),2,2,W-.008,Math.PI);st.visible=!1;let rt=new At(new Ve(2.6,3.4),st.userData.halo.material.clone());rt.material.opacity=0,rt.material.color.set(16756848),rt.rotation.x=-Math.PI/2,rt.position.set(2,.008,W-1.7),i.add(rt);let Dt=s.notAHole[2].position.clone(),Nt=s.notAHole[2].rotation.clone(),fe=s.ext.rotation.clone(),ie=s.hat.position.clone(),ee=600,et=(T,k={})=>new de({color:16777215,roughness:T,...k}),at={wood:$t(new pn(1,1,1),et(.65)),glass:$t(new pn(1,1,1),et(.04,{metalness:.9,transparent:!0,opacity:.75})),shard:$t(new pn(1,1,1),et(.3)),lump:$t(new Gr(.5,0),et(.95,{flatShading:!0}))},St={wood:"wood",glass:"glass",ceramic:"shard",drywall:"shard",plaster:"lump",metal:"shard"};function $t(T,k){let K=new Xn(T,k,ee);K.castShadow=!0,K.frustumCulled=!1;for(let R=0;R<ee;R++)K.setMatrixAt(R,tt),K.setColorAt(R,new te(16777215));return i.add(K),{mesh:K,next:0,parts:Array.from({length:ee},()=>({alive:!1,p:new C,v:new C,q:new Be,w:new C,s:new C}))}}let It=new Be,Ot=new Ue,he=new te,Q=()=>Math.random()-.5;function ut(T,k,K,R,Mt,xt,Ft=[16777215],Jt=xt?.4:.06){let Qt=St[T],y=at[Qt];for(let D=0;D<R;D++){let q=y.next,z=y.parts[q];y.next=(y.next+1)%ee,z.alive=!0,z.rest=0,z.material=T,z.p.copy(k).add(new C(Q(),Q(),Q()).multiplyScalar(Jt)),z.v.copy(K).multiplyScalar(Mt*(.4+Math.random())).add(new C(Q()*2,Math.random()*2,Q()*2).multiplyScalar(.5+Mt*.35)),z.w.set(Q(),Q(),Q()).multiplyScalar(T==="plaster"?10:22),z.q.random();let G=Math.random();T==="wood"?z.s.set(.015+G*(xt?.45:.025),.015+Math.random()*.02,xt?.05+Math.random()*.12:.08+Math.random()*.1):T==="glass"?z.s.set(.03+G*.13,.003,.03+Math.random()*.16):T==="ceramic"?z.s.set(.015+G*.05,.006,.015+Math.random()*.05):T==="drywall"?z.s.set(.04+G*(xt?.2:.06),.013,.04+Math.random()*(xt?.18:.05)):T==="plaster"?z.s.setScalar(.015+G*G*(xt?.11:.04)):z.s.set(.01,.01,.01),y.mesh.setColorAt(q,he.set(Ft[D%Ft.length]).offsetHSL(0,0,Q()*.08))}y.mesh.instanceColor.needsUpdate=!0}function pt(T,k){let K=new we,R=new Float32Array(T*3),Mt=new Float32Array(T*3),xt=new Float32Array(T),Ft=new Float32Array(T);K.setAttribute("position",new re(R,3)),K.setAttribute("color",new re(Mt,3)),K.setAttribute("alpha",new re(xt,1)),K.setAttribute("size",new re(Ft,1));let Jt=new xi(K,new Je({uniforms:{map:{value:nf()},scale:{value:900}},transparent:!0,depthWrite:!1,blending:k,vertexColors:!0,vertexShader:"attribute float alpha; attribute float size; uniform float scale; varying float vA; varying vec3 vC; void main() { vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying float vA; varying vec3 vC; void main() { gl_FragColor = vec4(vC, vA * texture2D(map, gl_PointCoord).a); }"}));return Jt.frustumCulled=!1,i.add(Jt),{g:K,pos:R,col:Mt,a:xt,size:Ft,n:T,next:0,vel:new Float32Array(T*3),life:new Float32Array(T),max:new Float32Array(T),grow:new Float32Array(T),peak:new Float32Array(T),drag:new Float32Array(T)}}let ft=pt(900,zi),vt=pt(300,Un);function zt(T,k,K,{color:R=14209732,spread:Mt=.1,speed:xt=.4,size:Ft=.12,life:Jt=2.5,up:Qt=.2,grow:y=.5,alpha:D=.45,dir:q=null,drag:z=1.6}){for(let G=0;G<K;G++){let yt=T.next;T.next=(T.next+1)%T.n,T.pos.set([k.x+Q()*Mt,k.y+Q()*Mt,k.z+Q()*Mt],yt*3);let Ut=new C(Q(),Q()+Qt,Q()).normalize().multiplyScalar(xt*(.3+Math.random()));q&&Ut.addScaledVector(q,xt*(.5+Math.random())),T.vel.set(Ut.toArray(),yt*3),T.col.set(he.set(R).offsetHSL(0,0,Q()*.06).toArray(),yt*3),T.life[yt]=T.max[yt]=Jt*(.6+Math.random()*.6),T.size[yt]=Ft*(.5+Math.random()),T.grow[yt]=y,T.peak[yt]=D,T.drag[yt]=z}}function Vt(T,k,K){for(let R=0;R<T.n;R++){if(T.life[R]<=0){T.a[R]=0;continue}T.life[R]-=k;let Mt=R*3,xt=T.life[R]/T.max[R],Ft=Math.exp(-k*T.drag[R]);T.vel[Mt]*=Ft,T.vel[Mt+2]*=Ft,T.vel[Mt+1]=T.vel[Mt+1]*Ft-K*k,T.pos[Mt]+=T.vel[Mt]*k,T.pos[Mt+1]=Math.max(.02,T.pos[Mt+1]+T.vel[Mt+1]*k),T.pos[Mt+2]+=T.vel[Mt+2]*k,T.size[R]*=1+T.grow[R]*k,T.a[R]=T.peak[R]*Math.min(1,(1-xt)*8)*xt}for(let R of["position","color","alpha","size"])T.g.attributes[R].needsUpdate=!0}let $=new de({map:ef(),transparent:!0,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),ct=Array.from({length:40},()=>{let T=new At(new Ve(1,1),$);return T.visible=!1,T.receiveShadow=!0,i.add(T),T}),P=0;function Pt(T,k,K){let R=ct[P++%ct.length];R.visible=!0,R.position.copy(T).setZ(k.z>0?-W+.006:W-.006),R.rotation.set(0,k.z>0?0:Math.PI,Math.random()*6),R.scale.setScalar(.12+K*.22)}let gt=()=>r()?.ctx,A=null,x=null,V=T=>(x||(x=new DynamicsCompressorNode(T,{threshold:-14,knee:8,ratio:6,attack:.003,release:.2}),x.connect(T.destination)),x);function X(T,{dur:k,type:K,freq:R,to:Mt=R,gain:xt,q:Ft=1,delay:Jt=0}){if(!A){A=T.createBuffer(1,T.sampleRate,T.sampleRate);let z=A.getChannelData(0);for(let G=0;G<z.length;G++)z[G]=Math.random()*2-1}let Qt=T.currentTime+Jt,y=new AudioBufferSourceNode(T,{buffer:A,loop:!0}),D=new BiquadFilterNode(T,{type:K,frequency:R,Q:Ft}),q=new GainNode(T,{gain:xt});D.frequency.exponentialRampToValueAtTime(Mt,Qt+k),q.gain.setValueAtTime(xt,Qt),q.gain.exponentialRampToValueAtTime(1e-4,Qt+k),y.connect(D).connect(q).connect(V(T)),y.start(Qt,Math.random()*.5),y.stop(Qt+k+.05)}function Z(T,k,K,R,Mt=0,xt="sine",Ft=k){let Jt=T.currentTime+Mt,Qt=new OscillatorNode(T,{type:xt,frequency:k}),y=new GainNode(T,{gain:R});Ft!==k&&Qt.frequency.exponentialRampToValueAtTime(Ft,Jt+K),y.gain.setValueAtTime(R,Jt),y.gain.exponentialRampToValueAtTime(1e-4,Jt+K),Qt.connect(y).connect(V(T)),Qt.start(Jt),Qt.stop(Jt+K+.05)}let ht={wood(T,k){let K=gt();if(K){Z(K,150+Math.random()*40,.18,.5*T);for(let R=0;R<(k?12:3);R++)X(K,{dur:.05,type:"bandpass",freq:700+Math.random()*1600,gain:.5*T,q:3,delay:Math.random()*(k?.3:.05)});k&&X(K,{dur:.6,type:"lowpass",freq:900,to:120,gain:.6})}},glass(T,k){let K=gt();if(K){X(K,{dur:k?.5:.12,type:"highpass",freq:4e3,gain:.5*T});for(let R=0;R<(k?12:3);R++)Z(K,2200+Math.random()*4800,.25+Math.random()*.5,.08,Math.random()*(k?.5:.05))}},ceramic(T,k){let K=gt();if(K&&(X(K,{dur:.08,type:"bandpass",freq:3200,gain:.55*T,q:2}),Z(K,1800+Math.random()*600,.12,.18*T,0,"triangle"),k))for(let R=0;R<16;R++)Z(K,3500+Math.random()*5e3,.06+Math.random()*.1,.06,Math.random()*.35)},plaster(T,k){let K=gt();if(K){Z(K,75,.25,.7*T,0,"sine",50),X(K,{dur:.3,type:"lowpass",freq:500,to:150,gain:.6*T});for(let R=0;R<(k?10:3);R++)X(K,{dur:.06,type:"lowpass",freq:900+Math.random()*600,gain:.2,delay:.05+Math.random()*(k?.7:.25)})}},drywall(T,k){let K=gt();if(K&&(Z(K,95,.2,.6*T,0,"sine",70),X(K,{dur:.14,type:"bandpass",freq:1500,to:900,gain:.6*T,q:1.5}),k)){X(K,{dur:1.2,type:"lowpass",freq:700,to:100,gain:.7});for(let R=0;R<8;R++)X(K,{dur:.08,type:"bandpass",freq:1200+Math.random()*800,gain:.3,delay:Math.random()*.5})}},metal(T){let k=gt();if(!k)return;let K=380+Math.random()*80;[1,2.76,5.4,8.93].forEach((R,Mt)=>Z(k,K*R,.9/(Mt+1),.22*T/(Mt+1))),X(k,{dur:.04,type:"highpass",freq:3e3,gain:.4*T})},slate(T){let k=gt();k&&(Z(k,110,.15,.6*T),X(k,{dur:.25,type:"lowpass",freq:400,gain:.3*T}))},bonk(){let T=gt();T&&(Z(T,700,.18,.35,0,"sine",180),Z(T,160,.6,.2,.05,"triangle",240))},squeak(){let T=gt();T&&Z(T,1300,.12,.08,0,"sine",2100)},powder(){let T=gt();T&&(X(T,{dur:2.6,type:"bandpass",freq:2500,to:1200,gain:.45,q:.8}),Z(T,90,.4,.4,0,"sine",40))},erupt(){let T=gt();if(T){for(let k=0;k<10;k++)Z(T,120+Math.random()*200,.15,.2,k*.08+Math.random()*.04,"sine",400);X(T,{dur:1.2,type:"lowpass",freq:600,gain:.3})}},lodge(){let T=gt();if(!T)return;Z(T,115,.35,.7),X(T,{dur:.12,type:"bandpass",freq:500,gain:.6,q:2});let k=T.currentTime,K=new OscillatorNode(T,{type:"sawtooth",frequency:105}),R=new OscillatorNode(T,{frequency:9}),Mt=new GainNode(T,{gain:12}),xt=new BiquadFilterNode(T,{type:"lowpass",frequency:700}),Ft=new GainNode(T,{gain:.16});Ft.gain.setValueAtTime(.16,k),Ft.gain.exponentialRampToValueAtTime(1e-4,k+.7),R.connect(Mt).connect(K.frequency),K.connect(xt).connect(Ft).connect(V(T)),K.start(k),R.start(k),K.stop(k+.75),R.stop(k+.75)},yank(){let T=gt();T&&(X(T,{dur:.22,type:"bandpass",freq:1400,to:380,gain:.5,q:4}),Z(T,260,.12,.4,.15))},glance(){let T=gt();T&&X(T,{dur:.18,type:"bandpass",freq:2600,to:1500,gain:.3,q:6})},tink(T){let k=gt();k&&Z(k,(T==="glass"?3e3:2200)+Math.random()*4e3,.1,.025)},swap(){let T=gt();T&&(X(T,{dur:.16,type:"bandpass",freq:800,to:2400,gain:.25,q:2}),Z(T,420,.08,.15,.12,"triangle"))},bell(T){let k=gt();k&&T.forEach((K,R)=>{Z(k,K,1.6,.25,R*.55),Z(k,K*2.76,.8,.05,R*.55)})}},mt=[329.6,261.6,293.7,196],it=(T,k)=>{for(let K of l)K.mesh.userData.band(T,k)};it("1:30");let nt=new At(new Ve(.42,.56),new an({transparent:!0,opacity:0,side:2,toneMapped:!1}));nt.visible=!1,i.add(nt);function Et(T,k,K){let R=Y.hits?Math.round(Y.right/Y.hits*100):0,Mt=T>3e4?"Your child has demolished the classroom, the corridor and, we suspect, the concept of school.":T>15e3?"Shows real promise. The school does not.":T>5e3?"Tries hard. Breaks things. Could break more things.":"Your child was gentle with the furniture. We are worried.";nt.material.map?.dispose(),nt.material.map=Dl("REPORT CARD: DEMOLITION",`Score: ${T}
Materials broken: ${k} of 6
Things destroyed: ${Y.broken}
Right tool for the job: ${R}%
Follow-through: ${Y.followThroughs} swings
Best combo: x${Y.bestCombo}

GRADE: ${K.split(".")[0]}

Teacher's comment: ${Mt}

Swing hard to stay after class (again).`),nt.material.needsUpdate=!0;let xt=n.getWorldPosition(new C),Ft=n.getWorldDirection(new C).setY(0).normalize();nt.position.copy(xt).addScaledVector(Ft,.75).setY(xt.y-.12),nt.lookAt(xt.x,nt.position.y,xt.z),nt.visible=!0;let Jt=nt.position.y;Yt(1.2,Qt=>{nt.material.opacity=Qt,nt.position.y=Jt-.15*(1-Qt)**2})}let Xt=()=>({bestCombo:0,slowUntil:0,dust:0,score:0,combo:0,lastBreak:-9,broken:0,materials:new Set,right:0,hits:0,lodges:0,followThroughs:0,wrong:{},said:new Set,boardHits:0,powderUntil:0}),Y={phase:"intro",endsAt:0,...Xt()},bt=(T,k,K)=>t.xr.getSession()?.inputSources[T]?.gamepad?.hapticActuators?.[0]?.pulse?.(k,K),kt=[],Yt=(T,k,K)=>kt.push({t:0,dur:T,run:k,done:K}),se=new C,O=new C,wt=new Be;function ot(T,k){let K=k.clone().sub(T.center),R=T.half,Mt=Math.abs(K.x)/R.x,xt=Math.abs(K.y)/R.y,Ft=Math.abs(K.z)/R.z;return Mt>xt&&Mt>Ft?O.set(Math.sign(K.x),0,0):xt>Ft?O.set(0,Math.sign(K.y),0):O.set(0,0,Math.sign(K.z))}function Tt(T,k,K,R,Mt,xt,Ft,Jt){if(Jt-(R.lastHit??-9)<.2)return!1;R.lastHit=Jt,T.mesh.getWorldQuaternion(wt);let Qt=se.set(0,-1,0).applyQuaternion(wt).dot(Ft),y=Math.max(0,-(R.normal??ot(R,T.entry??Mt)).dot(Ft)),D=T.name==="axe"?.25+.75*Math.max(0,Qt)**1.5:.6+.4*Math.abs(Qt),q=Math.min(1.3,(xt-.8)/5)*D*(.35+.65*y),z=R.material==="glass"||R.material==="ceramic";if(y<.3&&!z)return ht.glance(),bt(k,.2,25),Y.score+=5,!0;let G=B_[T.name][R.material];if(Y.hits++,G===1?Y.right++:G<.9&&hf[R.material]&&(Y.wrong[R.material]=(Y.wrong[R.material]??0)+1)>=3&&!Y.said.has(R.material)&&(Y.said.add(R.material),a(hf[R.material])),bt(k,Math.min(1,.3+q),20+q*60),R.hp===1/0)return Lt(T,k,R,Mt,Ft,q,Jt),!0;R.hp-=q*G,T.follow={target:R,at:Jt+.1,speed:xt,e:q,affinity:G,dir:Ft.clone(),point:Mt.clone()},T.name==="axe"&&(R.kind==="desk"||R.kind==="drywall")&&R.hp>0&&Qt>.55&&y>.5&&q>.2&&Gt(T,k,R,Mt,Ft,Jt);let yt=R.hp<=0;return ht[R.material](Math.max(.3,q),yt),ut(R.material,Mt,Ft,Math.round(4+q*14),xt*.35,!1,R.colors),(R.material==="plaster"||R.material==="drywall")&&zt(ft,Mt,6+q*14,{color:14999248,speed:.3+q*.6,size:.12,dir:Ft}),R.material==="metal"&&zt(vt,Mt,10+q*20,{color:16756816,speed:2+q*3,size:.012,life:.4,alpha:1,grow:0,drag:.5,dir:Ft}),R.mesh&&!yt&&(R.shove=Ft.clone().setY(0).multiplyScalar(.04*q)),R.object&&!yt&&(R.wobble=1),yt?(dt(T,R,Mt,Ft,xt,q,G,Jt),!0):(Y.score+=Math.round(10*q*(G===1?2:1)),!0)}function Lt(T,k,K,R,Mt,xt,Ft){if(uf[K.kind]&&!Y.said.has(K.kind)&&xt>.15&&(Y.said.add(K.kind),a(uf[K.kind])),K.kind==="wall")ht.plaster(Math.max(.3,xt),!1),xt>.12&&Pt(R,K.normal,xt),ut("plaster",R,K.normal.clone().multiplyScalar(-1).add(Mt).normalize(),Math.round(3+xt*10),1+xt*2,!1,[15262420,14012095]),zt(ft,R,8+xt*16,{color:15262420,speed:.3+xt*.5,size:.14,dir:K.normal}),Y.score+=Math.round(15*xt),Y.dust=Math.min(2.6,Y.dust+.05*xt),Y.materials.add("plaster");else if(K.kind==="board")ht.slate(Math.max(.3,xt)),zt(ft,R,14,{color:15921898,speed:.3,size:.08,dir:new C(0,0,1)}),a(df[Math.min(df.length-1,Y.boardHits++)]);else if(K.kind==="hat"){ht.bonk(),ht.metal(.4);let Jt=s.hat,Qt=ie.y;Yt(.6,y=>{Jt.position.y=Qt+Math.sin(y*Math.PI)*.25,Jt.rotation.y+=.4},()=>{Jt.position.copy(ie)}),Y.score+=50,Y.materials.add("metal")}}function dt(T,k,K,R,Mt,xt,Ft,Jt){k.mesh&&(k.mesh.setMatrixAt(k.index,tt),k.mesh.instanceMatrix.needsUpdate=!0),k.pane&&(k.pane.visible=!1),k.object&&(k.object.visible=!1),t.shadowMap.needsUpdate=!0;for(let z of l)z.lodged?.target===k&&ye(z,!1);let Qt={wood:14,glass:40,ceramic:45,plaster:30,drywall:26,metal:0}[k.material];if(ut(k.material,k.center,R,Qt,Mt*.5,!0,k.colors,k.kind==="desk"||k.kind==="window"?.45:.12),k.kind==="pot"&&ut("plaster",k.center,R,18,Mt*.3,!1,[3810324,4861978,4160051]),(k.material==="plaster"||k.material==="drywall")&&(zt(ft,k.center,70,{color:14999248,spread:.3,speed:.6,size:.22,life:4,dir:R}),Y.dust+=.4),k.kind==="volcano"){ht.erupt();for(let z=0;z<6;z++)setTimeout(()=>zt(ft,k.center.clone().setY(k.center.y+.1),12,{color:z%2?16738858:16770720,speed:1.6,up:3,size:.1,life:2,dir:new C(0,1,0)}),z*90)}if(k.kind==="drywall"&&Zt(),k.kind==="ext"){ht.powder(),Y.powderUntil=Jt+2.6;let z=s.ext;Yt(.5,G=>{z.rotation.z=fe.z+G*.5,z.rotation.x=fe.x-G*.2})}Y.combo=Jt-Y.lastBreak<2.5?Y.combo+1:1,Y.bestCombo=Math.max(Y.bestCombo,Y.combo),Y.lastBreak=Jt,Y.broken++,Y.materials.add(k.material),Y.dust=Math.min(2.6,Y.dust+(k.kind==="chair"?.12:.3));let y=Math.round(k.value*(Ft===1?1.5:1)*Math.min(8,Y.combo)*(.6+xt*.5));Y.score+=y,o();let D=k_[k.kind]??[""],q=!["desk","chair","window"].includes(k.kind);a(q?D[Math.floor(Math.random()*D.length)]:Y.combo>2?`COMBO x${Y.combo}! +${y}`:Math.random()<.4?D[Math.floor(Math.random()*D.length)]:`+${y}`)}function Zt(){let[T,k,K]=s.notAHole;T.visible=k.visible=!1,st.visible=!0,Yt(1.1,R=>{K.position.set(Dt.x,Dt.y-(Dt.y-.05)*R*R,Dt.z-.25*R),K.rotation.set(-Math.PI/2*R*R,Nt.y,Nt.z+R*.6,"YXZ")}),Yt(1.5,R=>{rt.material.opacity=.55*R,st.userData.halo.material.opacity=.4+.6*R})}function Gt(T,k,K,R,Mt,xt){let Ft=new ge;Ft.position.copy(R),Ft.quaternion.copy(wt),i.add(Ft),Ft.updateMatrixWorld(),Ft.attach(T.mesh),Ft.position.addScaledVector(Mt,.035),T.lodged={target:K,pivot:Ft,at:xt,hand:T.grip.getWorldPosition(new C)},T.follow=null,ht.lodge(),bt(k,1,140),Y.lodges++||a("IT IS STUCK. PULL.")}function ye(T,k,K=0,R=0){let{pivot:Mt,target:xt}=T.lodged;T.grip.attach(T.mesh),T.mesh.position.set(0,0,0),T.mesh.quaternion.identity(),T.mesh.rotation.set(cf,0,0),i.remove(Mt),T.lodged=null,T.prev=null,T.vel.set(0,0,0),k&&(ht.yank(),bt(K,.8,60),ut(xt.material,Mt.position,Mt.position.clone().sub(xt.center).setY(.5).normalize(),12,2.5,!1,xt.colors),xt.lastHit=-9,xt.hp-=.35,Y.score+=60,xt.hp<=0&&(xt.hp=.001,Tt(T,K,R,xt,Mt.position.clone(),6,new C(0,1,0),R+1)))}function _e(T,k,K){let R=T.follow;!R||K<R.at||(T.follow=null,!(R.target.hp<=0||T.vel.length()<R.speed*.55)&&(R.target.hp-=R.e*R.affinity*.4,Y.score+=Math.round(25*R.e),Y.followThroughs++,R.target.hp<=0&&(R.target.hp=.001,R.target.lastHit=-9,Tt(T,k,K,R.target,R.point,R.speed*1.15,R.dir,K))))}function mn(T){Y.phase="play",Y.endsAt=T+O_,nt.visible=!1,ht.bell(mt),a("LESSON 2: DEMOLITION. 90 SECONDS. GO.")}function Mn(){Y.phase="over",ht.bell([...mt].reverse());let T=z_.filter(R=>Y.materials.has(R)).length,k=Y.score+T*T*400,K=k>3e4?"A+ (PLEASE LEAVE)":k>15e3?"B. SHOWS PROMISE. THE SCHOOL DOES NOT.":k>5e3?"C. NEEDS MORE DEMOLITION.":"F. GENTLE. SUSPICIOUSLY GENTLE.";a(`PENCILS DOWN. ${k} PTS, ${T}/6 MATERIALS. ${K}`),Y.total=k,Y.finishedAt=performance.now()/1e3,Y.slowUntil=Y.finishedAt+1.8,it("0:00",!0),setTimeout(()=>Y.phase==="over"&&Et(k,T,K),2200)}function pa(){for(let R of J)R.hp=R.max,R.mesh&&R.mesh.setMatrixAt(R.index,R.matrix),R.pane&&(R.pane.visible=!0),R.object&&(R.object.visible=!0);s.desks.instanceMatrix.needsUpdate=s.chairs.instanceMatrix.needsUpdate=!0,t.shadowMap.needsUpdate=!0;for(let R of Object.values(at))R.parts.forEach((Mt,xt)=>{Mt.alive=!1,R.mesh.setMatrixAt(xt,tt)}),R.mesh.instanceMatrix.needsUpdate=!0;for(let R of[ft,vt])R.life.fill(0);for(let R of ct)R.visible=!1;for(let R of l)R.lodged&&ye(R,!1);let[T,k,K]=s.notAHole;T.visible=k.visible=!0,K.position.copy(Dt),K.rotation.copy(Nt),st.visible=!1,rt.material.opacity=0,nt.visible=!1,s.ext.rotation.copy(fe),s.hat.position.copy(ie),kt.length=0,Object.assign(Y,{phase:"ready",...Xt()}),it("1:30"),a("TUESDAY (AGAIN). SWING TO START.")}let ps=j.find(T=>T.kind==="cat"),Yi=j.find(T=>T.kind==="bust"),hr=j.filter(T=>T.kind==="pot"),je={cat:0,bust:0,squeakAt:-9};function ma(T,k,K){let R=(Qt,y)=>K.some(({p:D,speed:q})=>q>1&&D.distanceTo(Qt.position)<y),Mt=1-Math.exp(-k*14),xt=ps.object.visible&&R(ps.object,.7);xt&&je.cat<.3&&T-je.squeakAt>1.2&&(je.squeakAt=T,ht.squeak()),je.cat+=((xt?1:0)-je.cat)*Mt;let{head:Ft,paw:Jt}=ps.object.userData;Ft.rotation.set(-.3*je.cat,1.1*je.cat,0),Jt.rotation.z=je.cat>.5?1.2:Math.sin(T*4)*.35,ps.object.scale.set(1+.08*je.cat,1-.14*je.cat,1),je.bust+=((Yi.object.visible&&R(Yi.object,.8)?1:0)-je.bust)*Mt,Yi.object.userData.head.rotation.set(-.35*je.bust,0,.12*je.bust),Yi.object.rotation.x=-.1*je.bust;for(let Qt of hr)if(Qt.object.visible){let y=R(Qt.object,.6)?1:0;Qt.object.userData.leaves.forEach((D,q)=>{D.rotation.y=y*Math.sin(T*40+q)*.25})}for(let Qt of j)Qt.wobble&&(Qt.wobble*=Math.exp(-k*5),Qt.object.rotation.z=Math.sin(T*30)*.12*Qt.wobble,Qt.wobble<.01&&(Qt.wobble=0,Qt.object.rotation.z=0))}let Sn=new C,bn=new C,Si=l.map(()=>({p:new C,speed:0}));function ga(T,k){Y.dust*=Math.exp(-k/35);for(let R of l)R.mesh.visible=Y.phase!=="intro"&&(R===B()||!!R.lodged);for(let R=kt.length-1;R>=0;R--){let Mt=kt[R];Mt.t+=k;let xt=Math.min(1,Mt.t/Mt.dur);Mt.run(xt),xt===1&&(kt.splice(R,1),Mt.done?.())}let K=T<Y.slowUntil?.15+.85*((1.8-(Y.slowUntil-T))/1.8)**3:1;if(Vt(ft,k*K,.02),Vt(vt,k*K,6),T<Y.powderUntil&&zt(ft,s.ext.position.clone().setY(1.55),6,{color:16777215,speed:2.2,size:.09,life:3,grow:1.4,alpha:.35,dir:new C(Math.sin(T*7)-.8,.2,Math.cos(T*5)*.8).normalize(),drag:1.2}),t.xr.isPresenting&&v(),!(!t.xr.isPresenting||Y.phase==="intro")){L(k),Y.phase==="play"&&T>Y.endsAt&&Mn(),Y.phase==="play"&&Math.ceil(Y.endsAt-T)!==Y.shown&&(Y.shown=Math.ceil(Y.endsAt-T),it(`${Math.floor(Y.shown/60)}:${String(Y.shown%60).padStart(2,"0")}`,Y.shown<=10),(Y.shown<=10||Y.shown%15===0)&&a(`${Y.shown}s LEFT  \xB7  SCORE ${Y.score}`),Y.shown<=10&&gt()&&(Z(gt(),Y.shown<=3?1900:1500,.06,.25,0,"square"),bt(1,.15,15)));for(let R of Si)R.speed=0;_.hand===null&&N(0),l.forEach(R=>{let Mt=R.hand??0;if(R!==B()&&!R.lodged)return;if(!R.grip.visible){R.prev=null;return}if(R.lodged){let Jt=R.lodged,Qt=T-Jt.at;Jt.pivot.quaternion.copy(Jt.pivot.userData.q??=Jt.pivot.quaternion.clone()),Jt.pivot.rotateX(Math.sin(Qt*57)*.22*Math.exp(-Qt*5)),(R.grip.getWorldPosition(bn).distanceTo(Jt.hand)>.3||Qt>6)&&ye(R,Qt<=6,Mt,T);return}_e(R,Mt,T),R.mesh.localToWorld(Sn.copy(R.mesh.userData.tip)),R.prev&&k>0&&R.vel.lerp(bn.subVectors(Sn,R.prev).divideScalar(k),.6),R.prev=(R.prev??new C).copy(Sn);let xt=R.vel.length();if(T<(R.settle??0)){R.vel.set(0,0,0);return}if(Si[0].p.copy(Sn),Si[0].speed=xt,xt<1.2)return;if(xa(Sn,R.vel),Y.phase==="ready"&&mn(T),Y.phase==="over"){T-Y.finishedAt>4&&xt>3&&pa();return}bn.copy(R.vel).normalize();let Ft=Sn.clone().addScaledVector(R.vel,-k*1.5);for(let Jt of J)if(!(Jt.hp<=0||R.lodged)&&Math.abs(Sn.x-Jt.center.x)<Jt.half.x&&Math.abs(Sn.y-Jt.center.y)<Jt.half.y&&Math.abs(Sn.z-Jt.center.z)<Jt.half.z&&(R.entry=Ft,Tt(R,Mt,T,Jt,Sn.clone(),xt,bn.clone(),T)))break}),ma(T,k,Si);for(let R of J)R.shove&&(lt.copy(R.matrix),lt.elements[12]+=R.shove.x,lt.elements[14]+=R.shove.z,R.mesh.setMatrixAt(R.index,lt),R.mesh.instanceMatrix.needsUpdate=!0,R.shove.multiplyScalar(.8),R.shove.lengthSq()<1e-7&&(R.shove=null));ms(k*K)}}function xa(T,k){for(let K of Object.values(at))for(let R of K.parts)!R.alive||Math.abs(R.p.x-T.x)>.15||Math.abs(R.p.z-T.z)>.15||Math.abs(R.p.y-T.y)>.15||(R.v.copy(k).multiplyScalar(.5+Math.random()*.3).add(new C(0,1+Math.random(),0)),R.w.set(Q(),Q(),Q()).multiplyScalar(18),R.rest=0)}function ms(T){for(let k of Object.values(at)){let K=!1;k.parts.forEach((R,Mt)=>{if(!R.alive||R.rest>1)return;K=!0;let xt=R.material==="drywall"||R.material==="glass"?.97:.995;R.v.y-=9.8*T,R.v.x*=xt,R.v.z*=xt,R.p.addScaledVector(R.v,T),It.setFromAxisAngle(bn.copy(R.w).normalize(),R.w.length()*T),R.q.premultiply(It);let Ft=Math.min(R.s.x,R.s.y,R.s.z)/2;if(R.p.y<Ft){let Jt=-R.v.y;if(R.p.y=Ft,R.v.y*=R.material==="plaster"?-.15:-.3,R.v.x*=.6,R.v.z*=.6,R.w.multiplyScalar(.5),(R.material==="glass"||R.material==="ceramic")&&Jt>1&&Math.random()<.12&&ht.tink(R.material),R.v.lengthSq()<.02&&(R.rest+=T*10,R.w.set(0,0,0),R.material!=="plaster")){let Qt=R.s.y<R.s.x?"y":"x";R.q.setFromAxisAngle(new C(0,1,0),Math.random()*6),Qt==="x"&&R.q.multiply(new Be().setFromAxisAngle(new C(0,0,1),Math.PI/2))}}R.p.x=Math.max(-4.4,Math.min(4.4,R.p.x)),R.p.z=Math.max(-4.7,Math.min(4.7,R.p.z)),Ot.position.copy(R.p),Ot.quaternion.copy(R.q),Ot.scale.copy(R.s),Ot.updateMatrix(),k.mesh.setMatrixAt(Mt,Ot.matrix)}),K&&(k.mesh.instanceMatrix.needsUpdate=!0)}}return{update:ga,state:Y,tools:l,targets:J,props:j,reset:pa,start:mn,finish:Mn,equip:N,holder:_,hole:st,report:nt}}var Kn=new URLSearchParams(location.search),Ch=document.getElementById("enter"),vf=['600 40px "Caveat"','40px "Permanent Marker"','700 40px "Cabin Sketch"','40px "Special Elite"'].map(i=>document.fonts.load(i));vf.push(document.fonts.load('40px "Yuji Syuku"',"\u58CA\u3059\u306A"));await Promise.race([Promise.allSettled(vf),new Promise(i=>setTimeout(i,3500))]);var Ce=new Al({antialias:!0,powerPreference:"high-performance"});Ce.setPixelRatio(Math.min(devicePixelRatio,2));Ce.setSize(innerWidth,innerHeight);Ce.toneMapping=Kr;Ce.toneMappingExposure=Number(Kn.get("exposure"))||1.05;Ce.shadowMap.enabled=!0;Ce.shadowMap.type=os;Ce.shadowMap.autoUpdate=!1;Ce.xr.enabled=!0;Ce.xr.setReferenceSpaceType("local-floor");Ce.xr.setFoveation(.6);document.body.prepend(Ce.domElement);var Pn=new is,cn=new ge,Ke=new tn(70,innerWidth/innerHeight,.03,80);Pn.background=new te(15331302);Pn.environment=new ir(Ce).fromScene(new Rl,.04).texture;Pn.environmentIntensity=Kn.has("sunonly")?0:.22;Ke.position.y=Number(Kn.get("y")??1.6);Ke.rotation.order="YXZ";Ke.rotation.set(Number(Kn.get("pitch")??-.08),Number(Kn.get("yaw")??0),0);cn.position.set(Number(Kn.get("x")??.4),0,Number(Kn.get("z")??3.9));cn.add(Ke);Pn.add(cn);var Fe=Zd(Pn,{cjk:Yd("\u58CA",Pe.brush)}),Th=$d(Pn),jn=new $s(16767398,7);jn.position.copy(Fl).multiplyScalar(14);jn.castShadow=!0;jn.shadow.mapSize.set(2048,2048);Object.assign(jn.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:2,far:30});jn.shadow.bias=-4e-4;jn.shadow.normalBias=.025;jn.shadow.radius=3;Pn.add(jn,jn.target);var kl=new $s(13622514,1.1);kl.position.set(-10,2.5,1);var Mf=new Xr(13227754,6963236,.22);Kn.has("sunonly")||Pn.add(kl,Mf);Ce.shadowMap.needsUpdate=!0;var hn=null;function Rh(){if(hn)return hn.ctx.resume();let i=new $r,t=i.context,e=i.getInput();Ke.add(i);let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=n.getChannelData(0);for(let w=0;w<s.length;w++)s[w]=Math.random()*2-1;let r=(w,b,L)=>{let _=new PannerNode(t,{panningModel:"HRTF",refDistance:1.5,positionX:w,positionY:b,positionZ:L});return _.connect(e),_},a=(w,{dur:b=.3,type:L="lowpass",freq:_=800,to:E=_,gain:N=.5,q:U=.7}={})=>{let B=t.currentTime,W=new AudioBufferSourceNode(t,{buffer:n,loop:!0}),F=new BiquadFilterNode(t,{type:L,frequency:_,Q:U}),H=new GainNode(t,{gain:N});F.frequency.exponentialRampToValueAtTime(E,B+b),H.gain.setValueAtTime(N,B),H.gain.exponentialRampToValueAtTime(1e-4,B+b),W.connect(F).connect(H).connect(w),W.start(B,Math.random()),W.stop(B+b+.05)},o=(w,{from:b,to:L,dur:_,gain:E=.3,type:N="sine"})=>{let U=t.currentTime,B=new OscillatorNode(t,{type:N,frequency:b}),W=new GainNode(t,{gain:E});B.frequency.exponentialRampToValueAtTime(L,U+_),W.gain.setValueAtTime(E,U),W.gain.exponentialRampToValueAtTime(1e-4,U+_),B.connect(W).connect(w),B.start(U),B.stop(U+_+.05)},l=r(-ae/2-3,2.5,0),c=new GainNode(t,{gain:0}),h=new GainNode(t,{gain:.05}),d=new AudioBufferSourceNode(t,{buffer:n,loop:!0}),u=new GainNode(t,{gain:1});d.connect(new BiquadFilterNode(t,{type:"bandpass",frequency:5200,Q:3})).connect(c).connect(h).connect(u).connect(l);let f=new OscillatorNode(t,{type:"square",frequency:38}),g=new GainNode(t,{gain:.5});f.connect(g).connect(c.gain),c.gain.value=.5;let M=new OscillatorNode(t,{frequency:.07}),m=new GainNode(t,{gain:.035});M.connect(m).connect(h.gain),d.start(),f.start(),M.start();let p=r(1.55,2.68,-Ee/2),S=r(.12,1.3,-3.78),I=r(2.2,Ye,1.5),v=r(Fe.lair.x,.6,Fe.lair.z);hn={ctx:t,hush:u,out:e,scratch:()=>a(S,{dur:.05+Math.random()*.05,type:"bandpass",freq:2400+Math.random()*1500,gain:.12,q:5}),whistle:()=>{o(e,{from:500,to:1500,dur:.35,gain:.07,type:"sine"}),setTimeout(()=>o(e,{from:1500,to:1400,dur:.25,gain:.05,type:"triangle"}),330)},tick:w=>a(p,{dur:.04,type:"highpass",freq:w?3e3:2200,gain:.25}),click:()=>a(S,{dur:.06,type:"highpass",freq:1800,gain:.6}),pfft:()=>{a(S,{dur:.7,type:"bandpass",freq:1400,to:300,gain:.5,q:2}),o(S,{from:700,to:180,dur:.6,gain:.08,type:"triangle"})},boom:()=>{a(S,{dur:2.6,freq:600,to:40,gain:1.6}),o(S,{from:90,to:28,dur:2.2,gain:.9}),a(I,{dur:1.4,type:"highpass",freq:3e3,to:900,gain:.25})},clatter:()=>{for(let w=0;w<4;w++)setTimeout(()=>a(S,{dur:.09,type:"bandpass",freq:900+Math.random()*900,gain:.5,q:4}),w*70+Math.random()*40)},giggle:()=>{for(let w=0;w<5;w++)setTimeout(()=>o(v,{from:520+w*25,to:380,dur:.09,gain:.05,type:"triangle"}),w*95)}}}var cr=600,Wi=new Float32Array(cr*3),Sf=new Float32Array(cr*3),Jn=new Float32Array(cr*3),Ol=new Float32Array(cr),Vl=new we;Vl.setAttribute("position",new re(Wi,3));Vl.setAttribute("color",new re(Sf,3));var bf=new xi(Vl,new Gs({size:.012,vertexColors:!0,transparent:!0,depthWrite:!1}));bf.frustumCulled=!1;Pn.add(bf);var ar=0;function Ah(i,t,e,n,s,r=1){for(let a=0;a<i;a++,ar=(ar+1)%cr)Wi.set([t.x+(Math.random()-.5)*e.x,t.y+(Math.random()-.5)*e.y,t.z+(Math.random()-.5)*e.z],ar*3),Jn.set([(Math.random()-.5)*n,Math.random()*n*r,(Math.random()-.5)*n],ar*3),Sf.set(new te(s[a%s.length]).toArray(),ar*3),Ol[ar]=2+Math.random()*2}var wf=[16731501,16765503,4112851,9095462,11765995],V_=[13617336,12169632,14999248],pf=["WHO PUSHED THE PLUNGER?","IT IS NOT CONNECTED TO ANYTHING.","IT IS NOW CONNECTED TO SOMETHING.","FINE. DETENTION. YOU TOO, VISITOR.","STOP.","I AM CALLING YOUR MOTHER.",'SHE ASKED "WHICH ONE?"',"IT IS NOW CONNECTED TO EVERYTHING.","WE ARE ALL IN DETENTION NOW."],Te={pushes:0,explosions:0,pressedAt:-9,armed:!0,fallen:0,lampSpin:0,lampAngle:0,flicker:0,flipAt:-9,eyesHidden:0},Bl=[],Tf=i=>Bl.push({start:performance.now()/1e3,...i});function fa(i){let t=Fe.statusCanvas.getContext("2d");t.clearRect(0,0,Fe.statusCanvas.width,Fe.statusCanvas.height),t.drawImage(Pl(i),0,0),Fe.status.material.map.needsUpdate=!0}var Xi=new C;function Gl(){let i=performance.now()/1e3;if(!(i-Te.pressedAt<1.2)){if(Te.pressedAt=i,Te.pushes++,Rh(),hn.click(),Tf({dur:.5,run:t=>{Fe.handle.position.y=.21-.1*Math.sin(Math.min(1,t*2)*Math.PI/2)*(t<.6?1:1-(t-.6)/.4)}}),fa(pf[Math.min(Te.pushes,pf.length)-1]),Fe.handle.getWorldPosition(Xi),Te.pushes%3===0)return setTimeout(G_,900);hn.pfft(),Ah(40,Xi,new C(.05,.02,.05),.9,wf)}}function G_(){Te.explosions++,hn.boom(),Te.flicker=1.6,Te.lampSpin+=2.4,Te.flipAt=performance.now()/1e3,Ah(260,new C(2.2,Ye-.05,1.5),new C(2.6,.02,2.2),.15,V_,-1),Ah(80,Xi,new C(.1,.05,.1),2.2,wf);let i=Fe.scrolls[Te.fallen++];if(i){let t=i.position.y;setTimeout(()=>Tf({dur:.8,run:e=>{i.position.y=t-(t-.19)*e*e,i.rotation.x=-Math.PI/2*e*e,i.position.z=-Ee/2+.04+.08*e},done:()=>hn.clatter()}),350)}}var Eh={built:{sun:7,sky:1.1,bounce:.22,env:.22,exposure:1.05,haze:1,skyColor:13622514},film:{sun:10,sky:.34,bounce:.09,env:.07,exposure:1,haze:1.5,skyColor:8362198}},zl=Kn.get("look")==="built",Bn={...zl?Eh.built:Eh.film,fill:1};kl.color.set(Bn.skyColor);function H_(i,t){let e=1-Math.exp(-t*1.5);Bn.fill+=(i.fill-Bn.fill)*e,jn.intensity+=(i.sun-jn.intensity)*e,kl.intensity=Bn.sky*Bn.fill,Mf.intensity=Bn.bounce*Bn.fill,Kn.has("sunonly")||(Pn.environmentIntensity=Bn.env*Bn.fill),Th.haze.value+=(i.haze-Th.haze.value)*e}Kn.has("exposure")||(Ce.toneMappingExposure=Bn.exposure);var Mi=ff({scene:Pn,renderer:Ce,rig:cn,camera:Ke,room:Fe,audio:()=>hn,say:fa,flip:()=>{Te.flipAt=performance.now()/1e3}});function W_(i,t){let e=Fe.eyes,n=e.position.clone().sub(t),s=n.length(),r=Ke.getWorldDirection(new C).dot(n.normalize());s<1.4&&r>.93&&i>Te.eyesHidden&&(Te.eyesHidden=i+5,hn?.giggle());let a=i<Te.eyesHidden,o=Math.sin(i*1.3)>.985||Math.sin(i*.37+2)>.995;e.scale.y+=((a||o?.02:1)-e.scale.y)*(a?.5:.35),e.position.x=Fe.lair.x+.2+Math.sin(i*.21)*.25}var X_=[0,1].map(i=>{let t=Ce.xr.getController(i);t.add(new Ir(new we().setFromPoints([new C,new C(0,0,-.4)]),new Vs({color:16777215,transparent:!0,opacity:.35}))),t.addEventListener("select",()=>{q_(t)&&Gl()}),cn.add(t);let e=Ce.xr.getControllerGrip(i),n=Ce.xr.getHand(i);return cn.add(e,n),{c:t,grip:e,hand:n}}),da=new Jr;function q_(i){return i.updateMatrixWorld(!0),da.ray.origin.setFromMatrixPosition(i.matrixWorld),da.ray.direction.set(0,0,-1).applyQuaternion(i.getWorldQuaternion(new Be)),da.intersectObject(Fe.plunger,!0).length>0}var mf=new C;function Y_(){Fe.handle.getWorldPosition(Xi);for(let{grip:i,hand:t}of X_){let e=t.joints?.["index-finger-tip"],n=e?.visible?e.getWorldPosition(mf):i.visible?i.getWorldPosition(mf):null;if(n&&Math.hypot(n.x-Xi.x,n.z-Xi.z)<.09&&n.y<Xi.y+.02&&n.y>Xi.y-.12)return!0}return!1}Ce.domElement.addEventListener("pointermove",i=>{i.buttons&&(Ke.rotation.y+=i.movementX*.004,Ke.rotation.x=Math.min(1.4,Math.max(-1.4,Ke.rotation.x+i.movementY*.004)))});Ce.domElement.addEventListener("click",i=>{Rh(),da.setFromCamera(new _t(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),Ke),da.intersectObject(Fe.plunger,!0).length&&Gl()});var lr=new Set;addEventListener("keydown",i=>lr.add(i.key.toLowerCase()));addEventListener("keyup",i=>lr.delete(i.key.toLowerCase()));addEventListener("resize",()=>{Ke.aspect=innerWidth/innerHeight,Ke.updateProjectionMatrix(),Ce.setSize(innerWidth,innerHeight)});var qi=new At(new _n(.3,16,8),new an({color:0,side:Ge,transparent:!0,depthTest:!1,depthWrite:!1}));qi.renderOrder=999;qi.visible=!1;Ke.add(qi);var hi={at:-1,written:0,lastPhase:null},gf="DEMOLITION BOY",Z_="LESSON 2: DEMOLITION. SWING TO START.";function $_(){Mi.state.phase!=="intro"&&Mi.reset(),hi.at=performance.now()/1e3,hi.written=0,Mi.state.phase="intro",qi.visible=!0,qi.material.opacity=1,fa("")}function J_(i){if(hi.at<0)return;let t=i-hi.at;qi.material.opacity=1-Math.min(1,Math.max(0,(t-.8)/3.7))**1.6,qi.visible=qi.material.opacity>.002;let e=Math.min(gf.length,Math.floor(Math.max(0,t-4.2)/.16));e>hi.written&&(hi.written=e,fa(gf.slice(0,e)),hn?.scratch()),t>9.5&&Mi.state.phase==="intro"&&(Mi.state.phase="ready",hn?.whistle(),fa(Z_),hi.at=-1)}var or=new C,Sh=new C,xf=new C,_f=new C(0,1,0),yf=performance.now(),bh=!1,wh=0;Ce.setAnimationLoop(i=>{let t=performance.now()/1e3,e=Math.min(.05,(i-yf)/1e3);yf=i,Th.time.value=t,Ke.getWorldPosition(or);let n=new _t(+lr.has("d")-+lr.has("a"),+lr.has("s")-+lr.has("w"));for(let h of Ce.xr.getSession()?.inputSources??[]){let d=h.gamepad?.axes;if(!(!d||d.length<4))if(h.handedness==="left")n.set(d[2],d[3]);else if(Math.abs(d[2])>.7&&!bh){let u=-Math.sign(d[2])*Math.PI/6;cn.position.sub(or).applyAxisAngle(_f,u).add(or),cn.rotation.y+=u,bh=!0}else Math.abs(d[2])<.3&&(bh=!1)}if(n.lengthSq()>.01){let h=or.x-cn.position.x,d=or.z-cn.position.z;Ke.getWorldDirection(Sh).setY(0).normalize(),xf.crossVectors(Sh,_f),cn.position.addScaledVector(Sh,-n.y*e*1.3).addScaledVector(xf,n.x*e*1.3),cn.position.x=Math.min(ae/2-.35,Math.max(-ae/2+.35,cn.position.x+h))-h,cn.position.z=Math.min(Ee/2-.35,Math.max(-Ee/2+.9,cn.position.z+d))-d}let s=Ce.xr.isPresenting&&Y_();s&&Te.armed&&(Te.armed=!1,Gl()),s||(Te.armed=!0);for(let h=Bl.length-1;h>=0;h--){let d=Bl[h],u=Math.min(1,(t-d.start)/d.dur);d.run(u),u===1&&(Bl.splice(h,1),d.done?.())}Te.lampSpin+=(-Te.lampAngle*9-Te.lampSpin*.9)*e,Te.lampAngle+=Te.lampSpin*e,Fe.crooked.g.rotation.z=-.62+Te.lampAngle*.35+Math.sin(t*.8)*.012,Te.flicker=Math.max(0,Te.flicker-e);let r=Te.flicker>0?Math.random()>.5:Math.sin(t*.5)>.97&&Math.random()>.6;Fe.crooked.tubes.emissiveIntensity=r?2.2:.05;let a=Math.min(1,(t-Te.flipAt)/.6);Fe.flip.rotation.x=a<1?-a*Math.PI*2:0,W_(t,or),Mi.update(t,e),J_(t,e);let o=Mi.state.phase;if(H_({fill:zl?1:hi.at>=0?.3:o==="over"?.45:1,sun:zl?Eh.built.sun:o==="over"?11.5:Bn.sun,haze:zl?1:(o==="intro"?1.9:Bn.haze)+Mi.state.dust},e),hn&&o!==hi.lastPhase){hi.lastPhase=o;let h=o==="play"?.05:1;hn.hush.gain.setTargetAtTime(h,hn.ctx.currentTime,o==="play"?.3:2.5)}let l=new Date,c=l.getSeconds()+l.getMilliseconds()/1e3;Fe.hands.second.rotation.z=c/60*Math.PI*2,Fe.hands.minute.rotation.z=(l.getMinutes()+c/60)/60*Math.PI*2,Fe.hands.hour.rotation.z=(l.getHours()%12+l.getMinutes()/60)/12*Math.PI*2,hn&&Math.floor(c)!==wh&&(wh=Math.floor(c),hn.tick(wh%2));for(let h=0;h<cr;h++){if(Ol[h]<=0)continue;Ol[h]-=e;let d=h*3;Jn[d+1]-=1.6*e,Jn[d]*=.985,Jn[d+2]*=.985,Jn[d+1]=Math.max(Jn[d+1],-.45),Wi[d]+=(Jn[d]+Math.sin(t*7+h)*.05)*e,Wi[d+1]+=Jn[d+1]*e,Wi[d+2]+=Jn[d+2]*e,Wi[d+1]<.005&&(Wi[d+1]=.005,Jn[d]=Jn[d+2]=0),Ol[h]<=0&&(Wi[d+1]=-10)}Vl.attributes.position.needsUpdate=!0,Ce.render(Pn,Ke)});var Af=await navigator.xr?.isSessionSupported("immersive-vr").catch(()=>!1);Ch.disabled=!Af;Ch.textContent=Af?"Enter the classroom":"Open on a headset to step in";document.body.classList.add("ready");Ch.addEventListener("click",async()=>{Rh();let i=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","hand-tracking"]});await Ce.xr.setSession(i),$_(),document.body.classList.add("immersive"),i.addEventListener("end",()=>document.body.classList.remove("immersive"))});Object.assign(globalThis,{classroom:{renderer:Ce,scene:Pn,camera:Ke,rig:cn,room:Fe,state:Te,push:Gl,game:Mi}});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
