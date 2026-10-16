var xh=0,Ol=1,_h=2;var qi=1,yh=2,Ls=3,bi=0,Ue=1,Sn=2,$n=0,wi=1,bn=2,Bl=3,zl=4,vh=5;var Yi=100,Mh=101,Sh=102,bh=103,wh=104,Th=200,Ah=201,Eh=202,Ch=203,kl=204,Vl=205,Rh=206,Ih=207,Ph=208,Lh=209,Nh=210,Dh=211,Uh=212,Fh=213,Oh=214,da=0,fa=1,pa=2,xs=3,ma=4,ga=5,xa=6,_a=7,qa=0,Bh=1,zh=2,Un=0,Gl=1,Hl=2,Wl=3,yr=4,Xl=5,ql=6,Yl=7;var Zl=300,Ti=301,Zi=302,Ya=303,Za=304,vr=306,_s=1e3,Wn=1001,ya=1002,Ge=1003,kh=1004;var Mr=1005;var Ye=1006,$a=1007;var Ai=1008;var dn=1009,$l=1010,Jl=1011,Ns=1012,Ja=1013,Fn=1014,wn=1015,On=1016,Ka=1017,ja=1018,Ds=1020,Kl=35902,jl=35899,Ql=1021,tc=1022,Tn=1023,Xn=1026,Ei=1027,Qa=1028,to=1029,Ci=1030,eo=1031;var no=1033,Sr=33776,br=33777,wr=33778,Tr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,Ar=37490,fo=37491,po=37808,mo=37809,go=37810,xo=37811,_o=37812,yo=37813,vo=37814,Mo=37815,So=37816,bo=37817,wo=37818,To=37819,Ao=37820,Eo=37821,Co=36492,Ro=36494,Io=36495,Po=36283,Lo=36284,Er=36285,No=36286;var Qs=2300,va=2301,ha=2302,El=2303,Cl=2400,Rl=2401,Il=2402;var Vh=3200;var Cr=0,Gh=1,ai="",rn="srgb",tr="srgb-linear",er="linear",fe="srgb";var ua=7680;var Hh=519,Wh=512,Xh=513,qh=514,Do=515,Yh=516,Zh=517,Uo=518,$h=519,Jh=35044;var ec="300 es",Pn=2e3,ys=2001;function Ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){let i=nr("canvas");return i.style.display="block",i}var Gc={},vs=null;function nc(...i){let t="THREE."+i.shift();vs?vs("log",t,...i):console.log(t,...i)}function jh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=jh(i);let t="THREE."+i.shift();if(vs)vs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=jh(i);let t="THREE."+i.shift();if(vs)vs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vi(...i){let t=i.join(" ");t in Gc||(Gc[t]=!0,zt(...i))}function Qh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tu={[da]:fa,[pa]:xa,[ma]:_a,[xs]:ga,[fa]:da,[xa]:pa,[_a]:ma,[ga]:xs},qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nl=Math.PI/180,Ma=180/Math.PI;function Rr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Rd(i,t){return(i%t+t)%t}function il(i,t,e){return(1-e)*i+e*t}function Xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],y=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==f||u!==y){let g=l*h+c*f+u*y+d*S;g<0&&(h=-h,f=-f,y=-y,S=-S,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),P=Math.sin(b);p=Math.sin(p*b)/P,o=Math.sin(o*b)/P,l=l*p+h*o,c=c*p+f*o,u=u*p+y*o,d=d*p+S*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+y*o,d=d*p+S*o;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],y=r[a+3];return t[e]=o*y+u*d+l*f-c*h,t[e+1]=l*y+u*h+c*d-o*f,t[e+2]=c*y+u*f+o*h-l*d,t[e+3]=u*y-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*y,this._y=c*f*d-h*u*y,this._z=c*u*y+h*f*d,this._w=c*u*d-h*f*y;break;case"YXZ":this._x=h*u*d+c*f*y,this._y=c*f*d-h*u*y,this._z=c*u*y-h*f*d,this._w=c*u*d+h*f*y;break;case"ZXY":this._x=h*u*d-c*f*y,this._y=c*f*d+h*u*y,this._z=c*u*y+h*f*d,this._w=c*u*d-h*f*y;break;case"ZYX":this._x=h*u*d-c*f*y,this._y=c*f*d+h*u*y,this._z=c*u*y-h*f*d,this._w=c*u*d+h*f*y;break;case"YZX":this._x=h*u*d+c*f*y,this._y=c*f*d+h*u*y,this._z=c*u*y-h*f*d,this._w=c*u*d-h*f*y;break;case"XZY":this._x=h*u*d-c*f*y,this._y=c*f*d-h*u*y,this._z=c*u*y+h*f*d,this._w=c*u*d+h*f*y;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sl.copy(this).projectOnVector(t),this.sub(sl)}reflect(t){return this.sub(sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new I,Hc=new Le,Wt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],y=n[8],S=s[0],g=s[3],p=s[6],b=s[1],P=s[4],M=s[7],w=s[2],T=s[5],N=s[8];return r[0]=a*S+o*b+l*w,r[3]=a*g+o*P+l*T,r[6]=a*p+o*M+l*N,r[1]=c*S+u*b+d*w,r[4]=c*g+u*P+d*T,r[7]=c*p+u*M+d*N,r[2]=h*S+f*b+y*w,r[5]=h*g+f*P+y*T,r[8]=h*p+f*M+y*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,y=e*d+n*h+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/y;return t[0]=d*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rl.makeScale(t,e)),this}rotate(t){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rl=new Wt,Wc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:er,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var ie=Id();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=nr("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pd=0,Ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(al(s[a].image)):r.push(al(s[a]))}else r=al(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Ld=0,ol=new I,on=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Ye,a=Ai,o=Tn,l=dn,c=i.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Rr(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Zl;on.DEFAULT_ANISOTROPY=1;var Se=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],y=l[9],S=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(y+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,M=(f+1)/2,w=(p+1)/2,T=(u+h)/4,N=(d+S)/4,_=(y+g)/4;return P>M&&P>w?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=T/n,r=N/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=N/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-y)*(g-y)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(g-y)/b,this.y=(d-S)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ba=class extends qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new on(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ir=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var re=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,y,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,y,S,g)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,y,S,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=y,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,y=o*u,S=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+y*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=y+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,y=c*u,S=c*d;e[0]=h+S*o,e[4]=y*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-y,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,y=c*u,S=c*d;e[0]=h-S*o,e[4]=-a*d,e[8]=y+f*o,e[1]=f+y*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,y=o*u,S=o*d;e[0]=l*u,e[4]=y*c-f,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=f*c-y,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,y=o*l,S=o*c;e[0]=l*u,e[4]=S-h*d,e[8]=y*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+y,e[10]=h-S*d}else if(t.order==="XZY"){let h=a*l,f=a*c,y=o*l,S=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=a*u,e[9]=f*d-y,e[2]=y*d-f,e[6]=o*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Dd)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),fi.crossVectors(n,pn),fi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),fi.crossVectors(n,pn)),fi.normalize(),zr.crossVectors(pn,fi),s[0]=fi.x,s[4]=zr.x,s[8]=pn.x,s[1]=fi.y,s[5]=zr.y,s[9]=pn.y,s[2]=fi.z,s[6]=zr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],y=n[2],S=n[6],g=n[10],p=n[14],b=n[3],P=n[7],M=n[11],w=n[15],T=s[0],N=s[4],_=s[8],E=s[12],U=s[1],O=s[5],z=s[9],k=s[13],F=s[2],H=s[6],$=s[10],tt=s[14],ot=s[3],Q=s[7],rt=s[11],at=s[15];return r[0]=a*T+o*U+l*F+c*ot,r[4]=a*N+o*O+l*H+c*Q,r[8]=a*_+o*z+l*$+c*rt,r[12]=a*E+o*k+l*tt+c*at,r[1]=u*T+d*U+h*F+f*ot,r[5]=u*N+d*O+h*H+f*Q,r[9]=u*_+d*z+h*$+f*rt,r[13]=u*E+d*k+h*tt+f*at,r[2]=y*T+S*U+g*F+p*ot,r[6]=y*N+S*O+g*H+p*Q,r[10]=y*_+S*z+g*$+p*rt,r[14]=y*E+S*k+g*tt+p*at,r[3]=b*T+P*U+M*F+w*ot,r[7]=b*N+P*O+M*H+w*Q,r[11]=b*_+P*z+M*$+w*rt,r[15]=b*E+P*k+M*tt+w*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],y=t[3],S=t[7],g=t[11],p=t[15],b=l*f-c*h,P=o*f-c*d,M=o*h-l*d,w=a*f-c*u,T=a*h-l*u,N=a*d-o*u;return e*(S*b-g*P+p*M)-n*(y*b-g*w+p*T)+s*(y*P-S*w+p*N)-r*(y*M-S*T+g*N)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],y=t[12],S=t[13],g=t[14],p=t[15],b=e*o-n*a,P=e*l-s*a,M=e*c-r*a,w=n*l-s*o,T=n*c-r*o,N=s*c-r*l,_=u*S-d*y,E=u*g-h*y,U=u*p-f*y,O=d*g-h*S,z=d*p-f*S,k=h*p-f*g,F=b*k-P*z+M*O+w*U-T*E+N*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/F;return t[0]=(o*k-l*z+c*O)*H,t[1]=(s*z-n*k-r*O)*H,t[2]=(S*N-g*T+p*w)*H,t[3]=(h*T-d*N-f*w)*H,t[4]=(l*U-a*k-c*E)*H,t[5]=(e*k-s*U+r*E)*H,t[6]=(g*M-y*N-p*P)*H,t[7]=(u*N-h*M+f*P)*H,t[8]=(a*z-o*U+c*_)*H,t[9]=(n*U-e*z-r*_)*H,t[10]=(y*T-S*M+p*b)*H,t[11]=(d*M-u*T-f*b)*H,t[12]=(o*E-a*O-l*_)*H,t[13]=(e*O-n*E+s*_)*H,t[14]=(S*P-y*w-g*b)*H,t[15]=(u*w-d*P+h*b)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,y=r*d,S=a*u,g=a*d,p=o*d,b=l*c,P=l*u,M=l*d,w=n.x,T=n.y,N=n.z;return s[0]=(1-(S+p))*w,s[1]=(f+M)*w,s[2]=(y-P)*w,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(h+p))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(y+P)*N,s[9]=(g-b)*N,s[10]=(1-(h+S))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=is.set(s[0],s[1],s[2]).length(),o=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let c=1/a,u=1/o,d=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),y,S;if(l)y=r/(a-r),S=a*r/(a-r);else if(o===Pn)y=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ys)y=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),y,S;if(l)y=1/(a-r),S=a/(a-r);else if(o===Pn)y=-2/(a-r),S=-(a+r)/(a-r);else if(o===ys)y=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new I,En=new re,Nd=new I(0,0,0),Dd=new I(1,1,1),fi=new I,zr=new I,pn=new I,qc=new re,Yc=new Le,gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ud=0,Zc=new I,ss=new Le,Qn=new re,kr=new I,qs=new I,Fd=new I,Od=new Le,$c=new I(1,0,0),Jc=new I(0,1,0),Kc=new I(0,0,1),jc={type:"added"},Bd={type:"removed"},rs={type:"childadded",child:null},ll={type:"childremoved",child:null},Ce=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new gn,n=new Le,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Wt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis($c,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($c,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(qs,kr,this.up):Qn.lookAt(kr,qs,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Qn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),rs.child=t,this.dispatchEvent(rs),rs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bd),ll.child=t,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ce=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},zd={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let g=e.getJointPose(S,n),p=this._getHandJoint(c,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,y=.005;c.inputState.pinching&&h>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function cl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Rd(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cl(a,r,t+1/3),this.g=cl(a,r,t),this.b=cl(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ie.workingToColorSpace(je.copy(this),t),Math.round(se(je.r*255,0,255))*65536+Math.round(se(je.g*255,0,255))*256+Math.round(se(je.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=rn){ie.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Vr);let n=il(pi.h,Vr.h,e),s=il(pi.s,Vr.s,e),r=il(pi.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Gt;Gt.NAMES=eu;var Gi=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new I,ti=new I,hl=new I,ei=new I,as=new I,os=new I,Qc=new I,ul=new I,dl=new I,fl=new I,pl=new Se,ml=new Se,gl=new Se,_i=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),ti.subVectors(n,e),hl.subVectors(t,e);let a=Cn.dot(Cn),o=Cn.dot(ti),l=Cn.dot(hl),c=ti.dot(ti),u=ti.dot(hl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,y=(a*u-o*l)*h;return r.set(1-f-y,y,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(t,e),ml.fromBufferAttribute(t,n),gl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(pl,r.x),a.addScaledVector(ml,r.y),a.addScaledVector(gl,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),ti.subVectors(t,e),Cn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;as.subVectors(s,n),os.subVectors(r,n),ul.subVectors(t,n);let l=as.dot(ul),c=os.dot(ul);if(l<=0&&c<=0)return e.copy(n);dl.subVectors(t,s);let u=as.dot(dl),d=os.dot(dl);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(as,a);fl.subVectors(t,r);let f=as.dot(fl),y=os.dot(fl);if(y>=0&&f<=y)return e.copy(r);let S=f*c-l*y;if(S<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(n).addScaledVector(os,o);let g=u*y-f*d;if(g<=0&&d-u>=0&&f-y>=0)return Qc.subVectors(r,s),o=(d-u)/(d-u+(f-y)),e.copy(s).addScaledVector(Qc,o);let p=1/(g+S+h);return a=S*p,o=h*p,e.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Hr.subVectors(this.max,Ys),ls.subVectors(t.a,Ys),cs.subVectors(t.b,Ys),hs.subVectors(t.c,Ys),mi.subVectors(cs,ls),gi.subVectors(hs,cs),Di.subVectors(ls,hs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Di.z,Di.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Di.z,0,-Di.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Di.y,Di.x,0];return!xl(e,ls,cs,hs,Hr)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,ls,cs,hs,Hr))?!1:(Wr.crossVectors(mi,gi),e=[Wr.x,Wr.y,Wr.z],xl(e,ls,cs,hs,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,Gr=new Yn,ls=new I,cs=new I,hs=new I,mi=new I,gi=new I,Di=new I,Ys=new I,Hr=new I,Wr=new I,Ui=new I;function xl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);let o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var De=new I,Xr=new Vt,kd=0,an=class extends qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jh,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var sr=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var rr=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vd=new Yn,Zs=new I,_l=new I,Zn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(_l)),this.expandByPoint(Zs.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gd=0,Mn=new re,yl=new Ce,us=new I,mn=new Yn,$s=new Yn,Ve=new I,xe=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?rr:sr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(mn.min,$s.min),mn.expandByPoint(Ve),Ve.addVectors(mn.max,$s.max),mn.expandByPoint(Ve)):(mn.expandByPoint($s.min),mn.expandByPoint($s.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ve.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(t,c),Ve.add(us)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new I,l[_]=new I;let c=new I,u=new I,d=new I,h=new Vt,f=new Vt,y=new Vt,S=new I,g=new I;function p(_,E,U){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,U),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),y.fromBufferAttribute(r,U),u.sub(c),d.sub(c),f.sub(h),y.sub(h);let O=1/(f.x*y.y-y.x*f.y);isFinite(O)&&(S.copy(u).multiplyScalar(y.y).addScaledVector(d,-f.y).multiplyScalar(O),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-y.x).multiplyScalar(O),o[_].add(S),o[E].add(S),o[U].add(S),l[_].add(g),l[E].add(g),l[U].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,E=b.length;_<E;++_){let U=b[_],O=U.start,z=U.count;for(let k=O,F=O+z;k<F;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let P=new I,M=new I,w=new I,T=new I;function N(_){w.fromBufferAttribute(s,_),T.copy(w);let E=o[_];P.copy(E),P.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(T,E);let O=M.dot(l[_])<0?-1:1;a.setXYZW(_,P.x,P.y,P.z,O)}for(let _=0,E=b.length;_<E;++_){let U=b[_],O=U.start,z=U.count;for(let k=O,F=O+z;k<F;k+=3)N(t.getX(k+0)),N(t.getX(k+1)),N(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){let y=t.getX(h+0),S=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,y=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*u;for(let p=0;p<u;p++)h[y++]=c[f++]}return new an(h,u,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vl=new I,Hd=new I,Wd=new Wt,In=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vl.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wd.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xd=0,Ln=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=wi,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Vl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new In().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ii=new I,Ml=new I,qr=new I,Yr=new I,Hi=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ml.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Yr.copy(this.origin).sub(Ml);let r=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=Yr.dot(this.direction),l=-Yr.dot(qr),c=Yr.lengthSq(),u=Math.abs(1-a*a),d,h,f,y;if(u>0)if(d=a*l-o,h=a*o-l,y=r*u,d>=0)if(h>=-y)if(h<=y){let S=1/u;d*=S,h*=S,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ml).addScaledVector(qr,h),f}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,y=e.x-a.x,S=e.y-a.y,g=e.z-a.z,p=n.x-a.x,b=n.y-a.y,P=n.z-a.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(u),N,_,E,U,O,z,k,F,H,$,tt,ot;if(M>=w&&M>=T?(E=l,z=d,H=y,ot=p,l>=0?(N=c,_=u,U=h,O=f,k=S,F=g,$=b,tt=P):(N=u,_=c,U=f,O=h,k=g,F=S,$=P,tt=b)):w>=T?(E=c,z=h,H=S,ot=b,c>=0?(N=u,_=l,U=f,O=d,k=g,F=y,$=P,tt=p):(N=l,_=u,U=d,O=f,k=y,F=g,$=p,tt=P)):(E=u,z=f,H=g,ot=P,u>=0?(N=l,_=c,U=d,O=h,k=y,F=S,$=p,tt=b):(N=c,_=l,U=h,O=d,k=S,F=y,$=b,tt=p)),E===0)return null;let Q=N/E,rt=_/E,at=1/E,Rt=U-Q*z,It=O-rt*z,Ht=k-Q*H,Zt=F-rt*H,qt=$-Q*ot,j=tt-rt*ot,et=qt*Zt-j*Ht,ut=Rt*j-It*qt,Pt=Ht*It-Zt*Rt;if(s){if(et<0||ut<0||Pt<0)return null}else if((et<0||ut<0||Pt<0)&&(et>0||ut>0||Pt>0))return null;let Mt=et+ut+Pt;if(Mt===0)return null;let Ft=at*(et*z+ut*H+Pt*ot);return(Mt>0?Ft<0:Ft>0)?null:this.at(Ft/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},th=new re,Fi=new Hi,Zr=new Zn,eh=new I,$r=new I,Jr=new I,Kr=new I,Sl=new I,jr=new I,nh=new I,Qr=new I,vt=class extends Ce{constructor(t=new xe,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Sl.fromBufferAttribute(d,t),a?jr.addScaledVector(Sl,u):jr.addScaledVector(Sl.sub(e),u))}e.add(jr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(Zr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Zr,eh)===null||Fi.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,S=h.length;y<S;y++){let g=h[y],p=a[g.materialIndex],b=Math.max(g.start,f.start),P=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=b,w=P;M<w;M+=3){let T=o.getX(M),N=o.getX(M+1),_=o.getX(M+2);s=ta(this,p,t,n,c,u,d,T,N,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let g=y,p=S;g<p;g+=3){let b=o.getX(g),P=o.getX(g+1),M=o.getX(g+2);s=ta(this,a,t,n,c,u,d,b,P,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,S=h.length;y<S;y++){let g=h[y],p=a[g.materialIndex],b=Math.max(g.start,f.start),P=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=b,w=P;M<w;M+=3){let T=M,N=M+1,_=M+2;s=ta(this,p,t,n,c,u,d,T,N,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let g=y,p=S;g<p;g+=3){let b=g,P=g+1,M=g+2;s=ta(this,a,t,n,c,u,d,b,P,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function qd(i,t,e,n,s,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bi,o),l===null)return null;Qr.copy(o),Qr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:i}}function ta(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$r),i.getVertexPosition(l,Jr),i.getVertexPosition(c,Kr);let u=qd(i,t,e,n,$r,Jr,Kr,nh);if(u){let d=new I;_i.getBarycoord(nh,$r,Jr,Kr,d),s&&(u.uv=_i.getInterpolatedAttribute(s,o,l,c,d,new Vt)),r&&(u.uv1=_i.getInterpolatedAttribute(r,o,l,c,d,new Vt)),a&&(u.normal=_i.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};_i.getNormal($r,Jr,Kr,h.normal),u.face=h,u.barycoord=d}return u}var ar=class extends on{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ge,u=Ge,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ws=class extends an{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new re,ih=new re,ea=[],sh=new Yn,Yd=new re,Js=new vt,Ks=new Zn,Nn=class extends vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),sh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(sh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Ks.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),ih.multiplyMatrices(n,ds),Js.matrixWorld=ih,Js.raycast(t,ea);for(let a=0,o=ea.length;a<o;a++){let l=ea[a];l.instanceId=r,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,Qa,wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Oi=new Zn,Zd=new Vt(.5,.5),na=new I,Ts=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],y=r[8],S=r[9],g=r[10],p=r[11],b=r[12],P=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,p-y,w-b).normalize(),s[1].setComponents(c+a,f+u,p+y,w+b).normalize(),s[2].setComponents(c+o,f+d,p+S,w+P).normalize(),s[3].setComponents(c-o,f-d,p-S,w-P).normalize(),n)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,f-h,p-g,w-M).normalize();else if(s[4].setComponents(c-l,f-h,p-g,w-M).normalize(),e===Pn)s[5].setComponents(c+l,f+h,p+g,w+M).normalize();else if(e===ys)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);let e=Zd.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends Ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ta=new I,Aa=new I,rh=new re,js=new Hi,ia=new Zn,bl=new I,ah=new I,or=class extends Ce{constructor(t=new xe,e=new As){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ta.fromBufferAttribute(e,s-1),Aa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Aa);t.setAttribute("lineDistance",new Qt(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;rh.copy(s).invert(),js.copy(t.ray).applyMatrix4(rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),y=Math.min(u.count,a.start+a.count);for(let S=f,g=y-1;S<g;S+=c){let p=u.getX(S),b=u.getX(S+1),P=sa(this,t,js,l,p,b,S);P&&e.push(P)}if(this.isLineLoop){let S=u.getX(y-1),g=u.getX(f),p=sa(this,t,js,l,S,g,y-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let S=f,g=y-1;S<g;S+=c){let p=sa(this,t,js,l,S,S+1,S);p&&e.push(p)}if(this.isLineLoop){let S=sa(this,t,js,l,y-1,f,y-1);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ta,Aa,bl,ah)>n)return;bl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(bl);if(!(c<t.near||c>t.far))return{distance:c,point:ah.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Es=class extends Ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},oh=new re,Pl=new Hi,ra=new Zn,aa=new I,ri=class extends Ce{constructor(t=new xe,e=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;oh.copy(s).invert(),Pl.copy(t.ray).applyMatrix4(oh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let y=h,S=f;y<S;y++){let g=c.getX(y);aa.fromBufferAttribute(d,g),lh(aa,g,l,s,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let y=h,S=f;y<S;y++)aa.fromBufferAttribute(d,y),lh(aa,y,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lh(i,t,e,n,s,r,a){let o=Pl.distanceSqToPoint(i);if(o<e){let l=new I;Pl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var lr=class extends on{constructor(t=[],e=Ti,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dn=class extends on{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends on{constructor(t,e,n=Fn,s,r,a,o=Ge,l=Ge,c,u=Xn,d=1){if(u!==Xn&&u!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ea=class extends yi{constructor(t,e=Fn,n=Ti,s,r,a=Ge,o=Ge,l,c=Xn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},cr=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},He=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function y(S,g,p,b,P,M,w,T,N,_,E){let U=M/N,O=w/_,z=M/2,k=w/2,F=T/2,H=N+1,$=_+1,tt=0,ot=0,Q=new I;for(let rt=0;rt<$;rt++){let at=rt*O-k;for(let Rt=0;Rt<H;Rt++){let It=Rt*U-z;Q[S]=It*b,Q[g]=at*P,Q[p]=F,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[g]=0,Q[p]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Rt/N),d.push(1-rt/_),tt+=1}}for(let rt=0;rt<_;rt++)for(let at=0;at<N;at++){let Rt=h+at+H*rt,It=h+at+H*(rt+1),Ht=h+(at+1)+H*(rt+1),Zt=h+(at+1)+H*rt;l.push(Rt,It,Zt),l.push(It,Ht,Zt),ot+=6}o.addGroup(f,ot,E),f+=ot,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ae=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],y=0,S=[],g=n/2,p=0;b(),a===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function b(){let M=new I,w=new I,T=0,N=(e-t)/n;for(let _=0;_<=r;_++){let E=[],U=_/r,O=U*(e-t)+t;for(let z=0;z<=s;z++){let k=z/s,F=k*l+o,H=Math.sin(F),$=Math.cos(F);w.x=O*H,w.y=-U*n+g,w.z=O*$,d.push(w.x,w.y,w.z),M.set(H,N,$).normalize(),h.push(M.x,M.y,M.z),f.push(k,1-U),E.push(y++)}S.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let U=S[E][_],O=S[E+1][_],z=S[E+1][_+1],k=S[E][_+1];(t>0||E!==0)&&(u.push(U,O,k),T+=3),(e>0||E!==r-1)&&(u.push(O,z,k),T+=3)}c.addGroup(p,T,0),p+=T}function P(M){let w=y,T=new Vt,N=new I,_=0,E=M===!0?t:e,U=M===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*U,0),h.push(0,U,0),f.push(.5,.5),y++;let O=y;for(let z=0;z<=s;z++){let F=z/s*l+o,H=Math.cos(F),$=Math.sin(F);N.x=E*$,N.y=g*U,N.z=E*H,d.push(N.x,N.y,N.z),h.push(0,U,0),T.x=H*.5+.5,T.y=$*.5*U+.5,f.push(T.x,T.y),y++}for(let z=0;z<s;z++){let k=w+z,F=O+z;M===!0?u.push(F,F+1,k):u.push(F+1,F,k),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wi=class i extends Ae{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ca=class i extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let P=new I,M=new I,w=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],P),f(e[T+1],M),f(e[T+2],w),l(P,M,w,b)}function l(b,P,M,w){let T=w+1,N=[];for(let _=0;_<=T;_++){N[_]=[];let E=b.clone().lerp(M,_/T),U=P.clone().lerp(M,_/T),O=T-_;for(let z=0;z<=O;z++)z===0&&_===T?N[_][z]=E:N[_][z]=E.clone().lerp(U,z/O)}for(let _=0;_<T;_++)for(let E=0;E<2*(T-_)-1;E++){let U=Math.floor(E/2);E%2===0?(h(N[_][U+1]),h(N[_+1][U]),h(N[_][U])):(h(N[_][U+1]),h(N[_+1][U+1]),h(N[_+1][U]))}}function c(b){let P=new I;for(let M=0;M<r.length;M+=3)P.x=r[M+0],P.y=r[M+1],P.z=r[M+2],P.normalize().multiplyScalar(b),r[M+0]=P.x,r[M+1]=P.y,r[M+2]=P.z}function u(){let b=new I;for(let P=0;P<r.length;P+=3){b.x=r[P+0],b.y=r[P+1],b.z=r[P+2];let M=g(b)/2/Math.PI+.5,w=p(b)/Math.PI+.5;a.push(M,1-w)}y(),d()}function d(){for(let b=0;b<a.length;b+=6){let P=a[b+0],M=a[b+2],w=a[b+4],T=Math.max(P,M,w),N=Math.min(P,M,w);T>.9&&N<.1&&(P<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function f(b,P){let M=b*3;P.x=t[M+0],P.y=t[M+1],P.z=t[M+2]}function y(){let b=new I,P=new I,M=new I,w=new I,T=new Vt,N=new Vt,_=new Vt;for(let E=0,U=0;E<r.length;E+=9,U+=6){b.set(r[E+0],r[E+1],r[E+2]),P.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),T.set(a[U+0],a[U+1]),N.set(a[U+2],a[U+3]),_.set(a[U+4],a[U+5]),w.copy(b).add(P).add(M).divideScalar(3);let O=g(w);S(T,U+0,b,O),S(N,U+2,P,O),S(_,U+4,M,O)}}function S(b,P,M,w){w<0&&b.x===1&&(a[P]=b.x-1),M.x===0&&M.z===0&&(a[P]=w/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var hr=class i extends Ca{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ur=class i extends xe{constructor(t=[new Vt(0,-.5),new Vt(.5,0),new Vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new I,h=new Vt,f=new I,y=new I,S=new I,g=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,S.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(S.x,S.y,S.z);break;default:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.x+=S.x,f.y+=S.y,f.z+=S.z,f.normalize(),l.push(f.x,f.y,f.z),S.copy(y)}for(let b=0;b<=e;b++){let P=n+b*u*s,M=Math.sin(P),w=Math.cos(P);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*M,d.y=t[T].y,d.z=t[T].x*w,a.push(d.x,d.y,d.z),h.x=b/e,h.y=T/(t.length-1),o.push(h.x,h.y);let N=l[3*T+0]*M,_=l[3*T+1],E=l[3*T+0]*w;c.push(N,_,E)}}for(let b=0;b<e;b++)for(let P=0;P<t.length-1;P++){let M=P+b*t.length,w=M,T=M+t.length,N=M+t.length+1,_=M+1;r.push(w,T,_),r.push(N,_,T)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ze=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],y=[],S=[],g=[];for(let p=0;p<u;p++){let b=p*h-a;for(let P=0;P<c;P++){let M=P*d-r;y.push(M,-b,0),S.push(0,0,1),g.push(P/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let P=b+c*p,M=b+c*(p+1),w=b+1+c*(p+1),T=b+1+c*p;f.push(P,M,T),f.push(M,w,T)}this.setIndex(f),this.setAttribute("position",new Qt(y,3)),this.setAttribute("normal",new Qt(S,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var un=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,h=new I,f=[],y=[],S=[],g=[];for(let p=0;p<=n;p++){let b=[],P=p/n,M=a+P*o,w=t*Math.cos(M),T=Math.sqrt(t*t-w*w),N=0;p===0&&a===0?N=.5/e:p===n&&l===Math.PI&&(N=-.5/e);for(let _=0;_<=e;_++){let E=_/e,U=s+E*r;d.x=-T*Math.cos(U),d.y=w,d.z=T*Math.sin(U),y.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),g.push(E+N,1-P),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let P=u[p][b+1],M=u[p][b],w=u[p+1][b],T=u[p+1][b+1];(p!==0||a>0)&&f.push(P,M,T),(p!==n-1||l<Math.PI)&&f.push(M,w,T)}this.setIndex(f),this.setAttribute("position",new Qt(y,3)),this.setAttribute("normal",new Qt(S,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cs=class i extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,f=new I,y=new I;for(let S=0;S<=n;S++){let g=a+S/n*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(b),f.y=(t+e*Math.cos(g))*Math.sin(b),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),y.subVectors(f,h).normalize(),u.push(y.x,y.y,y.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let g=1;g<=s;g++){let p=(s+1)*S+g-1,b=(s+1)*(S-1)+g-1,P=(s+1)*(S-1)+g,M=(s+1)*S+g;l.push(p,b,M),l.push(b,P,M)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ch(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let s in n)t[s]=n[s]}return t}function ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $d(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ic(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var nu={clone:$i,merge:Qe},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ra=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ae=class extends Ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var dr=class extends Ln{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=qa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ia=class extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},La=class extends vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rl:r=t,o=2*e-n;break;case Il:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rl:a=t,l=2*n-e;break;case Il:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,y=(n-e)/(s-e),S=y*y,g=S*y,p=-h*g+2*h*S-h*y,b=(1+h)*g+(-1.5-2*h)*S+(-.5+h)*y+1,P=(-1-f)*g+(1.5+f)*S+.5*y,M=f*g-f*S;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+b*a[c+w]+P*a[l+w]+M*a[d+w];return r}},Na=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Da=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ua=class extends vi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let y=(n-e)/(s-e),S=1-y;for(let g=0;g!==o;++g)r[g]=a[c+g]*S+a[l+g]*y;return r}let h=o*2,f=t-1;for(let y=0;y!==o;++y){let S=a[c+y],g=a[l+y],p=f*h+y*2,b=d[p],P=d[p+1],M=t*h+y*2,w=u[M],T=u[M+1],N=Qd(n,e,b,w,s);r[y]=iu(N,S,P,T,g)}return r}};function iu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function jd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Qd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=iu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=jd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fs(e,this.TimeBufferType),this.values=fs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fs(t.times,Array),values:fs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),wl(t.settings)&&(n.settings={inTangents:fs(t.settings.inTangents,Array),outTangents:fs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case ha:e=this.InterpolantFactoryMethodSmooth;break;case El:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return ha;case this.InterpolantFactoryMethodBezier:return El}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;wl(this.settings)&&(hh(this.settings.inTangents,t),hh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Cd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ha,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let y=0;y!==n;++y){let S=e[d+y];if(S!==e[h+y]||S!==e[f+y]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=va;var Mi=class extends xn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Qs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};Fa.prototype.ValueTypeName="color";var Oa=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="number";var Ba=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Le.slerpFlat(r,0,a,c-o,a,c,l);return r}},fr=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends xn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Qs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="vector";var ka=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],y=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},su=new ka,Va=class{constructor(t){this.manager=t!==void 0?t:su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},pr=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tl=new re,uh=new I,dh=new I,mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(uh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ys||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oa=new I,la=new Le,Hn=new I,gr=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,la,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oa,la,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new I,fh=new Vt,ph=new Vt,qe=class extends gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,fh,ph),e.subVectors(ph,fh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ll=class extends mr{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},Xi=class extends Rs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ll}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Is=class extends gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nl=class extends mr{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Nl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ca,Ga=class{static getContext(){return ca===void 0&&(ca=new(window.AudioContext||window.webkitAudioContext)),ca}static setContext(t){ca=t}};var ps=-90,ms=1,Ha=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new qe(ps,ms,t,e);r.layers=this.layers,this.add(r);let a=new qe(ps,ms,t,e);a.layers=this.layers,this.add(a);let o=new qe(ps,ms,t,e);o.layers=this.layers,this.add(o);let l=new qe(ps,ms,t,e);l.layers=this.layers,this.add(l);let c=new qe(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Wa=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Xa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=tf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function tf(){this._document.hidden===!1&&this.reset()}var Bi=new I,Al=new Le,ef=new I,zi=new I,ki=new I,xr=class extends Ce{constructor(){super(),this.type="AudioListener",this.context=Ga.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Xa}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Bi,Al,ef),zi.set(0,0,-1).applyQuaternion(Al),ki.set(0,1,0).applyQuaternion(Al),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Bi.x,n),e.positionY.linearRampToValueAtTime(Bi.y,n),e.positionZ.linearRampToValueAtTime(Bi.z,n),e.forwardX.linearRampToValueAtTime(zi.x,n),e.forwardY.linearRampToValueAtTime(zi.y,n),e.forwardZ.linearRampToValueAtTime(zi.z,n),e.upX.linearRampToValueAtTime(ki.x,n),e.upY.linearRampToValueAtTime(ki.y,n),e.upZ.linearRampToValueAtTime(ki.z,n)}else e.setPosition(Bi.x,Bi.y,Bi.z),e.setOrientation(zi.x,zi.y,zi.z,ki.x,ki.y,ki.z)}};var sc="\\[\\]\\.:\\/",nf=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",sf="[^"+sc.replace("\\.","")+"]",rf=/((?:WC+[\/:])*)/.source.replace("WC",rc),af=/(WCOD+)?/.source.replace("WCOD",sf),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),cf=new RegExp("^"+rf+af+of+lf+"$"),hf=["material","materials","bones","map"],Dl=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nf,"")}static parseTrackName(t){let e=cf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Dl;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ex=new Float32Array(1);var mh=new re,_r=class{constructor(t,e,n=0,s=1/0){this.ray=new Hi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(t,e=!0,n=[]){return Ul(t,this,n,e),n.sort(gh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ul(t[s],this,n,e);return n.sort(gh),n}};function gh(i,t){return i.distance-t.distance}function Ul(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ul(r[a],t,e,!0)}}var Fl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function ac(i,t,e,n){let s=uf(n);switch(e){case Ql:return i*t;case Qa:return i*t/s.components*s.byteLength;case to:return i*t/s.components*s.byteLength;case Ci:return i*t*2/s.components*s.byteLength;case eo:return i*t*2/s.components*s.byteLength;case tc:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case no:return i*t*4/s.components*s.byteLength;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:case ao:return Math.max(i,16)*Math.max(t,8)/4;case io:case ro:return Math.max(i,8)*Math.max(t,8)/2;case oo:case lo:case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:case Ar:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Co:case Ro:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Po:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Er:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uf(i){switch(i){case dn:case $l:return{byteLength:1,components:1};case Ns:case Jl:case On:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case Fn:case Ja:case wn:return{byteLength:4,components:1};case Kl:case jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Au(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _f(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,y)=>f.start-y.start);let h=0;for(let f=1;f<d.length;f++){let y=d[h],S=d[f];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,y=d.length;f<y;f++){let S=d[f];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,Nf=`#ifdef USE_BUMPMAP
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
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
#endif`,xp=`uniform sampler2D dfgLUT;
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
}`,_p=`
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Jm=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:yf,alphahash_pars_fragment:vf,alphamap_fragment:Mf,alphamap_pars_fragment:Sf,alphatest_fragment:bf,alphatest_pars_fragment:wf,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:Ef,batching_vertex:Cf,begin_vertex:Rf,beginnormal_vertex:If,bsdfs:Pf,iridescence_fragment:Lf,bumpmap_pars_fragment:Nf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:zf,color_pars_vertex:kf,color_vertex:Vf,common:Gf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:qf,emissivemap_fragment:Yf,emissivemap_pars_fragment:Zf,colorspace_fragment:$f,colorspace_pars_fragment:Jf,envmap_fragment:Kf,envmap_common_pars_fragment:jf,envmap_pars_fragment:Qf,envmap_pars_vertex:tp,envmap_physical_pars_fragment:up,envmap_vertex:ep,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_pars_fragment:op,lights_lambert_fragment:lp,lights_lambert_pars_fragment:cp,lights_pars_begin:hp,lights_toon_fragment:dp,lights_toon_pars_fragment:fp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:xp,lights_fragment_begin:_p,lights_fragment_maps:yp,lights_fragment_end:vp,lightprobes_pars_fragment:Mp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Tp,map_fragment:Ap,map_pars_fragment:Ep,map_particle_fragment:Cp,map_particle_pars_fragment:Rp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Lp,morphcolor_vertex:Np,morphnormal_vertex:Dp,morphtarget_pars_vertex:Up,morphtarget_vertex:Fp,normal_fragment_begin:Op,normal_fragment_maps:Bp,normal_pars_fragment:zp,normal_pars_vertex:kp,normal_vertex:Vp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:Zp,premultiplied_alpha_fragment:$p,project_vertex:Jp,dithering_fragment:Kp,dithering_pars_fragment:jp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:xm,worldpos_vertex:_m,background_vert:ym,background_frag:vm,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:bm,cube_frag:wm,depth_vert:Tm,depth_frag:Am,distance_vert:Em,distance_frag:Cm,equirect_vert:Rm,equirect_frag:Im,linedashed_vert:Pm,linedashed_frag:Lm,meshbasic_vert:Nm,meshbasic_frag:Dm,meshlambert_vert:Um,meshlambert_frag:Fm,meshmatcap_vert:Om,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:km,meshphong_vert:Vm,meshphong_frag:Gm,meshphysical_vert:Hm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:Zm,shadow_vert:$m,shadow_frag:Jm,sprite_vert:Km,sprite_frag:jm},xt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Kn={basic:{uniforms:Qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Qe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Qe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Qe([xt.points,xt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Qe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Qe([xt.common,xt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Qe([xt.sprite,xt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Qe([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Qe([xt.lights,xt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Kn.physical={uniforms:Qe([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Fo={r:0,b:0,g:0},Qm=new re,Eu=new Wt;Eu.set(-1,0,0,0,1,0,0,0,1);function t0(i,t,e,n,s,r){let a=new Gt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(b){let P=b.isScene===!0?b.background:null;if(P&&P.isTexture){let M=b.backgroundBlurriness>0;P=t.get(P,M)}return P}function y(b){let P=!1,M=f(b);M===null?g(a,o):M&&M.isColor&&(g(M,1),P=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,P){let M=f(P);M&&(M.isCubeTexture||M.mapping===vr)?(c===void 0&&(c=new vt(new He(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:$i(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eu),c.material.toneMapped=ie.getTransfer(M.colorSpace)!==fe,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new vt(new Ze(2,2),new We({name:"BackgroundMaterial",uniforms:$i(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=ie.getTransfer(M.colorSpace)!==fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,P){b.getRGB(Fo,ic(i)),e.buffers.color.setClear(Fo.r,Fo.g,Fo.b,P,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,P=1){a.set(b),o=P,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:y,addToRenderList:S,dispose:p}}function e0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(O,z,k,F,H){let $=!1,tt=d(O,F,k,z);r!==tt&&(r=tt,c(r.object)),$=f(O,F,k,H),$&&y(O,F,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(O,z,k,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function u(O){return i.deleteVertexArray(O)}function d(O,z,k,F){let H=F.wireframe===!0,$=n[z.id];$===void 0&&($={},n[z.id]=$);let tt=O.isInstancedMesh===!0?O.id:0,ot=$[tt];ot===void 0&&(ot={},$[tt]=ot);let Q=ot[k.id];Q===void 0&&(Q={},ot[k.id]=Q);let rt=Q[H];return rt===void 0&&(rt=h(l()),Q[H]=rt),rt}function h(O){let z=[],k=[],F=[];for(let H=0;H<e;H++)z[H]=0,k[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:F,object:O,attributes:{},index:null}}function f(O,z,k,F){let H=r.attributes,$=z.attributes,tt=0,ot=k.getAttributes();for(let Q in ot)if(ot[Q].location>=0){let at=H[Q],Rt=$[Q];if(Rt===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(Rt=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(Rt=O.instanceColor)),at===void 0||at.attribute!==Rt||Rt&&at.data!==Rt.data)return!0;tt++}return r.attributesNum!==tt||r.index!==F}function y(O,z,k,F){let H={},$=z.attributes,tt=0,ot=k.getAttributes();for(let Q in ot)if(ot[Q].location>=0){let at=$[Q];at===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(at=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(at=O.instanceColor));let Rt={};Rt.attribute=at,at&&at.data&&(Rt.data=at.data),H[Q]=Rt,tt++}r.attributes=H,r.attributesNum=tt,r.index=F}function S(){let O=r.newAttributes;for(let z=0,k=O.length;z<k;z++)O[z]=0}function g(O){p(O,0)}function p(O,z){let k=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;k[O]=1,F[O]===0&&(i.enableVertexAttribArray(O),F[O]=1),H[O]!==z&&(i.vertexAttribDivisor(O,z),H[O]=z)}function b(){let O=r.newAttributes,z=r.enabledAttributes;for(let k=0,F=z.length;k<F;k++)z[k]!==O[k]&&(i.disableVertexAttribArray(k),z[k]=0)}function P(O,z,k,F,H,$,tt){tt===!0?i.vertexAttribIPointer(O,z,k,H,$):i.vertexAttribPointer(O,z,k,F,H,$)}function M(O,z,k,F){S();let H=F.attributes,$=k.getAttributes(),tt=z.defaultAttributeValues;for(let ot in $){let Q=$[ot];if(Q.location>=0){let rt=H[ot];if(rt===void 0&&(ot==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),ot==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor)),rt!==void 0){let at=rt.normalized,Rt=rt.itemSize,It=t.get(rt);if(It===void 0)continue;let Ht=It.buffer,Zt=It.type,qt=It.bytesPerElement,j=Zt===i.INT||Zt===i.UNSIGNED_INT||rt.gpuType===Ja;if(rt.isInterleavedBufferAttribute){let et=rt.data,ut=et.stride,Pt=rt.offset;if(et.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Q.locationSize;Mt++)p(Q.location+Mt,et.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Mt=0;Mt<Q.locationSize;Mt++)g(Q.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Mt=0;Mt<Q.locationSize;Mt++)P(Q.location+Mt,Rt/Q.locationSize,Zt,at,ut*qt,(Pt+Rt/Q.locationSize*Mt)*qt,j)}else{if(rt.isInstancedBufferAttribute){for(let et=0;et<Q.locationSize;et++)p(Q.location+et,rt.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<Q.locationSize;et++)g(Q.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let et=0;et<Q.locationSize;et++)P(Q.location+et,Rt/Q.locationSize,Zt,at,Rt*qt,Rt/Q.locationSize*et*qt,j)}}else if(tt!==void 0){let at=tt[ot];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(Q.location,at);break;case 3:i.vertexAttrib3fv(Q.location,at);break;case 4:i.vertexAttrib4fv(Q.location,at);break;default:i.vertexAttrib1fv(Q.location,at)}}}}b()}function w(){E();for(let O in n){let z=n[O];for(let k in z){let F=z[k];for(let H in F){let $=F[H];for(let tt in $)u($[tt].object),delete $[tt];delete F[H]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let z=n[O.id];for(let k in z){let F=z[k];for(let H in F){let $=F[H];for(let tt in $)u($[tt].object),delete $[tt];delete F[H]}}delete n[O.id]}function N(O){for(let z in n){let k=n[z];for(let F in k){let H=k[F];if(H[O.id]===void 0)continue;let $=H[O.id];for(let tt in $)u($[tt].object),delete $[tt];delete H[O.id]}}}function _(O){for(let z in n){let k=n[z],F=O.isInstancedMesh===!0?O.id:0,H=k[F];if(H!==void 0){for(let $ in H){let tt=H[$];for(let ot in tt)u(tt[ot].object),delete tt[ot];delete H[$]}delete k[F],Object.keys(k).length===0&&delete n[z]}}}function E(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:N,initAttributes:S,enableAttribute:g,disableUnusedAttributes:b}}function n0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function i0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Tn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){let _=N===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==dn&&N!==wn&&!_&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:M,maxSamples:w,samples:T}}function s0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new In,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let y=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||y===null||y.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,P=b*4,M=p.clippingState||null;l.value=M,M=u(y,h,P,f);for(let w=0;w!==P;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,y){let S=d!==null?d.length:0,g=null;if(S!==0){if(g=l.value,y!==!0||g===null){let p=f+S*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let P=0,M=f;P!==S;++P,M+=4)a.copy(d[P]).applyMatrix4(b,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var Fs=4,r0=6,a0=20,o0=256,Ir=new Is,ru=new Gt,oc=null,lc=0,cc=0,hc=!1,l0=new I,Ji=new I,Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=l0}=r;oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oc,lc,cc),this._renderer.xr.enabled=hc,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:On,format:Tn,colorSpace:tr,depthBuffer:!1},s=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=c0(r)),this._blurMaterial=u0(r,t,e),this._ggxMaterial=h0(r,t,e)}return s}_compileMaterial(t){let e=new vt(new xe,t);this._renderer.compile(e,Ir)}_sceneToCubeUV(t,e,n,s,r){let l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ru),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new He,new hn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,g=S.material,p=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,p=!0):(g.color.copy(ru),p=!0);for(let P=0;P<6;P++){let M=P%3;M===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):M===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));let w=this._cubeSize;Us(s,M*w,P>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(S,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ti||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ir)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:y}=this,S=this._sizeLods[n],g=3*S*(n>y-Fs?n-y+Fs:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=y-e,Us(r,g,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Ir),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=y-n,Us(t,g,p,3*S,2*S),s.setRenderTarget(t),s.render(o,Ir)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Fs?s-this._lodMax+Fs:0),h=4*(this._cubeSize-u);Us(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Ir)}};function c0(i){let t=[],e=[],n=i,s=i-Fs+1+r0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,y=new Float32Array(f*h*d),S=new Float32Array(f*h*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,P=p>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];y.set(M,f*h*p);for(let w=0;w<h;w++){let T=u[w*2]*2-1,N=u[w*2+1]*2-1;p===0?Ji.set(1,N,T):p===1?Ji.set(-T,1,-N):p===2?Ji.set(-T,N,1):p===3?Ji.set(-1,N,-T):p===4?Ji.set(-T,-1,N):Ji.set(T,N,-1),Ji.toArray(S,(p*h+w)*f)}}let g=new xe;g.setAttribute("position",new an(y,f)),g.setAttribute("outputDirection",new an(S,f)),e.push(new vt(g,null)),n>Fs&&n--}return{lodMeshes:e,sizeLods:t}}function au(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function h0(i,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function u0(i,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:a0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ou(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function lu(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bo=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:$n});r.uniforms.tEquirect.value=e;let a=new vt(s,r),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Ye),new Ha(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function d0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ya||f===Za)if(t.has(h)){let y=t.get(h).texture;return o(y,h.mapping)}else{let y=h.image;if(y&&y.height>0){let S=new Bo(y.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,y=f===Ya||f===Za,S=f===Ti||f===Zi;if(y||S){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Bs(i)),g=y?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let b=h.image;return y&&b&&b.height>0||S&&b&&l(b)?(n===null&&(n=new Bs(i)),g=y?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===Ya?h.mapping=Ti:f===Za&&(h.mapping=Zi),h}function l(h){let f=0,y=6;for(let S=0;S<y;S++)h[S]!==void 0&&f++;return f===y}function c(h){let f=h.target;f.removeEventListener("dispose",c);let y=t.get(f);y!==void 0&&(t.delete(f),y.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let y=e.get(f);y!==void 0&&(e.delete(f),y.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function f0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vi("WebGLRenderer: "+n+" extension not supported."),s}}}function p0(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let y in h.attributes)t.remove(h.attributes[y]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,y=d.attributes.position,S=0;if(y===void 0)return;if(f!==null){let b=f.array;S=f.version;for(let P=0,M=b.length;P<M;P+=3){let w=b[P+0],T=b[P+1],N=b[P+2];h.push(w,T,T,N,N,w)}}else{let b=y.array;S=y.version;for(let P=0,M=b.length/3-1;P<M;P+=3){let w=P+0,T=P+1,N=P+2;h.push(w,T,T,N,N,w)}}let g=new(y.count>=65535?rr:sr)(h,1);g.version=S;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function m0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let S=0;for(let g=0;g<f;g++)S+=h[g];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function g0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function x0(i,t,e){let n=new WeakMap,s=new Se;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let E=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],P=0;f===!0&&(P=1),y===!0&&(P=2),S===!0&&(P=3);let M=o.attributes.position.count*P,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*w*4*d),N=new ir(T,M,w,d);N.type=wn,N.needsUpdate=!0;let _=P*4;for(let U=0;U<d;U++){let O=g[U],z=p[U],k=b[U],F=M*w*4*U;for(let H=0;H<O.count;H++){let $=H*_;f===!0&&(s.fromBufferAttribute(O,H),T[F+$+0]=s.x,T[F+$+1]=s.y,T[F+$+2]=s.z,T[F+$+3]=0),y===!0&&(s.fromBufferAttribute(z,H),T[F+$+4]=s.x,T[F+$+5]=s.y,T[F+$+6]=s.z,T[F+$+7]=0),S===!0&&(s.fromBufferAttribute(k,H),T[F+$+8]=s.x,T[F+$+9]=s.y,T[F+$+10]=s.z,T[F+$+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:N,size:new Vt(M,w)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let y=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function _0(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var y0={[Gl]:"LINEAR_TONE_MAPPING",[Hl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[yr]:"ACES_FILMIC_TONE_MAPPING",[ql]:"AGX_TONE_MAPPING",[Yl]:"NEUTRAL_TONE_MAPPING",[Xl]:"CUSTOM_TONE_MAPPING"};function v0(i,t,e,n,s,r){let a=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new xe;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let u=new Ra({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new vt(c,u),h=new Is(-1,1,1,-1,0,1),f=null,y=null,S=!1,g,p=null,b=[],P=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let T=0;T<b.length;T++){let N=b[T];N.setSize&&N.setSize(M,w)}},this.setEffects=function(M){b=M,P=b.length>0&&b[0].isRenderPass===!0;let w=a.width,T=a.height;b.length>0&&o===null&&(o=new cn(w,T,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new cn(w,T,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<b.length;N++){let _=b[N];_.setSize&&_.setSize(w,T)}},this.begin=function(M,w){if(S||M.toneMapping===Un&&b.length===0)return!1;if(p=w,w!==null){let T=w.width,N=w.height;(a.width!==T||a.height!==N)&&this.setSize(T,N)}return P===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=Un,!0},this.hasRenderPass=function(){return P},this.end=function(M,w){M.toneMapping=g,S=!0;let T=a,N=o;for(let _=0;_<b.length;_++){let E=b[_];E.enabled!==!1&&(E.render(M,N,T,w),E.needsSwap!==!1&&(T=N,N=N===o?l:o))}if(f!==M.outputColorSpace||y!==M.toneMapping){f=M.outputColorSpace,y=M.toneMapping,u.defines={},ie.getTransfer(f)===fe&&(u.defines.SRGB_TRANSFER="");let _=y0[y];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(p),M.render(d,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Cu=new on,fc=new yi(1,1),Ru=new ir,Iu=new wa,Pu=new lr,cu=[],hu=[],uu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vo(i,t){let e=hu[t];e===void 0&&(e=new Int32Array(t),hu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function T0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),Oe(e,n)}}function A0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),Oe(e,n)}}function E0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),Oe(e,n)}}function C0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function L0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function F0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fc.compareFunction=e.isReversedDepthBuffer()?Uo:Do,r=fc):r=Cu,e.setTexture2D(t||r,s)}function O0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Iu,s)}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pu,s)}function z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ru,s)}function k0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return b0;case 35666:return w0;case 35674:return T0;case 35675:return A0;case 35676:return E0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return I0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return N0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function V0(i,t){i.uniform1fv(this.addr,t)}function G0(i,t){let e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function H0(i,t){let e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function W0(i,t){let e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function X0(i,t){let e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function q0(i,t){let e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Y0(i,t){let e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Z0(i,t){i.uniform1iv(this.addr,t)}function $0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function K0(i,t){i.uniform4iv(this.addr,t)}function j0(i,t){i.uniform1uiv(this.addr,t)}function Q0(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fc:a=Cu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ig(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Iu,r[a])}function sg(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Pu,r[a])}function rg(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ru,r[a])}function ag(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return H0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return Z0;case 35667:case 35671:return $0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return j0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}var pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}},mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}},gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},uc=/(\w+)(\])?(\[|\.)?/g;function pu(i,t){i.seq.push(t),i.map[t.id]=t}function og(i,t,e){let n=i.name,s=n.length;for(uc.lastIndex=0;;){let r=uc.exec(n),a=uc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pu(e,c===void 0?new pc(o,i,t):new mc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new gc(o),pu(e,d)),e=d}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);og(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function mu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lg=37297,cg=0;function hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var gu=new Wt;function ug(i){ie._getMatrix(gu,ie.workingColorSpace,i);let t=`mat3( ${gu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hg(i.getShaderSource(t),o)}else return r}function dg(i,t){let e=ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var fg={[Gl]:"Linear",[Hl]:"Reinhard",[Wl]:"Cineon",[yr]:"ACESFilmic",[ql]:"AgX",[Yl]:"Neutral",[Xl]:"Custom"};function pg(i,t){let e=fg[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oo=new I;function mg(){ie.getLuminanceCoefficients(Oo);let i=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function xg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Lr(i){return i!==""}function _u(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(i){return i.replace(yg,Mg)}var vg=new Map;function Mg(i,t){let e=te[t];if(e===void 0){let n=vg.get(t);if(n!==void 0)e=te[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xc(e)}var Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(Sg,bg)}function bg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var wg={[qi]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function Tg(i){return wg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ag={[Ti]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE_UV"};function Eg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ag[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Cg={[Zi]:"ENVMAP_MODE_REFRACTION"};function Rg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ig={[qa]:"ENVMAP_BLENDING_MULTIPLY",[Bh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function Pg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ig[i.combine]||"ENVMAP_BLENDING_NONE"}function Lg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ng(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Tg(e),c=Eg(e),u=Rg(e),d=Pg(e),h=Lg(e),f=gg(e),y=xg(r),S=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Lr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(g=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?te.tonemapping_pars_fragment:"",e.toneMapping!==Un?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,dg("linearToOutputTexel",e.outputColorSpace),mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),a=xc(a),a=_u(a,e),a=yu(a,e),o=xc(o),o=_u(o,e),o=yu(o,e),a=vu(a),o=vu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let P=b+g+a,M=b+p+o,w=mu(s,s.VERTEX_SHADER,P),T=mu(s,s.FRAGMENT_SHADER,M);s.attachShader(S,w),s.attachShader(S,T),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function N(O){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(S)||"",k=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(T)||"",H=z.trim(),$=k.trim(),tt=F.trim(),ot=!0,Q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,w,T);else{let rt=xu(s,w,"vertex"),at=xu(s,T,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+rt+`
`+at)}else H!==""?zt("WebGLProgram: Program Info Log:",H):($===""||tt==="")&&(Q=!1);Q&&(O.diagnostics={runnable:ot,programLog:H,vertexShader:{log:$,prefix:g},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(w),s.deleteShader(T),_=new Os(s,S),E=_g(s,S)}let _;this.getUniforms=function(){return _===void 0&&N(this),_};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(S,lg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=T,this}var Dg=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yc(t),e.set(t,n)),n}},yc=class{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}};function Ug(i){return i===Ci||i===Ar||i===Er}function Fg(i,t,e,n,s,r){let a=new Ss,o=new _c,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,E,U,O,z,k){let F=O.fog,H=z.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?O.environment:null,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ot=t.get(_.envMap||$,tt),Q=ot&&ot.mapping===vr?ot.image.height:null,rt=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rt=at!==void 0?at.length:0,It=0;H.morphAttributes.position!==void 0&&(It=1),H.morphAttributes.normal!==void 0&&(It=2),H.morphAttributes.color!==void 0&&(It=3);let Ht,Zt,qt,j;if(rt){let At=Kn[rt];Ht=At.vertexShader,Zt=At.fragmentShader}else{Ht=_.vertexShader,Zt=_.fragmentShader;let At=o.getVertexShaderStage(_),Lt=o.getFragmentShaderStage(_);o.update(_,At,Lt),qt=At.id,j=Lt.id}let et=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,Mt=z.isBatchedMesh===!0,Ft=!!_.map,ft=!!_.matcap,Bt=!!ot,Jt=!!_.aoMap,ne=!!_.lightMap,Yt=!!_.bumpMap&&_.wireframe===!1,he=!!_.normalMap,ve=!!_.displacementMap,Ie=!!_.emissiveMap,nt=!!_.metalnessMap,dt=!!_.roughnessMap,L=_.anisotropy>0,Nt=_.clearcoat>0,St=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,V=_.sheen>0,q=_.transmission>0,K=L&&!!_.anisotropyMap,ct=Nt&&!!_.clearcoatMap,ht=Nt&&!!_.clearcoatNormalMap,it=Nt&&!!_.clearcoatRoughnessMap,J=x&&!!_.iridescenceMap,gt=x&&!!_.iridescenceThicknessMap,bt=V&&!!_.sheenColorMap,mt=V&&!!_.sheenRoughnessMap,pt=!!_.specularMap,Dt=!!_.specularColorMap,Ot=!!_.specularIntensityMap,Xt=q&&!!_.transmissionMap,m=q&&!!_.thicknessMap,D=!!_.gradientMap,R=!!_.alphaMap,A=_.alphaTest>0,Z=!!_.alphaHash,G=!!_.extensions,st=Un;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(st=i.toneMapping);let lt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:Ht,fragmentShader:Zt,defines:_.defines,customVertexShaderID:qt,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:ft,envMap:Bt,envMapMode:Bt&&ot.mapping,envMapCubeUVHeight:Q,aoMap:Jt,lightMap:ne,bumpMap:Yt,normalMap:he,displacementMap:ve,emissiveMap:Ie,normalMapObjectSpace:he&&_.normalMapType===Gh,normalMapTangentSpace:he&&_.normalMapType===Cr,packedNormalMap:he&&_.normalMapType===Cr&&Ug(_.normalMap.format),metalnessMap:nt,roughnessMap:dt,anisotropy:L,anisotropyMap:K,clearcoat:Nt,clearcoatMap:ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:it,dispersion:St,retroreflection:C,iridescence:x,iridescenceMap:J,iridescenceThicknessMap:gt,sheen:V,sheenColorMap:bt,sheenRoughnessMap:mt,specularMap:pt,specularColorMap:Dt,specularIntensityMap:Ot,transmission:q,transmissionMap:Xt,thicknessMap:m,gradientMap:D,opaque:_.transparent===!1&&_.blending===wi&&_.alphaToCoverage===!1,alphaMap:R,alphaTest:A,alphaHash:Z,combine:_.combine,mapUv:Ft&&y(_.map.channel),aoMapUv:Jt&&y(_.aoMap.channel),lightMapUv:ne&&y(_.lightMap.channel),bumpMapUv:Yt&&y(_.bumpMap.channel),normalMapUv:he&&y(_.normalMap.channel),displacementMapUv:ve&&y(_.displacementMap.channel),emissiveMapUv:Ie&&y(_.emissiveMap.channel),metalnessMapUv:nt&&y(_.metalnessMap.channel),roughnessMapUv:dt&&y(_.roughnessMap.channel),anisotropyMapUv:K&&y(_.anisotropyMap.channel),clearcoatMapUv:ct&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:mt&&y(_.sheenRoughnessMap.channel),specularMapUv:pt&&y(_.specularMap.channel),specularColorMapUv:Dt&&y(_.specularColorMap.channel),specularIntensityMapUv:Ot&&y(_.specularIntensityMap.channel),transmissionMapUv:Xt&&y(_.transmissionMap.channel),thicknessMapUv:m&&y(_.thicknessMap.channel),alphaMapUv:R&&y(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(he||L),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Ft||R),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&he===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:It,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Ie&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Sn,flipSided:_.side===Ue,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:G&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(G&&_.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)E.push(U),E.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(E,_),b(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function P(_){let E=f[_.type],U;if(E){let O=Kn[E];U=nu.clone(O.uniforms)}else U=_.uniforms;return U}function M(_,E){let U=u.get(E);return U!==void 0?++U.usedTimes:(U=new Ng(i,E,_,s),c.push(U),u.set(E,U)),U}function w(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function N(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:N}}function Og(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,y,S,g,p){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:f,material:y,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:g,group:p},i[t]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=y,b.materialVariant=a(h),b.groupOrder=S,b.renderOrder=h.renderOrder,b.z=g,b.group=p),t++,b}function l(h,f,y,S,g,p,b){b.reversedDepth===!0&&(g=-g);let P=o(h,f,y,S,g,p);y.transmission>0?n.push(P):y.transparent===!0?s.push(P):e.push(P)}function c(h,f,y,S,g,p){let b=o(h,f,y,S,g,p);y.transmission>0?n.unshift(b):y.transparent===!0?s.unshift(b):e.unshift(b)}function u(h,f){e.length>1&&e.sort(h||Bg),n.length>1&&n.sort(f||Su),s.length>1&&s.sort(f||Su)}function d(){for(let h=t,f=i.length;h<f;h++){let y=i[h];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function zg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bu,i.set(n,[a])):s>=r.length?(a=new bu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Gg=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wg(i){let t=new kg,e=Vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new re,a=new re;function o(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,y=0,S=0,g=0,p=0,b=0,P=0,M=0,w=0,T=0,N=0,_=0,E=0,U=0;c.sort(Hg);for(let z=0,k=c.length;z<k;z++){let F=c[z],H=F.color,$=F.intensity,tt=F.distance,ot=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ci?ot=F.shadow.map.texture:ot=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=H.r*$,d+=H.g*$,h+=H.b*$;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(F.sh.coefficients[Q],$);U++}else if(F.isSunLight){let Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let rt=F.shadow,at=e.get(F);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[y]=at,n.sunShadowMap[y]=ot;let Rt=rt.getViewportCount();for(let It=0;It<Rt;It++)n.sunShadowMatrix[S+It]=rt.getMatrix(It),n.sunShadowCascade[S+It]=rt._cascadeData[It];S+=Rt,y++}n.sun[f]=Q,f++}else if(F.isDirectionalLight){let Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let rt=F.shadow,at=e.get(F);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,n.directionalShadow[g]=at,n.directionalShadowMap[g]=ot,n.directionalShadowMatrix[g]=F.shadow.matrix,w++}n.directional[g]=Q,g++}else if(F.isSpotLight){let Q=t.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(H).multiplyScalar($),Q.distance=tt,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,n.spot[b]=Q;let rt=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,rt.updateMatrices(F),F.castShadow&&E++),n.spotLightMatrix[b]=rt.matrix,F.castShadow){let at=e.get(F);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,n.spotShadow[b]=at,n.spotShadowMap[b]=ot,N++}b++}else if(F.isRectAreaLight){let Q=t.get(F);Q.color.copy(H).multiplyScalar($),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),n.rectArea[P]=Q,P++}else if(F.isPointLight){let Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){let rt=F.shadow,at=e.get(F);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,at.shadowCameraNear=rt.camera.near,at.shadowCameraFar=rt.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=F.shadow.matrix,T++}n.point[p]=Q,p++}else if(F.isHemisphereLight){let Q=t.get(F);Q.skyColor.copy(F.color).multiplyScalar($),Q.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[M]=Q,M++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let O=n.hash;(O.sunLength!==f||O.directionalLength!==g||O.pointLength!==p||O.spotLength!==b||O.rectAreaLength!==P||O.hemiLength!==M||O.numSunShadows!==y||O.numDirectionalShadows!==w||O.numPointShadows!==T||O.numSpotShadows!==N||O.numSpotMaps!==_||O.numLightProbes!==U)&&(n.sun.length=f,n.directional.length=g,n.spot.length=b,n.rectArea.length=P,n.point.length=p,n.hemi.length=M,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=U,O.sunLength=f,O.directionalLength=g,O.pointLength=p,O.spotLength=b,O.rectAreaLength=P,O.hemiLength=M,O.numSunShadows=y,O.numDirectionalShadows=w,O.numPointShadows=T,O.numSpotShadows=N,O.numSpotMaps=_,O.numLightProbes=U,n.version=Gg++)}function l(c,u){let d=0,h=0,f=0,y=0,S=0,g=0,p=u.matrixWorldInverse;for(let b=0,P=c.length;b<P;b++){let M=c[b];if(M.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(M.isSpotLight){let w=n.spot[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),y++}else if(M.isRectAreaLight){let w=n.rectArea[S];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function wu(i){let t=new Wg(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Xg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new wu(i),t.set(s,[o])):r>=a.length?(o=new wu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`,Zg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],$g=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Tu=new re,Pr=new I,dc=new I;function Jg(i,t,e){let n=new Ts,s=new Vt,r=new Vt,a=new Se,o=new Ia,l=new Pa,c={},u=e.maxTextureSize,d={[bi]:Ue,[Ue]:bi,[Sn]:Sn},h=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let y=new xe;y.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new vt(y,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qi;let p=this.type;this.render=function(T,N,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===yh&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qi);let E=i.getRenderTarget(),U=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),z=i.state;z.setBlending($n),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==this.type;k&&N.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=T.length;F<H;F++){let $=T[F],tt=$.shadow;if(tt===void 0){zt("WebGLShadowMap:",$,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let ot=tt.getFrameExtents();s.multiply(ot),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,tt.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(tt.camera._reversedDepth=Q,tt.map===null||k===!0){if(tt.map!==null&&(tt.map.depthTexture!==null&&(tt.map.depthTexture.dispose(),tt.map.depthTexture=null),tt.map.dispose()),this.type===Ls){if($.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}tt.map=new cn(s.x,s.y,{format:Ci,type:On,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),tt.map.texture.name=$.name+".shadowMap",tt.map.depthTexture=new yi(s.x,s.y,wn),tt.map.depthTexture.name=$.name+".shadowMapDepth",tt.map.depthTexture.format=Xn,tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Ge,tt.map.depthTexture.magFilter=Ge}else $.isPointLight?(tt.map=new Bo(s.x),tt.map.depthTexture=new Ea(s.x,Fn)):(tt.map=new cn(s.x,s.y),tt.map.depthTexture=new yi(s.x,s.y,Fn)),tt.map.depthTexture.name=$.name+".shadowMap",tt.map.depthTexture.format=Xn,this.type===qi?(tt.map.depthTexture.compareFunction=Q?Uo:Do,tt.map.depthTexture.minFilter=Ye,tt.map.depthTexture.magFilter=Ye):(tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Ge,tt.map.depthTexture.magFilter=Ge);tt.camera.updateProjectionMatrix()}tt.map.isWebGLCubeRenderTarget!==!0&&(tt.map.width!==s.x||tt.map.height!==s.y)&&tt.map.setSize(s.x,s.y);let rt=tt.map.isWebGLCubeRenderTarget?6:tt.getViewportCount();$.isPointLight!==!0&&tt.updateMatrices($,_);for(let at=0;at<rt;at++){let Rt=tt.getCamera(at);if($.isPointLight){let It=tt.camera,Ht=tt.matrix,Zt=$.distance||It.far;Zt!==It.far&&(It.far=Zt,It.updateProjectionMatrix()),Pr.setFromMatrixPosition($.matrixWorld),It.position.copy(Pr),dc.copy(It.position),dc.add(Zg[at]),It.up.copy($g[at]),It.lookAt(dc),It.updateMatrixWorld(),Ht.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Tu.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),tt._frustum.setFromProjectionMatrix(Tu,It.coordinateSystem,It.reversedDepth)}if(tt.map.isWebGLCubeRenderTarget)i.setRenderTarget(tt.map,at),i.clear();else{at===0&&(i.setRenderTarget(tt.map),i.clear());let It=tt.getViewport(at);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),z.viewport(a)}n=tt.getFrustum(at),M(N,_,Rt,$,this.type)}tt.isPointLightShadow!==!0&&this.type===Ls&&b(tt,_),tt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,U,O)};function b(T,N){let _=t.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new cn(s.x,s.y,{format:Ci,type:On}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(N,null,_,h,S,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(N,null,_,f,S,null)}function P(T,N,_,E){let U=null,O=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)U=O;else if(U=_.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let z=U.uuid,k=N.uuid,F=c[z];F===void 0&&(F={},c[z]=F);let H=F[k];H===void 0&&(H=U.clone(),F[k]=H,N.addEventListener("dispose",w)),U=H}if(U.visible=N.visible,U.wireframe=N.wireframe,E===Ls?U.side=N.shadowSide!==null?N.shadowSide:N.side:U.side=N.shadowSide!==null?N.shadowSide:d[N.side],U.alphaMap=N.alphaMap,U.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,U.map=N.map,U.clipShadows=N.clipShadows,U.clippingPlanes=N.clippingPlanes,U.clipIntersection=N.clipIntersection,U.displacementMap=N.displacementMap,U.displacementScale=N.displacementScale,U.displacementBias=N.displacementBias,U.wireframeLinewidth=N.wireframeLinewidth,U.linewidth=N.linewidth,_.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let z=i.properties.get(U);z.light=_}return U}function M(T,N,_,E,U){if(T.visible===!1)return;if(T.layers.test(N.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===Ls)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let k=t.update(T),F=T.material;if(Array.isArray(F)){let H=k.groups;for(let $=0,tt=H.length;$<tt;$++){let ot=H[$],Q=F[ot.materialIndex];if(Q&&Q.visible){let rt=P(T,Q,E,U);T.onBeforeShadow(i,T,N,_,k,rt,ot),i.renderBufferDirect(_,null,k,rt,T,ot),T.onAfterShadow(i,T,N,_,k,rt,ot)}}}else if(F.visible){let H=P(T,F,E,U);T.onBeforeShadow(i,T,N,_,k,H,null),i.renderBufferDirect(_,null,k,H,T,null),T.onAfterShadow(i,T,N,_,k,H,null)}}let z=T.children;for(let k=0,F=z.length;k<F;k++)M(z[k],N,_,E,U)}function w(T){T.target.removeEventListener("dispose",w);for(let _ in c){let E=c[_],U=T.target.uuid;U in E&&(E[U].dispose(),delete E[U])}}}function Kg(i,t){function e(){let m=!1,D=new Se,R=null,A=new Se(0,0,0,0);return{setMask:function(Z){R!==Z&&!m&&(i.colorMask(Z,Z,Z,Z),R=Z)},setLocked:function(Z){m=Z},setClear:function(Z,G,st,lt,At){At===!0&&(Z*=lt,G*=lt,st*=lt),D.set(Z,G,st,lt),A.equals(D)===!1&&(i.clearColor(Z,G,st,lt),A.copy(D))},reset:function(){m=!1,R=null,A.set(-1,0,0,0)}}}function n(){let m=!1,D=!1,R=null,A=null,Z=null;return{setReversed:function(G){if(D!==G){let st=t.get("EXT_clip_control");G?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),D=G;let lt=Z;Z=null,this.setClear(lt)}},getReversed:function(){return D},setTest:function(G){G?et(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(G){R!==G&&!m&&(i.depthMask(G),R=G)},setFunc:function(G){if(D&&(G=tu[G]),A!==G){switch(G){case da:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}A=G}},setLocked:function(G){m=G},setClear:function(G){Z!==G&&(Z=G,D&&(G=1-G),i.clearDepth(G))},reset:function(){m=!1,R=null,A=null,Z=null,D=!1}}}function s(){let m=!1,D=null,R=null,A=null,Z=null,G=null,st=null,lt=null,At=null;return{setTest:function(Lt){m||(Lt?et(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Lt){D!==Lt&&!m&&(i.stencilMask(Lt),D=Lt)},setFunc:function(Lt,ue,$t){(R!==Lt||A!==ue||Z!==$t)&&(i.stencilFunc(Lt,ue,$t),R=Lt,A=ue,Z=$t)},setOp:function(Lt,ue,$t){(G!==Lt||st!==ue||lt!==$t)&&(i.stencilOp(Lt,ue,$t),G=Lt,st=ue,lt=$t)},setLocked:function(Lt){m=Lt},setClear:function(Lt){At!==Lt&&(i.clearStencil(Lt),At=Lt)},reset:function(){m=!1,D=null,R=null,A=null,Z=null,G=null,st=null,lt=null,At=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,y=[],S=null,g=!1,p=null,b=null,P=null,M=null,w=null,T=null,N=null,_=new Gt(0,0,0),E=0,U=!1,O=null,z=null,k=null,F=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,ot=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Q)[1]),tt=ot>=1):Q.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),tt=ot>=2);let rt=null,at={},Rt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Ht=new Se().fromArray(Rt),Zt=new Se().fromArray(It);function qt(m,D,R,A){let Z=new Uint8Array(4),G=i.createTexture();i.bindTexture(m,G),i.texParameteri(m,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(m,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<R;st++)m===i.TEXTURE_3D||m===i.TEXTURE_2D_ARRAY?i.texImage3D(D,0,i.RGBA,1,1,A,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(D+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return G}let j={};j[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(xs),Yt(!1),he(Ol),et(i.CULL_FACE),Jt($n);function et(m){u[m]!==!0&&(i.enable(m),u[m]=!0)}function ut(m){u[m]!==!1&&(i.disable(m),u[m]=!1)}function Pt(m,D){return h[m]!==D?(i.bindFramebuffer(m,D),h[m]=D,m===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=D),m===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=D),!0):!1}function Mt(m,D){let R=y,A=!1;if(m){R=f.get(D),R===void 0&&(R=[],f.set(D,R));let Z=m.textures;if(R.length!==Z.length||R[0]!==i.COLOR_ATTACHMENT0){for(let G=0,st=Z.length;G<st;G++)R[G]=i.COLOR_ATTACHMENT0+G;R.length=Z.length,A=!0}}else R[0]!==i.BACK&&(R[0]=i.BACK,A=!0);A&&i.drawBuffers(R)}function Ft(m){return S!==m?(i.useProgram(m),S=m,!0):!1}let ft={[Yi]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};ft[bh]=i.MIN,ft[wh]=i.MAX;let Bt={[Th]:i.ZERO,[Ah]:i.ONE,[Eh]:i.SRC_COLOR,[kl]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Dh]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function Jt(m,D,R,A,Z,G,st,lt,At,Lt){if(m===$n){g===!0&&(ut(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),m!==vh){if(m!==p||Lt!==U){if((b!==Yi||w!==Yi)&&(i.blendEquation(i.FUNC_ADD),b=Yi,w=Yi),Lt)switch(m){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",m);break}else switch(m){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bl:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",m);break}P=null,M=null,T=null,N=null,_.set(0,0,0),E=0,p=m,U=Lt}return}Z=Z||D,G=G||R,st=st||A,(D!==b||Z!==w)&&(i.blendEquationSeparate(ft[D],ft[Z]),b=D,w=Z),(R!==P||A!==M||G!==T||st!==N)&&(i.blendFuncSeparate(Bt[R],Bt[A],Bt[G],Bt[st]),P=R,M=A,T=G,N=st),(lt.equals(_)===!1||At!==E)&&(i.blendColor(lt.r,lt.g,lt.b,At),_.copy(lt),E=At),p=m,U=!1}function ne(m,D){m.side===Sn?ut(i.CULL_FACE):et(i.CULL_FACE);let R=m.side===Ue;D&&(R=!R),Yt(R),m.blending===wi&&m.transparent===!1?Jt($n):Jt(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),a.setFunc(m.depthFunc),a.setTest(m.depthTest),a.setMask(m.depthWrite),r.setMask(m.colorWrite);let A=m.stencilWrite;o.setTest(A),A&&(o.setMask(m.stencilWriteMask),o.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),o.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),Ie(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(m){O!==m&&(m?i.frontFace(i.CW):i.frontFace(i.CCW),O=m)}function he(m){m!==xh?(et(i.CULL_FACE),m!==z&&(m===Ol?i.cullFace(i.BACK):m===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),z=m}function ve(m){m!==k&&(tt&&i.lineWidth(m),k=m)}function Ie(m,D,R){m?(et(i.POLYGON_OFFSET_FILL),(F!==D||H!==R)&&(F=D,H=R,a.getReversed()&&(D=-D),i.polygonOffset(D,R))):ut(i.POLYGON_OFFSET_FILL)}function nt(m){m?et(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function dt(m){m===void 0&&(m=i.TEXTURE0+$-1),rt!==m&&(i.activeTexture(m),rt=m)}function L(m,D,R){R===void 0&&(rt===null?R=i.TEXTURE0+$-1:R=rt);let A=at[R];A===void 0&&(A={type:void 0,texture:void 0},at[R]=A),(A.type!==m||A.texture!==D)&&(rt!==R&&(i.activeTexture(R),rt=R),i.bindTexture(m,D||j[m]),A.type=m,A.texture=D)}function Nt(){let m=at[rt];m!==void 0&&m.type!==void 0&&(i.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function St(){try{i.compressedTexImage2D(...arguments)}catch(m){kt("WebGLState:",m)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(m){kt("WebGLState:",m)}}function x(){try{i.texSubImage2D(...arguments)}catch(m){kt("WebGLState:",m)}}function V(){try{i.texSubImage3D(...arguments)}catch(m){kt("WebGLState:",m)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(m){kt("WebGLState:",m)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(m){kt("WebGLState:",m)}}function ct(){try{i.texStorage2D(...arguments)}catch(m){kt("WebGLState:",m)}}function ht(){try{i.texStorage3D(...arguments)}catch(m){kt("WebGLState:",m)}}function it(){try{i.texImage2D(...arguments)}catch(m){kt("WebGLState:",m)}}function J(){try{i.texImage3D(...arguments)}catch(m){kt("WebGLState:",m)}}function gt(m){return d[m]!==void 0?d[m]:i.getParameter(m)}function bt(m,D){d[m]!==D&&(i.pixelStorei(m,D),d[m]=D)}function mt(m){Ht.equals(m)===!1&&(i.scissor(m.x,m.y,m.z,m.w),Ht.copy(m))}function pt(m){Zt.equals(m)===!1&&(i.viewport(m.x,m.y,m.z,m.w),Zt.copy(m))}function Dt(m,D){let R=c.get(D);R===void 0&&(R=new WeakMap,c.set(D,R));let A=R.get(m);A===void 0&&(A=i.getUniformBlockIndex(D,m.name),R.set(m,A))}function Ot(m,D){let A=c.get(D).get(m);l.get(D)!==A&&(i.uniformBlockBinding(D,A,m.__bindingPointIndex),l.set(D,A))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},rt=null,at={},h={},f=new WeakMap,y=[],S=null,g=!1,p=null,b=null,P=null,M=null,w=null,T=null,N=null,_=new Gt(0,0,0),E=0,U=!1,O=null,z=null,k=null,F=null,H=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:ut,bindFramebuffer:Pt,drawBuffers:Mt,useProgram:Ft,setBlending:Jt,setMaterial:ne,setFlipSided:Yt,setCullFace:he,setLineWidth:ve,setPolygonOffset:Ie,setScissorTest:nt,activeTexture:dt,bindTexture:L,unbindTexture:Nt,compressedTexImage2D:St,compressedTexImage3D:C,texImage2D:it,texImage3D:J,pixelStorei:bt,getParameter:gt,updateUBOMapping:Dt,uniformBlockBinding:Ot,texStorage2D:ct,texStorage3D:ht,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:mt,viewport:pt,reset:Xt}}function jg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,u=new WeakMap,d=new Set,h,f=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,x){return y?new OffscreenCanvas(C,x):nr("canvas")}function g(C,x,V){let q=1,K=St(C);if((K.width>V||K.height>V)&&(q=V/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ct=Math.floor(q*K.width),ht=Math.floor(q*K.height);h===void 0&&(h=S(ct,ht));let it=x?S(ct,ht):h;return it.width=ct,it.height=ht,it.getContext("2d").drawImage(C,0,0,ct,ht),zt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ct+"x"+ht+")."),it}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function p(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function P(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,x,V,q,K,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ht;q&&(ht=t.get("EXT_texture_norm16"),ht||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=x;if(x===i.RED&&(V===i.FLOAT&&(it=i.R32F),V===i.HALF_FLOAT&&(it=i.R16F),V===i.UNSIGNED_BYTE&&(it=i.R8),V===i.UNSIGNED_SHORT&&ht&&(it=ht.R16_EXT),V===i.SHORT&&ht&&(it=ht.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.R8UI),V===i.UNSIGNED_SHORT&&(it=i.R16UI),V===i.UNSIGNED_INT&&(it=i.R32UI),V===i.BYTE&&(it=i.R8I),V===i.SHORT&&(it=i.R16I),V===i.INT&&(it=i.R32I)),x===i.RG&&(V===i.FLOAT&&(it=i.RG32F),V===i.HALF_FLOAT&&(it=i.RG16F),V===i.UNSIGNED_BYTE&&(it=i.RG8),V===i.UNSIGNED_SHORT&&ht&&(it=ht.RG16_EXT),V===i.SHORT&&ht&&(it=ht.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RG8UI),V===i.UNSIGNED_SHORT&&(it=i.RG16UI),V===i.UNSIGNED_INT&&(it=i.RG32UI),V===i.BYTE&&(it=i.RG8I),V===i.SHORT&&(it=i.RG16I),V===i.INT&&(it=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGB8UI),V===i.UNSIGNED_SHORT&&(it=i.RGB16UI),V===i.UNSIGNED_INT&&(it=i.RGB32UI),V===i.BYTE&&(it=i.RGB8I),V===i.SHORT&&(it=i.RGB16I),V===i.INT&&(it=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),V===i.UNSIGNED_INT&&(it=i.RGBA32UI),V===i.BYTE&&(it=i.RGBA8I),V===i.SHORT&&(it=i.RGBA16I),V===i.INT&&(it=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&ht&&(it=ht.RGB16_EXT),V===i.SHORT&&ht&&(it=ht.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),x===i.RGBA){let J=ct?er:ie.getTransfer(K);V===i.FLOAT&&(it=i.RGBA32F),V===i.HALF_FLOAT&&(it=i.RGBA16F),V===i.UNSIGNED_BYTE&&(it=J===fe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ht&&(it=ht.RGBA16_EXT),V===i.SHORT&&ht&&(it=ht.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function w(C,x){let V;return C?x===null||x===Fn||x===Ds?V=i.DEPTH24_STENCIL8:x===wn?V=i.DEPTH32F_STENCIL8:x===Ns&&(V=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fn||x===Ds?V=i.DEPTH_COMPONENT24:x===wn?V=i.DEPTH_COMPONENT32F:x===Ns&&(V=i.DEPTH_COMPONENT16),V}function T(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==Ye?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function N(C){let x=C.target;x.removeEventListener("dispose",N),E(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(C){let x=C.target;x.removeEventListener("dispose",_),O(x)}function E(C){let x=n.get(C);if(x.__webglInit===void 0)return;let V=C.source,q=f.get(V);if(q){let K=q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(C),Object.keys(q).length===0&&f.delete(V)}n.remove(C)}function U(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let V=C.source,q=f.get(V);delete q[x.__cacheKey],a.memory.textures--}function O(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let K=0;K<x.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[q][K]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=C.textures;for(let q=0,K=V.length;q<K;q++){let ct=n.get(V[q]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(V[q])}n.remove(C)}let z=0;function k(){z=0}function F(){return z}function H(C){z=C}function $(){let C=z;return C>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function tt(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function ot(C,x){let V=n.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let q=C.image;if(q===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(V,C,x);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function Q(C,x){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ut(V,C,x);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function rt(C,x){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ut(V,C,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function at(C,x){let V=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Pt(V,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let Rt={[_s]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},It={[Ge]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Ht={[Wh]:i.NEVER,[$h]:i.ALWAYS,[Xh]:i.LESS,[Do]:i.LEQUAL,[qh]:i.EQUAL,[Uo]:i.GEQUAL,[Yh]:i.GREATER,[Zh]:i.NOTEQUAL};function Zt(C,x){if(x.type===wn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ye||x.magFilter===$a||x.magFilter===Mr||x.magFilter===Ai||x.minFilter===Ye||x.minFilter===$a||x.minFilter===Mr||x.minFilter===Ai)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Rt[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Rt[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Rt[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,It[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,It[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ge||x.minFilter!==Mr&&x.minFilter!==Ai||x.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function qt(C,x){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",N));let q=x.source,K=f.get(q);K===void 0&&(K={},f.set(q,K));let ct=tt(x);if(ct!==C.__cacheKey){K[ct]===void 0&&(K[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),K[ct].usedTimes++;let ht=K[C.__cacheKey];ht!==void 0&&(K[C.__cacheKey].usedTimes--,ht.usedTimes===0&&U(x)),C.__cacheKey=ct,C.__webglTexture=K[ct].texture}return V}function j(C,x,V){return Math.floor(Math.floor(C/V)/x)}function et(C,x,V,q){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,q,x.data);else{ct.sort((bt,mt)=>bt.start-mt.start);let ht=0;for(let bt=1;bt<ct.length;bt++){let mt=ct[ht],pt=ct[bt],Dt=mt.start+mt.count,Ot=j(pt.start,x.width,4),Xt=j(mt.start,x.width,4);pt.start<=Dt+1&&Ot===Xt&&j(pt.start+pt.count-1,x.width,4)===Ot?mt.count=Math.max(mt.count,pt.start+pt.count-mt.start):(++ht,ct[ht]=pt)}ct.length=ht+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let bt=0,mt=ct.length;bt<mt;bt++){let pt=ct[bt],Dt=Math.floor(pt.start/4),Ot=Math.ceil(pt.count/4),Xt=Dt%x.width,m=Math.floor(Dt/x.width),D=Ot,R=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,m),e.texSubImage2D(i.TEXTURE_2D,0,Xt,m,D,R,V,q,x.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function ut(C,x,V){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);let K=qt(C,x),ct=x.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+V);let ht=n.get(ct);if(ct.version!==ht.__version||K===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let R=ie.getPrimaries(ie.workingColorSpace),A=x.colorSpace===ai?null:ie.getPrimaries(x.colorSpace),Z=x.colorSpace===ai||R===A?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let J=g(x.image,!1,s.maxTextureSize);J=Nt(x,J);let gt=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),mt=M(x.internalFormat,gt,bt,x.normalized,x.colorSpace,x.isVideoTexture);Zt(q,x);let pt,Dt=x.mipmaps,Ot=x.isVideoTexture!==!0,Xt=ht.__version===void 0||K===!0,m=ct.dataReady,D=T(x,J);if(x.isDepthTexture)mt=w(x.format===Ei,x.type),Xt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,mt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,mt,J.width,J.height,0,gt,bt,null));else if(x.isDataTexture)if(Dt.length>0){Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,D,mt,Dt[0].width,Dt[0].height);for(let R=0,A=Dt.length;R<A;R++)pt=Dt[R],Ot?m&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,pt.width,pt.height,gt,bt,pt.data):e.texImage2D(i.TEXTURE_2D,R,mt,pt.width,pt.height,0,gt,bt,pt.data);x.generateMipmaps=!1}else Ot?(Xt&&e.texStorage2D(i.TEXTURE_2D,D,mt,J.width,J.height),m&&et(x,J,gt,bt)):e.texImage2D(i.TEXTURE_2D,0,mt,J.width,J.height,0,gt,bt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,mt,Dt[0].width,Dt[0].height,J.depth);for(let R=0,A=Dt.length;R<A;R++)if(pt=Dt[R],x.format!==Tn)if(gt!==null)if(Ot){if(m)if(x.layerUpdates.size>0){let Z=ac(pt.width,pt.height,x.format,x.type);for(let G of x.layerUpdates){let st=pt.data.subarray(G*Z/pt.data.BYTES_PER_ELEMENT,(G+1)*Z/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,G,pt.width,pt.height,1,gt,st)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,pt.width,pt.height,J.depth,gt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,R,mt,pt.width,pt.height,J.depth,0,pt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?m&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,pt.width,pt.height,J.depth,gt,bt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,R,mt,pt.width,pt.height,J.depth,0,gt,bt,pt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,D,mt,Dt[0].width,Dt[0].height);for(let R=0,A=Dt.length;R<A;R++)pt=Dt[R],x.format!==Tn?gt!==null?Ot?m&&e.compressedTexSubImage2D(i.TEXTURE_2D,R,0,0,pt.width,pt.height,gt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,R,mt,pt.width,pt.height,0,pt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?m&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,pt.width,pt.height,gt,bt,pt.data):e.texImage2D(i.TEXTURE_2D,R,mt,pt.width,pt.height,0,gt,bt,pt.data)}else if(x.isDataArrayTexture)if(Ot){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,mt,J.width,J.height,J.depth),m)if(x.layerUpdates.size>0){let R=ac(J.width,J.height,x.format,x.type);for(let A of x.layerUpdates){let Z=J.data.subarray(A*R/J.data.BYTES_PER_ELEMENT,(A+1)*R/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,A,J.width,J.height,1,gt,bt,Z)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,gt,bt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,J.width,J.height,J.depth,0,gt,bt,J.data);else if(x.isData3DTexture)Ot?(Xt&&e.texStorage3D(i.TEXTURE_3D,D,mt,J.width,J.height,J.depth),m&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,gt,bt,J.data)):e.texImage3D(i.TEXTURE_3D,0,mt,J.width,J.height,J.depth,0,gt,bt,J.data);else if(x.isFramebufferTexture){if(Xt)if(Ot)e.texStorage2D(i.TEXTURE_2D,D,mt,J.width,J.height);else{let R=J.width,A=J.height;for(let Z=0;Z<D;Z++)e.texImage2D(i.TEXTURE_2D,Z,mt,R,A,0,gt,bt,null),R>>=1,A>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let R=i.canvas;if(R.hasAttribute("layoutsubtree")||R.setAttribute("layoutsubtree","true"),J.parentNode!==R){R.appendChild(J),d.add(x),R.onpaint=A=>{let Z=A.changedElements;for(let G of d)Z.includes(G.image)&&(G.needsUpdate=!0)},R.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Z=i.RGBA,G=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Z,G,st,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ot&&Xt){let R=St(Dt[0]);e.texStorage2D(i.TEXTURE_2D,D,mt,R.width,R.height)}for(let R=0,A=Dt.length;R<A;R++)pt=Dt[R],Ot?m&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,gt,bt,pt):e.texImage2D(i.TEXTURE_2D,R,mt,gt,bt,pt);x.generateMipmaps=!1}else if(Ot){if(Xt){let R=St(J);e.texStorage2D(i.TEXTURE_2D,D,mt,R.width,R.height)}m&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,bt,J)}else e.texImage2D(i.TEXTURE_2D,0,mt,gt,bt,J);p(x)&&b(q),ht.__version=ct.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Pt(C,x,V){if(x.image.length!==6)return;let q=qt(C,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let ct=n.get(K);if(K.version!==ct.__version||q===!0){e.activeTexture(i.TEXTURE0+V);let ht=ie.getPrimaries(ie.workingColorSpace),it=x.colorSpace===ai?null:ie.getPrimaries(x.colorSpace),J=x.colorSpace===ai||ht===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let gt=x.isCompressedTexture||x.image[0].isCompressedTexture,bt=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let G=0;G<6;G++)!gt&&!bt?mt[G]=g(x.image[G],!0,s.maxCubemapSize):mt[G]=bt?x.image[G].image:x.image[G],mt[G]=Nt(x,mt[G]);let pt=mt[0],Dt=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type),Xt=M(x.internalFormat,Dt,Ot,x.normalized,x.colorSpace),m=x.isVideoTexture!==!0,D=ct.__version===void 0||q===!0,R=K.dataReady,A=T(x,pt);Zt(i.TEXTURE_CUBE_MAP,x);let Z;if(gt){m&&D&&e.texStorage2D(i.TEXTURE_CUBE_MAP,A,Xt,pt.width,pt.height);for(let G=0;G<6;G++){Z=mt[G].mipmaps;for(let st=0;st<Z.length;st++){let lt=Z[st];x.format!==Tn?Dt!==null?m?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,st,0,0,lt.width,lt.height,Dt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,st,Xt,lt.width,lt.height,0,lt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):m?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,st,0,0,lt.width,lt.height,Dt,Ot,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,st,Xt,lt.width,lt.height,0,Dt,Ot,lt.data)}}}else{if(Z=x.mipmaps,m&&D){Z.length>0&&A++;let G=St(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,A,Xt,G.width,G.height)}for(let G=0;G<6;G++)if(bt){m?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,mt[G].width,mt[G].height,Dt,Ot,mt[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Xt,mt[G].width,mt[G].height,0,Dt,Ot,mt[G].data);for(let st=0;st<Z.length;st++){let At=Z[st].image[G].image;m?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,st+1,0,0,At.width,At.height,Dt,Ot,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,st+1,Xt,At.width,At.height,0,Dt,Ot,At.data)}}else{m?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Dt,Ot,mt[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Xt,Dt,Ot,mt[G]);for(let st=0;st<Z.length;st++){let lt=Z[st];m?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,st+1,0,0,Dt,Ot,lt.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,st+1,Xt,Dt,Ot,lt.image[G])}}}p(x)&&b(i.TEXTURE_CUBE_MAP),ct.__version=K.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Mt(C,x,V,q,K,ct){let ht=r.convert(V.format,V.colorSpace),it=r.convert(V.type),J=M(V.internalFormat,ht,it,V.normalized,V.colorSpace),gt=n.get(x),bt=n.get(V);if(bt.__renderTarget=x,!gt.__hasExternalTextures){let mt=Math.max(1,x.width>>ct),pt=Math.max(1,x.height>>ct);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ct,J,mt,pt,x.depth,0,ht,it,null):e.texImage2D(K,ct,J,mt,pt,0,ht,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,bt.__webglTexture,0,nt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,bt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(C,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let q=x.depthTexture,K=q&&q.isDepthTexture?q.type:null,ct=w(x.stencilBuffer,K),ht=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(x),ct,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(x),ct,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ct,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,C)}else{let q=x.textures;for(let K=0;K<q.length;K++){let ct=q[K],ht=r.convert(ct.format,ct.colorSpace),it=r.convert(ct.type),J=M(ct.internalFormat,ht,it,ct.normalized,ct.colorSpace);dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(x),J,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(x),J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(C,x,V){let q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",N)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,x.depthTexture);let gt=r.convert(x.depthTexture.format),bt=r.convert(x.depthTexture.type),mt;x.depthTexture.format===Xn?mt=i.DEPTH_COMPONENT24:x.depthTexture.format===Ei&&(mt=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,mt,x.width,x.height,0,gt,bt,null)}}else ot(x.depthTexture,0);let ct=K.__webglTexture,ht=nt(x),it=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,J=x.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xn)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,ct,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,J,it,ct,0);else if(x.depthTexture.format===Ei)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,ct,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,J,it,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(C){let x=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=q}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)ft(x.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?ft(x.__webglFramebuffer[0],C,0):ft(x.__webglFramebuffer,C,0)}else if(V){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Ft(x.__webglDepthbuffer[q],C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ct)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ft(x.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(C,x,V){let q=n.get(C);x!==void 0&&Mt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Bt(C)}function ne(C){let x=C.texture,V=n.get(C),q=n.get(x);C.addEventListener("dispose",_);let K=C.textures,ct=C.isWebGLCubeRenderTarget===!0,ht=K.length>1;if(ht||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),ct){V.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[it]=[];for(let J=0;J<x.mipmaps.length;J++)V.__webglFramebuffer[it][J]=i.createFramebuffer()}else V.__webglFramebuffer[it]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)V.__webglFramebuffer[it]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ht)for(let it=0,J=K.length;it<J;it++){let gt=n.get(K[it]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&dt(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){let J=K[it];V.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[it]);let gt=r.convert(J.format,J.colorSpace),bt=r.convert(J.type),mt=M(J.internalFormat,gt,bt,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),pt=nt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,V.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Mt(V.__webglFramebuffer[it][J],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,J);else Mt(V.__webglFramebuffer[it],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(x)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let it=0,J=K.length;it<J;it++){let gt=K[it],bt=n.get(gt),mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,bt.__webglTexture),Zt(mt,gt),Mt(V.__webglFramebuffer,C,gt,i.COLOR_ATTACHMENT0+it,mt,0),p(gt)&&b(mt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),Zt(it,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Mt(V.__webglFramebuffer[J],C,x,i.COLOR_ATTACHMENT0,it,J);else Mt(V.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,it,0);p(x)&&b(it),e.unbindTexture()}C.depthBuffer&&Bt(C)}function Yt(C){let x=C.textures;for(let V=0,q=x.length;V<q;V++){let K=x[V];if(p(K)){let ct=P(C),ht=n.get(K).__webglTexture;e.bindTexture(ct,ht),b(ct),e.unbindTexture()}}}let he=[],ve=[];function Ie(C){if(C.samples>0){if(dt(C)===!1){let x=C.textures,V=C.width,q=C.height,K=i.COLOR_BUFFER_BIT,ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(C),it=x.length>1;if(it)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let J=C.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[gt]);let bt=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,V,q,0,0,V,q,K,i.NEAREST),l===!0&&(he.length=0,ve.length=0,he.push(i.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(he.push(ct),ve.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[gt]);let bt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function nt(C){return Math.min(s.maxSamples,C.samples)}function dt(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(C){let x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Nt(C,x){let V=C.colorSpace,q=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==tr&&V!==ai&&(ie.getTransfer(V)===fe?(q!==Tn||K!==dn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",V)),x}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=k,this.getTextureUnits=F,this.setTextureUnits=H,this.setTexture2D=ot,this.setTexture2DArray=Q,this.setTexture3D=rt,this.setTextureCube=at,this.rebindTextures=Jt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qg(i,t){function e(n,s=ai){let r,a=ie.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$l)return i.BYTE;if(n===Jl)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Ql)return i.ALPHA;if(n===tc)return i.RGB;if(n===Tn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===Qa)return i.RED;if(n===to)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===eo)return i.RG_INTEGER;if(n===no)return i.RGBA_INTEGER;if(n===Sr||n===br||n===wr||n===Tr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===Ar||n===fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===lo)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ho)return r.COMPRESSED_R11_EAC;if(n===uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ar)return r.COMPRESSED_RG11_EAC;if(n===fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===po||n===mo||n===go||n===xo||n===_o||n===yo||n===vo||n===Mo||n===So||n===bo||n===wo||n===To||n===Ao||n===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Ro||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Po||n===Lo||n===Er||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
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

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new cr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:tx,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vt(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,y=null,S=typeof XRWebGLBinding<"u",g=new vc,p={},b=e.getContextAttributes(),P=null,M=null,w=[],T=[],N=new Vt,_=null,E=null,U=new qe;U.viewport=new Se;let O=new qe;O.viewport=new Se;let z=[U,O],k=new Wa,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=w[j];return et===void 0&&(et=new bs,w[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=w[j];return et===void 0&&(et=new bs,w[j]=et),et.getGripSpace()},this.getHand=function(j){let et=w[j];return et===void 0&&(et=new bs,w[j]=et),et.getHandSpace()};function $(j){let et=T.indexOf(j.inputSource);if(et===-1)return;let ut=w[et];ut!==void 0&&(ut.update(j.inputSource,j.frame,c||a),ut.dispatchEvent({type:j.type,data:j.inputSource}))}function tt(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",ot);for(let j=0;j<w.length;j++){let et=T[j];et!==null&&(T[j]=null,w[j].disconnect(et))}F=null,H=null,g.reset();for(let j in p)delete p[j];if(t.setRenderTarget(P),f=null,h=null,d=null,s=null,M=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(N.width,N.height,!1),E!==null){let j=E.camera;j.fov=E.fov,j.zoom=E.zoom,j.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",ot),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(N),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Pt=null,Mt=null;b.depth&&(Mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=b.stencil?Ei:Xn,Pt=b.stencil?Ds:Fn);let Ft={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ft),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new cn(h.textureWidth,h.textureHeight,{format:Tn,type:dn,depthTexture:new yi(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ut={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new cn(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ot(j){for(let et=0;et<j.removed.length;et++){let ut=j.removed[et],Pt=T.indexOf(ut);Pt>=0&&(T[Pt]=null,w[Pt].disconnect(ut))}for(let et=0;et<j.added.length;et++){let ut=j.added[et],Pt=T.indexOf(ut);if(Pt===-1){for(let Ft=0;Ft<w.length;Ft++)if(Ft>=T.length){T.push(ut),Pt=Ft;break}else if(T[Ft]===null){T[Ft]=ut,Pt=Ft;break}if(Pt===-1)break}let Mt=w[Pt];Mt&&Mt.connect(ut)}}let Q=new I,rt=new I;function at(j,et,ut){Q.setFromMatrixPosition(et.matrixWorld),rt.setFromMatrixPosition(ut.matrixWorld);let Pt=Q.distanceTo(rt),Mt=et.projectionMatrix.elements,Ft=ut.projectionMatrix.elements,ft=Mt[14]/(Mt[10]-1),Bt=Mt[14]/(Mt[10]+1),Jt=(Mt[9]+1)/Mt[5],ne=(Mt[9]-1)/Mt[5],Yt=(Mt[8]-1)/Mt[0],he=(Ft[8]+1)/Ft[0],ve=ft*Yt,Ie=ft*he,nt=Pt/(-Yt+he),dt=nt*-Yt;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(dt),j.translateZ(nt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Mt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let L=ft+nt,Nt=Bt+nt,St=ve-dt,C=Ie+(Pt-dt),x=Jt*Bt/Nt*L,V=ne*Bt/Nt*L;j.projectionMatrix.makePerspective(St,C,x,V,L,Nt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Rt(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let et=j.near,ut=j.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),k.near=O.near=U.near=et,k.far=O.far=U.far=ut,(F!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,H=k.far),k.layers.mask=j.layers.mask|6,U.layers.mask=k.layers.mask&-5,O.layers.mask=k.layers.mask&-3;let Pt=j.parent,Mt=k.cameras;Rt(k,Pt);for(let Ft=0;Ft<Mt.length;Ft++)Rt(Mt[Ft],Pt);Mt.length===2?at(k,U,O):k.projectionMatrix.copy(U.projectionMatrix),E===null&&j.isPerspectiveCamera&&(E={camera:j,fov:j.fov,zoom:j.zoom}),It(j,k,Pt)};function It(j,et,ut){ut===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(ut.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ma*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(j){return p[j]};let Ht=null;function Zt(j,et){if(u=et.getViewerPose(c||a),y=et,u!==null){let ut=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Pt=!1;ut.length!==k.cameras.length&&(k.cameras.length=0,Pt=!0);for(let Bt=0;Bt<ut.length;Bt++){let Jt=ut[Bt],ne=null;if(f!==null)ne=f.getViewport(Jt);else{let he=d.getViewSubImage(h,Jt);ne=he.viewport,Bt===0&&(t.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(M))}let Yt=z[Bt];Yt===void 0&&(Yt=new qe,Yt.layers.enable(Bt),Yt.viewport=new Se,z[Bt]=Yt),Yt.matrix.fromArray(Jt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Jt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(ne.x,ne.y,ne.width,ne.height),Bt===0&&(k.matrix.copy(Yt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pt===!0&&k.cameras.push(Yt)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Bt=d.getDepthInformation(ut[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(Bt,s.renderState)}if(Mt&&Mt.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<ut.length;Bt++){let Jt=ut[Bt].camera;if(Jt){let ne=p[Jt];ne||(ne=new cr,p[Jt]=ne);let Yt=d.getCameraImage(Jt);ne.sourceTexture=Yt}}}}for(let ut=0;ut<w.length;ut++){let Pt=T[ut],Mt=w[ut];Pt!==null&&Mt!==void 0&&Mt.update(Pt,et,c||a)}Ht&&Ht(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),y=null}let qt=new Au;qt.setAnimationLoop(Zt),this.setAnimationLoop=function(j){Ht=j},this.dispose=function(){}}},nx=new re,Lu=new Wt;Lu.set(-1,0,0,0,1,0,0,0,1);function ix(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ic(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,P,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),y(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),S(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,P):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),P=b.envMap,M=b.envMapRotation;P&&(g.envMap.value=P,g.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Lu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,P){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=P*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let T=w.program;n.uniformBlockBinding(M,T)}function c(M,w){let T=s[M.id];T===void 0&&(g(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",b));let N=w.program;n.updateUBOMapping(M,N);let _=t.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function u(M){let w=d();M.__bindingPointIndex=w;let T=i.createBuffer(),N=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let w=s[M.id],T=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,E=T.length;_<E;_++){let U=T[_];if(Array.isArray(U))for(let O=0,z=U.length;O<z;O++)f(U[O],_,O,N);else f(U,_,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,T,N){if(S(M,w,T,N)===!0){let _=M.__offset,E=M.value;if(Array.isArray(E)){let U=0;for(let O=0;O<E.length;O++){let z=E[O],k=p(z);y(z,M.__data,U),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function y(M,w,T){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,T)}function S(M,w,T,N){let _=M.value,E=w+"_"+T;if(N[E]===void 0)return typeof _=="number"||typeof _=="boolean"?N[E]=_:ArrayBuffer.isView(_)?N[E]=_.slice():N[E]=_.clone(),!0;{let U=N[E];if(typeof _=="number"||typeof _=="boolean"){if(U!==_)return N[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(U.equals(_)===!1)return U.copy(_),!0}}return!1}function g(M){let w=M.uniforms,T=0,N=16;for(let E=0,U=w.length;E<U;E++){let O=Array.isArray(w[E])?w[E]:[w[E]];for(let z=0,k=O.length;z<k;z++){let F=O[z],H=Array.isArray(F.value)?F.value:[F.value];for(let $=0,tt=H.length;$<tt;$++){let ot=H[$],Q=p(ot),rt=T%N,at=rt%Q.boundary,Rt=rt+at;T+=at,Rt!==0&&N-Rt<Q.storage&&(T+=N-Rt),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=Q.storage}}}let _=T%N;return _>0&&(T+=N-_),M.__size=T,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",M),w}function b(M){let w=M.target;w.removeEventListener("dispose",b);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function P(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function ax(){return Jn===null&&(Jn=new ar(rx,16,16,Ci,On),Jn.name="DFG_LUT",Jn.minFilter=Ye,Jn.magFilter=Ye,Jn.wrapS=Wn,Jn.wrapT=Wn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var zo=class{constructor(t={}){let{canvas:e=Kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;let S=f,g=new Set([no,eo,to]),p=new Set([dn,Fn,Ns,Ds,Ka,ja]),b=new Uint32Array(4),P=new Int32Array(4),M=new I,w=null,T=null,N=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,O=!1,z=null,k=null,F=null,H=null;this._outputColorSpace=rn;let $=0,tt=0,ot=null,Q=-1,rt=null,at=new Se,Rt=new Se,It=null,Ht=new Gt(0),Zt=0,qt=e.width,j=e.height,et=1,ut=null,Pt=null,Mt=new Se(0,0,qt,j),Ft=new Se(0,0,qt,j),ft=!1,Bt=new Ts,Jt=!1,ne=!1,Yt=new re,he=new I,ve=new Se,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function dt(){return ot===null?et:1}let L=n;function Nt(v,B){return e.getContext(v,B)}let St,C,x,V,q,K,ct,ht,it,J,gt,bt,mt,pt,Dt,Ot,Xt,m,D,R,A,Z,G;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",ue,!1),L===null){let B="webgl2";if(L=Nt(B,v),L===null)throw Nt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(v){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),kt("WebGLRenderer: "+v.message),v}function st(){St=new f0(L),St.init(),A=new Qg(L,St),C=new i0(L,St,t,A),x=new Kg(L,St),C.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),k=L.createFramebuffer(),F=L.createFramebuffer(),H=L.createFramebuffer(),V=new g0(L),q=new Og,K=new jg(L,St,x,q,C,A,V),ct=new d0(U),ht=new _f(L),Z=new e0(L,ht),it=new p0(L,ht,V,Z),J=new _0(L,it,ht,Z,V),m=new x0(L,C,K),Dt=new s0(q),gt=new Fg(U,ct,St,C,Z,Dt),bt=new ix(U,q),mt=new zg,pt=new Xg(St),Xt=new t0(U,ct,x,J,y,l),Ot=new Jg(U,J,C),G=new sx(L,V,C,x),D=new n0(L,St,V),R=new m0(L,St,V),V.programs=gt.programs,U.capabilities=C,U.extensions=St,U.properties=q,U.renderLists=mt,U.shadowMap=Ot,U.state=x,U.info=V}S!==dn&&(E=new v0(S,e.width,e.height,o,s,r));let lt=new Mc(U,L);this.xr=lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=St.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=St.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(v){v!==void 0&&(et=v,this.setSize(qt,j,!1))},this.getSize=function(v){return v.set(qt,j)},this.setSize=function(v,B,Y=!0){if(lt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=v,j=B,e.width=Math.floor(v*et),e.height=Math.floor(B*et),Y===!0&&(e.style.width=v+"px",e.style.height=B+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,v,B)},this.getDrawingBufferSize=function(v){return v.set(qt*et,j*et).floor()},this.setDrawingBufferSize=function(v,B,Y){qt=v,j=B,et=Y,e.width=Math.floor(v*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,v,B)},this.setEffects=function(v){if(S===dn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let B=0;B<v.length;B++)if(v[B].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(at)},this.getViewport=function(v){return v.copy(Mt)},this.setViewport=function(v,B,Y,W){v.isVector4?Mt.set(v.x,v.y,v.z,v.w):Mt.set(v,B,Y,W),x.viewport(at.copy(Mt).multiplyScalar(et).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,B,Y,W){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,B,Y,W),x.scissor(Rt.copy(Ft).multiplyScalar(et).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(v){x.setScissorTest(ft=v)},this.setOpaqueSort=function(v){ut=v},this.setTransparentSort=function(v){Pt=v},this.getClearColor=function(v){return v.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(v=!0,B=!0,Y=!0){let W=0;if(v){let X=!1;if(ot!==null){let yt=ot.texture.format;X=g.has(yt)}if(X){let yt=ot.texture.type,Tt=p.has(yt),_t=Xt.getClearColor(),Et=Xt.getClearAlpha(),Ut=_t.r,jt=_t.g,ee=_t.b;Tt?(b[0]=Ut,b[1]=jt,b[2]=ee,b[3]=Et,L.clearBufferuiv(L.COLOR,0,b)):(P[0]=Ut,P[1]=jt,P[2]=ee,P[3]=Et,L.clearBufferiv(L.COLOR,0,P))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),Xt.dispose(),mt.dispose(),pt.dispose(),q.dispose(),ct.dispose(),J.dispose(),Z.dispose(),G.dispose(),gt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Nc),lt.removeEventListener("sessionend",Dc),Ni.stop()};function At(v){v.preventDefault(),nc("WebGLRenderer: Context Lost."),O=!0}function Lt(){nc("WebGLRenderer: Context Restored."),O=!1;let v=V.autoReset,B=Ot.enabled,Y=Ot.autoUpdate,W=Ot.needsUpdate,X=Ot.type;st(),V.autoReset=v,Ot.enabled=B,Ot.autoUpdate=Y,Ot.needsUpdate=W,Ot.type=X}function ue(v){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $t(v){let B=v.target;B.removeEventListener("dispose",$t),oe(B)}function oe(v){be(v),q.remove(v)}function be(v){let B=q.get(v).programs;B!==void 0&&(B.forEach(function(Y){gt.releaseProgram(Y)}),v.isShaderMaterial&&gt.releaseShaderCache(v))}this.renderBufferDirect=function(v,B,Y,W,X,yt){B===null&&(B=Ie);let Tt=X.isMesh&&X.matrixWorld.determinantAffine()<0,_t=wd(v,B,Y,W,X);x.setMaterial(W,Tt);let Et=Y.index,Ut=1;if(W.wireframe===!0){if(Et=it.getWireframeAttribute(Y),Et===void 0)return;Ut=2}let jt=Y.drawRange,ee=Y.attributes.position,Ct=jt.start*Ut,de=(jt.start+jt.count)*Ut;yt!==null&&(Ct=Math.max(Ct,yt.start*Ut),de=Math.min(de,(yt.start+yt.count)*Ut)),Et!==null?(Ct=Math.max(Ct,0),de=Math.min(de,Et.count)):ee!=null&&(Ct=Math.max(Ct,0),de=Math.min(de,ee.count));let Ne=de-Ct;if(Ne<0||Ne===1/0)return;Z.setup(X,W,_t,Y,Et);let we,ge=D;if(Et!==null&&(we=ht.get(Et),ge=R,ge.setIndex(we)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*dt()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(X.isLine){let Je=W.linewidth;Je===void 0&&(Je=1),x.setLineWidth(Je*dt()),X.isLineSegments?ge.setMode(L.LINES):X.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else X.isPoints?ge.setMode(L.POINTS):X.isSprite&&ge.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(St.get("WEBGL_multi_draw"))ge.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Je=X._multiDrawStarts,wt=X._multiDrawCounts,sn=X._multiDrawCount,le=Et?ht.get(Et).bytesPerElement:1,vn=q.get(W).currentProgram.getUniforms();for(let Gn=0;Gn<sn;Gn++)vn.setValue(L,"_gl_DrawID",Gn),ge.render(Je[Gn]/le,wt[Gn])}else if(X.isInstancedMesh)ge.renderInstances(Ct,Ne,X.count);else if(Y.isInstancedBufferGeometry){let Je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wt=Math.min(Y.instanceCount,Je);ge.renderInstances(Ct,Ne,wt)}else ge.render(Ct,Ne)};function Xe(v,B,Y,W){z!==null&&v.isNodeMaterial&&z.setObject(W,v),Jt===!0&&Dt.setState(v,Y,!1),v.transparent===!0&&v.side===Sn&&v.forceSinglePass===!1?(v.side=Ue,v.needsUpdate=!0,Br(v,B,W),v.side=bi,v.needsUpdate=!0,Br(v,B,W),v.side=Sn):Br(v,B,W)}this.compile=function(v,B,Y=null){Y===null&&(Y=v),z!==null&&z.renderStart(v,B,Y),T=pt.get(Y),T.init(B),_.push(T),Y.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),v!==Y&&v.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),ne=this.localClippingEnabled,Jt=Dt.init(this.clippingPlanes,ne),Jt===!0&&Dt.setGlobalState(this.clippingPlanes,B),z!==null&&Ot.render(T.state.shadowsArray,Y,B);let W=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let yt=X.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){let _t=yt[Tt];Xe(_t,Y,B,X),W.add(_t)}else Xe(yt,Y,B,X),W.add(yt)}),T=_.pop(),z!==null&&z.renderEnd(),W},this.compileAsync=function(v,B,Y=null){let W=this.compile(v,B,Y);return new Promise(X=>{function yt(){if(W.forEach(function(Tt){let Et=q.get(Tt).currentProgram;(Et===void 0||Et.isReady())&&W.delete(Tt)}),W.size===0){X(v);return}setTimeout(yt,10)}St.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Qi=null;function Sd(v){Qi&&Qi(v)}function Nc(){Ni.stop()}function Dc(){Ni.start()}let Ni=new Au;Ni.setAnimationLoop(Sd),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(v){Qi=v,lt.setAnimationLoop(v),v===null?Ni.stop():Ni.start()},lt.addEventListener("sessionstart",Nc),lt.addEventListener("sessionend",Dc),this.render=function(v,B){if(B!==void 0&&B.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(v,B);let Y=lt.enabled===!0&&lt.isPresenting===!0,W=E!==null&&(ot===null||Y)&&E.begin(U,ot);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(B),B=lt.getCamera()),v.isScene===!0&&v.onBeforeRender(U,v,B,ot),T=pt.get(v,_.length),T.init(B),T.state.textureUnits=K.getTextureUnits(),_.push(T),Yt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Bt.setFromProjectionMatrix(Yt,Pn,B.reversedDepth),ne=this.localClippingEnabled,Jt=Dt.init(this.clippingPlanes,ne),w=mt.get(v,N.length),w.init(),N.push(w),lt.enabled===!0&&lt.isPresenting===!0){let Tt=U.xr.getDepthSensingMesh();Tt!==null&&el(Tt,B,-1/0,U.sortObjects)}el(v,B,0,U.sortObjects),w.finish(),z!==null&&z.updateLights(T.state.lightsArray),U.sortObjects===!0&&w.sort(ut,Pt),nt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,nt&&Xt.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Jt===!0&&Dt.beginShadows();let X=T.state.shadowsArray;if(Ot.render(X,v,B),Jt===!0&&Dt.endShadows(),(W&&E.hasRenderPass())===!1){let Tt=w.opaque,_t=w.transmissive;if(T.setupLights(),B.isArrayCamera){let Et=B.cameras;if(_t.length>0)for(let Ut=0,jt=Et.length;Ut<jt;Ut++){let ee=Et[Ut];Fc(Tt,_t,v,ee)}nt&&Xt.render(v);for(let Ut=0,jt=Et.length;Ut<jt;Ut++){let ee=Et[Ut];Uc(w,v,ee,ee.viewport)}}else _t.length>0&&Fc(Tt,_t,v,B),nt&&Xt.render(v),Uc(w,v,B)}ot!==null&&tt===0&&(K.updateMultisampleRenderTarget(ot),K.updateRenderTargetMipmap(ot)),W&&E.end(U),v.isScene===!0&&v.onAfterRender(U,v,B),Z.resetDefaultState(),Q=-1,rt=null,_.pop(),_.length>0?(T=_[_.length-1],K.setTextureUnits(T.state.textureUnits),Jt===!0&&Dt.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,N.pop(),N.length>0?w=N[N.length-1]:w=null,z!==null&&z.renderEnd()};function el(v,B,Y,W){if(v.visible===!1)return;if(v.layers.test(B.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(B);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Bt)){W&&ve.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Yt);let Tt=J.update(v),_t=v.material;_t.visible&&w.push(v,Tt,_t,Y,ve.z,null,B)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Bt))){let Tt=J.update(v),_t=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ve.copy(v.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ve.copy(Tt.boundingSphere.center)),ve.applyMatrix4(v.matrixWorld).applyMatrix4(Yt)),Array.isArray(_t)){let Et=Tt.groups;for(let Ut=0,jt=Et.length;Ut<jt;Ut++){let ee=Et[Ut],Ct=_t[ee.materialIndex];Ct&&Ct.visible&&w.push(v,Tt,Ct,Y,ve.z,ee,B)}}else _t.visible&&w.push(v,Tt,_t,Y,ve.z,null,B)}}let yt=v.children;for(let Tt=0,_t=yt.length;Tt<_t;Tt++)el(yt[Tt],B,Y,W)}function Uc(v,B,Y,W){let{opaque:X,transmissive:yt,transparent:Tt}=v;T.setupLightsView(Y),Jt===!0&&Dt.setGlobalState(U.clippingPlanes,Y),W&&x.viewport(at.copy(W)),X.length>0&&Or(X,B,Y),yt.length>0&&Or(yt,B,Y),Tt.length>0&&Or(Tt,B,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Fc(v,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Ct=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new cn(1,1,{generateMipmaps:!0,type:Ct?On:dn,minFilter:Ai,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let yt=T.state.transmissionRenderTarget[W.id],Tt=W.viewport||at;yt.setSize(Tt.z*U.transmissionResolutionScale,Tt.w*U.transmissionResolutionScale);let _t=U.getRenderTarget(),Et=U.getActiveCubeFace(),Ut=U.getActiveMipmapLevel();U.setRenderTarget(yt),U.getClearColor(Ht),Zt=U.getClearAlpha(),Zt<1&&U.setClearColor(16777215,.5),U.clear(),nt&&Xt.render(Y);let jt=U.toneMapping;U.toneMapping=Un;let ee=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Jt===!0&&Dt.setGlobalState(U.clippingPlanes,W),Or(v,Y,W),K.updateMultisampleRenderTarget(yt),K.updateRenderTargetMipmap(yt),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let de=0,Ne=B.length;de<Ne;de++){let we=B[de],{object:ge,geometry:Je,material:wt,group:sn}=we;if(wt.side===Sn&&ge.layers.test(W.layers)){let le=wt.side;wt.side=Ue,wt.needsUpdate=!0,Oc(ge,Y,W,Je,wt,sn),wt.side=le,wt.needsUpdate=!0,Ct=!0}}Ct===!0&&(K.updateMultisampleRenderTarget(yt),K.updateRenderTargetMipmap(yt))}U.setRenderTarget(_t,Et,Ut),U.setClearColor(Ht,Zt),ee!==void 0&&(W.viewport=ee),U.toneMapping=jt}function Or(v,B,Y){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,yt=v.length;X<yt;X++){let Tt=v[X],{object:_t,geometry:Et,group:Ut}=Tt,jt=Tt.material;jt.allowOverride===!0&&W!==null&&(jt=W),_t.layers.test(Y.layers)&&Oc(_t,B,Y,Et,jt,Ut)}}function Oc(v,B,Y,W,X,yt){z!==null&&X.isNodeMaterial&&z.setObject(v,X),v.onBeforeRender(U,B,Y,W,X,yt),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(U,B,Y,W,v,yt),X.transparent===!0&&X.side===Sn&&X.forceSinglePass===!1?(X.side=Ue,X.needsUpdate=!0,U.renderBufferDirect(Y,B,W,X,v,yt),X.side=bi,X.needsUpdate=!0,U.renderBufferDirect(Y,B,W,X,v,yt),X.side=Sn):U.renderBufferDirect(Y,B,W,X,v,yt),v.onAfterRender(U,B,Y,W,X,yt)}function Br(v,B,Y){B.isScene!==!0&&(B=Ie);let W=q.get(v),X=T.state.lights,yt=T.state.shadowsArray,Tt=X.state.version,_t=gt.getParameters(v,X.state,yt,B,Y,T.state.lightProbeGridArray),Et=gt.getProgramCacheKey(_t),Ut=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let jt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=ct.get(v.envMap||W.environment,jt),W.envMapRotation=W.environment!==null&&v.envMap===null?B.environmentRotation:v.envMapRotation,Ut===void 0&&(v.addEventListener("dispose",$t),Ut=new Map,W.programs=Ut);let ee=Ut.get(Et);if(ee!==void 0){if(W.currentProgram===ee&&W.lightsStateVersion===Tt)return zc(v,_t),ee}else _t.uniforms=gt.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,Y,_t),v.onBeforeCompile(_t,U),ee=gt.acquireProgram(_t,Et),Ut.set(Et,ee),W.uniforms=_t.uniforms;let Ct=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ct.clippingPlanes=Dt.uniform),zc(v,_t),W.needsLights=Ad(v),W.lightsStateVersion=Tt,W.needsLights&&(Ct.ambientLightColor.value=X.state.ambient,Ct.lightProbe.value=X.state.probe,Ct.sunLights.value=X.state.sun,Ct.sunLightShadows.value=X.state.sunShadow,Ct.directionalLights.value=X.state.directional,Ct.directionalLightShadows.value=X.state.directionalShadow,Ct.spotLights.value=X.state.spot,Ct.spotLightShadows.value=X.state.spotShadow,Ct.rectAreaLights.value=X.state.rectArea,Ct.ltc_1.value=X.state.rectAreaLTC1,Ct.ltc_2.value=X.state.rectAreaLTC2,Ct.pointLights.value=X.state.point,Ct.pointLightShadows.value=X.state.pointShadow,Ct.hemisphereLights.value=X.state.hemi,Ct.sunShadowMatrix.value=X.state.sunShadowMatrix,Ct.sunShadowCascade.value=X.state.sunShadowCascade,Ct.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ct.spotLightMatrix.value=X.state.spotLightMatrix,Ct.spotLightMap.value=X.state.spotLightMap,Ct.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=ee,W.uniformsList=null,ee}function Bc(v){if(v.uniformsList===null){let B=v.currentProgram.getUniforms();v.uniformsList=Os.seqWithValue(B.seq,v.uniforms)}return v.uniformsList}function zc(v,B){let Y=q.get(v);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function bd(v,B){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let Y=0,W=v.length;Y<W;Y++){let X=v[Y];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function wd(v,B,Y,W,X){B.isScene!==!0&&(B=Ie),K.resetTextureUnits();let yt=B.fog,Tt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,_t=ot===null?U.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ie.workingColorSpace,Et=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ut=ct.get(W.envMap||Tt,Et),jt=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ee=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!Y.morphAttributes.position,de=!!Y.morphAttributes.normal,Ne=!!Y.morphAttributes.color,we=Un;W.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(we=U.toneMapping);let ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Je=ge!==void 0?ge.length:0,wt=q.get(W),sn=T.state.lights;if(Jt===!0&&(ne===!0||v!==rt)){let Me=v===rt&&W.id===Q;Dt.setState(W,v,Me)}let le=!1;W.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==sn.state.version||wt.outputColorSpace!==_t||X.isBatchedMesh&&wt.batching===!1||!X.isBatchedMesh&&wt.batching===!0||X.isBatchedMesh&&wt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&wt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&wt.instancing===!1||!X.isInstancedMesh&&wt.instancing===!0||X.isSkinnedMesh&&wt.skinning===!1||!X.isSkinnedMesh&&wt.skinning===!0||X.isInstancedMesh&&wt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&wt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&wt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&wt.instancingMorph===!1&&X.morphTexture!==null||wt.envMap!==Ut||W.fog===!0&&wt.fog!==yt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Dt.numPlanes||wt.numIntersection!==Dt.numIntersection)||wt.vertexAlphas!==jt||wt.vertexTangents!==ee||wt.morphTargets!==Ct||wt.morphNormals!==de||wt.morphColors!==Ne||wt.toneMapping!==we||wt.morphTargetsCount!==Je||!!wt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,wt.__version=W.version);let vn=wt.currentProgram;le===!0&&(vn=Br(W,B,X),z&&W.isNodeMaterial&&z.onUpdateProgram(W,vn,wt));let Gn=!1,hi=!1,ts=!1,pe=vn.getUniforms(),Pe=wt.uniforms;if(x.useProgram(vn.program)&&(Gn=!0,hi=!0,ts=!0),W.id!==Q&&(Q=W.id,hi=!0),wt.needsLights){let Me=bd(T.state.lightProbeGridArray,X);wt.lightProbeGrid!==Me&&(wt.lightProbeGrid=Me,hi=!0)}if(Gn||rt!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pe.setValue(L,"projectionMatrix",v.projectionMatrix),pe.setValue(L,"viewMatrix",v.matrixWorldInverse);let di=pe.map.cameraPosition;di!==void 0&&di.setValue(L,he.setFromMatrixPosition(v.matrixWorld)),C.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pe.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),rt!==v&&(rt=v,hi=!0,ts=!0)}if(wt.needsLights&&(sn.state.sunShadowMap.length>0&&pe.setValue(L,"sunShadowMap",sn.state.sunShadowMap,K),sn.state.directionalShadowMap.length>0&&pe.setValue(L,"directionalShadowMap",sn.state.directionalShadowMap,K),sn.state.spotShadowMap.length>0&&pe.setValue(L,"spotShadowMap",sn.state.spotShadowMap,K),sn.state.pointShadowMap.length>0&&pe.setValue(L,"pointShadowMap",sn.state.pointShadowMap,K)),X.isSkinnedMesh){pe.setOptional(L,X,"bindMatrix"),pe.setOptional(L,X,"bindMatrixInverse");let Me=X.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),pe.setValue(L,"boneTexture",Me.boneTexture,K))}X.isBatchedMesh&&(pe.setOptional(L,X,"batchingTexture"),pe.setValue(L,"batchingTexture",X._matricesTexture,K),pe.setOptional(L,X,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",X._indirectTexture,K),pe.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",X._colorsTexture,K));let ui=Y.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&m.update(X,Y,vn),(hi||wt.receiveShadow!==X.receiveShadow)&&(wt.receiveShadow=X.receiveShadow,pe.setValue(L,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Pe.envMapIntensity.value=B.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=ax()),hi){if(pe.setValue(L,"toneMappingExposure",U.toneMappingExposure),wt.needsLights&&Td(Pe,ts),yt&&W.fog===!0&&bt.refreshFogUniforms(Pe,yt),bt.refreshMaterialUniforms(Pe,W,et,j,T.state.transmissionRenderTarget[v.id]),wt.needsLights&&wt.lightProbeGrid){let Me=wt.lightProbeGrid;Pe.probesSH.value=Me.texture,Pe.probesMin.value.copy(Me.boundingBox.min),Pe.probesMax.value.copy(Me.boundingBox.max),Pe.probesResolution.value.copy(Me.resolution)}Os.upload(L,Bc(wt),Pe,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Os.upload(L,Bc(wt),Pe,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pe.setValue(L,"center",X.center),pe.setValue(L,"modelViewMatrix",X.modelViewMatrix),pe.setValue(L,"normalMatrix",X.normalMatrix),pe.setValue(L,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Me=W.uniformsGroups;for(let di=0,es=Me.length;di<es;di++){let Vc=Me[di];G.update(Vc,vn),G.bind(Vc,vn)}}return vn}function Td(v,B){v.ambientLightColor.needsUpdate=B,v.lightProbe.needsUpdate=B,v.sunLights.needsUpdate=B,v.sunLightShadows.needsUpdate=B,v.directionalLights.needsUpdate=B,v.directionalLightShadows.needsUpdate=B,v.pointLights.needsUpdate=B,v.pointLightShadows.needsUpdate=B,v.spotLights.needsUpdate=B,v.spotLightShadows.needsUpdate=B,v.rectAreaLights.needsUpdate=B,v.hemisphereLights.needsUpdate=B}function Ad(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(v,B,Y){let W=q.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(v.texture).__webglTexture=B,q.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,B){let Y=q.get(v);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(v,B=0,Y=0){ot=v,$=B,tt=Y;let W=null,X=!1,yt=!1;if(v){let _t=q.get(v);if(_t.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,_t.__webglFramebuffer),at.copy(v.viewport),Rt.copy(v.scissor),It=v.scissorTest,x.viewport(at),x.scissor(Rt),x.setScissorTest(It),Q=-1;return}else if(_t.__webglFramebuffer===void 0)K.setupRenderTarget(v);else if(_t.__hasExternalTextures)K.rebindTextures(v,q.get(v.texture).__webglTexture,q.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let jt=v.depthTexture;if(_t.__boundDepthTexture!==jt){if(jt!==null&&q.has(jt)&&(v.width!==jt.image.width||v.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(v)}}let Et=v.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(yt=!0);let Ut=q.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ut[B])?W=Ut[B][Y]:W=Ut[B],X=!0):v.samples>0&&K.useMultisampledRTT(v)===!1?W=q.get(v).__webglMultisampledFramebuffer:Array.isArray(Ut)?W=Ut[Y]:W=Ut,at.copy(v.viewport),Rt.copy(v.scissor),It=v.scissorTest}else at.copy(Mt).multiplyScalar(et).floor(),Rt.copy(Ft).multiplyScalar(et).floor(),It=ft;if(Y!==0&&(W=k),x.bindFramebuffer(L.FRAMEBUFFER,W)&&x.drawBuffers(v,W),x.viewport(at),x.scissor(Rt),x.setScissorTest(It),X){let _t=q.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,_t.__webglTexture,Y)}else if(yt){let _t=B;for(let Et=0;Et<v.textures.length;Et++){let Ut=q.get(v.textures[Et]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Et,Ut.__webglTexture,Y,_t)}}else if(v!==null&&Y!==0){let _t=q.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,Y)}Q=-1};function kc(v){let B=q.get(v);return(B.__readFormat!==v.format||B.__readType!==v.type)&&(B.__readFormat=v.format,B.__readType=v.type,B.__formatReadable=C.textureFormatReadable(v.format),B.__typeReadable=C.textureTypeReadable(v.type)),B}this.readRenderTargetPixels=function(v,B,Y,W,X,yt,Tt,_t=0){if(!(v&&v.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=q.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0&&(Et=Et[Tt]),Et){x.bindFramebuffer(L.FRAMEBUFFER,Et);try{let Ut=v.textures[_t],jt=Ut.format,ee=Ut.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t);let Ct=kc(Ut);if(Ct.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=v.width-W&&Y>=0&&Y<=v.height-X&&L.readPixels(B,Y,W,X,A.convert(jt),A.convert(ee),yt)}finally{let Ut=ot!==null?q.get(ot).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(v,B,Y,W,X,yt,Tt,_t=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=q.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0&&(Et=Et[Tt]),Et)if(B>=0&&B<=v.width-W&&Y>=0&&Y<=v.height-X){x.bindFramebuffer(L.FRAMEBUFFER,Et);let Ut=v.textures[_t],jt=Ut.format,ee=Ut.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t);let Ct=kc(Ut);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,de),L.bufferData(L.PIXEL_PACK_BUFFER,yt.byteLength,L.STREAM_READ),L.readPixels(B,Y,W,X,A.convert(jt),A.convert(ee),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ne=ot!==null?q.get(ot).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ne);let we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qh(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,de),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,yt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(de),L.deleteSync(we),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,B=null,Y=0){let W=Math.pow(2,-Y),X=Math.floor(v.image.width*W),yt=Math.floor(v.image.height*W),Tt=B!==null?B.x:0,_t=B!==null?B.y:0;K.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Tt,_t,X,yt),x.unbindTexture()},this.copyTextureToTexture=function(v,B,Y=null,W=null,X=0,yt=0){let Tt,_t,Et,Ut,jt,ee,Ct,de,Ne,we=v.isCompressedTexture?v.mipmaps[yt]:v.image;if(Y!==null)Tt=Y.max.x-Y.min.x,_t=Y.max.y-Y.min.y,Et=Y.isBox3?Y.max.z-Y.min.z:1,Ut=Y.min.x,jt=Y.min.y,ee=Y.isBox3?Y.min.z:0;else{let Pe=Math.pow(2,-X);Tt=Math.floor(we.width*Pe),_t=Math.floor(we.height*Pe),v.isDataArrayTexture?Et=we.depth:v.isData3DTexture?Et=Math.floor(we.depth*Pe):Et=1,Ut=0,jt=0,ee=0}W!==null?(Ct=W.x,de=W.y,Ne=W.z):(Ct=0,de=0,Ne=0);let ge=A.convert(B.format),Je=A.convert(B.type),wt;B.isData3DTexture?(K.setTexture3D(B,0),wt=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),wt=L.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),wt=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let sn=x.getParameter(L.UNPACK_ROW_LENGTH),le=x.getParameter(L.UNPACK_IMAGE_HEIGHT),vn=x.getParameter(L.UNPACK_SKIP_PIXELS),Gn=x.getParameter(L.UNPACK_SKIP_ROWS),hi=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,we.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,we.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Ut),x.pixelStorei(L.UNPACK_SKIP_ROWS,jt),x.pixelStorei(L.UNPACK_SKIP_IMAGES,ee);let ts=v.isDataArrayTexture||v.isData3DTexture,pe=B.isDataArrayTexture||B.isData3DTexture;if(v.isDepthTexture){let Pe=q.get(v),ui=q.get(B),Me=q.get(Pe.__renderTarget),di=q.get(ui.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,Me.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let es=0;es<Et;es++)ts&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(v).__webglTexture,X,ee+es),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(B).__webglTexture,yt,Ne+es)),L.blitFramebuffer(Ut,jt,Tt,_t,Ct,de,Tt,_t,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||q.has(v)){let Pe=q.get(v),ui=q.get(B);x.bindFramebuffer(L.READ_FRAMEBUFFER,F),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let Me=0;Me<Et;Me++)ts?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,X,ee+Me):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,X),pe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ui.__webglTexture,yt,Ne+Me):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ui.__webglTexture,yt),X!==0?L.blitFramebuffer(Ut,jt,Tt,_t,Ct,de,Tt,_t,L.COLOR_BUFFER_BIT,L.NEAREST):pe?L.copyTexSubImage3D(wt,yt,Ct,de,Ne+Me,Ut,jt,Tt,_t):L.copyTexSubImage2D(wt,yt,Ct,de,Ut,jt,Tt,_t);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pe?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(wt,yt,Ct,de,Ne,Tt,_t,Et,ge,Je,we.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(wt,yt,Ct,de,Ne,Tt,_t,Et,ge,we.data):L.texSubImage3D(wt,yt,Ct,de,Ne,Tt,_t,Et,ge,Je,we):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,yt,Ct,de,Tt,_t,ge,Je,we.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,yt,Ct,de,we.width,we.height,ge,we.data):L.texSubImage2D(L.TEXTURE_2D,yt,Ct,de,Tt,_t,ge,Je,we);x.pixelStorei(L.UNPACK_ROW_LENGTH,sn),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le),x.pixelStorei(L.UNPACK_SKIP_PIXELS,vn),x.pixelStorei(L.UNPACK_SKIP_ROWS,Gn),x.pixelStorei(L.UNPACK_SKIP_IMAGES,hi),yt===0&&B.generateMipmaps&&L.generateMipmap(wt),x.unbindTexture()},this.initRenderTarget=function(v){q.get(v).__webglFramebuffer===void 0&&K.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?K.setTextureCube(v,0):v.isData3DTexture?K.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?K.setTexture2DArray(v,0):K.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){$=0,tt=0,ot=null,x.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Go=class extends Gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new He;t.deleteAttribute("uv");let e=new ae({side:Ue}),n=new ae,s=new Xi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new vt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Nn(t,n,6),o=new Ce;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new vt(t,ks(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new vt(t,ks(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new vt(t,ks(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new vt(t,ks(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new vt(t,ks(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new vt(t,ks(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ks(i){return new dr({color:0,emissive:16777215,emissiveIntensity:i})}function Ho(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new xe,c=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let y=0;y<f.count;++y)d.push(f.getX(y)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Nu(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let S=0;S<a[u].length;++S)f.push(a[u][S][h]);let y=Nu(f);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(y)}}}return l}function Nu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new an(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,f=u.count;h<f;h++)for(let y=0;y<e;y++){let S=u.getComponent(h,y);o.setComponent(h+d,y,S)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Ee={hand:'"Caveat", "Comic Sans MS", cursive',marker:'"Permanent Marker", "Impact", sans-serif',chalk:'"Cabin Sketch", "Chalkboard SE", "Comic Sans MS", cursive',type:'"Special Elite", "Courier New", monospace',brush:'"Yuji Syuku", serif',sign:'"Arial Black", "Helvetica Neue", Arial, sans-serif'},Be=(i,t)=>{let e=Object.assign(document.createElement("canvas"),{width:i,height:t});return[e,e.getContext("2d")]};function ze(i,t=!0){let e=new Dn(i);return e.wrapS=e.wrapT=_s,e.anisotropy=8,t&&(e.colorSpace=rn),e}var Bn=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function Nr(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n;s=s*s*(3-2*s),r=r*r*(3-2*r);let a=Bn(e,n),o=Bn(e+1,n),l=Bn(e,n+1),c=Bn(e+1,n+1);return a+(o-a)*s+(l-a)*r+(a-o-l+c)*s*r}function Du(i,t,e){let[n,s]=Be(i,t),r=s.createImageData(i,t),a=r.data;for(let o=0,l=0;o<t;o++)for(let c=0;c<i;c++,l+=4){let[u,d,h]=e(c/i,o/t,c,o);a[l]=u,a[l+1]=d,a[l+2]=h,a[l+3]=255}return s.putImageData(r,0,0),[n,s]}function Ri({planks:i=5,base:t=[120,78,45],spread:e=.16,rings:n=150,joints:s=1.3,seed:r=1,size:a=512,seams:o=!0}={}){return ze(Du(a,a,(l,c,u,d)=>{let h=Math.floor(l*i),f=l*i-h,y=c+Bn(h,r)*3,S=o&&(y*s+Bn(h,r+7))%1<.006,g=Nr(f*1.5+h*13,y*2.5)*.22+Nr(f*4+h,y*9)*.03,p=Math.sin((f+g)*n),b=Nr(f*70+h*7,y*1.2),P=Bn(u,Math.floor(d/5))*.05,M=Math.max(0,1-Math.hypot((f-Bn(h,r+3))*3,(y*2%1-.5)*1.2)*4)*(Bn(h,r+5)>.75),w=(1+(Bn(h,r+1)-.5)*2*e)*(.84+.07*p+.1*(b-.5)-P-M*.3);return o&&(f<.012||f>.988||S)&&(w*=.42),t.map(T=>T*w)})[0])}function Uu(){return ze(Du(512,512,(i,t,e,n)=>{let s=.93+.05*Nr(i*9,t*9)+.03*Nr(i*40,t*40)+(Bn(e,n)-.5)*.03;return[236*s,232*s,222*s]})[0])}function Fu(i,t,e,n){let[s,r]=Be(t,e);r.fillStyle=r.strokeStyle="rgba(240,240,232,.92)",r.lineCap=r.lineJoin="round",n(r),r.globalCompositeOperation="destination-out";for(let a=0;a<t*e/9;a++)r.globalAlpha=Math.random()*.8,r.fillRect(Math.random()*t,Math.random()*e,1+Math.random()*2,1);i.drawImage(s,0,0)}var oi=(i,t,e)=>{i.lineWidth=e,i.beginPath(),t.forEach(([n,s],r)=>i[r?"lineTo":"moveTo"](n+Math.random()*3,s+Math.random()*3)),i.stroke()};function Ou(){let[e,n]=Be(2048,660);n.fillStyle="#18231d",n.fillRect(0,0,2048,660);for(let s=0;s<260;s++)n.strokeStyle=`rgba(200,210,200,${Math.random()*.035})`,n.lineWidth=30+Math.random()*80,n.beginPath(),n.arc(Math.random()*2048,Math.random()*660,60+Math.random()*260,Math.random()*6,Math.random()*6),n.stroke();return Fu(n,2048,660,s=>{s.font=`700 44px ${Ee.chalk}`,s.fillText("Tuesday (again)",60,70),s.font=`700 76px ${Ee.chalk}`,s.fillText("TODAY: STRUCTURAL INTEGRITY",60,165),oi(s,[[60,185],[1060,180]],5),s.font=`700 46px ${Ee.chalk}`,["1. Walls hold up the ceiling.","2. The ceiling holds up the 2nd floor.","3. The 2nd floor holds up the principal.","4. Do you see where this is going, D.B.?"].forEach((l,c)=>s.fillText(l,80,260+c*66)),s.font=`700 36px ${Ee.chalk}`,s.fillText("Pop quiz: how many walls does this room have?",80,560),s.fillText("(answer may change before the bell)",120,604),s.save(),s.translate(1e3,615),s.rotate(-.08),s.font=`28px ${Ee.hand}`,s.fillText("4 for now ;)",0,0),s.restore();let r=1290,a=540;oi(s,[[r,a],[r,a-230],[r+300,a-230],[r+300,a]],6),oi(s,[[r-20,a-225],[r+150,a-330],[r+320,a-225]],6);for(let l=0;l<2;l++)for(let c=0;c<3;c++)s.strokeRect(r+30+c*90,a-200+l*85,50,50);oi(s,[[r+160,a-330],[r+190,a-250],[r+150,a-170],[r+200,a-60],[r+170,a]],4);let o=r+470;s.beginPath(),s.arc(o,a-150,22,0,7),s.stroke(),oi(s,[[o,a-128],[o,a-60],[o-25,a]],5),oi(s,[[o,a-60],[o+25,a]],5),oi(s,[[o,a-110],[o+55,a-90]],5),s.strokeRect(o+50,a-70,70,70),oi(s,[[o+85,a-70],[o+85,a-120]],5),oi(s,[[o+60,a-120],[o+110,a-120]],7);for(let l=0;l<3;l++)s.lineWidth=6,s.beginPath(),s.ellipse(o+30,a-90,150+l*9,130+l*7,l*.2,0,7),s.stroke();s.font=`700 90px ${Ee.chalk}`,s.fillText("NO.",o+150,a-230),s.font=`700 42px ${Ee.chalk}`,s.fillText("DEMOLITION BOY: STAY AFTER CLASS",1170,80),s.strokeRect(1150,30,820,70)}),ze(e)}function Wo(i){let[n,s]=Be(1600,150);return i&&Fu(s,1600,150,r=>{let a=88;do r.font=`700 ${a-=4}px ${Ee.chalk}`;while(r.measureText(i).width>1560);r.fillText(i,20,105)}),n}function Xo(i,t,e){let n=[];for(let s of t.split(`
`)){let r="";for(let a of s.split(" ")){let o=r?`${r} ${a}`:a;i.measureText(o).width>e&&r?(n.push(r),r=a):r=o}n.push(r)}return n}var ox={yellow:"#f7e26b",pink:"#f6a6c1",blue:"#9fd4f2",green:"#b8e68a",orange:"#f8b26a"};function qo(i,t="yellow",e=46){let[n,s]=Be(512,512),r=s.createLinearGradient(0,0,0,512);r.addColorStop(0,"rgba(90,70,20,0)"),r.addColorStop(1,"rgba(90,70,20,.2)"),s.fillStyle=ox[t],s.fillRect(0,0,512,512),s.fillStyle=r,s.fillRect(0,0,512,512),s.fillStyle="rgba(0,0,0,.06)",s.fillRect(0,0,512,70),s.fillStyle="#1d2433",s.font=`600 ${e}px ${Ee.hand}`,s.translate(256,0),s.rotate((Math.random()-.5)*.06);let a=Xo(s,i,440);return a.forEach((o,l)=>{s.textAlign="center",s.fillText(o,0,256-(a.length-1)*e*.55+l*e*1.1+e*.35)}),ze(n)}function Bu(i,t){let[e,n]=Be(768,1024);return n.fillStyle="#f4efe2",n.fillRect(0,0,768,1024),n.fillStyle="#7a1f1f",n.font=`700 30px ${Ee.sign}`,n.fillText(i,60,90),n.fillRect(60,108,648,4),n.fillStyle="#2a2622",n.font=`27px ${Ee.type}`,Xo(n,t,640).forEach((s,r)=>n.fillText(s,60,170+r*40)),n.strokeStyle="rgba(120,60,20,.35)",n.lineWidth=7,n.beginPath(),n.arc(560,880,70,0,7),n.stroke(),ze(e)}function zu(i,t,e){let[n,s]=Be(256,768);if(s.fillStyle="#3b3328",s.fillRect(0,0,256,768),s.fillStyle="#efe7d3",s.fillRect(18,60,220,640),s.fillStyle="#16120e",s.textAlign="center",e){let a=Math.min(130,520/i.length);s.font=`${a}px ${Ee.brush}`,[...i].forEach((o,l)=>s.fillText(o,128,90+a*.95+l*a*1.02))}s.font=`600 ${e?26:36}px ${Ee.hand}`;let r=Xo(s,t,190);return r.forEach((a,o)=>s.fillText(a,128,(e?690-(r.length-1)*28:380-r.length*20)+o*(e?28:42))),ze(n)}function Yo(i,t,{bg:e="#f5f2ea",bar:n="#c0262d",ink:s="#1b1b1b",w:r=1024,h:a=512,size:o=70,foot:l=""}={}){let[c,u]=Be(r,a);return u.fillStyle=e,u.fillRect(0,0,r,a),u.fillStyle=n,u.fillRect(0,0,r,a*.26),u.fillStyle="#fff",u.textAlign="center",u.font=`900 ${a*.14}px ${Ee.sign}`,u.fillText(i,r/2,a*.18),u.fillStyle=s,u.font=`900 ${o}px ${Ee.sign}`,Xo(u,t,r*.86).forEach((d,h)=>u.fillText(d,r/2,a*.45+h*o*1.15)),l&&(u.font=`600 ${a*.08}px ${Ee.hand}`,u.textAlign="right",u.fillText(l,r*.95,a*.93)),ze(c)}function ku(i){let[t,e]=Be(512,640);e.fillStyle="#fbfaf4",e.fillRect(0,0,512,640),e.strokeStyle="rgba(70,110,200,.35)",e.lineWidth=2;for(let n=70;n<640;n+=48)e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();return e.strokeStyle="rgba(220,60,60,.4)",e.beginPath(),e.moveTo(60,0),e.lineTo(60,640),e.stroke(),i.forEach((n,s)=>{e.fillStyle=s%2?"#2b3fa0":"#202020",e.font=s%2?`700 40px ${Ee.marker}`:`600 44px ${Ee.hand}`,e.fillText(n,s%2?110:80,112+s*96)}),ze(t)}function Vu(){let[i,t]=Be(256,128);for(let e of[72,184]){let n=t.createRadialGradient(e,64,0,e,64,46);n.addColorStop(0,"rgba(255,250,170,1)"),n.addColorStop(.35,"rgba(210,240,80,.9)"),n.addColorStop(1,"rgba(120,200,40,0)"),t.fillStyle=n,t.beginPath(),t.ellipse(e,64,46,34,0,0,7),t.fill(),t.fillStyle="#050505",t.beginPath(),t.ellipse(e+4,64,6,24,0,0,7),t.fill()}return ze(i)}function Gu(i){let[t,e]=Be(128,192);return e.fillStyle="#121212",e.fillRect(0,0,128,192),e.fillStyle="#fafafa",e.textAlign="center",e.font=`900 150px ${Ee.sign}`,e.fillText(i,64,150),e.fillStyle="rgba(0,0,0,.6)",e.fillRect(0,94,128,4),ze(t)}function Hu(){let[i,t]=Be(512,512);t.fillStyle="#f7f5ee",t.beginPath(),t.arc(256,256,250,0,7),t.fill(),t.fillStyle="#222",t.textAlign="center",t.font=`700 52px ${Ee.sign}`;for(let e=1;e<=12;e++){let n=(12-e)/12*Math.PI*2;t.fillText(String(e),256-Math.sin(n)*190,274-Math.cos(n)*190)}return t.font=`500 28px ${Ee.hand}`,t.fillStyle="#b02020",t.fillText("detention ends: never",256,360),ze(i)}function Wu(){let[i,t]=Be(1024,1024);t.strokeStyle="rgba(40,34,28,.85)",t.lineCap="round";for(let e=0;e<16;e++){let n=512,s=512,r=e/16*Math.PI*2+Math.random()*.3,a=6;t.beginPath(),t.moveTo(n,s);for(let o=0,l=6+Math.random()*8;o<l;o++)r+=(Math.random()-.5)*.9,n+=Math.cos(r)*34,s+=Math.sin(r)*34,t.lineWidth=a*=.86,t.lineTo(n,s);t.stroke()}return ze(i)}function Xu(i=.55){let[t,e]=Be(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(0,0,0,${i})`),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),ze(t)}function qu(){let[i,t]=Be(256,256),e=t.createRadialGradient(128,128,30,128,128,128);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),ze(i)}function Yu(){let[i,t]=Be(4,128),e=t.createLinearGradient(0,0,0,128);return e.addColorStop(0,"rgba(0,0,0,.5)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,4,128),ze(i)}function Sc(i=""){let[t,e]=Be(512,512);for(let s=0;s<70;s++){let r=Math.random()*Math.PI*2,a=120+Math.random()*130,o=e.createLinearGradient(256,256,256+Math.cos(r)*a,256+Math.sin(r)*a);o.addColorStop(0,"rgba(15,10,6,.5)"),o.addColorStop(1,"rgba(15,10,6,0)"),e.strokeStyle=o,e.lineWidth=10+Math.random()*30,e.beginPath(),e.moveTo(256,256),e.lineTo(256+Math.cos(r)*a,256+Math.sin(r)*a),e.stroke()}let n=e.createRadialGradient(256,256,0,256,256,120);return n.addColorStop(0,"rgba(8,5,3,.95)"),n.addColorStop(.6,"rgba(25,14,6,.7)"),n.addColorStop(1,"rgba(25,14,6,0)"),e.fillStyle=n,e.fillRect(0,0,512,512),i&&(e.font=`700 54px ${Ee.marker}`,e.textAlign="center",e.fillStyle="rgba(255,230,190,.35)",e.fillText(i,258,452),e.fillStyle="rgba(40,22,10,.85)",e.fillText(i,256,450)),ze(t)}function Zu(){let[i,t]=Be(1024,512),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#b9d3ea"),e.addColorStop(.55,"#eef3f3"),e.addColorStop(1,"#f6f7f0"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.filter="blur(8px)";for(let n=0;n<140;n++){let s=Math.random()*1024,r=330+Math.random()*200,a=25+Math.random()*70;t.fillStyle=`hsla(${80+Math.random()*30}, ${18+Math.random()*20}%, ${58+Math.random()*25}%, .9)`,t.beginPath(),t.arc(s,r-a*.3,a,0,7),t.fill()}return ze(i)}function $u(i,t){let[,e]=Be(64,64),n=s=>(e.clearRect(0,0,64,64),e.font=`48px ${t}`,e.fillText(s,4,52),e.getImageData(0,0,64,64).data.join());return n(i[0])!==n("\uFFFF")}var Kt=9,_e=9.6,ke=3.3,Zo=new I(-1,.55,.25).normalize(),ji=[-3.15,-1.05,1.05,3.15].map(i=>[i-.85,i+.85]),tn=.9,fn=2.75;function li(i,t,e,n=1){let s=new He(i,t,e),r=s.attributes.uv,a=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let o=0;o<24;o++){let[l,c]=a[o>>2];r.setXY(o,r.getX(o)*l/n,r.getY(o)*c/n)}return s}var Ki=(i,t,e,n,s=0,r=0,a=0)=>i.applyMatrix4(new re().compose(new I(t,e,n),new Le().setFromEuler(new gn(s,r,a)),new I(1,1,1)));function Ju(i,{cjk:t}){let e=(nt,dt,L={})=>new ae({map:nt,roughness:dt,envMapIntensity:.6,...L}),n={floor:e(Ri({planks:8,base:[96,60,36],rings:90,joints:.7,seed:2}),.38),ceiling:e(Ri({planks:6,base:[140,90,52],seed:3,spread:.12,joints:0}),.75),beam:e(Ri({planks:1,base:[104,66,40],seed:4,seams:!1}),.6),wains:e(Ri({planks:7,base:[86,54,33],seed:5,joints:0}),.5),trim:e(Ri({planks:1,base:[74,46,28],seed:6,seams:!1}),.5),plaster:e(Uu(),.95),desk:e(Ri({planks:2,base:[128,86,52],seed:7,spread:.06,seams:!1}),.42),chair:e(Ri({planks:2,base:[104,68,40],seed:8,seams:!1}),.55),metal:new ae({color:12170926,roughness:.45,metalness:.3}),dark:new ae({color:657414,roughness:1}),glass:new ae({color:16777215,roughness:.05,metalness:.9,transparent:!0,opacity:.06,depthWrite:!1}),frosted:new hn({color:10135731})},s=(nt,dt,L,Nt,St,C,x,{tile:V=1,parent:q=i,cast:K=!0,ry:ct=0}={})=>{let ht=new vt(li(dt,L,Nt,V),nt);return ht.position.set(St,C,x),ht.rotation.y=ct,ht.castShadow=K,ht.receiveShadow=!0,ht.userData.bake=q===i,q.add(ht),ht},r=(nt,dt,L,Nt,St,C,{ry:x=0,rx:V=0,rz:q=0,parent:K=i,lit:ct=!0,blend:ht}={})=>{let it=ct?new ae({map:nt,roughness:.9,transparent:!0,alphaTest:.02,polygonOffset:!0,polygonOffsetFactor:-2}):new hn({map:nt,transparent:!0,depthWrite:!1,toneMapped:!1,...ht&&{blending:ht}}),J=new vt(new Ze(dt,L),it);return J.position.set(Nt,St,C),J.rotation.set(V,x,q,"YXZ"),J.receiveShadow=ct,K.add(J),J},a=(nt,dt,L,Nt,St,C=0,x=(Math.random()-.5)*.2,V)=>r(qo(nt,dt,V),.13,.13,L,Nt,St,{ry:C,rz:x}),o=(nt,dt,L,Nt,St,C)=>r(qo(nt,dt),.12,.12,L,Nt,St,{rx:-Math.PI/2,rz:C});s(n.floor,Kt,.1,_e,0,-.05,0,{tile:1.6}),s(n.floor,6.6,.16,1.5,0,.08,-_e/2+.75,{tile:1.6}),s(n.ceiling,Kt+.6,.1,_e+.6,0,ke+.05,0,{tile:1.2});for(let nt=-3;nt<=3;nt+=1.5)s(n.beam,.12,.17,_e,nt,ke-.085,0,{cast:!1});for(let nt=-3.2;nt<=3.2;nt+=1.6)s(n.beam,Kt,.17,.12,0,ke-.085,nt,{cast:!1});for(let nt of[-1,1]){let dt=nt*_e/2;s(n.plaster,Kt,ke,.2,0,ke/2,dt+nt*.1,{tile:2}),s(n.wains,Kt,.95,.03,0,.475,dt-nt*.015,{tile:1.2}),s(n.trim,Kt,.06,.06,0,.98,dt-nt*.03),s(n.trim,Kt,.05,.04,0,2.38,dt-nt*.02),s(n.trim,Kt,.1,.06,0,ke-.05,dt-nt*.03)}s(n.plaster,.2,ke,_e,Kt/2+.1,ke/2,0,{tile:2}),s(n.wains,.03,1,_e,Kt/2-.015,.5,0,{tile:1.2}),s(n.trim,.06,.06,_e,Kt/2-.03,1.02,0);for(let nt of[-2.4,-.8,.8,2.4]){let dt=new vt(new Ze(1.45,1.35),n.frosted);dt.position.set(Kt/2-.012,1.75,nt),dt.rotation.y=-Math.PI/2,i.add(dt);for(let L of[-.725,0,.725])s(n.trim,.05,1.4,.05,Kt/2-.03,1.75,nt+L,{cast:!1});for(let L of[1.08,1.75,2.42])s(n.trim,.05,.05,1.45,Kt/2-.03,L,nt,{cast:!1})}for(let nt of[-3.95,3.95]){s(n.chair,.05,2,.92,Kt/2-.04,1,nt,{tile:.9});let dt=new vt(new Ze(.5,.6),n.frosted);dt.position.set(Kt/2-.068,1.45,nt),dt.rotation.y=-Math.PI/2,i.add(dt),s(n.trim,.07,.08,1,Kt/2-.04,2.04,nt)}a("Bomb squad: knock twice. Everyone else: run.","orange",Kt/2-.07,1.2,3.75,-Math.PI/2);let l=[[-_e/2,ji[0][0]],...ji.slice(1).map(([nt],dt)=>[ji[dt][1],nt]),[ji[3][1],_e/2]];s(n.plaster,.25,tn,_e,-Kt/2-.125,tn/2,0,{tile:2}),s(n.wains,.03,tn,_e,-Kt/2+.015,tn/2,0,{tile:1.2}),s(n.plaster,.25,ke-fn,_e,-Kt/2-.125,(ke+fn)/2,0,{tile:2});for(let[nt,dt]of l)s(n.trim,.3,fn-tn,dt-nt,-Kt/2-.12,(tn+fn)/2,(nt+dt)/2);s(n.trim,.34,.05,_e,-Kt/2-.05,tn+.02,0),s(n.trim,.3,.08,_e,-Kt/2-.1,fn+.04,0);let c=[];for(let[nt,dt]of ji){let L=(nt+dt)/2,Nt=new vt(new Ze(dt-nt,fn-tn),n.glass.clone());Nt.material.opacity=.16,c.push(Nt),Nt.position.set(-Kt/2-.08,(tn+fn)/2,L),Nt.rotation.y=Math.PI/2,i.add(Nt);for(let St of[-.425,0,.425])s(n.trim,.06,fn-tn,St?.03:.06,-Kt/2-.08,(tn+fn)/2,L+St);for(let St=1;St<4;St++)s(n.trim,.06,.03,dt-nt,-Kt/2-.08,tn+(fn-tn)*St/4,L)}a("This window has been tested. From both sides.","blue",-Kt/2-.05,1.55,1.4,Math.PI/2),r(Zu(),46,18,-16,5,0,{ry:Math.PI/2,lit:!1});let u=Yu(),d=(nt,dt,L,Nt,St,C,x)=>r(u,nt,dt,L,Nt,St,{rx:C,ry:x,lit:!1});for(let[nt,dt,L,Nt]of[[Kt,0,-_e/2,0],[Kt,0,_e/2,Math.PI],[_e,-Kt/2,0,Math.PI/2],[_e,Kt/2,0,-Math.PI/2]]){let St=new I(0,0,.18).applyAxisAngle(new I(0,1,0),Nt);d(nt,.36,dt+St.x,.003,L+St.z,-Math.PI/2,Nt),d(nt,.4,dt+St.x*1.1,ke-.01,L+St.z*1.1,Math.PI/2,Nt+Math.PI)}let h=-_e/2;s(n.trim,4.24,1.48,.06,0,1.55,h+.03);let f=new vt(new Ze(4,1.29),new ae({map:Ou(),roughness:.82,envMapIntensity:.4}));f.position.set(0,1.55,h+.062),f.receiveShadow=!0,i.add(f),s(n.trim,4.1,.035,.11,0,.84,h+.1),[[16184554,-1.2],[15915104,-1.1],[15967160,.9]].forEach(([nt,dt])=>{let L=new vt(new Ae(.006,.006,.07),new ae({color:nt,roughness:1}));L.position.set(dt,.865,h+.1),L.rotation.z=Math.PI/2+.2,i.add(L)}),s(new ae({color:2829107,roughness:.9}),.14,.04,.05,1.5,.877,h+.1);let y=Wo(""),S=r(ze(y),1.68,.1575,1.12,1.885,h+.064,{lit:!0});S.material.alphaTest=0;let g=[["\u58CA\u3059\u306A","Rule 1: No demolishing."],["\u67F1\u306F\u53CB\u9054","The pillar is your friend."],["\u7206\u767A\u7981\u6B62","No explosions. Yes, small ones too."],["\u5ECA\u4E0B\u3092\u8D70\u308B\u306A","No running from the blast radius."]],p=[-3.35,-2.6,2.6,3.35].map((nt,dt)=>{let L=new ce;L.position.set(nt,2.25,h+.04),r(zu(...g[dt],t),.36,1.08,0,-.56,0,{parent:L});for(let Nt of[-.02,-1.1]){let St=new vt(new Ae(.012,.012,.42),n.trim);St.rotation.z=Math.PI/2,St.position.y=Nt,St.position.z=.01,L.add(St)}return i.add(L),L});r(Yo("SAFETY FIRST","DAYS WITHOUT AN EXPLOSION",{size:64,foot:"record: \xBD"}),.84,.42,-1.55,2.68,h+.035);let b=new ce,P=r(Gu("0"),.075,.11,0,0,0,{parent:b});b.position.set(-1.55,2.54,h+.04),i.add(b);let M=new ce;M.position.set(1.55,2.68,h+.04),r(Hu(),.36,.36,0,0,.012,{parent:M});let w=new vt(new Ae(.19,.19,.04,40),n.metal);w.rotation.x=Math.PI/2,M.add(w);let T=(nt,dt,L)=>{let Nt=new ce,St=new vt(new He(dt,nt,.004),new ae({color:L}));return St.position.y=nt*.4,Nt.add(St),Nt.position.z=.026,M.add(Nt),Nt},N={hour:T(.09,.012,1381653),minute:T(.14,.008,1381653),second:T(.15,.003,12591136)};i.add(M),s(new ae({color:3815475,roughness:.8}),.34,.22,.12,0,2.7,h+.06),s(n.desk,.95,1.05,.55,0,.16+.525,-3.8,{tile:.9});let _=new ce,E=.16+1.05;_.position.set(.12,E,-3.78),_.rotation.y=-.35,s(new ae({color:8002068,roughness:.6}),.18,.13,.13,0,.065,0,{parent:_});for(let nt of[-.05,.05])s(new ae({color:10132120,roughness:.5}),.03,.135,.14,nt,.066,0,{parent:_});let U=new ce,O=new vt(new Ae(.008,.008,.16),n.metal);O.position.y=-.08,U.add(O);let z=new vt(new Ae(.014,.014,.17),new ae({color:1710618,roughness:.5}));z.rotation.z=Math.PI/2,U.add(z),U.position.y=.21,_.add(U),r(qo("CONFISCATED. Do NOT push. \u2014 Mgmt.","pink",40),.09,.09,0,.08,.0665,{parent:_,rz:.12}),i.add(_),r(Bu("TIL FOR\xC6LDRE / TO PARENTS",`K\xE6re for\xE6ldre. Deres s\xF8n har igen spr\xE6ngt kantinen. Vi har derfor ingen kantine. Vi har heller ingen skole, s\xE5 vi skriver dette fra en b\xE5d. B\xE5den er ogs\xE5 v\xE6k nu. Venlig hilsen, Rektor (sv\xF8mmer)

Dear parents: your son has once again blown up the cafeteria. The school is gone. We are writing from a boat. The boat is also gone. Regards, the Principal (swimming).`),.21,.28,-.22,E+.002,-3.75,{rx:-Math.PI/2,rz:.25});let k=Ho([li(1.2,.035,.46),...[-.56,.56].flatMap(nt=>[-.19,.19].map(dt=>Ki(li(.04,.68,.04),nt,-.357,dt))),Ki(li(1.1,.015,.38),0,-.11,0),Ki(li(1.14,.1,.015),0,-.065,-.2)]),F=Ho([Ki(li(.38,.03,.36),0,.42,0),Ki(li(.36,.22,.022),0,.72,.17,-.08),...[-.16,.16].flatMap(nt=>[Ki(li(.03,.42,.03),nt,.21,-.15),Ki(li(.03,.84,.03),nt,.42,.16)])]),H=[];for(let nt=0;nt<5;nt++)for(let dt=0;dt<3;dt++)H.push({x:(dt-1)*2.7+(Math.random()-.5)*.1,z:-2.45+nt*1.15+(Math.random()-.5)*.08,ry:(Math.random()-.5)*.07,row:nt,col:dt});let $=.7,tt=new Nn(k,n.desk,H.length),ot=new Nn(F,n.chair,H.length*2),Q=new Nn(new Ze(1,1),new hn({map:Xu(.55),transparent:!0,depthWrite:!1}),H.length*3),rt=new re,at=new Le,Rt=new gn,It=new I(1,1,1),Ht=0,Zt=0;H.forEach((nt,dt)=>{tt.setMatrixAt(dt,rt.compose(new I(nt.x,$,nt.z),at.setFromEuler(Rt.set(0,nt.ry,0)),It)),Q.setMatrixAt(Zt++,rt.compose(new I(nt.x,.004,nt.z),at.setFromEuler(Rt.set(-Math.PI/2,0,0)),new I(1.6,.8,1)));for(let L of[-.3,.3]){let Nt=nt.row===3&&nt.col===0&&L>0,St=.42+Math.random()*.2,C=new I(nt.x+L+(Math.random()-.5)*.08,Nt?.185:0,nt.z+St+(Nt?.1:0));ot.setMatrixAt(Ht++,rt.compose(C,at.setFromEuler(Nt?Rt.set(Math.PI/2,0,.6,"YXZ"):Rt.set(0,(Math.random()-.5)*.35,0)),It)),Q.setMatrixAt(Zt++,rt.compose(new I(C.x,.005,C.z),at.setFromEuler(Rt.set(-Math.PI/2,0,0)),new I(.6,.6,1)))}});for(let nt of[tt,ot])nt.castShadow=nt.receiveShadow=!0,i.add(nt);i.add(Q);let qt=(nt,dt)=>H.find(L=>L.row===nt&&L.col===dt),j=$+.019,et=qt(2,0);r(Sc("D.B. WAS HERE"),.62,.62,et.x-.2,j,et.z,{rx:-Math.PI/2,rz:.4}),o("Science project: 'What if\u2026?' Grade: F. (The F is also on fire.)","yellow",et.x+.38,j+.001,et.z+.05,-.3),[[qt(4,1),"This desk has been replaced 14 times. It is new. Be gentle.","green"],[qt(1,1),"LOST: one (1) eyebrow. Reward: the other one. \u2014 D.B.","yellow"],[qt(3,2),"Nothing matters. Except load-bearing walls. Those REALLY matter.","blue"],[qt(0,0),"Tip: the fire alarm is NOT a starting pistol.","orange"]].forEach(([nt,dt,L],Nt)=>o(dt,L,nt.x+(Nt%2?.3:-.3),j+.001,nt.z+.04,(Math.random()-.5)*.6));let ut=qt(1,2),Pt=s(n.dark,1.02,.085,.3,ut.x,$-.067,ut.z-.02,{cast:!1});Pt.rotation.y=ut.ry;let Mt=r(Vu(),.15,.075,ut.x+.2,$-.065,ut.z+.135,{lit:!1,blend:bn});o("Homework. It bites. Do NOT feed it.","pink",ut.x-.25,j+.001,ut.z,.2),r(ku(["u still got the big one?","under the floor","WHICH floor","ALL OF THEM"]),.2,.25,1.3,.004,1.6,{rx:-Math.PI/2,rz:.7});let Ft=_e/2,ft=new ce;for(let nt=0;nt<=18;nt++)s(n.chair,.025,1.2,.36,-3.6+nt*.4,.6,Ft-.18,{parent:ft,cast:!1});for(let nt of[.01,.4,.8,1.2])s(n.chair,7.25,.025,.36,0,nt,Ft-.18,{parent:ft,cast:!1});s(n.dark,7.2,1.2,.01,0,.6,Ft-.005,{parent:ft,cast:!1}),i.add(ft);for(let nt=0;nt<26;nt++){let dt=Math.floor(Math.random()*18),L=Math.floor(Math.random()*3),Nt=.04+Math.random()*.12,St=.1+Math.random()*.2;s(new ae({color:[8007471,3100538,13218426,4156230,14209732,7031434][nt%6],roughness:.8}),Nt,Math.min(St,.36),.22,-3.4+dt*.4+(Math.random()-.5)*.15,L*.4+.025+Math.min(St,.36)/2,Ft-.2,{parent:ft,cast:!1})}let Bt=new vt(new un(.13,24,12,0,Math.PI*2,0,Math.PI/2),new ae({color:15909912,roughness:.35}));Bt.position.set(-2.2,1.213,Ft-.2),Bt.scale.y=.85,Bt.castShadow=!0;let Jt=new vt(new Ae(.16,.16,.012,24),Bt.material);Jt.position.y=.006,Bt.add(Jt),i.add(Bt),a("Property of D.B. NOT a helmet for indoor use. (It is. That is the problem.)","yellow",-2.2,1.38,Ft-.006,Math.PI,.1,36);let ne=[r(Wu(),2.2,2.2,2,2,Ft-.004,{ry:Math.PI})];ne.push(r(qu(),1.25,.85,2.03,1.98,Ft-.007,{ry:Math.PI,lit:!1,blend:bn})),ne[1].material.color.set(9071172),ne.push(r(Yo("FACILITY MANAGEMENT","THIS IS NOT A HOLE.",{bar:"#1f3d7a",size:92,h:640,foot:"please stop asking"}),1.05,.66,2,2,Ft-.012,{ry:Math.PI,rz:-.04})),r(Yo("SCIENCE FAIR","2nd PLACE: 'Volcano'",{bar:"#1d7a3a",size:74,foot:"judges were evacuated"}),.5,.25,.4,1.75,Ft-.006,{ry:Math.PI,rz:.05});let Yt=new vt(new Ae(.075,.075,.5,24),new ae({color:11735578,roughness:.35,metalness:.1}));Yt.position.set(Kt/2-.18,1.25,Ft-.6),Yt.castShadow=!0,i.add(Yt),a("Use BEFORE. Not after.","yellow",Kt/2-.01,1.62,Ft-.6,-Math.PI/2,-.08);let he=(nt,dt)=>{let L=new ce;s(n.metal,1.3,.05,.17,.62,0,0,{parent:L,cast:!1});let Nt=new ae({color:15921902,emissive:16054015,emissiveIntensity:.05,roughness:.3});for(let St of[-.045,.045]){let C=new vt(new Ae(.016,.016,1.22,12),Nt);C.rotation.z=Math.PI/2,C.position.set(.62,-.04,St),L.add(C)}return L.position.set(nt-.62,ke-.72,dt),i.add(L),{g:L,tubes:Nt}},ve=(nt,dt,L)=>{let Nt=new vt(new Ae(.003,.003,L),n.dark);Nt.position.set(nt,ke-L/2,dt),i.add(Nt)};for(let[nt,dt]of[[-1.8,-1.6],[1.8,-1.6],[-1.8,1.6]])he(nt,dt),ve(nt-.55,dt,.72),ve(nt+.55,dt,.72);let Ie=he(1.8,1.6);return ve(1.8-.55,1.6,.72),Ie.g.position.x=1.8-.55,Ie.g.children.forEach(nt=>{nt.position.x-=.07}),Ie.g.rotation.z=-.62,r(Sc(),1.8,1.8,2.3,ke-.004,1.5,{rx:Math.PI/2,rz:1.1}),cx(i),{M:n,seats:H,desks:tt,chairs:ot,glass:c,board:f,status:S,statusCanvas:y,scrolls:p,flip:b,card:P,hands:N,plunger:_,handle:U,eyes:Mt,lair:ut,crooked:Ie,hat:Bt,ext:Yt,notAHole:ne}}function cx(i){let t=new Map;for(let e of i.children.filter(n=>n.userData.bake))e.updateMatrixWorld(),t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(e.geometry.applyMatrix4(e.matrixWorld)),i.remove(e);for(let[e,n]of t){let s=new vt(Ho(n),e);s.castShadow=s.receiveShadow=!0,i.add(s)}}function Ku(i){let t=`
        uniform vec3 sun; uniform vec4 bays[4]; uniform float time; uniform float haze;
        float inBeam(vec3 p) {
            float t = (${(-Kt/2).toFixed(2)} - p.x) / sun.x;   // walk back along the light to the window plane
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
        }`,e={sun:{value:Zo},bays:{value:ji.map(([d,h])=>new Se(d,tn,h,fn))},time:{value:0},haze:{value:1}},n=[],s=Zo.clone().negate();for(let[d,h]of ji)for(let f=0;f<7;f++){let y=d+(h-d)*(f+.5)/7,S=fn/-s.y+.5,g=(b,P)=>new I(-Kt/2,b,y).addScaledVector(s,P),p=[g(tn-.1,0),g(fn+.1,0),g(fn+.1,S),g(tn-.1,S)];[0,1,2,0,2,3].forEach(b=>n.push(...p[b].toArray()))}let r=new xe;r.setAttribute("position",new Qt(n,3));let a=new vt(r,new We({uniforms:e,transparent:!0,depthWrite:!1,blending:bn,side:Sn,vertexShader:"varying vec3 vP; void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`${t} varying vec3 vP;
            void main() {
                float near = smoothstep(.3, 1.2, distance(vP, cameraPosition));
                float m = inBeam(vP) * near * step(0., vP.y);
                gl_FragColor = vec4(vec3(1., .86, .62) * m * .035 * haze, 1.);
            }`}));a.frustumCulled=!1,i.add(a);let o=2600,l=new Float32Array(o*3);for(let d=0;d<o;d++)l.set([(Math.random()-.5)*Kt*.95,Math.random()*ke*.9,(Math.random()-.5)*_e*.95],d*3);let c=new xe;c.setAttribute("position",new Qt(l,3));let u=new ri(c,new We({uniforms:e,transparent:!0,depthWrite:!1,blending:bn,vertexShader:`${t} varying float vB;
            void main() {
                vec3 p = position + vec3(sin(time * .11 + position.y * 3.), sin(time * .07 + position.x * 2.) * .5 - .2, cos(time * .09 + position.z * 3.)) * .25;
                p.y = mod(p.y, ${ke.toFixed(1)});
                vB = .06 / haze + inBeam(p) * (.6 + .4 * haze);   // in a thick haze the shadows go dark and the beams go solid
                vec4 mv = modelViewMatrix * vec4(p, 1.);
                gl_PointSize = clamp(5. / -mv.z, 1., 6.);
                gl_Position = projectionMatrix * mv;
            }`,fragmentShader:"varying float vB; void main() { float d = length(gl_PointCoord - .5); gl_FragColor = vec4(vec3(1., .9, .7) * vB * smoothstep(.5, 0., d) * .5, 1.); }"}));return u.frustumCulled=!1,i.add(u),e}var _n=(i,t=.5,e={})=>new ae({color:i,roughness:t,...e}),Dr=i=>(i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i),bc=(i,t,e=24)=>new vt(new ur(i.map(([n,s])=>new Vt(n,s)),e),t);function ju(){let i=new ce;i.add(bc([[0,0],[.05,0],[.065,.12],[.075,.13],[.072,.14],[0,.14]],_n(11884079,.85)));let t=new vt(new Ae(.062,.062,.01,16),_n(3810324,1));t.position.y=.13,i.add(t);let e=_n(4160051,.6);for(let n=0;n<6;n++){let s=new vt(new Wi(.018,.16,5),e);s.position.set(Math.cos(n)*.02,.2,Math.sin(n)*.02),s.rotation.set(Math.sin(n*2.3)*.6,0,Math.cos(n*1.7)*.6),i.add(s)}return i.userData.leaves=i.children.slice(2),Dr(i)}function wc(i=2838426){let t=new ce,e=Object.assign(document.createElement("canvas"),{width:256,height:128}),n=e.getContext("2d");n.fillStyle="#f4f1ea",n.fillRect(0,0,256,128),n.strokeStyle=`#${i.toString(16).padStart(6,"0")}`,n.lineWidth=5;for(let s=0;s<8;s++)n.beginPath(),n.arc(s*32+16,64,12,0,7),n.stroke();return n.fillStyle=n.strokeStyle,n.fillRect(0,14,256,6),n.fillRect(0,108,256,6),t.add(bc([[0,0],[.045,0],[.07,.07],[.065,.14],[.03,.2],[.032,.24],[0,.24]],_n(16777215,.2,{map:new Dn(e)}))),Dr(t)}function Qu(){let i=new ce,t=_n(16249834,.25),e=_n(13117484,.35),n=_n(14856764,.25,{metalness:.8}),s=new vt(new un(.075,20,14),t);s.scale.set(1,1.15,.85),s.position.y=.085,i.add(s);let r=new ce;r.position.y=.2,i.add(r),r.add(new vt(new un(.065,20,14),t));for(let d of[-1,1]){let h=new vt(new Wi(.022,.04,8),t);h.position.set(d*.038,.055,0),h.rotation.z=-d*.35,r.add(h);let f=new vt(new un(.008,8,6),_n(1118481,.3));f.position.set(d*.024,.008,.058),f.scale.y=.4,r.add(f)}let a=new vt(new Cs(.045,.008,8,20),e);a.rotation.x=Math.PI/2,a.position.y=.155,i.add(a);let o=new vt(new un(.012,10,8),n);o.position.set(0,.14,.045),i.add(o);let l=new ce;l.position.set(.055,.17,.02),i.add(l);let c=new vt(new Ae(.016,.018,.08,10),t);c.position.y=.04,l.add(c);let u=new vt(new Ae(.03,.03,.008,16),n);return u.rotation.x=Math.PI/2,u.position.set(-.04,.07,.05),i.add(u),i.userData={head:r,paw:l},Dr(i)}function td(){let i=new ce,t=_n(15262420,.9),e=_n(2762274,.6),n=new vt(new Ae(.09,.1,.06,16),t);n.position.y=.03,i.add(n);let s=new vt(new un(.13,20,12,0,Math.PI*2,0,Math.PI/2),t);s.scale.set(1,.6,.6),s.position.y=.06,i.add(s);let r=new ce;r.position.y=.21,i.add(r);let a=new vt(new un(.075,20,14),t);a.scale.set(.9,1.1,.95),r.add(a);let o=new vt(new Wi(.014,.04,8),t);o.rotation.x=Math.PI/2,o.position.set(0,0,.075),r.add(o);let l=new vt(new Ae(.008,.008,.07,8),e);l.rotation.z=Math.PI/2,l.position.set(0,-.025,.07),r.add(l);for(let c of[-1,1]){let u=new vt(new Cs(.018,.003,6,16),e);u.position.set(c*.027,.018,.072),r.add(u)}return i.userData={head:r},Dr(i)}function ed(){let i=new ce;i.add(bc([[0,0],[.2,0],[.16,.05],[.08,.2],[.05,.24],[.035,.22],[0,.2]],_n(9071445,.95)));let t=new vt(new Ae(.04,.03,.01,12),_n(16734751,.6,{emissive:16726528,emissiveIntensity:.6}));t.position.y=.228,i.add(t);for(let e=0;e<5;e++){let n=new vt(new Ae(.008,.012,.1,6),_n(14239772,.7)),s=e*1.3;n.position.set(Math.cos(s)*.075,.17,Math.sin(s)*.075),n.rotation.set(Math.sin(s)*.5,0,-Math.cos(s)*.5),i.add(n)}return Dr(i)}function nd(){let i=Object.assign(document.createElement("canvas"),{width:512,height:512}),t=i.getContext("2d");t.beginPath();for(let l=0;l<=40;l++){let c=l/40*Math.PI*2,u=170+Math.sin(l*3.7)*30+Math.random()*40;t.lineTo(256+Math.cos(c)*u,256+Math.sin(c)*u*.85)}let e=t.createRadialGradient(256,256,0,256,256,230);e.addColorStop(0,"#fffdf3"),e.addColorStop(.7,"#f4f1dc"),e.addColorStop(1,"#c9b48d"),t.fillStyle=e,t.fill(),t.lineWidth=18,t.strokeStyle="#6b5a45",t.stroke();let n=new ce;n.add(new vt(new Ze(1.2,1.2),new hn({map:new Dn(i),transparent:!0,toneMapped:!1})));let s=Object.assign(document.createElement("canvas"),{width:128,height:128}),r=s.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,235,190,.9)"),a.addColorStop(1,"rgba(255,235,190,0)"),r.fillStyle=a,r.fillRect(0,0,128,128);let o=new vt(new Ze(3.4,3.4),new hn({map:new Dn(s),transparent:!0,depthWrite:!1,blending:bn,toneMapped:!1}));return o.position.z=.02,n.add(o),n.userData={halo:o},n}function id(){let i=Object.assign(document.createElement("canvas"),{width:256,height:256}),t=i.getContext("2d"),e=t.createRadialGradient(128,128,10,128,128,110);e.addColorStop(0,"rgba(60,50,40,.85)"),e.addColorStop(.45,"rgba(120,110,95,.55)"),e.addColorStop(.62,"rgba(250,246,236,.7)"),e.addColorStop(1,"rgba(250,246,236,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),t.strokeStyle="rgba(50,42,34,.8)",t.lineCap="round";for(let n=0;n<9;n++){let s=128,r=128,a=Math.random()*7,o=4;t.beginPath(),t.moveTo(s,r);for(let l=0;l<6;l++)a+=Math.random()-.5,s+=Math.cos(a)*18,r+=Math.sin(a)*18,t.lineWidth=o*=.8,t.lineTo(s,r);t.stroke()}return new Dn(i)}function sd(){let i=Object.assign(document.createElement("canvas"),{width:64,height:64}),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.4)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Dn(i)}var ux=90,dx={axe:{wood:1,drywall:1,glass:.45,ceramic:.45,plaster:.5,metal:.15,slate:.1},hammer:{wood:.5,drywall:.6,glass:1,ceramic:1,plaster:1,metal:.15,slate:.1}},fx=["wood","glass","ceramic","plaster","drywall","metal"],rd={glass:"GLASS PREFERS A HAMMER. SO DO I.",ceramic:"POTTERY WANTS THE HAMMER.",plaster:"PLASTER WANTS THE HAMMER. TRUST ME.",wood:"WOOD WANTS THE AXE.",drywall:"DRYWALL WANTS THE AXE."},px={desk:["THAT DESK WAS NEW.","IT WAS REPLACED 14 TIMES. NOW 15.","SPLINTERS. EVERYWHERE."],chair:["SIT DOWN. OH.","THAT CHAIR HAD A FAMILY."],window:["THAT WINDOW HAS NOW BEEN TESTED. FROM BOTH SIDES.","FRESH AIR!","VENTILATION: IMPROVED."],pot:["THE PLANT IS FINE. THE PLANT IS NOT FINE.","IT WAS A CACTUS. EMOTIONALLY."],vase:["A VASE. FROM A TRIP. NOBODY REMEMBERS THE TRIP.","MING DYNASTY. (IT WAS NOT.)"],cat:["THERE GOES OUR LUCK."],bust:["THE PRINCIPAL WILL HEAR ABOUT THIS. HE IS IN PIECES."],volcano:["STILL 2ND PLACE."],drywall:["OK. IT WAS A HOLE."],ext:["USE BEFORE. NOT AFTER."]},ad={wall:"WALLS HOLD UP THE CEILING. REMEMBER?",board:"NO.",hat:"IT IS A HELMET. THAT IS THE PROBLEM."},od=["NO.","STILL NO.","I AM SLATE. YOU ARE NOT.","THE BOARD IS NOT PART OF THE LESSON.","DETENTION."];function mx(){let i=new ce,t=new vt(new Ae(.016,.02,.62,10),new ae({color:12026701,roughness:.6}));t.rotation.x=Math.PI/2,t.position.z=-.22,i.add(t);let e=new vt(new He(.03,.11,.09),new ae({color:11735578,roughness:.4,metalness:.3}));e.position.set(0,-.04,-.5),i.add(e);let n=new vt(new He(.012,.06,.13),new ae({color:15263978,roughness:.15,metalness:1}));return n.position.set(0,-.12,-.5),i.add(n),i.userData.tip=new I(0,-.14,-.5),i}function gx(){let i=new ce,t=new vt(new Ae(.017,.017,.46,10),new ae({color:1907997,roughness:.7}));t.rotation.x=Math.PI/2,t.position.z=-.15,i.add(t);let e=new vt(new He(.075,.17,.075),new ae({color:3816770,roughness:.35,metalness:.9}));return e.position.set(0,-.02,-.38),i.add(e),i.userData.tip=new I(0,-.1,-.38),i}function ld({scene:i,renderer:t,rig:e,room:n,audio:s,say:r,flip:a}){let o=[{name:"axe",mesh:mx()},{name:"hammer",mesh:gx()}];o.forEach((m,D)=>{m.mesh.rotation.x=.5,m.grip=t.xr.getControllerGrip(D),m.grip.add(m.mesh),m.prev=null,m.vel=new I});let l=4.8,c=1.2125,u=(m,D,R,A,Z=0)=>(m.position.set(D,R,A),m.rotation.y=Z,i.add(m),m),d=[...[-2.1,0,2.1].map(m=>({kind:"pot",material:"ceramic",hp:.35,object:u(ju(),-4.42,.945,m),half:[.09,.14,.09],up:.12,value:350,colors:[11884079,10110502,3810324]})),{kind:"vase",material:"ceramic",hp:.3,object:u(wc(),-3,c,l-.2),half:[.09,.14,.09],up:.12,value:400,colors:[16052714,2838426]},{kind:"vase",material:"ceramic",hp:.3,object:u(wc(10103595),3.15,c,l-.2),half:[.09,.14,.09],up:.12,value:400,colors:[16052714,10103595]},{kind:"cat",material:"ceramic",hp:.3,object:u(Qu(),1.2,c,l-.22,Math.PI),half:[.1,.15,.1],up:.14,value:900,colors:[16249834,13117484,14856764]},{kind:"bust",material:"plaster",hp:.9,object:u(td(),-.9,c,l-.2,Math.PI),half:[.14,.17,.12],up:.16,value:1200,colors:[15262420,14012095]},{kind:"volcano",material:"plaster",hp:.7,object:u(ed(),.4,c,l-.22),half:[.2,.13,.2],up:.12,value:800,colors:[9071445,14239772]}],h=[],f=new re,y=new re().makeScale(0,0,0);for(let m of d)h.push({...m,center:m.object.position.clone().setY(m.object.position.y+m.up),half:new I(...m.half)});h.push({kind:"drywall",material:"drywall",hp:1.1,center:new I(2,2,l-.06),half:new I(.55,.36,.12),value:1500,colors:[15921128,14275524,2047354]}),n.glass.forEach(m=>h.push({kind:"window",material:"glass",hp:.2,pane:m,center:m.position.clone().setX(m.position.x+.1),half:new I(.25,.95,.85),value:600,colors:[14676991]})),n.seats.forEach((m,D)=>h.push({kind:"desk",material:"wood",hp:1.4,mesh:n.desks,index:D,center:new I(m.x,.55,m.z),half:new I(.62,.25,.26),value:400,colors:[10119742,8410415]}));for(let m=0;m<n.chairs.count;m++){n.chairs.getMatrixAt(m,f);let D=new I().setFromMatrixPosition(f);h.push({kind:"chair",material:"wood",hp:.7,mesh:n.chairs,index:m,center:new I(D.x,.45,D.z),half:new I(.22,.45,.22),value:150,colors:[8345138,7030055]})}h.push({kind:"ext",material:"metal",hp:.25,center:n.ext.position.clone(),half:new I(.11,.28,.11),value:700,colors:[11735578]}),h.push({kind:"hat",material:"metal",hp:1/0,center:n.hat.position.clone().setY(n.hat.position.y+.06),half:new I(.17,.12,.17)}),h.push({kind:"board",material:"slate",hp:1/0,center:new I(0,1.55,-4.74),half:new I(2.05,.68,.12)});for(let[m,D,R,A]of[[0,l,4.5,-1],[-3.35,-l,1.15,1],[3.35,-l,1.15,1]])h.push({kind:"wall",material:"plaster",hp:1/0,center:new I(m,2.25,D),half:new I(R,1.05,.14),normal:new I(0,0,A)});for(let m of h)m.max=m.hp,m.mesh&&(m.mesh.getMatrixAt(m.index,f),m.matrix=f.clone());let S=u(nd(),2,2,l-.008,Math.PI);S.visible=!1;let g=new Xi(16769712,0,7,1.6);g.position.set(2,2,l-.6),i.add(g);let p=n.notAHole[2].position.clone(),b=n.notAHole[2].rotation.clone(),P=n.ext.rotation.clone(),M=n.hat.position.clone(),w=600,T=(m,D={})=>new ae({color:16777215,roughness:m,...D}),N={wood:E(new He(1,1,1),T(.65)),glass:E(new He(1,1,1),T(.04,{metalness:.9,transparent:!0,opacity:.75})),shard:E(new He(1,1,1),T(.3)),lump:E(new hr(.5,0),T(.95,{flatShading:!0}))},_={wood:"wood",glass:"glass",ceramic:"shard",drywall:"shard",plaster:"lump",metal:"shard"};function E(m,D){let R=new Nn(m,D,w);R.castShadow=!0,R.frustumCulled=!1;for(let A=0;A<w;A++)R.setMatrixAt(A,y),R.setColorAt(A,new Gt(16777215));return i.add(R),{mesh:R,next:0,parts:Array.from({length:w},()=>({alive:!1,p:new I,v:new I,q:new Le,w:new I,s:new I}))}}let U=new Le,O=new Ce,z=new Gt,k=()=>Math.random()-.5;function F(m,D,R,A,Z,G,st=[16777215],lt=G?.4:.06){let At=_[m],Lt=N[At];for(let ue=0;ue<A;ue++){let $t=Lt.next,oe=Lt.parts[$t];Lt.next=(Lt.next+1)%w,oe.alive=!0,oe.rest=0,oe.material=m,oe.p.copy(D).add(new I(k(),k(),k()).multiplyScalar(lt)),oe.v.copy(R).multiplyScalar(Z*(.4+Math.random())).add(new I(k()*2,Math.random()*2,k()*2).multiplyScalar(.5+Z*.35)),oe.w.set(k(),k(),k()).multiplyScalar(m==="plaster"?10:22),oe.q.random();let be=Math.random();m==="wood"?oe.s.set(.015+be*(G?.45:.025),.015+Math.random()*.02,G?.05+Math.random()*.12:.08+Math.random()*.1):m==="glass"?oe.s.set(.03+be*.13,.003,.03+Math.random()*.16):m==="ceramic"?oe.s.set(.015+be*.05,.006,.015+Math.random()*.05):m==="drywall"?oe.s.set(.04+be*(G?.2:.06),.013,.04+Math.random()*(G?.18:.05)):m==="plaster"?oe.s.setScalar(.015+be*be*(G?.11:.04)):oe.s.set(.01,.01,.01),Lt.mesh.setColorAt($t,z.set(st[ue%st.length]).offsetHSL(0,0,k()*.08))}Lt.mesh.instanceColor.needsUpdate=!0}function H(m,D){let R=new xe,A=new Float32Array(m*3),Z=new Float32Array(m*3),G=new Float32Array(m),st=new Float32Array(m);R.setAttribute("position",new Qt(A,3)),R.setAttribute("color",new Qt(Z,3)),R.setAttribute("alpha",new Qt(G,1)),R.setAttribute("size",new Qt(st,1));let lt=new ri(R,new We({uniforms:{map:{value:sd()},scale:{value:900}},transparent:!0,depthWrite:!1,blending:D,vertexColors:!0,vertexShader:"attribute float alpha; attribute float size; uniform float scale; varying float vA; varying vec3 vC; void main() { vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying float vA; varying vec3 vC; void main() { gl_FragColor = vec4(vC, vA * texture2D(map, gl_PointCoord).a); }"}));return lt.frustumCulled=!1,i.add(lt),{g:R,pos:A,col:Z,a:G,size:st,n:m,next:0,vel:new Float32Array(m*3),life:new Float32Array(m),max:new Float32Array(m),grow:new Float32Array(m),peak:new Float32Array(m),drag:new Float32Array(m)}}let $=H(900,wi),tt=H(300,bn);function ot(m,D,R,{color:A=14209732,spread:Z=.1,speed:G=.4,size:st=.12,life:lt=2.5,up:At=.2,grow:Lt=.5,alpha:ue=.45,dir:$t=null,drag:oe=1.6}){for(let be=0;be<R;be++){let Xe=m.next;m.next=(m.next+1)%m.n,m.pos.set([D.x+k()*Z,D.y+k()*Z,D.z+k()*Z],Xe*3);let Qi=new I(k(),k()+At,k()).normalize().multiplyScalar(G*(.3+Math.random()));$t&&Qi.addScaledVector($t,G*(.5+Math.random())),m.vel.set(Qi.toArray(),Xe*3),m.col.set(z.set(A).offsetHSL(0,0,k()*.06).toArray(),Xe*3),m.life[Xe]=m.max[Xe]=lt*(.6+Math.random()*.6),m.size[Xe]=st*(.5+Math.random()),m.grow[Xe]=Lt,m.peak[Xe]=ue,m.drag[Xe]=oe}}function Q(m,D,R){for(let A=0;A<m.n;A++){if(m.life[A]<=0){m.a[A]=0;continue}m.life[A]-=D;let Z=A*3,G=m.life[A]/m.max[A],st=Math.exp(-D*m.drag[A]);m.vel[Z]*=st,m.vel[Z+2]*=st,m.vel[Z+1]=m.vel[Z+1]*st-R*D,m.pos[Z]+=m.vel[Z]*D,m.pos[Z+1]=Math.max(.02,m.pos[Z+1]+m.vel[Z+1]*D),m.pos[Z+2]+=m.vel[Z+2]*D,m.size[A]*=1+m.grow[A]*D,m.a[A]=m.peak[A]*Math.min(1,(1-G)*8)*G}for(let A of["position","color","alpha","size"])m.g.attributes[A].needsUpdate=!0}let rt=new ae({map:id(),transparent:!0,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),at=Array.from({length:40},()=>{let m=new vt(new Ze(1,1),rt);return m.visible=!1,m.receiveShadow=!0,i.add(m),m}),Rt=0;function It(m,D,R){let A=at[Rt++%at.length];A.visible=!0,A.position.copy(m).setZ(D.z>0?-l+.006:l-.006),A.rotation.set(0,D.z>0?0:Math.PI,Math.random()*6),A.scale.setScalar(.12+R*.22)}let Ht=()=>s()?.ctx,Zt=null,qt=null,j=m=>(qt||(qt=new DynamicsCompressorNode(m,{threshold:-14,knee:8,ratio:6,attack:.003,release:.2}),qt.connect(m.destination)),qt);function et(m,{dur:D,type:R,freq:A,to:Z=A,gain:G,q:st=1,delay:lt=0}){if(!Zt){Zt=m.createBuffer(1,m.sampleRate,m.sampleRate);let oe=Zt.getChannelData(0);for(let be=0;be<oe.length;be++)oe[be]=Math.random()*2-1}let At=m.currentTime+lt,Lt=new AudioBufferSourceNode(m,{buffer:Zt,loop:!0}),ue=new BiquadFilterNode(m,{type:R,frequency:A,Q:st}),$t=new GainNode(m,{gain:G});ue.frequency.exponentialRampToValueAtTime(Z,At+D),$t.gain.setValueAtTime(G,At),$t.gain.exponentialRampToValueAtTime(1e-4,At+D),Lt.connect(ue).connect($t).connect(j(m)),Lt.start(At,Math.random()*.5),Lt.stop(At+D+.05)}function ut(m,D,R,A,Z=0,G="sine",st=D){let lt=m.currentTime+Z,At=new OscillatorNode(m,{type:G,frequency:D}),Lt=new GainNode(m,{gain:A});st!==D&&At.frequency.exponentialRampToValueAtTime(st,lt+R),Lt.gain.setValueAtTime(A,lt),Lt.gain.exponentialRampToValueAtTime(1e-4,lt+R),At.connect(Lt).connect(j(m)),At.start(lt),At.stop(lt+R+.05)}let Pt={wood(m,D){let R=Ht();if(R){ut(R,150+Math.random()*40,.18,.5*m);for(let A=0;A<(D?12:3);A++)et(R,{dur:.05,type:"bandpass",freq:700+Math.random()*1600,gain:.5*m,q:3,delay:Math.random()*(D?.3:.05)});D&&et(R,{dur:.6,type:"lowpass",freq:900,to:120,gain:.6})}},glass(m,D){let R=Ht();if(R){et(R,{dur:D?.5:.12,type:"highpass",freq:4e3,gain:.5*m});for(let A=0;A<(D?12:3);A++)ut(R,2200+Math.random()*4800,.25+Math.random()*.5,.08,Math.random()*(D?.5:.05))}},ceramic(m,D){let R=Ht();if(R&&(et(R,{dur:.08,type:"bandpass",freq:3200,gain:.55*m,q:2}),ut(R,1800+Math.random()*600,.12,.18*m,0,"triangle"),D))for(let A=0;A<16;A++)ut(R,3500+Math.random()*5e3,.06+Math.random()*.1,.06,Math.random()*.35)},plaster(m,D){let R=Ht();if(R){ut(R,75,.25,.7*m,0,"sine",50),et(R,{dur:.3,type:"lowpass",freq:500,to:150,gain:.6*m});for(let A=0;A<(D?10:3);A++)et(R,{dur:.06,type:"lowpass",freq:900+Math.random()*600,gain:.2,delay:.05+Math.random()*(D?.7:.25)})}},drywall(m,D){let R=Ht();if(R&&(ut(R,95,.2,.6*m,0,"sine",70),et(R,{dur:.14,type:"bandpass",freq:1500,to:900,gain:.6*m,q:1.5}),D)){et(R,{dur:1.2,type:"lowpass",freq:700,to:100,gain:.7});for(let A=0;A<8;A++)et(R,{dur:.08,type:"bandpass",freq:1200+Math.random()*800,gain:.3,delay:Math.random()*.5})}},metal(m){let D=Ht();if(!D)return;let R=380+Math.random()*80;[1,2.76,5.4,8.93].forEach((A,Z)=>ut(D,R*A,.9/(Z+1),.22*m/(Z+1))),et(D,{dur:.04,type:"highpass",freq:3e3,gain:.4*m})},slate(m){let D=Ht();D&&(ut(D,110,.15,.6*m),et(D,{dur:.25,type:"lowpass",freq:400,gain:.3*m}))},bonk(){let m=Ht();m&&(ut(m,700,.18,.35,0,"sine",180),ut(m,160,.6,.2,.05,"triangle",240))},squeak(){let m=Ht();m&&ut(m,1300,.12,.08,0,"sine",2100)},powder(){let m=Ht();m&&(et(m,{dur:2.6,type:"bandpass",freq:2500,to:1200,gain:.45,q:.8}),ut(m,90,.4,.4,0,"sine",40))},erupt(){let m=Ht();if(m){for(let D=0;D<10;D++)ut(m,120+Math.random()*200,.15,.2,D*.08+Math.random()*.04,"sine",400);et(m,{dur:1.2,type:"lowpass",freq:600,gain:.3})}},lodge(){let m=Ht();if(!m)return;ut(m,115,.35,.7),et(m,{dur:.12,type:"bandpass",freq:500,gain:.6,q:2});let D=m.currentTime,R=new OscillatorNode(m,{type:"sawtooth",frequency:105}),A=new OscillatorNode(m,{frequency:9}),Z=new GainNode(m,{gain:12}),G=new BiquadFilterNode(m,{type:"lowpass",frequency:700}),st=new GainNode(m,{gain:.16});st.gain.setValueAtTime(.16,D),st.gain.exponentialRampToValueAtTime(1e-4,D+.7),A.connect(Z).connect(R.frequency),R.connect(G).connect(st).connect(j(m)),R.start(D),A.start(D),R.stop(D+.75),A.stop(D+.75)},yank(){let m=Ht();m&&(et(m,{dur:.22,type:"bandpass",freq:1400,to:380,gain:.5,q:4}),ut(m,260,.12,.4,.15))},glance(){let m=Ht();m&&et(m,{dur:.18,type:"bandpass",freq:2600,to:1500,gain:.3,q:6})},tink(m){let D=Ht();D&&ut(D,(m==="glass"?3e3:2200)+Math.random()*4e3,.1,.025)},bell(m){let D=Ht();D&&m.forEach((R,A)=>{ut(D,R,1.6,.25,A*.55),ut(D,R*2.76,.8,.05,A*.55)})}},Mt=[329.6,261.6,293.7,196],Ft=()=>({dust:0,score:0,combo:0,lastBreak:-9,broken:0,materials:new Set,right:0,hits:0,lodges:0,followThroughs:0,wrong:{},said:new Set,boardHits:0,powderUntil:0}),ft={phase:"intro",endsAt:0,...Ft()},Bt=(m,D,R)=>t.xr.getSession()?.inputSources[m]?.gamepad?.hapticActuators?.[0]?.pulse?.(D,R),Jt=[],ne=(m,D,R)=>Jt.push({t:0,dur:m,run:D,done:R}),Yt=new I,he=new I,ve=new Le;function Ie(m,D){let R=D.clone().sub(m.center),A=m.half,Z=Math.abs(R.x)/A.x,G=Math.abs(R.y)/A.y,st=Math.abs(R.z)/A.z;return Z>G&&Z>st?he.set(Math.sign(R.x),0,0):G>st?he.set(0,Math.sign(R.y),0):he.set(0,0,Math.sign(R.z))}function nt(m,D,R,A,Z,G,st,lt){if(lt-(A.lastHit??-9)<.2)return!1;A.lastHit=lt,m.mesh.getWorldQuaternion(ve);let At=Yt.set(0,-1,0).applyQuaternion(ve).dot(st),Lt=Math.max(0,-(A.normal??Ie(A,m.entry??Z)).dot(st)),ue=m.name==="axe"?.25+.75*Math.max(0,At)**1.5:.6+.4*Math.abs(At),$t=Math.min(1.3,(G-.8)/5)*ue*(.35+.65*Lt),oe=A.material==="glass"||A.material==="ceramic";if(Lt<.3&&!oe)return Pt.glance(),Bt(D,.2,25),ft.score+=5,!0;let be=dx[m.name][A.material];if(ft.hits++,be===1?ft.right++:be<.9&&rd[A.material]&&(ft.wrong[A.material]=(ft.wrong[A.material]??0)+1)>=3&&!ft.said.has(A.material)&&(ft.said.add(A.material),r(rd[A.material])),Bt(D,Math.min(1,.3+$t),20+$t*60),A.hp===1/0)return dt(m,D,A,Z,st,$t,lt),!0;A.hp-=$t*be,m.follow={target:A,at:lt+.1,speed:G,e:$t,affinity:be,dir:st.clone(),point:Z.clone()},m.name==="axe"&&(A.kind==="desk"||A.kind==="drywall")&&A.hp>0&&At>.55&&Lt>.5&&$t>.2&&St(m,D,A,Z,st,lt);let Xe=A.hp<=0;return Pt[A.material](Math.max(.3,$t),Xe),F(A.material,Z,st,Math.round(4+$t*14),G*.35,!1,A.colors),(A.material==="plaster"||A.material==="drywall")&&ot($,Z,6+$t*14,{color:14999248,speed:.3+$t*.6,size:.12,dir:st}),A.material==="metal"&&ot(tt,Z,10+$t*20,{color:16756816,speed:2+$t*3,size:.012,life:.4,alpha:1,grow:0,drag:.5,dir:st}),A.mesh&&!Xe&&(A.shove=st.clone().setY(0).multiplyScalar(.04*$t)),A.object&&!Xe&&(A.wobble=1),Xe?(L(m,A,Z,st,G,$t,be,lt),!0):(ft.score+=Math.round(10*$t*(be===1?2:1)),!0)}function dt(m,D,R,A,Z,G,st){if(ad[R.kind]&&!ft.said.has(R.kind)&&G>.15&&(ft.said.add(R.kind),r(ad[R.kind])),R.kind==="wall")Pt.plaster(Math.max(.3,G),!1),G>.12&&It(A,R.normal,G),F("plaster",A,R.normal.clone().multiplyScalar(-1).add(Z).normalize(),Math.round(3+G*10),1+G*2,!1,[15262420,14012095]),ot($,A,8+G*16,{color:15262420,speed:.3+G*.5,size:.14,dir:R.normal}),ft.score+=Math.round(15*G),ft.dust=Math.min(2.6,ft.dust+.05*G),ft.materials.add("plaster");else if(R.kind==="board")Pt.slate(Math.max(.3,G)),ot($,A,14,{color:15921898,speed:.3,size:.08,dir:new I(0,0,1)}),r(od[Math.min(od.length-1,ft.boardHits++)]);else if(R.kind==="hat"){Pt.bonk(),Pt.metal(.4);let lt=n.hat,At=M.y;ne(.6,Lt=>{lt.position.y=At+Math.sin(Lt*Math.PI)*.25,lt.rotation.y+=.4},()=>{lt.position.copy(M)}),ft.score+=50,ft.materials.add("metal")}}function L(m,D,R,A,Z,G,st,lt){D.mesh&&(D.mesh.setMatrixAt(D.index,y),D.mesh.instanceMatrix.needsUpdate=!0),D.pane&&(D.pane.visible=!1),D.object&&(D.object.visible=!1),t.shadowMap.needsUpdate=!0;for(let oe of o)oe.lodged?.target===D&&C(oe,!1);let At={wood:14,glass:40,ceramic:45,plaster:30,drywall:26,metal:0}[D.material];if(F(D.material,D.center,A,At,Z*.5,!0,D.colors,D.kind==="desk"||D.kind==="window"?.45:.12),D.kind==="pot"&&F("plaster",D.center,A,18,Z*.3,!1,[3810324,4861978,4160051]),(D.material==="plaster"||D.material==="drywall")&&(ot($,D.center,70,{color:14999248,spread:.3,speed:.6,size:.22,life:4,dir:A}),ft.dust+=.4),D.kind==="volcano"){Pt.erupt();for(let oe=0;oe<6;oe++)setTimeout(()=>ot($,D.center.clone().setY(D.center.y+.1),12,{color:oe%2?16738858:16770720,speed:1.6,up:3,size:.1,life:2,dir:new I(0,1,0)}),oe*90)}if(D.kind==="drywall"&&Nt(),D.kind==="ext"){Pt.powder(),ft.powderUntil=lt+2.6;let oe=n.ext;ne(.5,be=>{oe.rotation.z=P.z+be*.5,oe.rotation.x=P.x-be*.2})}ft.combo=lt-ft.lastBreak<2.5?ft.combo+1:1,ft.lastBreak=lt,ft.broken++,ft.materials.add(D.material),ft.dust=Math.min(2.6,ft.dust+(D.kind==="chair"?.12:.3));let Lt=Math.round(D.value*(st===1?1.5:1)*Math.min(8,ft.combo)*(.6+G*.5));ft.score+=Lt,a();let ue=px[D.kind]??[""],$t=!["desk","chair","window"].includes(D.kind);r($t?ue[Math.floor(Math.random()*ue.length)]:ft.combo>2?`COMBO x${ft.combo}! +${Lt}`:Math.random()<.4?ue[Math.floor(Math.random()*ue.length)]:`+${Lt}`)}function Nt(){let[m,D,R]=n.notAHole;m.visible=D.visible=!1,S.visible=!0,ne(1.1,A=>{R.position.set(p.x,p.y-(p.y-.05)*A*A,p.z-.25*A),R.rotation.set(-Math.PI/2*A*A,b.y,b.z+A*.6,"YXZ")}),ne(1.5,A=>{g.intensity=5*Math.min(1,A*2)*(1-.3*A),S.userData.halo.material.opacity=.4+.6*A})}function St(m,D,R,A,Z,G){let st=new ce;st.position.copy(A),st.quaternion.copy(ve),i.add(st),st.updateMatrixWorld(),st.attach(m.mesh),st.position.addScaledVector(Z,.035),m.lodged={target:R,pivot:st,at:G,hand:m.grip.getWorldPosition(new I)},m.follow=null,Pt.lodge(),Bt(D,1,140),ft.lodges++||r("IT IS STUCK. PULL.")}function C(m,D,R=0,A=0){let{pivot:Z,target:G}=m.lodged;m.grip.attach(m.mesh),m.mesh.position.set(0,0,0),m.mesh.quaternion.identity(),m.mesh.rotation.set(.5,0,0),i.remove(Z),m.lodged=null,m.prev=null,m.vel.set(0,0,0),D&&(Pt.yank(),Bt(R,.8,60),F(G.material,Z.position,Z.position.clone().sub(G.center).setY(.5).normalize(),12,2.5,!1,G.colors),G.lastHit=-9,G.hp-=.35,ft.score+=60,G.hp<=0&&(G.hp=.001,nt(m,R,A,G,Z.position.clone(),6,new I(0,1,0),A+1)))}function x(m,D,R){let A=m.follow;!A||R<A.at||(m.follow=null,!(A.target.hp<=0||m.vel.length()<A.speed*.55)&&(A.target.hp-=A.e*A.affinity*.4,ft.score+=Math.round(25*A.e),ft.followThroughs++,A.target.hp<=0&&(A.target.hp=.001,A.target.lastHit=-9,nt(m,D,R,A.target,A.point,A.speed*1.15,A.dir,R))))}function V(m){ft.phase="play",ft.endsAt=m+ux,Pt.bell(Mt),r("LESSON 2: DEMOLITION. 90 SECONDS. GO.")}function q(){ft.phase="over",Pt.bell([...Mt].reverse());let m=fx.filter(A=>ft.materials.has(A)).length,D=ft.score+m*m*400,R=D>3e4?"A+ (PLEASE LEAVE)":D>15e3?"B. SHOWS PROMISE. THE SCHOOL DOES NOT.":D>5e3?"C. NEEDS MORE DEMOLITION.":"F. GENTLE. SUSPICIOUSLY GENTLE.";r(`PENCILS DOWN. ${D} PTS, ${m}/6 MATERIALS. ${R}`),ft.total=D,ft.finishedAt=performance.now()/1e3}function K(){for(let A of h)A.hp=A.max,A.mesh&&A.mesh.setMatrixAt(A.index,A.matrix),A.pane&&(A.pane.visible=!0),A.object&&(A.object.visible=!0);n.desks.instanceMatrix.needsUpdate=n.chairs.instanceMatrix.needsUpdate=!0,t.shadowMap.needsUpdate=!0;for(let A of Object.values(N))A.parts.forEach((Z,G)=>{Z.alive=!1,A.mesh.setMatrixAt(G,y)}),A.mesh.instanceMatrix.needsUpdate=!0;for(let A of[$,tt])A.life.fill(0);for(let A of at)A.visible=!1;for(let A of o)A.lodged&&C(A,!1);let[m,D,R]=n.notAHole;m.visible=D.visible=!0,R.position.copy(p),R.rotation.copy(b),S.visible=!1,g.intensity=0,n.ext.rotation.copy(P),n.hat.position.copy(M),Jt.length=0,Object.assign(ft,{phase:"ready",...Ft()}),r("TUESDAY (AGAIN). SWING TO START.")}let ct=d.find(m=>m.kind==="cat"),ht=d.find(m=>m.kind==="bust"),it=d.filter(m=>m.kind==="pot"),J={cat:0,bust:0,squeakAt:-9};function gt(m,D,R){let A=(At,Lt)=>R.some(({p:ue,speed:$t})=>$t>1&&ue.distanceTo(At.position)<Lt),Z=1-Math.exp(-D*14),G=ct.object.visible&&A(ct.object,.7);G&&J.cat<.3&&m-J.squeakAt>1.2&&(J.squeakAt=m,Pt.squeak()),J.cat+=((G?1:0)-J.cat)*Z;let{head:st,paw:lt}=ct.object.userData;st.rotation.set(-.3*J.cat,1.1*J.cat,0),lt.rotation.z=J.cat>.5?1.2:Math.sin(m*4)*.35,ct.object.scale.set(1+.08*J.cat,1-.14*J.cat,1),J.bust+=((ht.object.visible&&A(ht.object,.8)?1:0)-J.bust)*Z,ht.object.userData.head.rotation.set(-.35*J.bust,0,.12*J.bust),ht.object.rotation.x=-.1*J.bust;for(let At of it)if(At.object.visible){let Lt=A(At.object,.6)?1:0;At.object.userData.leaves.forEach((ue,$t)=>{ue.rotation.y=Lt*Math.sin(m*40+$t)*.25})}for(let At of d)At.wobble&&(At.wobble*=Math.exp(-D*5),At.object.rotation.z=Math.sin(m*30)*.12*At.wobble,At.wobble<.01&&(At.wobble=0,At.object.rotation.z=0))}let bt=new I,mt=new I,pt=o.map(()=>({p:new I,speed:0}));function Dt(m,D){ft.dust*=Math.exp(-D/35);for(let R of o)R.mesh.visible=ft.phase!=="intro";for(let R=Jt.length-1;R>=0;R--){let A=Jt[R];A.t+=D;let Z=Math.min(1,A.t/A.dur);A.run(Z),Z===1&&(Jt.splice(R,1),A.done?.())}if(Q($,D,.02),Q(tt,D,6),m<ft.powderUntil&&ot($,n.ext.position.clone().setY(1.55),6,{color:16777215,speed:2.2,size:.09,life:3,grow:1.4,alpha:.35,dir:new I(Math.sin(m*7)-.8,.2,Math.cos(m*5)*.8).normalize(),drag:1.2}),!(!t.xr.isPresenting||ft.phase==="intro")){ft.phase==="play"&&m>ft.endsAt&&q(),ft.phase==="play"&&Math.ceil(ft.endsAt-m)!==ft.shown&&(ft.shown=Math.ceil(ft.endsAt-m),(ft.shown<=10||ft.shown%15===0)&&r(`${ft.shown}s LEFT  \xB7  SCORE ${ft.score}`)),o.forEach((R,A)=>{if(pt[A].speed=0,!R.grip.visible){R.prev=null;return}if(R.lodged){let st=R.lodged,lt=m-st.at;st.pivot.quaternion.copy(st.pivot.userData.q??=st.pivot.quaternion.clone()),st.pivot.rotateX(Math.sin(lt*57)*.22*Math.exp(-lt*5)),(R.grip.getWorldPosition(mt).distanceTo(st.hand)>.3||lt>6)&&C(R,lt<=6,A,m);return}x(R,A,m),R.mesh.localToWorld(bt.copy(R.mesh.userData.tip)),R.prev&&D>0&&R.vel.lerp(mt.subVectors(bt,R.prev).divideScalar(D),.6),R.prev=(R.prev??new I).copy(bt);let Z=R.vel.length();if(pt[A].p.copy(bt),pt[A].speed=Z,Z<1.2)return;if(Ot(bt,R.vel),ft.phase==="ready"&&V(m),ft.phase==="over"){m-ft.finishedAt>4&&Z>3&&K();return}mt.copy(R.vel).normalize();let G=bt.clone().addScaledVector(R.vel,-D*1.5);for(let st of h)if(!(st.hp<=0||R.lodged)&&Math.abs(bt.x-st.center.x)<st.half.x&&Math.abs(bt.y-st.center.y)<st.half.y&&Math.abs(bt.z-st.center.z)<st.half.z&&(R.entry=G,nt(R,A,m,st,bt.clone(),Z,mt.clone(),m)))break}),gt(m,D,pt);for(let R of h)R.shove&&(f.copy(R.matrix),f.elements[12]+=R.shove.x,f.elements[14]+=R.shove.z,R.mesh.setMatrixAt(R.index,f),R.mesh.instanceMatrix.needsUpdate=!0,R.shove.multiplyScalar(.8),R.shove.lengthSq()<1e-7&&(R.shove=null));Xt(D)}}function Ot(m,D){for(let R of Object.values(N))for(let A of R.parts)!A.alive||Math.abs(A.p.x-m.x)>.15||Math.abs(A.p.z-m.z)>.15||Math.abs(A.p.y-m.y)>.15||(A.v.copy(D).multiplyScalar(.5+Math.random()*.3).add(new I(0,1+Math.random(),0)),A.w.set(k(),k(),k()).multiplyScalar(18),A.rest=0)}function Xt(m){for(let D of Object.values(N)){let R=!1;D.parts.forEach((A,Z)=>{if(!A.alive||A.rest>1)return;R=!0;let G=A.material==="drywall"||A.material==="glass"?.97:.995;A.v.y-=9.8*m,A.v.x*=G,A.v.z*=G,A.p.addScaledVector(A.v,m),U.setFromAxisAngle(mt.copy(A.w).normalize(),A.w.length()*m),A.q.premultiply(U);let st=Math.min(A.s.x,A.s.y,A.s.z)/2;if(A.p.y<st){let lt=-A.v.y;if(A.p.y=st,A.v.y*=A.material==="plaster"?-.15:-.3,A.v.x*=.6,A.v.z*=.6,A.w.multiplyScalar(.5),(A.material==="glass"||A.material==="ceramic")&&lt>1&&Math.random()<.12&&Pt.tink(A.material),A.v.lengthSq()<.02&&(A.rest+=m*10,A.w.set(0,0,0),A.material!=="plaster")){let At=A.s.y<A.s.x?"y":"x";A.q.setFromAxisAngle(new I(0,1,0),Math.random()*6),At==="x"&&A.q.multiply(new Le().setFromAxisAngle(new I(0,0,1),Math.PI/2))}}A.p.x=Math.max(-4.4,Math.min(4.4,A.p.x)),A.p.z=Math.max(-4.7,Math.min(4.7,A.p.z)),O.position.copy(A.p),O.quaternion.copy(A.q),O.scale.copy(A.s),O.updateMatrix(),D.mesh.setMatrixAt(Z,O.matrix)}),R&&(D.mesh.instanceMatrix.needsUpdate=!0)}}return{update:Dt,state:ft,tools:o,targets:h,props:d,reset:K,start:V}}var kn=new URLSearchParams(location.search),Pc=document.getElementById("enter"),md=['600 40px "Caveat"','40px "Permanent Marker"','700 40px "Cabin Sketch"','40px "Special Elite"'].map(i=>document.fonts.load(i));md.push(document.fonts.load('40px "Yuji Syuku"',"\u58CA\u3059\u306A"));await Promise.race([Promise.allSettled(md),new Promise(i=>setTimeout(i,3500))]);var ye=new zo({antialias:!0,powerPreference:"high-performance"});ye.setPixelRatio(Math.min(devicePixelRatio,2));ye.setSize(innerWidth,innerHeight);ye.toneMapping=yr;ye.toneMappingExposure=Number(kn.get("exposure"))||1.05;ye.shadowMap.enabled=!0;ye.shadowMap.type=qi;ye.shadowMap.autoUpdate=!1;ye.xr.enabled=!0;ye.xr.setReferenceSpaceType("local-floor");ye.xr.setFoveation(.6);document.body.prepend(ye.domElement);var yn=new Gi,en=new ce,$e=new qe(70,innerWidth/innerHeight,.03,80);yn.background=new Gt(15331302);yn.environment=new Bs(ye).fromScene(new Go,.04).texture;yn.environmentIntensity=kn.has("sunonly")?0:.22;$e.position.y=Number(kn.get("y")??1.6);$e.rotation.order="YXZ";$e.rotation.set(Number(kn.get("pitch")??-.08),Number(kn.get("yaw")??0),0);en.position.set(Number(kn.get("x")??.4),0,Number(kn.get("z")??3.9));en.add($e);yn.add(en);var Re=Ju(yn,{cjk:$u("\u58CA",Ee.brush)}),Cc=Ku(yn),Vn=new Ps(16767398,7);Vn.position.copy(Zo).multiplyScalar(14);Vn.castShadow=!0;Vn.shadow.mapSize.set(2048,2048);Object.assign(Vn.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:2,far:30});Vn.shadow.bias=-4e-4;Vn.shadow.normalBias=.025;Vn.shadow.radius=3;yn.add(Vn,Vn.target);var jo=new Ps(13622514,1.1);jo.position.set(-10,2.5,1);var gd=new pr(13227754,6963236,.22);kn.has("sunonly")||yn.add(jo,gd);ye.shadowMap.needsUpdate=!0;var nn=null;function Lc(){if(nn)return nn.ctx.resume();let i=new xr,t=i.context,e=i.getInput();$e.add(i);let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=n.getChannelData(0);for(let w=0;w<s.length;w++)s[w]=Math.random()*2-1;let r=(w,T,N)=>{let _=new PannerNode(t,{panningModel:"HRTF",refDistance:1.5,positionX:w,positionY:T,positionZ:N});return _.connect(e),_},a=(w,{dur:T=.3,type:N="lowpass",freq:_=800,to:E=_,gain:U=.5,q:O=.7}={})=>{let z=t.currentTime,k=new AudioBufferSourceNode(t,{buffer:n,loop:!0}),F=new BiquadFilterNode(t,{type:N,frequency:_,Q:O}),H=new GainNode(t,{gain:U});F.frequency.exponentialRampToValueAtTime(E,z+T),H.gain.setValueAtTime(U,z),H.gain.exponentialRampToValueAtTime(1e-4,z+T),k.connect(F).connect(H).connect(w),k.start(z,Math.random()),k.stop(z+T+.05)},o=(w,{from:T,to:N,dur:_,gain:E=.3,type:U="sine"})=>{let O=t.currentTime,z=new OscillatorNode(t,{type:U,frequency:T}),k=new GainNode(t,{gain:E});z.frequency.exponentialRampToValueAtTime(N,O+_),k.gain.setValueAtTime(E,O),k.gain.exponentialRampToValueAtTime(1e-4,O+_),z.connect(k).connect(w),z.start(O),z.stop(O+_+.05)},l=r(-Kt/2-3,2.5,0),c=new GainNode(t,{gain:0}),u=new GainNode(t,{gain:.05}),d=new AudioBufferSourceNode(t,{buffer:n,loop:!0}),h=new GainNode(t,{gain:1});d.connect(new BiquadFilterNode(t,{type:"bandpass",frequency:5200,Q:3})).connect(c).connect(u).connect(h).connect(l);let f=new OscillatorNode(t,{type:"square",frequency:38}),y=new GainNode(t,{gain:.5});f.connect(y).connect(c.gain),c.gain.value=.5;let S=new OscillatorNode(t,{frequency:.07}),g=new GainNode(t,{gain:.035});S.connect(g).connect(u.gain),d.start(),f.start(),S.start();let p=r(1.55,2.68,-_e/2),b=r(.12,1.3,-3.78),P=r(2.2,ke,1.5),M=r(Re.lair.x,.6,Re.lair.z);nn={ctx:t,hush:h,out:e,scratch:()=>a(b,{dur:.05+Math.random()*.05,type:"bandpass",freq:2400+Math.random()*1500,gain:.12,q:5}),whistle:()=>{o(e,{from:500,to:1500,dur:.35,gain:.07,type:"sine"}),setTimeout(()=>o(e,{from:1500,to:1400,dur:.25,gain:.05,type:"triangle"}),330)},tick:w=>a(p,{dur:.04,type:"highpass",freq:w?3e3:2200,gain:.25}),click:()=>a(b,{dur:.06,type:"highpass",freq:1800,gain:.6}),pfft:()=>{a(b,{dur:.7,type:"bandpass",freq:1400,to:300,gain:.5,q:2}),o(b,{from:700,to:180,dur:.6,gain:.08,type:"triangle"})},boom:()=>{a(b,{dur:2.6,freq:600,to:40,gain:1.6}),o(b,{from:90,to:28,dur:2.2,gain:.9}),a(P,{dur:1.4,type:"highpass",freq:3e3,to:900,gain:.25})},clatter:()=>{for(let w=0;w<4;w++)setTimeout(()=>a(b,{dur:.09,type:"bandpass",freq:900+Math.random()*900,gain:.5,q:4}),w*70+Math.random()*40)},giggle:()=>{for(let w=0;w<5;w++)setTimeout(()=>o(M,{from:520+w*25,to:380,dur:.09,gain:.05,type:"triangle"}),w*95)}}}var Ws=600,Ii=new Float32Array(Ws*3),xd=new Float32Array(Ws*3),zn=new Float32Array(Ws*3),$o=new Float32Array(Ws),Qo=new xe;Qo.setAttribute("position",new Qt(Ii,3));Qo.setAttribute("color",new Qt(xd,3));var _d=new ri(Qo,new Es({size:.012,vertexColors:!0,transparent:!0,depthWrite:!1}));_d.frustumCulled=!1;yn.add(_d);var Vs=0;function Rc(i,t,e,n,s,r=1){for(let a=0;a<i;a++,Vs=(Vs+1)%Ws)Ii.set([t.x+(Math.random()-.5)*e.x,t.y+(Math.random()-.5)*e.y,t.z+(Math.random()-.5)*e.z],Vs*3),zn.set([(Math.random()-.5)*n,Math.random()*n*r,(Math.random()-.5)*n],Vs*3),xd.set(new Gt(s[a%s.length]).toArray(),Vs*3),$o[Vs]=2+Math.random()*2}var yd=[16731501,16765503,4112851,9095462,11765995],xx=[13617336,12169632,14999248],cd=["WHO PUSHED THE PLUNGER?","IT IS NOT CONNECTED TO ANYTHING.","IT IS NOW CONNECTED TO SOMETHING.","FINE. DETENTION. YOU TOO, VISITOR.","STOP.","I AM CALLING YOUR MOTHER.",'SHE ASKED "WHICH ONE?"',"IT IS NOW CONNECTED TO EVERYTHING.","WE ARE ALL IN DETENTION NOW."],me={pushes:0,explosions:0,pressedAt:-9,armed:!0,fallen:0,lampSpin:0,lampAngle:0,flicker:0,flipAt:-9,eyesHidden:0},Jo=[],vd=i=>Jo.push({start:performance.now()/1e3,...i});function Fr(i){let t=Re.statusCanvas.getContext("2d");t.clearRect(0,0,Re.statusCanvas.width,Re.statusCanvas.height),t.drawImage(Wo(i),0,0),Re.status.material.map.needsUpdate=!0}var Pi=new I;function tl(){let i=performance.now()/1e3;if(!(i-me.pressedAt<1.2)){if(me.pressedAt=i,me.pushes++,Lc(),nn.click(),vd({dur:.5,run:t=>{Re.handle.position.y=.21-.1*Math.sin(Math.min(1,t*2)*Math.PI/2)*(t<.6?1:1-(t-.6)/.4)}}),Fr(cd[Math.min(me.pushes,cd.length)-1]),Re.handle.getWorldPosition(Pi),me.pushes%3===0)return setTimeout(_x,900);nn.pfft(),Rc(40,Pi,new I(.05,.02,.05),.9,yd)}}function _x(){me.explosions++,nn.boom(),me.flicker=1.6,me.lampSpin+=2.4,me.flipAt=performance.now()/1e3,Rc(260,new I(2.2,ke-.05,1.5),new I(2.6,.02,2.2),.15,xx,-1),Rc(80,Pi,new I(.1,.05,.1),2.2,yd);let i=Re.scrolls[me.fallen++];if(i){let t=i.position.y;setTimeout(()=>vd({dur:.8,run:e=>{i.position.y=t-(t-.19)*e*e,i.rotation.x=-Math.PI/2*e*e,i.position.z=-_e/2+.04+.08*e},done:()=>nn.clatter()}),350)}}var Ic={built:{sun:7,sky:1.1,bounce:.22,env:.22,exposure:1.05,haze:1,skyColor:13622514},film:{sun:10,sky:.34,bounce:.09,env:.07,exposure:1,haze:1.5,skyColor:8362198}},Ko=kn.get("look")==="built",An={...Ko?Ic.built:Ic.film,fill:1};jo.color.set(An.skyColor);function yx(i,t){let e=1-Math.exp(-t*1.5);An.fill+=(i.fill-An.fill)*e,Vn.intensity+=(i.sun-Vn.intensity)*e,jo.intensity=An.sky*An.fill,gd.intensity=An.bounce*An.fill,kn.has("sunonly")||(yn.environmentIntensity=An.env*An.fill),Cc.haze.value+=(i.haze-Cc.haze.value)*e}kn.has("exposure")||(ye.toneMappingExposure=An.exposure);var ci=ld({scene:yn,renderer:ye,rig:en,room:Re,audio:()=>nn,say:Fr,flip:()=>{me.flipAt=performance.now()/1e3}});function vx(i,t){let e=Re.eyes,n=e.position.clone().sub(t),s=n.length(),r=$e.getWorldDirection(new I).dot(n.normalize());s<1.4&&r>.93&&i>me.eyesHidden&&(me.eyesHidden=i+5,nn?.giggle());let a=i<me.eyesHidden,o=Math.sin(i*1.3)>.985||Math.sin(i*.37+2)>.995;e.scale.y+=((a||o?.02:1)-e.scale.y)*(a?.5:.35),e.position.x=Re.lair.x+.2+Math.sin(i*.21)*.25}var Mx=[0,1].map(i=>{let t=ye.xr.getController(i);t.add(new or(new xe().setFromPoints([new I,new I(0,0,-.4)]),new As({color:16777215,transparent:!0,opacity:.35}))),t.addEventListener("select",()=>{Sx(t)&&tl()}),en.add(t);let e=ye.xr.getControllerGrip(i),n=ye.xr.getHand(i);return en.add(e,n),{c:t,grip:e,hand:n}}),Ur=new _r;function Sx(i){return i.updateMatrixWorld(!0),Ur.ray.origin.setFromMatrixPosition(i.matrixWorld),Ur.ray.direction.set(0,0,-1).applyQuaternion(i.getWorldQuaternion(new Le)),Ur.intersectObject(Re.plunger,!0).length>0}var hd=new I;function bx(){Re.handle.getWorldPosition(Pi);for(let{grip:i,hand:t}of Mx){let e=t.joints?.["index-finger-tip"],n=e?.visible?e.getWorldPosition(hd):i.visible?i.getWorldPosition(hd):null;if(n&&Math.hypot(n.x-Pi.x,n.z-Pi.z)<.09&&n.y<Pi.y+.02&&n.y>Pi.y-.12)return!0}return!1}ye.domElement.addEventListener("pointermove",i=>{i.buttons&&($e.rotation.y+=i.movementX*.004,$e.rotation.x=Math.min(1.4,Math.max(-1.4,$e.rotation.x+i.movementY*.004)))});ye.domElement.addEventListener("click",i=>{Lc(),Ur.setFromCamera(new Vt(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),$e),Ur.intersectObject(Re.plunger,!0).length&&tl()});var Hs=new Set;addEventListener("keydown",i=>Hs.add(i.key.toLowerCase()));addEventListener("keyup",i=>Hs.delete(i.key.toLowerCase()));addEventListener("resize",()=>{$e.aspect=innerWidth/innerHeight,$e.updateProjectionMatrix(),ye.setSize(innerWidth,innerHeight)});var Li=new vt(new un(.3,16,8),new hn({color:0,side:Ue,transparent:!0,depthTest:!1,depthWrite:!1}));Li.renderOrder=999;Li.visible=!1;$e.add(Li);var jn={at:-1,written:0,lastPhase:null},ud="DEMOLITION BOY",wx="LESSON 2: DEMOLITION. SWING TO START.";function Tx(){ci.state.phase!=="intro"&&ci.reset(),jn.at=performance.now()/1e3,jn.written=0,ci.state.phase="intro",Li.visible=!0,Li.material.opacity=1,Fr("")}function Ax(i){if(jn.at<0)return;let t=i-jn.at;Li.material.opacity=1-Math.min(1,Math.max(0,(t-.8)/3.7))**1.6,Li.visible=Li.material.opacity>.002;let e=Math.min(ud.length,Math.floor(Math.max(0,t-4.2)/.16));e>jn.written&&(jn.written=e,Fr(ud.slice(0,e)),nn?.scratch()),t>9.5&&ci.state.phase==="intro"&&(ci.state.phase="ready",nn?.whistle(),Fr(wx),jn.at=-1)}var Gs=new I,Tc=new I,dd=new I,fd=new I(0,1,0),pd=performance.now(),Ac=!1,Ec=0;ye.setAnimationLoop(i=>{let t=performance.now()/1e3,e=Math.min(.05,(i-pd)/1e3);pd=i,Cc.time.value=t,$e.getWorldPosition(Gs);let n=new Vt(+Hs.has("d")-+Hs.has("a"),+Hs.has("s")-+Hs.has("w"));for(let u of ye.xr.getSession()?.inputSources??[]){let d=u.gamepad?.axes;if(!(!d||d.length<4))if(u.handedness==="left")n.set(d[2],d[3]);else if(Math.abs(d[2])>.7&&!Ac){let h=-Math.sign(d[2])*Math.PI/6;en.position.sub(Gs).applyAxisAngle(fd,h).add(Gs),en.rotation.y+=h,Ac=!0}else Math.abs(d[2])<.3&&(Ac=!1)}if(n.lengthSq()>.01){let u=Gs.x-en.position.x,d=Gs.z-en.position.z;$e.getWorldDirection(Tc).setY(0).normalize(),dd.crossVectors(Tc,fd),en.position.addScaledVector(Tc,-n.y*e*1.3).addScaledVector(dd,n.x*e*1.3),en.position.x=Math.min(Kt/2-.35,Math.max(-Kt/2+.35,en.position.x+u))-u,en.position.z=Math.min(_e/2-.35,Math.max(-_e/2+.9,en.position.z+d))-d}let s=ye.xr.isPresenting&&bx();s&&me.armed&&(me.armed=!1,tl()),s||(me.armed=!0);for(let u=Jo.length-1;u>=0;u--){let d=Jo[u],h=Math.min(1,(t-d.start)/d.dur);d.run(h),h===1&&(Jo.splice(u,1),d.done?.())}me.lampSpin+=(-me.lampAngle*9-me.lampSpin*.9)*e,me.lampAngle+=me.lampSpin*e,Re.crooked.g.rotation.z=-.62+me.lampAngle*.35+Math.sin(t*.8)*.012,me.flicker=Math.max(0,me.flicker-e);let r=me.flicker>0?Math.random()>.5:Math.sin(t*.5)>.97&&Math.random()>.6;Re.crooked.tubes.emissiveIntensity=r?2.2:.05;let a=Math.min(1,(t-me.flipAt)/.6);Re.flip.rotation.x=a<1?-a*Math.PI*2:0,vx(t,Gs),ci.update(t,e),Ax(t,e);let o=ci.state.phase;if(yx({fill:Ko?1:jn.at>=0?.3:o==="over"?.45:1,sun:Ko?Ic.built.sun:o==="over"?11.5:An.sun,haze:Ko?1:(o==="intro"?1.9:An.haze)+ci.state.dust},e),nn&&o!==jn.lastPhase){jn.lastPhase=o;let u=o==="play"?.05:1;nn.hush.gain.setTargetAtTime(u,nn.ctx.currentTime,o==="play"?.3:2.5)}let l=new Date,c=l.getSeconds()+l.getMilliseconds()/1e3;Re.hands.second.rotation.z=c/60*Math.PI*2,Re.hands.minute.rotation.z=(l.getMinutes()+c/60)/60*Math.PI*2,Re.hands.hour.rotation.z=(l.getHours()%12+l.getMinutes()/60)/12*Math.PI*2,nn&&Math.floor(c)!==Ec&&(Ec=Math.floor(c),nn.tick(Ec%2));for(let u=0;u<Ws;u++){if($o[u]<=0)continue;$o[u]-=e;let d=u*3;zn[d+1]-=1.6*e,zn[d]*=.985,zn[d+2]*=.985,zn[d+1]=Math.max(zn[d+1],-.45),Ii[d]+=(zn[d]+Math.sin(t*7+u)*.05)*e,Ii[d+1]+=zn[d+1]*e,Ii[d+2]+=zn[d+2]*e,Ii[d+1]<.005&&(Ii[d+1]=.005,zn[d]=zn[d+2]=0),$o[u]<=0&&(Ii[d+1]=-10)}Qo.attributes.position.needsUpdate=!0,ye.render(yn,$e)});var Md=await navigator.xr?.isSessionSupported("immersive-vr").catch(()=>!1);Pc.disabled=!Md;Pc.textContent=Md?"Enter the classroom":"Open on a headset to step in";document.body.classList.add("ready");Pc.addEventListener("click",async()=>{Lc();let i=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","hand-tracking"]});await ye.xr.setSession(i),Tx(),document.body.classList.add("immersive"),i.addEventListener("end",()=>document.body.classList.remove("immersive"))});Object.assign(globalThis,{classroom:{renderer:ye,scene:yn,camera:$e,rig:en,room:Re,state:me,push:tl,game:ci}});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
