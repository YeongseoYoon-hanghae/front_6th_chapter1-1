(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=()=>{let e=new Set,t=t=>{e.add(t)},n=t=>{e.delete(t)},r=(...t)=>{e.forEach(e=>e(...t))};return{subscribe:t,unsubscribe:n,notify:r}},t=t=>{let{subscribe:n,notify:r}=e(),i=`/front_6th_chapter1-1`,a=()=>{let e=window.location.pathname;return e.startsWith(i)?e.slice(21)||`/`:e},o=()=>{let e=a();if(t[e])return t[e];for(let[n,r]of Object.entries(t))if(n.includes(`:`)){let t=n.split(`/`),i=e.split(`/`);if(t.length===i.length){let e=t.every((e,t)=>e.startsWith(`:`)||e===i[t]);if(e)return r}}return null},s=e=>{let t=i+e;window.history.pushState(null,null,t),r()};return window.addEventListener(`popstate`,()=>r()),{get path(){return a()},push:s,subscribe:n,getTarget:o,routes:t}},n={value:null,get(){return this.value},set(e){this.value=e}},r=e=>{n.get().push(e)},i=()=>{let e=n.get();if(!e||!e.routes)return{};let t=`/front_6th_chapter1-1`,r=window.location.pathname,i=r.startsWith(t)?r.slice(21)||`/`:r;for(let[t]of Object.entries(e.routes))if(t.includes(`:`)){let e=t.split(`/`),n=i.split(`/`);if(e.length===n.length){let t=e.every((e,t)=>e.startsWith(`:`)||e===n[t]);if(t){let t={};return e.forEach((e,r)=>{if(e.startsWith(`:`)){let i=e.slice(1);t[i]=n[r]}}),t}}}return{}},a={},o=e=>{let t=e.type,n=a[t];if(n){for(let t in n)if(e.target.matches(t)||e.target.closest(t)){n[t](e);break}}},s=(()=>{let e=!1;return()=>{if(e)return;let t=[`click`,`change`,`input`,`submit`,`focus`,`blur`];t.forEach(e=>{document.addEventListener(e,o,!0)}),e=!0}})(),c=(e,t,n)=>{a[e]||(a[e]={}),a[e][t]=n,Object.keys(a[e]).length===1&&document.addEventListener(e,o,!0)},l=()=>`
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
`;function u(t){let n={...t},r=e(),i=e=>(r.subscribe(e),()=>r.unsubscribe(e)),a=e=>{let t={...n};n={...n,...e},r.notify(n,t)},o=()=>({...n});return{subscribe:i,setState:a,getState:o}}const ee=(e,t)=>{try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(`Error loading ${e} from localStorage:`,n),t}},te=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(t){console.error(`Error saving ${e} to localStorage:`,t)}},d=`shopping_cart`,ne=ee(d,{items:[],selectedItems:[],itemCount:0,isModalOpen:!1}),f=u(ne),p=(e,t=1)=>{let{items:n}=f.getState(),r=e.productId||e.id,i=n.find(e=>e.id===r),a;if(i)a=n.map(e=>e.id===r?{...e,quantity:e.quantity+t}:e);else{let i={id:r,name:e.title,image:e.image,price:parseInt(e.lprice||0),quantity:t};a=[...n,i]}let o=a.length;f.setState({...f.getState(),items:a,itemCount:o})},re=e=>{let{items:t,selectedItems:n}=f.getState(),r=t.filter(t=>t.id!==e),i=n.filter(t=>t.id!==e),a=r.length;f.setState({...f.getState(),items:r,selectedItems:i,itemCount:a})},m=(e,t)=>{let{items:n,selectedItems:r}=f.getState(),i=Math.max(1,t),a=n.map(t=>t.id===e?{...t,quantity:i}:t),o=r.map(t=>t.id===e?{...t,quantity:i}:t),s=a.length;f.setState({...f.getState(),items:a,selectedItems:o,itemCount:s})},ie=(e,t)=>{let{items:n,selectedItems:r}=f.getState(),i=n.find(t=>t.id===e);if(!i)return;let a;a=t?[...r,i]:r.filter(t=>t.id!==e),f.setState({...f.getState(),selectedItems:a})},ae=e=>{let{items:t}=f.getState();f.setState({...f.getState(),selectedItems:e?[...t]:[]})},oe=()=>{let{items:e,selectedItems:t}=f.getState(),n=t.map(e=>e.id),r=e.filter(e=>!n.includes(e.id)),i=r.length;f.setState({...f.getState(),items:r,selectedItems:[],itemCount:i})},se=()=>{f.setState({...f.getState(),items:[],selectedItems:[],itemCount:0})},ce=()=>{f.setState({...f.getState(),isModalOpen:!0})},h=()=>{f.setState({...f.getState(),isModalOpen:!1})},le=()=>{let{itemCount:e}=f.getState(),t=document.querySelector(`#cart-icon-btn`);if(t){let n=t.querySelector(`span`);if(e>0){if(!n){let e=document.createElement(`span`);e.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,t.appendChild(e)}t.querySelector(`span`).textContent=e}else n&&n.remove()}},ue=()=>{ce()},g=({title:e=`쇼핑몰`,showBackButton:t=!1}={})=>{let{itemCount:n}=f.getState();return`
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
  `};g.onMount=()=>{c(`click`,`#cart-icon-btn`,ue),f.subscribe(le)};let _=null,v=null,y=!1;function b(){let e=document.querySelector(`#root`);if(!e){console.warn(`Root element (#root) not found`);return}try{let t=n.get(),r=t.getTarget()??l,i=t.path;e.innerHTML=r(),!y&&typeof g.onMount==`function`&&(g.onMount(),y=!0),typeof r.onMount==`function`&&i!==_&&(_&&v&&typeof v.onUnmount==`function`&&v.onUnmount(),r.onMount(),_=i,v=r)}catch(t){console.error(t),e.innerHTML=l()}s()}const x=()=>`
  <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>
`,de=e=>`
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
  `,fe=()=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `,S=()=>Array(20).fill(0).map(()=>fe()).join(``),C=u({products:[],categories:{},isLoading:!1,isLoadingMore:!1,pagination:{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1}});async function w(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function pe(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function me(){let e=await fetch(`/api/categories`);return await e.json()}const T=(e={})=>{let t=new URL(window.location),n={};return Object.keys(e).forEach(r=>{let i=t.searchParams.get(r);if(i!==null){let t=e[r];typeof t==`number`?n[r]=parseInt(i)||t:n[r]=i}else n[r]=e[r]}),n},E=(e,t={},n)=>{let r=new URL(window.location);Object.entries(e).forEach(([e,t])=>{t!=null&&t!==``?r.searchParams.set(e,t):r.searchParams.delete(e)}),window.history.pushState({},``,r),n&&n(T(t))},D=(e,t)=>{let n=document.querySelector(e);n&&n.innerHTML!==t&&(n.innerHTML=t)},he=(e=100)=>{let{scrollTop:t,scrollHeight:n,clientHeight:r}=document.documentElement;return t+r>=n-e},ge=e=>{let t=!1;return()=>{t||(t=!0,requestAnimationFrame(()=>{e(),t=!1}))}},_e=({onLoadMore:e,threshold:t=100,shouldLoad:n=()=>!0})=>{let r=()=>{he(t)&&n()&&e()},i=ge(r);return window.addEventListener(`scroll`,i,{passive:!0}),()=>{window.removeEventListener(`scroll`,i)}},ve=e=>{switch(e){case`success`:return`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`;case`info`:return`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`;case`error`:return`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`;default:return`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`}},ye=e=>{switch(e){case`success`:return`bg-green-600`;case`info`:return`bg-blue-600`;case`error`:return`bg-red-600`;default:return`bg-blue-600`}},be=()=>{let e=document.getElementById(`toast-container`);return e||(e=document.createElement(`div`),e.id=`toast-container`,e.className=`fixed top-4 right-4 z-50 space-y-2`,document.body.appendChild(e),k.onMount()),e},O=({message:e,type:t=`info`})=>`
  <div class="${ye(t)} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        ${ve(t)}
      </svg>
    </div>
    <p class="text-sm font-medium">${e}</p>
    <button class="toast-close-btn flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
