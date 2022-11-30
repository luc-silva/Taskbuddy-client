(()=>{"use strict";let t={todoArray:[],projectArray:[]};class e{constructor(e,r,n,c,o){this.title=e,this.projectTasks=r,this.deadline=n,this.description=c,this.dateCreated=new Date,this.projectId=t.projectArray.length}}class r{constructor(t,e){this.title=t,this.priority=e}get title(){return this._title}set title(t){this._title=t}get priority(){return this._priority}set priority(t){this._priority=t}}class n{constructor(t,e,r,n,c){this.task=t,this.description=e,this.deadline=r,this.priority=n,this.check=c}dateCreated=new Date;get dateCreated(){return this._dateCreated}get deadline(){return this._deadline}set deadline(t){this._deadline=t}get priority(){return this._priority}set priority(t){this._priority=t}get check(){return this._check}set check(t){this._check=t}}let c=function(){let n=()=>document.createElement("div"),c=document.querySelector("#popup-background");c.addEventListener("click",(function(){c.style.display="none",document.querySelector("#project-creator").style.display="none",a.removeEventListener("click",o),i.removeEventListener("click",d)}));let a=document.querySelector("#create-project-btn"),i=document.querySelector("#project-taskcard-btn");return document.querySelector("#add-project-btn").addEventListener("click",(function(){document.querySelector("#project-creator").style.display="flex",c.style.display="block";let n=document.querySelector("#project-title-input"),s=document.querySelector("#project-deadline-input"),l=document.querySelector("#project-description-textarea"),u=[];i.addEventListener("click",(()=>{if(d()){let t=document.querySelector("#project-task-card-creator-inpt"),e=document.querySelector("#project-task-card-creator-select");u.push(new r(t.value,e.value))}})),a.addEventListener("click",(()=>{o()&&t.projectArray.push(new e(n.value,[...u],s.value,l.value))})),document.querySelector("#already-added-tasks")})),{createProjectContainer:function(t,e,r,c,o){let d=n();d.classList.add("project-container"),d.setAttribute("data-project",o);let a=n();a.classList.add("project-name"),a.innerHTML=`Project: <strong>${t}</strong>`;let i=n();i.classList.add("project-info"),i.innerHTML=`                    \n\t\t<div>\n\t\t\tTasks completed: <strong>1/${e.length}</strong>\n\t\t</div>\n\t\t<div>\n\t\t\tDeadline: <strong>${r}</strong> (<em>45 days</em>)\n\t\t</div>`;let s=n();s.append(a,i);let l=n();l.classList.add("project-details"),l.innerHTML=`\n\t\t<strong>Details:</strong> \n\t\t${c}\n\t\t`;let u=n();u.classList.add("project-tasks"),u.append(((t="")=>{let e=document.createElement("strong");return e.textContent=t,e})("Tasks:"));let p=n();return p.classList.add("project-tasks-container"),e.forEach((t=>{p.append(function(t,e){let r=n();r.classList.add("project-task-card");let c=n();c.classList.add("project-task-maininfo"),c.innerHTML=`\n\t\t<input type="checkbox">\n\t\t<div>\n\t\t\t<strong>#1:</strong>\n\t\t\t<span>${t}</span>\n\t\t</div>\n\t\t`;let o=n();return o.classList.add("project-task-priority"),o.innerHTML=`\n\t\t<strong>Priority</strong>\n\t\t<span>${e}</span>\n\t\t`,r.append(c,o),r}(t.title,t.priority))})),u.append(p),d.append(s,l,u),d}}}();function o(){let t=document.querySelector("#project-deadline-input").value,e=document.querySelector("#project-title-input").value;if(""!=t&&""!=e)return!0}function d(){let t=document.querySelector("#project-task-card-creator-inpt").value,e=document.querySelector("#project-task-card-creator-select").value;if(""!=t&&""!=e)return!0}const a=function(){let e=document.querySelector("#todo-display");e.textContent="",t.projectArray.forEach((t=>{e.append(c.createProjectContainer(t.title,t.projectTasks,t.deadline,t.description,t.projectId))}))},i=function(){let e=document.querySelector("#task-title-input"),r=document.querySelector("#task-deadline-input"),c=document.querySelector("#task-description-textarea"),o=document.querySelector("#priority-input");""!=e.value&&""!=r.value?(""==c.value?t.todoArray.push(new n(e.value,"None",r.value,o.value,!1)):t.todoArray.push(new n(e.value,c.value,r.value,o.value,!1)),s.removeTaskCreatorPopup()):s.showRequiredFields(),l(),c.value="",r.value="",e.value=""};let s=function(){let t=document.querySelector("#task-creator-screen"),e=function(){return document.createElement("div")},r=document.querySelector("#popup-background");r.addEventListener("click",(()=>{n()}));let n=function(){r.style.display="none",t.style.display="none"};return{createTodoElement:function(t,r,n,c){let o=document.createElement("span");o.classList.add("todo-card"),o.setAttribute("data-index",c);let d=e();d.classList.add("card-task"),d.innerHTML=n?`\n\t\t\t<div class="card-task-container">\n\t\t\t\t<input type="checkbox" class="todo-checkbox" checked>\n\t\t\t\n\t\t\t\t<div>\n\t\t\t\t\tTask:<h3>${t}</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`:`\n\t\t\t<div class="card-task-container">\n\t\t\t\t<input type="checkbox" class="todo-checkbox">\n\t\n\t\t\t\t<div>\n\t\t\t\t\tTask:<h3>${t}</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`;let a=e();return a.classList.add("todo-card-details"),a.innerHTML=`\n        <div class="right-part">\n\t\t\t<div class="card-dealine">\n\t\t\t\t<strong>Deadline</strong>: ${r}\n\t\t\t</div>\n\n\t\t\t<div class="todo-delete-btn">\n\t\t\t\tDelete\n\t\t\t</div>\n\t\t</div>\n\t\t`,o.append(d,a),o},createTaskContainer:function(){let t=document.createElement("div");return t.id="tasks-container",t},createTaskAddBtn:function(){let c=e();c.id="tasks-button-panel";let o=document.createElement("button");return o.id="add-task-btn",o.textContent="Add task",o.addEventListener("click",(()=>{!function(){let e=document.querySelector("#add-btn"),c=document.querySelector("#close-btn");r.style.display="block",t.style.display="flex",e.addEventListener("click",i),c.addEventListener("click",(()=>{n(),e.removeEventListener("click",i)}))}()})),c.append(o),c},removeTaskCreatorPopup:n,showRequiredFields:function(){let t=document.querySelector("#task-deadline-input"),e=document.querySelector("#task-title-input");e.style.backgroundColor="rgb(245, 213, 213)",e.style.outline="red solid 1px",e.style.color="red",t.style.backgroundColor="rgb(245, 213, 213)",t.style.outline="red solid 1px",t.style.color="red"}}}();function l(){let e=document.querySelector("#todo-display");e.textContent="",e.append(s.createTaskAddBtn());let r=s.createTaskContainer();e.append(r),t.todoArray.forEach(((t,e)=>{r.append(s.createTodoElement(t.task,t.deadline,t.check,e))})),document.querySelectorAll(".todo-card").forEach((e=>{let r=e.querySelector(".todo-checkbox");e.addEventListener("click",(n=>{let c=e.dataset.index;if("todo-delete-btn"==n.target.classList){let e=t.todoArray,r=[];e.forEach(((t,n)=>{e[n]!=e[c]&&r.push(t)})),t.todoArray=[...r],l()}else 1==r.checked?r.checked=!1:r.checked=!0,console.log(r.checked),t.todoArray[c].check!=r.checked&&(t.todoArray[c].check=r.checked)}))}))}const u=l;document.querySelector("#dashboard-btn"),document.querySelector("#projects-btn").addEventListener("click",a),document.querySelector("#tasks-btn").addEventListener("click",u)})();