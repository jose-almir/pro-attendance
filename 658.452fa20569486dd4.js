"use strict";(self.webpackChunkpro_attendance=self.webpackChunkpro_attendance||[]).push([[658],{4658:(Z,d,a)=>{a.r(d),a.d(d,{ClassesModule:()=>C});var c=a(9808),i=a(2477),e=a(2382),r=a(801),s=a(1223),u=a(9444);function m(t,o){if(1&t){const n=s.EpF();s.TgZ(0,"div",14)(1,"span",15),s._uU(2),s.qZA(),s._UZ(3,"input",16),s.TgZ(4,"button",17),s.NdJ("click",function(){const g=s.CHM(n).index;return s.oxw().removeAluno(g)}),s._uU(5," Remover "),s.qZA()()}if(2&t){const n=o.index;s.xp6(2),s.Oqu(n+1),s.xp6(1),s.Q6J("formControlName",n)}}const p=[{path:"",component:(()=>{class t{constructor(){this.faAdd=r.XSk}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-classes"]],decls:6,vars:1,consts:[[1,"section"],[1,"title","is-flex","is-justify-content-space-between"],["routerLink","add",1,"button","is-link","is-rounded"],[3,"icon"]],template:function(n,l){1&n&&(s.TgZ(0,"section",0)(1,"h1",1),s._uU(2," Suas turmas "),s.TgZ(3,"a",2),s._UZ(4,"fa-icon",3),s.qZA()(),s._UZ(5,"hr"),s.qZA()),2&n&&(s.xp6(4),s.Q6J("icon",l.faAdd))},directives:[i.yS,u.BN],styles:[""]}),t})()},{path:"add",component:(()=>{class t{constructor(n){this.fb=n,this.faAdd=r.XSk,this.faMinus=r.Kl4,this.addClassForm=this.fb.group({alunos:this.fb.array([["",e.kI.required]])})}get alunos(){return this.addClassForm.get("alunos")}newAluno(){this.alunos.push(this.fb.control("",e.kI.required)),console.log(this.addClassForm.value)}removeAluno(n){this.alunos.removeAt(n)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(e.qu))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-class-add"]],decls:22,vars:3,consts:[[1,"section",3,"formGroup"],["aria-label","breadcrumbs",1,"breadcrumb"],["routerLink","/turmas"],[1,"is-active"],["routerLink","add"],[1,"field"],[1,"label"],[1,"control"],["type","text","placeholder","Ex: BCW18 - JFS",1,"input"],[1,"label","is-flex","is-justify-content-space-between"],["type","button",1,"button","is-primary","is-small",3,"click"],[3,"icon"],["formArrayName","alunos"],["class","is-flex is-align-items-center mb-1",4,"ngFor","ngForOf"],[1,"is-flex","is-align-items-center","mb-1"],[1,"tag","is-black","mr-1"],["type","text","placeholder","Nome do aluno",1,"input",3,"formControlName"],["type","button",1,"button","is-danger","is-small","ml-1",3,"click"]],template:function(n,l){1&n&&(s.TgZ(0,"form",0)(1,"nav",1)(2,"ul")(3,"li")(4,"a",2),s._uU(5,"Turmas"),s.qZA()(),s.TgZ(6,"li",3)(7,"a",4),s._uU(8,"Adicionar"),s.qZA()()()(),s.TgZ(9,"div",5)(10,"label",6),s._uU(11,"Nome da turma"),s.qZA(),s.TgZ(12,"div",7),s._UZ(13,"input",8),s.qZA()(),s.TgZ(14,"div",5)(15,"label",9),s._uU(16,"Lista de alunos "),s.TgZ(17,"button",10),s.NdJ("click",function(){return l.newAluno()}),s._UZ(18,"fa-icon",11),s._uU(19," Aluno "),s.qZA()(),s.TgZ(20,"div",12),s.YNc(21,m,6,2,"div",13),s.qZA()()()),2&n&&(s.Q6J("formGroup",l.addClassForm),s.xp6(18),s.Q6J("icon",l.faAdd),s.xp6(3),s.Q6J("ngForOf",l.alunos.controls))},directives:[e._Y,e.JL,e.sg,i.yS,u.BN,e.CE,c.sg,e.Fj,e.JJ,e.u],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.Bz.forChild(p)],i.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.ez,f,u.uH,e.UX]]}),t})()}}]);