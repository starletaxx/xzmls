import{m as t,p as e,q as i,s,o as n,c as a,w as r,n as l,u as o,i as h,a as d,v as c,x as u}from"./index-7bd8702c.js";import{_ as p,M as m}from"./_plugin-vue_export-helper.8bd8d0fb.js";const x={left:"LEFT",right:"RIGHT",down:"DOWN",up:"UP",click:"CLICK",leftAndUp:"LEFT_UP",leftAndDown:"LEFT_DOWN",rightAndUp:"RIGHT_UP",rightAndDown:"RIGHT_DOWN"},f=x,g=t=>{const{a:e,b:i}=t;if(null!=e&&null!=i){const t=e.x-i.x,s=e.y-i.y,n=Math.abs(t),a=Math.abs(s);if(n<a)return e.y>i.y?x.up:x.down;if(n>a)return e.x>i.x?x.left:x.right;if(0!=n)return t>0?s>0?x.leftAndUp:x.leftAndDown:s>0?x.rightAndUp:x.rightAndDown}return x.click},w=""+new URL("ss-58b991cf.png",import.meta.url).href,y=""+new URL("dialog-e990a986.png",import.meta.url).href,T=""+new URL("musicicon-07d1f7a8.png",import.meta.url).href,I=t();I.autoplay=!0,I.loop=!0,I.src="/static/yatou.MP3";const v=p({data:()=>({}),onLoad(t){(null==t?void 0:t.map)&&(this.mapid=t.map)},onUnload(){this.closeTimer()},onReady(){e().select("#canv").fields({size:!0},(t=>{this.canvasData={canvas:{width:t.width,height:t.height,requestAnimationFrame(t){window.requestAnimationFrame((()=>t()))}},ctx:i("canv")};const e=(new m).getMap(this.mapid||0),{cols:s}=e,n=Math.floor(e.data.length/s),a=Math.floor(t.width/s),r=(t.width-a*s)/2,l=[];for(let i=0;i<n;i++)for(let t=0;t<s;t++){let n={x:t*a+r,y:i*a+100,i:i*s+t};l.push(n),n.a=e.data[n.i]}this.map={paddingTop:100,paddingLeft:r,grids:l,size:a,rows:n,cols:s,inIndex:e.inIndex,outIndex:e.outIndex,player:{index:e.inIndex}},this.map.player.headImgs=["/static/tt.png","/static/player-2.png","/static/player-2.png"],this.restart()})).exec()},methods:{onTouchStart(t){const e=t.touches[0];this.startPoint=e},onTouchMove(t){const e=t.touches[0];this.endPoint=e},onTouchEnd(){if(this.isGameEnd)return;const{startPoint:t,endPoint:e}=this,i=f,s=g({a:t,b:e}),{grids:n,player:a,cols:r}=this.map;let l;switch(s){case i.left:l=n[a.index-1];break;case i.up:l=n[a.index-r];break;case i.right:l=n[a.index+1];break;case i.down:l=n[a.index+r]}l&&"1"!=l.a&&(this.preIndex=a.index,a.index=l.i,this.redraw())},closeTimer(){this.timer&&(clearTimeout(this.timer),this.timer=0)},restart(){this.timer&&this.closeTimer();const{player:t,inIndex:e,outIndex:i}=this.map;t.index=e,t.timer=60;const{canvas:n}=this.canvasData;this.timerNum=0,this.isGameEnd=!1,this.preIndex=e,this.pulseSize=1,this.pulseDire=1;const a=()=>{this.timer=setTimeout((()=>{if(t.timer<=0)this.showModal("你还没找到莎莎，你是假的大头\n让真大头来！");else{if(t.index==i)return s({title:"找到莎莎啦",content:"你哪也甭去\n这里是新加坡,不是上海,别瞎跑\n听见没",showCancel:!1,confirmText:"返回首页",success:t=>{t.confirm&&l({url:"/pages/index/index"})}}),void(this.isGameEnd=!0);t.index==e&&this.preIndex!=e&&(this.preIndex=e,o({image:"/static/ttangery.png",title:"莎莎在等你\n别回去",icon:"none"})),this.timerNum+=60,this.redraw((()=>n.requestAnimationFrame((()=>a()))))}}),60)};a()},redraw(t){const{map:e}=this,{canvas:i,ctx:s}=this.canvasData,{player:n,grids:a,size:r,rows:l,cols:o,paddingTop:h,paddingLeft:d,outIndex:c}=e;if(n.index==c)this.drawMaze(0,0);else{let t=n.index,e=a[t-o-1];null==e&&(e=a[t-1]),null==e&&(e=a[t-o]),null==e&&(e=a[n.index]),s.fillStyle="#000000",s.rect(d,h,o*r,l*r),s.fill();let i=3*r;this.drawMaze(0,0,e.x,e.y,i,i),s.fillStyle="rgba(0, 0, 0, 0)",i=r/1,s.beginPath(),s.rect(e.x,e.y,i,i),s.fill(),s.beginPath(),s.rect(e.x+2*i,e.y+2*i,2*i,2*i),s.fill(),s.beginPath(),s.rect(e.x+2*i,e.y,i,i),s.fill(),s.beginPath(),s.rect(e.x,e.y+2*i,i,i),s.fill()}let u=a[n.index],p=c!=n.index;if(this.isGameEnd)p?s.drawImage(n.headImgs[1],u.x,u.y,r,r):s.drawImage(n.headImgs[2],u.x,u.y,r,r);else{s.drawImage(n.headImgs[0],u.x,u.y,r,r);let t=r/2;const e=10;this.pulseSize+=this.pulseDire;let i=this.pulseSize/e;this.pulseSize<2?this.pulseDire=1:this.pulseSize>=e&&(this.pulseDire=-1),u=a[c],s.fillStyle="#F4E286",s.beginPath(),s.arc(u.x+t,u.y+t,t*i,0,2*Math.PI),s.fill()}let m=60-Math.floor(this.timerNum/1e3);m!=n.timer&&(n.timer=m),s.fillStyle="#EEE5DE",s.font="14rpx 华文隶书",s.fillText(`赶紧找到莎莎一起登机吧    倒计时${n.timer}s`,1*d,.95*h),s.draw(!1,t)},drawMaze(t,e,i,s,n,a){const{canvas:r,ctx:l}=this.canvasData,{grids:o,paddingLeft:h,paddingTop:d,size:c,cols:u,rows:p}=this.map;null==n&&(n=c*u),null==a&&(a=c*p),l.fillStyle="#666666",l.beginPath(),null==i&&(i=0),null==s&&(0==t&&(t=h),0==e&&(e=d),i=t,s=e),l.rect(i,s,n,a),l.fill(),l.fillStyle="#333333",o.forEach((t=>{t.x>=i&&t.y>=s&&t.x<i+n&&t.y<s+a&&"1"==t.a&&(l.beginPath(),l.rect(t.x,t.y,c,c),l.fill())}))},showModal(t){this.timer=0,this.redraw(),s({title:"回国航班起飞了...",content:t,confirmText:"重新开始",showCancel:!1,complete:t=>{t.confirm&&this.restart()}})}}},[["render",function(t,e,i,s,l,o){const p=h,m=u;return n(),a(p,null,{default:r((()=>[d(m,{class:"canvas","canvas-id":"canv",id:"canv","disable-scroll":"false",onTouchstart:o.onTouchStart,onTouchmove:o.onTouchMove,onTouchend:o.onTouchEnd,onTouchcancel:o.onTouchEnd},{default:r((()=>[d(p,{class:"ss"},{default:r((()=>[c("img",{src:w,style:{width:"128rpx",height:"150rpx"}}),c("img",{src:y,style:{width:"400rpx",height:"150rpx"}})])),_:1}),d(p,{class:"musicicon"},{default:r((()=>[c("img",{src:T,style:{width:"150rpx",height:"150rpx","border-radius":"50%"}})])),_:1})])),_:1},8,["onTouchstart","onTouchmove","onTouchend","onTouchcancel"])])),_:1})}],["__scopeId","data-v-b383d5bf"]]);export{v as default};
