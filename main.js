import './src/styles.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// function getLanguages() {
//   const langs = navigator.language || navigator.userLanguage;
//   const currentPath = window.location.pathname;

//   if (langs.includes("zh") && !currentPath.includes("/junew-portfolio/zh")) {
//       window.location.replace("http://localhost:5173/junew-portfolio/zh");
//   } else {
//       console.log(langs); // Optionally log the language for debugging
//   }
// }

// getLanguages();

const backToIndex = document.querySelector("#backToIndex");

backToIndex.addEventListener("click", function(e){
  window.location.href = "https://wenjenchun.github.io/junew-portfolio/";
});

const portfolioList = [
    {
      label: "care168",
      title: "Care168 Carer Matching Platform",
      img: "../assets/work_care168.png",
      descr: "In this project, I was responsible for developing the application layout using Flutter and integrating it with Django REST APIs for backend functionality. Additionally, I built the web page using Bootstrap to ensure responsive and consistent design.",
      webUrl: "https://care168.com.tw/",
      iOS: "https://apps.apple.com/tw/app/care168/id1644036067",
      android: "https://play.google.com/store/apps/details?id=com.chijia.fluttercare168"
    },
    {
      label: "lady2",
      title: "Lady Two Dessert Website",
      img: "../assets/work_lady_two.png",
      descr: "I used Figma to plan both the frontend and backend pages, and built the responsive web design (RWD) pages using Bootstrap.",
      webUrl: "",
      iOS: "",
      android: ""
    },
    {
      label: "busRental",
      title: "Tour Bus Rental App",
      img: "../assets/work_bus.png",
      descr: "I planned the frontend pages using Figma, and developed the UI and some functionalities using Flutter.",
      webUrl: "",
      iOS: "",
      android: ""
    },
    {
      label: "stockAnalysis",
      title: "Stock Analysis App",
      img: "../assets/work_stock.png",
      descr: "I built the UI using Flutter, and implemented web scraping with Python's Beautiful Soup to retrieve stock market data. Additionally, I used Django to integrate the data.",
      webUrl: "",
      iOS: "",
      android: "https://play.google.com/store/apps/details?id=com.chijia.flutter_stock_new"
    },
    {
      label: "chijiaTech",
      title: "Chijia Technology Official Website",
      img: "../assets/work_chijia.png",
      descr: "I designed the UI using Figma and built the responsive website using Bootstrap.",
      webUrl: "",
      iOS: "",
      android: ""
    },
    {
      label: "propertyCard",
      title: "Property Agent Personal Website",
      img: "../assets/work_property.png",
      descr: "I designed the UI for both the frontend and backend using Figma, and built the responsive web pages using Bootstrap. I also developed a backend system with Django that allows users to log in and modify the style and color of their business cards.",
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
          <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
          <p class="mb-4">${project.descr}</p>
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
  

  gsap.registerPlugin(ScrollTrigger);

  const titleLabel = document.querySelector("#titleLabel");
  const aboutMe = document.querySelector("#aboutMe");

  
  gsap.from(titleLabel,{
    opacity:0,
    duration:0.8,
    x:200,
  })

  gsap.from(aboutMe,{
    opacity:0,
    duration:0.8,
    x:-200,
  })

  gsap.to("#serviceSectTitle",{
    duration:0.8,
    opacity:1,
    scrollTrigger: {
        trigger: "#serviceSectTitle",
        start: "top 70%", 
        end: "bottom 60%",
        markers: true,
    }
    })
  gsap.to("#serviceSectIcons", {
    y: -50, 
    opacity: 1, 
    duration: 0.8,
    scrollTrigger: {
      trigger: "#serviceSectIcons",
      start: "top 80%",
      end: "bottom 60%",
    }
  });

gsap.to("#serviceSectIcons i", {
  rotation: 360, 
  duration: 0.6, 
  scrollTrigger: {
    trigger: "#serviceSectIcons",
    start: "top 60%", 
    toggleActions: "restart none none none", 
  }
});

