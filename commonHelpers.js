import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const y=document.querySelector("ul.gallery"),f=new d(".gallery a",{captionPosition:"bottom",captionDelay:250,captionsData:"alt"}),p=s=>{const r=s.map(({webformatURL:l,largeImageURL:e,tags:o,likes:i,views:a,comments:c,downloads:u})=>`
     <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
          class="gallery-image"
          src="${l}"
          alt="${o}"
        />
        <div class="text-list">
          <p class="text-likes">Likes:${i}</p> 
          <p class="text-views">Views: ${a}</p>
          <p class="text-coments">Comments: ${c}</p>
         <p class="text-downloads">Downloads: ${u}</p>
        </div>
      </a>
    </li>
    `).join("");y.insertAdjacentHTML("beforeend",r),f.refresh();const t=document.querySelector(".loader");t.style.visibility="hidden",t.style.pointerEvents="none"},h="https://pixabay.com/api/",g="43918725-f2c9edad28ee6306c974c89a7",b=(s="cat")=>{const r=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${r}`).then(t=>(t.ok||console.log(t.status),t.json()))},v=document.querySelector(".form");v.addEventListener("submit",L);const n=document.querySelector(".loader"),E=document.querySelector("ul.gallery");function L(s){s.preventDefault();const r=s.target.elements[0].value.trim();s.target.reset(),n.style.visibility="visible",n.style.pointerEvents="all",r&&b(r).then(t=>{if(t.total===0)throw n.style.visibility="hidden",n.style.pointerEvents="none",new Error(m.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",close:!0}));p(t.hits)}).catch(t=>{console.log(t)}),E.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
