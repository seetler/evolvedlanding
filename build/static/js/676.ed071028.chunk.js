"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[676],{1676:(e,r,n)=>{n.r(r),n.d(r,{default:()=>$});var s=n(1319),t=n(4647),a=n(9281),i=n(2080),l=n(5043);function o(e){let r={};return e.name||(r.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(r.email="Email address is invalid"):r.email="Email address is required",e.message||(r.message="Message is required"),r}var d=n(5639),c=n(9);const m=(0,c.Ay)("p")`
  margin-top: 1.5rem;
`,p=(0,c.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,c.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var x=n(579);const h=(0,a.C)()((e=>{let{title:r,content:n,t:s}=e;return(0,x.jsxs)(p,{children:[(0,x.jsx)("h6",{children:s(r)}),(0,x.jsx)(u,{children:(0,x.jsx)(m,{children:s(n)})})]})})),g=(0,c.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,f=(0,c.Ay)("input")`
  font-size: 0.875rem;
`,y=(0,c.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,j=(0,c.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,b=(0,c.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,A=(0,a.C)()((e=>{let{name:r,placeholder:n,onChange:s,t:t}=e;return(0,x.jsxs)(g,{children:[(0,x.jsx)(b,{htmlFor:r,children:t(r)}),(0,x.jsx)(f,{placeholder:t(n),name:r,id:r,onChange:s})]})})),v=(0,a.C)()((e=>{let{name:r,placeholder:n,onChange:s,t:t}=e;return(0,x.jsxs)(y,{children:[(0,x.jsx)(b,{htmlFor:r,children:t(r)}),(0,x.jsx)(j,{placeholder:t(n),id:r,name:r,onChange:s})]})})),C=c.Ay.div`
  padding: 50px 0;
`,S=c.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,k=c.Ay.span`
  color: red;
  font-size: 14px;
`,w=c.Ay.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`,z=c.Ay.p`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: ${e=>{let{success:r,error:n}=e;return r?"green":n?"red":"black"}};
  background-color: ${e=>{let{success:r,error:n}=e;return r?"#d4edda":n?"#f8d7da":"transparent"}};
  border: ${e=>{let{success:r,error:n}=e;return r?"1px solid #c3e6cb":n?"1px solid #f5c6cb":"none"}};
`,$=(0,a.C)()((e=>{let{title:r,content:n,id:a,t:c}=e;const{values:m,errors:p,handleChange:u,handleSubmit:g,isSubmitting:f,successMessage:y,errorMessage:j}=(e=>{const[r,n]=(0,l.useState)({name:"",email:"",message:""}),[s,t]=(0,l.useState)({}),[a,i]=(0,l.useState)(!1),[o,d]=(0,l.useState)(null),[c,m]=(0,l.useState)(null);return{values:r,errors:s,handleChange:e=>{const{name:s,value:t}=e.target;n({...r,[s]:t})},handleSubmit:async s=>{s.preventDefault(),i(!0),d(null),m(null);const a=e(r);if(t(a),Object.keys(a).length>0)i(!1);else try{const e=await fetch("/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});(await e.json()).success?(d("\u2705 Email Sent Successfully!"),n({name:"",email:"",message:""})):m("\u274c Failed to send email. Try again later.")}catch(l){console.error("Error submitting form:",l),m("\u274c An error occurred. Please try again.")}finally{i(!1)}},isSubmitting:a,successMessage:o,errorMessage:c}})(o),b=e=>{let{type:r}=e;const n=p[r];return n?(0,x.jsx)(k,{children:n}):null};return(0,x.jsx)(C,{id:a,children:(0,x.jsxs)(s.A,{justify:"space-between",align:"middle",children:[(0,x.jsx)(t.A,{lg:12,md:11,sm:24,xs:24,children:(0,x.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,x.jsx)(h,{title:r,content:n})})}),(0,x.jsx)(t.A,{lg:12,md:12,sm:24,xs:24,children:(0,x.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,x.jsxs)(S,{autoComplete:"off",onSubmit:g,children:[y&&(0,x.jsx)(z,{success:!0,children:y}),j&&(0,x.jsx)(z,{error:!0,children:j}),(0,x.jsxs)(t.A,{span:24,children:[(0,x.jsx)(A,{type:"text",name:"name",placeholder:c("Your Name"),value:m.name||"",onChange:u}),(0,x.jsx)(b,{type:"name"})]}),(0,x.jsxs)(t.A,{span:24,children:[(0,x.jsx)(A,{type:"text",name:"email",placeholder:c("Your Email"),value:m.email||"",onChange:u}),(0,x.jsx)(b,{type:"email"})]}),(0,x.jsxs)(t.A,{span:24,children:[(0,x.jsx)(v,{placeholder:c("Your Message"),value:m.message||"",name:"message",onChange:u}),(0,x.jsx)(b,{type:"message"})]}),(0,x.jsx)(w,{children:(0,x.jsx)(d.$,{name:"submit",children:c(f?"Sending...":"Submit")})})]})})})]})})}))},5639:(e,r,n)=>{n.d(r,{$:()=>a});const s=(0,n(9).Ay)("button")`
  background: ${e=>e.color||"#2e186a"};
  color: ${e=>e.color?"#2E186A":"#fff"};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;var t=n(579);const a=e=>{let{color:r,children:n,onClick:a}=e;return(0,t.jsx)(s,{color:r,onClick:a,children:n})}}}]);
//# sourceMappingURL=676.ed071028.chunk.js.map