`,k=({message:e,type:t=`info`})=>{let n=document.createElement(`div`);n.innerHTML=O({message:e,type:t});let r=n.firstElementChild;return r};k.toHTML=O,k.onMount=()=>{c(`click`,`.toast-close-btn`,e=>{let t=e.target.closest(`[id^="toast-"]`);t&&t.remove()})},k.getContainer=be;let xe=0;const Se=(e,t,n)=>{let r=`toast-${++xe}`,i=k({message:e,type:t});return i.id=r,i.className+=` mb-2`,n>0&&setTimeout(()=>i.remove(),n),i},A=(e,t=`info`,n=3e3)=>{let r=k.getContainer(),i=r.querySelectorAll(`[id^="toast-"]`);i.forEach(t=>{let n=t.querySelector(`p`);n&&n.textContent===e&&t.remove()});let a=Se(e,t,n);r.appendChild(a)},j=(e,t=3e3)=>A(e,`success`,t),Ce=(e,t=3e3)=>A(e,`info`,t),M={limit:20,sort:`price_asc`,search:``,category1:``,category2:``,page:1},N=async(e={})=>{C.setState({isLoading:!0});try{let t=await w(e);C.setState({products:t.products||[],pagination:t.pagination||{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1},isLoading:!1})}catch(e){console.error(`상품 불러오기 실패:`,e),C.setState({products:[],isLoading:!1})}},we=async(e={})=>{let t=C.getState();if(!(t.isLoadingMore||!t.pagination.hasNext)){C.setState({isLoadingMore:!0});try{let n=await w({...e,page:t.pagination.page+1});C.setState({products:[...t.products,...n.products||[]],pagination:n.pagination||t.pagination,isLoadingMore:!1})}catch(e){console.error(`추가 상품 불러오기 실패:`,e),C.setState({isLoadingMore:!1})}}},P=e=>e.map(e=>de(e)).join(``),F=(e,t)=>{let n=`
    <label class="text-sm text-gray-600">카테고리:</label>
    <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
  `;return e&&(n+=`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>`),t&&(n+=`<span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${t}</span>`),n},I=(e,t)=>{if(!e||typeof e!=`object`||Object.keys(e).length===0)return`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`;if(!t)return Object.keys(e).map(e=>`
        <button 
          data-category1="${e}" 
          class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          ${e}
        </button>
      `).join(``);let n=e[t];if(!n||typeof n!=`object`)return`<div class="text-sm text-gray-500 italic">하위 카테고리가 없습니다</div>`;let r=T(M),i=r.category2;return Object.keys(n).map(e=>{let n=e===i,r=n?`category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-blue-100 border-blue-300 text-blue-800`:`category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50`;return`
        <button 
          data-category1="${t}" 
          data-category2="${e}" 
          class="${r}"
        >
          ${e}
        </button>
      `}).join(``)},L=()=>`
  <div class="inline-flex items-center">
    <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
  </div>
