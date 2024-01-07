/* eslint-disable no-console */const t=document.querySelector(".wall");t.style.position="relative";const e=document.querySelector(".spider");document.addEventListener("click",i=>{let l=t.getBoundingClientRect(),n=e.getBoundingClientRect(),o=i.clientX,c=i.clientY,h=o-n.width/2-l.left,s=c-n.height/2-l.top,d=l.width-n.width,a=l.height-n.height;e.style.position="absolute",e.style.top=Math.min(Math.max(s,0),a)+"px",e.style.left=Math.min(Math.max(h,0),d)+"px",console.log(o,c)});//# sourceMappingURL=index.0c9f74f7.js.map

//# sourceMappingURL=index.0c9f74f7.js.map
