(()=>{"use strict";const e=function(){document.querySelector("#todo-display").textContent=""};class t{constructor(e,t,n){this.task=e,this.description=t,this.deadline=n}get deadline(){return this._deadline}set deadline(e){this._deadline=e}}let n=function(){let e=[],n=document.querySelector("#task-creator-screen"),d=function(){return document.createElement("div")},a=document.querySelector("#popup-background");a.addEventListener("click",(()=>{c()}));let c=function(){a.style.display="none",n.style.display="none"};return{createTodoElement:function(){let e=document.createElement("span");e.classList.add("todo-card");let t=d();t.classList.add("card-task"),t.innerHTML="Task:<h3>Brush my Tooth</h3>";let n=d();return n.classList.add("todo-card-details"),n.innerHTML='\n        <div class="card-dealine"><strong>Deadline</strong>: 21/32/3213</div>\n        <div class="card-details-btn">Details</div>',e.append(t,n),e},createTaskContainer:function(){let e=document.createElement("div");return e.id="tasks-container",e},createTaskAddBtn:function(){let c=d();c.id="tasks-button-panel";let s=document.createElement("button");return s.id="add-task-btn",s.textContent="Add task",s.addEventListener("click",(()=>{a.style.display="block",n.style.display="flex",document.querySelector("#add-btn").addEventListener("click",(()=>{let n=document.querySelector("#task-title-input").value,d=document.querySelector("#task-deadline-input").value,a=document.querySelector("#task-descript-textarea").value;(a="")&&(a="None"),e.push(new t(n,a,d)),console.log(e)}))})),c.append(s),c}}}();const d=function(){let e=document.querySelector("#todo-display");e.textContent="",e.append(n.createTaskAddBtn());let t=n.createTaskContainer();e.append(t)};document.querySelector("#dashboard-btn"),document.querySelector("#projects-btn").addEventListener("click",e),document.querySelector("#tasks-btn").addEventListener("click",d)})();