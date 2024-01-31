import{j as h,n as c,r as d,R as S,a as F}from"./vendor.ebc9174b.js";const E=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}};E();const e=h.exports.jsx,s=h.exports.jsxs,k=h.exports.Fragment,w=c.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`,C=({children:r})=>e(w,{children:r}),N=c.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`,A=c.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`,y=(r,n)=>{const[i,a]=d.exports.useState("");return[i,()=>s(k,{children:[e(N,{children:r}),s(A,{value:i,onChange:t=>a(t.target.value),children:[e("option",{value:"",children:"Seleccione"}),n.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})]})]},I=[{id:"USD",nombre:"Dolar de Estados Unidos"},{id:"MXN",nombre:"Peso Mexicano"},{id:"EUR",nombre:"Euro"},{id:"GBP",nombre:"Libra Esterlina"}],L=c.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`,P=({setMonedas:r})=>{const[n,i]=d.exports.useState([]),[a,o]=d.exports.useState(!1),[t,l]=y("Elige tu Moneda",I),[p,m]=y("Elige tu Criptomoneda",n);return d.exports.useEffect(()=>{(async()=>{const v=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD")).json()).Data.map(b=>({id:b.CoinInfo.Name,nombre:b.CoinInfo.FullName}));i(v)})()},[]),s(k,{children:[a&&e(C,{children:"Todos los campos son obligatorios"}),s("form",{onSubmit:f=>{if(f.preventDefault(),[t,p].includes("")){o(!0);return}o(!1),r({moneda:t,criptomoneda:p})},children:[e(l,{}),e(m,{}),e(L,{type:"submit",value:"Cotizar"})]})]})},D=c.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`,j=c.img`
    display: block;
    width: 120px;
`,u=c.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`,z=c.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`,M=({resultado:r})=>{const{PRICE:n,HIGHDAY:i,LOWDAY:a,CHANGEPCT24HOUR:o,IMAGEURL:t,LASTUPDATE:l}=r;return s(D,{children:[e(j,{src:`https://cryptocompare.com/${t}`,alt:"imagen cripto"}),s("div",{children:[s(z,{children:["El Precio es de: ",e("span",{children:n})]}),s(u,{children:["Precio m\xE1s alto del d\xEDa: ",e("span",{children:i})]}),s(u,{children:["Precio m\xE1s bajo del d\xEDa: ",e("span",{children:a})]}),s(u,{children:["Variaci\xF3n \xFAltimas 24 horas: ",e("span",{children:o})]}),s(u,{children:["\xDAltima Actualizaci\xF3n: ",e("span",{children:l})]})]})]})};const R=()=>s("div",{className:"sk-circle",children:[e("div",{className:"sk-circle1 sk-child"}),e("div",{className:"sk-circle2 sk-child"}),e("div",{className:"sk-circle3 sk-child"}),e("div",{className:"sk-circle4 sk-child"}),e("div",{className:"sk-circle5 sk-child"}),e("div",{className:"sk-circle6 sk-child"}),e("div",{className:"sk-circle7 sk-child"}),e("div",{className:"sk-circle8 sk-child"}),e("div",{className:"sk-circle9 sk-child"}),e("div",{className:"sk-circle10 sk-child"}),e("div",{className:"sk-circle11 sk-child"}),e("div",{className:"sk-circle12 sk-child"})]});var O="https://CrowSkin.github.io/cotizadorcripto/assets/imagen-criptos.c0430b0f.png";const U=c.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,$=c.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`,T=c.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;function H(){const[r,n]=d.exports.useState({}),[i,a]=d.exports.useState({}),[o,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(r).length>0&&(async()=>{t(!0),a({});const{moneda:p,criptomoneda:m}=r,g=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${m}&tsyms=${p}`,x=await(await fetch(g)).json();a(x.DISPLAY[m][p]),t(!1)})()},[r]),s(U,{children:[e($,{src:O,alt:"imagenes criptomonedas"}),s("div",{children:[e(T,{children:"Cotiza Criptomonedas al Instante"}),e(P,{setMonedas:n}),o&&e(R,{}),i.PRICE&&e(M,{resultado:i})]})]})}S.render(e(F.StrictMode,{children:e(H,{})}),document.getElementById("root"));
