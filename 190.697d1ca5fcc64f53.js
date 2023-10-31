"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[190],{1179:(nt,v,c)=>{c.r(v),c.d(v,{CountriesModule:()=>tt});var a=c(6814),p=c(600),t=c(4946),b=c(6306),Z=c(2096),A=c(7398),l=c(9397),_=c(9862);let g=(()=>{class i{constructor(e){this.http=e,this.urlApi="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(e){return this.http.get(e).pipe((0,b.K)(()=>(0,Z.of)([])))}searchCountryByAlphaCode(e){return this.http.get(`${this.urlApi}/alpha/${e}`).pipe((0,A.U)(s=>s.length>0?s[0]:null),(0,b.K)(()=>(0,Z.of)(null)))}searchCapital(e){return this.getCountriesRequest(`${this.urlApi}/capital/${e}`).pipe((0,l.b)(s=>this.cacheStore.byCapital={term:e,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}searchCountry(e){return this.getCountriesRequest(`${this.urlApi}/name/${e}`).pipe((0,l.b)(s=>this.cacheStore.byCountries={term:e,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}searchRegion(e){return this.getCountriesRequest(`${this.urlApi}/region/${e}`).pipe((0,l.b)(s=>this.cacheStore.byRegion={region:e,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}static#t=this.\u0275fac=function(n){return new(n||i)(t.LFG(_.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var S=c(8645),I=c(7394);class U extends I.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const m={setInterval(i,o,...e){const{delegate:n}=m;return n?.setInterval?n.setInterval(i,o,...e):setInterval(i,o,...e)},clearInterval(i){const{delegate:o}=m;return(o?.clearInterval||clearInterval)(i)},delegate:void 0};var w=c(9039);const C={now:()=>(C.delegate||Date).now(),delegate:void 0};class d{constructor(o,e=d.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,n){return new this.schedulerActionCtor(this,o).schedule(n,e)}}d.now=C.now;const B=new class P extends d{constructor(o,e=d.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let n;this._active=!0;do{if(n=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,n){for(;o=e.shift();)o.unsubscribe();throw n}}}(class q extends U{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var n;if(this.closed)return this;this.state=o;const s=this.id,r=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(r,s,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(r,this.id,e),this}requestAsyncId(o,e,n=0){return m.setInterval(o.flush.bind(o,this),n)}recycleAsyncId(o,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&m.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(o,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let s,n=!1;try{this.work(o)}catch(r){n=!0,s=r||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,w.P)(n,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}});var F=c(9360),J=c(8251);const j=["inputText"];let x=(()=>{class i{constructor(){this.debouncer=new S.x,this.placeholder="",this.valorInitial="",this.onValue=new t.vpe,this.onDebounce=new t.vpe}ngOnInit(){this.debouncerSubscribe=this.debouncer.pipe(function N(i,o=B){return(0,F.e)((e,n)=>{let s=null,r=null,u=null;const f=()=>{if(s){s.unsubscribe(),s=null;const h=r;r=null,n.next(h)}};function et(){const h=u+i,T=o.now();if(T<h)return s=this.schedule(void 0,h-T),void n.add(s);f()}e.subscribe((0,J.x)(n,h=>{r=h,u=o.now(),s||(s=o.schedule(et,i),n.add(s))},()=>{f(),n.complete()},void 0,()=>{r=s=null}))})}(300)).subscribe(e=>this.onDebounce.emit(e))}ngOnDestroy(){this.debouncerSubscribe?.unsubscribe()}searchItem(e){this.onValue.emit(e),this.inputText.nativeElement.value=""}onKeyPress(e){this.debouncer.next(e)}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["shared-search-box"]],viewQuery:function(n,s){if(1&n&&t.Gf(j,5),2&n){let r;t.iGM(r=t.CRH())&&(s.inputText=r.first)}},inputs:{placeholder:"placeholder",valorInitial:"valorInitial"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup"],["inputText",""]],template:function(n,s){if(1&n){const r=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup",function(){t.CHM(r);const f=t.MAs(1);return t.KtG(s.onKeyPress(f.value))}),t.qZA()}2&n&&t.Q6J("placeholder",s.placeholder)("value",s.valorInitial)},encapsulation:2})}return i})(),O=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","45","height","45","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Buscando..."),t.qZA(),t.O4$(),t.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),t._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),t.qZA(),t.TgZ(9,"circle",3),t._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),t.qZA(),t.TgZ(13,"circle",10),t._UZ(14,"animate",11),t.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;display:flex;align-items:center;box-shadow:0 3px 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]})}return i})();function R(i,o){1&i&&(t.TgZ(0,"div",2),t._uU(1,"No hay paises que mostrar"),t.qZA())}const L=function(i){return["/countries/by/",i]};function M(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"th"),t._uU(4),t.qZA(),t.TgZ(5,"th"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"th"),t._uU(8),t.qZA(),t.TgZ(9,"th"),t._uU(10),t.qZA(),t.TgZ(11,"th"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"th")(15,"a",6),t._uU(16,"Info"),t.qZA()()()),2&i){const e=o.$implicit,n=o.index;t.xp6(2),t.hij(" ",n+1," "),t.xp6(2),t.hij(" ",e.flag," "),t.xp6(2),t.Q6J("src",e.flags.svg,t.LSH)("alt",e.flags.alt),t.xp6(2),t.hij(" ",e.name.common," "),t.xp6(2),t.hij(" ",e.capital," "),t.xp6(2),t.hij(" ",t.lcZ(13,8,e.population)," "),t.xp6(3),t.Q6J("routerLink",t.VKq(10,L,e.cca3))}}function Q(i,o){if(1&i&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Icon"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblaci\xf3n"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,M,17,12,"tr",4),t.qZA()()),2&i){const e=t.oxw();t.xp6(17),t.Q6J("ngForOf",e.countries)}}let y=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["width","70px",3,"src","alt"],[3,"routerLink"]],template:function(n,s){if(1&n&&(t.YNc(0,R,2,0,"div",0),t.YNc(1,Q,18,1,"ng-template",null,1,t.W1O)),2&n){const r=t.MAs(2);t.Q6J("ngIf",0===s.countries.length)("ngIfElse",r)}},dependencies:[a.sg,a.O5,p.rH,a.JJ],encapsulation:2})}return i})();function D(i,o){1&i&&t._UZ(0,"shared-loading-spinner")}let E=(()=>{class i{constructor(e){this.countriesService=e,this.countries=[],this.isLoading=!1,this.termInitial=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.termInitial=this.countriesService.cacheStore.byCapital.term}byCapital(e){this.isLoading=!0,this.countriesService.searchCapital(e).subscribe(n=>{this.countries=n,this.isLoading=!1})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"valorInitial","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(n,s){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(u){return s.byCapital(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,D,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("valorInitial",s.termInitial),t.xp6(4),t.Q6J("ngIf",s.isLoading),t.xp6(1),t.Q6J("countries",s.countries))},dependencies:[a.O5,x,O,y],encapsulation:2})}return i})(),k=(()=>{class i{constructor(e){this.countriesService=e,this.countries=[],this.termInitial=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.termInitial=this.countriesService.cacheStore.byCountries.term}byCountry(e){this.countriesService.searchCountry(e).subscribe(n=>this.countries=n)}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xeds",3,"valorInitial","onDebounce"],[3,"countries"]],template:function(n,s){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Pa\xeds"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(u){return s.byCountry(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"countries-table",3),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("valorInitial",s.termInitial),t.xp6(4),t.Q6J("countries",s.countries))},dependencies:[x,y],encapsulation:2})}return i})();const Y=function(i){return{"btn-outline-primary":i}};function $(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.byRegion(r))}),t._uU(1),t.qZA()}if(2&i){const e=o.$implicit,n=t.oxw();t.Q6J("ngClass",t.VKq(2,Y,n.regionSelected===e)),t.xp6(1),t.hij(" ",e," ")}}let K=(()=>{class i{constructor(e){this.countriesService=e,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.regionSelected=this.countriesService.cacheStore.byRegion.region}byRegion(e){this.regionSelected=e,this.countriesService.searchRegion(e).subscribe(n=>this.countries=n)}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(n,s){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Regi\xf3n"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,$,2,4,"button",2),t.qZA()(),t.TgZ(6,"div",0)(7,"div",3),t._UZ(8,"hr")(9,"countries-table",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",s.regions),t.xp6(4),t.Q6J("countries",s.countries))},dependencies:[a.mk,a.sg,y],encapsulation:2})}return i})();var V=c(4664);function X(i,o){1&i&&(t.TgZ(0,"div",2),t._uU(1," Espere por favor "),t.qZA())}function z(i,o){if(1&i&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pa\xeds: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()()()(),t.TgZ(7,"div",3)(8,"div",5)(9,"h3"),t._uU(10,"Bandera"),t.qZA(),t._UZ(11,"img",6),t.qZA(),t.TgZ(12,"div",7)(13,"h3"),t._uU(14,"Informaci\xf3n: "),t.qZA(),t.TgZ(15,"ul",8)(16,"li",9)(17,"strong"),t._uU(18,"Poblaci\xf3n: "),t.qZA(),t._uU(19),t.ALo(20,"number"),t.qZA(),t.TgZ(21,"li",9)(22,"strong"),t._uU(23,"C\xf3digo: "),t.qZA(),t._uU(24),t.qZA()()()(),t.TgZ(25,"div",10)(26,"div",7)(27,"h3"),t._uU(28,"Traducciones"),t.qZA(),t.TgZ(29,"div",11)(30,"span",12),t._uU(31),t.qZA(),t.TgZ(32,"span",12),t._uU(33),t.qZA(),t.TgZ(34,"span",12),t._uU(35),t.qZA(),t.TgZ(36,"span",12),t._uU(37),t.qZA(),t.TgZ(38,"span",12),t._uU(39),t.qZA(),t.TgZ(40,"span",12),t._uU(41),t.qZA(),t.TgZ(42,"span",12),t._uU(43),t.qZA(),t.TgZ(44,"span",12),t._uU(45),t.qZA(),t.TgZ(46,"span",12),t._uU(47),t.qZA()()()()()),2&i){const e=t.oxw();t.xp6(6),t.hij(" ",e.country.name.common," "),t.xp6(5),t.Q6J("src",e.country.flags.svg,t.LSH)("alt",e.country.flags.alt),t.xp6(8),t.hij(" ",t.lcZ(20,14,e.country.population)," "),t.xp6(5),t.hij(" ",e.country.cca3," "),t.xp6(7),t.hij(" ",e.country.translations.ara.common," "),t.xp6(2),t.hij(" ",e.country.translations.bre.common," "),t.xp6(2),t.hij(" ",e.country.translations.cym.common," "),t.xp6(2),t.hij(" ",e.country.translations.jpn.common," "),t.xp6(2),t.hij(" ",e.country.translations.kor.common," "),t.xp6(2),t.hij(" ",e.country.translations.per.common," "),t.xp6(2),t.hij(" ",e.country.translations.rus.common," "),t.xp6(2),t.hij(" ",e.country.translations.urd.common," "),t.xp6(2),t.hij(" ",e.country.translations.zho.common," ")}}const H=[{path:"by-capital",component:E},{path:"by-country",component:k},{path:"by-region",component:K},{path:"by/:id",component:(()=>{class i{constructor(e,n,s){this.activedRoute=e,this.countriesService=n,this.router=s}ngOnInit(){this.activedRoute.params.pipe((0,V.w)(({id:e})=>this.countriesService.searchCountryByAlphaCode(e))).subscribe(e=>e?this.country=e:this.router.navigateByUrl(""))}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(p.gz),t.Y36(g),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["noCountry",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,s){if(1&n&&(t.YNc(0,X,2,0,"ng-template",null,0,t.W1O),t.YNc(2,z,48,16,"div",1)),2&n){const r=t.MAs(1);t.xp6(2),t.Q6J("ngIf",s.country)("ngIfElse",r)}},dependencies:[a.O5,a.JJ],encapsulation:2})}return i})()},{path:"**",redirectTo:"by-capital"}];let G=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(H),p.Bz]})}return i})();var W=c(6208);let tt=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[a.ez,G,W.m]})}return i})()}}]);