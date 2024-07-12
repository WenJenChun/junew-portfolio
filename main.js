import './src/styles.css'


function getLanguages() {
    const langs = navigator.language;
  
    if(langs === "zh-TW"){
        // window.location.replace("http://www.w3schools.com");
    };
    
}
getLanguages();


const portfolioList = [
    {
      label: "care168",
      title: "Care168 Carer Matching Platform",
      img: "./public/work_care168.png",
      descr: "In this project, I was responsible for developing the application layout using Flutter and integrating it with Django REST APIs for backend functionality. Additionally, I built the web page using Bootstrap to ensure responsive and consistent design.",
      webUrl: "https://care168.com.tw/",
      iOS: "https://apps.apple.com/tw/app/care168/id1644036067",
      android: "https://play.google.com/store/apps/details?id=com.chijia.fluttercare168"
    },
    {
      label: "lady2",
      title: "Lady Two Dessert Website",
      img: "./public/work_lady_two.png",
      descr: "lady 2 description",
      webUrl: "",
      iOS: "",
      android: ""
    },
    {
      label: "busRental",
      title: "Tour Bus Rental App",
      img: "./public/work_bus.png",
      descr: "bus description",
      webUrl: "",
      iOS: "",
      android: ""
    },
    {
      label: "stockAnalysis",
      title: "Stock Analysis App",
      img: "./public/work_stock.png",
      descr: "stock description",
      webUrl: "",
      iOS: "",
      android: "https://play.google.com/store/apps/details?id=com.chijia.flutter_stock_new"
    },
  ];

  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('closeBtn');
  
  function openModal(content) {
    modalContent.innerHTML = content;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
  
  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  
  portfolioList.forEach(project => {
    const projectDiv = document.getElementById(project.label);
  
    projectDiv.addEventListener('click', () => {
      const content = `
        <div class="flex justify-between content-center">
          <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
        </div>
        <div class="flex flex-col md:flex-row">
          <img src="${project.img}" alt="" class="max-h-64 object-scale-down">
          <div>
            <p class="my-auto">${project.descr}</p>
            <div class="font-light text-gray mt-4">
              ${project.webUrl ? `<a href="${project.webUrl}" target="_blank">Official Website</a><span> | </span>` : ''}
              ${project.iOS ? `<a href="${project.iOS}" target="_blank">iOS App</a><span> | </span>` : ''}
              ${project.android ? `<a href="${project.android}" target="_blank">Android App</a>` : ''}
            </div>
          </div>
        </div>`;
      openModal(content);
    });
  });
  
  closeBtn.addEventListener('click', closeModal);