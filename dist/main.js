(()=>{"use strict";const e=function(){document.querySelector("#todo-display").textContent=""};let t={todoArray:[]};class n{constructor(e,t,n){this.task=e,this.description=t,this.deadline=n}get deadline(){return this._deadline}set deadline(e){this._deadline=e}}let d=function(){let e=document.querySelector("#task-creator-screen"),d=function(){return document.createElement("div")},a=document.querySelector("#popup-background");a.addEventListener("click",(()=>{c()}));let c=function(){a.style.display="none",e.style.display="none"};return{createTodoElement:function(e,t){console.log(t);let n=document.createElement("span");n.classList.add("todo-card");let a=d();a.classList.add("card-task"),a.innerHTML=`Task:<h3>${e}</h3>`;let c=d();return c.classList.add("todo-card-details"),c.innerHTML=`\n        <div class="card-dealine"><strong>Deadline</strong>: ${t}</div>\n        <div class="card-details-btn">Details</div>`,n.append(a,c),n},createTaskContainer:function(){let e=document.createElement("div");return e.id="tasks-container",e},createTaskAddBtn:function(){let o=d();o.id="tasks-button-panel";let r=document.createElement("button");return r.id="add-task-btn",r.textContent="Add task",r.addEventListener("click",(()=>{a.style.display="block",e.style.display="flex",document.querySelector("#close-btn").addEventListener("click",(()=>{c()})),document.querySelector("#add-btn").addEventListener("click",(()=>{let e=document.querySelector("#task-title-input").value,d=document.querySelector("#task-deadline-input").value,a=document.querySelector("#task-descript-textarea").value;(a="")&&(a="None"),t.todoArray.push(new n(e,a,d)),c()}))})),o.append(r),o}}}();const a=function(){let e=document.querySelector("#todo-display");e.textContent="",e.append(d.createTaskAddBtn());let n=d.createTaskContainer();e.append(n),t.todoArray.forEach((e=>{n.append(d.createTodoElement(e.task,e.deadline))}))};document.querySelector("#dashboard-btn"),document.querySelector("#projects-btn").addEventListener("click",e),document.querySelector("#tasks-btn").addEventListener("click",a)})();