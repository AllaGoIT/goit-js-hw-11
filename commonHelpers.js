import{S as m,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=document.querySelector("ul.gallery"),p=new m(".gallery a",{captionPosition:"bottom",captionDelay:250,captionsData:"alt"}),f=s=>{const o=s.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:c,comments:u,downloads:d})=>`
     <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
          class="gallery-image"
          src="${a}"
          alt="${t}"
        />
        <div class="text-list">
          <p class="text-likes">Likes: ${i}</p> 
          <p class="text-views">Views: ${c}</p>
          <p class="text-coments">Comments: ${u}</p>
         <p class="text-downloads">Downloads: ${d}</p>
        </div>
      </a>
    </li>
    `).join("");y.insertAdjacentHTML("beforeend",o),p.refresh();const r=document.querySelector(".loader");r.style.visibility="hidden",r.style.pointerEvents="none"},h="https://pixabay.com/api/",g="43918725-f2c9edad28ee6306c974c89a7",b=(s="cat")=>{const o=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${o}`).then(r=>{if(!r.ok)throw new Error(n.show({position:"topCenter",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",close:!0}));return r.json()})},w=document.querySelector(".form");w.addEventListener("submit",L);const l=document.querySelector(".loader"),E=document.querySelector("ul.gallery");function L(s){s.preventDefault();const o=s.target.elements[0].value.trim();s.target.reset(),l.style.visibility="visible",l.style.pointerEvents="all",o&&b(o).then(r=>{if(r.total===0)throw new Error(n.show({position:"topCenter",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",close:!0}));f(r.hits)}).catch(r=>{console.log(r)}),E.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
