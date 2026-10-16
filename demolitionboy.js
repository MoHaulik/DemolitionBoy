var lu=0,wc=1,cu=2;var rs=1,hu=2,qs=3,Oi=0,Ye=1,Dn=2,ai=0,Bi=1,Un=2,Tc=3,Ac=4,uu=5;var as=100,du=101,fu=102,pu=103,mu=104,gu=200,xu=201,_u=202,yu=203,Ec=204,Cc=205,vu=206,Mu=207,Su=208,bu=209,wu=210,Tu=211,Au=212,Eu=213,Cu=214,ka=0,Va=1,Ga=2,Rs=3,Ha=4,Wa=5,Xa=6,qa=7,Eo=0,Ru=1,Iu=2,qn=0,Rc=1,Ic=2,Pc=3,Yr=4,Lc=5,Nc=6,Dc=7;var Uc=300,zi=301,os=302,Co=303,Ro=304,Zr=306,Pi=1e3,ei=1001,Ya=1002,tn=1003,Pu=1004;var $r=1005;var an=1006,Io=1007;var ki=1008;var Sn=1009,Fc=1010,Oc=1011,Ys=1012,Po=1013,Yn=1014,Fn=1015,Zn=1016,Lo=1017,No=1018,Zs=1020,Bc=35902,zc=35899,kc=1021,Vc=1022,On=1023,ni=1026,Vi=1027,Do=1028,Uo=1029,Gi=1030,Fo=1031;var Oo=1033,Jr=33776,Kr=33777,jr=33778,Qr=33779,Bo=35840,zo=35841,ko=35842,Vo=35843,Go=36196,Ho=37492,Wo=37496,Xo=37488,qo=37489,ta=37490,Yo=37491,Zo=37808,$o=37809,Jo=37810,Ko=37811,jo=37812,Qo=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,ea=36285,fl=36286;var _r=2300,Za=2301,Ba=2302,hc=2303,uc=2400,dc=2401,fc=2402;var Lu=3200;var na=0,Nu=1,_i="",sn="srgb",yr="srgb-linear",vr="linear",Se="srgb";var za=7680;var Du=519,Uu=512,Fu=513,Ou=514,pl=515,Bu=516,zu=517,ml=518,ku=519,Vu=35044;var Gc="300 es",Hn=2e3,Is=2001;function Ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){let i=Mr("canvas");return i.style.display="block",i}var Eh={},Ps=null;function Hc(...i){let t="THREE."+i.shift();Ps?Ps("log",t,...i):console.log(t,...i)}function Hu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=Hu(i);let t="THREE."+i.shift();if(Ps)Ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=Hu(i);let t="THREE."+i.shift();if(Ps)Ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ts(...i){let t=i.join(" ");t in Eh||(Eh[t]=!0,Kt(...i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xu={[ka]:Va,[Ga]:Xa,[Ha]:qa,[Rs]:Wa,[Va]:ka,[Xa]:Ga,[qa]:Ha,[Wa]:Rs},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fl=Math.PI/180,$a=180/Math.PI;function $s(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function Rf(i,t){return(i%t+t)%t}function Ol(i,t,e){return(1-e)*i+e*t}function or(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),C=Math.sin(M);p=Math.sin(p*M)/C,o=Math.sin(o*M)/C,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bl.copy(this).projectOnVector(t),this.sub(Bl)}reflect(t){return this.sub(Bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new R,Ch=new Ge,ne=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],C=s[4],y=s[7],b=s[2],w=s[5],L=s[8];return r[0]=a*v+o*M+l*b,r[3]=a*m+o*C+l*w,r[6]=a*p+o*y+l*L,r[1]=c*v+h*M+d*b,r[4]=c*m+h*C+d*w,r[7]=c*p+h*y+d*L,r[2]=u*v+f*M+g*b,r[5]=u*m+f*C+g*w,r[8]=u*p+f*y+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zl=new ne,Rh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){let i={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yr]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:Rh,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Rh,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var me=If();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,Ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=Mr("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,Ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kl(s[a].image)):r.push(kl(s[a]))}else r=kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Lf=0,Vl=new R,xn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=an,a=ki,o=On,l=Sn,c=i.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=$s(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Uc;xn.DEFAULT_ANISOTROPY=1;var De=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(f+1)/2,b=(p+1)/2,w=(h+u)/4,L=(d+v)/4,_=(g+m)/4;return C>y&&C>b?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=w/n,r=L/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new xn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sr=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var de=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Df)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ti.crossVectors(n,wn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ti.crossVectors(n,wn)),Ti.normalize(),ua.crossVectors(wn,Ti),s[0]=Ti.x,s[4]=ua.x,s[8]=wn.x,s[1]=Ti.y,s[5]=ua.y,s[9]=wn.y,s[2]=Ti.z,s[6]=ua.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],C=n[7],y=n[11],b=n[15],w=s[0],L=s[4],_=s[8],A=s[12],N=s[1],D=s[5],O=s[9],H=s[13],U=s[2],G=s[6],j=s[10],J=s[14],ut=s[3],Y=s[7],it=s[11],lt=s[15];return r[0]=a*w+o*N+l*U+c*ut,r[4]=a*L+o*D+l*G+c*Y,r[8]=a*_+o*O+l*j+c*it,r[12]=a*A+o*H+l*J+c*lt,r[1]=h*w+d*N+u*U+f*ut,r[5]=h*L+d*D+u*G+f*Y,r[9]=h*_+d*O+u*j+f*it,r[13]=h*A+d*H+u*J+f*lt,r[2]=g*w+v*N+m*U+p*ut,r[6]=g*L+v*D+m*G+p*Y,r[10]=g*_+v*O+m*j+p*it,r[14]=g*A+v*H+m*J+p*lt,r[3]=M*w+C*N+y*U+b*ut,r[7]=M*L+C*D+y*G+b*Y,r[11]=M*_+C*O+y*j+b*it,r[15]=M*A+C*H+y*J+b*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],M=l*f-c*u,C=o*f-c*d,y=o*u-l*d,b=a*f-c*h,w=a*u-l*h,L=a*d-o*h;return e*(v*M-m*C+p*y)-n*(g*M-m*b+p*w)+s*(g*C-v*b+p*L)-r*(g*y-v*w+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=e*o-n*a,C=e*l-s*a,y=e*c-r*a,b=n*l-s*o,w=n*c-r*o,L=s*c-r*l,_=h*v-d*g,A=h*m-u*g,N=h*p-f*g,D=d*m-u*v,O=d*p-f*v,H=u*p-f*m,U=M*H-C*O+y*D+b*N-w*A+L*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/U;return t[0]=(o*H-l*O+c*D)*G,t[1]=(s*O-n*H-r*D)*G,t[2]=(v*L-m*w+p*b)*G,t[3]=(u*w-d*L-f*b)*G,t[4]=(l*N-a*H-c*A)*G,t[5]=(e*H-s*N+r*A)*G,t[6]=(m*y-g*L-p*C)*G,t[7]=(h*L-u*y+f*C)*G,t[8]=(a*O-o*N+c*_)*G,t[9]=(n*N-e*O-r*_)*G,t[10]=(g*w-v*y+p*M)*G,t[11]=(d*y-h*w-f*M)*G,t[12]=(o*A-a*D-l*_)*G,t[13]=(e*D-n*A+s*_)*G,t[14]=(v*C-g*b-m*M)*G,t[15]=(h*b-d*C+u*M)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,M=l*c,C=l*h,y=l*d,b=n.x,w=n.y,L=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+y)*b,s[2]=(g-C)*b,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+C)*L,s[9]=(m-M)*L,s[10]=(1-(u+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);let c=1/a,h=1/o,d=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,e.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Hn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Is)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Hn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Is)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new R,zn=new de,Nf=new R(0,0,0),Df=new R(1,1,1),Ti=new R,ua=new R,wn=new R,Ph=new de,Lh=new Ge,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uf=0,Nh=new R,gs=new Ge,ui=new de,da=new R,lr=new R,Ff=new R,Of=new Ge,Dh=new R(1,0,0),Uh=new R(0,1,0),Fh=new R(0,0,1),Oh={type:"added"},Bf={type:"removed"},xs={type:"childadded",child:null},Gl={type:"childremoved",child:null},ze=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new An,n=new Ge,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new ne}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(lr,da,this.up):ui.lookAt(da,lr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ui),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),xs.child=t,this.dispatchEvent(xs),xs.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new R(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},zf={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Rf(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hl(a,r,t+1/3),this.g=Hl(a,r,t),this.b=Hl(a,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return me.workingToColorSpace(cn.copy(this),t),Math.round(ue(cn.r*255,0,255))*65536+Math.round(ue(cn.g*255,0,255))*256+Math.round(ue(cn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=sn){me.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(fa);let n=Ol(Ai.h,fa.h,e),s=Ol(Ai.s,fa.s,e),r=Ol(Ai.l,fa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ee;ee.NAMES=qu;var es=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new R,di=new R,Wl=new R,fi=new R,_s=new R,ys=new R,Bh=new R,Xl=new R,ql=new R,Yl=new R,Zl=new De,$l=new De,Jl=new De,Ii=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),di.subVectors(n,e),Wl.subVectors(t,e);let a=kn.dot(kn),o=kn.dot(di),l=kn.dot(Wl),c=di.dot(di),h=di.dot(Wl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Zl.setScalar(0),$l.setScalar(0),Jl.setScalar(0),Zl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),Jl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Zl,r.x),a.addScaledVector($l,r.y),a.addScaledVector(Jl,r.z),a}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),di.subVectors(t,e),kn.cross(di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),kn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,n),ys.subVectors(r,n),Xl.subVectors(t,n);let l=_s.dot(Xl),c=ys.dot(Xl);if(l<=0&&c<=0)return e.copy(n);ql.subVectors(t,s);let h=_s.dot(ql),d=ys.dot(ql);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(_s,a);Yl.subVectors(t,r);let f=_s.dot(Yl),g=ys.dot(Yl);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ys,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Bh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Bh,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(_s,a).addScaledVector(ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},si=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),ma.subVectors(this.max,cr),vs.subVectors(t.a,cr),Ms.subVectors(t.b,cr),Ss.subVectors(t.c,cr),Ei.subVectors(Ms,vs),Ci.subVectors(Ss,Ms),qi.subVectors(vs,Ss);let e=[0,-Ei.z,Ei.y,0,-Ci.z,Ci.y,0,-qi.z,qi.y,Ei.z,0,-Ei.x,Ci.z,0,-Ci.x,qi.z,0,-qi.x,-Ei.y,Ei.x,0,-Ci.y,Ci.x,0,-qi.y,qi.x,0];return!Kl(e,vs,Ms,Ss,ma)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,vs,Ms,Ss,ma))?!1:(ga.crossVectors(Ei,Ci),e=[ga.x,ga.y,ga.z],Kl(e,vs,Ms,Ss,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pi=[new R,new R,new R,new R,new R,new R,new R,new R],Vn=new R,pa=new si,vs=new R,Ms=new R,Ss=new R,Ei=new R,Ci=new R,qi=new R,cr=new R,ma=new R,ga=new R,Yi=new R;function Kl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yi.fromArray(i,r);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=t.dot(Yi),c=e.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var We=new R,xa=new gt,kf=0,gn=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vu,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=or(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=or(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=or(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=or(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var br=class extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wr=class extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vf=new si,hr=new R,jl=new R,ri=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);let e=hr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(jl)),this.expandByPoint(hr.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gf=0,Nn=new de,Ql=new ze,bs=new R,Tn=new si,ur=new si,Qe=new R,Ae=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ef(t)?wr:br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Ql.lookAt(t),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Tn.min,ur.min),Tn.expandByPoint(Qe),Qe.addVectors(Tn.max,ur.max),Tn.expandByPoint(Qe)):(Tn.expandByPoint(ur.min),Tn.expandByPoint(ur.max))}Tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(t,c),Qe.add(bs)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,d=new R,u=new gt,f=new gt,g=new gt,v=new R,m=new R;function p(_,A,N){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,N),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[_].add(v),o[A].add(v),o[N].add(v),l[_].add(m),l[A].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,A=M.length;_<A;++_){let N=M[_],D=N.start,O=N.count;for(let H=D,U=D+O;H<U;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let C=new R,y=new R,b=new R,w=new R;function L(_){b.fromBufferAttribute(s,_),w.copy(b);let A=o[_];C.copy(A),C.sub(b.multiplyScalar(b.dot(A))).normalize(),y.crossVectors(w,A);let D=y.dot(l[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,D)}for(let _=0,A=M.length;_<A;++_){let N=M[_],D=N.start,O=N.count;for(let H=D,U=D+O;H<U;H+=3)L(t.getX(H+0)),L(t.getX(H+1)),L(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new gn(u,h,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tc=new R,Hf=new R,Wf=new ne,Gn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=tc.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wf.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xf=0,Wn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Bi,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Cc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mi=new R,ec=new R,_a=new R,ya=new R,ns=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ec.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),ya.copy(this.origin).sub(ec);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_a),o=ya.dot(this.direction),l=-ya.dot(_a),c=ya.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ec).addScaledVector(_a,u),f}intersectSphere(t,e){if(t.radius<0)return null;mi.subVectors(t.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,M=n.y-a.y,C=n.z-a.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(h),L,_,A,N,D,O,H,U,G,j,J,ut;if(y>=b&&y>=w?(A=l,O=d,G=g,ut=p,l>=0?(L=c,_=h,N=u,D=f,H=v,U=m,j=M,J=C):(L=h,_=c,N=f,D=u,H=m,U=v,j=C,J=M)):b>=w?(A=c,O=u,G=v,ut=M,c>=0?(L=h,_=l,N=f,D=d,H=m,U=g,j=C,J=p):(L=l,_=h,N=d,D=f,H=g,U=m,j=p,J=C)):(A=h,O=f,G=m,ut=C,h>=0?(L=l,_=c,N=d,D=u,H=g,U=v,j=p,J=M):(L=c,_=l,N=u,D=d,H=v,U=g,j=M,J=p)),A===0)return null;let Y=L/A,it=_/A,lt=1/A,Lt=N-Y*O,Dt=D-it*O,ae=H-Y*G,ie=U-it*G,se=j-Y*ut,et=J-it*ut,rt=se*ie-et*ae,yt=Lt*et-Dt*se,Ut=ae*Dt-ie*Lt;if(s){if(rt<0||yt<0||Ut<0)return null}else if((rt<0||yt<0||Ut<0)&&(rt>0||yt>0||Ut>0))return null;let Rt=rt+yt+Ut;if(Rt===0)return null;let Bt=lt*(rt*O+yt*G+Ut*ut);return(Rt>0?Bt<0:Bt>0)?null:this.at(Bt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zh=new de,Zi=new ns,va=new ri,kh=new R,Ma=new R,Sa=new R,ba=new R,nc=new R,wa=new R,Vh=new R,Ta=new R,bt=class extends ze{constructor(t=new Ae,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(nc.fromBufferAttribute(d,t),a?wa.addScaledVector(nc,h):wa.addScaledVector(nc.sub(e),h))}e.add(wa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(va.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(va,kh)===null||Zi.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=C;y<b;y+=3){let w=o.getX(y),L=o.getX(y+1),_=o.getX(y+2);s=Aa(this,p,t,n,c,h,d,w,L,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);s=Aa(this,a,t,n,c,h,d,M,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=C;y<b;y+=3){let w=y,L=y+1,_=y+2;s=Aa(this,p,t,n,c,h,d,w,L,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,C=m+1,y=m+2;s=Aa(this,a,t,n,c,h,d,M,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function qf(i,t,e,n,s,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Oi,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ta);return c<e.near||c>e.far?null:{distance:c,point:Ta.clone(),object:i}}function Aa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ma),i.getVertexPosition(l,Sa),i.getVertexPosition(c,ba);let h=qf(i,t,e,n,Ma,Sa,ba,Vh);if(h){let d=new R;Ii.getBarycoord(Vh,Ma,Sa,ba,d),s&&(h.uv=Ii.getInterpolatedAttribute(s,o,l,c,d,new gt)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,o,l,c,d,new gt)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Ii.getNormal(Ma,Sa,ba,u.normal),h.face=u,h.barycoord=d}return h}var Tr=class extends xn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=tn,h=tn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class extends gn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new de,Gh=new de,Ea=[],Hh=new si,Yf=new de,dr=new bt,fr=new ri,Xn=class extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),Hh.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Hh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),fr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),t.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Gh.multiplyMatrices(n,ws),dr.matrixWorld=Gh,dr.raycast(t,Ea);for(let a=0,o=Ea.length;a<o;a++){let l=Ea[a];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(s*this.count),s,this.count,Do,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$i=new ri,Zf=new gt(.5,.5),Ca=new R,Fs=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],C=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-g,b-M).normalize(),s[1].setComponents(c+a,f+h,p+g,b+M).normalize(),s[2].setComponents(c+o,f+d,p+v,b+C).normalize(),s[3].setComponents(c-o,f-d,p-v,b-C).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,b-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,b-y).normalize(),e===Hn)s[5].setComponents(c+l,f+u,p+m,b+y).normalize();else if(e===Is)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){$i.center.set(0,0,0);let e=Zf.distanceTo(t.center);return $i.radius=.7071067811865476+e,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ca.x=s.normal.x>0?t.max.x:t.min.x,Ca.y=s.normal.y>0?t.max.y:t.min.y,Ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Os=class extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qa=new R,to=new R,Wh=new de,pr=new ns,Ra=new ri,ic=new R,Xh=new R,Ar=class extends ze{constructor(t=new Ae,e=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Qa.fromBufferAttribute(e,s-1),to.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Qa.distanceTo(to);t.setAttribute("lineDistance",new re(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;Wh.copy(s).invert(),pr.copy(t.ray).applyMatrix4(Wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),M=h.getX(v+1),C=Ia(this,t,pr,l,p,M,v);C&&e.push(C)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=Ia(this,t,pr,l,v,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=Ia(this,t,pr,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Ia(this,t,pr,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ia(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Qa.fromBufferAttribute(o,s),to.fromBufferAttribute(o,r),e.distanceSqToSegment(Qa,to,ic,Xh)>n)return;ic.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ic);if(!(c<t.near||c>t.far))return{distance:c,point:Xh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Bs=class extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qh=new de,pc=new ns,Pa=new ri,La=new R,xi=class extends ze{constructor(t=new Ae,e=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;qh.copy(s).invert(),pc.copy(t.ray).applyMatrix4(qh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=c.getX(g);La.fromBufferAttribute(d,m),Yh(La,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)La.fromBufferAttribute(d,g),Yh(La,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yh(i,t,e,n,s,r,a){let o=pc.distanceSqToPoint(i);if(o<e){let l=new R;pc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Er=class extends xn{constructor(t=[],e=zi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},En=class extends xn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Li=class extends xn{constructor(t,e,n=Yn,s,r,a,o=tn,l=tn,c,h=ni,d=1){if(h!==ni&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},eo=class extends Li{constructor(t,e=Yn,n=zi,s,r,a=tn,o=tn,l,c=ni){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cr=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_n=class i extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function g(v,m,p,M,C,y,b,w,L,_,A){let N=y/L,D=b/_,O=y/2,H=b/2,U=w/2,G=L+1,j=_+1,J=0,ut=0,Y=new R;for(let it=0;it<j;it++){let lt=it*D-H;for(let Lt=0;Lt<G;Lt++){let Dt=Lt*N-O;Y[v]=Dt*M,Y[m]=lt*C,Y[p]=U,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Lt/L),d.push(1-it/_),J+=1}}for(let it=0;it<_;it++)for(let lt=0;lt<L;lt++){let Lt=u+lt+G*it,Dt=u+lt+G*(it+1),ae=u+(lt+1)+G*(it+1),ie=u+(lt+1)+G*it;l.push(Lt,Dt,ie),l.push(Dt,ae,ie),ut+=6}o.addGroup(f,ut,A),f+=ut,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var be=class i extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;M(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function M(){let y=new R,b=new R,w=0,L=(e-t)/n;for(let _=0;_<=r;_++){let A=[],N=_/r,D=N*(e-t)+t;for(let O=0;O<=s;O++){let H=O/s,U=H*l+o,G=Math.sin(U),j=Math.cos(U);b.x=D*G,b.y=-N*n+m,b.z=D*j,d.push(b.x,b.y,b.z),y.set(G,L,j).normalize(),u.push(y.x,y.y,y.z),f.push(H,1-N),A.push(g++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let N=v[A][_],D=v[A+1][_],O=v[A+1][_+1],H=v[A][_+1];(t>0||A!==0)&&(h.push(N,D,H),w+=3),(e>0||A!==r-1)&&(h.push(D,O,H),w+=3)}c.addGroup(p,w,0),p+=w}function C(y){let b=g,w=new gt,L=new R,_=0,A=y===!0?t:e,N=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let U=O/s*l+o,G=Math.cos(U),j=Math.sin(U);L.x=A*j,L.y=m*N,L.z=A*G,d.push(L.x,L.y,L.z),u.push(0,N,0),w.x=G*.5+.5,w.y=j*.5*N+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){let H=b+O,U=D+O;y===!0?h.push(U,U+1,H):h.push(U+1,U,H),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},is=class i extends be{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},no=class i extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let C=new R,y=new R,b=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],C),f(e[w+1],y),f(e[w+2],b),l(C,y,b,M)}function l(M,C,y,b){let w=b+1,L=[];for(let _=0;_<=w;_++){L[_]=[];let A=M.clone().lerp(y,_/w),N=C.clone().lerp(y,_/w),D=w-_;for(let O=0;O<=D;O++)O===0&&_===w?L[_][O]=A:L[_][O]=A.clone().lerp(N,O/D)}for(let _=0;_<w;_++)for(let A=0;A<2*(w-_)-1;A++){let N=Math.floor(A/2);A%2===0?(u(L[_][N+1]),u(L[_+1][N]),u(L[_][N])):(u(L[_][N+1]),u(L[_+1][N+1]),u(L[_+1][N]))}}function c(M){let C=new R;for(let y=0;y<r.length;y+=3)C.x=r[y+0],C.y=r[y+1],C.z=r[y+2],C.normalize().multiplyScalar(M),r[y+0]=C.x,r[y+1]=C.y,r[y+2]=C.z}function h(){let M=new R;for(let C=0;C<r.length;C+=3){M.x=r[C+0],M.y=r[C+1],M.z=r[C+2];let y=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(y,1-b)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let C=a[M+0],y=a[M+2],b=a[M+4],w=Math.max(C,y,b),L=Math.min(C,y,b);w>.9&&L<.1&&(C<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,C){let y=M*3;C.x=t[y+0],C.y=t[y+1],C.z=t[y+2]}function g(){let M=new R,C=new R,y=new R,b=new R,w=new gt,L=new gt,_=new gt;for(let A=0,N=0;A<r.length;A+=9,N+=6){M.set(r[A+0],r[A+1],r[A+2]),C.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),w.set(a[N+0],a[N+1]),L.set(a[N+2],a[N+3]),_.set(a[N+4],a[N+5]),b.copy(M).add(C).add(y).divideScalar(3);let D=m(b);v(w,N+0,M,D),v(L,N+2,C,D),v(_,N+4,y,D)}}function v(M,C,y,b){b<0&&M.x===1&&(a[C]=M.x-1),y.x===0&&y.z===0&&(a[C]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],a=[],o=new R,l=new de;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},io=class extends zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Zh=new R,$h=new R,sc=new Wc,rc=new Wc,ac=new Wc,so=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:($h.subVectors(s[0],s[1]).add(s[0]),c=$h);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Zh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),sc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),rc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),ac.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),rc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ac.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(sc.calc(l),rc.calc(l),ac.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function $f(i,t){let e=1-i;return e*e*t}function Jf(i,t){return 2*(1-i)*i*t}function Kf(i,t){return i*i*t}function gr(i,t,e,n){return $f(i,t)+Jf(i,e)+Kf(i,n)}function jf(i,t){let e=1-i;return e*e*e*t}function Qf(i,t){let e=1-i;return 3*e*e*i*t}function tp(i,t){return 3*(1-i)*i*i*t}function ep(i,t){return i*i*i*t}function xr(i,t,e,n,s){return jf(i,t)+Qf(i,e)+tp(i,n)+ep(i,s)}var Rr=class extends Cn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends Cn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y),xr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ir=class extends Cn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends Cn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends Cn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends Cn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y),gr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Jh(o,l.x,c.x,h.x,d.x),Jh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},mc=Object.freeze({__proto__:null,ArcCurve:io,CatmullRomCurve3:so,CubicBezierCurve:Rr,CubicBezierCurve3:ro,EllipseCurve:zs,LineCurve:Ir,LineCurve3:ao,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:oo,SplineCurve:Lr}),lo=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new mc[s.type]().fromJSON(s))}return this}},Nr=class extends lo{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ir(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Pr(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Rr(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new zs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ks=class extends Nr{constructor(t){super(t),this.uuid=$s(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Nr().fromJSON(s))}return this}};function np(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=op(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Dr(r,a,e,o,l,c,0),a}function Yu(i,t,e,n,s){let r;if(s===_p(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Kh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Kh(a/n|0,i[a],i[a+1],r);return r&&Vs(r,r.next)&&(Fr(r),r=r.next),r}function ss(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vs(e,e.next)||Be(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Dr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&dp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sp(i,n,s,r):ip(i)){t.push(l.i,i.i,c.i),Fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rp(ss(i),t),Dr(i,t,e,n,s,r,2)):a===2&&ap(i,t,e,n,s,r):Dr(ss(i),t,e,n,s,r,1);break}}}function ip(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&mr(s,o,r,l,a,c,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),p=gc(f,g,t,e,n),M=gc(v,m,t,e,n),C=i.prevZ,y=i.nextZ;for(;C&&C.z>=p&&y&&y.z<=M;){if(C.x>=f&&C.x<=v&&C.y>=g&&C.y<=m&&C!==s&&C!==a&&mr(o,h,l,d,c,u,C.x,C.y)&&Be(C.prev,C,C.next)>=0||(C=C.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&mr(o,h,l,d,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;C&&C.z>=p;){if(C.x>=f&&C.x<=v&&C.y>=g&&C.y<=m&&C!==s&&C!==a&&mr(o,h,l,d,c,u,C.x,C.y)&&Be(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&mr(o,h,l,d,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Vs(n,s)&&$u(n,e,e.next,s)&&Ur(n,s)&&Ur(s,n)&&(t.push(n.i,e.i,s.i),Fr(e),Fr(e.next),e=i=s),e=e.next}while(e!==i);return ss(e)}function ap(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mp(a,o)){let l=Ju(a,o);a=ss(a,a.next),l=ss(l,l.next),Dr(a,t,e,n,s,r,0),Dr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function op(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Yu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pp(c))}s.sort(lp);for(let r=0;r<s.length;r++)e=cp(s[r],e);return e}function lp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cp(i,t){let e=hp(i,t);if(!e)return t;let n=Ju(e,i);return ss(n,n.next),ss(e,e.next)}function hp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Vs(i,e))return e;do{if(Vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Zu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Ur(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&up(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function up(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function dp(i,t,e,n){let s=i;do s.z===0&&(s.z=gc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fp(s)}function fp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function gc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function mr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Zu(i,t,e,n,s,r,a,o)}function mp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gp(i,t)&&(Ur(i,t)&&Ur(t,i)&&xp(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||Vs(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vs(i,t){return i.x===t.x&&i.y===t.y}function $u(i,t,e,n){let s=Da(Be(i,t,e)),r=Da(Be(i,t,n)),a=Da(Be(e,n,i)),o=Da(Be(e,n,t));return!!(s!==r&&a!==o||s===0&&Na(i,e,t)||r===0&&Na(i,n,t)||a===0&&Na(e,i,n)||o===0&&Na(e,t,n))}function Na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Da(i){return i>0?1:i<0?-1:0}function gp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ur(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function xp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ju(i,t){let e=xc(i.i,i.x,i.y),n=xc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kh(i,t,e,n){let s=xc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var _c=class{static triangulate(t,e,n=2){return np(t,e,n)}},Qi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jh(t),Qh(n,t);let a=t.length;e.forEach(jh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Qh(n,e[l]);let o=_c.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Or=class i extends Ae{constructor(t=new ks([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:yp,C,y=!1,b,w,L,_;if(p){C=p.getSpacedPoints(h),y=!0,u=!1;let Q=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,Q),w=new R,L=new R,_=new R}u||(m=0,f=0,g=0,v=0);let A=o.extractPoints(c),N=A.shape,D=A.holes;if(!Qi.isClockWise(N)){N=N.reverse();for(let Q=0,at=D.length;Q<at;Q++){let ct=D[Q];Qi.isClockWise(ct)&&(D[Q]=ct.reverse())}}function H(Q){let ct=10000000000000001e-36,dt=Q[0];for(let xt=1;xt<=Q.length;xt++){let Ft=xt%Q.length,Ht=Q[Ft],Z=Ht.x-dt.x,B=Ht.y-dt.y,P=Z*Z+B*B,At=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(dt.x),Math.abs(dt.y)),vt=ct*At*At;if(P<=vt){Q.splice(Ft,1),xt--;continue}dt=Ht}}H(N),D.forEach(H);let U=D.length,G=N;for(let Q=0;Q<U;Q++){let at=D[Q];N=N.concat(at)}function j(Q,at,ct){return at||jt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(at,ct)}let J=N.length;function ut(Q,at,ct){let dt,xt,Ft,Ht=Q.x-at.x,Z=Q.y-at.y,B=ct.x-Q.x,P=ct.y-Q.y,At=Ht*Ht+Z*Z,vt=Ht*P-Z*B;if(Math.abs(vt)>Number.EPSILON){let E=Math.sqrt(At),x=Math.sqrt(B*B+P*P),k=at.x-Z/E,W=at.y+Ht/E,tt=ct.x-P/x,ft=ct.y+B/x,pt=((tt-k)*P-(ft-W)*B)/(Ht*P-Z*B);dt=k+Ht*pt-Q.x,xt=W+Z*pt-Q.y;let nt=dt*dt+xt*xt;if(nt<=2)return new gt(dt,xt);Ft=Math.sqrt(nt/2)}else{let E=!1;Ht>Number.EPSILON?B>Number.EPSILON&&(E=!0):Ht<-Number.EPSILON?B<-Number.EPSILON&&(E=!0):Math.sign(Z)===Math.sign(P)&&(E=!0),E?(dt=-Z,xt=Ht,Ft=Math.sqrt(At)):(dt=Ht,xt=Z,Ft=Math.sqrt(At/2))}return new gt(dt/Ft,xt/Ft)}let Y=[];for(let Q=0,at=G.length,ct=at-1,dt=Q+1;Q<at;Q++,ct++,dt++)ct===at&&(ct=0),dt===at&&(dt=0),Y[Q]=ut(G[Q],G[ct],G[dt]);let it=[],lt,Lt=Y.concat();for(let Q=0,at=U;Q<at;Q++){let ct=D[Q];lt=[];for(let dt=0,xt=ct.length,Ft=xt-1,Ht=dt+1;dt<xt;dt++,Ft++,Ht++)Ft===xt&&(Ft=0),Ht===xt&&(Ht=0),lt[dt]=ut(ct[dt],ct[Ft],ct[Ht]);it.push(lt),Lt=Lt.concat(lt)}let Dt;if(m===0)Dt=Qi.triangulateShape(G,D);else{let Q=[],at=[];for(let ct=0;ct<m;ct++){let dt=ct/m,xt=f*Math.cos(dt*Math.PI/2),Ft=g*Math.sin(dt*Math.PI/2)+v;for(let Ht=0,Z=G.length;Ht<Z;Ht++){let B=j(G[Ht],Y[Ht],Ft);yt(B.x,B.y,-xt),dt===0&&Q.push(B)}for(let Ht=0,Z=U;Ht<Z;Ht++){let B=D[Ht];lt=it[Ht];let P=[];for(let At=0,vt=B.length;At<vt;At++){let E=j(B[At],lt[At],Ft);yt(E.x,E.y,-xt),dt===0&&P.push(E)}dt===0&&at.push(P)}}Dt=Qi.triangulateShape(Q,at)}let ae=Dt.length,ie=g+v;for(let Q=0;Q<J;Q++){let at=u?j(N[Q],Lt[Q],ie):N[Q];y?(L.copy(b.normals[0]).multiplyScalar(at.x),w.copy(b.binormals[0]).multiplyScalar(at.y),_.copy(C[0]).add(L).add(w),yt(_.x,_.y,_.z)):yt(at.x,at.y,0)}for(let Q=1;Q<=h;Q++)for(let at=0;at<J;at++){let ct=u?j(N[at],Lt[at],ie):N[at];y?(L.copy(b.normals[Q]).multiplyScalar(ct.x),w.copy(b.binormals[Q]).multiplyScalar(ct.y),_.copy(C[Q]).add(L).add(w),yt(_.x,_.y,_.z)):yt(ct.x,ct.y,d/h*Q)}for(let Q=m-1;Q>=0;Q--){let at=Q/m,ct=f*Math.cos(at*Math.PI/2),dt=g*Math.sin(at*Math.PI/2)+v;for(let xt=0,Ft=G.length;xt<Ft;xt++){let Ht=j(G[xt],Y[xt],dt);yt(Ht.x,Ht.y,d+ct)}for(let xt=0,Ft=D.length;xt<Ft;xt++){let Ht=D[xt];lt=it[xt];for(let Z=0,B=Ht.length;Z<B;Z++){let P=j(Ht[Z],lt[Z],dt);y?yt(P.x,P.y+C[h-1].y,C[h-1].x+ct):yt(P.x,P.y,d+ct)}}}se(),et();function se(){let Q=s.length/3;if(u){let at=0,ct=J*at;for(let dt=0;dt<ae;dt++){let xt=Dt[dt];Ut(xt[2]+ct,xt[1]+ct,xt[0]+ct)}at=h+m*2,ct=J*at;for(let dt=0;dt<ae;dt++){let xt=Dt[dt];Ut(xt[0]+ct,xt[1]+ct,xt[2]+ct)}}else{for(let at=0;at<ae;at++){let ct=Dt[at];Ut(ct[2],ct[1],ct[0])}for(let at=0;at<ae;at++){let ct=Dt[at];Ut(ct[0]+J*h,ct[1]+J*h,ct[2]+J*h)}}n.addGroup(Q,s.length/3-Q,0)}function et(){let Q=s.length/3,at=0;rt(G,at),at+=G.length;for(let ct=0,dt=D.length;ct<dt;ct++){let xt=D[ct];rt(xt,at),at+=xt.length}n.addGroup(Q,s.length/3-Q,1)}function rt(Q,at){let ct=Q.length;for(;--ct>=0;){let dt=ct,xt=ct-1;xt<0&&(xt=Q.length-1);for(let Ft=0,Ht=h+m*2;Ft<Ht;Ft++){let Z=J*Ft,B=J*(Ft+1),P=at+dt+Z,At=at+xt+Z,vt=at+xt+B,E=at+dt+B;Rt(P,At,vt,E)}}}function yt(Q,at,ct){l.push(Q),l.push(at),l.push(ct)}function Ut(Q,at,ct){Bt(Q),Bt(at),Bt(ct);let dt=s.length/3,xt=M.generateTopUV(n,s,dt-3,dt-2,dt-1);he(xt[0]),he(xt[1]),he(xt[2])}function Rt(Q,at,ct,dt){Bt(Q),Bt(at),Bt(dt),Bt(at),Bt(ct),Bt(dt);let xt=s.length/3,Ft=M.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);he(Ft[0]),he(Ft[1]),he(Ft[3]),he(Ft[1]),he(Ft[2]),he(Ft[3])}function Bt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function he(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new mc[s.type]().fromJSON(s)),new i(n,t.options)}},yp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,a),new gt(o,l),new gt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-d),new gt(u,1-g),new gt(v,1-p)]:[new gt(o,1-l),new gt(h,1-d),new gt(f,1-g),new gt(m,1-p)]}};function vp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Br=class i extends no{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ni=class i extends Ae{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ue(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new R,u=new gt,f=new R,g=new R,v=new R,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=e;M++){let C=n+M*h*s,y=Math.sin(C),b=Math.cos(C);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*y,d.y=t[w].y,d.z=t[w].x*b,a.push(d.x,d.y,d.z),u.x=M/e,u.y=w/(t.length-1),o.push(u.x,u.y);let L=l[3*w+0]*y,_=l[3*w+1],A=l[3*w+0]*b;c.push(L,_,A)}}for(let M=0;M<e;M++)for(let C=0;C<t.length-1;C++){let y=C+M*t.length,b=y,w=y+t.length,L=y+t.length+1,_=y+1;r.push(b,w,_),r.push(L,_,w)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var qe=class i extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let C=0;C<c;C++){let y=C*d-r;g.push(y,-M,0),v.push(0,0,1),m.push(C/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let C=M+c*p,y=M+c*(p+1),b=M+1+c*(p+1),w=M+1+c*p;f.push(C,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Mn=class i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],C=p/n,y=a+C*o,b=t*Math.cos(y),w=Math.sqrt(t*t-b*b),L=0;p===0&&a===0?L=.5/e:p===n&&l===Math.PI&&(L=-.5/e);for(let _=0;_<=e;_++){let A=_/e,N=s+A*r;d.x=-w*Math.cos(N),d.y=b,d.z=w*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+L,1-C),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let C=h[p][M+1],y=h[p][M],b=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(C,y,w),(p!==n-1||l<Math.PI)&&f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gs=class i extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,f=new R,g=new R;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,C=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(p,M,y),l.push(M,C,y)}this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(tu(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(tu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=ls(i[e]);for(let s in n)t[s]=n[s]}return t}function tu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Ku={clone:ls,merge:un},Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},co=class extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fe=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var zr=class extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Eo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ho=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uo=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ts(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function oc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fo=class extends Di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dc:r=t,o=2*e-n;break;case fc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:a=t,l=2*n-e;break;case fc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,C=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+M*a[c+b]+C*a[l+b]+y*a[d+b];return r}},po=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},mo=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},go=class extends Di{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*u+g*2,M=d[p],C=d[p+1],y=t*u+g*2,b=h[y],w=h[y+1],L=Tp(n,e,M,b,s);r[g]=ju(L,v,C,w,m)}return r}};function ju(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Tp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ju(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=wp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),oc(t.settings)&&(n.settings={inTangents:Ts(t.settings.inTangents,Array),outTangents:Ts(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new go(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _r:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break;case hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;oc(this.settings)&&(eu(this.settings.inTangents,t),eu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Cf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ba,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,oc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function eu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Za;var Ui=class extends Rn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=_r;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="color";var _o=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};_o.prototype.ValueTypeName="number";var yo=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ge.slerpFlat(r,0,a,c-o,a,c,l);return r}},kr=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new yo(this.times,this.values,this.getValueSize(),t)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=_r;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};vo.prototype.ValueTypeName="vector";var Mo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qu=new Mo,So=class{constructor(t){this.manager=t!==void 0?t:Qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};So.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vr=class extends Hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lc=new de,nu=new R,iu=new R,Gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(nu),iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Is||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ua=new R,Fa=new Ge,ti=new R,Hr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ua,Fa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ua,Fa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new R,su=new gt,ru=new gt,rn=class extends Hr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,su,ru),e.subVectors(ru,su)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yc=class extends Gr{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Wr=class extends Hs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ws=class extends Hr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vc=class extends Gr{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new vc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Oa,bo=class{static getContext(){return Oa===void 0&&(Oa=new(window.AudioContext||window.webkitAudioContext)),Oa}static setContext(t){Oa=t}};var As=-90,Es=1,wo=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(As,Es,t,e);s.layers=this.layers,this.add(s);let r=new rn(As,Es,t,e);r.layers=this.layers,this.add(r);let a=new rn(As,Es,t,e);a.layers=this.layers,this.add(a);let o=new rn(As,Es,t,e);o.layers=this.layers,this.add(o);let l=new rn(As,Es,t,e);l.layers=this.layers,this.add(l);let c=new rn(As,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},To=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ao=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ap.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ap(){this._document.hidden===!1&&this.reset()}var Ji=new R,cc=new Ge,Ep=new R,Ki=new R,ji=new R,Xr=class extends ze{constructor(){super(),this.type="AudioListener",this.context=bo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Ao}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ji,cc,Ep),Ki.set(0,0,-1).applyQuaternion(cc),ji.set(0,1,0).applyQuaternion(cc),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ji.x,n),e.positionY.linearRampToValueAtTime(Ji.y,n),e.positionZ.linearRampToValueAtTime(Ji.z,n),e.forwardX.linearRampToValueAtTime(Ki.x,n),e.forwardY.linearRampToValueAtTime(Ki.y,n),e.forwardZ.linearRampToValueAtTime(Ki.z,n),e.upX.linearRampToValueAtTime(ji.x,n),e.upY.linearRampToValueAtTime(ji.y,n),e.upZ.linearRampToValueAtTime(ji.z,n)}else e.setPosition(Ji.x,Ji.y,Ji.z),e.setOrientation(Ki.x,Ki.y,Ki.z,ji.x,ji.y,ji.z)}};var qc="\\[\\]\\.:\\/",Cp=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",Rp="[^"+qc.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",Yc),Pp=/(WCOD+)?/.source.replace("WCOD",Rp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),Dp=new RegExp("^"+Ip+Pp+Lp+Np+"$"),Up=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){let e=Dp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Up.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Mc;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);var au=new de,qr=class{constructor(t,e,n=0,s=1/0){this.ray=new ns(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,n=[]){return Sc(t,this,n,e),n.sort(ou),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sc(t[s],this,n,e);return n.sort(ou),n}};function ou(i,t){return i.distance-t.distance}function Sc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Sc(r[a],t,e,!0)}}var bc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Zc(i,t,e,n){let s=Fp(n);switch(e){case kc:return i*t;case Do:return i*t/s.components*s.byteLength;case Uo:return i*t/s.components*s.byteLength;case Gi:return i*t*2/s.components*s.byteLength;case Fo:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case Oo:return i*t*4/s.components*s.byteLength;case Jr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:case Vo:return Math.max(i,16)*Math.max(t,8)/4;case Bo:case ko:return Math.max(i,8)*Math.max(t,8)/2;case Go:case Ho:case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:case ta:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ll:case cl:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fp(i){switch(i){case Sn:case Fc:return{byteLength:1,components:1};case Ys:case Oc:case Zn:return{byteLength:2,components:1};case Lo:case No:return{byteLength:2,components:4};case Yn:case Po:case Fn:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Md(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wp=`#ifdef USE_ALPHAHASH
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
}`,ce={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:$p,aomap_fragment:Jp,aomap_pars_fragment:Kp,batching_pars_vertex:jp,batching_vertex:Qp,begin_vertex:tm,beginnormal_vertex:em,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:xm,emissivemap_fragment:_m,emissivemap_pars_fragment:ym,colorspace_fragment:vm,colorspace_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:bm,envmap_pars_fragment:wm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:Am,fog_vertex:Em,fog_pars_vertex:Cm,fog_fragment:Rm,fog_pars_fragment:Im,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Hm,lights_fragment_maps:Wm,lights_fragment_end:Xm,lightprobes_pars_fragment:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Jm,map_fragment:Km,map_pars_fragment:jm,map_particle_fragment:Qm,map_particle_pars_fragment:t0,metalnessmap_fragment:e0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:x0,opaque_fragment:_0,packing:y0,premultiplied_alpha_fragment:v0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:E0,shadowmap_vertex:C0,shadowmask_pars_fragment:R0,skinbase_vertex:I0,skinning_pars_vertex:P0,skinning_vertex:L0,skinnormal_vertex:N0,specularmap_fragment:D0,specularmap_pars_fragment:U0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:k0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:H0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:Z0,cube_frag:$0,depth_vert:J0,depth_frag:K0,distance_vert:j0,distance_frag:Q0,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:xg,points_vert:_g,points_frag:yg,shadow_vert:vg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:bg},It={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},li={basic:{uniforms:un([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:un([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:un([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:un([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:un([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ee(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:un([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:un([It.points,It.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:un([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:un([It.common,It.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:un([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:un([It.sprite,It.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:un([It.common,It.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:un([It.lights,It.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};li.physical={uniforms:un([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var gl={r:0,b:0,g:0},wg=new de,Sd=new ne;Sd.set(-1,0,0,0,1,0,0,0,1);function Tg(i,t,e,n,s,r){let a=new ee(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let y=M.backgroundBlurriness>0;C=t.get(C,y)}return C}function g(M){let C=!1,y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===Zr)?(c===void 0&&(c=new bt(new _n(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:ls(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sd),c.material.toneMapped=me.getTransfer(y.colorSpace)!==Se,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new bt(new qe(2,2),new en({name:"BackgroundMaterial",uniforms:ls(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=me.getTransfer(y.colorSpace)!==Se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,C){M.getRGB(gl,Xc(i)),e.buffers.color.setClear(gl.r,gl.g,gl.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,O,H,U,G){let j=!1,J=d(D,U,H,O);r!==J&&(r=J,c(r.object)),j=f(D,U,H,G),j&&g(D,U,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(D,O,H,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,O,H,U){let G=U.wireframe===!0,j=n[O.id];j===void 0&&(j={},n[O.id]=j);let J=D.isInstancedMesh===!0?D.id:0,ut=j[J];ut===void 0&&(ut={},j[J]=ut);let Y=ut[H.id];Y===void 0&&(Y={},ut[H.id]=Y);let it=Y[G];return it===void 0&&(it=u(l()),Y[G]=it),it}function u(D){let O=[],H=[],U=[];for(let G=0;G<e;G++)O[G]=0,H[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:U,object:D,attributes:{},index:null}}function f(D,O,H,U){let G=r.attributes,j=O.attributes,J=0,ut=H.getAttributes();for(let Y in ut)if(ut[Y].location>=0){let lt=G[Y],Lt=j[Y];if(Lt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Lt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Lt=D.instanceColor)),lt===void 0||lt.attribute!==Lt||Lt&&lt.data!==Lt.data)return!0;J++}return r.attributesNum!==J||r.index!==U}function g(D,O,H,U){let G={},j=O.attributes,J=0,ut=H.getAttributes();for(let Y in ut)if(ut[Y].location>=0){let lt=j[Y];lt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor));let Lt={};Lt.attribute=lt,lt&&lt.data&&(Lt.data=lt.data),G[Y]=Lt,J++}r.attributes=G,r.attributesNum=J,r.index=U}function v(){let D=r.newAttributes;for(let O=0,H=D.length;O<H;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){let H=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;H[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),G[D]!==O&&(i.vertexAttribDivisor(D,O),G[D]=O)}function M(){let D=r.newAttributes,O=r.enabledAttributes;for(let H=0,U=O.length;H<U;H++)O[H]!==D[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function C(D,O,H,U,G,j,J){J===!0?i.vertexAttribIPointer(D,O,H,G,j):i.vertexAttribPointer(D,O,H,U,G,j)}function y(D,O,H,U){v();let G=U.attributes,j=H.getAttributes(),J=O.defaultAttributeValues;for(let ut in j){let Y=j[ut];if(Y.location>=0){let it=G[ut];if(it===void 0&&(ut==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),ut==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){let lt=it.normalized,Lt=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;let ae=Dt.buffer,ie=Dt.type,se=Dt.bytesPerElement,et=ie===i.INT||ie===i.UNSIGNED_INT||it.gpuType===Po;if(it.isInterleavedBufferAttribute){let rt=it.data,yt=rt.stride,Ut=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<Y.locationSize;Rt++)p(Y.location+Rt,rt.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)m(Y.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Rt=0;Rt<Y.locationSize;Rt++)C(Y.location+Rt,Lt/Y.locationSize,ie,lt,yt*se,(Ut+Lt/Y.locationSize*Rt)*se,et)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<Y.locationSize;rt++)p(Y.location+rt,it.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let rt=0;rt<Y.locationSize;rt++)C(Y.location+rt,Lt/Y.locationSize,ie,lt,Lt*se,Lt/Y.locationSize*rt*se,et)}}else if(J!==void 0){let lt=J[ut];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(Y.location,lt);break;case 3:i.vertexAttrib3fv(Y.location,lt);break;case 4:i.vertexAttrib4fv(Y.location,lt);break;default:i.vertexAttrib1fv(Y.location,lt)}}}}M()}function b(){A();for(let D in n){let O=n[D];for(let H in O){let U=O[H];for(let G in U){let j=U[G];for(let J in j)h(j[J].object),delete j[J];delete U[G]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let H in O){let U=O[H];for(let G in U){let j=U[G];for(let J in j)h(j[J].object),delete j[J];delete U[G]}}delete n[D.id]}function L(D){for(let O in n){let H=n[O];for(let U in H){let G=H[U];if(G[D.id]===void 0)continue;let j=G[D.id];for(let J in j)h(j[J].object),delete j[J];delete G[D.id]}}}function _(D){for(let O in n){let H=n[O],U=D.isInstancedMesh===!0?D.id:0,G=H[U];if(G!==void 0){for(let j in G){let J=G[j];for(let ut in J)h(J[ut].object),delete J[ut];delete G[j]}delete H[U],Object.keys(H).length===0&&delete n[O]}}}function A(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Eg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==On&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let _=L===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Sn&&L!==Fn&&!_&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:y,maxSamples:b,samples:w}}function Rg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Gn,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,C=M*4,y=p.clippingState||null;l.value=y,y=h(g,u,C,f);for(let b=0;b!==C;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,y=f;C!==v;++C,y+=4)a.copy(d[C]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ks=4,Ig=6,Pg=20,Lg=256,ia=new Ws,td=new ee,$c=null,Jc=0,Kc=0,jc=!1,Ng=new R,cs=new R,Qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ng}=r;$c=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($c,Jc,Kc),this._renderer.xr.enabled=jc,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$c=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Zn,format:On,colorSpace:yr,depthBuffer:!1},s=ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dg(r)),this._blurMaterial=Fg(r,t,e),this._ggxMaterial=Ug(r,t,e)}return s}_compileMaterial(t){let e=new bt(new Ae,t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s,r){let l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(td),d.toneMapping=qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new _n,new hn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(td),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let b=this._cubeSize;Js(s,y*b,C>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zi||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Ks?n-g+Ks:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Js(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,ia),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Js(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,ia)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ks?s-this._lodMax+Ks:0),u=4*(this._cubeSize-h);Js(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ia)}};function Dg(i){let t=[],e=[],n=i,s=i-Ks+1+Ig;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,C=p>2?0:-1,y=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];g.set(y,f*u*p);for(let b=0;b<u;b++){let w=h[b*2]*2-1,L=h[b*2+1]*2-1;p===0?cs.set(1,L,w):p===1?cs.set(-w,1,-L):p===2?cs.set(-w,L,1):p===3?cs.set(-1,L,-w):p===4?cs.set(-w,-1,L):cs.set(w,L,-1),cs.toArray(v,(p*u+b)*f)}}let m=new Ae;m.setAttribute("position",new gn(g,f)),m.setAttribute("outputDirection",new gn(v,f)),e.push(new bt(m,null)),n>Ks&&n--}return{lodMeshes:e,sizeLods:t}}function ed(i,t,e){let n=new vn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ug(i,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Fg(i,t,e){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:Pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function nd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function id(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _l=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ai});r.uniforms.tEquirect.value=e;let a=new bt(s,r),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=an),new wo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Og(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Co||f===Ro)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new _l(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Co||f===Ro,v=f===zi||f===os;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Qs(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Qs(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Co?u.mapping=zi:f===Ro&&(u.mapping=os),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Bg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ts("WebGLRenderer: "+n+" extension not supported."),s}}}function zg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let C=0,y=M.length;C<y;C+=3){let b=M[C+0],w=M[C+1],L=M[C+2];u.push(b,w,w,L,L,b)}}else{let M=g.array;v=g.version;for(let C=0,y=M.length/3-1;C<y;C+=3){let b=C+0,w=C+1,L=C+2;u.push(b,w,w,L,L,b)}}let m=new(g.count>=65535?wr:br)(u,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function kg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,t,e){let n=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),v===!0&&(C=3);let y=o.attributes.position.count*C,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*b*4*d),L=new Sr(w,y,b,d);L.type=Fn,L.needsUpdate=!0;let _=C*4;for(let N=0;N<d;N++){let D=m[N],O=p[N],H=M[N],U=y*b*4*N;for(let G=0;G<D.count;G++){let j=G*_;f===!0&&(s.fromBufferAttribute(D,G),w[U+j+0]=s.x,w[U+j+1]=s.y,w[U+j+2]=s.z,w[U+j+3]=0),g===!0&&(s.fromBufferAttribute(O,G),w[U+j+4]=s.x,w[U+j+5]=s.y,w[U+j+6]=s.z,w[U+j+7]=0),v===!0&&(s.fromBufferAttribute(H,G),w[U+j+8]=s.x,w[U+j+9]=s.y,w[U+j+10]=s.z,w[U+j+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new gt(y,b)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Wg={[Rc]:"LINEAR_TONE_MAPPING",[Ic]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[Yr]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Dc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function Xg(i,t,e,n,s,r){let a=new vn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ae;c.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new re([0,2,0,0,2,0],2));let h=new co({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new bt(c,h),u=new Ws(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,M=[],C=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let w=0;w<M.length;w++){let L=M[w];L.setSize&&L.setSize(y,b)}},this.setEffects=function(y){M=y,C=M.length>0&&M[0].isRenderPass===!0;let b=a.width,w=a.height;M.length>0&&o===null&&(o=new vn(b,w,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new vn(b,w,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<M.length;L++){let _=M[L];_.setSize&&_.setSize(b,w)}},this.begin=function(y,b){if(v||y.toneMapping===qn&&M.length===0)return!1;if(p=b,b!==null){let w=b.width,L=b.height;(a.width!==w||a.height!==L)&&this.setSize(w,L)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=qn,!0},this.hasRenderPass=function(){return C},this.end=function(y,b){y.toneMapping=m,v=!0;let w=a,L=o;for(let _=0;_<M.length;_++){let A=M[_];A.enabled!==!1&&(A.render(y,L,w,b),A.needsSwap!==!1&&(w=L,L=L===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},me.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");let _=Wg[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var bd=new xn,eh=new Li(1,1),wd=new Sr,Td=new ja,Ad=new Er,sd=[],rd=[],ad=new Float32Array(16),od=new Float32Array(9),ld=new Float32Array(4);function tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ml(i,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;ld.set(n),i.uniformMatrix2fv(this.addr,!1,ld),$e(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),$e(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;ad.set(n),i.uniformMatrix4fv(this.addr,!1,ad),$e(e,n)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=e.isReversedDepthBuffer()?ml:pl,r=eh):r=bd,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Td,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ad,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wd,s)}function ux(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return $g;case 35674:return Jg;case 35675:return Kg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(i,t){i.uniform1fv(this.addr,t)}function fx(i,t){let e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function px(i,t){let e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function mx(i,t){let e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function gx(i,t){let e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xx(i,t){let e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _x(i,t){let e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yx(i,t){i.uniform1iv(this.addr,t)}function vx(i,t){i.uniform2iv(this.addr,t)}function Mx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function bx(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Ex(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=eh:a=bd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Td,r[a])}function Rx(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ad,r[a])}function Ix(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wd,r[a])}function Px(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return _x;case 5124:case 35670:return yx;case 35667:case 35671:return vx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Ix}}var nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}},ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}},sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function cd(i,t){i.seq.push(t),i.map[t.id]=t}function Lx(i,t,e){let n=i.name,s=n.length;for(Qc.lastIndex=0;;){let r=Qc.exec(n),a=Qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cd(e,c===void 0?new nh(o,i,t):new ih(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new sh(o),cd(e,d)),e=d}}}var js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Lx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function hd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Nx=37297,Dx=0;function Ux(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ud=new ne;function Fx(i){me._getMatrix(ud,me.workingColorSpace,i);let t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ux(i.getShaderSource(t),o)}else return r}function Ox(i,t){let e=Fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Bx={[Rc]:"Linear",[Ic]:"Reinhard",[Pc]:"Cineon",[Yr]:"ACESFilmic",[Nc]:"AgX",[Dc]:"Neutral",[Lc]:"Custom"};function zx(i,t){let e=Bx[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xl=new R;function kx(){me.getLuminanceCoefficients(xl);let i=xl.x.toFixed(4),t=xl.y.toFixed(4),e=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function Gx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ra(i){return i!==""}function fd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(i){return i.replace(Wx,qx)}var Xx=new Map;function qx(i,t){let e=ce[t];if(e===void 0){let n=Xx.get(t);if(n!==void 0)e=ce[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rh(e)}var Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(i){return i.replace(Yx,Zx)}function Zx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var $x={[rs]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function Jx(i){return $x[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kx={[zi]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function jx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qx={[os]:"ENVMAP_MODE_REFRACTION"};function t_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var e_={[Eo]:"ENVMAP_BLENDING_MULTIPLY",[Ru]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function n_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":e_[i.combine]||"ENVMAP_BLENDING_NONE"}function i_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function s_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Jx(e),c=jx(e),h=t_(e),d=n_(e),u=i_(e),f=Vx(e),g=Gx(r),v=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(m=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?ce.tonemapping_pars_fragment:"",e.toneMapping!==qn?zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Ox("linearToOutputTexel",e.outputColorSpace),kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),a=rh(a),a=fd(a,e),a=pd(a,e),o=rh(o),o=fd(o,e),o=pd(o,e),a=md(a),o=md(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=M+m+a,y=M+p+o,b=hd(s,s.VERTEX_SHADER,C),w=hd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,b),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(w)||"",G=O.trim(),j=H.trim(),J=U.trim(),ut=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ut=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,w);else{let it=dd(s,b,"vertex"),lt=dd(s,w,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+it+`
`+lt)}else G!==""?Kt("WebGLProgram: Program Info Log:",G):(j===""||J==="")&&(Y=!1);Y&&(D.diagnostics={runnable:ut,programLog:G,vertexShader:{log:j,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(w),_=new js(s,v),A=Hx(s,v)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,Nx)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=w,this}var r_=0,ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oh(t),e.set(t,n)),n}},oh=class{constructor(t){this.id=r_++,this.code=t,this.usedTimes=0}};function a_(i){return i===Gi||i===ta||i===ea}function o_(i,t,e,n,s,r){let a=new Ns,o=new ah,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,N,D,O,H){let U=D.fog,G=O.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ut=t.get(_.envMap||j,J),Y=ut&&ut.mapping===Zr?ut.image.height:null,it=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Kt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Lt=lt!==void 0?lt.length:0,Dt=0;G.morphAttributes.position!==void 0&&(Dt=1),G.morphAttributes.normal!==void 0&&(Dt=2),G.morphAttributes.color!==void 0&&(Dt=3);let ae,ie,se,et;if(it){let we=li[it];ae=we.vertexShader,ie=we.fragmentShader}else{ae=_.vertexShader,ie=_.fragmentShader;let we=o.getVertexShaderStage(_),T=o.getFragmentShaderStage(_);o.update(_,we,T),se=we.id,et=T.id}let rt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,Rt=O.isBatchedMesh===!0,Bt=!!_.map,he=!!_.matcap,Q=!!ut,at=!!_.aoMap,ct=!!_.lightMap,dt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Ft=!!_.displacementMap,Ht=!!_.emissiveMap,Z=!!_.metalnessMap,B=!!_.roughnessMap,P=_.anisotropy>0,At=_.clearcoat>0,vt=_.dispersion>0,E=_.retroreflectivity>0,x=_.iridescence>0,k=_.sheen>0,W=_.transmission>0,tt=P&&!!_.anisotropyMap,ft=At&&!!_.clearcoatMap,pt=At&&!!_.clearcoatNormalMap,nt=At&&!!_.clearcoatRoughnessMap,st=x&&!!_.iridescenceMap,Mt=x&&!!_.iridescenceThicknessMap,Xt=k&&!!_.sheenColorMap,Tt=k&&!!_.sheenRoughnessMap,St=!!_.specularMap,Wt=!!_.specularColorMap,$t=!!_.specularIntensityMap,te=W&&!!_.transmissionMap,z=W&&!!_.thicknessMap,mt=!!_.gradientMap,ot=!!_.alphaMap,_t=_.alphaTest>0,Et=!!_.alphaHash,ht=!!_.extensions,Yt=qn;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Yt=i.toneMapping);let kt={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:ie,defines:_.defines,customVertexShaderID:se,customFragmentShaderID:et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:he,envMap:Q,envMapMode:Q&&ut.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:ct,bumpMap:dt,normalMap:xt,displacementMap:Ft,emissiveMap:Ht,normalMapObjectSpace:xt&&_.normalMapType===Nu,normalMapTangentSpace:xt&&_.normalMapType===na,packedNormalMap:xt&&_.normalMapType===na&&a_(_.normalMap.format),metalnessMap:Z,roughnessMap:B,anisotropy:P,anisotropyMap:tt,clearcoat:At,clearcoatMap:ft,clearcoatNormalMap:pt,clearcoatRoughnessMap:nt,dispersion:vt,retroreflection:E,iridescence:x,iridescenceMap:st,iridescenceThicknessMap:Mt,sheen:k,sheenColorMap:Xt,sheenRoughnessMap:Tt,specularMap:St,specularColorMap:Wt,specularIntensityMap:$t,transmission:W,transmissionMap:te,thicknessMap:z,gradientMap:mt,opaque:_.transparent===!1&&_.blending===Bi&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:_t,alphaHash:Et,combine:_.combine,mapUv:Bt&&g(_.map.channel),aoMapUv:at&&g(_.aoMap.channel),lightMapUv:ct&&g(_.lightMap.channel),bumpMapUv:dt&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:Ft&&g(_.displacementMap.channel),emissiveMapUv:Ht&&g(_.emissiveMap.channel),metalnessMapUv:Z&&g(_.metalnessMap.channel),roughnessMapUv:B&&g(_.roughnessMap.channel),anisotropyMapUv:tt&&g(_.anisotropyMap.channel),clearcoatMapUv:ft&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(_.sheenRoughnessMap.channel),specularMapUv:St&&g(_.specularMap.channel),specularColorMapUv:Wt&&g(_.specularColorMap.channel),specularIntensityMapUv:$t&&g(_.specularIntensityMap.channel),transmissionMapUv:te&&g(_.transmissionMap.channel),thicknessMapUv:z&&g(_.thicknessMap.channel),alphaMapUv:ot&&g(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xt||P),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Bt||ot),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Dt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&me.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&me.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===Ye,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&_.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)A.push(N),A.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(A,_),M(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){let A=f[_.type],N;if(A){let D=li[A];N=Ku.clone(D.uniforms)}else N=_.uniforms;return N}function y(_,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new s_(i,A,_,s),c.push(N),h.set(A,N)),N}function b(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function L(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:L}}function l_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function c_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _d(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function l(u,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);let C=o(u,f,g,v,m,p);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(u,f,g,v,m,p){let M=o(u,f,g,v,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||c_),n.length>1&&n.sort(f||xd),s.length>1&&s.sort(f||xd)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function h_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _d,i.set(n,[a])):s>=r.length?(a=new _d,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new ee};break;case"SpotLight":e={position:new R,direction:new R,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f_=0;function p_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m_(i){let t=new u_,e=d_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new de,a=new de;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,C=0,y=0,b=0,w=0,L=0,_=0,A=0,N=0;c.sort(p_);for(let O=0,H=c.length;O<H;O++){let U=c[O],G=U.color,j=U.intensity,J=U.distance,ut=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Gi?ut=U.shadow.map.texture:ut=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=G.r*j,d+=G.g*j,u+=G.b*j;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(U.sh.coefficients[Y],j);N++}else if(U.isSunLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,lt=e.get(U);lt.shadowIntensity=it.intensity,lt.shadowBias=it.bias,lt.shadowNormalBias=it.normalBias,lt.shadowRadius=it.radius,lt.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=lt,n.sunShadowMap[g]=ut;let Lt=it.getViewportCount();for(let Dt=0;Dt<Lt;Dt++)n.sunShadowMatrix[v+Dt]=it.getMatrix(Dt),n.sunShadowCascade[v+Dt]=it._cascadeData[Dt];v+=Lt,g++}n.sun[f]=Y,f++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,lt=e.get(U);lt.shadowIntensity=it.intensity,lt.shadowBias=it.bias,lt.shadowNormalBias=it.normalBias,lt.shadowRadius=it.radius,lt.shadowMapSize=it.mapSize,n.directionalShadow[m]=lt,n.directionalShadowMap[m]=ut,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=Y,m++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(G).multiplyScalar(j),Y.distance=J,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,n.spot[M]=Y;let it=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,it.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[M]=it.matrix,U.castShadow){let lt=e.get(U);lt.shadowIntensity=it.intensity,lt.shadowBias=it.bias,lt.shadowNormalBias=it.normalBias,lt.shadowRadius=it.radius,lt.shadowMapSize=it.mapSize,n.spotShadow[M]=lt,n.spotShadowMap[M]=ut,L++}M++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(G).multiplyScalar(j),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),n.rectArea[C]=Y,C++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let it=U.shadow,lt=e.get(U);lt.shadowIntensity=it.intensity,lt.shadowBias=it.bias,lt.shadowNormalBias=it.normalBias,lt.shadowRadius=it.radius,lt.shadowMapSize=it.mapSize,lt.shadowCameraNear=it.camera.near,lt.shadowCameraFar=it.camera.far,n.pointShadow[p]=lt,n.pointShadowMap[p]=ut,n.pointShadowMatrix[p]=U.shadow.matrix,w++}n.point[p]=Y,p++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(j),Y.groundColor.copy(U.groundColor).multiplyScalar(j),n.hemi[y]=Y,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==C||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==L||D.numSpotMaps!==_||D.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=C,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=C,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=L,D.numSpotMaps=_,D.numLightProbes=N,n.version=f_++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let M=0,C=c.length;M<C;M++){let y=c[M];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(y.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function yd(i){let t=new m_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function g_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yd(i),t.set(s,[o])):r>=a.length?(o=new yd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var x_=`void main() {
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
}`,y_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],v_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],vd=new de,sa=new R,th=new R;function M_(i,t,e){let n=new Fs,s=new gt,r=new gt,a=new De,o=new ho,l=new uo,c={},h=e.maxTextureSize,d={[Oi]:Ye,[Ye]:Oi,[Dn]:Dn},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:x_,fragmentShader:__}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ae;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new bt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let p=this.type;this.render=function(w,L,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===hu&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);let A=i.getRenderTarget(),N=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ai),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==this.type;H&&L.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=w.length;U<G;U++){let j=w[U],J=j.shadow;if(J===void 0){Kt("WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ut=J.getFrameExtents();s.multiply(ut),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,J.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Y,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===qs){if(j.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new vn(s.x,s.y,{format:Gi,type:Zn,minFilter:an,magFilter:an,generateMipmaps:!1}),J.map.texture.name=j.name+".shadowMap",J.map.depthTexture=new Li(s.x,s.y,Fn),J.map.depthTexture.name=j.name+".shadowMapDepth",J.map.depthTexture.format=ni,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn}else j.isPointLight?(J.map=new _l(s.x),J.map.depthTexture=new eo(s.x,Yn)):(J.map=new vn(s.x,s.y),J.map.depthTexture=new Li(s.x,s.y,Yn)),J.map.depthTexture.name=j.name+".shadowMap",J.map.depthTexture.format=ni,this.type===rs?(J.map.depthTexture.compareFunction=Y?ml:pl,J.map.depthTexture.minFilter=an,J.map.depthTexture.magFilter=an):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let it=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();j.isPointLight!==!0&&J.updateMatrices(j,_);for(let lt=0;lt<it;lt++){let Lt=J.getCamera(lt);if(j.isPointLight){let Dt=J.camera,ae=J.matrix,ie=j.distance||Dt.far;ie!==Dt.far&&(Dt.far=ie,Dt.updateProjectionMatrix()),sa.setFromMatrixPosition(j.matrixWorld),Dt.position.copy(sa),th.copy(Dt.position),th.add(y_[lt]),Dt.up.copy(v_[lt]),Dt.lookAt(th),Dt.updateMatrixWorld(),ae.makeTranslation(-sa.x,-sa.y,-sa.z),vd.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(vd,Dt.coordinateSystem,Dt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(J.map),i.clear());let Dt=J.getViewport(lt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),O.viewport(a)}n=J.getFrustum(lt),y(L,_,Lt,j,this.type)}J.isPointLightShadow!==!0&&this.type===qs&&M(J,_),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,N,D)};function M(w,L){let _=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new vn(s.x,s.y,{format:Gi,type:Zn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,_,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,_,f,v,null)}function C(w,L,_,A){let N=null,D=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)N=D;else if(N=_.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let O=N.uuid,H=L.uuid,U=c[O];U===void 0&&(U={},c[O]=U);let G=U[H];G===void 0&&(G=N.clone(),U[H]=G,L.addEventListener("dispose",b)),N=G}if(N.visible=L.visible,N.wireframe=L.wireframe,A===qs?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:d[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let O=i.properties.get(N);O.light=_}return N}function y(w,L,_,A,N){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===qs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let H=t.update(w),U=w.material;if(Array.isArray(U)){let G=H.groups;for(let j=0,J=G.length;j<J;j++){let ut=G[j],Y=U[ut.materialIndex];if(Y&&Y.visible){let it=C(w,Y,A,N);w.onBeforeShadow(i,w,L,_,H,it,ut),i.renderBufferDirect(_,null,H,it,w,ut),w.onAfterShadow(i,w,L,_,H,it,ut)}}}else if(U.visible){let G=C(w,U,A,N);w.onBeforeShadow(i,w,L,_,H,G,null),i.renderBufferDirect(_,null,H,G,w,null),w.onAfterShadow(i,w,L,_,H,G,null)}}let O=w.children;for(let H=0,U=O.length;H<U;H++)y(O[H],L,_,A,N)}function b(w){w.target.removeEventListener("dispose",b);for(let _ in c){let A=c[_],N=w.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function S_(i,t){function e(){let z=!1,mt=new De,ot=null,_t=new De(0,0,0,0);return{setMask:function(Et){ot!==Et&&!z&&(i.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){z=Et},setClear:function(Et,ht,Yt,kt,we){we===!0&&(Et*=kt,ht*=kt,Yt*=kt),mt.set(Et,ht,Yt,kt),_t.equals(mt)===!1&&(i.clearColor(Et,ht,Yt,kt),_t.copy(mt))},reset:function(){z=!1,ot=null,_t.set(-1,0,0,0)}}}function n(){let z=!1,mt=!1,ot=null,_t=null,Et=null;return{setReversed:function(ht){if(mt!==ht){let Yt=t.get("EXT_clip_control");ht?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),mt=ht;let kt=Et;Et=null,this.setClear(kt)}},getReversed:function(){return mt},setTest:function(ht){ht?rt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(ht){ot!==ht&&!z&&(i.depthMask(ht),ot=ht)},setFunc:function(ht){if(mt&&(ht=Xu[ht]),_t!==ht){switch(ht){case ka:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ht}},setLocked:function(ht){z=ht},setClear:function(ht){Et!==ht&&(Et=ht,mt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){z=!1,ot=null,_t=null,Et=null,mt=!1}}}function s(){let z=!1,mt=null,ot=null,_t=null,Et=null,ht=null,Yt=null,kt=null,we=null;return{setTest:function(T){z||(T?rt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(T){mt!==T&&!z&&(i.stencilMask(T),mt=T)},setFunc:function(T,V,$){(ot!==T||_t!==V||Et!==$)&&(i.stencilFunc(T,V,$),ot=T,_t=V,Et=$)},setOp:function(T,V,$){(ht!==T||Yt!==V||kt!==$)&&(i.stencilOp(T,V,$),ht=T,Yt=V,kt=$)},setLocked:function(T){z=T},setClear:function(T){we!==T&&(i.clearStencil(T),we=T)},reset:function(){z=!1,mt=null,ot=null,_t=null,Et=null,ht=null,Yt=null,kt=null,we=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,C=null,y=null,b=null,w=null,L=null,_=new ee(0,0,0),A=0,N=!1,D=null,O=null,H=null,U=null,G=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ut=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=ut>=1):Y.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=ut>=2);let it=null,lt={},Lt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),ae=new De().fromArray(Lt),ie=new De().fromArray(Dt);function se(z,mt,ot,_t){let Et=new Uint8Array(4),ht=i.createTexture();i.bindTexture(z,ht),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<ot;Yt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(mt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ht}let et={};et[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Rs),dt(!1),xt(wc),rt(i.CULL_FACE),at(ai);function rt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function yt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ut(z,mt){return u[z]!==mt?(i.bindFramebuffer(z,mt),u[z]=mt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Rt(z,mt){let ot=g,_t=!1;if(z){ot=f.get(mt),ot===void 0&&(ot=[],f.set(mt,ot));let Et=z.textures;if(ot.length!==Et.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Yt=Et.length;ht<Yt;ht++)ot[ht]=i.COLOR_ATTACHMENT0+ht;ot.length=Et.length,_t=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,_t=!0);_t&&i.drawBuffers(ot)}function Bt(z){return v!==z?(i.useProgram(z),v=z,!0):!1}let he={[as]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};he[pu]=i.MIN,he[mu]=i.MAX;let Q={[gu]:i.ZERO,[xu]:i.ONE,[_u]:i.SRC_COLOR,[Ec]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[vu]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Mu]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Eu]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function at(z,mt,ot,_t,Et,ht,Yt,kt,we,T){if(z===ai){m===!0&&(yt(i.BLEND),m=!1);return}if(m===!1&&(rt(i.BLEND),m=!0),z!==uu){if(z!==p||T!==N){if((M!==as||b!==as)&&(i.blendEquation(i.FUNC_ADD),M=as,b=as),T)switch(z){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",z);break}else switch(z){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tc:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",z);break}C=null,y=null,w=null,L=null,_.set(0,0,0),A=0,p=z,N=T}return}Et=Et||mt,ht=ht||ot,Yt=Yt||_t,(mt!==M||Et!==b)&&(i.blendEquationSeparate(he[mt],he[Et]),M=mt,b=Et),(ot!==C||_t!==y||ht!==w||Yt!==L)&&(i.blendFuncSeparate(Q[ot],Q[_t],Q[ht],Q[Yt]),C=ot,y=_t,w=ht,L=Yt),(kt.equals(_)===!1||we!==A)&&(i.blendColor(kt.r,kt.g,kt.b,we),_.copy(kt),A=we),p=z,N=!1}function ct(z,mt){z.side===Dn?yt(i.CULL_FACE):rt(i.CULL_FACE);let ot=z.side===Ye;mt&&(ot=!ot),dt(ot),z.blending===Bi&&z.transparent===!1?at(ai):at(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let _t=z.stencilWrite;o.setTest(_t),_t&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ht(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(z){D!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),D=z)}function xt(z){z!==lu?(rt(i.CULL_FACE),z!==O&&(z===wc?i.cullFace(i.BACK):z===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),O=z}function Ft(z){z!==H&&(J&&i.lineWidth(z),H=z)}function Ht(z,mt,ot){z?(rt(i.POLYGON_OFFSET_FILL),(U!==mt||G!==ot)&&(U=mt,G=ot,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,ot))):yt(i.POLYGON_OFFSET_FILL)}function Z(z){z?rt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function B(z){z===void 0&&(z=i.TEXTURE0+j-1),it!==z&&(i.activeTexture(z),it=z)}function P(z,mt,ot){ot===void 0&&(it===null?ot=i.TEXTURE0+j-1:ot=it);let _t=lt[ot];_t===void 0&&(_t={type:void 0,texture:void 0},lt[ot]=_t),(_t.type!==z||_t.texture!==mt)&&(it!==ot&&(i.activeTexture(ot),it=ot),i.bindTexture(z,mt||et[z]),_t.type=z,_t.texture=mt)}function At(){let z=lt[it];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function vt(){try{i.compressedTexImage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function x(){try{i.texSubImage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function k(){try{i.texSubImage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function ft(){try{i.texStorage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function pt(){try{i.texStorage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function nt(){try{i.texImage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function st(){try{i.texImage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function Mt(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function Xt(z,mt){d[z]!==mt&&(i.pixelStorei(z,mt),d[z]=mt)}function Tt(z){ae.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ae.copy(z))}function St(z){ie.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ie.copy(z))}function Wt(z,mt){let ot=c.get(mt);ot===void 0&&(ot=new WeakMap,c.set(mt,ot));let _t=ot.get(z);_t===void 0&&(_t=i.getUniformBlockIndex(mt,z.name),ot.set(z,_t))}function $t(z,mt){let _t=c.get(mt).get(z);l.get(mt)!==_t&&(i.uniformBlockBinding(mt,_t,z.__bindingPointIndex),l.set(mt,_t))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,lt={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,C=null,y=null,b=null,w=null,L=null,_=new ee(0,0,0),A=0,N=!1,D=null,O=null,H=null,U=null,G=null,ae.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:yt,bindFramebuffer:Ut,drawBuffers:Rt,useProgram:Bt,setBlending:at,setMaterial:ct,setFlipSided:dt,setCullFace:xt,setLineWidth:Ft,setPolygonOffset:Ht,setScissorTest:Z,activeTexture:B,bindTexture:P,unbindTexture:At,compressedTexImage2D:vt,compressedTexImage3D:E,texImage2D:nt,texImage3D:st,pixelStorei:Xt,getParameter:Mt,updateUBOMapping:Wt,uniformBlockBinding:$t,texStorage2D:ft,texStorage3D:pt,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:tt,scissor:Tt,viewport:St,reset:te}}function b_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,x){return g?new OffscreenCanvas(E,x):Mr("canvas")}function m(E,x,k){let W=1,tt=vt(E);if((tt.width>k||tt.height>k)&&(W=k/Math.max(tt.width,tt.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ft=Math.floor(W*tt.width),pt=Math.floor(W*tt.height);u===void 0&&(u=v(ft,pt));let nt=x?v(ft,pt):u;return nt.width=ft,nt.height=pt,nt.getContext("2d").drawImage(E,0,0,ft,pt),Kt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ft+"x"+pt+")."),nt}else return"data"in E&&Kt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,x,k,W,tt,ft=!1){if(E!==null){if(i[E]!==void 0)return i[E];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pt;W&&(pt=t.get("EXT_texture_norm16"),pt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=x;if(x===i.RED&&(k===i.FLOAT&&(nt=i.R32F),k===i.HALF_FLOAT&&(nt=i.R16F),k===i.UNSIGNED_BYTE&&(nt=i.R8),k===i.UNSIGNED_SHORT&&pt&&(nt=pt.R16_EXT),k===i.SHORT&&pt&&(nt=pt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(nt=i.R8UI),k===i.UNSIGNED_SHORT&&(nt=i.R16UI),k===i.UNSIGNED_INT&&(nt=i.R32UI),k===i.BYTE&&(nt=i.R8I),k===i.SHORT&&(nt=i.R16I),k===i.INT&&(nt=i.R32I)),x===i.RG&&(k===i.FLOAT&&(nt=i.RG32F),k===i.HALF_FLOAT&&(nt=i.RG16F),k===i.UNSIGNED_BYTE&&(nt=i.RG8),k===i.UNSIGNED_SHORT&&pt&&(nt=pt.RG16_EXT),k===i.SHORT&&pt&&(nt=pt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(nt=i.RG8UI),k===i.UNSIGNED_SHORT&&(nt=i.RG16UI),k===i.UNSIGNED_INT&&(nt=i.RG32UI),k===i.BYTE&&(nt=i.RG8I),k===i.SHORT&&(nt=i.RG16I),k===i.INT&&(nt=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),k===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),k===i.UNSIGNED_INT&&(nt=i.RGB32UI),k===i.BYTE&&(nt=i.RGB8I),k===i.SHORT&&(nt=i.RGB16I),k===i.INT&&(nt=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),k===i.UNSIGNED_INT&&(nt=i.RGBA32UI),k===i.BYTE&&(nt=i.RGBA8I),k===i.SHORT&&(nt=i.RGBA16I),k===i.INT&&(nt=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_SHORT&&pt&&(nt=pt.RGB16_EXT),k===i.SHORT&&pt&&(nt=pt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),x===i.RGBA){let st=ft?vr:me.getTransfer(tt);k===i.FLOAT&&(nt=i.RGBA32F),k===i.HALF_FLOAT&&(nt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(nt=st===Se?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&pt&&(nt=pt.RGBA16_EXT),k===i.SHORT&&pt&&(nt=pt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(E,x){let k;return E?x===null||x===Yn||x===Zs?k=i.DEPTH24_STENCIL8:x===Fn?k=i.DEPTH32F_STENCIL8:x===Ys&&(k=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yn||x===Zs?k=i.DEPTH_COMPONENT24:x===Fn?k=i.DEPTH_COMPONENT32F:x===Ys&&(k=i.DEPTH_COMPONENT16),k}function w(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==tn&&E.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function L(E){let x=E.target;x.removeEventListener("dispose",L),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(E){let x=E.target;x.removeEventListener("dispose",_),D(x)}function A(E){let x=n.get(E);if(x.__webglInit===void 0)return;let k=E.source,W=f.get(k);if(W){let tt=W[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&N(E),Object.keys(W).length===0&&f.delete(k)}n.remove(E)}function N(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let k=E.source,W=f.get(k);delete W[x.__cacheKey],a.memory.textures--}function D(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let tt=0;tt<x.__webglFramebuffer[W].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[W][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=E.textures;for(let W=0,tt=k.length;W<tt;W++){let ft=n.get(k[W]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(E)}let O=0;function H(){O=0}function U(){return O}function G(E){O=E}function j(){let E=O;return E>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function J(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function ut(E,x){let k=n.get(E);if(E.isVideoTexture&&P(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let W=E.image;if(W===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(k,E,x);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function Y(E,x){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){yt(k,E,x);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function it(E,x){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){yt(k,E,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function lt(E,x){let k=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){Ut(k,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let Lt={[Pi]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},Dt={[tn]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Io]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},ae={[Uu]:i.NEVER,[ku]:i.ALWAYS,[Fu]:i.LESS,[pl]:i.LEQUAL,[Ou]:i.EQUAL,[ml]:i.GEQUAL,[Bu]:i.GREATER,[zu]:i.NOTEQUAL};function ie(E,x){if(x.type===Fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===Io||x.magFilter===$r||x.magFilter===ki||x.minFilter===an||x.minFilter===Io||x.minFilter===$r||x.minFilter===ki)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Lt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Lt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Lt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Dt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Dt[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ae[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==$r&&x.minFilter!==ki||x.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(E,x){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",L));let W=x.source,tt=f.get(W);tt===void 0&&(tt={},f.set(W,tt));let ft=J(x);if(ft!==E.__cacheKey){tt[ft]===void 0&&(tt[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),tt[ft].usedTimes++;let pt=tt[E.__cacheKey];pt!==void 0&&(tt[E.__cacheKey].usedTimes--,pt.usedTimes===0&&N(x)),E.__cacheKey=ft,E.__webglTexture=tt[ft].texture}return k}function et(E,x,k){return Math.floor(Math.floor(E/k)/x)}function rt(E,x,k,W){let ft=E.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,W,x.data);else{ft.sort((Xt,Tt)=>Xt.start-Tt.start);let pt=0;for(let Xt=1;Xt<ft.length;Xt++){let Tt=ft[pt],St=ft[Xt],Wt=Tt.start+Tt.count,$t=et(St.start,x.width,4),te=et(Tt.start,x.width,4);St.start<=Wt+1&&$t===te&&et(St.start+St.count-1,x.width,4)===$t?Tt.count=Math.max(Tt.count,St.start+St.count-Tt.start):(++pt,ft[pt]=St)}ft.length=pt+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Xt=0,Tt=ft.length;Xt<Tt;Xt++){let St=ft[Xt],Wt=Math.floor(St.start/4),$t=Math.ceil(St.count/4),te=Wt%x.width,z=Math.floor(Wt/x.width),mt=$t,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,te,z,mt,ot,k,W,x.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function yt(E,x,k){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);let tt=se(E,x),ft=x.source;e.bindTexture(W,E.__webglTexture,i.TEXTURE0+k);let pt=n.get(ft);if(ft.version!==pt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ot=me.getPrimaries(me.workingColorSpace),_t=x.colorSpace===_i?null:me.getPrimaries(x.colorSpace),Et=x.colorSpace===_i||ot===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let st=m(x.image,!1,s.maxTextureSize);st=At(x,st);let Mt=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type),Tt=y(x.internalFormat,Mt,Xt,x.normalized,x.colorSpace,x.isVideoTexture);ie(W,x);let St,Wt=x.mipmaps,$t=x.isVideoTexture!==!0,te=pt.__version===void 0||tt===!0,z=ft.dataReady,mt=w(x,st);if(x.isDepthTexture)Tt=b(x.format===Vi,x.type),te&&($t?e.texStorage2D(i.TEXTURE_2D,1,Tt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Tt,st.width,st.height,0,Mt,Xt,null));else if(x.isDataTexture)if(Wt.length>0){$t&&te&&e.texStorage2D(i.TEXTURE_2D,mt,Tt,Wt[0].width,Wt[0].height);for(let ot=0,_t=Wt.length;ot<_t;ot++)St=Wt[ot],$t?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,St.width,St.height,Mt,Xt,St.data):e.texImage2D(i.TEXTURE_2D,ot,Tt,St.width,St.height,0,Mt,Xt,St.data);x.generateMipmaps=!1}else $t?(te&&e.texStorage2D(i.TEXTURE_2D,mt,Tt,st.width,st.height),z&&rt(x,st,Mt,Xt)):e.texImage2D(i.TEXTURE_2D,0,Tt,st.width,st.height,0,Mt,Xt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$t&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Tt,Wt[0].width,Wt[0].height,st.depth);for(let ot=0,_t=Wt.length;ot<_t;ot++)if(St=Wt[ot],x.format!==On)if(Mt!==null)if($t){if(z)if(x.layerUpdates.size>0){let Et=Zc(St.width,St.height,x.format,x.type);for(let ht of x.layerUpdates){let Yt=St.data.subarray(ht*Et/St.data.BYTES_PER_ELEMENT,(ht+1)*Et/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ht,St.width,St.height,1,Mt,Yt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,St.width,St.height,st.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Tt,St.width,St.height,st.depth,0,St.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,St.width,St.height,st.depth,Mt,Xt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Tt,St.width,St.height,st.depth,0,Mt,Xt,St.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{$t&&te&&e.texStorage2D(i.TEXTURE_2D,mt,Tt,Wt[0].width,Wt[0].height);for(let ot=0,_t=Wt.length;ot<_t;ot++)St=Wt[ot],x.format!==On?Mt!==null?$t?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Tt,St.width,St.height,0,St.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,St.width,St.height,Mt,Xt,St.data):e.texImage2D(i.TEXTURE_2D,ot,Tt,St.width,St.height,0,Mt,Xt,St.data)}else if(x.isDataArrayTexture)if($t){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Tt,st.width,st.height,st.depth),z)if(x.layerUpdates.size>0){let ot=Zc(st.width,st.height,x.format,x.type);for(let _t of x.layerUpdates){let Et=st.data.subarray(_t*ot/st.data.BYTES_PER_ELEMENT,(_t+1)*ot/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,st.width,st.height,1,Mt,Xt,Et)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,Xt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,st.width,st.height,st.depth,0,Mt,Xt,st.data);else if(x.isData3DTexture)$t?(te&&e.texStorage3D(i.TEXTURE_3D,mt,Tt,st.width,st.height,st.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,Xt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,st.width,st.height,st.depth,0,Mt,Xt,st.data);else if(x.isFramebufferTexture){if(te)if($t)e.texStorage2D(i.TEXTURE_2D,mt,Tt,st.width,st.height);else{let ot=st.width,_t=st.height;for(let Et=0;Et<mt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Tt,ot,_t,0,Mt,Xt,null),ot>>=1,_t>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),st.parentNode!==ot){ot.appendChild(st),d.add(x),ot.onpaint=_t=>{let Et=_t.changedElements;for(let ht of d)Et.includes(ht.image)&&(ht.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let Et=i.RGBA,ht=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ht,Yt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if($t&&te){let ot=vt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Tt,ot.width,ot.height)}for(let ot=0,_t=Wt.length;ot<_t;ot++)St=Wt[ot],$t?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Mt,Xt,St):e.texImage2D(i.TEXTURE_2D,ot,Tt,Mt,Xt,St);x.generateMipmaps=!1}else if($t){if(te){let ot=vt(st);e.texStorage2D(i.TEXTURE_2D,mt,Tt,ot.width,ot.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Xt,st)}else e.texImage2D(i.TEXTURE_2D,0,Tt,Mt,Xt,st);p(x)&&M(W),pt.__version=ft.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ut(E,x,k){if(x.image.length!==6)return;let W=se(E,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let ft=n.get(tt);if(tt.version!==ft.__version||W===!0){e.activeTexture(i.TEXTURE0+k);let pt=me.getPrimaries(me.workingColorSpace),nt=x.colorSpace===_i?null:me.getPrimaries(x.colorSpace),st=x.colorSpace===_i||pt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,Xt=x.image[0]&&x.image[0].isDataTexture,Tt=[];for(let ht=0;ht<6;ht++)!Mt&&!Xt?Tt[ht]=m(x.image[ht],!0,s.maxCubemapSize):Tt[ht]=Xt?x.image[ht].image:x.image[ht],Tt[ht]=At(x,Tt[ht]);let St=Tt[0],Wt=r.convert(x.format,x.colorSpace),$t=r.convert(x.type),te=y(x.internalFormat,Wt,$t,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,mt=ft.__version===void 0||W===!0,ot=tt.dataReady,_t=w(x,St);ie(i.TEXTURE_CUBE_MAP,x);let Et;if(Mt){z&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,te,St.width,St.height);for(let ht=0;ht<6;ht++){Et=Tt[ht].mipmaps;for(let Yt=0;Yt<Et.length;Yt++){let kt=Et[Yt];x.format!==On?Wt!==null?z?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,0,0,kt.width,kt.height,Wt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,te,kt.width,kt.height,0,kt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,0,0,kt.width,kt.height,Wt,$t,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,te,kt.width,kt.height,0,Wt,$t,kt.data)}}}else{if(Et=x.mipmaps,z&&mt){Et.length>0&&_t++;let ht=vt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,te,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Xt){z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Tt[ht].width,Tt[ht].height,Wt,$t,Tt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,te,Tt[ht].width,Tt[ht].height,0,Wt,$t,Tt[ht].data);for(let Yt=0;Yt<Et.length;Yt++){let we=Et[Yt].image[ht].image;z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,0,0,we.width,we.height,Wt,$t,we.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,te,we.width,we.height,0,Wt,$t,we.data)}}else{z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Wt,$t,Tt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,te,Wt,$t,Tt[ht]);for(let Yt=0;Yt<Et.length;Yt++){let kt=Et[Yt];z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,0,0,Wt,$t,kt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,te,Wt,$t,kt.image[ht])}}}p(x)&&M(i.TEXTURE_CUBE_MAP),ft.__version=tt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Rt(E,x,k,W,tt,ft){let pt=r.convert(k.format,k.colorSpace),nt=r.convert(k.type),st=y(k.internalFormat,pt,nt,k.normalized,k.colorSpace),Mt=n.get(x),Xt=n.get(k);if(Xt.__renderTarget=x,!Mt.__hasExternalTextures){let Tt=Math.max(1,x.width>>ft),St=Math.max(1,x.height>>ft);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ft,st,Tt,St,x.depth,0,pt,nt,null):e.texImage2D(tt,ft,st,Tt,St,0,pt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),B(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,tt,Xt.__webglTexture,0,Z(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,tt,Xt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(E,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let W=x.depthTexture,tt=W&&W.isDepthTexture?W.type:null,ft=b(x.stencilBuffer,tt),pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;B(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z(x),ft,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z(x),ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,E)}else{let W=x.textures;for(let tt=0;tt<W.length;tt++){let ft=W[tt],pt=r.convert(ft.format,ft.colorSpace),nt=r.convert(ft.type),st=y(ft.internalFormat,pt,nt,ft.normalized,ft.colorSpace);B(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z(x),st,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z(x),st,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,st,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(E,x,k){let W=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",L)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x.depthTexture);let Mt=r.convert(x.depthTexture.format),Xt=r.convert(x.depthTexture.type),Tt;x.depthTexture.format===ni?Tt=i.DEPTH_COMPONENT24:x.depthTexture.format===Vi&&(Tt=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Tt,x.width,x.height,0,Mt,Xt,null)}}else ut(x.depthTexture,0);let ft=tt.__webglTexture,pt=Z(x),nt=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,st=x.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ni)B(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,nt,ft,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,st,nt,ft,0);else if(x.depthTexture.format===Vi)B(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,nt,ft,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,st,nt,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(E){let x=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",tt)};W.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=W}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)he(x.__webglFramebuffer[W],E,W);else{let W=E.texture.mipmaps;W&&W.length>0?he(x.__webglFramebuffer[0],E,0):he(x.__webglFramebuffer,E,0)}else if(k){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=i.createRenderbuffer(),Bt(x.__webglDepthbuffer[W],E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ft)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Bt(x.__webglDepthbuffer,E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,x,k){let W=n.get(E);x!==void 0&&Rt(W.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Q(E)}function ct(E){let x=E.texture,k=n.get(E),W=n.get(x);E.addEventListener("dispose",_);let tt=E.textures,ft=E.isWebGLCubeRenderTarget===!0,pt=tt.length>1;if(pt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,a.memory.textures++),ft){k.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[nt]=[];for(let st=0;st<x.mipmaps.length;st++)k.__webglFramebuffer[nt][st]=i.createFramebuffer()}else k.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)k.__webglFramebuffer[nt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(pt)for(let nt=0,st=tt.length;nt<st;nt++){let Mt=n.get(tt[nt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&B(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let nt=0;nt<tt.length;nt++){let st=tt[nt];k.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[nt]);let Mt=r.convert(st.format,st.colorSpace),Xt=r.convert(st.type),Tt=y(st.internalFormat,Mt,Xt,st.normalized,st.colorSpace,E.isXRRenderTarget===!0),St=Z(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Tt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,k.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Rt(k.__webglFramebuffer[nt][st],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,st);else Rt(k.__webglFramebuffer[nt],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(x)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let nt=0,st=tt.length;nt<st;nt++){let Mt=tt[nt],Xt=n.get(Mt),Tt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Tt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Xt.__webglTexture),ie(Tt,Mt),Rt(k.__webglFramebuffer,E,Mt,i.COLOR_ATTACHMENT0+nt,Tt,0),p(Mt)&&M(Tt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(nt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,W.__webglTexture),ie(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Rt(k.__webglFramebuffer[st],E,x,i.COLOR_ATTACHMENT0,nt,st);else Rt(k.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,nt,0);p(x)&&M(nt),e.unbindTexture()}E.depthBuffer&&Q(E)}function dt(E){let x=E.textures;for(let k=0,W=x.length;k<W;k++){let tt=x[k];if(p(tt)){let ft=C(E),pt=n.get(tt).__webglTexture;e.bindTexture(ft,pt),M(ft),e.unbindTexture()}}}let xt=[],Ft=[];function Ht(E){if(E.samples>0){if(B(E)===!1){let x=E.textures,k=E.width,W=E.height,tt=i.COLOR_BUFFER_BIT,ft=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(E),nt=x.length>1;if(nt)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let st=E.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Mt]);let Xt=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,tt,i.NEAREST),l===!0&&(xt.length=0,Ft.length=0,xt.push(i.COLOR_ATTACHMENT0+Mt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(xt.push(ft),Ft.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Mt]);let Xt=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Z(E){return Math.min(s.maxSamples,E.samples)}function B(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function At(E,x){let k=E.colorSpace,W=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==yr&&k!==_i&&(me.getTransfer(k)===Se?(W!==On||tt!==Sn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",k)),x}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=ut,this.setTexture2DArray=Y,this.setTexture3D=it,this.setTextureCube=lt,this.rebindTextures=at,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=B,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function w_(i,t){function e(n,s=_i){let r,a=me.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Po)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===On)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Do)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===Jr||n===Kr||n===jr||n===Qr)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===zo||n===ko||n===Vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===ta||n===Yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Ho)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xo)return r.COMPRESSED_R11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===Yo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zo||n===$o||n===Jo||n===Ko||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===cl||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ll)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===ea||n===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var T_=`
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

}`,lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Cr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:T_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new lh,p={},M=e.getContextAttributes(),C=null,y=null,b=[],w=[],L=new gt,_=null,A=null,N=new rn;N.viewport=new De;let D=new rn;D.viewport=new De;let O=[N,D],H=new To,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let rt=b[et];return rt===void 0&&(rt=new Ds,b[et]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(et){let rt=b[et];return rt===void 0&&(rt=new Ds,b[et]=rt),rt.getGripSpace()},this.getHand=function(et){let rt=b[et];return rt===void 0&&(rt=new Ds,b[et]=rt),rt.getHandSpace()};function j(et){let rt=w.indexOf(et.inputSource);if(rt===-1)return;let yt=b[rt];yt!==void 0&&(yt.update(et.inputSource,et.frame,c||a),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ut);for(let et=0;et<b.length;et++){let rt=w[et];rt!==null&&(w[et]=null,b[et].disconnect(rt))}U=null,G=null,m.reset();for(let et in p)delete p[et];if(t.setRenderTarget(C),f=null,u=null,d=null,s=null,y=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(L.width,L.height,!1),A!==null){let et=A.camera;et.fov=A.fov,et.zoom=A.zoom,et.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ut),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ut=null,Rt=null;M.depth&&(Rt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=M.stencil?Vi:ni,Ut=M.stencil?Zs:Yn);let Bt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new vn(u.textureWidth,u.textureHeight,{format:On,type:Sn,depthTexture:new Li(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new vn(f.framebufferWidth,f.framebufferHeight,{format:On,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ut(et){for(let rt=0;rt<et.removed.length;rt++){let yt=et.removed[rt],Ut=w.indexOf(yt);Ut>=0&&(w[Ut]=null,b[Ut].disconnect(yt))}for(let rt=0;rt<et.added.length;rt++){let yt=et.added[rt],Ut=w.indexOf(yt);if(Ut===-1){for(let Bt=0;Bt<b.length;Bt++)if(Bt>=w.length){w.push(yt),Ut=Bt;break}else if(w[Bt]===null){w[Bt]=yt,Ut=Bt;break}if(Ut===-1)break}let Rt=b[Ut];Rt&&Rt.connect(yt)}}let Y=new R,it=new R;function lt(et,rt,yt){Y.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(yt.matrixWorld);let Ut=Y.distanceTo(it),Rt=rt.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,he=Rt[14]/(Rt[10]-1),Q=Rt[14]/(Rt[10]+1),at=(Rt[9]+1)/Rt[5],ct=(Rt[9]-1)/Rt[5],dt=(Rt[8]-1)/Rt[0],xt=(Bt[8]+1)/Bt[0],Ft=he*dt,Ht=he*xt,Z=Ut/(-dt+xt),B=Z*-dt;if(rt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(B),et.translateZ(Z),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Rt[10]===-1)et.projectionMatrix.copy(rt.projectionMatrix),et.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let P=he+Z,At=Q+Z,vt=Ft-B,E=Ht+(Ut-B),x=at*Q/At*P,k=ct*Q/At*P;et.projectionMatrix.makePerspective(vt,E,x,k,P,At),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Lt(et,rt){rt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(rt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let rt=et.near,yt=et.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),H.near=D.near=N.near=rt,H.far=D.far=N.far=yt,(U!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),U=H.near,G=H.far),H.layers.mask=et.layers.mask|6,N.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let Ut=et.parent,Rt=H.cameras;Lt(H,Ut);for(let Bt=0;Bt<Rt.length;Bt++)Lt(Rt[Bt],Ut);Rt.length===2?lt(H,N,D):H.projectionMatrix.copy(N.projectionMatrix),A===null&&et.isPerspectiveCamera&&(A={camera:et,fov:et.fov,zoom:et.zoom}),Dt(et,H,Ut)};function Dt(et,rt,yt){yt===null?et.matrix.copy(rt.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(rt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(rt.projectionMatrix),et.projectionMatrixInverse.copy(rt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=$a*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(et){return p[et]};let ae=null;function ie(et,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ut=!1;yt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let Q=0;Q<yt.length;Q++){let at=yt[Q],ct=null;if(f!==null)ct=f.getViewport(at);else{let xt=d.getViewSubImage(u,at);ct=xt.viewport,Q===0&&(t.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(y))}let dt=O[Q];dt===void 0&&(dt=new rn,dt.layers.enable(Q),dt.viewport=new De,O[Q]=dt),dt.matrix.fromArray(at.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(at.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ct.x,ct.y,ct.width,ct.height),Q===0&&(H.matrix.copy(dt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(dt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Q=d.getDepthInformation(yt[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,s.renderState)}if(Rt&&Rt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<yt.length;Q++){let at=yt[Q].camera;if(at){let ct=p[at];ct||(ct=new Cr,p[at]=ct);let dt=d.getCameraImage(at);ct.sourceTexture=dt}}}}for(let yt=0;yt<b.length;yt++){let Ut=w[yt],Rt=b[yt];Ut!==null&&Rt!==void 0&&Rt.update(Ut,rt,c||a)}ae&&ae(et,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}let se=new Md;se.setAnimationLoop(ie),this.setAnimationLoop=function(et){ae=et},this.dispose=function(){}}},E_=new de,Ed=new ne;Ed.set(-1,0,0,0,1,0,0,0,1);function C_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),C=M.envMap,y=M.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ed),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=C*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let w=b.program;n.uniformBlockBinding(y,w)}function c(y,b){let w=s[y.id];w===void 0&&(m(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",M));let L=b.program;n.updateUBOMapping(y,L);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let b=d();y.__bindingPointIndex=b;let w=i.createBuffer(),L=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],w=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,A=w.length;_<A;_++){let N=w[_];if(Array.isArray(N))for(let D=0,O=N.length;D<O;D++)f(N[D],_,D,L);else f(N,_,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,w,L){if(v(y,b,w,L)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let N=0;for(let D=0;D<A.length;D++){let O=A[D],H=p(O);g(O,y.__data,N),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function g(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function v(y,b,w,L){let _=y.value,A=b+"_"+w;if(L[A]===void 0)return typeof _=="number"||typeof _=="boolean"?L[A]=_:ArrayBuffer.isView(_)?L[A]=_.slice():L[A]=_.clone(),!0;{let N=L[A];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return L[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function m(y){let b=y.uniforms,w=0,L=16;for(let A=0,N=b.length;A<N;A++){let D=Array.isArray(b[A])?b[A]:[b[A]];for(let O=0,H=D.length;O<H;O++){let U=D[O],G=Array.isArray(U.value)?U.value:[U.value];for(let j=0,J=G.length;j<J;j++){let ut=G[j],Y=p(ut),it=w%L,lt=it%Y.boundary,Lt=it+lt;w+=lt,Lt!==0&&L-Lt<Y.storage&&(w+=L-Lt),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=Y.storage}}}let _=w%L;return _>0&&(w+=L-_),y.__size=w,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){let b=y.target;b.removeEventListener("dispose",M);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var I_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function P_(){return oi===null&&(oi=new Tr(I_,16,16,Gi,Zn),oi.name="DFG_LUT",oi.minFilter=an,oi.magFilter=an,oi.wrapS=ei,oi.wrapT=ei,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var yl=class{constructor(t={}){let{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Sn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([Oo,Fo,Uo]),p=new Set([Sn,Yn,Ys,Zs,Lo,No]),M=new Uint32Array(4),C=new Int32Array(4),y=new R,b=null,w=null,L=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,D=!1,O=null,H=null,U=null,G=null;this._outputColorSpace=sn;let j=0,J=0,ut=null,Y=-1,it=null,lt=new De,Lt=new De,Dt=null,ae=new ee(0),ie=0,se=e.width,et=e.height,rt=1,yt=null,Ut=null,Rt=new De(0,0,se,et),Bt=new De(0,0,se,et),he=!1,Q=new Fs,at=!1,ct=!1,dt=new de,xt=new R,Ft=new De,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function B(){return ut===null?rt:1}let P=n;function At(S,F){return e.getContext(S,F)}let vt,E,x,k,W,tt,ft,pt,nt,st,Mt,Xt,Tt,St,Wt,$t,te,z,mt,ot,_t,Et,ht;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",T,!1),e.addEventListener("webglcontextcreationerror",V,!1),P===null){let F="webgl2";if(P=At(F,S),P===null)throw At(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(S){throw e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",T,!1),e.removeEventListener("webglcontextcreationerror",V,!1),jt("WebGLRenderer: "+S.message),S}function Yt(){vt=new Bg(P),vt.init(),_t=new w_(P,vt),E=new Cg(P,vt,t,_t),x=new S_(P,vt),E.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),H=P.createFramebuffer(),U=P.createFramebuffer(),G=P.createFramebuffer(),k=new Vg(P),W=new l_,tt=new b_(P,vt,x,W,E,_t,k),ft=new Og(N),pt=new Hp(P),Et=new Ag(P,pt),nt=new zg(P,pt,k,Et),st=new Hg(P,nt,pt,Et,k),z=new Gg(P,E,tt),Wt=new Rg(W),Mt=new o_(N,ft,vt,E,Et,Wt),Xt=new C_(N,W),Tt=new h_,St=new g_(vt),te=new Tg(N,ft,x,st,g,l),$t=new M_(N,st,E),ht=new R_(P,k,E,x),mt=new Eg(P,vt,k),ot=new kg(P,vt,k),k.programs=Mt.programs,N.capabilities=E,N.extensions=vt,N.properties=W,N.renderLists=Tt,N.shadowMap=$t,N.state=x,N.info=k}v!==Sn&&(A=new Xg(v,e.width,e.height,o,s,r));let kt=new ch(N,P);this.xr=kt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=vt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=vt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(S){S!==void 0&&(rt=S,this.setSize(se,et,!1))},this.getSize=function(S){return S.set(se,et)},this.setSize=function(S,F,K=!0){if(kt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=S,et=F,e.width=Math.floor(S*rt),e.height=Math.floor(F*rt),K===!0&&(e.style.width=S+"px",e.style.height=F+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(se*rt,et*rt).floor()},this.setDrawingBufferSize=function(S,F,K){se=S,et=F,rt=K,e.width=Math.floor(S*K),e.height=Math.floor(F*K),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(v===Sn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(lt)},this.getViewport=function(S){return S.copy(Rt)},this.setViewport=function(S,F,K,X){S.isVector4?Rt.set(S.x,S.y,S.z,S.w):Rt.set(S,F,K,X),x.viewport(lt.copy(Rt).multiplyScalar(rt).round())},this.getScissor=function(S){return S.copy(Bt)},this.setScissor=function(S,F,K,X){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,F,K,X),x.scissor(Lt.copy(Bt).multiplyScalar(rt).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){x.setScissorTest(he=S)},this.setOpaqueSort=function(S){yt=S},this.setTransparentSort=function(S){Ut=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,K=!0){let X=0;if(S){let q=!1;if(ut!==null){let Nt=ut.texture.format;q=m.has(Nt)}if(q){let Nt=ut.texture.type,zt=p.has(Nt),Pt=te.getClearColor(),Vt=te.getClearAlpha(),qt=Pt.r,le=Pt.g,pe=Pt.b;zt?(M[0]=qt,M[1]=le,M[2]=pe,M[3]=Vt,P.clearBufferuiv(P.COLOR,0,M)):(C[0]=qt,C[1]=le,C[2]=pe,C[3]=Vt,P.clearBufferiv(P.COLOR,0,C))}else X|=P.COLOR_BUFFER_BIT}F&&(X|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",T,!1),e.removeEventListener("webglcontextcreationerror",V,!1),te.dispose(),Tt.dispose(),St.dispose(),W.dispose(),ft.dispose(),st.dispose(),Et.dispose(),ht.dispose(),Mt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Qt),kt.removeEventListener("sessionend",_e),Ce.stop()};function we(S){S.preventDefault(),Hc("WebGLRenderer: Context Lost."),D=!0}function T(){Hc("WebGLRenderer: Context Restored."),D=!1;let S=k.autoReset,F=$t.enabled,K=$t.autoUpdate,X=$t.needsUpdate,q=$t.type;Yt(),k.autoReset=S,$t.enabled=F,$t.autoUpdate=K,$t.needsUpdate=X,$t.type=q}function V(S){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $(S){let F=S.target;F.removeEventListener("dispose",$),I(F)}function I(S){Ct(S),W.remove(S)}function Ct(S){let F=W.get(S).programs;F!==void 0&&(F.forEach(function(K){Mt.releaseProgram(K)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,K,X,q,Nt){F===null&&(F=Ht);let zt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Pt=wf(S,F,K,X,q);x.setMaterial(X,zt);let Vt=K.index,qt=1;if(X.wireframe===!0){if(Vt=nt.getWireframeAttribute(K),Vt===void 0)return;qt=2}let le=K.drawRange,pe=K.attributes.position,Gt=le.start*qt,Me=(le.start+le.count)*qt;Nt!==null&&(Gt=Math.max(Gt,Nt.start*qt),Me=Math.min(Me,(Nt.start+Nt.count)*qt)),Vt!==null?(Gt=Math.max(Gt,0),Me=Math.min(Me,Vt.count)):pe!=null&&(Gt=Math.max(Gt,0),Me=Math.min(Me,pe.count));let He=Me-Gt;if(He<0||He===1/0)return;Et.setup(q,X,Pt,K,Vt);let Fe,Re=mt;if(Vt!==null&&(Fe=pt.get(Vt),Re=ot,Re.setIndex(Fe)),q.isMesh)X.wireframe===!0?(x.setLineWidth(X.wireframeLinewidth*B()),Re.setMode(P.LINES)):Re.setMode(P.TRIANGLES);else if(q.isLine){let on=X.linewidth;on===void 0&&(on=1),x.setLineWidth(on*B()),q.isLineSegments?Re.setMode(P.LINES):q.isLineLoop?Re.setMode(P.LINE_LOOP):Re.setMode(P.LINE_STRIP)}else q.isPoints?Re.setMode(P.POINTS):q.isSprite&&Re.setMode(P.TRIANGLES);if(q.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Re.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let on=q._multiDrawStarts,Ot=q._multiDrawCounts,mn=q._multiDrawCount,ye=Vt?pt.get(Vt).bytesPerElement:1,Ln=W.get(X).currentProgram.getUniforms();for(let Qn=0;Qn<mn;Qn++)Ln.setValue(P,"_gl_DrawID",Qn),Re.render(on[Qn]/ye,Ot[Qn])}else if(q.isInstancedMesh)Re.renderInstances(Gt,He,q.count);else if(K.isInstancedBufferGeometry){let on=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ot=Math.min(K.instanceCount,on);Re.renderInstances(Gt,He,Ot)}else Re.render(Gt,He)};function wt(S,F,K,X){O!==null&&S.isNodeMaterial&&O.setObject(X,S),at===!0&&Wt.setState(S,K,!1),S.transparent===!0&&S.side===Dn&&S.forceSinglePass===!1?(S.side=Ye,S.needsUpdate=!0,ha(S,F,X),S.side=Oi,S.needsUpdate=!0,ha(S,F,X),S.side=Dn):ha(S,F,X)}this.compile=function(S,F,K=null){K===null&&(K=S),O!==null&&O.renderStart(S,F,K),w=St.get(K),w.init(F),_.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),S!==K&&S.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),ct=this.localClippingEnabled,at=Wt.init(this.clippingPlanes,ct),at===!0&&Wt.setGlobalState(this.clippingPlanes,F),O!==null&&$t.render(w.state.shadowsArray,K,F);let X=new Set;return S.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Nt=q.material;if(Nt)if(Array.isArray(Nt))for(let zt=0;zt<Nt.length;zt++){let Pt=Nt[zt];wt(Pt,K,F,q),X.add(Pt)}else wt(Nt,K,F,q),X.add(Nt)}),w=_.pop(),O!==null&&O.renderEnd(),X},this.compileAsync=function(S,F,K=null){let X=this.compile(S,F,K);return new Promise(q=>{function Nt(){if(X.forEach(function(zt){let Vt=W.get(zt).currentProgram;(Vt===void 0||Vt.isReady())&&X.delete(zt)}),X.size===0){q(S);return}setTimeout(Nt,10)}vt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Zt=null;function Jt(S){Zt&&Zt(S)}function Qt(){Ce.stop()}function _e(){Ce.start()}let Ce=new Md;Ce.setAnimationLoop(Jt),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(S){Zt=S,kt.setAnimationLoop(S),S===null?Ce.stop():Ce.start()},kt.addEventListener("sessionstart",Qt),kt.addEventListener("sessionend",_e),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(S,F);let K=kt.enabled===!0&&kt.isPresenting===!0,X=A!==null&&(ut===null||K)&&A.begin(N,ut);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(F),F=kt.getCamera()),S.isScene===!0&&S.onBeforeRender(N,S,F,ut),w=St.get(S,_.length),w.init(F),w.state.textureUnits=tt.getTextureUnits(),_.push(w),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(dt,Hn,F.reversedDepth),ct=this.localClippingEnabled,at=Wt.init(this.clippingPlanes,ct),b=Tt.get(S,L.length),b.init(),L.push(b),kt.enabled===!0&&kt.isPresenting===!0){let zt=N.xr.getDepthSensingMesh();zt!==null&&ge(zt,F,-1/0,N.sortObjects)}ge(S,F,0,N.sortObjects),b.finish(),O!==null&&O.updateLights(w.state.lightsArray),N.sortObjects===!0&&b.sort(yt,Ut),Z=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,Z&&te.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Wt.beginShadows();let q=w.state.shadowsArray;if($t.render(q,S,F),at===!0&&Wt.endShadows(),(X&&A.hasRenderPass())===!1){let zt=b.opaque,Pt=b.transmissive;if(w.setupLights(),F.isArrayCamera){let Vt=F.cameras;if(Pt.length>0)for(let qt=0,le=Vt.length;qt<le;qt++){let pe=Vt[qt];Le(zt,Pt,S,pe)}Z&&te.render(S);for(let qt=0,le=Vt.length;qt<le;qt++){let pe=Vt[qt];xe(b,S,pe,pe.viewport)}}else Pt.length>0&&Le(zt,Pt,S,F),Z&&te.render(S),xe(b,S,F)}ut!==null&&J===0&&(tt.updateMultisampleRenderTarget(ut),tt.updateRenderTargetMipmap(ut)),X&&A.end(N),S.isScene===!0&&S.onAfterRender(N,S,F),Et.resetDefaultState(),Y=-1,it=null,_.pop(),_.length>0?(w=_[_.length-1],tt.setTextureUnits(w.state.textureUnits),at===!0&&Wt.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,O!==null&&O.renderEnd()};function ge(S,F,K,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Q)){X&&Ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);let zt=st.update(S),Pt=S.material;Pt.visible&&b.push(S,zt,Pt,K,Ft.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Q))){let zt=st.update(S),Pt=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ft.copy(S.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ft.copy(zt.boundingSphere.center)),Ft.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(Pt)){let Vt=zt.groups;for(let qt=0,le=Vt.length;qt<le;qt++){let pe=Vt[qt],Gt=Pt[pe.materialIndex];Gt&&Gt.visible&&b.push(S,zt,Gt,K,Ft.z,pe,F)}}else Pt.visible&&b.push(S,zt,Pt,K,Ft.z,null,F)}}let Nt=S.children;for(let zt=0,Pt=Nt.length;zt<Pt;zt++)ge(Nt[zt],F,K,X)}function xe(S,F,K,X){let{opaque:q,transmissive:Nt,transparent:zt}=S;w.setupLightsView(K),at===!0&&Wt.setGlobalState(N.clippingPlanes,K),X&&x.viewport(lt.copy(X)),q.length>0&&Xe(q,F,K),Nt.length>0&&Xe(Nt,F,K),zt.length>0&&Xe(zt,F,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Le(S,F,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let Gt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new vn(1,1,{generateMipmaps:!0,type:Gt?Zn:Sn,minFilter:ki,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Nt=w.state.transmissionRenderTarget[X.id],zt=X.viewport||lt;Nt.setSize(zt.z*N.transmissionResolutionScale,zt.w*N.transmissionResolutionScale);let Pt=N.getRenderTarget(),Vt=N.getActiveCubeFace(),qt=N.getActiveMipmapLevel();N.setRenderTarget(Nt),N.getClearColor(ae),ie=N.getClearAlpha(),ie<1&&N.setClearColor(16777215,.5),N.clear(),Z&&te.render(K);let le=N.toneMapping;N.toneMapping=qn;let pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),at===!0&&Wt.setGlobalState(N.clippingPlanes,X),Xe(S,K,X),tt.updateMultisampleRenderTarget(Nt),tt.updateRenderTargetMipmap(Nt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Me=0,He=F.length;Me<He;Me++){let Fe=F[Me],{object:Re,geometry:on,material:Ot,group:mn}=Fe;if(Ot.side===Dn&&Re.layers.test(X.layers)){let ye=Ot.side;Ot.side=Ye,Ot.needsUpdate=!0,ar(Re,K,X,on,Ot,mn),Ot.side=ye,Ot.needsUpdate=!0,Gt=!0}}Gt===!0&&(tt.updateMultisampleRenderTarget(Nt),tt.updateRenderTargetMipmap(Nt))}N.setRenderTarget(Pt,Vt,qt),N.setClearColor(ae,ie),pe!==void 0&&(X.viewport=pe),N.toneMapping=le}function Xe(S,F,K){let X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Nt=S.length;q<Nt;q++){let zt=S[q],{object:Pt,geometry:Vt,group:qt}=zt,le=zt.material;le.allowOverride===!0&&X!==null&&(le=X),Pt.layers.test(K.layers)&&ar(Pt,F,K,Vt,le,qt)}}function ar(S,F,K,X,q,Nt){O!==null&&q.isNodeMaterial&&O.setObject(S,q),S.onBeforeRender(N,F,K,X,q,Nt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(N,F,K,X,S,Nt),q.transparent===!0&&q.side===Dn&&q.forceSinglePass===!1?(q.side=Ye,q.needsUpdate=!0,N.renderBufferDirect(K,F,X,q,S,Nt),q.side=Oi,q.needsUpdate=!0,N.renderBufferDirect(K,F,X,q,S,Nt),q.side=Dn):N.renderBufferDirect(K,F,X,q,S,Nt),S.onAfterRender(N,F,K,X,q,Nt)}function ha(S,F,K){F.isScene!==!0&&(F=Ht);let X=W.get(S),q=w.state.lights,Nt=w.state.shadowsArray,zt=q.state.version,Pt=Mt.getParameters(S,q.state,Nt,F,K,w.state.lightProbeGridArray),Vt=Mt.getProgramCacheKey(Pt),qt=X.programs;X.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let le=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;X.envMap=ft.get(S.envMap||X.environment,le),X.envMapRotation=X.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,qt===void 0&&(S.addEventListener("dispose",$),qt=new Map,X.programs=qt);let pe=qt.get(Vt);if(pe!==void 0){if(X.currentProgram===pe&&X.lightsStateVersion===zt)return wh(S,Pt),pe}else Pt.uniforms=Mt.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,K,Pt),S.onBeforeCompile(Pt,N),pe=Mt.acquireProgram(Pt,Vt),qt.set(Vt,pe),X.uniforms=Pt.uniforms;let Gt=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Gt.clippingPlanes=Wt.uniform),wh(S,Pt),X.needsLights=Af(S),X.lightsStateVersion=zt,X.needsLights&&(Gt.ambientLightColor.value=q.state.ambient,Gt.lightProbe.value=q.state.probe,Gt.sunLights.value=q.state.sun,Gt.sunLightShadows.value=q.state.sunShadow,Gt.directionalLights.value=q.state.directional,Gt.directionalLightShadows.value=q.state.directionalShadow,Gt.spotLights.value=q.state.spot,Gt.spotLightShadows.value=q.state.spotShadow,Gt.rectAreaLights.value=q.state.rectArea,Gt.ltc_1.value=q.state.rectAreaLTC1,Gt.ltc_2.value=q.state.rectAreaLTC2,Gt.pointLights.value=q.state.point,Gt.pointLightShadows.value=q.state.pointShadow,Gt.hemisphereLights.value=q.state.hemi,Gt.sunShadowMatrix.value=q.state.sunShadowMatrix,Gt.sunShadowCascade.value=q.state.sunShadowCascade,Gt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Gt.spotLightMatrix.value=q.state.spotLightMatrix,Gt.spotLightMap.value=q.state.spotLightMap,Gt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=pe,X.uniformsList=null,pe}function bh(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=js.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function wh(S,F){let K=W.get(S);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function bf(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let K=0,X=S.length;K<X;K++){let q=S[K];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function wf(S,F,K,X,q){F.isScene!==!0&&(F=Ht),tt.resetTextureUnits();let Nt=F.fog,zt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Pt=ut===null?N.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:me.workingColorSpace,Vt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,qt=ft.get(X.envMap||zt,Vt),le=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pe=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Gt=!!K.morphAttributes.position,Me=!!K.morphAttributes.normal,He=!!K.morphAttributes.color,Fe=qn;X.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Fe=N.toneMapping);let Re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,on=Re!==void 0?Re.length:0,Ot=W.get(X),mn=w.state.lights;if(at===!0&&(ct===!0||S!==it)){let Ne=S===it&&X.id===Y;Wt.setState(X,S,Ne)}let ye=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==mn.state.version||Ot.outputColorSpace!==Pt||q.isBatchedMesh&&Ot.batching===!1||!q.isBatchedMesh&&Ot.batching===!0||q.isBatchedMesh&&Ot.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ot.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ot.instancing===!1||!q.isInstancedMesh&&Ot.instancing===!0||q.isSkinnedMesh&&Ot.skinning===!1||!q.isSkinnedMesh&&Ot.skinning===!0||q.isInstancedMesh&&Ot.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ot.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ot.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ot.instancingMorph===!1&&q.morphTexture!==null||Ot.envMap!==qt||X.fog===!0&&Ot.fog!==Nt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Wt.numPlanes||Ot.numIntersection!==Wt.numIntersection)||Ot.vertexAlphas!==le||Ot.vertexTangents!==pe||Ot.morphTargets!==Gt||Ot.morphNormals!==Me||Ot.morphColors!==He||Ot.toneMapping!==Fe||Ot.morphTargetsCount!==on||!!Ot.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Ot.__version=X.version);let Ln=Ot.currentProgram;ye===!0&&(Ln=ha(X,F,q),O&&X.isNodeMaterial&&O.onUpdateProgram(X,Ln,Ot));let Qn=!1,Si=!1,ds=!1,Te=Ln.getUniforms(),Ve=Ot.uniforms;if(x.useProgram(Ln.program)&&(Qn=!0,Si=!0,ds=!0),X.id!==Y&&(Y=X.id,Si=!0),Ot.needsLights){let Ne=bf(w.state.lightProbeGridArray,q);Ot.lightProbeGrid!==Ne&&(Ot.lightProbeGrid=Ne,Si=!0)}if(Qn||it!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Te.setValue(P,"projectionMatrix",S.projectionMatrix),Te.setValue(P,"viewMatrix",S.matrixWorldInverse);let wi=Te.map.cameraPosition;wi!==void 0&&wi.setValue(P,xt.setFromMatrixPosition(S.matrixWorld)),E.logarithmicDepthBuffer&&Te.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Te.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),it!==S&&(it=S,Si=!0,ds=!0)}if(Ot.needsLights&&(mn.state.sunShadowMap.length>0&&Te.setValue(P,"sunShadowMap",mn.state.sunShadowMap,tt),mn.state.directionalShadowMap.length>0&&Te.setValue(P,"directionalShadowMap",mn.state.directionalShadowMap,tt),mn.state.spotShadowMap.length>0&&Te.setValue(P,"spotShadowMap",mn.state.spotShadowMap,tt),mn.state.pointShadowMap.length>0&&Te.setValue(P,"pointShadowMap",mn.state.pointShadowMap,tt)),q.isSkinnedMesh){Te.setOptional(P,q,"bindMatrix"),Te.setOptional(P,q,"bindMatrixInverse");let Ne=q.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Te.setValue(P,"boneTexture",Ne.boneTexture,tt))}q.isBatchedMesh&&(Te.setOptional(P,q,"batchingTexture"),Te.setValue(P,"batchingTexture",q._matricesTexture,tt),Te.setOptional(P,q,"batchingIdTexture"),Te.setValue(P,"batchingIdTexture",q._indirectTexture,tt),Te.setOptional(P,q,"batchingColorTexture"),q._colorsTexture!==null&&Te.setValue(P,"batchingColorTexture",q._colorsTexture,tt));let bi=K.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&z.update(q,K,Ln),(Si||Ot.receiveShadow!==q.receiveShadow)&&(Ot.receiveShadow=q.receiveShadow,Te.setValue(P,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(Ve.envMapIntensity.value=F.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=P_()),Si){if(Te.setValue(P,"toneMappingExposure",N.toneMappingExposure),Ot.needsLights&&Tf(Ve,ds),Nt&&X.fog===!0&&Xt.refreshFogUniforms(Ve,Nt),Xt.refreshMaterialUniforms(Ve,X,rt,et,w.state.transmissionRenderTarget[S.id]),Ot.needsLights&&Ot.lightProbeGrid){let Ne=Ot.lightProbeGrid;Ve.probesSH.value=Ne.texture,Ve.probesMin.value.copy(Ne.boundingBox.min),Ve.probesMax.value.copy(Ne.boundingBox.max),Ve.probesResolution.value.copy(Ne.resolution)}js.upload(P,bh(Ot),Ve,tt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(js.upload(P,bh(Ot),Ve,tt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Te.setValue(P,"center",q.center),Te.setValue(P,"modelViewMatrix",q.modelViewMatrix),Te.setValue(P,"normalMatrix",q.normalMatrix),Te.setValue(P,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Ne=X.uniformsGroups;for(let wi=0,fs=Ne.length;wi<fs;wi++){let Ah=Ne[wi];ht.update(Ah,Ln),ht.bind(Ah,Ln)}}return Ln}function Tf(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Af(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(S,F,K){let X=W.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=F,W.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let K=W.get(S);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,K=0){ut=S,j=F,J=K;let X=null,q=!1,Nt=!1;if(S){let Pt=W.get(S);if(Pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(P.FRAMEBUFFER,Pt.__webglFramebuffer),lt.copy(S.viewport),Lt.copy(S.scissor),Dt=S.scissorTest,x.viewport(lt),x.scissor(Lt),x.setScissorTest(Dt),Y=-1;return}else if(Pt.__webglFramebuffer===void 0)tt.setupRenderTarget(S);else if(Pt.__hasExternalTextures)tt.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let le=S.depthTexture;if(Pt.__boundDepthTexture!==le){if(le!==null&&W.has(le)&&(S.width!==le.image.width||S.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(S)}}let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Nt=!0);let qt=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?X=qt[F][K]:X=qt[F],q=!0):S.samples>0&&tt.useMultisampledRTT(S)===!1?X=W.get(S).__webglMultisampledFramebuffer:Array.isArray(qt)?X=qt[K]:X=qt,lt.copy(S.viewport),Lt.copy(S.scissor),Dt=S.scissorTest}else lt.copy(Rt).multiplyScalar(rt).floor(),Lt.copy(Bt).multiplyScalar(rt).floor(),Dt=he;if(K!==0&&(X=H),x.bindFramebuffer(P.FRAMEBUFFER,X)&&x.drawBuffers(S,X),x.viewport(lt),x.scissor(Lt),x.setScissorTest(Dt),q){let Pt=W.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pt.__webglTexture,K)}else if(Nt){let Pt=F;for(let Vt=0;Vt<S.textures.length;Vt++){let qt=W.get(S.textures[Vt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Vt,qt.__webglTexture,K,Pt)}}else if(S!==null&&K!==0){let Pt=W.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pt.__webglTexture,K)}Y=-1};function Th(S){let F=W.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=E.textureFormatReadable(S.format),F.__typeReadable=E.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,K,X,q,Nt,zt,Pt=0){if(!(S&&S.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(Vt=Vt[zt]),Vt){x.bindFramebuffer(P.FRAMEBUFFER,Vt);try{let qt=S.textures[Pt],le=qt.format,pe=qt.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Pt);let Gt=Th(qt);if(Gt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&K>=0&&K<=S.height-q&&P.readPixels(F,K,X,q,_t.convert(le),_t.convert(pe),Nt)}finally{let qt=ut!==null?W.get(ut).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(S,F,K,X,q,Nt,zt,Pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(Vt=Vt[zt]),Vt)if(F>=0&&F<=S.width-X&&K>=0&&K<=S.height-q){x.bindFramebuffer(P.FRAMEBUFFER,Vt);let qt=S.textures[Pt],le=qt.format,pe=qt.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Pt);let Gt=Th(qt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,Nt.byteLength,P.STREAM_READ),P.readPixels(F,K,X,q,_t.convert(le),_t.convert(pe),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let He=ut!==null?W.get(ut).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,He);let Fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wu(P,Fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Nt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Me),P.deleteSync(Fe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,K=0){let X=Math.pow(2,-K),q=Math.floor(S.image.width*X),Nt=Math.floor(S.image.height*X),zt=F!==null?F.x:0,Pt=F!==null?F.y:0;tt.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,zt,Pt,q,Nt),x.unbindTexture()},this.copyTextureToTexture=function(S,F,K=null,X=null,q=0,Nt=0){let zt,Pt,Vt,qt,le,pe,Gt,Me,He,Fe=S.isCompressedTexture?S.mipmaps[Nt]:S.image;if(K!==null)zt=K.max.x-K.min.x,Pt=K.max.y-K.min.y,Vt=K.isBox3?K.max.z-K.min.z:1,qt=K.min.x,le=K.min.y,pe=K.isBox3?K.min.z:0;else{let Ve=Math.pow(2,-q);zt=Math.floor(Fe.width*Ve),Pt=Math.floor(Fe.height*Ve),S.isDataArrayTexture?Vt=Fe.depth:S.isData3DTexture?Vt=Math.floor(Fe.depth*Ve):Vt=1,qt=0,le=0,pe=0}X!==null?(Gt=X.x,Me=X.y,He=X.z):(Gt=0,Me=0,He=0);let Re=_t.convert(F.format),on=_t.convert(F.type),Ot;F.isData3DTexture?(tt.setTexture3D(F,0),Ot=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(tt.setTexture2DArray(F,0),Ot=P.TEXTURE_2D_ARRAY):(tt.setTexture2D(F,0),Ot=P.TEXTURE_2D),x.activeTexture(P.TEXTURE0),x.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let mn=x.getParameter(P.UNPACK_ROW_LENGTH),ye=x.getParameter(P.UNPACK_IMAGE_HEIGHT),Ln=x.getParameter(P.UNPACK_SKIP_PIXELS),Qn=x.getParameter(P.UNPACK_SKIP_ROWS),Si=x.getParameter(P.UNPACK_SKIP_IMAGES);x.pixelStorei(P.UNPACK_ROW_LENGTH,Fe.width),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Fe.height),x.pixelStorei(P.UNPACK_SKIP_PIXELS,qt),x.pixelStorei(P.UNPACK_SKIP_ROWS,le),x.pixelStorei(P.UNPACK_SKIP_IMAGES,pe);let ds=S.isDataArrayTexture||S.isData3DTexture,Te=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let Ve=W.get(S),bi=W.get(F),Ne=W.get(Ve.__renderTarget),wi=W.get(bi.__renderTarget);x.bindFramebuffer(P.READ_FRAMEBUFFER,Ne.__webglFramebuffer),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let fs=0;fs<Vt;fs++)ds&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(S).__webglTexture,q,pe+fs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(F).__webglTexture,Nt,He+fs)),P.blitFramebuffer(qt,le,zt,Pt,Gt,Me,zt,Pt,P.DEPTH_BUFFER_BIT,P.NEAREST);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(q!==0||S.isRenderTargetTexture||W.has(S)){let Ve=W.get(S),bi=W.get(F);x.bindFramebuffer(P.READ_FRAMEBUFFER,U),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,G);for(let Ne=0;Ne<Vt;Ne++)ds?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ve.__webglTexture,q,pe+Ne):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ve.__webglTexture,q),Te?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bi.__webglTexture,Nt,He+Ne):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,bi.__webglTexture,Nt),q!==0?P.blitFramebuffer(qt,le,zt,Pt,Gt,Me,zt,Pt,P.COLOR_BUFFER_BIT,P.NEAREST):Te?P.copyTexSubImage3D(Ot,Nt,Gt,Me,He+Ne,qt,le,zt,Pt):P.copyTexSubImage2D(Ot,Nt,Gt,Me,qt,le,zt,Pt);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Te?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ot,Nt,Gt,Me,He,zt,Pt,Vt,Re,on,Fe.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,Nt,Gt,Me,He,zt,Pt,Vt,Re,Fe.data):P.texSubImage3D(Ot,Nt,Gt,Me,He,zt,Pt,Vt,Re,on,Fe):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Nt,Gt,Me,zt,Pt,Re,on,Fe.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Nt,Gt,Me,Fe.width,Fe.height,Re,Fe.data):P.texSubImage2D(P.TEXTURE_2D,Nt,Gt,Me,zt,Pt,Re,on,Fe);x.pixelStorei(P.UNPACK_ROW_LENGTH,mn),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ye),x.pixelStorei(P.UNPACK_SKIP_PIXELS,Ln),x.pixelStorei(P.UNPACK_SKIP_ROWS,Qn),x.pixelStorei(P.UNPACK_SKIP_IMAGES,Si),Nt===0&&F.generateMipmaps&&P.generateMipmap(Ot),x.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&tt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?tt.setTextureCube(S,0):S.isData3DTexture?tt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?tt.setTexture2DArray(S,0):tt.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){j=0,J=0,ut=null,x.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Sl=class extends es{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new _n;t.deleteAttribute("uv");let e=new fe({side:Ye}),n=new fe,s=new Wr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new bt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Xn(t,n,6),o=new ze;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new bt(t,er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new bt(t,er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new bt(t,er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new bt(t,er(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new bt(t,er(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new bt(t,er(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function er(i){return new zr({color:0,emissive:16777215,emissiveIntensity:i})}function bl(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ae,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Cd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let g=Cd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Cd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new gn(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Ue={hand:'"Caveat", "Comic Sans MS", cursive',marker:'"Permanent Marker", "Impact", sans-serif',chalk:'"Cabin Sketch", "Chalkboard SE", "Comic Sans MS", cursive',type:'"Special Elite", "Courier New", monospace',brush:'"Yuji Syuku", serif',sign:'"Arial Black", "Helvetica Neue", Arial, sans-serif'},Je=(i,t)=>{let e=Object.assign(document.createElement("canvas"),{width:i,height:t});return[e,e.getContext("2d")]};function Ke(i,t=!0){let e=new En(i);return e.wrapS=e.wrapT=Pi,e.anisotropy=8,t&&(e.colorSpace=sn),e}var $n=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function aa(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n;s=s*s*(3-2*s),r=r*r*(3-2*r);let a=$n(e,n),o=$n(e+1,n),l=$n(e,n+1),c=$n(e+1,n+1);return a+(o-a)*s+(l-a)*r+(a-o-l+c)*s*r}function Rd(i,t,e){let[n,s]=Je(i,t),r=s.createImageData(i,t),a=r.data;for(let o=0,l=0;o<t;o++)for(let c=0;c<i;c++,l+=4){let[h,d,u]=e(c/i,o/t,c,o);a[l]=h,a[l+1]=d,a[l+2]=u,a[l+3]=255}return s.putImageData(r,0,0),[n,s]}function ci({planks:i=5,base:t=[120,78,45],spread:e=.16,rings:n=150,joints:s=1.3,seed:r=1,size:a=512,seams:o=!0}={}){return Ke(Rd(a,a,(l,c,h,d)=>{let u=Math.floor(l*i),f=l*i-u,g=c+$n(u,r)*3,v=o&&(g*s+$n(u,r+7))%1<.006,m=aa(f*1.5+u*13,g*2.5)*.22+aa(f*4+u,g*9)*.03,p=Math.sin((f+m)*n),M=aa(f*70+u*7,g*1.2),C=$n(h,Math.floor(d/5))*.05,y=Math.max(0,1-Math.hypot((f-$n(u,r+3))*3,(g*2%1-.5)*1.2)*4)*($n(u,r+5)>.75),b=(1+($n(u,r+1)-.5)*2*e)*(.84+.07*p+.1*(M-.5)-C-y*.3);return o&&(f<.012||f>.988||v)&&(b*=.42),t.map(w=>w*b)})[0])}function Id(){return Ke(Rd(512,512,(i,t,e,n)=>{let s=.93+.05*aa(i*9,t*9)+.03*aa(i*40,t*40)+($n(e,n)-.5)*.03;return[236*s,232*s,222*s]})[0])}function Pd(i,t,e,n){let[s,r]=Je(t,e);r.fillStyle=r.strokeStyle="rgba(240,240,232,.92)",r.lineCap=r.lineJoin="round",n(r),r.globalCompositeOperation="destination-out";for(let a=0;a<t*e/9;a++)r.globalAlpha=Math.random()*.8,r.fillRect(Math.random()*t,Math.random()*e,1+Math.random()*2,1);i.drawImage(s,0,0)}var yi=(i,t,e)=>{i.lineWidth=e,i.beginPath(),t.forEach(([n,s],r)=>i[r?"lineTo":"moveTo"](n+Math.random()*3,s+Math.random()*3)),i.stroke()};function Ld(){let[e,n]=Je(2048,660);n.fillStyle="#18231d",n.fillRect(0,0,2048,660);for(let s=0;s<260;s++)n.strokeStyle=`rgba(200,210,200,${Math.random()*.035})`,n.lineWidth=30+Math.random()*80,n.beginPath(),n.arc(Math.random()*2048,Math.random()*660,60+Math.random()*260,Math.random()*6,Math.random()*6),n.stroke();return Pd(n,2048,660,s=>{s.font=`700 44px ${Ue.chalk}`,s.fillText("Tuesday (again)",60,70),s.font=`700 76px ${Ue.chalk}`,s.fillText("TODAY: STRUCTURAL INTEGRITY",60,165),yi(s,[[60,185],[1060,180]],5),s.font=`700 46px ${Ue.chalk}`,["1. Walls hold up the ceiling.","2. The ceiling holds up the 2nd floor.","3. The 2nd floor holds up the principal.","4. Do you see where this is going, D.B.?"].forEach((l,c)=>s.fillText(l,80,260+c*66)),s.font=`700 36px ${Ue.chalk}`,s.fillText("Pop quiz: how many walls does this room have?",80,560),s.fillText("(answer may change before the bell)",120,604),s.save(),s.translate(1e3,615),s.rotate(-.08),s.font=`28px ${Ue.hand}`,s.fillText("4 for now ;)",0,0),s.restore();let r=1290,a=540;yi(s,[[r,a],[r,a-230],[r+300,a-230],[r+300,a]],6),yi(s,[[r-20,a-225],[r+150,a-330],[r+320,a-225]],6);for(let l=0;l<2;l++)for(let c=0;c<3;c++)s.strokeRect(r+30+c*90,a-200+l*85,50,50);yi(s,[[r+160,a-330],[r+190,a-250],[r+150,a-170],[r+200,a-60],[r+170,a]],4);let o=r+470;s.beginPath(),s.arc(o,a-150,22,0,7),s.stroke(),yi(s,[[o,a-128],[o,a-60],[o-25,a]],5),yi(s,[[o,a-60],[o+25,a]],5),yi(s,[[o,a-110],[o+55,a-90]],5),s.strokeRect(o+50,a-70,70,70),yi(s,[[o+85,a-70],[o+85,a-120]],5),yi(s,[[o+60,a-120],[o+110,a-120]],7);for(let l=0;l<3;l++)s.lineWidth=6,s.beginPath(),s.ellipse(o+30,a-90,150+l*9,130+l*7,l*.2,0,7),s.stroke();s.font=`700 90px ${Ue.chalk}`,s.fillText("NO.",o+150,a-230),s.font=`700 42px ${Ue.chalk}`,s.fillText("DEMOLITION BOY: STAY AFTER CLASS",1170,80),s.strokeRect(1150,30,820,70)}),Ke(e)}function wl(i){let[n,s]=Je(1600,150);return i&&Pd(s,1600,150,r=>{let a=88;do r.font=`700 ${a-=4}px ${Ue.chalk}`;while(r.measureText(i).width>1560);r.fillText(i,20,105)}),n}function Tl(i,t,e){let n=[];for(let s of t.split(`
`)){let r="";for(let a of s.split(" ")){let o=r?`${r} ${a}`:a;i.measureText(o).width>e&&r?(n.push(r),r=a):r=o}n.push(r)}return n}var L_={yellow:"#f7e26b",pink:"#f6a6c1",blue:"#9fd4f2",green:"#b8e68a",orange:"#f8b26a"};function Al(i,t="yellow",e=46){let[n,s]=Je(512,512),r=s.createLinearGradient(0,0,0,512);r.addColorStop(0,"rgba(90,70,20,0)"),r.addColorStop(1,"rgba(90,70,20,.2)"),s.fillStyle=L_[t],s.fillRect(0,0,512,512),s.fillStyle=r,s.fillRect(0,0,512,512),s.fillStyle="rgba(0,0,0,.06)",s.fillRect(0,0,512,70),s.fillStyle="#1d2433",s.font=`600 ${e}px ${Ue.hand}`,s.translate(256,0),s.rotate((Math.random()-.5)*.06);let a=Tl(s,i,440);return a.forEach((o,l)=>{s.textAlign="center",s.fillText(o,0,256-(a.length-1)*e*.55+l*e*1.1+e*.35)}),Ke(n)}function El(i,t){let[e,n]=Je(768,1024);return n.fillStyle="#f4efe2",n.fillRect(0,0,768,1024),n.fillStyle="#7a1f1f",n.font=`700 30px ${Ue.sign}`,n.fillText(i,60,90),n.fillRect(60,108,648,4),n.fillStyle="#2a2622",n.font=`27px ${Ue.type}`,Tl(n,t,640).forEach((s,r)=>n.fillText(s,60,170+r*40)),n.strokeStyle="rgba(120,60,20,.35)",n.lineWidth=7,n.beginPath(),n.arc(560,880,70,0,7),n.stroke(),Ke(e)}function Nd(i,t,e){let[n,s]=Je(256,768);if(s.fillStyle="#3b3328",s.fillRect(0,0,256,768),s.fillStyle="#efe7d3",s.fillRect(18,60,220,640),s.fillStyle="#16120e",s.textAlign="center",e){let a=Math.min(130,520/i.length);s.font=`${a}px ${Ue.brush}`,[...i].forEach((o,l)=>s.fillText(o,128,90+a*.95+l*a*1.02))}s.font=`600 ${e?26:36}px ${Ue.hand}`;let r=Tl(s,t,190);return r.forEach((a,o)=>s.fillText(a,128,(e?690-(r.length-1)*28:380-r.length*20)+o*(e?28:42))),Ke(n)}function Cl(i,t,{bg:e="#f5f2ea",bar:n="#c0262d",ink:s="#1b1b1b",w:r=1024,h:a=512,size:o=70,foot:l=""}={}){let[c,h]=Je(r,a);return h.fillStyle=e,h.fillRect(0,0,r,a),h.fillStyle=n,h.fillRect(0,0,r,a*.26),h.fillStyle="#fff",h.textAlign="center",h.font=`900 ${a*.14}px ${Ue.sign}`,h.fillText(i,r/2,a*.18),h.fillStyle=s,h.font=`900 ${o}px ${Ue.sign}`,Tl(h,t,r*.86).forEach((d,u)=>h.fillText(d,r/2,a*.45+u*o*1.15)),l&&(h.font=`600 ${a*.08}px ${Ue.hand}`,h.textAlign="right",h.fillText(l,r*.95,a*.93)),Ke(c)}function Dd(i){let[t,e]=Je(512,640);e.fillStyle="#fbfaf4",e.fillRect(0,0,512,640),e.strokeStyle="rgba(70,110,200,.35)",e.lineWidth=2;for(let n=70;n<640;n+=48)e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();return e.strokeStyle="rgba(220,60,60,.4)",e.beginPath(),e.moveTo(60,0),e.lineTo(60,640),e.stroke(),i.forEach((n,s)=>{e.fillStyle=s%2?"#2b3fa0":"#202020",e.font=s%2?`700 40px ${Ue.marker}`:`600 44px ${Ue.hand}`,e.fillText(n,s%2?110:80,112+s*96)}),Ke(t)}function Ud(){let[i,t]=Je(256,128);for(let e of[72,184]){let n=t.createRadialGradient(e,64,0,e,64,46);n.addColorStop(0,"rgba(255,250,170,1)"),n.addColorStop(.35,"rgba(210,240,80,.9)"),n.addColorStop(1,"rgba(120,200,40,0)"),t.fillStyle=n,t.beginPath(),t.ellipse(e,64,46,34,0,0,7),t.fill(),t.fillStyle="#050505",t.beginPath(),t.ellipse(e+4,64,6,24,0,0,7),t.fill()}return Ke(i)}function Fd(i){let[t,e]=Je(128,192);return e.fillStyle="#121212",e.fillRect(0,0,128,192),e.fillStyle="#fafafa",e.textAlign="center",e.font=`900 150px ${Ue.sign}`,e.fillText(i,64,150),e.fillStyle="rgba(0,0,0,.6)",e.fillRect(0,94,128,4),Ke(t)}function Od(){let[i,t]=Je(512,512);t.fillStyle="#f7f5ee",t.beginPath(),t.arc(256,256,250,0,7),t.fill(),t.fillStyle="#222",t.textAlign="center",t.font=`700 52px ${Ue.sign}`;for(let e=1;e<=12;e++){let n=(12-e)/12*Math.PI*2;t.fillText(String(e),256-Math.sin(n)*190,274-Math.cos(n)*190)}return t.font=`500 28px ${Ue.hand}`,t.fillStyle="#b02020",t.fillText("detention ends: never",256,360),Ke(i)}function Bd(){let[i,t]=Je(1024,1024);t.strokeStyle="rgba(40,34,28,.85)",t.lineCap="round";for(let e=0;e<16;e++){let n=512,s=512,r=e/16*Math.PI*2+Math.random()*.3,a=6;t.beginPath(),t.moveTo(n,s);for(let o=0,l=6+Math.random()*8;o<l;o++)r+=(Math.random()-.5)*.9,n+=Math.cos(r)*34,s+=Math.sin(r)*34,t.lineWidth=a*=.86,t.lineTo(n,s);t.stroke()}return Ke(i)}function zd(i=.55){let[t,e]=Je(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(0,0,0,${i})`),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Ke(t)}function kd(){let[i,t]=Je(256,256),e=t.createRadialGradient(128,128,30,128,128,128);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),Ke(i)}function Vd(){let[i,t]=Je(4,128),e=t.createLinearGradient(0,0,0,128);return e.addColorStop(0,"rgba(0,0,0,.5)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,4,128),Ke(i)}function hh(i=""){let[t,e]=Je(512,512);for(let s=0;s<70;s++){let r=Math.random()*Math.PI*2,a=120+Math.random()*130,o=e.createLinearGradient(256,256,256+Math.cos(r)*a,256+Math.sin(r)*a);o.addColorStop(0,"rgba(15,10,6,.5)"),o.addColorStop(1,"rgba(15,10,6,0)"),e.strokeStyle=o,e.lineWidth=10+Math.random()*30,e.beginPath(),e.moveTo(256,256),e.lineTo(256+Math.cos(r)*a,256+Math.sin(r)*a),e.stroke()}let n=e.createRadialGradient(256,256,0,256,256,120);return n.addColorStop(0,"rgba(8,5,3,.95)"),n.addColorStop(.6,"rgba(25,14,6,.7)"),n.addColorStop(1,"rgba(25,14,6,0)"),e.fillStyle=n,e.fillRect(0,0,512,512),i&&(e.font=`700 54px ${Ue.marker}`,e.textAlign="center",e.fillStyle="rgba(255,230,190,.35)",e.fillText(i,258,452),e.fillStyle="rgba(40,22,10,.85)",e.fillText(i,256,450)),Ke(t)}function Gd(){let[i,t]=Je(1024,512),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#b9d3ea"),e.addColorStop(.55,"#eef3f3"),e.addColorStop(1,"#f6f7f0"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.filter="blur(8px)";for(let n=0;n<140;n++){let s=Math.random()*1024,r=330+Math.random()*200,a=25+Math.random()*70;t.fillStyle=`hsla(${80+Math.random()*30}, ${18+Math.random()*20}%, ${58+Math.random()*25}%, .9)`,t.beginPath(),t.arc(s,r-a*.3,a,0,7),t.fill()}return Ke(i)}function Hd(i,t){let[,e]=Je(64,64),n=s=>(e.clearRect(0,0,64,64),e.font=`48px ${t}`,e.fillText(s,4,52),e.getImageData(0,0,64,64).data.join());return n(i[0])!==n("\uFFFF")}var oe=9,Ie=9.6,je=3.3,Rl=new R(-1,.55,.25).normalize(),us=[-3.15,-1.05,1.05,3.15].map(i=>[i-.85,i+.85]),dn=.9,bn=2.75;function vi(i,t,e,n=1){let s=new _n(i,t,e),r=s.attributes.uv,a=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let o=0;o<24;o++){let[l,c]=a[o>>2];r.setXY(o,r.getX(o)*l/n,r.getY(o)*c/n)}return s}var hs=(i,t,e,n,s=0,r=0,a=0)=>i.applyMatrix4(new de().compose(new R(t,e,n),new Ge().setFromEuler(new An(s,r,a)),new R(1,1,1)));function Wd(i,{cjk:t}){let e=(Z,B,P={})=>new fe({map:Z,roughness:B,envMapIntensity:.6,...P}),n={floor:e(ci({planks:8,base:[96,60,36],rings:90,joints:.7,seed:2}),.38),ceiling:e(ci({planks:6,base:[140,90,52],seed:3,spread:.12,joints:0}),.75),beam:e(ci({planks:1,base:[104,66,40],seed:4,seams:!1}),.6),wains:e(ci({planks:7,base:[86,54,33],seed:5,joints:0}),.5),trim:e(ci({planks:1,base:[74,46,28],seed:6,seams:!1}),.5),plaster:e(Id(),.95),desk:e(ci({planks:2,base:[128,86,52],seed:7,spread:.06,seams:!1}),.42),chair:e(ci({planks:2,base:[104,68,40],seed:8,seams:!1}),.55),metal:new fe({color:12170926,roughness:.45,metalness:.3}),dark:new fe({color:657414,roughness:1}),glass:new fe({color:16777215,roughness:.05,metalness:.9,transparent:!0,opacity:.06,depthWrite:!1}),frosted:new hn({color:10135731})},s=(Z,B,P,At,vt,E,x,{tile:k=1,parent:W=i,cast:tt=!0,ry:ft=0}={})=>{let pt=new bt(vi(B,P,At,k),Z);return pt.position.set(vt,E,x),pt.rotation.y=ft,pt.castShadow=tt,pt.receiveShadow=!0,pt.userData.bake=W===i,W.add(pt),pt},r=(Z,B,P,At,vt,E,{ry:x=0,rx:k=0,rz:W=0,parent:tt=i,lit:ft=!0,blend:pt}={})=>{let nt=ft?new fe({map:Z,roughness:.9,transparent:!0,alphaTest:.02,polygonOffset:!0,polygonOffsetFactor:-2}):new hn({map:Z,transparent:!0,depthWrite:!1,toneMapped:!1,...pt&&{blending:pt}}),st=new bt(new qe(B,P),nt);return st.position.set(At,vt,E),st.rotation.set(k,x,W,"YXZ"),st.receiveShadow=ft,tt.add(st),st},a=(Z,B,P,At,vt,E=0,x=(Math.random()-.5)*.2,k)=>r(Al(Z,B,k),.13,.13,P,At,vt,{ry:E,rz:x}),o=(Z,B,P,At,vt,E)=>r(Al(Z,B),.12,.12,P,At,vt,{rx:-Math.PI/2,rz:E});s(n.floor,oe,.1,Ie,0,-.05,0,{tile:1.6}),s(n.floor,6.6,.16,1.5,0,.08,-Ie/2+.75,{tile:1.6}),s(n.ceiling,oe+.6,.1,Ie+.6,0,je+.05,0,{tile:1.2});for(let Z=-3;Z<=3;Z+=1.5)s(n.beam,.12,.17,Ie,Z,je-.085,0,{cast:!1});for(let Z=-3.2;Z<=3.2;Z+=1.6)s(n.beam,oe,.17,.12,0,je-.085,Z,{cast:!1});for(let Z of[-1,1]){let B=Z*Ie/2;s(n.plaster,oe,je,.2,0,je/2,B+Z*.1,{tile:2}),s(n.wains,oe,.95,.03,0,.475,B-Z*.015,{tile:1.2}),s(n.trim,oe,.06,.06,0,.98,B-Z*.03),s(n.trim,oe,.05,.04,0,2.38,B-Z*.02),s(n.trim,oe,.1,.06,0,je-.05,B-Z*.03)}s(n.plaster,.2,je,Ie,oe/2+.1,je/2,0,{tile:2}),s(n.wains,.03,1,Ie,oe/2-.015,.5,0,{tile:1.2}),s(n.trim,.06,.06,Ie,oe/2-.03,1.02,0);for(let Z of[-2.4,-.8,.8,2.4]){let B=new bt(new qe(1.45,1.35),n.frosted);B.position.set(oe/2-.012,1.75,Z),B.rotation.y=-Math.PI/2,i.add(B);for(let P of[-.725,0,.725])s(n.trim,.05,1.4,.05,oe/2-.03,1.75,Z+P,{cast:!1});for(let P of[1.08,1.75,2.42])s(n.trim,.05,.05,1.45,oe/2-.03,P,Z,{cast:!1})}for(let Z of[-3.95,3.95]){s(n.chair,.05,2,.92,oe/2-.04,1,Z,{tile:.9});let B=new bt(new qe(.5,.6),n.frosted);B.position.set(oe/2-.068,1.45,Z),B.rotation.y=-Math.PI/2,i.add(B),s(n.trim,.07,.08,1,oe/2-.04,2.04,Z)}a("Bomb squad: knock twice. Everyone else: run.","orange",oe/2-.07,1.2,3.75,-Math.PI/2);let l=[[-Ie/2,us[0][0]],...us.slice(1).map(([Z],B)=>[us[B][1],Z]),[us[3][1],Ie/2]];s(n.plaster,.25,dn,Ie,-oe/2-.125,dn/2,0,{tile:2}),s(n.wains,.03,dn,Ie,-oe/2+.015,dn/2,0,{tile:1.2}),s(n.plaster,.25,je-bn,Ie,-oe/2-.125,(je+bn)/2,0,{tile:2});for(let[Z,B]of l)s(n.trim,.3,bn-dn,B-Z,-oe/2-.12,(dn+bn)/2,(Z+B)/2);s(n.trim,.34,.05,Ie,-oe/2-.05,dn+.02,0),s(n.trim,.3,.08,Ie,-oe/2-.1,bn+.04,0);let c=[];for(let[Z,B]of us){let P=(Z+B)/2,At=new bt(new qe(B-Z,bn-dn),n.glass.clone());At.material.opacity=.16,c.push(At),At.position.set(-oe/2-.08,(dn+bn)/2,P),At.rotation.y=Math.PI/2,i.add(At);for(let vt of[-.425,0,.425])s(n.trim,.06,bn-dn,vt?.03:.06,-oe/2-.08,(dn+bn)/2,P+vt);for(let vt=1;vt<4;vt++)s(n.trim,.06,.03,B-Z,-oe/2-.08,dn+(bn-dn)*vt/4,P)}a("This window has been tested. From both sides.","blue",-oe/2-.05,1.55,1.4,Math.PI/2),r(Gd(),46,18,-16,5,0,{ry:Math.PI/2,lit:!1});let h=Vd(),d=(Z,B,P,At,vt,E,x)=>r(h,Z,B,P,At,vt,{rx:E,ry:x,lit:!1});for(let[Z,B,P,At]of[[oe,0,-Ie/2,0],[oe,0,Ie/2,Math.PI],[Ie,-oe/2,0,Math.PI/2],[Ie,oe/2,0,-Math.PI/2]]){let vt=new R(0,0,.18).applyAxisAngle(new R(0,1,0),At);d(Z,.36,B+vt.x,.003,P+vt.z,-Math.PI/2,At),d(Z,.4,B+vt.x*1.1,je-.01,P+vt.z*1.1,Math.PI/2,At+Math.PI)}let u=-Ie/2;s(n.trim,4.24,1.48,.06,0,1.55,u+.03);let f=new bt(new qe(4,1.29),new fe({map:Ld(),roughness:.82,envMapIntensity:.4}));f.position.set(0,1.55,u+.062),f.receiveShadow=!0,i.add(f),s(n.trim,4.1,.035,.11,0,.84,u+.1),[[16184554,-1.2],[15915104,-1.1],[15967160,.9]].forEach(([Z,B])=>{let P=new bt(new be(.006,.006,.07),new fe({color:Z,roughness:1}));P.position.set(B,.865,u+.1),P.rotation.z=Math.PI/2+.2,i.add(P)}),s(new fe({color:2829107,roughness:.9}),.14,.04,.05,1.5,.877,u+.1);let g=wl(""),v=r(Ke(g),1.68,.1575,1.12,1.885,u+.064,{lit:!0});v.material.alphaTest=0;let m=[["\u58CA\u3059\u306A","Rule 1: No demolishing."],["\u67F1\u306F\u53CB\u9054","The pillar is your friend."],["\u7206\u767A\u7981\u6B62","No explosions. Yes, small ones too."],["\u5ECA\u4E0B\u3092\u8D70\u308B\u306A","No running from the blast radius."]],p=[-3.35,-2.6,2.6,3.35].map((Z,B)=>{let P=new ve;P.position.set(Z,2.25,u+.04),r(Nd(...m[B],t),.36,1.08,0,-.56,0,{parent:P});for(let At of[-.02,-1.1]){let vt=new bt(new be(.012,.012,.42),n.trim);vt.rotation.z=Math.PI/2,vt.position.y=At,vt.position.z=.01,P.add(vt)}return i.add(P),P});r(Cl("SAFETY FIRST","DAYS WITHOUT AN EXPLOSION",{size:64,foot:"record: \xBD"}),.84,.42,-1.55,2.68,u+.035);let M=new ve,C=r(Fd("0"),.075,.11,0,0,0,{parent:M});M.position.set(-1.55,2.54,u+.04),i.add(M);let y=new ve;y.position.set(1.55,2.68,u+.04),r(Od(),.36,.36,0,0,.012,{parent:y});let b=new bt(new be(.19,.19,.04,40),n.metal);b.rotation.x=Math.PI/2,y.add(b);let w=(Z,B,P)=>{let At=new ve,vt=new bt(new _n(B,Z,.004),new fe({color:P}));return vt.position.y=Z*.4,At.add(vt),At.position.z=.026,y.add(At),At},L={hour:w(.09,.012,1381653),minute:w(.14,.008,1381653),second:w(.15,.003,12591136)};i.add(y),s(new fe({color:3815475,roughness:.8}),.34,.22,.12,0,2.7,u+.06),s(n.desk,.95,1.05,.55,0,.16+.525,-3.8,{tile:.9});let _=new ve,A=.16+1.05;_.position.set(.12,A,-3.78),_.rotation.y=-.35,s(new fe({color:8002068,roughness:.6}),.18,.13,.13,0,.065,0,{parent:_});for(let Z of[-.05,.05])s(new fe({color:10132120,roughness:.5}),.03,.135,.14,Z,.066,0,{parent:_});let N=new ve,D=new bt(new be(.008,.008,.16),n.metal);D.position.y=-.08,N.add(D);let O=new bt(new be(.014,.014,.17),new fe({color:1710618,roughness:.5}));O.rotation.z=Math.PI/2,N.add(O),N.position.y=.21,_.add(N),r(Al("CONFISCATED. Do NOT push. \u2014 Mgmt.","pink",40),.09,.09,0,.08,.0665,{parent:_,rz:.12}),i.add(_),r(El("TIL FOR\xC6LDRE / TO PARENTS",`K\xE6re for\xE6ldre. Deres s\xF8n har igen spr\xE6ngt kantinen. Vi har derfor ingen kantine. Vi har heller ingen skole, s\xE5 vi skriver dette fra en b\xE5d. B\xE5den er ogs\xE5 v\xE6k nu. Venlig hilsen, Rektor (sv\xF8mmer)

Dear parents: your son has once again blown up the cafeteria. The school is gone. We are writing from a boat. The boat is also gone. Regards, the Principal (swimming).`),.21,.28,-.22,A+.002,-3.75,{rx:-Math.PI/2,rz:.25});let H=bl([vi(1.2,.035,.46),...[-.56,.56].flatMap(Z=>[-.19,.19].map(B=>hs(vi(.04,.68,.04),Z,-.357,B))),hs(vi(1.1,.015,.38),0,-.11,0),hs(vi(1.14,.1,.015),0,-.065,-.2)]),U=bl([hs(vi(.38,.03,.36),0,.42,0),hs(vi(.36,.22,.022),0,.72,.17,-.08),...[-.16,.16].flatMap(Z=>[hs(vi(.03,.42,.03),Z,.21,-.15),hs(vi(.03,.84,.03),Z,.42,.16)])]),G=[];for(let Z=0;Z<5;Z++)for(let B=0;B<3;B++)G.push({x:(B-1)*2.7+(Math.random()-.5)*.1,z:-2.45+Z*1.15+(Math.random()-.5)*.08,ry:(Math.random()-.5)*.07,row:Z,col:B});let j=.7,J=new Xn(H,n.desk,G.length),ut=new Xn(U,n.chair,G.length*2),Y=new Xn(new qe(1,1),new hn({map:zd(.55),transparent:!0,depthWrite:!1}),G.length*3),it=new de,lt=new Ge,Lt=new An,Dt=new R(1,1,1),ae=0,ie=0;G.forEach((Z,B)=>{J.setMatrixAt(B,it.compose(new R(Z.x,j,Z.z),lt.setFromEuler(Lt.set(0,Z.ry,0)),Dt)),Y.setMatrixAt(ie++,it.compose(new R(Z.x,.004,Z.z),lt.setFromEuler(Lt.set(-Math.PI/2,0,0)),new R(1.6,.8,1)));for(let P of[-.3,.3]){let At=Z.row===3&&Z.col===0&&P>0,vt=.42+Math.random()*.2,E=new R(Z.x+P+(Math.random()-.5)*.08,At?.185:0,Z.z+vt+(At?.1:0));ut.setMatrixAt(ae++,it.compose(E,lt.setFromEuler(At?Lt.set(Math.PI/2,0,.6,"YXZ"):Lt.set(0,(Math.random()-.5)*.35,0)),Dt)),Y.setMatrixAt(ie++,it.compose(new R(E.x,.005,E.z),lt.setFromEuler(Lt.set(-Math.PI/2,0,0)),new R(.6,.6,1)))}});for(let Z of[J,ut])Z.castShadow=Z.receiveShadow=!0,i.add(Z);i.add(Y);let se=(Z,B)=>G.find(P=>P.row===Z&&P.col===B),et=j+.019,rt=se(2,0);r(hh("D.B. WAS HERE"),.62,.62,rt.x-.2,et,rt.z,{rx:-Math.PI/2,rz:.4}),o("Science project: 'What if\u2026?' Grade: F. (The F is also on fire.)","yellow",rt.x+.38,et+.001,rt.z+.05,-.3),[[se(4,1),"This desk has been replaced 14 times. It is new. Be gentle.","green"],[se(1,1),"LOST: one (1) eyebrow. Reward: the other one. \u2014 D.B.","yellow"],[se(3,2),"Nothing matters. Except load-bearing walls. Those REALLY matter.","blue"],[se(0,0),"Tip: the fire alarm is NOT a starting pistol.","orange"]].forEach(([Z,B,P],At)=>o(B,P,Z.x+(At%2?.3:-.3),et+.001,Z.z+.04,(Math.random()-.5)*.6));let yt=se(1,2),Ut=s(n.dark,1.02,.085,.3,yt.x,j-.067,yt.z-.02,{cast:!1});Ut.rotation.y=yt.ry;let Rt=r(Ud(),.15,.075,yt.x+.2,j-.065,yt.z+.135,{lit:!1,blend:Un});o("Homework. It bites. Do NOT feed it.","pink",yt.x-.25,et+.001,yt.z,.2),r(Dd(["u still got the big one?","under the floor","WHICH floor","ALL OF THEM"]),.2,.25,1.3,.004,1.6,{rx:-Math.PI/2,rz:.7});let Bt=Ie/2,he=new ve;for(let Z=0;Z<=18;Z++)s(n.chair,.025,1.2,.36,-3.6+Z*.4,.6,Bt-.18,{parent:he,cast:!1});for(let Z of[.01,.4,.8,1.2])s(n.chair,7.25,.025,.36,0,Z,Bt-.18,{parent:he,cast:!1});s(n.dark,7.2,1.2,.01,0,.6,Bt-.005,{parent:he,cast:!1}),i.add(he);for(let Z=0;Z<26;Z++){let B=Math.floor(Math.random()*18),P=Math.floor(Math.random()*3),At=.04+Math.random()*.12,vt=.1+Math.random()*.2;s(new fe({color:[8007471,3100538,13218426,4156230,14209732,7031434][Z%6],roughness:.8}),At,Math.min(vt,.36),.22,-3.4+B*.4+(Math.random()-.5)*.15,P*.4+.025+Math.min(vt,.36)/2,Bt-.2,{parent:he,cast:!1})}let Q=new bt(new Mn(.13,24,12,0,Math.PI*2,0,Math.PI/2),new fe({color:15909912,roughness:.35}));Q.position.set(-2.2,1.213,Bt-.2),Q.scale.y=.85,Q.castShadow=!0;let at=new bt(new be(.16,.16,.012,24),Q.material);at.position.y=.006,Q.add(at),i.add(Q),a("Property of D.B. NOT a helmet for indoor use. (It is. That is the problem.)","yellow",-2.2,1.38,Bt-.006,Math.PI,.1,36);let ct=[r(Bd(),2.2,2.2,2,2,Bt-.004,{ry:Math.PI})];ct.push(r(kd(),1.25,.85,2.03,1.98,Bt-.007,{ry:Math.PI,lit:!1,blend:Un})),ct[1].material.color.set(9071172),ct.push(r(Cl("FACILITY MANAGEMENT","THIS IS NOT A HOLE.",{bar:"#1f3d7a",size:92,h:640,foot:"please stop asking"}),1.05,.66,2,2,Bt-.012,{ry:Math.PI,rz:-.04})),r(Cl("SCIENCE FAIR","2nd PLACE: 'Volcano'",{bar:"#1d7a3a",size:74,foot:"judges were evacuated"}),.5,.25,.4,1.75,Bt-.006,{ry:Math.PI,rz:.05});let dt=new bt(new be(.075,.075,.5,24),new fe({color:11735578,roughness:.35,metalness:.1}));dt.position.set(oe/2-.18,1.25,Bt-.6),dt.castShadow=!0,i.add(dt),a("Use BEFORE. Not after.","yellow",oe/2-.01,1.62,Bt-.6,-Math.PI/2,-.08);let xt=(Z,B)=>{let P=new ve;s(n.metal,1.3,.05,.17,.62,0,0,{parent:P,cast:!1});let At=new fe({color:15921902,emissive:16054015,emissiveIntensity:.05,roughness:.3});for(let vt of[-.045,.045]){let E=new bt(new be(.016,.016,1.22,12),At);E.rotation.z=Math.PI/2,E.position.set(.62,-.04,vt),P.add(E)}return P.position.set(Z-.62,je-.72,B),i.add(P),{g:P,tubes:At}},Ft=(Z,B,P)=>{let At=new bt(new be(.003,.003,P),n.dark);At.position.set(Z,je-P/2,B),i.add(At)};for(let[Z,B]of[[-1.8,-1.6],[1.8,-1.6],[-1.8,1.6]])xt(Z,B),Ft(Z-.55,B,.72),Ft(Z+.55,B,.72);let Ht=xt(1.8,1.6);return Ft(1.8-.55,1.6,.72),Ht.g.position.x=1.8-.55,Ht.g.children.forEach(Z=>{Z.position.x-=.07}),Ht.g.rotation.z=-.62,r(hh(),1.8,1.8,2.3,je-.004,1.5,{rx:Math.PI/2,rz:1.1}),D_(i),{M:n,seats:G,desks:J,chairs:ut,glass:c,board:f,status:v,statusCanvas:g,scrolls:p,flip:M,card:C,hands:L,plunger:_,handle:N,eyes:Rt,lair:yt,crooked:Ht,hat:Q,ext:dt,notAHole:ct}}function D_(i){let t=new Map;for(let e of i.children.filter(n=>n.userData.bake))e.updateMatrixWorld(),t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(e.geometry.applyMatrix4(e.matrixWorld)),i.remove(e);for(let[e,n]of t){let s=new bt(bl(n),e);s.castShadow=s.receiveShadow=!0,i.add(s)}}function Xd(i){let t=`
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
        }`,e={sun:{value:Rl},bays:{value:us.map(([d,u])=>new De(d,dn,u,bn))},time:{value:0},haze:{value:1}},n=[],s=Rl.clone().negate();for(let[d,u]of us)for(let f=0;f<7;f++){let g=d+(u-d)*(f+.5)/7,v=bn/-s.y+.5,m=(M,C)=>new R(-oe/2,M,g).addScaledVector(s,C),p=[m(dn-.1,0),m(bn+.1,0),m(bn+.1,v),m(dn-.1,v)];[0,1,2,0,2,3].forEach(M=>n.push(...p[M].toArray()))}let r=new Ae;r.setAttribute("position",new re(n,3));let a=new bt(r,new en({uniforms:e,transparent:!0,depthWrite:!1,blending:Un,side:Dn,vertexShader:"varying vec3 vP; void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`${t} varying vec3 vP;
            void main() {
                float near = smoothstep(.3, 1.2, distance(vP, cameraPosition));
                float m = inBeam(vP) * near * step(0., vP.y);
                gl_FragColor = vec4(vec3(1., .86, .62) * m * .035 * haze, 1.);
            }`}));a.frustumCulled=!1,i.add(a);let o=2600,l=new Float32Array(o*3);for(let d=0;d<o;d++)l.set([(Math.random()-.5)*oe*.95,Math.random()*je*.9,(Math.random()-.5)*Ie*.95],d*3);let c=new Ae;c.setAttribute("position",new re(l,3));let h=new xi(c,new en({uniforms:e,transparent:!0,depthWrite:!1,blending:Un,vertexShader:`${t} varying float vB;
            void main() {
                vec3 p = position + vec3(sin(time * .11 + position.y * 3.), sin(time * .07 + position.x * 2.) * .5 - .2, cos(time * .09 + position.z * 3.)) * .25;
                p.y = mod(p.y, ${je.toFixed(1)});
                vB = .06 / haze + inBeam(p) * (.6 + .4 * haze);   // in a thick haze the shadows go dark and the beams go solid
                vec4 mv = modelViewMatrix * vec4(p, 1.);
                gl_PointSize = clamp(5. / -mv.z, 1., 6.);
                gl_Position = projectionMatrix * mv;
            }`,fragmentShader:"varying float vB; void main() { float d = length(gl_PointCoord - .5); gl_FragColor = vec4(vec3(1., .9, .7) * vB * smoothstep(.5, 0., d) * .5, 1.); }"}));return h.frustumCulled=!1,i.add(h),e}var In=(i,t=.5,e={})=>new fe({color:i,roughness:t,...e}),oa=i=>(i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i),uh=(i,t,e=24)=>new bt(new Ni(i.map(([n,s])=>new gt(n,s)),e),t);function qd(){let i=new ve;i.add(uh([[0,0],[.05,0],[.065,.12],[.075,.13],[.072,.14],[0,.14]],In(11884079,.85)));let t=new bt(new be(.062,.062,.01,16),In(3810324,1));t.position.y=.13,i.add(t);let e=In(4160051,.6);for(let n=0;n<6;n++){let s=new bt(new is(.018,.16,5),e);s.position.set(Math.cos(n)*.02,.2,Math.sin(n)*.02),s.rotation.set(Math.sin(n*2.3)*.6,0,Math.cos(n*1.7)*.6),i.add(s)}return i.userData.leaves=i.children.slice(2),oa(i)}function dh(i=2838426){let t=new ve,e=Object.assign(document.createElement("canvas"),{width:256,height:128}),n=e.getContext("2d");n.fillStyle="#f4f1ea",n.fillRect(0,0,256,128),n.strokeStyle=`#${i.toString(16).padStart(6,"0")}`,n.lineWidth=5;for(let s=0;s<8;s++)n.beginPath(),n.arc(s*32+16,64,12,0,7),n.stroke();return n.fillStyle=n.strokeStyle,n.fillRect(0,14,256,6),n.fillRect(0,108,256,6),t.add(uh([[0,0],[.045,0],[.07,.07],[.065,.14],[.03,.2],[.032,.24],[0,.24]],In(16777215,.2,{map:new En(e)}))),oa(t)}function Yd(){let i=new ve,t=In(16249834,.25),e=In(13117484,.35),n=In(14856764,.25,{metalness:.8}),s=new bt(new Mn(.075,20,14),t);s.scale.set(1,1.15,.85),s.position.y=.085,i.add(s);let r=new ve;r.position.y=.2,i.add(r),r.add(new bt(new Mn(.065,20,14),t));for(let d of[-1,1]){let u=new bt(new is(.022,.04,8),t);u.position.set(d*.038,.055,0),u.rotation.z=-d*.35,r.add(u);let f=new bt(new Mn(.008,8,6),In(1118481,.3));f.position.set(d*.024,.008,.058),f.scale.y=.4,r.add(f)}let a=new bt(new Gs(.045,.008,8,20),e);a.rotation.x=Math.PI/2,a.position.y=.155,i.add(a);let o=new bt(new Mn(.012,10,8),n);o.position.set(0,.14,.045),i.add(o);let l=new ve;l.position.set(.055,.17,.02),i.add(l);let c=new bt(new be(.016,.018,.08,10),t);c.position.y=.04,l.add(c);let h=new bt(new be(.03,.03,.008,16),n);return h.rotation.x=Math.PI/2,h.position.set(-.04,.07,.05),i.add(h),i.userData={head:r,paw:l},oa(i)}function Zd(){let i=new ve,t=In(15262420,.9),e=In(2762274,.6),n=new bt(new be(.09,.1,.06,16),t);n.position.y=.03,i.add(n);let s=new bt(new Mn(.13,20,12,0,Math.PI*2,0,Math.PI/2),t);s.scale.set(1,.6,.6),s.position.y=.06,i.add(s);let r=new ve;r.position.y=.21,i.add(r);let a=new bt(new Mn(.075,20,14),t);a.scale.set(.9,1.1,.95),r.add(a);let o=new bt(new is(.014,.04,8),t);o.rotation.x=Math.PI/2,o.position.set(0,0,.075),r.add(o);let l=new bt(new be(.008,.008,.07,8),e);l.rotation.z=Math.PI/2,l.position.set(0,-.025,.07),r.add(l);for(let c of[-1,1]){let h=new bt(new Gs(.018,.003,6,16),e);h.position.set(c*.027,.018,.072),r.add(h)}return i.userData={head:r},oa(i)}function $d(){let i=new ve;i.add(uh([[0,0],[.2,0],[.16,.05],[.08,.2],[.05,.24],[.035,.22],[0,.2]],In(9071445,.95)));let t=new bt(new be(.04,.03,.01,12),In(16734751,.6,{emissive:16726528,emissiveIntensity:.6}));t.position.y=.228,i.add(t);for(let e=0;e<5;e++){let n=new bt(new be(.008,.012,.1,6),In(14239772,.7)),s=e*1.3;n.position.set(Math.cos(s)*.075,.17,Math.sin(s)*.075),n.rotation.set(Math.sin(s)*.5,0,-Math.cos(s)*.5),i.add(n)}return oa(i)}function Jd(){let i=Object.assign(document.createElement("canvas"),{width:512,height:512}),t=i.getContext("2d");t.beginPath();for(let l=0;l<=40;l++){let c=l/40*Math.PI*2,h=170+Math.sin(l*3.7)*30+Math.random()*40;t.lineTo(256+Math.cos(c)*h,256+Math.sin(c)*h*.85)}let e=t.createRadialGradient(256,256,0,256,256,230);e.addColorStop(0,"#fffdf3"),e.addColorStop(.7,"#f4f1dc"),e.addColorStop(1,"#c9b48d"),t.fillStyle=e,t.fill(),t.lineWidth=18,t.strokeStyle="#6b5a45",t.stroke();let n=new ve;n.add(new bt(new qe(1.2,1.2),new hn({map:new En(i),transparent:!0,toneMapped:!1})));let s=Object.assign(document.createElement("canvas"),{width:128,height:128}),r=s.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,235,190,.9)"),a.addColorStop(1,"rgba(255,235,190,0)"),r.fillStyle=a,r.fillRect(0,0,128,128);let o=new bt(new qe(3.4,3.4),new hn({map:new En(s),transparent:!0,depthWrite:!1,blending:Un,toneMapped:!1}));return o.position.z=.02,n.add(o),n.userData={halo:o},n}function Kd(){let i=Object.assign(document.createElement("canvas"),{width:256,height:256}),t=i.getContext("2d"),e=t.createRadialGradient(128,128,10,128,128,110);e.addColorStop(0,"rgba(60,50,40,.85)"),e.addColorStop(.45,"rgba(120,110,95,.55)"),e.addColorStop(.62,"rgba(250,246,236,.7)"),e.addColorStop(1,"rgba(250,246,236,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),t.strokeStyle="rgba(50,42,34,.8)",t.lineCap="round";for(let n=0;n<9;n++){let s=128,r=128,a=Math.random()*7,o=4;t.beginPath(),t.moveTo(s,r);for(let l=0;l<6;l++)a+=Math.random()-.5,s+=Math.cos(a)*18,r+=Math.sin(a)*18,t.lineWidth=o*=.8,t.lineTo(s,r);t.stroke()}return new En(i)}function jd(){let i=Object.assign(document.createElement("canvas"),{width:64,height:64}),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.4)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new En(i)}var fh=(i,t)=>{let e=Object.assign(document.createElement("canvas"),{width:i,height:t});return[e,e.getContext("2d")]},ph=(i,t=!0)=>{let e=new En(i);return e.anisotropy=8,t&&(e.colorSpace=sn),e};function Qd(i,t,e,n=0){let s=new Ni(i.map(([c,h])=>new gt(c,-h)),14),r=s.attributes.position,a=Math.abs(i.at(-1)[1]-i[0][1]);for(let c=0;c<r.count;c++){let h=(r.getY(c)+i[0][1])/a;r.setX(c,r.getX(c)+Math.sin(h*Math.PI)*n)}s.rotateX(-Math.PI/2),s.computeVertexNormals();let o=ci({planks:1,base:t,seed:e,rings:70,seams:!1,size:256});o.repeat.set(.15,a);let l=new bt(s,new fe({map:o,roughness:.48,envMapIntensity:.6}));return l.castShadow=!0,l}function tf(i,t){let[e,n]=fh(512,512),[s,r]=fh(512,512),[a,o,l,c]=i;t(n,r,(f,g)=>[(f-a)/(l-a)*512,(1-(g-o)/(c-o))*512],512/(l-a));let d=ph(e),u=ph(s,!1);for(let f of[d,u])f.wrapS=f.wrapT=Pi,f.repeat.set(1/(l-a),1/(c-o)),f.offset.set(-a/(l-a),-o/(c-o));return new fe({map:d,roughnessMap:u,metalnessMap:u,roughness:1,metalness:1,envMapIntensity:1.1})}function F_(i,t,e,n=[44,44,46]){i.fillStyle=`rgb(${n})`,i.fillRect(0,0,t,e);for(let s=0;s<900;s++){let r=Math.random()*30-15;i.fillStyle=`rgba(${n.map(a=>a+r)},.5)`,i.beginPath(),i.arc(Math.random()*t,Math.random()*e,2+Math.random()*10,0,7),i.fill()}}function ef(){let i=new ve;i.add(Qd([[0,.085],[.017,.085],[.021,.07],[.016,.03],[.015,-.2],[.0145,-.44],[.016,-.54],[.014,-.545],[0,-.545]],[214,166,108],21,.012));let t=new ks;t.moveTo(-.032,-.036),t.lineTo(.032,-.036),t.lineTo(.03,.02),t.quadraticCurveTo(.036,.07,.072,.118),t.quadraticCurveTo(.002,.162,-.078,.122),t.quadraticCurveTo(-.046,.07,-.03,.02),t.lineTo(-.032,-.036);let e=.026,n=new Or(t,{depth:e,bevelEnabled:!0,bevelThickness:.003,bevelSize:.0025,bevelSegments:2,curveSegments:18});n.translate(0,0,-e/2);let s=n.attributes.position;for(let l=0;l<s.count;l++){let c=s.getY(l),h=Math.min(1,Math.max(0,(c-.02)/.13));s.setZ(l,s.getZ(l)*(1-.9*h*h*(3-2*h)))}n.applyMatrix4(new de().makeBasis(new R(0,0,-1),new R(0,-1,0),new R(-1,0,0))),n.computeVertexNormals();let r=tf([-.1,-.06,.1,.18],(l,c,h,d)=>{l.fillStyle="#7a1610",l.fillRect(0,0,512,512);for(let m=0;m<300;m++)l.fillStyle=`rgba(40,8,5,${Math.random()*.25})`,l.beginPath(),l.arc(Math.random()*512,Math.random()*512,Math.random()*6,0,7),l.fill();c.fillStyle="rgb(0,110,0)",c.fillRect(0,0,512,512);let[,u]=h(0,.088),f=(m,p)=>{m.fillStyle=p,m.beginPath(),m.moveTo(0,u);for(let M=0;M<=512;M+=16)m.lineTo(M,u+Math.sin(M*.05)*6+Math.random()*3);m.lineTo(512,0),m.lineTo(0,0),m.fill()};f(l,"#c9ccd0"),f(c,"rgb(0,60,255)");for(let m=0;m<140;m++){let p=Math.random()*512,M=u-10-Math.random()*200;l.strokeStyle=`rgba(255,255,255,${Math.random()*.35})`,l.lineWidth=1,l.beginPath(),l.moveTo(p,M),l.lineTo(p+30+Math.random()*40,M+4),l.stroke()}let[g,v]=h(0,.035);l.strokeStyle="rgba(30,8,6,.8)",l.lineWidth=.002*d,l.beginPath(),l.arc(g,v,.009*d,0,7),l.stroke(),l.beginPath(),l.moveTo(g-.005*d,v),l.lineTo(g+.005*d,v),l.moveTo(g,v-.005*d),l.lineTo(g,v+.005*d),l.stroke(),l.strokeStyle="rgba(20,6,4,.5)",l.lineWidth=3;for(let m=0;m<12;m++){let[p,M]=h((Math.random()-.5)*.06,-.03+Math.random()*.01);l.beginPath(),l.arc(p,M,2+Math.random()*5,0,7),l.fillStyle="#5a5a5c",l.fill()}}),a=new bt(n,r);a.position.z=-.5,a.castShadow=!0,i.add(a);let o=new bt(new be(.0015,.0015,.03,4),new fe({color:3815994,metalness:.9,roughness:.4}));return o.rotation.x=Math.PI/2,o.position.set(0,.0385,-.5),i.add(o),i.userData={tip:new R(0,-.13,-.5),band:sf(i,.0175,-.075)},i}function nf(){let i=new ve;i.add(Qd([[0,.07],[.018,.07],[.021,.055],[.018,0],[.016,-.25],[.0155,-.375],[0,-.375]],[226,190,140],22));let t=.034,e=.18,n=tf([-.12,-.12,.12,.12],(c,h)=>{F_(c,512,512,[86,88,92]),h.fillStyle="rgb(0,120,230)",h.fillRect(0,0,512,512);for(let d=0;d<260;d++)h.fillStyle=`rgba(0,${80+Math.random()*100},230,.6)`,h.beginPath(),h.arc(Math.random()*512,Math.random()*512,3+Math.random()*12,0,7),h.fill()}),s=new bt(new Ni([[0,-e/2],[t*.82,-e/2],[t,-e/2+.008],[t*.97,0],[t,e/2-.008],[t*.82,e/2],[0,e/2]].map(([c,h])=>new gt(c,h)),8),n);s.position.z=-.355,s.castShadow=!0,i.add(s);let r=new fe({color:14277855,metalness:1,roughness:.16});for(let c of[-e/2-5e-4,e/2+5e-4]){let h=new bt(new be(t*.8,t*.8,.001,8),r);h.position.set(0,c,-.355),i.add(h)}let a=new fe({color:1315860,metalness:.6,roughness:.6});for(let c of[-e/2+.024,e/2-.024]){let h=new bt(new be(t*1.004,t*1.004,.003,8,1,!0),a);h.position.set(0,c,-.355),i.add(h)}let o=new fe({color:12567495,metalness:1,roughness:.25});for(let c of[-e/2+.004,e/2-.004]){let h=new bt(new be(t*.93,t*.93,.0075,8,1,!0),o);h.position.set(0,c,-.355),i.add(h)}let l=new bt(new be(.0205,.0205,.012,14,1,!0),new fe({color:11570519,metalness:.9,roughness:.35}));return l.rotation.x=Math.PI/2,l.position.z=-.318,i.add(l),i.userData={tip:new R(0,-e/2-.005,-.355),band:sf(i,.0185,-.07)},i}function sf(i,t,e){let[n,s]=fh(512,96),r=ph(n),a=new bt(new be(t,t,.04,20,1,!0),new fe({map:r,roughness:.85}));return a.rotation.x=Math.PI/2,a.position.z=e,i.add(a),(o,l)=>{s.fillStyle=l?"#f2c418":"#e6dcc0",s.fillRect(0,0,512,96),s.fillStyle="rgba(120,100,60,.25)",s.fillRect(0,0,512,6),s.fillRect(0,90,512,6),s.fillStyle=l?"#b3121a":"#1d2433",s.font=`72px ${Ue.marker}`,s.textAlign="center";for(let c of[128,384])s.fillText(o,c,76);r.needsUpdate=!0}}var O_=90,rf=.5,B_={axe:{wood:1,drywall:1,glass:.45,ceramic:.45,plaster:.5,metal:.15,slate:.1},hammer:{wood:.5,drywall:.6,glass:1,ceramic:1,plaster:1,metal:.15,slate:.1}},z_=["wood","glass","ceramic","plaster","drywall","metal"],af={glass:"GLASS PREFERS A HAMMER. SO DO I.",ceramic:"POTTERY WANTS THE HAMMER.",plaster:"PLASTER WANTS THE HAMMER. TRUST ME.",wood:"WOOD WANTS THE AXE.",drywall:"DRYWALL WANTS THE AXE."},k_={desk:["THAT DESK WAS NEW.","IT WAS REPLACED 14 TIMES. NOW 15.","SPLINTERS. EVERYWHERE."],chair:["SIT DOWN. OH.","THAT CHAIR HAD A FAMILY."],window:["THAT WINDOW HAS NOW BEEN TESTED. FROM BOTH SIDES.","FRESH AIR!","VENTILATION: IMPROVED."],pot:["THE PLANT IS FINE. THE PLANT IS NOT FINE.","IT WAS A CACTUS. EMOTIONALLY."],vase:["A VASE. FROM A TRIP. NOBODY REMEMBERS THE TRIP.","MING DYNASTY. (IT WAS NOT.)"],cat:["THERE GOES OUR LUCK."],bust:["THE PRINCIPAL WILL HEAR ABOUT THIS. HE IS IN PIECES."],volcano:["STILL 2ND PLACE."],drywall:["OK. IT WAS A HOLE."],ext:["USE BEFORE. NOT AFTER."]},of={wall:"WALLS HOLD UP THE CEILING. REMEMBER?",board:"NO.",hat:"IT IS A HELMET. THAT IS THE PROBLEM."},lf=["NO.","STILL NO.","I AM SLATE. YOU ARE NOT.","THE BOARD IS NOT PART OF THE LESSON.","DETENTION."];function cf({scene:i,renderer:t,rig:e,camera:n,room:s,audio:r,say:a,flip:o}){let l=[{name:"axe",mesh:ef()},{name:"hammer",mesh:nf()}],c=[0,1].map(T=>t.xr.getControllerGrip(T));for(let T of l)T.prev=null,T.vel=new R,T.mesh.visible=!1,T.mesh.traverse(V=>{V.material?.metalness>0&&(V.material.envMap=i.environment,V.material.envMapIntensity=.9)});let h={tool:0,hand:null},d=()=>Math.max(0,[...t.xr.getSession()?.inputSources??[]].findIndex(T=>T.handedness==="right"));function u(T,V=h.hand??d()){if(l.some(I=>I.lodged))return;for(let I of l)I.mesh.removeFromParent();let $=l[T];$.grip=c[V],$.hand=V,$.grip.add($.mesh),$.mesh.position.set(0,0,0),$.mesh.quaternion.identity(),$.mesh.rotation.x=rf,$.prev=null,$.vel.set(0,0,0),$.follow=null,$.settle=performance.now()/1e3+.3,h.tool=T,h.hand=V,B.phase!=="intro"&&(ct.swap(),P(V,.4,30),vt(.25,I=>$.mesh.scale.setScalar(.5+.5*I+Math.sin(I*Math.PI)*.12)))}[0,1].forEach(T=>t.xr.getController(T).addEventListener("squeezestart",()=>{B.phase!=="intro"&&u(1-h.tool,T)}));let f=()=>l[h.tool],g=4.8,v=1.2125,m=(T,V,$,I,Ct=0)=>(T.position.set(V,$,I),T.rotation.y=Ct,i.add(T),T),p=[...[-2.1,0,2.1].map(T=>({kind:"pot",material:"ceramic",hp:.35,object:m(qd(),-4.42,.945,T),half:[.09,.14,.09],up:.12,value:350,colors:[11884079,10110502,3810324]})),{kind:"vase",material:"ceramic",hp:.3,object:m(dh(),-3,v,g-.2),half:[.09,.14,.09],up:.12,value:400,colors:[16052714,2838426]},{kind:"vase",material:"ceramic",hp:.3,object:m(dh(10103595),3.15,v,g-.2),half:[.09,.14,.09],up:.12,value:400,colors:[16052714,10103595]},{kind:"cat",material:"ceramic",hp:.3,object:m(Yd(),1.2,v,g-.22,Math.PI),half:[.1,.15,.1],up:.14,value:900,colors:[16249834,13117484,14856764]},{kind:"bust",material:"plaster",hp:.9,object:m(Zd(),-.9,v,g-.2,Math.PI),half:[.14,.17,.12],up:.16,value:1200,colors:[15262420,14012095]},{kind:"volcano",material:"plaster",hp:.7,object:m($d(),.4,v,g-.22),half:[.2,.13,.2],up:.12,value:800,colors:[9071445,14239772]}],M=[],C=new de,y=new de().makeScale(0,0,0);for(let T of p)M.push({...T,center:T.object.position.clone().setY(T.object.position.y+T.up),half:new R(...T.half)});M.push({kind:"drywall",material:"drywall",hp:1.1,center:new R(2,2,g-.06),half:new R(.55,.36,.12),value:1500,colors:[15921128,14275524,2047354]}),s.glass.forEach(T=>M.push({kind:"window",material:"glass",hp:.2,pane:T,center:T.position.clone().setX(T.position.x+.1),half:new R(.25,.95,.85),value:600,colors:[14676991]})),s.seats.forEach((T,V)=>M.push({kind:"desk",material:"wood",hp:1.4,mesh:s.desks,index:V,center:new R(T.x,.55,T.z),half:new R(.62,.25,.26),value:400,colors:[10119742,8410415]}));for(let T=0;T<s.chairs.count;T++){s.chairs.getMatrixAt(T,C);let V=new R().setFromMatrixPosition(C);M.push({kind:"chair",material:"wood",hp:.7,mesh:s.chairs,index:T,center:new R(V.x,.45,V.z),half:new R(.22,.45,.22),value:150,colors:[8345138,7030055]})}M.push({kind:"ext",material:"metal",hp:.25,center:s.ext.position.clone(),half:new R(.11,.28,.11),value:700,colors:[11735578]}),M.push({kind:"hat",material:"metal",hp:1/0,center:s.hat.position.clone().setY(s.hat.position.y+.06),half:new R(.17,.12,.17)}),M.push({kind:"board",material:"slate",hp:1/0,center:new R(0,1.55,-4.74),half:new R(2.05,.68,.12)});for(let[T,V,$,I]of[[0,g,4.5,-1],[-3.35,-g,1.15,1],[3.35,-g,1.15,1]])M.push({kind:"wall",material:"plaster",hp:1/0,center:new R(T,2.25,V),half:new R($,1.05,.14),normal:new R(0,0,I)});for(let T of M)T.max=T.hp,T.mesh&&(T.mesh.getMatrixAt(T.index,C),T.matrix=C.clone());let b=m(Jd(),2,2,g-.008,Math.PI);b.visible=!1;let w=new bt(new qe(2.6,3.4),b.userData.halo.material.clone());w.material.opacity=0,w.material.color.set(16756848),w.rotation.x=-Math.PI/2,w.position.set(2,.008,g-1.7),i.add(w);let L=s.notAHole[2].position.clone(),_=s.notAHole[2].rotation.clone(),A=s.ext.rotation.clone(),N=s.hat.position.clone(),D=600,O=(T,V={})=>new fe({color:16777215,roughness:T,...V}),H={wood:G(new _n(1,1,1),O(.65)),glass:G(new _n(1,1,1),O(.04,{metalness:.9,transparent:!0,opacity:.75})),shard:G(new _n(1,1,1),O(.3)),lump:G(new Br(.5,0),O(.95,{flatShading:!0}))},U={wood:"wood",glass:"glass",ceramic:"shard",drywall:"shard",plaster:"lump",metal:"shard"};function G(T,V){let $=new Xn(T,V,D);$.castShadow=!0,$.frustumCulled=!1;for(let I=0;I<D;I++)$.setMatrixAt(I,y),$.setColorAt(I,new ee(16777215));return i.add($),{mesh:$,next:0,parts:Array.from({length:D},()=>({alive:!1,p:new R,v:new R,q:new Ge,w:new R,s:new R}))}}let j=new Ge,J=new ze,ut=new ee,Y=()=>Math.random()-.5;function it(T,V,$,I,Ct,wt,Zt=[16777215],Jt=wt?.4:.06){let Qt=U[T],_e=H[Qt];for(let Ce=0;Ce<I;Ce++){let ge=_e.next,xe=_e.parts[ge];_e.next=(_e.next+1)%D,xe.alive=!0,xe.rest=0,xe.material=T,xe.p.copy(V).add(new R(Y(),Y(),Y()).multiplyScalar(Jt)),xe.v.copy($).multiplyScalar(Ct*(.4+Math.random())).add(new R(Y()*2,Math.random()*2,Y()*2).multiplyScalar(.5+Ct*.35)),xe.w.set(Y(),Y(),Y()).multiplyScalar(T==="plaster"?10:22),xe.q.random();let Le=Math.random();T==="wood"?xe.s.set(.015+Le*(wt?.45:.025),.015+Math.random()*.02,wt?.05+Math.random()*.12:.08+Math.random()*.1):T==="glass"?xe.s.set(.03+Le*.13,.003,.03+Math.random()*.16):T==="ceramic"?xe.s.set(.015+Le*.05,.006,.015+Math.random()*.05):T==="drywall"?xe.s.set(.04+Le*(wt?.2:.06),.013,.04+Math.random()*(wt?.18:.05)):T==="plaster"?xe.s.setScalar(.015+Le*Le*(wt?.11:.04)):xe.s.set(.01,.01,.01),_e.mesh.setColorAt(ge,ut.set(Zt[Ce%Zt.length]).offsetHSL(0,0,Y()*.08))}_e.mesh.instanceColor.needsUpdate=!0}function lt(T,V){let $=new Ae,I=new Float32Array(T*3),Ct=new Float32Array(T*3),wt=new Float32Array(T),Zt=new Float32Array(T);$.setAttribute("position",new re(I,3)),$.setAttribute("color",new re(Ct,3)),$.setAttribute("alpha",new re(wt,1)),$.setAttribute("size",new re(Zt,1));let Jt=new xi($,new en({uniforms:{map:{value:jd()},scale:{value:900}},transparent:!0,depthWrite:!1,blending:V,vertexColors:!0,vertexShader:"attribute float alpha; attribute float size; uniform float scale; varying float vA; varying vec3 vC; void main() { vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying float vA; varying vec3 vC; void main() { gl_FragColor = vec4(vC, vA * texture2D(map, gl_PointCoord).a); }"}));return Jt.frustumCulled=!1,i.add(Jt),{g:$,pos:I,col:Ct,a:wt,size:Zt,n:T,next:0,vel:new Float32Array(T*3),life:new Float32Array(T),max:new Float32Array(T),grow:new Float32Array(T),peak:new Float32Array(T),drag:new Float32Array(T)}}let Lt=lt(900,Bi),Dt=lt(300,Un);function ae(T,V,$,{color:I=14209732,spread:Ct=.1,speed:wt=.4,size:Zt=.12,life:Jt=2.5,up:Qt=.2,grow:_e=.5,alpha:Ce=.45,dir:ge=null,drag:xe=1.6}){for(let Le=0;Le<$;Le++){let Xe=T.next;T.next=(T.next+1)%T.n,T.pos.set([V.x+Y()*Ct,V.y+Y()*Ct,V.z+Y()*Ct],Xe*3);let ar=new R(Y(),Y()+Qt,Y()).normalize().multiplyScalar(wt*(.3+Math.random()));ge&&ar.addScaledVector(ge,wt*(.5+Math.random())),T.vel.set(ar.toArray(),Xe*3),T.col.set(ut.set(I).offsetHSL(0,0,Y()*.06).toArray(),Xe*3),T.life[Xe]=T.max[Xe]=Jt*(.6+Math.random()*.6),T.size[Xe]=Zt*(.5+Math.random()),T.grow[Xe]=_e,T.peak[Xe]=Ce,T.drag[Xe]=xe}}function ie(T,V,$){for(let I=0;I<T.n;I++){if(T.life[I]<=0){T.a[I]=0;continue}T.life[I]-=V;let Ct=I*3,wt=T.life[I]/T.max[I],Zt=Math.exp(-V*T.drag[I]);T.vel[Ct]*=Zt,T.vel[Ct+2]*=Zt,T.vel[Ct+1]=T.vel[Ct+1]*Zt-$*V,T.pos[Ct]+=T.vel[Ct]*V,T.pos[Ct+1]=Math.max(.02,T.pos[Ct+1]+T.vel[Ct+1]*V),T.pos[Ct+2]+=T.vel[Ct+2]*V,T.size[I]*=1+T.grow[I]*V,T.a[I]=T.peak[I]*Math.min(1,(1-wt)*8)*wt}for(let I of["position","color","alpha","size"])T.g.attributes[I].needsUpdate=!0}let se=new fe({map:Kd(),transparent:!0,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),et=Array.from({length:40},()=>{let T=new bt(new qe(1,1),se);return T.visible=!1,T.receiveShadow=!0,i.add(T),T}),rt=0;function yt(T,V,$){let I=et[rt++%et.length];I.visible=!0,I.position.copy(T).setZ(V.z>0?-g+.006:g-.006),I.rotation.set(0,V.z>0?0:Math.PI,Math.random()*6),I.scale.setScalar(.12+$*.22)}let Ut=()=>r()?.ctx,Rt=null,Bt=null,he=T=>(Bt||(Bt=new DynamicsCompressorNode(T,{threshold:-14,knee:8,ratio:6,attack:.003,release:.2}),Bt.connect(T.destination)),Bt);function Q(T,{dur:V,type:$,freq:I,to:Ct=I,gain:wt,q:Zt=1,delay:Jt=0}){if(!Rt){Rt=T.createBuffer(1,T.sampleRate,T.sampleRate);let xe=Rt.getChannelData(0);for(let Le=0;Le<xe.length;Le++)xe[Le]=Math.random()*2-1}let Qt=T.currentTime+Jt,_e=new AudioBufferSourceNode(T,{buffer:Rt,loop:!0}),Ce=new BiquadFilterNode(T,{type:$,frequency:I,Q:Zt}),ge=new GainNode(T,{gain:wt});Ce.frequency.exponentialRampToValueAtTime(Ct,Qt+V),ge.gain.setValueAtTime(wt,Qt),ge.gain.exponentialRampToValueAtTime(1e-4,Qt+V),_e.connect(Ce).connect(ge).connect(he(T)),_e.start(Qt,Math.random()*.5),_e.stop(Qt+V+.05)}function at(T,V,$,I,Ct=0,wt="sine",Zt=V){let Jt=T.currentTime+Ct,Qt=new OscillatorNode(T,{type:wt,frequency:V}),_e=new GainNode(T,{gain:I});Zt!==V&&Qt.frequency.exponentialRampToValueAtTime(Zt,Jt+$),_e.gain.setValueAtTime(I,Jt),_e.gain.exponentialRampToValueAtTime(1e-4,Jt+$),Qt.connect(_e).connect(he(T)),Qt.start(Jt),Qt.stop(Jt+$+.05)}let ct={wood(T,V){let $=Ut();if($){at($,150+Math.random()*40,.18,.5*T);for(let I=0;I<(V?12:3);I++)Q($,{dur:.05,type:"bandpass",freq:700+Math.random()*1600,gain:.5*T,q:3,delay:Math.random()*(V?.3:.05)});V&&Q($,{dur:.6,type:"lowpass",freq:900,to:120,gain:.6})}},glass(T,V){let $=Ut();if($){Q($,{dur:V?.5:.12,type:"highpass",freq:4e3,gain:.5*T});for(let I=0;I<(V?12:3);I++)at($,2200+Math.random()*4800,.25+Math.random()*.5,.08,Math.random()*(V?.5:.05))}},ceramic(T,V){let $=Ut();if($&&(Q($,{dur:.08,type:"bandpass",freq:3200,gain:.55*T,q:2}),at($,1800+Math.random()*600,.12,.18*T,0,"triangle"),V))for(let I=0;I<16;I++)at($,3500+Math.random()*5e3,.06+Math.random()*.1,.06,Math.random()*.35)},plaster(T,V){let $=Ut();if($){at($,75,.25,.7*T,0,"sine",50),Q($,{dur:.3,type:"lowpass",freq:500,to:150,gain:.6*T});for(let I=0;I<(V?10:3);I++)Q($,{dur:.06,type:"lowpass",freq:900+Math.random()*600,gain:.2,delay:.05+Math.random()*(V?.7:.25)})}},drywall(T,V){let $=Ut();if($&&(at($,95,.2,.6*T,0,"sine",70),Q($,{dur:.14,type:"bandpass",freq:1500,to:900,gain:.6*T,q:1.5}),V)){Q($,{dur:1.2,type:"lowpass",freq:700,to:100,gain:.7});for(let I=0;I<8;I++)Q($,{dur:.08,type:"bandpass",freq:1200+Math.random()*800,gain:.3,delay:Math.random()*.5})}},metal(T){let V=Ut();if(!V)return;let $=380+Math.random()*80;[1,2.76,5.4,8.93].forEach((I,Ct)=>at(V,$*I,.9/(Ct+1),.22*T/(Ct+1))),Q(V,{dur:.04,type:"highpass",freq:3e3,gain:.4*T})},slate(T){let V=Ut();V&&(at(V,110,.15,.6*T),Q(V,{dur:.25,type:"lowpass",freq:400,gain:.3*T}))},bonk(){let T=Ut();T&&(at(T,700,.18,.35,0,"sine",180),at(T,160,.6,.2,.05,"triangle",240))},squeak(){let T=Ut();T&&at(T,1300,.12,.08,0,"sine",2100)},powder(){let T=Ut();T&&(Q(T,{dur:2.6,type:"bandpass",freq:2500,to:1200,gain:.45,q:.8}),at(T,90,.4,.4,0,"sine",40))},erupt(){let T=Ut();if(T){for(let V=0;V<10;V++)at(T,120+Math.random()*200,.15,.2,V*.08+Math.random()*.04,"sine",400);Q(T,{dur:1.2,type:"lowpass",freq:600,gain:.3})}},lodge(){let T=Ut();if(!T)return;at(T,115,.35,.7),Q(T,{dur:.12,type:"bandpass",freq:500,gain:.6,q:2});let V=T.currentTime,$=new OscillatorNode(T,{type:"sawtooth",frequency:105}),I=new OscillatorNode(T,{frequency:9}),Ct=new GainNode(T,{gain:12}),wt=new BiquadFilterNode(T,{type:"lowpass",frequency:700}),Zt=new GainNode(T,{gain:.16});Zt.gain.setValueAtTime(.16,V),Zt.gain.exponentialRampToValueAtTime(1e-4,V+.7),I.connect(Ct).connect($.frequency),$.connect(wt).connect(Zt).connect(he(T)),$.start(V),I.start(V),$.stop(V+.75),I.stop(V+.75)},yank(){let T=Ut();T&&(Q(T,{dur:.22,type:"bandpass",freq:1400,to:380,gain:.5,q:4}),at(T,260,.12,.4,.15))},glance(){let T=Ut();T&&Q(T,{dur:.18,type:"bandpass",freq:2600,to:1500,gain:.3,q:6})},tink(T){let V=Ut();V&&at(V,(T==="glass"?3e3:2200)+Math.random()*4e3,.1,.025)},swap(){let T=Ut();T&&(Q(T,{dur:.16,type:"bandpass",freq:800,to:2400,gain:.25,q:2}),at(T,420,.08,.15,.12,"triangle"))},bell(T){let V=Ut();V&&T.forEach(($,I)=>{at(V,$,1.6,.25,I*.55),at(V,$*2.76,.8,.05,I*.55)})}},dt=[329.6,261.6,293.7,196],xt=(T,V)=>{for(let $ of l)$.mesh.userData.band(T,V)};xt("1:30");let Ft=new bt(new qe(.42,.56),new hn({transparent:!0,opacity:0,side:2,toneMapped:!1}));Ft.visible=!1,i.add(Ft);function Ht(T,V,$){let I=B.hits?Math.round(B.right/B.hits*100):0,Ct=T>3e4?"Your child has demolished the classroom, the corridor and, we suspect, the concept of school.":T>15e3?"Shows real promise. The school does not.":T>5e3?"Tries hard. Breaks things. Could break more things.":"Your child was gentle with the furniture. We are worried.";Ft.material.map?.dispose(),Ft.material.map=El("REPORT CARD: DEMOLITION",`Score: ${T}
Materials broken: ${V} of 6
Things destroyed: ${B.broken}
Right tool for the job: ${I}%
Follow-through: ${B.followThroughs} swings
Best combo: x${B.bestCombo}

GRADE: ${$.split(".")[0]}

Teacher's comment: ${Ct}

Swing hard to stay after class (again).`),Ft.material.needsUpdate=!0;let wt=n.getWorldPosition(new R),Zt=n.getWorldDirection(new R).setY(0).normalize();Ft.position.copy(wt).addScaledVector(Zt,.75).setY(wt.y-.12),Ft.lookAt(wt.x,Ft.position.y,wt.z),Ft.visible=!0;let Jt=Ft.position.y;vt(1.2,Qt=>{Ft.material.opacity=Qt,Ft.position.y=Jt-.15*(1-Qt)**2})}let Z=()=>({bestCombo:0,slowUntil:0,dust:0,score:0,combo:0,lastBreak:-9,broken:0,materials:new Set,right:0,hits:0,lodges:0,followThroughs:0,wrong:{},said:new Set,boardHits:0,powderUntil:0}),B={phase:"intro",endsAt:0,...Z()},P=(T,V,$)=>t.xr.getSession()?.inputSources[T]?.gamepad?.hapticActuators?.[0]?.pulse?.(V,$),At=[],vt=(T,V,$)=>At.push({t:0,dur:T,run:V,done:$}),E=new R,x=new R,k=new Ge;function W(T,V){let $=V.clone().sub(T.center),I=T.half,Ct=Math.abs($.x)/I.x,wt=Math.abs($.y)/I.y,Zt=Math.abs($.z)/I.z;return Ct>wt&&Ct>Zt?x.set(Math.sign($.x),0,0):wt>Zt?x.set(0,Math.sign($.y),0):x.set(0,0,Math.sign($.z))}function tt(T,V,$,I,Ct,wt,Zt,Jt){if(Jt-(I.lastHit??-9)<.2)return!1;I.lastHit=Jt,T.mesh.getWorldQuaternion(k);let Qt=E.set(0,-1,0).applyQuaternion(k).dot(Zt),_e=Math.max(0,-(I.normal??W(I,T.entry??Ct)).dot(Zt)),Ce=T.name==="axe"?.25+.75*Math.max(0,Qt)**1.5:.6+.4*Math.abs(Qt),ge=Math.min(1.3,(wt-.8)/5)*Ce*(.35+.65*_e),xe=I.material==="glass"||I.material==="ceramic";if(_e<.3&&!xe)return ct.glance(),P(V,.2,25),B.score+=5,!0;let Le=B_[T.name][I.material];if(B.hits++,Le===1?B.right++:Le<.9&&af[I.material]&&(B.wrong[I.material]=(B.wrong[I.material]??0)+1)>=3&&!B.said.has(I.material)&&(B.said.add(I.material),a(af[I.material])),P(V,Math.min(1,.3+ge),20+ge*60),I.hp===1/0)return ft(T,V,I,Ct,Zt,ge,Jt),!0;I.hp-=ge*Le,T.follow={target:I,at:Jt+.1,speed:wt,e:ge,affinity:Le,dir:Zt.clone(),point:Ct.clone()},T.name==="axe"&&(I.kind==="desk"||I.kind==="drywall")&&I.hp>0&&Qt>.55&&_e>.5&&ge>.2&&st(T,V,I,Ct,Zt,Jt);let Xe=I.hp<=0;return ct[I.material](Math.max(.3,ge),Xe),it(I.material,Ct,Zt,Math.round(4+ge*14),wt*.35,!1,I.colors),(I.material==="plaster"||I.material==="drywall")&&ae(Lt,Ct,6+ge*14,{color:14999248,speed:.3+ge*.6,size:.12,dir:Zt}),I.material==="metal"&&ae(Dt,Ct,10+ge*20,{color:16756816,speed:2+ge*3,size:.012,life:.4,alpha:1,grow:0,drag:.5,dir:Zt}),I.mesh&&!Xe&&(I.shove=Zt.clone().setY(0).multiplyScalar(.04*ge)),I.object&&!Xe&&(I.wobble=1),Xe?(pt(T,I,Ct,Zt,wt,ge,Le,Jt),!0):(B.score+=Math.round(10*ge*(Le===1?2:1)),!0)}function ft(T,V,$,I,Ct,wt,Zt){if(of[$.kind]&&!B.said.has($.kind)&&wt>.15&&(B.said.add($.kind),a(of[$.kind])),$.kind==="wall")ct.plaster(Math.max(.3,wt),!1),wt>.12&&yt(I,$.normal,wt),it("plaster",I,$.normal.clone().multiplyScalar(-1).add(Ct).normalize(),Math.round(3+wt*10),1+wt*2,!1,[15262420,14012095]),ae(Lt,I,8+wt*16,{color:15262420,speed:.3+wt*.5,size:.14,dir:$.normal}),B.score+=Math.round(15*wt),B.dust=Math.min(2.6,B.dust+.05*wt),B.materials.add("plaster");else if($.kind==="board")ct.slate(Math.max(.3,wt)),ae(Lt,I,14,{color:15921898,speed:.3,size:.08,dir:new R(0,0,1)}),a(lf[Math.min(lf.length-1,B.boardHits++)]);else if($.kind==="hat"){ct.bonk(),ct.metal(.4);let Jt=s.hat,Qt=N.y;vt(.6,_e=>{Jt.position.y=Qt+Math.sin(_e*Math.PI)*.25,Jt.rotation.y+=.4},()=>{Jt.position.copy(N)}),B.score+=50,B.materials.add("metal")}}function pt(T,V,$,I,Ct,wt,Zt,Jt){V.mesh&&(V.mesh.setMatrixAt(V.index,y),V.mesh.instanceMatrix.needsUpdate=!0),V.pane&&(V.pane.visible=!1),V.object&&(V.object.visible=!1),t.shadowMap.needsUpdate=!0;for(let xe of l)xe.lodged?.target===V&&Mt(xe,!1);let Qt={wood:14,glass:40,ceramic:45,plaster:30,drywall:26,metal:0}[V.material];if(it(V.material,V.center,I,Qt,Ct*.5,!0,V.colors,V.kind==="desk"||V.kind==="window"?.45:.12),V.kind==="pot"&&it("plaster",V.center,I,18,Ct*.3,!1,[3810324,4861978,4160051]),(V.material==="plaster"||V.material==="drywall")&&(ae(Lt,V.center,70,{color:14999248,spread:.3,speed:.6,size:.22,life:4,dir:I}),B.dust+=.4),V.kind==="volcano"){ct.erupt();for(let xe=0;xe<6;xe++)setTimeout(()=>ae(Lt,V.center.clone().setY(V.center.y+.1),12,{color:xe%2?16738858:16770720,speed:1.6,up:3,size:.1,life:2,dir:new R(0,1,0)}),xe*90)}if(V.kind==="drywall"&&nt(),V.kind==="ext"){ct.powder(),B.powderUntil=Jt+2.6;let xe=s.ext;vt(.5,Le=>{xe.rotation.z=A.z+Le*.5,xe.rotation.x=A.x-Le*.2})}B.combo=Jt-B.lastBreak<2.5?B.combo+1:1,B.bestCombo=Math.max(B.bestCombo,B.combo),B.lastBreak=Jt,B.broken++,B.materials.add(V.material),B.dust=Math.min(2.6,B.dust+(V.kind==="chair"?.12:.3));let _e=Math.round(V.value*(Zt===1?1.5:1)*Math.min(8,B.combo)*(.6+wt*.5));B.score+=_e,o();let Ce=k_[V.kind]??[""],ge=!["desk","chair","window"].includes(V.kind);a(ge?Ce[Math.floor(Math.random()*Ce.length)]:B.combo>2?`COMBO x${B.combo}! +${_e}`:Math.random()<.4?Ce[Math.floor(Math.random()*Ce.length)]:`+${_e}`)}function nt(){let[T,V,$]=s.notAHole;T.visible=V.visible=!1,b.visible=!0,vt(1.1,I=>{$.position.set(L.x,L.y-(L.y-.05)*I*I,L.z-.25*I),$.rotation.set(-Math.PI/2*I*I,_.y,_.z+I*.6,"YXZ")}),vt(1.5,I=>{w.material.opacity=.55*I,b.userData.halo.material.opacity=.4+.6*I})}function st(T,V,$,I,Ct,wt){let Zt=new ve;Zt.position.copy(I),Zt.quaternion.copy(k),i.add(Zt),Zt.updateMatrixWorld(),Zt.attach(T.mesh),Zt.position.addScaledVector(Ct,.035),T.lodged={target:$,pivot:Zt,at:wt,hand:T.grip.getWorldPosition(new R)},T.follow=null,ct.lodge(),P(V,1,140),B.lodges++||a("IT IS STUCK. PULL.")}function Mt(T,V,$=0,I=0){let{pivot:Ct,target:wt}=T.lodged;T.grip.attach(T.mesh),T.mesh.position.set(0,0,0),T.mesh.quaternion.identity(),T.mesh.rotation.set(rf,0,0),i.remove(Ct),T.lodged=null,T.prev=null,T.vel.set(0,0,0),V&&(ct.yank(),P($,.8,60),it(wt.material,Ct.position,Ct.position.clone().sub(wt.center).setY(.5).normalize(),12,2.5,!1,wt.colors),wt.lastHit=-9,wt.hp-=.35,B.score+=60,wt.hp<=0&&(wt.hp=.001,tt(T,$,I,wt,Ct.position.clone(),6,new R(0,1,0),I+1)))}function Xt(T,V,$){let I=T.follow;!I||$<I.at||(T.follow=null,!(I.target.hp<=0||T.vel.length()<I.speed*.55)&&(I.target.hp-=I.e*I.affinity*.4,B.score+=Math.round(25*I.e),B.followThroughs++,I.target.hp<=0&&(I.target.hp=.001,I.target.lastHit=-9,tt(T,V,$,I.target,I.point,I.speed*1.15,I.dir,$))))}function Tt(T){B.phase="play",B.endsAt=T+O_,Ft.visible=!1,ct.bell(dt),a("LESSON 2: DEMOLITION. 90 SECONDS. GO.")}function St(){B.phase="over",ct.bell([...dt].reverse());let T=z_.filter(I=>B.materials.has(I)).length,V=B.score+T*T*400,$=V>3e4?"A+ (PLEASE LEAVE)":V>15e3?"B. SHOWS PROMISE. THE SCHOOL DOES NOT.":V>5e3?"C. NEEDS MORE DEMOLITION.":"F. GENTLE. SUSPICIOUSLY GENTLE.";a(`PENCILS DOWN. ${V} PTS, ${T}/6 MATERIALS. ${$}`),B.total=V,B.finishedAt=performance.now()/1e3,B.slowUntil=B.finishedAt+1.8,xt("0:00",!0),setTimeout(()=>B.phase==="over"&&Ht(V,T,$),2200)}function Wt(){for(let I of M)I.hp=I.max,I.mesh&&I.mesh.setMatrixAt(I.index,I.matrix),I.pane&&(I.pane.visible=!0),I.object&&(I.object.visible=!0);s.desks.instanceMatrix.needsUpdate=s.chairs.instanceMatrix.needsUpdate=!0,t.shadowMap.needsUpdate=!0;for(let I of Object.values(H))I.parts.forEach((Ct,wt)=>{Ct.alive=!1,I.mesh.setMatrixAt(wt,y)}),I.mesh.instanceMatrix.needsUpdate=!0;for(let I of[Lt,Dt])I.life.fill(0);for(let I of et)I.visible=!1;for(let I of l)I.lodged&&Mt(I,!1);let[T,V,$]=s.notAHole;T.visible=V.visible=!0,$.position.copy(L),$.rotation.copy(_),b.visible=!1,w.material.opacity=0,Ft.visible=!1,s.ext.rotation.copy(A),s.hat.position.copy(N),At.length=0,Object.assign(B,{phase:"ready",...Z()}),xt("1:30"),a("TUESDAY (AGAIN). SWING TO START.")}let $t=p.find(T=>T.kind==="cat"),te=p.find(T=>T.kind==="bust"),z=p.filter(T=>T.kind==="pot"),mt={cat:0,bust:0,squeakAt:-9};function ot(T,V,$){let I=(Qt,_e)=>$.some(({p:Ce,speed:ge})=>ge>1&&Ce.distanceTo(Qt.position)<_e),Ct=1-Math.exp(-V*14),wt=$t.object.visible&&I($t.object,.7);wt&&mt.cat<.3&&T-mt.squeakAt>1.2&&(mt.squeakAt=T,ct.squeak()),mt.cat+=((wt?1:0)-mt.cat)*Ct;let{head:Zt,paw:Jt}=$t.object.userData;Zt.rotation.set(-.3*mt.cat,1.1*mt.cat,0),Jt.rotation.z=mt.cat>.5?1.2:Math.sin(T*4)*.35,$t.object.scale.set(1+.08*mt.cat,1-.14*mt.cat,1),mt.bust+=((te.object.visible&&I(te.object,.8)?1:0)-mt.bust)*Ct,te.object.userData.head.rotation.set(-.35*mt.bust,0,.12*mt.bust),te.object.rotation.x=-.1*mt.bust;for(let Qt of z)if(Qt.object.visible){let _e=I(Qt.object,.6)?1:0;Qt.object.userData.leaves.forEach((Ce,ge)=>{Ce.rotation.y=_e*Math.sin(T*40+ge)*.25})}for(let Qt of p)Qt.wobble&&(Qt.wobble*=Math.exp(-V*5),Qt.object.rotation.z=Math.sin(T*30)*.12*Qt.wobble,Qt.wobble<.01&&(Qt.wobble=0,Qt.object.rotation.z=0))}let _t=new R,Et=new R,ht=l.map(()=>({p:new R,speed:0}));function Yt(T,V){B.dust*=Math.exp(-V/35);for(let I of l)I.mesh.visible=B.phase!=="intro"&&(I===f()||!!I.lodged);for(let I=At.length-1;I>=0;I--){let Ct=At[I];Ct.t+=V;let wt=Math.min(1,Ct.t/Ct.dur);Ct.run(wt),wt===1&&(At.splice(I,1),Ct.done?.())}let $=T<B.slowUntil?.15+.85*((1.8-(B.slowUntil-T))/1.8)**3:1;if(ie(Lt,V*$,.02),ie(Dt,V*$,6),T<B.powderUntil&&ae(Lt,s.ext.position.clone().setY(1.55),6,{color:16777215,speed:2.2,size:.09,life:3,grow:1.4,alpha:.35,dir:new R(Math.sin(T*7)-.8,.2,Math.cos(T*5)*.8).normalize(),drag:1.2}),!(!t.xr.isPresenting||B.phase==="intro")){B.phase==="play"&&T>B.endsAt&&St(),B.phase==="play"&&Math.ceil(B.endsAt-T)!==B.shown&&(B.shown=Math.ceil(B.endsAt-T),xt(`${Math.floor(B.shown/60)}:${String(B.shown%60).padStart(2,"0")}`,B.shown<=10),(B.shown<=10||B.shown%15===0)&&a(`${B.shown}s LEFT  \xB7  SCORE ${B.score}`),B.shown<=10&&Ut()&&(at(Ut(),B.shown<=3?1900:1500,.06,.25,0,"square"),P(1,.15,15)));for(let I of ht)I.speed=0;h.hand===null&&u(0),l.forEach(I=>{let Ct=I.hand??0;if(I!==f()&&!I.lodged)return;if(!I.grip.visible){I.prev=null;return}if(I.lodged){let Jt=I.lodged,Qt=T-Jt.at;Jt.pivot.quaternion.copy(Jt.pivot.userData.q??=Jt.pivot.quaternion.clone()),Jt.pivot.rotateX(Math.sin(Qt*57)*.22*Math.exp(-Qt*5)),(I.grip.getWorldPosition(Et).distanceTo(Jt.hand)>.3||Qt>6)&&Mt(I,Qt<=6,Ct,T);return}Xt(I,Ct,T),I.mesh.localToWorld(_t.copy(I.mesh.userData.tip)),I.prev&&V>0&&I.vel.lerp(Et.subVectors(_t,I.prev).divideScalar(V),.6),I.prev=(I.prev??new R).copy(_t);let wt=I.vel.length();if(T<(I.settle??0)){I.vel.set(0,0,0);return}if(ht[0].p.copy(_t),ht[0].speed=wt,wt<1.2)return;if(kt(_t,I.vel),B.phase==="ready"&&Tt(T),B.phase==="over"){T-B.finishedAt>4&&wt>3&&Wt();return}Et.copy(I.vel).normalize();let Zt=_t.clone().addScaledVector(I.vel,-V*1.5);for(let Jt of M)if(!(Jt.hp<=0||I.lodged)&&Math.abs(_t.x-Jt.center.x)<Jt.half.x&&Math.abs(_t.y-Jt.center.y)<Jt.half.y&&Math.abs(_t.z-Jt.center.z)<Jt.half.z&&(I.entry=Zt,tt(I,Ct,T,Jt,_t.clone(),wt,Et.clone(),T)))break}),ot(T,V,ht);for(let I of M)I.shove&&(C.copy(I.matrix),C.elements[12]+=I.shove.x,C.elements[14]+=I.shove.z,I.mesh.setMatrixAt(I.index,C),I.mesh.instanceMatrix.needsUpdate=!0,I.shove.multiplyScalar(.8),I.shove.lengthSq()<1e-7&&(I.shove=null));we(V*$)}}function kt(T,V){for(let $ of Object.values(H))for(let I of $.parts)!I.alive||Math.abs(I.p.x-T.x)>.15||Math.abs(I.p.z-T.z)>.15||Math.abs(I.p.y-T.y)>.15||(I.v.copy(V).multiplyScalar(.5+Math.random()*.3).add(new R(0,1+Math.random(),0)),I.w.set(Y(),Y(),Y()).multiplyScalar(18),I.rest=0)}function we(T){for(let V of Object.values(H)){let $=!1;V.parts.forEach((I,Ct)=>{if(!I.alive||I.rest>1)return;$=!0;let wt=I.material==="drywall"||I.material==="glass"?.97:.995;I.v.y-=9.8*T,I.v.x*=wt,I.v.z*=wt,I.p.addScaledVector(I.v,T),j.setFromAxisAngle(Et.copy(I.w).normalize(),I.w.length()*T),I.q.premultiply(j);let Zt=Math.min(I.s.x,I.s.y,I.s.z)/2;if(I.p.y<Zt){let Jt=-I.v.y;if(I.p.y=Zt,I.v.y*=I.material==="plaster"?-.15:-.3,I.v.x*=.6,I.v.z*=.6,I.w.multiplyScalar(.5),(I.material==="glass"||I.material==="ceramic")&&Jt>1&&Math.random()<.12&&ct.tink(I.material),I.v.lengthSq()<.02&&(I.rest+=T*10,I.w.set(0,0,0),I.material!=="plaster")){let Qt=I.s.y<I.s.x?"y":"x";I.q.setFromAxisAngle(new R(0,1,0),Math.random()*6),Qt==="x"&&I.q.multiply(new Ge().setFromAxisAngle(new R(0,0,1),Math.PI/2))}}I.p.x=Math.max(-4.4,Math.min(4.4,I.p.x)),I.p.z=Math.max(-4.7,Math.min(4.7,I.p.z)),J.position.copy(I.p),J.quaternion.copy(I.q),J.scale.copy(I.s),J.updateMatrix(),V.mesh.setMatrixAt(Ct,J.matrix)}),$&&(V.mesh.instanceMatrix.needsUpdate=!0)}}return{update:Yt,state:B,tools:l,targets:M,props:p,reset:Wt,start:Tt,finish:St,equip:u,holder:h,hole:b,report:Ft}}var Kn=new URLSearchParams(location.search),Mh=document.getElementById("enter"),gf=['600 40px "Caveat"','40px "Permanent Marker"','700 40px "Cabin Sketch"','40px "Special Elite"'].map(i=>document.fonts.load(i));gf.push(document.fonts.load('40px "Yuji Syuku"',"\u58CA\u3059\u306A"));await Promise.race([Promise.allSettled(gf),new Promise(i=>setTimeout(i,3500))]);var Pe=new yl({antialias:!0,powerPreference:"high-performance"});Pe.setPixelRatio(Math.min(devicePixelRatio,2));Pe.setSize(innerWidth,innerHeight);Pe.toneMapping=Yr;Pe.toneMappingExposure=Number(Kn.get("exposure"))||1.05;Pe.shadowMap.enabled=!0;Pe.shadowMap.type=rs;Pe.shadowMap.autoUpdate=!1;Pe.xr.enabled=!0;Pe.xr.setReferenceSpaceType("local-floor");Pe.xr.setFoveation(.6);document.body.prepend(Pe.domElement);var Pn=new es,fn=new ve,nn=new rn(70,innerWidth/innerHeight,.03,80);Pn.background=new ee(15331302);Pn.environment=new Qs(Pe).fromScene(new Sl,.04).texture;Pn.environmentIntensity=Kn.has("sunonly")?0:.22;nn.position.y=Number(Kn.get("y")??1.6);nn.rotation.order="YXZ";nn.rotation.set(Number(Kn.get("pitch")??-.08),Number(Kn.get("yaw")??0),0);fn.position.set(Number(Kn.get("x")??.4),0,Number(Kn.get("z")??3.9));fn.add(nn);Pn.add(fn);var ke=Wd(Pn,{cjk:Hd("\u58CA",Ue.brush)}),_h=Xd(Pn),jn=new Xs(16767398,7);jn.position.copy(Rl).multiplyScalar(14);jn.castShadow=!0;jn.shadow.mapSize.set(2048,2048);Object.assign(jn.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:2,far:30});jn.shadow.bias=-4e-4;jn.shadow.normalBias=.025;jn.shadow.radius=3;Pn.add(jn,jn.target);var Nl=new Xs(13622514,1.1);Nl.position.set(-10,2.5,1);var xf=new Vr(13227754,6963236,.22);Kn.has("sunonly")||Pn.add(Nl,xf);Pe.shadowMap.needsUpdate=!0;var pn=null;function Sh(){if(pn)return pn.ctx.resume();let i=new Xr,t=i.context,e=i.getInput();nn.add(i);let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=n.getChannelData(0);for(let b=0;b<s.length;b++)s[b]=Math.random()*2-1;let r=(b,w,L)=>{let _=new PannerNode(t,{panningModel:"HRTF",refDistance:1.5,positionX:b,positionY:w,positionZ:L});return _.connect(e),_},a=(b,{dur:w=.3,type:L="lowpass",freq:_=800,to:A=_,gain:N=.5,q:D=.7}={})=>{let O=t.currentTime,H=new AudioBufferSourceNode(t,{buffer:n,loop:!0}),U=new BiquadFilterNode(t,{type:L,frequency:_,Q:D}),G=new GainNode(t,{gain:N});U.frequency.exponentialRampToValueAtTime(A,O+w),G.gain.setValueAtTime(N,O),G.gain.exponentialRampToValueAtTime(1e-4,O+w),H.connect(U).connect(G).connect(b),H.start(O,Math.random()),H.stop(O+w+.05)},o=(b,{from:w,to:L,dur:_,gain:A=.3,type:N="sine"})=>{let D=t.currentTime,O=new OscillatorNode(t,{type:N,frequency:w}),H=new GainNode(t,{gain:A});O.frequency.exponentialRampToValueAtTime(L,D+_),H.gain.setValueAtTime(A,D),H.gain.exponentialRampToValueAtTime(1e-4,D+_),O.connect(H).connect(b),O.start(D),O.stop(D+_+.05)},l=r(-oe/2-3,2.5,0),c=new GainNode(t,{gain:0}),h=new GainNode(t,{gain:.05}),d=new AudioBufferSourceNode(t,{buffer:n,loop:!0}),u=new GainNode(t,{gain:1});d.connect(new BiquadFilterNode(t,{type:"bandpass",frequency:5200,Q:3})).connect(c).connect(h).connect(u).connect(l);let f=new OscillatorNode(t,{type:"square",frequency:38}),g=new GainNode(t,{gain:.5});f.connect(g).connect(c.gain),c.gain.value=.5;let v=new OscillatorNode(t,{frequency:.07}),m=new GainNode(t,{gain:.035});v.connect(m).connect(h.gain),d.start(),f.start(),v.start();let p=r(1.55,2.68,-Ie/2),M=r(.12,1.3,-3.78),C=r(2.2,je,1.5),y=r(ke.lair.x,.6,ke.lair.z);pn={ctx:t,hush:u,out:e,scratch:()=>a(M,{dur:.05+Math.random()*.05,type:"bandpass",freq:2400+Math.random()*1500,gain:.12,q:5}),whistle:()=>{o(e,{from:500,to:1500,dur:.35,gain:.07,type:"sine"}),setTimeout(()=>o(e,{from:1500,to:1400,dur:.25,gain:.05,type:"triangle"}),330)},tick:b=>a(p,{dur:.04,type:"highpass",freq:b?3e3:2200,gain:.25}),click:()=>a(M,{dur:.06,type:"highpass",freq:1800,gain:.6}),pfft:()=>{a(M,{dur:.7,type:"bandpass",freq:1400,to:300,gain:.5,q:2}),o(M,{from:700,to:180,dur:.6,gain:.08,type:"triangle"})},boom:()=>{a(M,{dur:2.6,freq:600,to:40,gain:1.6}),o(M,{from:90,to:28,dur:2.2,gain:.9}),a(C,{dur:1.4,type:"highpass",freq:3e3,to:900,gain:.25})},clatter:()=>{for(let b=0;b<4;b++)setTimeout(()=>a(M,{dur:.09,type:"bandpass",freq:900+Math.random()*900,gain:.5,q:4}),b*70+Math.random()*40)},giggle:()=>{for(let b=0;b<5;b++)setTimeout(()=>o(y,{from:520+b*25,to:380,dur:.09,gain:.05,type:"triangle"}),b*95)}}}var rr=600,Hi=new Float32Array(rr*3),_f=new Float32Array(rr*3),Jn=new Float32Array(rr*3),Il=new Float32Array(rr),Dl=new Ae;Dl.setAttribute("position",new re(Hi,3));Dl.setAttribute("color",new re(_f,3));var yf=new xi(Dl,new Bs({size:.012,vertexColors:!0,transparent:!0,depthWrite:!1}));yf.frustumCulled=!1;Pn.add(yf);var nr=0;function yh(i,t,e,n,s,r=1){for(let a=0;a<i;a++,nr=(nr+1)%rr)Hi.set([t.x+(Math.random()-.5)*e.x,t.y+(Math.random()-.5)*e.y,t.z+(Math.random()-.5)*e.z],nr*3),Jn.set([(Math.random()-.5)*n,Math.random()*n*r,(Math.random()-.5)*n],nr*3),_f.set(new ee(s[a%s.length]).toArray(),nr*3),Il[nr]=2+Math.random()*2}var vf=[16731501,16765503,4112851,9095462,11765995],V_=[13617336,12169632,14999248],hf=["WHO PUSHED THE PLUNGER?","IT IS NOT CONNECTED TO ANYTHING.","IT IS NOW CONNECTED TO SOMETHING.","FINE. DETENTION. YOU TOO, VISITOR.","STOP.","I AM CALLING YOUR MOTHER.",'SHE ASKED "WHICH ONE?"',"IT IS NOW CONNECTED TO EVERYTHING.","WE ARE ALL IN DETENTION NOW."],Ee={pushes:0,explosions:0,pressedAt:-9,armed:!0,fallen:0,lampSpin:0,lampAngle:0,flicker:0,flipAt:-9,eyesHidden:0},Pl=[],Mf=i=>Pl.push({start:performance.now()/1e3,...i});function ca(i){let t=ke.statusCanvas.getContext("2d");t.clearRect(0,0,ke.statusCanvas.width,ke.statusCanvas.height),t.drawImage(wl(i),0,0),ke.status.material.map.needsUpdate=!0}var Wi=new R;function Ul(){let i=performance.now()/1e3;if(!(i-Ee.pressedAt<1.2)){if(Ee.pressedAt=i,Ee.pushes++,Sh(),pn.click(),Mf({dur:.5,run:t=>{ke.handle.position.y=.21-.1*Math.sin(Math.min(1,t*2)*Math.PI/2)*(t<.6?1:1-(t-.6)/.4)}}),ca(hf[Math.min(Ee.pushes,hf.length)-1]),ke.handle.getWorldPosition(Wi),Ee.pushes%3===0)return setTimeout(G_,900);pn.pfft(),yh(40,Wi,new R(.05,.02,.05),.9,vf)}}function G_(){Ee.explosions++,pn.boom(),Ee.flicker=1.6,Ee.lampSpin+=2.4,Ee.flipAt=performance.now()/1e3,yh(260,new R(2.2,je-.05,1.5),new R(2.6,.02,2.2),.15,V_,-1),yh(80,Wi,new R(.1,.05,.1),2.2,vf);let i=ke.scrolls[Ee.fallen++];if(i){let t=i.position.y;setTimeout(()=>Mf({dur:.8,run:e=>{i.position.y=t-(t-.19)*e*e,i.rotation.x=-Math.PI/2*e*e,i.position.z=-Ie/2+.04+.08*e},done:()=>pn.clatter()}),350)}}var vh={built:{sun:7,sky:1.1,bounce:.22,env:.22,exposure:1.05,haze:1,skyColor:13622514},film:{sun:10,sky:.34,bounce:.09,env:.07,exposure:1,haze:1.5,skyColor:8362198}},Ll=Kn.get("look")==="built",Bn={...Ll?vh.built:vh.film,fill:1};Nl.color.set(Bn.skyColor);function H_(i,t){let e=1-Math.exp(-t*1.5);Bn.fill+=(i.fill-Bn.fill)*e,jn.intensity+=(i.sun-jn.intensity)*e,Nl.intensity=Bn.sky*Bn.fill,xf.intensity=Bn.bounce*Bn.fill,Kn.has("sunonly")||(Pn.environmentIntensity=Bn.env*Bn.fill),_h.haze.value+=(i.haze-_h.haze.value)*e}Kn.has("exposure")||(Pe.toneMappingExposure=Bn.exposure);var Mi=cf({scene:Pn,renderer:Pe,rig:fn,camera:nn,room:ke,audio:()=>pn,say:ca,flip:()=>{Ee.flipAt=performance.now()/1e3}});function W_(i,t){let e=ke.eyes,n=e.position.clone().sub(t),s=n.length(),r=nn.getWorldDirection(new R).dot(n.normalize());s<1.4&&r>.93&&i>Ee.eyesHidden&&(Ee.eyesHidden=i+5,pn?.giggle());let a=i<Ee.eyesHidden,o=Math.sin(i*1.3)>.985||Math.sin(i*.37+2)>.995;e.scale.y+=((a||o?.02:1)-e.scale.y)*(a?.5:.35),e.position.x=ke.lair.x+.2+Math.sin(i*.21)*.25}var X_=[0,1].map(i=>{let t=Pe.xr.getController(i);t.add(new Ar(new Ae().setFromPoints([new R,new R(0,0,-.4)]),new Os({color:16777215,transparent:!0,opacity:.35}))),t.addEventListener("select",()=>{q_(t)&&Ul()}),fn.add(t);let e=Pe.xr.getControllerGrip(i),n=Pe.xr.getHand(i);return fn.add(e,n),{c:t,grip:e,hand:n}}),la=new qr;function q_(i){return i.updateMatrixWorld(!0),la.ray.origin.setFromMatrixPosition(i.matrixWorld),la.ray.direction.set(0,0,-1).applyQuaternion(i.getWorldQuaternion(new Ge)),la.intersectObject(ke.plunger,!0).length>0}var uf=new R;function Y_(){ke.handle.getWorldPosition(Wi);for(let{grip:i,hand:t}of X_){let e=t.joints?.["index-finger-tip"],n=e?.visible?e.getWorldPosition(uf):i.visible?i.getWorldPosition(uf):null;if(n&&Math.hypot(n.x-Wi.x,n.z-Wi.z)<.09&&n.y<Wi.y+.02&&n.y>Wi.y-.12)return!0}return!1}Pe.domElement.addEventListener("pointermove",i=>{i.buttons&&(nn.rotation.y+=i.movementX*.004,nn.rotation.x=Math.min(1.4,Math.max(-1.4,nn.rotation.x+i.movementY*.004)))});Pe.domElement.addEventListener("click",i=>{Sh(),la.setFromCamera(new gt(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),nn),la.intersectObject(ke.plunger,!0).length&&Ul()});var sr=new Set;addEventListener("keydown",i=>sr.add(i.key.toLowerCase()));addEventListener("keyup",i=>sr.delete(i.key.toLowerCase()));addEventListener("resize",()=>{nn.aspect=innerWidth/innerHeight,nn.updateProjectionMatrix(),Pe.setSize(innerWidth,innerHeight)});var Xi=new bt(new Mn(.3,16,8),new hn({color:0,side:Ye,transparent:!0,depthTest:!1,depthWrite:!1}));Xi.renderOrder=999;Xi.visible=!1;nn.add(Xi);var hi={at:-1,written:0,lastPhase:null},df="DEMOLITION BOY",Z_="LESSON 2: DEMOLITION. SWING TO START.";function $_(){Mi.state.phase!=="intro"&&Mi.reset(),hi.at=performance.now()/1e3,hi.written=0,Mi.state.phase="intro",Xi.visible=!0,Xi.material.opacity=1,ca("")}function J_(i){if(hi.at<0)return;let t=i-hi.at;Xi.material.opacity=1-Math.min(1,Math.max(0,(t-.8)/3.7))**1.6,Xi.visible=Xi.material.opacity>.002;let e=Math.min(df.length,Math.floor(Math.max(0,t-4.2)/.16));e>hi.written&&(hi.written=e,ca(df.slice(0,e)),pn?.scratch()),t>9.5&&Mi.state.phase==="intro"&&(Mi.state.phase="ready",pn?.whistle(),ca(Z_),hi.at=-1)}var ir=new R,mh=new R,ff=new R,pf=new R(0,1,0),mf=performance.now(),gh=!1,xh=0;Pe.setAnimationLoop(i=>{let t=performance.now()/1e3,e=Math.min(.05,(i-mf)/1e3);mf=i,_h.time.value=t,nn.getWorldPosition(ir);let n=new gt(+sr.has("d")-+sr.has("a"),+sr.has("s")-+sr.has("w"));for(let h of Pe.xr.getSession()?.inputSources??[]){let d=h.gamepad?.axes;if(!(!d||d.length<4))if(h.handedness==="left")n.set(d[2],d[3]);else if(Math.abs(d[2])>.7&&!gh){let u=-Math.sign(d[2])*Math.PI/6;fn.position.sub(ir).applyAxisAngle(pf,u).add(ir),fn.rotation.y+=u,gh=!0}else Math.abs(d[2])<.3&&(gh=!1)}if(n.lengthSq()>.01){let h=ir.x-fn.position.x,d=ir.z-fn.position.z;nn.getWorldDirection(mh).setY(0).normalize(),ff.crossVectors(mh,pf),fn.position.addScaledVector(mh,-n.y*e*1.3).addScaledVector(ff,n.x*e*1.3),fn.position.x=Math.min(oe/2-.35,Math.max(-oe/2+.35,fn.position.x+h))-h,fn.position.z=Math.min(Ie/2-.35,Math.max(-Ie/2+.9,fn.position.z+d))-d}let s=Pe.xr.isPresenting&&Y_();s&&Ee.armed&&(Ee.armed=!1,Ul()),s||(Ee.armed=!0);for(let h=Pl.length-1;h>=0;h--){let d=Pl[h],u=Math.min(1,(t-d.start)/d.dur);d.run(u),u===1&&(Pl.splice(h,1),d.done?.())}Ee.lampSpin+=(-Ee.lampAngle*9-Ee.lampSpin*.9)*e,Ee.lampAngle+=Ee.lampSpin*e,ke.crooked.g.rotation.z=-.62+Ee.lampAngle*.35+Math.sin(t*.8)*.012,Ee.flicker=Math.max(0,Ee.flicker-e);let r=Ee.flicker>0?Math.random()>.5:Math.sin(t*.5)>.97&&Math.random()>.6;ke.crooked.tubes.emissiveIntensity=r?2.2:.05;let a=Math.min(1,(t-Ee.flipAt)/.6);ke.flip.rotation.x=a<1?-a*Math.PI*2:0,W_(t,ir),Mi.update(t,e),J_(t,e);let o=Mi.state.phase;if(H_({fill:Ll?1:hi.at>=0?.3:o==="over"?.45:1,sun:Ll?vh.built.sun:o==="over"?11.5:Bn.sun,haze:Ll?1:(o==="intro"?1.9:Bn.haze)+Mi.state.dust},e),pn&&o!==hi.lastPhase){hi.lastPhase=o;let h=o==="play"?.05:1;pn.hush.gain.setTargetAtTime(h,pn.ctx.currentTime,o==="play"?.3:2.5)}let l=new Date,c=l.getSeconds()+l.getMilliseconds()/1e3;ke.hands.second.rotation.z=c/60*Math.PI*2,ke.hands.minute.rotation.z=(l.getMinutes()+c/60)/60*Math.PI*2,ke.hands.hour.rotation.z=(l.getHours()%12+l.getMinutes()/60)/12*Math.PI*2,pn&&Math.floor(c)!==xh&&(xh=Math.floor(c),pn.tick(xh%2));for(let h=0;h<rr;h++){if(Il[h]<=0)continue;Il[h]-=e;let d=h*3;Jn[d+1]-=1.6*e,Jn[d]*=.985,Jn[d+2]*=.985,Jn[d+1]=Math.max(Jn[d+1],-.45),Hi[d]+=(Jn[d]+Math.sin(t*7+h)*.05)*e,Hi[d+1]+=Jn[d+1]*e,Hi[d+2]+=Jn[d+2]*e,Hi[d+1]<.005&&(Hi[d+1]=.005,Jn[d]=Jn[d+2]=0),Il[h]<=0&&(Hi[d+1]=-10)}Dl.attributes.position.needsUpdate=!0,Pe.render(Pn,nn)});var Sf=await navigator.xr?.isSessionSupported("immersive-vr").catch(()=>!1);Mh.disabled=!Sf;Mh.textContent=Sf?"Enter the classroom":"Open on a headset to step in";document.body.classList.add("ready");Mh.addEventListener("click",async()=>{Sh();let i=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","hand-tracking"]});await Pe.xr.setSession(i),$_(),document.body.classList.add("immersive"),i.addEventListener("end",()=>document.body.classList.remove("immersive"))});Object.assign(globalThis,{classroom:{renderer:Pe,scene:Pn,camera:nn,rig:fn,room:ke,state:Ee,push:Ul,game:Mi}});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
