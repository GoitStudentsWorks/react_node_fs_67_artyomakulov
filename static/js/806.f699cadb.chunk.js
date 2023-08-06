"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{4231:function(s,e,a){a(2791);e.Z=a.p+"static/media/check.3ee9018fb5a412de320aeba2024963b5.svg"},3202:function(s,e,a){a(2791);e.Z=a.p+"static/media/cross-small.979527430babc874f1a86f2736f96771.svg"},5111:function(s,e,a){a(2791);e.Z=a.p+"static/media/eye-closed.095a971de4c426c21e89ae6c71345c51.svg"},618:function(s,e,a){a(2791);e.Z=a.p+"static/media/eye-open.1aad4261a9f03e6275c5a789e0a7310b.svg"},7806:function(s,e,a){function r(s,e){if(null==s)return{};var a,r,t=function(s,e){if(null==s)return{};var a,r,t={},i=Object.keys(s);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(t[a]=s[a]);return t}(s,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(s,a)&&(t[a]=s[a])}return t}a.r(e),a.d(e,{default:function(){return S}});var t=a(9439),i=a(2791),c=a(1087),n=a(9434),o=a(4954),m=a(6864),l=a(6727),d=l.Ry().shape({name:l.Z_().required("Name is a required field").min(2,"Name must be at least 2 characters").max(16,"Name must be at least 16 characters").matches(/^[A-Za-z]{2,16}$/,"The name must be in English"),email:l.Z_().required("Email is a required field").matches(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,"Enter a valid Email"),password:l.Z_().required("Password is a required field").min(6,"Password must be at least 6 characters").max(16,"Password must be no more than 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and an uppercase letter").test("is-secure","Password is secure",(function(s){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(s)})),confirmPassword:l.Z_().required("Password confirmation is required").oneOf([l.iH("password")],"Passwords must match")}),u=a(5111),f=a(618),p=a(3202),w=a(4231),g="RegisterForm_registration_container__tFDyq",_="RegisterForm_registration_title__Npwzr",h="RegisterForm_registration_form__QC8e8",x="RegisterForm_input__FsgBz",j="RegisterForm_errorInput__LuqSs",N="RegisterForm_successInput__CuHET",v="RegisterForm_button__B3hFq",b="RegisterForm_refTitleToLogin__Usi9f",P="RegisterForm_refLogin__qwCrR",Z="RegisterForm_inputContainer__EPTpq",y="RegisterForm_error__yDHjz",F="RegisterForm_successMessage__ttrKD",k="RegisterForm_imageEye__dHlGt",R="RegisterForm_imageCheck__0ESe1",C="RegisterForm_imageCross__C6YzT",q=a(494),E=a(3329),O=["confirmPassword"],S=function(){var s=(0,n.I0)(),e=(0,i.useState)(!1),a=(0,t.Z)(e,2),l=a[0],S=a[1],z=(0,i.useState)(!1),B=(0,t.Z)(z,2),T=B[0],A=B[1],H=function(){S((function(s){return!s}))},I=function(){A((function(s){return!s}))},L=function(s,e){e(s,"")};return(0,E.jsx)(q.Z,{children:(0,E.jsx)("div",{className:g,children:(0,E.jsx)(m.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:d,onSubmit:function(e,a){var t=a.resetForm,i=a.setErrors,c=a.setSubmitting,n=(e.confirmPassword,r(e,O));s((0,o.z2)(n)).then((function(){t()})).catch((function(s){c(!1),i(s.response.data)}))},children:function(s){s.values;var e=s.errors,a=s.touched,r=s.setFieldValue;return(0,E.jsxs)(m.l0,{className:h,autoComplete:"off",children:[(0,E.jsx)("h2",{className:_,children:"Registration"}),(0,E.jsxs)("div",{className:Z,children:[(0,E.jsx)(m.gN,{type:"text",name:"name",placeholder:"Name",className:"".concat(x," ").concat(a.name&&e.name&&j||a.name&&!e.name&&N)}),a.name&&!e.name&&(0,E.jsx)("img",{src:w.Z,alt:"check",className:R}),a.name&&e.name&&(0,E.jsx)("img",{src:p.Z,alt:"small cross",className:C,onClick:function(){return L("name",r)}}),(0,E.jsx)(m.Bc,{name:"name",component:"div",className:y})]}),(0,E.jsxs)("div",{className:Z,children:[(0,E.jsx)(m.gN,{type:"email",name:"email",placeholder:"Email",className:"".concat(x," ").concat(a.email&&e.email&&j||a.email&&!e.email&&N)}),a.email&&!e.email&&(0,E.jsx)("img",{src:w.Z,alt:"check",className:R}),a.email&&e.email&&(0,E.jsx)("img",{src:p.Z,alt:"small cross",className:C,onClick:function(){return L("email",r)}}),(0,E.jsx)(m.Bc,{name:"email",component:"div",className:y})]}),(0,E.jsxs)("div",{className:Z,children:[(0,E.jsxs)("div",{style:{position:"relative"},children:[(0,E.jsx)(m.gN,{type:l?"text":"password",name:"password",placeholder:"Password",className:"".concat(x," ").concat(a.password&&e.password&&j||a.password&&!e.password&&N)}),a.password&&!e.password&&(0,E.jsx)("img",{src:w.Z,alt:"check",className:R}),a.password&&e.password&&(0,E.jsx)("img",{src:p.Z,alt:"small cross",className:C,onClick:function(){return L("password",r)}}),(0,E.jsx)("img",{src:l?f.Z:u.Z,alt:"toggle password visibility",className:k,style:a.password?{right:"40px"}:{},onClick:H})]}),a.password&&!e.password&&(0,E.jsx)("div",{className:F,children:"Password is secured"}),(0,E.jsx)(m.Bc,{name:"password",component:"div",className:y})]}),(0,E.jsxs)("div",{className:Z,children:[(0,E.jsxs)("div",{style:{position:"relative"},children:[(0,E.jsx)(m.gN,{type:T?"text":"password",name:"confirmPassword",placeholder:"Confirm password",className:"".concat(x," ").concat(a.confirmPassword&&e.confirmPassword&&j||a.confirmPassword&&!e.confirmPassword&&N)}),a.confirmPassword&&!e.confirmPassword&&(0,E.jsx)("img",{src:w.Z,alt:"check",className:R}),a.confirmPassword&&e.confirmPassword&&(0,E.jsx)("img",{src:p.Z,alt:"small cross",className:C,onClick:function(){return L("confirmPassword",r)}}),(0,E.jsx)("img",{src:T?f.Z:u.Z,alt:"toggle confirm password visibility",className:k,style:a.confirmPassword?{right:"40px"}:{},onClick:I})]}),(0,E.jsx)(m.Bc,{name:"confirmPassword",component:"div",className:y})]}),(0,E.jsx)("button",{type:"submit",className:v,children:"Registration"}),(0,E.jsxs)("p",{className:b,children:["Already have an account?"," ",(0,E.jsx)(c.rU,{to:"/login",className:P,children:"Login"})]})]})}})})})}}}]);
//# sourceMappingURL=806.f699cadb.chunk.js.map