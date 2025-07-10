(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=()=>{let e=new Set,t=t=>{e.add(t)},n=t=>{e.delete(t)},r=(...t)=>{e.forEach(e=>e(...t))};return{subscribe:t,unsubscribe:n,notify:r}},a=e=>{let{subscribe:t,notify:n}=i(),r=`/front_6th_chapter1-1`,a=()=>{let e=window.location.pathname;return e.startsWith(r)?e.slice(21)||`/`:e},o=()=>{let t=a();if(e[t])return e[t];for(let[n,r]of Object.entries(e))if(n.includes(`:`)){let e=n.split(`/`),i=t.split(`/`);if(e.length===i.length){let t=e.every((e,t)=>e.startsWith(`:`)||e===i[t]);if(t)return r}}return null},s=e=>{let t=r+e;window.history.pushState(null,null,t),n()};return window.addEventListener(`popstate`,()=>n()),{get path(){return a()},push:s,subscribe:t,getTarget:o,routes:e}},o={value:null,get(){return this.value},set(e){this.value=e}},s=e=>{o.get().push(e)},c=()=>{let e=o.get();if(!e||!e.routes)return{};let t=`/front_6th_chapter1-1`,n=window.location.pathname,r=n.startsWith(t)?n.slice(21)||`/`:n;for(let[t]of Object.entries(e.routes))if(t.includes(`:`)){let e=t.split(`/`),n=r.split(`/`);if(e.length===n.length){let t=e.every((e,t)=>e.startsWith(`:`)||e===n[t]);if(t){let t={};return e.forEach((e,r)=>{if(e.startsWith(`:`)){let i=e.slice(1);t[i]=n[r]}}),t}}}return{}},l={},u=e=>{let t=e.type,n=l[t];if(n){for(let t in n)if(e.target.matches(t)||e.target.closest(t)){n[t](e);break}}},ee=(()=>{let e=!1;return()=>{if(e)return;let t=[`click`,`change`,`input`,`submit`,`focus`,`blur`];t.forEach(e=>{document.addEventListener(e,u,!0)}),e=!0}})(),d=(e,t,n)=>{l[e]||(l[e]={}),l[e][t]=n,Object.keys(l[e]).length===1&&document.addEventListener(e,u,!0)},f=()=>`
<main class="max-w-md mx-auto px-4 py-4">
  <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
      </linearGradient>
      <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
      </filter>
    </defs>
    
    <!-- 404 Numbers -->
    <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
    
    <!-- Icon decoration -->
    <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
    <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
    <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
    <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
    
    <!-- Message -->
    <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
    
    <!-- Subtle bottom accent -->
    <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
  </svg>
  
  <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
</div>
</main>
`;function p(e){let t={...e},n=i(),r=e=>(n.subscribe(e),()=>n.unsubscribe(e)),a=e=>{let r={...t};t={...t,...e},n.notify(t,r)},o=()=>({...t});return{subscribe:r,setState:a,getState:o}}const te=(e,t)=>{try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(`Error loading ${e} from localStorage:`,n),t}},ne=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(t){console.error(`Error saving ${e} to localStorage:`,t)}},m=`shopping_cart`,re=te(m,{items:[],selectedItems:[],itemCount:0,isModalOpen:!1}),h=p(re),g=(e,t=1)=>{let{items:n}=h.getState(),r=e.productId||e.id,i=n.find(e=>e.id===r),a;if(i)a=n.map(e=>e.id===r?{...e,quantity:e.quantity+t}:e);else{let i={id:r,name:e.title,image:e.image,price:parseInt(e.lprice||0),quantity:t};a=[...n,i]}let o=a.length;h.setState({...h.getState(),items:a,itemCount:o})},ie=e=>{let{items:t,selectedItems:n}=h.getState(),r=t.filter(t=>t.id!==e),i=n.filter(t=>t.id!==e),a=r.length;h.setState({...h.getState(),items:r,selectedItems:i,itemCount:a})},ae=(e,t)=>{let{items:n,selectedItems:r}=h.getState(),i=Math.max(1,t),a=n.map(t=>t.id===e?{...t,quantity:i}:t),o=r.map(t=>t.id===e?{...t,quantity:i}:t),s=a.length;h.setState({...h.getState(),items:a,selectedItems:o,itemCount:s})},oe=(e,t)=>{let{items:n,selectedItems:r}=h.getState(),i=n.find(t=>t.id===e);if(!i)return;let a;a=t?[...r,i]:r.filter(t=>t.id!==e),h.setState({...h.getState(),selectedItems:a})},se=e=>{let{items:t}=h.getState();h.setState({...h.getState(),selectedItems:e?[...t]:[]})},ce=()=>{let{items:e,selectedItems:t}=h.getState(),n=t.map(e=>e.id),r=e.filter(e=>!n.includes(e.id)),i=r.length;h.setState({...h.getState(),items:r,selectedItems:[],itemCount:i})},le=()=>{h.setState({...h.getState(),items:[],selectedItems:[],itemCount:0})},ue=()=>{h.setState({...h.getState(),isModalOpen:!0})},_=()=>{h.setState({...h.getState(),isModalOpen:!1})},de=()=>{let{itemCount:e}=h.getState(),t=document.querySelector(`#cart-icon-btn`);if(t){let n=t.querySelector(`span`);if(e>0){if(!n){let e=document.createElement(`span`);e.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,t.appendChild(e)}t.querySelector(`span`).textContent=e}else n&&n.remove()}},fe=()=>{ue()},v=({title:e=`쇼핑몰`,showBackButton:t=!1}={})=>{let{itemCount:n}=h.getState();return`
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        ${t?`
          <div class="flex items-center space-x-3">
            <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h1 class="text-lg font-bold text-gray-900">${e}</h1>
          </div>
        `:`
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">${e}</a>
          </h1>
        `}
        <div class="flex items-center space-x-2">
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            ${n>0?`
              <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                ${n}
              </span>
            `:``}
          </button>
        </div>
      </div>
    </div>
  </header>
  `};v.onMount=()=>{d(`click`,`#cart-icon-btn`,fe),h.subscribe(de)};let y=null,b=null,x=!1;function S(){let e=document.querySelector(`#root`);if(!e){console.warn(`Root element (#root) not found`);return}try{let t=o.get(),n=t.getTarget()??f,r=t.path;e.innerHTML=n(),!x&&typeof v.onMount==`function`&&(v.onMount(),x=!0),typeof n.onMount==`function`&&r!==y&&(y&&b&&typeof b.onUnmount==`function`&&b.onUnmount(),n.onMount(),y=r,b=n)}catch(t){console.error(t),e.innerHTML=f()}ee()}const C=()=>`
  <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>
`,pe=e=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card" data-product-id="${e.productId||e.id}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        ${e.image?`<img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-200" loading="lazy">`:`<div class="text-gray-400 flex items-center justify-center h-full">No Image</div>`}
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${e.title}
          </h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
          <p class="text-lg font-bold text-gray-900">
            ${parseInt(e.lprice||0).toLocaleString()}원
          </p>
        </div>
        <!-- 장바구니 버튼 -->
        <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.productId}">
          장바구니 담기
        </button>
      </div>
    </div>
  `,me=()=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `,w=()=>Array(20).fill(0).map(()=>me()).join(``),T=p({products:[],categories:{},isLoading:!1,isLoadingMore:!1,pagination:{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1}});async function E(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function he(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function ge(){let e=await fetch(`/api/categories`);return await e.json()}const D=(e={})=>{let t=new URL(window.location),n={};return Object.keys(e).forEach(r=>{let i=t.searchParams.get(r);if(i!==null){let t=e[r];typeof t==`number`?n[r]=parseInt(i)||t:n[r]=i}else n[r]=e[r]}),n},O=(e,t={},n)=>{let r=new URL(window.location);Object.entries(e).forEach(([e,t])=>{t!=null&&t!==``?r.searchParams.set(e,t):r.searchParams.delete(e)}),window.history.pushState({},``,r),n&&n(D(t))},k=(e,t)=>{let n=document.querySelector(e);n&&n.innerHTML!==t&&(n.innerHTML=t)},_e=(e=100)=>{let{scrollTop:t,scrollHeight:n,clientHeight:r}=document.documentElement;return t+r>=n-e},ve=e=>{let t=!1;return()=>{t||(t=!0,requestAnimationFrame(()=>{e(),t=!1}))}},ye=({onLoadMore:e,threshold:t=100,shouldLoad:n=()=>!0})=>{let r=()=>{_e(t)&&n()&&e()},i=ve(r);return window.addEventListener(`scroll`,i,{passive:!0}),()=>{window.removeEventListener(`scroll`,i)}},be=e=>{switch(e){case`success`:return`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`;case`info`:return`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`;case`error`:return`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`;default:return`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`}},xe=e=>{switch(e){case`success`:return`bg-green-600`;case`info`:return`bg-blue-600`;case`error`:return`bg-red-600`;default:return`bg-blue-600`}},Se=()=>{let e=document.getElementById(`toast-container`);return e||(e=document.createElement(`div`),e.id=`toast-container`,e.className=`fixed top-4 right-4 z-50 space-y-2`,document.body.appendChild(e),j.onMount()),e},A=({message:e,type:t=`info`})=>`
  <div class="${xe(t)} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        ${be(t)}
      </svg>
    </div>
    <p class="text-sm font-medium">${e}</p>
    <button class="toast-close-btn flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
`,j=({message:e,type:t=`info`})=>{let n=document.createElement(`div`);n.innerHTML=A({message:e,type:t});let r=n.firstElementChild;return r};j.toHTML=A,j.onMount=()=>{d(`click`,`.toast-close-btn`,e=>{let t=e.target.closest(`[id^="toast-"]`);t&&t.remove()})},j.getContainer=Se;let Ce=0;const we=(e,t,n)=>{let r=`toast-${++Ce}`,i=j({message:e,type:t});return i.id=r,i.className+=` mb-2`,n>0&&setTimeout(()=>i.remove(),n),i},M=(e,t=`info`,n=3e3)=>{let r=j.getContainer(),i=r.querySelectorAll(`[id^="toast-"]`);i.forEach(t=>{let n=t.querySelector(`p`);n&&n.textContent===e&&t.remove()});let a=we(e,t,n);r.appendChild(a)},N=(e,t=3e3)=>M(e,`success`,t),Te=(e,t=3e3)=>M(e,`info`,t),P={limit:20,sort:`price_asc`,search:``,category1:``,category2:``,page:1},F=async(e={})=>{T.setState({isLoading:!0});try{let t=await E(e);T.setState({products:t.products||[],pagination:t.pagination||{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1},isLoading:!1})}catch(e){console.error(`상품 불러오기 실패:`,e),T.setState({products:[],isLoading:!1})}},Ee=async(e={})=>{let t=T.getState();if(!(t.isLoadingMore||!t.pagination.hasNext)){T.setState({isLoadingMore:!0});try{let n=await E({...e,page:t.pagination.page+1});T.setState({products:[...t.products,...n.products||[]],pagination:n.pagination||t.pagination,isLoadingMore:!1})}catch(e){console.error(`추가 상품 불러오기 실패:`,e),T.setState({isLoadingMore:!1})}}},I=e=>e.map(e=>pe(e)).join(``),L=(e,t)=>{let n=`
    <label class="text-sm text-gray-600">카테고리:</label>
    <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
  `;return e&&(n+=`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>`),t&&(n+=`<span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${t}</span>`),n},R=(e,t)=>{if(!e||typeof e!=`object`||Object.keys(e).length===0)return`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`;if(!t)return Object.keys(e).map(e=>`
        <button 
          data-category1="${e}" 
          class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          ${e}
        </button>
      `).join(``);let n=e[t];if(!n||typeof n!=`object`)return`<div class="text-sm text-gray-500 italic">하위 카테고리가 없습니다</div>`;let r=D(P),i=r.category2;return Object.keys(n).map(e=>{let n=e===i,r=n?`category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-blue-100 border-blue-300 text-blue-800`:`category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50`;return`
        <button 
          data-category1="${t}" 
          data-category2="${e}" 
          class="${r}"
        >
          ${e}
        </button>
      `}).join(``)},z=()=>`
  <div class="inline-flex items-center">
    <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
  </div>
`,B=()=>{let e=T.getState(),t=D(P);return`
    <div class="min-h-screen bg-gray-50">
      ${v()}
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 검색 및 필터 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <!-- 검색창 -->
          <div class="mb-4">
            <div class="relative">
              <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${t.search}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- 필터 옵션 -->
          <div class="space-y-3">
            <!-- 카테고리 필터 -->
            <div class="space-y-2">
              <div class="flex items-center gap-2" id="category-breadcrumb">
                ${L(t.category1,t.category2)}
              </div>
              ${t.category1?`
              <div class="space-y-2">
                <div id="category-list" class="flex flex-wrap gap-2">
                  ${R(e.categories,t.category1)}
                </div>
              </div>
              `:`
              <div id="category-list" class="flex flex-wrap gap-2">
                ${R(e.categories,t.category1)}
              </div>
              `}
            </div>
            
            <!-- 기존 필터들 -->
            <div class="flex gap-2 items-center justify-between">
              <!-- 페이지당 상품 수 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">개수:</label>
                <select id="limit-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="10" ${t.limit===10?`selected`:``}>10개</option>
                  <option value="20" ${t.limit===20?`selected`:``}>20개</option>
                  <option value="50" ${t.limit===50?`selected`:``}>50개</option>
                  <option value="100" ${t.limit===100?`selected`:``}>100개</option>
                </select>
              </div>
              
              <!-- 정렬 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">정렬:</label>
                <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="price_asc" ${t.sort===`price_asc`?`selected`:``}>가격 낮은순</option>
                  <option value="price_desc" ${t.sort===`price_desc`?`selected`:``}>가격 높은순</option>
                  <option value="name_asc" ${t.sort===`name_asc`?`selected`:``}>이름순</option>
                  <option value="name_desc" ${t.sort===`name_desc`?`selected`:``}>이름 역순</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 상품 목록 -->
        <div class="mb-6">
          ${e.isLoading?``:`
          <!-- 상품 개수 정보 -->
          <div id="product-count" class="mb-4 text-sm text-gray-600">
            총 <span class="font-medium text-gray-900">${e.pagination?.total||0}개</span>의 상품
          </div>
          `}
          
          <!-- 상품 그리드 -->
          <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${e.isLoading?w():I(e.products)}
          </div>
          
          <!-- 하단 메시지 -->
          <div class="text-center py-4 bottom-message">
            ${e.isLoading||e.isLoadingMore?z():e.pagination?.hasNext?`<div class="text-sm text-gray-500">더 많은 상품을 보려면 스크롤하세요</div>`:`<div class="text-sm text-gray-500">모든 상품을 확인했습니다</div>`}
          </div>
        </div>
      </main>
      ${C()}
    </div>
  `},De=()=>T.subscribe((e,t)=>{if(!t||e.categories!==t.categories){let t=D(P);k(`#category-list`,R(e.categories,t.category1)),k(`#category-breadcrumb`,L(t.category1,t.category2))}if((!t||e.products!==t.products||e.isLoading!==t.isLoading)&&k(`#products-grid`,e.isLoading?w():I(e.products)),!t||e.pagination!==t.pagination||e.isLoading!==t.isLoading){let t=document.querySelector(`#product-count`);if(e.isLoading)t?.remove();else{let n=`총 <span class="font-medium text-gray-900">${e.pagination?.total||0}개</span>의 상품`;if(t)k(`#product-count`,n);else{let e=document.querySelector(`#products-grid`);if(e?.parentNode){let t=document.createElement(`div`);t.id=`product-count`,t.className=`mb-4 text-sm text-gray-600`,t.innerHTML=n,e.parentNode.insertBefore(t,e)}}}}if(!t||e.isLoading!==t.isLoading||e.isLoadingMore!==t.isLoadingMore||e.pagination!==t.pagination){let t=e.isLoading||e.isLoadingMore?z():e.pagination?.hasNext?`<div class="text-sm text-gray-500">더 많은 상품을 보려면 스크롤하세요</div>`:`<div class="text-sm text-gray-500">모든 상품을 확인했습니다</div>`;k(`.bottom-message`,t)}}),Oe=()=>{d(`input`,`#search-input`,e=>{O({search:e.target.value,page:1},P,F)}),d(`change`,`#sort-select`,e=>{O({sort:e.target.value,page:1},P,F)}),d(`change`,`#limit-select`,e=>{O({limit:parseInt(e.target.value),page:1},P,F)}),d(`click`,`.category1-filter-btn`,e=>{let t=e.target.dataset.category1;O({category1:t,category2:``,page:1},P,F);let n=D(P),r=T.getState().categories;k(`#category-list`,R(r,n.category1)),k(`#category-breadcrumb`,L(n.category1,n.category2))}),d(`click`,`.category2-filter-btn`,e=>{let t=e.target.dataset.category1,n=e.target.dataset.category2;O({category1:t,category2:n,page:1},P,F);let r=D(P),i=T.getState().categories;k(`#category-list`,R(i,r.category1)),k(`#category-breadcrumb`,L(r.category1,r.category2))}),d(`click`,`[data-breadcrumb="reset"]`,()=>{O({category1:``,category2:``,page:1},P,F);let e=D(P),t=T.getState().categories;k(`#category-list`,R(t,e.category1)),k(`#category-breadcrumb`,L(e.category1,e.category2))}),d(`click`,`[data-breadcrumb="category1"]`,()=>{let e=D(P);O({category1:e.category1,category2:``,page:1},P,F);let t=D(P),n=T.getState().categories;k(`#category-list`,R(n,t.category1)),k(`#category-breadcrumb`,L(t.category1,t.category2))}),d(`click`,`.add-to-cart-btn`,e=>{e.preventDefault(),e.stopPropagation();let t=e.target.dataset.productId,n=T.getState().products,r=n.find(e=>(e.productId||e.id)===t);r&&(g(r,1),N(`장바구니에 추가되었습니다`))}),d(`click`,`.product-card`,e=>{if(e.target.closest(`.add-to-cart-btn`))return;let t=e.target.closest(`.product-card`),n=t?.dataset?.productId;n&&o.get().push(`/product/${n}`)})},ke=()=>ye({onLoadMore:()=>{let e=D(P);Ee(e)},threshold:100,shouldLoad:()=>{let e=T.getState();return!e.isLoadingMore&&e.pagination?.hasNext}}),Ae=async e=>{try{T.setState({isLoading:!0});let[t,n]=await Promise.all([ge(),E(e)]);T.setState({categories:t,products:n.products||[],pagination:n.pagination||{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1},isLoading:!1})}catch(e){console.error(`데이터 로딩 실패:`,e),T.setState({categories:{},products:[],isLoading:!1})}};let V=null,H=null;const je=()=>{V=De(),Oe(),H=ke()};B.onMount=async()=>{let e=D(P);je(),await Ae(e)},B.onUnmount=()=>{V&&(V(),V=null),H&&(H(),H=null)};const Me=({items:e=[{label:`홈`,href:`/`,isLink:!0}]}={})=>`
  <nav class="mb-4">
    <div class="flex items-center space-x-2 text-sm text-gray-600">
      ${e.map((e,t)=>`
        ${t>0?`
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        `:``}
        ${e.isLink?`
          <a href="${e.href}" data-link="" class="hover:text-blue-600 transition-colors">${e.label}</a>
        `:`
          <button class="breadcrumb-link ${e.category1?`data-category1="${e.category1}"`:``} ${e.category2?`data-category2="${e.category2}"`:``}">${e.label}</button>
        `}
      `).join(``)}
    </div>
  </nav>
`,U=p({product:null,isLoading:!0,error:null,quantity:1,relatedProducts:[],isLoadingRelated:!1}),W=()=>`
    <div class="py-20 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
      </div>
    </div>
  `,G=e=>Me({items:[{label:`홈`,href:`/`,isLink:!0},{label:e.category1||`생활/건강`,isLink:!1,category1:e.category1||`생활/건강`},{label:e.category2||`생활용품`,isLink:!1,category2:e.category2||`생활용품`}]}),K=e=>`
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <!-- 상품 이미지 -->
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover product-detail-image">
        </div>
        <!-- 상품 정보 -->
        <div>
          <p class="text-sm text-gray-600 mb-1">${e.brand||``}</p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
          <!-- 평점 및 리뷰 -->
          <div class="flex items-center mb-3">
            <div class="flex items-center">
              ${Pe(e.rating||4)}
            </div>
            <span class="ml-2 text-sm text-gray-600">${e.rating||4} (${e.reviewCount||749}개 리뷰)</span>
          </div>
          <!-- 가격 -->
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${parseInt(e.lprice).toLocaleString()}원</span>
          </div>
          <!-- 재고 -->
          <div class="text-sm text-gray-600 mb-4">
            재고 ${e.stock||0}개
          </div>
          <!-- 설명 -->
          <div class="text-sm text-gray-700 leading-relaxed mb-6">
            ${e.description||e.name+`에 대한 상세 설명입니다. 브랜드의 우수한 품질을 자랑하는 상품으로, 고객 만족도가 높은 제품입니다.`}
          </div>
        </div>
      </div>
    </div>
  `,q=(e,t)=>`
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <div class="border-t border-gray-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-900">수량</span>
          <div class="flex items-center">
            <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
               rounded-l-md bg-gray-50 hover:bg-gray-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input type="number" id="quantity-input" value="${t}" min="1" max="${e.stock||1}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
              focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
               rounded-r-md bg-gray-50 hover:bg-gray-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- 액션 버튼 -->
        <button id="add-to-cart-btn" data-product-id="${e.id}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
             hover:bg-blue-700 transition-colors font-medium">
          장바구니 담기
        </button>
      </div>
    </div>
  `,Ne=()=>`
    <div class="mb-6">
      <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
        hover:bg-gray-200 transition-colors go-to-product-list">
        상품 목록으로 돌아가기
      </button>
    </div>
  `,J=e=>`
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${e.map(e=>`
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
              <p class="text-sm font-bold text-blue-600">${parseInt(e.lprice).toLocaleString()}원</p>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `,Y=(e,t,n)=>e?`
    <!-- 브레드크럼 -->
    <div id="breadcrumb-section">
      ${G(e)}
    </div>
    <!-- 상품 정보 -->
    <div id="product-info-section">
      ${K(e)}
    </div>
    <!-- 수량 선택 및 액션 -->
    <div id="quantity-section">
      ${q(e,n)}
    </div>
    <!-- 상품 목록으로 이동 -->
    <div id="back-button-section">
      ${Ne()}
    </div>
    <!-- 관련 상품 -->
    <div id="related-products-section">
      ${t&&t.length>0?J(t):``}
    </div>
  `:W(),Pe=e=>{let t=Math.floor(e),n=5-t,r=``;for(let e=0;e<t;e++)r+=`
      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;for(let e=0;e<n;e++)r+=`
      <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;return r},Fe=async e=>{try{U.setState({isLoading:!0,error:null,relatedProducts:[],isLoadingRelated:!1});let t=await he(e);U.setState({product:t,isLoading:!1,error:null}),Ie(t)}catch(e){console.error(`상품 상세 정보 로딩 실패:`,e),U.setState({isLoading:!1,error:e.message})}},Ie=async e=>{try{U.setState({isLoadingRelated:!0});let t=await E({category1:e.category1,category2:e.category2,limit:20,page:1}),n=t.products.filter(t=>t.productId!==e.productId);U.setState({relatedProducts:n,isLoadingRelated:!1})}catch(e){console.error(`관련 상품 로딩 실패:`,e),U.setState({isLoadingRelated:!1})}},Le=()=>{d(`click`,`#quantity-decrease`,()=>{let e=U.getState(),t=Math.max(1,e.quantity-1);U.setState({quantity:t}),document.getElementById(`quantity-input`).value=t}),d(`click`,`#quantity-increase`,()=>{let e=U.getState(),t=e.product?.stock||1,n=Math.min(t,e.quantity+1);U.setState({quantity:n}),document.getElementById(`quantity-input`).value=n}),d(`change`,`#quantity-input`,e=>{let t=U.getState(),n=t.product?.stock||1,r=Math.min(n,Math.max(1,parseInt(e.target.value)||1));U.setState({quantity:r}),e.target.value=r}),d(`click`,`.go-to-product-list`,()=>{window.history.back()}),d(`click`,`.related-product-card`,e=>{let t=e.target.closest(`.related-product-card`).dataset.productId;o.get().push(`/product/${t}`)}),d(`click`,`.breadcrumb-link`,e=>{let t=e.target.dataset.category1,n=e.target.dataset.category2;t?o.get().push(`/?category1=${t}`):n&&o.get().push(`/?category2=${n}`)}),d(`click`,`#add-to-cart-btn`,()=>{let e=U.getState();e.product&&(g(e.product,e.quantity),N(`장바구니에 추가되었습니다`))})};let X=null;const Re=()=>U.subscribe((e,t)=>{if(!t||e.isLoading!==t.isLoading){let t=document.querySelector(`main`);t&&(e.isLoading?k(`main`,W()):e.product&&k(`main`,Y(e.product,e.relatedProducts,e.quantity)))}if(!e.isLoading&&(!t||e.product!==t.product)&&e.product&&(k(`#breadcrumb-section`,G(e.product)),k(`#product-info-section`,K(e.product)),k(`#quantity-section`,q(e.product,e.quantity))),!e.isLoading&&(!t||e.relatedProducts!==t.relatedProducts||e.isLoadingRelated!==t.isLoadingRelated)&&(!e.isLoadingRelated&&e.relatedProducts&&e.relatedProducts.length>0?k(`#related-products-section`,J(e.relatedProducts)):k(`#related-products-section`,``)),!e.isLoading&&(!t||e.quantity!==t.quantity)){let t=document.querySelector(`#quantity-input`);t&&(t.value=e.quantity)}}),Z=()=>{let e=U.getState();return`
    <div class="min-h-screen bg-gray-50">
      ${v({title:`상품 상세`,showBackButton:!0})}
      <main class="max-w-md mx-auto px-4 py-4">
        ${e.isLoading?W():Y(e.product,e.relatedProducts,e.quantity)}
      </main>
      ${C()}
    </div>
  `};Z.onMount=()=>{let e=c(),t=e.id;if(!t){console.error(`상품 ID가 없습니다.`);return}X=Re(),Le(),Fe(t)},Z.onUnmount=()=>{X&&(X(),X=null)};const Q=(e=0)=>`
  <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
    <h2 class="text-lg font-bold text-gray-900 flex items-center">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
      </svg>
      장바구니${e>0?`<span class="text-sm font-normal text-gray-600 ml-1">(${e})</span>`:` `}
    </h2>
    <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
`,ze=(e,t)=>`
  <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.id}">
    <!-- 선택 체크박스 -->
    <label class="flex items-center mr-3">
      <input type="checkbox" ${t?`checked=""`:``} class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
        focus:ring-blue-500" data-product-id="${e.id}">
    </label>
    <!-- 상품 이미지 -->
    <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
      <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${e.id}">
    </div>
    <!-- 상품 정보 -->
    <div class="flex-1 min-w-0">
      <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${e.id}">
        ${e.name}
      </h4>
      <p class="text-sm text-gray-600 mt-1">
        ${e.price.toLocaleString()}원
      </p>
      <!-- 수량 조절 -->
      <div class="flex items-center mt-2">
        <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center 
         border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.id}">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
          </svg>
        </button>
        <input type="number" value="${e.quantity}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b 
        border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id="${e.id}">
        <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center 
         border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.id}">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- 가격 및 삭제 -->
    <div class="text-right ml-3">
      <p class="text-sm font-medium text-gray-900">
        ${(e.price*e.quantity).toLocaleString()}원
      </p>
      <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.id}">
        삭제
      </button>
    </div>
  </div>
