(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();const a=[{label:"care168",title:"Care168 Carer Matching Platform",img:"./public/work_care168.png",descr:"In this project, I was responsible for developing the application layout using Flutter and integrating it with Django REST APIs for backend functionality. Additionally, I built the web page using Bootstrap to ensure responsive and consistent design.",webUrl:"https://care168.com.tw/",iOS:"https://apps.apple.com/tw/app/care168/id1644036067",android:"https://play.google.com/store/apps/details?id=com.chijia.fluttercare168"},{label:"lady2",title:"Lady Two Dessert Website",img:"./public/work_lady_two.png",descr:"lady 2 description",webUrl:"",iOS:"",android:""},{label:"busRental",title:"Tour Bus Rental App",img:"./public/work_bus.png",descr:"bus description",webUrl:"",iOS:"",android:""},{label:"stockAnalysis",title:"Stock Analysis App",img:"./public/work_stock.png",descr:"stock description",webUrl:"",iOS:"",android:"https://play.google.com/store/apps/details?id=com.chijia.flutter_stock_new"}],o=document.getElementById("modal"),c=document.getElementById("modal-content"),d=document.getElementById("closeBtn");function p(t){c.innerHTML=t,o.classList.remove("hidden"),o.classList.add("flex")}function u(){o.classList.add("hidden"),o.classList.remove("flex")}a.forEach(t=>{document.getElementById(t.label).addEventListener("click",()=>{const l=`
        <div class="flex justify-between content-center">
          <h2 class="text-2xl font-bold mb-4">${t.title}</h2>
        </div>
        <div class="flex flex-col items-center h-32 md:flex-row">
        <img src="${t.img}" alt="" class="w-auto">
        <div class="ml-4">
          <p>${t.descr}</p>
          <div class="font-light text-gray-500 mt-4">
            ${t.webUrl?`<a href="${t.webUrl}" target="_blank" class="text-blue-500">Official Website</a><span> | </span>`:""}
            ${t.iOS?`<a href="${t.iOS}" target="_blank" class="text-blue-500">iOS App</a><span> | </span>`:""}
            ${t.android?`<a href="${t.android}" target="_blank" class="text-blue-500">Android App</a>`:""}
          </div>
        </div>
      </div>`;p(l)})});d.addEventListener("click",u);