`,R=()=>{let e=C.getState(),t=T(M);return`
    <div class="min-h-screen bg-gray-50">
      ${g()}
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
                ${F(t.category1,t.category2)}
              </div>
              ${t.category1?`
              <div class="space-y-2">
                <div id="category-list" class="flex flex-wrap gap-2">
                  ${I(e.categories,t.category1)}
                </div>
              </div>
              `:`
              <div id="category-list" class="flex flex-wrap gap-2">
                ${I(e.categories,t.category1)}
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
            ${e.isLoading?S():P(e.products)}
          </div>
          
          <!-- 하단 메시지 -->
          <div class="text-center py-4 bottom-message">
            ${e.isLoading||e.isLoadingMore?L():e.pagination?.hasNext?`<div class="text-sm text-gray-500">더 많은 상품을 보려면 스크롤하세요</div>`:`<div class="text-sm text-gray-500">모든 상품을 확인했습니다</div>`}
          </div>
        </div>
      </main>
      ${x()}
    </div>
  `},Te=()=>C.subscribe((e,t)=>{if(!t||e.categories!==t.categories){let t=T(M);D(`#category-list`,I(e.categories,t.category1)),D(`#category-breadcrumb`,F(t.category1,t.category2))}if((!t||e.products!==t.products||e.isLoading!==t.isLoading)&&D(`#products-grid`,e.isLoading?S():P(e.products)),!t||e.pagination!==t.pagination||e.isLoading!==t.isLoading){let t=document.querySelector(`#product-count`);if(e.isLoading)t?.remove();else{let n=`총 <span class="font-medium text-gray-900">${e.pagination?.total||0}개</span>의 상품`;if(t)D(`#product-count`,n);else{let e=document.querySelector(`#products-grid`);if(e?.parentNode){let t=document.createElement(`div`);t.id=`product-count`,t.className=`mb-4 text-sm text-gray-600`,t.innerHTML=n,e.parentNode.insertBefore(t,e)}}}}if(!t||e.isLoading!==t.isLoading||e.isLoadingMore!==t.isLoadingMore||e.pagination!==t.pagination){let t=e.isLoading||e.isLoadingMore?L():e.pagination?.hasNext?`<div class="text-sm text-gray-500">더 많은 상품을 보려면 스크롤하세요</div>`:`<div class="text-sm text-gray-500">모든 상품을 확인했습니다</div>`;D(`.bottom-message`,t)}}),Ee=()=>{c(`input`,`#search-input`,e=>{E({search:e.target.value,page:1},M,N)}),c(`change`,`#sort-select`,e=>{E({sort:e.target.value,page:1},M,N)}),c(`change`,`#limit-select`,e=>{E({limit:parseInt(e.target.value),page:1},M,N)}),c(`click`,`.category1-filter-btn`,e=>{let t=e.target.dataset.category1;E({category1:t,category2:``,page:1},M,N);let n=T(M),r=C.getState().categories;D(`#category-list`,I(r,n.category1)),D(`#category-breadcrumb`,F(n.category1,n.category2))}),c(`click`,`.category2-filter-btn`,e=>{let t=e.target.dataset.category1,n=e.target.dataset.category2;E({category1:t,category2:n,page:1},M,N);let r=T(M),i=C.getState().categories;D(`#category-list`,I(i,r.category1)),D(`#category-breadcrumb`,F(r.category1,r.category2))}),c(`click`,`[data-breadcrumb="reset"]`,()=>{E({category1:``,category2:``,page:1},M,N);let e=T(M),t=C.getState().categories;D(`#category-list`,I(t,e.category1)),D(`#category-breadcrumb`,F(e.category1,e.category2))}),c(`click`,`[data-breadcrumb="category1"]`,()=>{let e=T(M);E({category1:e.category1,category2:``,page:1},M,N);let t=T(M),n=C.getState().categories;D(`#category-list`,I(n,t.category1)),D(`#category-breadcrumb`,F(t.category1,t.category2))}),c(`click`,`.add-to-cart-btn`,e=>{e.preventDefault(),e.stopPropagation();let t=e.target.dataset.productId,n=C.getState().products,r=n.find(e=>(e.productId||e.id)===t);r&&(p(r,1),j(`장바구니에 추가되었습니다`))}),c(`click`,`.product-card`,e=>{if(e.target.closest(`.add-to-cart-btn`))return;let t=e.target.closest(`.product-card`),r=t?.dataset?.productId;r&&n.get().push(`/product/${r}`)})},De=()=>_e({onLoadMore:()=>{let e=T(M);we(e)},threshold:100,shouldLoad:()=>{let e=C.getState();return!e.isLoadingMore&&e.pagination?.hasNext}}),Oe=async e=>{try{C.setState({isLoading:!0});let[t,n]=await Promise.all([me(),w(e)]);C.setState({categories:t,products:n.products||[],pagination:n.pagination||{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1},isLoading:!1})}catch(e){console.error(`데이터 로딩 실패:`,e),C.setState({categories:{},products:[],isLoading:!1})}};let z=null,B=null;const ke=()=>{z=Te(),Ee(),B=De()};R.onMount=async()=>{let e=T(M);ke(),await Oe(e)},R.onUnmount=()=>{z&&(z(),z=null),B&&(B(),B=null)};const Ae=({items:e=[{label:`홈`,href:`/`,isLink:!0}]}={})=>`
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
`,V=u({product:null,isLoading:!0,error:null,quantity:1,relatedProducts:[],isLoadingRelated:!1}),H=()=>`
    <div class="py-20 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
      </div>
    </div>
  `,U=e=>Ae({items:[{label:`홈`,href:`/`,isLink:!0},{label:e.category1||`생활/건강`,isLink:!1,category1:e.category1||`생활/건강`},{label:e.category2||`생활용품`,isLink:!1,category2:e.category2||`생활용품`}]}),W=e=>`
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
              ${Me(e.rating||4)}
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
  `,G=(e,t)=>`
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
  `,je=()=>`
    <div class="mb-6">
      <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
        hover:bg-gray-200 transition-colors go-to-product-list">
        상품 목록으로 돌아가기
      </button>
    </div>
  `,K=e=>`
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
  `,q=(e,t,n)=>e?`
    <!-- 브레드크럼 -->
    <div id="breadcrumb-section">
      ${U(e)}
    </div>
    <!-- 상품 정보 -->
    <div id="product-info-section">
      ${W(e)}
    </div>
    <!-- 수량 선택 및 액션 -->
    <div id="quantity-section">
      ${G(e,n)}
    </div>
    <!-- 상품 목록으로 이동 -->
    <div id="back-button-section">
      ${je()}
    </div>
    <!-- 관련 상품 -->
    <div id="related-products-section">
      ${t&&t.length>0?K(t):``}
    </div>
  `:H(),Me=e=>{let t=Math.floor(e),n=5-t,r=``;for(let e=0;e<t;e++)r+=`
      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;for(let e=0;e<n;e++)r+=`
      <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;return r},Ne=async e=>{try{V.setState({isLoading:!0,error:null,relatedProducts:[],isLoadingRelated:!1});let t=await pe(e);V.setState({product:t,isLoading:!1,error:null}),Pe(t)}catch(e){console.error(`상품 상세 정보 로딩 실패:`,e),V.setState({isLoading:!1,error:e.message})}},Pe=async e=>{try{V.setState({isLoadingRelated:!0});let t=await w({category1:e.category1,category2:e.category2,limit:20,page:1}),n=t.products.filter(t=>t.productId!==e.productId);V.setState({relatedProducts:n,isLoadingRelated:!1})}catch(e){console.error(`관련 상품 로딩 실패:`,e),V.setState({isLoadingRelated:!1})}},Fe=()=>{c(`click`,`#quantity-decrease`,()=>{let e=V.getState(),t=Math.max(1,e.quantity-1);V.setState({quantity:t}),document.getElementById(`quantity-input`).value=t}),c(`click`,`#quantity-increase`,()=>{let e=V.getState(),t=e.product?.stock||1,n=Math.min(t,e.quantity+1);V.setState({quantity:n}),document.getElementById(`quantity-input`).value=n}),c(`change`,`#quantity-input`,e=>{let t=V.getState(),n=t.product?.stock||1,r=Math.min(n,Math.max(1,parseInt(e.target.value)||1));V.setState({quantity:r}),e.target.value=r}),c(`click`,`.go-to-product-list`,()=>{window.history.back()}),c(`click`,`.related-product-card`,e=>{let t=e.target.closest(`.related-product-card`).dataset.productId;n.get().push(`/product/${t}`)}),c(`click`,`.breadcrumb-link`,e=>{let t=e.target.dataset.category1,r=e.target.dataset.category2;t?n.get().push(`/?category1=${t}`):r&&n.get().push(`/?category2=${r}`)}),c(`click`,`#add-to-cart-btn`,()=>{let e=V.getState();e.product&&(p(e.product,e.quantity),j(`장바구니에 추가되었습니다`))})};let J=null;const Ie=()=>V.subscribe((e,t)=>{if(!t||e.isLoading!==t.isLoading){let t=document.querySelector(`main`);t&&(e.isLoading?D(`main`,H()):e.product&&D(`main`,q(e.product,e.relatedProducts,e.quantity)))}if(!e.isLoading&&(!t||e.product!==t.product)&&e.product&&(D(`#breadcrumb-section`,U(e.product)),D(`#product-info-section`,W(e.product)),D(`#quantity-section`,G(e.product,e.quantity))),!e.isLoading&&(!t||e.relatedProducts!==t.relatedProducts||e.isLoadingRelated!==t.isLoadingRelated)&&(!e.isLoadingRelated&&e.relatedProducts&&e.relatedProducts.length>0?D(`#related-products-section`,K(e.relatedProducts)):D(`#related-products-section`,``)),!e.isLoading&&(!t||e.quantity!==t.quantity)){let t=document.querySelector(`#quantity-input`);t&&(t.value=e.quantity)}}),Y=()=>{let e=V.getState();return`
    <div class="min-h-screen bg-gray-50">
      ${g({title:`상품 상세`,showBackButton:!0})}
      <main class="max-w-md mx-auto px-4 py-4">
        ${e.isLoading?H():q(e.product,e.relatedProducts,e.quantity)}
      </main>
      ${x()}
    </div>
  `};Y.onMount=()=>{let e=i(),t=e.id;if(!t){console.error(`상품 ID가 없습니다.`);return}J=Ie(),Fe(),Ne(t)},Y.onUnmount=()=>{J&&(J(),J=null)};const X=(e=0)=>`
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
`,Le=(e,t)=>`
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
`,Re=(e=0,t=0,n=0)=>{let r=e>0;return`
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
  `},ze=e=>`
  <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
    <div id="cart-modal-content" class="cart-modal relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
      ${e}
    </div>
  </div>
`,Z=()=>`
  ${X()}
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
`,Be=(e,t)=>{let n=e.length,r=e.reduce((e,t)=>e+t.price*t.quantity,0),i=t.length,a=t.reduce((e,t)=>e+t.price*t.quantity,0),o=n>0&&i===n;return`
    ${X(n)}
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
          ${e.map(e=>{let n=t.some(t=>t.id===e.id);return Le(e,n)}).join(``)}
        </div>
      </div>
    </div>
    ${Re(i,r,a)}
  `},Q=({items:e=[],selectedItems:t=[]}={})=>{let n=e.length;return ze(n===0?Z():Be(e,t))};Q.onMount=()=>{let e=document.getElementById(`cart-modal-close-btn`);e&&e.addEventListener(`click`,h);let t=e=>{e.key===`Escape`&&h()};document.addEventListener(`keydown`,t);let n=document.getElementById(`cart-modal-container`);n&&n.addEventListener(`click`,e=>{let t=e.target.closest(`#cart-modal-content`);t||h()}),c(`change`,`#cart-modal-select-all-checkbox`,e=>{ae(e.target.checked)}),c(`change`,`.cart-item-checkbox`,e=>{let t=e.target.dataset.productId;ie(t,e.target.checked)}),c(`click`,`.quantity-increase-btn`,e=>{let t=e.target.closest(`button`).dataset.productId,n=document.querySelector(`.quantity-input[data-product-id="${t}"]`),r=parseInt(n.value)+1;m(t,r)}),c(`click`,`.quantity-decrease-btn`,e=>{let t=e.target.closest(`button`).dataset.productId,n=document.querySelector(`.quantity-input[data-product-id="${t}"]`),r=Math.max(1,parseInt(n.value)-1);m(t,r)}),c(`click`,`.cart-item-remove-btn`,e=>{let t=e.target.dataset.productId;re(t),j(`상품이 장바구니에서 제거되었습니다.`)}),c(`click`,`#cart-modal-remove-selected-btn`,()=>{oe(),j(`선택한 상품들이 삭제되었습니다.`)}),c(`click`,`#cart-modal-clear-cart-btn`,()=>{se(),Ce(`장바구니가 비워졌습니다.`)}),c(`click`,`#cart-modal-checkout-btn`,()=>{j(`구매 기능은 준비중입니다.`)}),c(`click`,`.cart-item-image, .cart-item-title`,e=>{let t=e.target.dataset.productId;h(),r(`/product/${t}`)})};const Ve=()=>{$();let e=document.createElement(`div`);e.id=`cart-modal-container`,e.className=`fixed inset-0 z-50 overflow-y-auto cart-modal-overlay`,e.style.backgroundColor=`rgba(0, 0, 0, 0.5)`;let t=document.getElementById(`root`);return t?t.appendChild(e):document.body.appendChild(e),e},$=()=>{let e=document.getElementById(`cart-modal-container`);e&&e.remove()},He=()=>{let{items:e,selectedItems:t,isModalOpen:n}=f.getState();n?(Ve(),D(`#cart-modal-container`,Q({items:e,selectedItems:t})),Q.onMount()):$()},Ue=e=>{let t={items:e.items,selectedItems:e.selectedItems,itemCount:e.itemCount};te(d,t)},We=()=>{f.subscribe(He),f.subscribe(Ue)};c(`click`,`[data-link]`,e=>{e.preventDefault(),n.get().push(e.target.href.replace(window.location.origin,``))});const Ge={"/":R,"/product/:id":Y};function Ke(){n.set(t(Ge)),n.get().subscribe(b),We(),b()}Ke();