`,Be=(e=0,t=0,n=0)=>{let r=e>0;return`
    <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
      <!-- 선택된 아이템 정보 -->
      ${r?`
      <div class="flex justify-between items-center mb-3 text-sm">
        <span class="text-gray-600">선택한 상품 (${e}개)</span>
        <span class="font-medium">${n.toLocaleString()}원</span>
      </div>
      `:``}
      <!-- 총 금액 -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-lg font-bold text-gray-900">총 금액</span>
        <span class="text-xl font-bold text-blue-600">${t.toLocaleString()}원</span>
      </div>
      <!-- 액션 버튼들 -->
      <div class="space-y-2">
        ${r?`
        <button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md 
                   hover:bg-red-700 transition-colors text-sm">
          선택한 상품 삭제 (${e}개)
        </button>
        `:``}
        <div class="flex gap-2">
          <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md 
                   hover:bg-gray-700 transition-colors text-sm">
            전체 비우기
          </button>
          <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md 
                   hover:bg-blue-700 transition-colors text-sm">
            구매하기
          </button>
        </div>
      </div>
    </div>
  `},Ve=e=>`
  <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
    <div id="cart-modal-content" class="cart-modal relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
      ${e}
    </div>
  </div>
`,He=()=>`
  ${Q()}
  <!-- 컨텐츠 -->
  <div class="flex flex-col max-h-[calc(90vh-120px)]">
    <!-- 빈 장바구니 -->
    <div class="flex-1 flex items-center justify-center p-8">
      <div class="text-center">
        <div class="text-gray-400 mb-4">
          <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
        <p class="text-gray-600">원하는 상품을 담아보세요!</p>
      </div>
    </div>
  </div>
