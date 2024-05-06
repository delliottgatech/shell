/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.116
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as K}from"./chunk-VMSXG4OA.js";import{a as L}from"./chunk-BOPB43LN.js";import{b as v,c as J,d as Z}from"./chunk-DXEZYE3K.js";import{b as B,c as k}from"./chunk-DGCK3LD2.js";import{a as t,b as T,c as I,d as F,e as d}from"./chunk-CUOR5F7T.js";import{a as g}from"./chunk-74N6MC2V.js";import{a as W}from"./chunk-NPBZI5YA.js";import{a as b,b as z}from"./chunk-7X2YQ6I4.js";import{e as p}from"./chunk-R2AN7EKC.js";function m(n,e){this.center=t.clone(W(n,t.ZERO)),this.halfAxes=d.clone(W(e,d.ZERO))}m.packedLength=t.packedLength+d.packedLength;m.pack=function(n,e,c){return z.typeOf.object("value",n),z.defined("array",e),c=W(c,0),t.pack(n.center,e,c),d.pack(n.halfAxes,e,c+t.packedLength),e};m.unpack=function(n,e,c){return z.defined("array",n),e=W(e,0),p(c)||(c=new m),t.unpack(n,e,c.center),d.unpack(n,e+t.packedLength,c.halfAxes),c};var Ct=new t,ut=new t,Pt=new t,xt=new t,yt=new t,At=new t,Nt=new d,Mt={unitary:new d,diagonal:new d};m.fromPoints=function(n,e){if(p(e)||(e=new m),!p(n)||n.length===0)return e.halfAxes=d.ZERO,e.center=t.ZERO,e;let c,h=n.length,r=t.clone(n[0],Ct);for(c=1;c<h;c++)t.add(r,n[c],r);let o=1/h;t.multiplyByScalar(r,o,r);let i=0,C=0,w=0,l=0,u=0,a=0,s;for(c=0;c<h;c++)s=t.subtract(n[c],r,ut),i+=s.x*s.x,C+=s.x*s.y,w+=s.x*s.z,l+=s.y*s.y,u+=s.y*s.z,a+=s.z*s.z;i*=o,C*=o,w*=o,l*=o,u*=o,a*=o;let f=Nt;f[0]=i,f[1]=C,f[2]=w,f[3]=C,f[4]=l,f[5]=u,f[6]=w,f[7]=u,f[8]=a;let A=d.computeEigenDecomposition(f,Mt),M=d.clone(A.unitary,e.halfAxes),x=d.getColumn(M,0,xt),y=d.getColumn(M,1,yt),N=d.getColumn(M,2,At),P=-Number.MAX_VALUE,O=-Number.MAX_VALUE,U=-Number.MAX_VALUE,q=Number.MAX_VALUE,R=Number.MAX_VALUE,j=Number.MAX_VALUE;for(c=0;c<h;c++)s=n[c],P=Math.max(t.dot(x,s),P),O=Math.max(t.dot(y,s),O),U=Math.max(t.dot(N,s),U),q=Math.min(t.dot(x,s),q),R=Math.min(t.dot(y,s),R),j=Math.min(t.dot(N,s),j);x=t.multiplyByScalar(x,.5*(q+P),x),y=t.multiplyByScalar(y,.5*(R+O),y),N=t.multiplyByScalar(N,.5*(j+U),N);let S=t.add(x,y,e.center);t.add(S,N,S);let E=Pt;return E.x=P-q,E.y=O-R,E.z=U-j,t.multiplyByScalar(E,.5,E),d.multiplyByScale(e.halfAxes,E,e.halfAxes),e};var nt=new t,Ot=new t;function Q(n,e,c,h,r,o,i,C,w,l,u){if(!p(r)||!p(o)||!p(i)||!p(C)||!p(w)||!p(l))throw new b("all extents (minimum/maximum X/Y/Z) are required.");p(u)||(u=new m);let a=u.halfAxes;d.setColumn(a,0,e,a),d.setColumn(a,1,c,a),d.setColumn(a,2,h,a);let s=nt;s.x=(r+o)/2,s.y=(i+C)/2,s.z=(w+l)/2;let f=Ot;f.x=(o-r)/2,f.y=(C-i)/2,f.z=(l-w)/2;let A=u.center;return s=d.multiplyByVector(a,s,s),t.add(n,s,A),d.multiplyByScale(a,f,a),u}var $=new T,bt=new t,St=new T,Tt=new T,gt=new T,Et=new T,Rt=new T,Wt=new t,H=new t,zt=new t,tt=new t,It=new t,Lt=new I,Ut=new I,qt=new I,jt=new I,Bt=new I,vt=new t,Vt=new t,_t=new t,Dt=new t,Xt=new I,kt=new t,Zt=new t,Yt=new t,Gt=new L(t.UNIT_X,0);m.fromRectangle=function(n,e,c,h,r){if(!p(n))throw new b("rectangle is required");if(n.width<0||n.width>g.TWO_PI)throw new b("Rectangle width must be between 0 and 2 * pi");if(n.height<0||n.height>g.PI)throw new b("Rectangle height must be between 0 and pi");if(p(h)&&!g.equalsEpsilon(h.radii.x,h.radii.y,g.EPSILON15))throw new b("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");e=W(e,0),c=W(c,0),h=W(h,F.WGS84);let o,i,C,w,l,u,a;if(n.width<=g.PI){let R=k.center(n,$),j=h.cartographicToCartesian(R,bt),S=new K(j,h);a=S.plane;let E=R.longitude,ot=n.south<0&&n.north>0?0:R.latitude,st=T.fromRadians(E,n.north,c,St),V=T.fromRadians(n.west,n.north,c,Tt),it=T.fromRadians(n.west,ot,c,gt),_=T.fromRadians(n.west,n.south,c,Et),ht=T.fromRadians(E,n.south,c,Rt),ft=h.cartographicToCartesian(st,Wt),D=h.cartographicToCartesian(V,H),dt=h.cartographicToCartesian(it,zt),X=h.cartographicToCartesian(_,tt),mt=h.cartographicToCartesian(ht,It),wt=S.projectPointToNearestOnPlane(ft,Lt),Y=S.projectPointToNearestOnPlane(D,Ut),lt=S.projectPointToNearestOnPlane(dt,qt),G=S.projectPointToNearestOnPlane(X,jt),pt=S.projectPointToNearestOnPlane(mt,Bt);return o=Math.min(Y.x,lt.x,G.x),i=-o,w=Math.max(Y.y,wt.y),C=Math.min(G.y,pt.y),V.height=_.height=e,D=h.cartographicToCartesian(V,H),X=h.cartographicToCartesian(_,tt),l=Math.min(L.getPointDistance(a,D),L.getPointDistance(a,X)),u=c,Q(S.origin,S.xAxis,S.yAxis,S.zAxis,o,i,C,w,l,u,r)}let s=n.south>0,f=n.north<0,A=s?n.south:f?n.north:0,M=k.center(n,$).longitude,x=t.fromRadians(M,A,c,h,vt);x.z=0;let N=Math.abs(x.x)<g.EPSILON10&&Math.abs(x.y)<g.EPSILON10?t.UNIT_X:t.normalize(x,Vt),P=t.UNIT_Z,O=t.cross(N,P,_t);a=L.fromPointNormal(x,N,Gt);let U=t.fromRadians(M+g.PI_OVER_TWO,A,c,h,Dt);i=t.dot(L.projectPointOntoPlane(a,U,Xt),O),o=-i,w=t.fromRadians(0,n.north,f?e:c,h,kt).z,C=t.fromRadians(0,n.south,s?e:c,h,Zt).z;let q=t.fromRadians(n.east,A,c,h,Yt);return l=L.getPointDistance(a,q),u=0,Q(x,O,P,N,o,i,C,w,l,u,r)};m.fromTransformation=function(n,e){return z.typeOf.object("transformation",n),p(e)||(e=new m),e.center=B.getTranslation(n,e.center),e.halfAxes=B.getMatrix3(n,e.halfAxes),e.halfAxes=d.multiplyByScalar(e.halfAxes,.5,e.halfAxes),e};m.clone=function(n,e){if(p(n))return p(e)?(t.clone(n.center,e.center),d.clone(n.halfAxes,e.halfAxes),e):new m(n.center,n.halfAxes)};m.intersectPlane=function(n,e){if(!p(n))throw new b("box is required.");if(!p(e))throw new b("plane is required.");let c=n.center,h=e.normal,r=n.halfAxes,o=h.x,i=h.y,C=h.z,w=Math.abs(o*r[d.COLUMN0ROW0]+i*r[d.COLUMN0ROW1]+C*r[d.COLUMN0ROW2])+Math.abs(o*r[d.COLUMN1ROW0]+i*r[d.COLUMN1ROW1]+C*r[d.COLUMN1ROW2])+Math.abs(o*r[d.COLUMN2ROW0]+i*r[d.COLUMN2ROW1]+C*r[d.COLUMN2ROW2]),l=t.dot(h,c)+e.distance;return l<=-w?v.OUTSIDE:l>=w?v.INSIDE:v.INTERSECTING};var at=new t,ct=new t,rt=new t,Ft=new t,et=new t,Jt=new t;m.distanceSquaredTo=function(n,e){if(!p(n))throw new b("box is required.");if(!p(e))throw new b("cartesian is required.");let c=t.subtract(e,n.center,nt),h=n.halfAxes,r=d.getColumn(h,0,at),o=d.getColumn(h,1,ct),i=d.getColumn(h,2,rt),C=t.magnitude(r),w=t.magnitude(o),l=t.magnitude(i),u=!0,a=!0,s=!0;C>0?t.divideByScalar(r,C,r):u=!1,w>0?t.divideByScalar(o,w,o):a=!1,l>0?t.divideByScalar(i,l,i):s=!1;let f=!u+!a+!s,A,M,x;if(f===1){let O=r;A=o,M=i,a?s||(O=i,M=r):(O=o,A=r),x=t.cross(A,M,et),O===r?r=x:O===o?o=x:O===i&&(i=x)}else if(f===2){A=r,a?A=o:s&&(A=i);let O=t.UNIT_Y;O.equalsEpsilon(A,g.EPSILON3)&&(O=t.UNIT_X),M=t.cross(A,O,Ft),t.normalize(M,M),x=t.cross(A,M,et),t.normalize(x,x),A===r?(o=M,i=x):A===o?(i=M,r=x):A===i&&(r=M,o=x)}else f===3&&(r=t.UNIT_X,o=t.UNIT_Y,i=t.UNIT_Z);let y=Jt;y.x=t.dot(c,r),y.y=t.dot(c,o),y.z=t.dot(c,i);let N=0,P;return y.x<-C?(P=y.x+C,N+=P*P):y.x>C&&(P=y.x-C,N+=P*P),y.y<-w?(P=y.y+w,N+=P*P):y.y>w&&(P=y.y-w,N+=P*P),y.z<-l?(P=y.z+l,N+=P*P):y.z>l&&(P=y.z-l,N+=P*P),N};var Kt=new t,Qt=new t;m.computePlaneDistances=function(n,e,c,h){if(!p(n))throw new b("box is required.");if(!p(e))throw new b("position is required.");if(!p(c))throw new b("direction is required.");p(h)||(h=new J);let r=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,i=n.center,C=n.halfAxes,w=d.getColumn(C,0,at),l=d.getColumn(C,1,ct),u=d.getColumn(C,2,rt),a=t.add(w,l,Kt);t.add(a,u,a),t.add(a,i,a);let s=t.subtract(a,e,Qt),f=t.dot(c,s);return r=Math.min(f,r),o=Math.max(f,o),t.add(i,w,a),t.add(a,l,a),t.subtract(a,u,a),t.subtract(a,e,s),f=t.dot(c,s),r=Math.min(f,r),o=Math.max(f,o),t.add(i,w,a),t.subtract(a,l,a),t.add(a,u,a),t.subtract(a,e,s),f=t.dot(c,s),r=Math.min(f,r),o=Math.max(f,o),t.add(i,w,a),t.subtract(a,l,a),t.subtract(a,u,a),t.subtract(a,e,s),f=t.dot(c,s),r=Math.min(f,r),o=Math.max(f,o),t.subtract(i,w,a),t.add(a,l,a),t.add(a,u,a),t.subtract(a,e,s),f=t.dot(c,s),r=Math.min(f,r),o=Math.max(f,o),t.subtract(i,w,a),t.add(a,l,a),t.subtract(a,u,a),t.subtract(a,e,s),f=t.dot(c,s),r=Math.min(f,r),o=Math.max(f,o),t.subtract(i,w,a),t.subtract(a,l,a),t.add(a,u,a),t.subtract(a,e,s),f=t.dot(c,s),r=Math.min(f,r),o=Math.max(f,o),t.subtract(i,w,a),t.subtract(a,l,a),t.subtract(a,u,a),t.subtract(a,e,s),f=t.dot(c,s),r=Math.min(f,r),o=Math.max(f,o),h.start=r,h.stop=o,h};var $t=new t,Ht=new t,te=new t;m.computeCorners=function(n,e){z.typeOf.object("box",n),p(e)||(e=[new t,new t,new t,new t,new t,new t,new t,new t]);let c=n.center,h=n.halfAxes,r=d.getColumn(h,0,$t),o=d.getColumn(h,1,Ht),i=d.getColumn(h,2,te);return t.clone(c,e[0]),t.subtract(e[0],r,e[0]),t.subtract(e[0],o,e[0]),t.subtract(e[0],i,e[0]),t.clone(c,e[1]),t.subtract(e[1],r,e[1]),t.subtract(e[1],o,e[1]),t.add(e[1],i,e[1]),t.clone(c,e[2]),t.subtract(e[2],r,e[2]),t.add(e[2],o,e[2]),t.subtract(e[2],i,e[2]),t.clone(c,e[3]),t.subtract(e[3],r,e[3]),t.add(e[3],o,e[3]),t.add(e[3],i,e[3]),t.clone(c,e[4]),t.add(e[4],r,e[4]),t.subtract(e[4],o,e[4]),t.subtract(e[4],i,e[4]),t.clone(c,e[5]),t.add(e[5],r,e[5]),t.subtract(e[5],o,e[5]),t.add(e[5],i,e[5]),t.clone(c,e[6]),t.add(e[6],r,e[6]),t.add(e[6],o,e[6]),t.subtract(e[6],i,e[6]),t.clone(c,e[7]),t.add(e[7],r,e[7]),t.add(e[7],o,e[7]),t.add(e[7],i,e[7]),e};var ee=new d;m.computeTransformation=function(n,e){z.typeOf.object("box",n),p(e)||(e=new B);let c=n.center,h=d.multiplyByUniformScale(n.halfAxes,2,ee);return B.fromRotationTranslation(h,c,e)};var ne=new Z;m.isOccluded=function(n,e){if(!p(n))throw new b("box is required.");if(!p(e))throw new b("occluder is required.");let c=Z.fromOrientedBoundingBox(n,ne);return!e.isBoundingSphereVisible(c)};m.prototype.intersectPlane=function(n){return m.intersectPlane(this,n)};m.prototype.distanceSquaredTo=function(n){return m.distanceSquaredTo(this,n)};m.prototype.computePlaneDistances=function(n,e,c){return m.computePlaneDistances(this,n,e,c)};m.prototype.computeCorners=function(n){return m.computeCorners(this,n)};m.prototype.computeTransformation=function(n){return m.computeTransformation(this,n)};m.prototype.isOccluded=function(n){return m.isOccluded(this,n)};m.equals=function(n,e){return n===e||p(n)&&p(e)&&t.equals(n.center,e.center)&&d.equals(n.halfAxes,e.halfAxes)};m.prototype.clone=function(n){return m.clone(this,n)};m.prototype.equals=function(n){return m.equals(this,n)};var ye=m;export{ye as a};
