import{a as T,b as x,e as y}from"./chunk-MNXY6R3H.js";import"./chunk-LG3ESZ4H.js";import{Ad as v,Bd as S,Cd as D,Fd as E,Mb as l,Nb as f,Ra as h,Sa as s,Vb as b,X as p,dc as u,ec as g,g as c,ub as n,vb as o,wb as m}from"./chunk-IFPKIGQ4.js";var A=(()=>{let i=class i{constructor(e,t,a,d){this.dataTableService=e,this.translate=t,this.dataService=a,this.sharedModalService=d,this.subscription=new c,this.skip=0,this.take=10,this.columns=[{field:"title",header:"TITLE",type:"text",canSort:!1},{field:"down_percentage",header:"DOWN %",type:"text",canSort:!1},{field:"exceptional_percentage",header:"Exceptional %",type:"text",canSort:!1},{field:"maintenance_percentage",header:"Maintenance %",type:"text",canSort:!1},{field:"receipt_percentage",header:"Receipt %",type:"text",canSort:!1}],this.actions=[{label:"EDIT",icon:"assets/images/edit-action.svg",function:this.onEdit.bind(this),btnConditionBasedField:""},{label:"DELETE",icon:"assets/images/delete-action.svg",function:this.onDelete.bind(this),btnConditionBasedField:""}],e.cols=this.columns,e.isLoading=!1,e.hasPaginator=!1,e.hasFlatActions=!0,e.actionsFlat=this.actions}ngOnInit(){this.getData(),this.getPageChanged()}getData(){this.dataTableService.isLoading=!0,this.subscription.add(this.dataService.postFn("template/list",{}).subscribe(e=>{this.dataTableService.isLoading=!1,this.dataTableService.totalRecords=e?.total,this.dataTableService.rows.set(e?.list)}))}onEdit(e){}onDelete(e){let t={title:"Are you sure to delete this Template?",message:"",type:"error",btnLabel:"DELETE"};this.sharedModalService.confirmCard(t).onClose.subscribe(a=>{a=="confirm"&&this.deleteItem(e)})}deleteItem(e){let t=e.template_id;this.subscription.add(this.dataService.deleteFn(`template/delete/${t}`).subscribe(a=>{a?.status&&this.sharedModalService.successBasicCard({title:"Template Deleted Successfully",message:"",btnLabel:"OKAY"}).onClose.subscribe(d=>{this.getData()})}))}getPageChanged(){this.subscription.add(this.dataTableService.getPageChanged().subscribe(e=>{this.skip=e.page*e.rows,this.take=e.rows,this.getData()}))}};i.\u0275fac=function(t){return new(t||i)(s(T),s(v),s(E),s(y))},i.\u0275cmp=p({type:i,selectors:[["app-payment-plan-list"]],standalone:!0,features:[b],decls:9,vars:3,consts:[[1,"p-4"],[1,"d-flex","justify-content-between","mb-3"],[1,"btn","bg-btn","text-white"],[1,"position-relative","shadow","rounded"]],template:function(t,a){t&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),l(3),u(4,"translate"),o(),n(5,"button",2),l(6,"New Payment Plan"),o()(),n(7,"div",3),m(8,"data-table"),o()()),t&2&&(h(3),f(g(4,1,"PAYMENT_PLANS")))},dependencies:[x,D,S]});let r=i;return r})();export{A as PaymentPlanListComponent};