`,Ue=(e,t)=>{let n=e.length,r=e.reduce((e,t)=>e+t.price*t.quantity,0),i=t.length,a=t.reduce((e,t)=>e+t.price*t.quantity,0),o=n>0&&i===n;return`
    ${Q(n)}
    <!-- 컨텐츠 -->
    <div class="flex flex-col max-h-[calc(90vh-120px)]">
      <!-- 전체 선택 섹션 -->
      <div class="p-4 border-b border-gray-200 bg-gray-50">
        <label class="flex items-center text-sm text-gray-700">
          <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" ${o?`checked`:``}>
          전체선택 (${n}개)
        </label>
      </div>
      <!-- 아이템 목록 -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-4 space-y-4">
          ${e.map(e=>{let n=t.some(t=>t.id===e.id);return ze(e,n)}).join(``)}
        </div>
      </div>
    </div>
    ${Be(i,r,a)}
  `},$=({items:e=[],selectedItems:t=[]}={})=>{let n=e.length;return Ve(n===0?He():Ue(e,t))};$.onMount=()=>{let e=document.getElementById(`cart-modal-close-btn`);e&&e.addEventListener(`click`,_);let t=e=>{e.key===`Escape`&&_()};document.addEventListener(`keydown`,t);let n=document.getElementById(`cart-modal-container`);n&&n.addEventListener(`click`,e=>{let t=e.target.closest(`#cart-modal-content`);t||_()}),d(`change`,`#cart-modal-select-all-checkbox`,e=>{se(e.target.checked)}),d(`change`,`.cart-item-checkbox`,e=>{let t=e.target.dataset.productId;oe(t,e.target.checked)}),d(`click`,`.quantity-increase-btn`,e=>{let t=e.target.closest(`button`).dataset.productId,n=document.querySelector(`.quantity-input[data-product-id="${t}"]`),r=parseInt(n.value)+1;ae(t,r)}),d(`click`,`.quantity-decrease-btn`,e=>{let t=e.target.closest(`button`).dataset.productId,n=document.querySelector(`.quantity-input[data-product-id="${t}"]`),r=Math.max(1,parseInt(n.value)-1);ae(t,r)}),d(`click`,`.cart-item-remove-btn`,e=>{let t=e.target.dataset.productId;ie(t),N(`상품이 장바구니에서 제거되었습니다.`)}),d(`click`,`#cart-modal-remove-selected-btn`,()=>{ce(),N(`선택한 상품들이 삭제되었습니다.`)}),d(`click`,`#cart-modal-clear-cart-btn`,()=>{le(),Te(`장바구니가 비워졌습니다.`)}),d(`click`,`#cart-modal-checkout-btn`,()=>{N(`구매 기능은 준비중입니다.`)}),d(`click`,`.cart-item-image, .cart-item-title`,e=>{let t=e.target.dataset.productId;_(),s(`/product/${t}`)})};const We=()=>{Ge();let e=document.createElement(`div`);e.id=`cart-modal-container`,e.className=`fixed inset-0 z-50 overflow-y-auto cart-modal-overlay`,e.style.backgroundColor=`rgba(0, 0, 0, 0.5)`;let t=document.getElementById(`root`);return t?t.appendChild(e):document.body.appendChild(e),e},Ge=()=>{let e=document.getElementById(`cart-modal-container`);e&&e.remove()},Ke=()=>{let{items:e,selectedItems:t,isModalOpen:n}=h.getState();n?(We(),k(`#cart-modal-container`,$({items:e,selectedItems:t})),$.onMount()):Ge()},qe=e=>{let t={items:e.items,selectedItems:e.selectedItems,itemCount:e.itemCount};ne(m,t)},Je=()=>{h.subscribe(Ke),h.subscribe(qe)},Ye=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-DvH8zzVn.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));d(`click`,`[data-link]`,e=>{e.preventDefault(),o.get().push(e.target.href.replace(window.location.origin,``))});const Xe={"/":B,"/product/:id":Z};function Ze(){o.set(a(Xe)),o.get().subscribe(S),Je(),S()}Ye().then(Ze);