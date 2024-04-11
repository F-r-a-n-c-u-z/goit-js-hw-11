import{S as f,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function m(a){document.querySelector(".gallery").innerHTML="";const o=a.map(({webformatURL:t,largeImageURL:e,tags:s,likes:n,views:c,comments:u,downloads:p})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${s}"
    />
  </a>
  <div class="info">
  <p class="field">
  <span class="text">Likes</span>
  <span class="value">${n}</span>
  </p>
  <p class="field">
  <span class="text">Views</span>
  <span class="value">${c}
  </p>
  <p class="field">
  <span class="text">Comments</span>
  <span class="value">${u}</span>
  </p >
  <p class="field">
  <span class="text">Downloads</span>
  <span class="value">${p}</span>
  </p>
  </div>
</li>`).join(" ");document.querySelector(".gallery").insertAdjacentHTML("beforeend",o),new f(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250}).refresh()}function d(a){const o="43264950-7d4cd6be2017577f15438949e",r=new URLSearchParams({key:o,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0&&i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,close:!1,timeout:5e3}),console.log(t),m(t.hits)}).catch(t=>{console.log("catch",t)})}const l=document.querySelector(".form");document.querySelector("button");l.addEventListener("submit",g);function g(a){a.preventDefault();const r=document.querySelector("#pictures").value.trim();if(r===""){console.log("empty"),i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,close:!1,timeout:5e3});return}d(r),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
