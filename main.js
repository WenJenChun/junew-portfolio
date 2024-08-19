import './src/styles.css'
import './animation'
import { gsap } from "gsap";
import workCare168 from "./assets/work_care168.png";
import workLadyTwo from "./assets/work_lady_two.png";
import workBusRental from "./assets/work_bus.png";
import workStockAnalysis from "./assets/work_stock.png";
import workChijiaTech from "./assets/work_chijia.png";
import workHouseAgent from "./assets/work_property.png";

let isEnglish = true;
let currentPageName = location.pathname;
console.log(currentPageName)

currentPageName.includes("resume_zh") ? isEnglish = false : isEnglish = true;

const backToIndex = document.querySelector("#backToIndex");


backToIndex.addEventListener("click", function(e){
  if(currentPageName.includes("resume_zh")){
    isEnglish = false;
    window.location.href = "https://wenjenchun.github.io/junew-portfolio/resume_zh.html";
  } else {
    isEnglish = true;
    window.location.href = "https://wenjenchun.github.io/junew-portfolio/";
  }
});

console.log(isEnglish)

const portfolioList = [
    {
      label: "care168",
      title: "Care168 Carer Matching Platform",
      img: workCare168,
      descr: "In this project, I was responsible for developing the application layout using Flutter and integrating it with Django REST APIs for backend functionality. Additionally, I built the web page using Bootstrap to ensure responsive and consistent design.",
      titleZh:"Care168照服員媒合平台",
      descrZh:"在這個專案我負責使用 Flutter 建構 App 畫面及串接 restful api 資料，使用 Bootstsrap 建立 RWD 網頁並使用 Django 串接後端",
      webUrl: "https://care168.com.tw/",
      iOS: "https://apps.apple.com/tw/app/care168/id1644036067",
      android: "https://play.google.com/store/apps/details?id=com.chijia.fluttercare168"
    },
    {
      label: "lady2",
      title: "Lady Two Dessert Website",
      img: workLadyTwo,
      descr: "I used Figma to plan both the frontend and backend pages, and built the responsive web design (RWD) pages using Bootstrap.",
      titleZh:"二小姐甜點",
      descrZh:"我使用 Figma 計畫此官網的前台與後台，並且使用 Bootstrap 建立 RWD 自適應網頁畫面",
      webUrl: "",
      iOS: "",
      android: ""
    },
    {
      label: "busRental",
      title: "Tour Bus Rental App",
      img: workBusRental,
      descr: "I planned the frontend pages using Figma, and developed the UI and some functionalities using Flutter.",
      titleZh:"巴士租賃",
      descrZh:"我用 Figma 規劃 App UI，並且以 Flutter 建構出畫面及完成一些基本功能",
      webUrl: "",
      iOS: "",
      android: ""
    },
    {
      label: "stockAnalysis",
      title: "Stock Analysis App",
      img: workStockAnalysis,
      descr: "I built the UI using Flutter, and implemented web scraping with Python's Beautiful Soup to retrieve stock market data. Additionally, I used Django to integrate the data.",
      titleZh:"財報先生",
      descrZh:"我使用 Flutter 建立此 App 畫面，用 Python Beautiful Soup 爬蟲搜集資料，並使用 Django RESTFul API 串接資料。",
      webUrl: "",
      iOS: "",
      android: "https://play.google.com/store/apps/details?id=com.chijia.flutter_stock_new"
    },
    {
      label: "chijiaTech",
      title: "Chijia Technology Official Website",
      img: workChijiaTech,
      descr: "I designed the UI using Figma and built the responsive website using Bootstrap.",
      titleZh:"齊家科技官網",
      descrZh:"我使用 Figma 設計此官網的前台，並且使用 Bootstrap 建立 RWD 自適應網頁。",
      webUrl: "",
      iOS: "",
      android: ""
    },
    {
      label: "propertyCard",
      title: "Property Agent Personal Website",
      img: workHouseAgent,
      descr: "I designed the UI for both the frontend and backend using Figma, and built the responsive web pages using Bootstrap. I also developed a backend system with Django that allows users to log in and modify the style and color of their business cards.",
      titleZh:"房仲名片網",
      descrZh:"此專案提供房仲從業人員一個方便快速的方式建立個人網路名片，我使用 Figma 設計官網及名片網頁UI並以 Bootstrap 建立 RWD 頁面，並在後台設計讓房仲能自行設定外觀的功能。",
      webUrl: "",
      iOS: "",
      android: ""
    },
  ];



  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('closeBtn');
  
  function openModal(content) {
    modalContent.innerHTML = content;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const img = modalContent.querySelector('img');
    const container = img.parentElement;
  
    function adjustImageSize() {
      const screenWidth = window.innerWidth;
      
      if (screenWidth < 768) {
        container.style.height = 'auto';
        img.style.maxHeight = '300px';
      } else {
        // 中等尺寸以上，逐漸增加高度
        const maxHeight = Math.min(400, 200 + (screenWidth - 768) * 0.2);
        container.style.height = `${maxHeight}px`;
        img.style.maxHeight = '100%';
      }
      
      img.style.width = '100%';
      img.style.objectFit = 'contain';
    }
  
    if (img) {
      img.onload = adjustImageSize;
      if (img.complete) {
        adjustImageSize();
      }
    }
  
    // 添加窗口大小變化的監聽器
    window.addEventListener('resize', adjustImageSize);
  
    // 在modal關閉時移除事件監聽器
    modal.addEventListener('hidden.bs.modal', function () {
      window.removeEventListener('resize', adjustImageSize);
    }, { once: true });
  }
  
  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  portfolioList.forEach(project => {
    const projectDiv = document.getElementById(project.label);
  
    projectDiv.addEventListener('mouseenter', () => {
      gsap.to(projectDiv, {
        rotation: -3,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    projectDiv.addEventListener('mouseleave', () => {
      gsap.to(projectDiv, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    projectDiv.addEventListener('click', () => {
      const content = `
      <div class="flex flex-col items-center md:flex-row">
        <div class="image-container w-full md:w-1/2 mb-4 md:mb-0">
          <img src="${project.img}" alt="${project.title}" class="w-50 h-auto object-contain">
        </div>
        <div class="flex flex-col w-full md:ml-4 md:w-1/2">
          <h2 class="text-2xl font-bold mb-4">${isEnglish? project.title : project.titleZh }</h2>
          <p class="mb-4">${isEnglish? project.descr : project.descrZh}</p>
          <div class="font-light text-gray-500">
            ${project.webUrl ? `<a href="${project.webUrl}" target="_blank" class="text-blue-500">Official Website</a><span class="mx-2">|</span>` : ''}
            ${project.iOS ? `<a href="${project.iOS}" target="_blank" class="text-blue-500">iOS App</a><span class="mx-2">|</span>` : ''}
            ${project.android ? `<a href="${project.android}" target="_blank" class="text-blue-500">Android App</a>` : ''}
          </div>
        </div>
      </div>`;
      openModal(content);
    });
  });

 
  closeBtn.addEventListener('click', closeModal);
  

 

