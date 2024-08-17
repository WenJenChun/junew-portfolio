import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

gsap.from("#titleLabel",{
  opacity:0,
  duration:0.8,
  x:200,
})

gsap.from("#aboutMe",{
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

//index, freelancer
gsap.to("#serviceSectIcons i", {
rotation: 360, 
duration: 0.6, 
scrollTrigger: {
  trigger: "#serviceSectIcons",
  start: "top 60%", 
  toggleActions: "restart none none none", 
}
});

//resume_zh
gsap.to(".skillIcons img", {
    rotation: 360, 
    duration: 0.6, 
    scrollTrigger: {
      trigger: ".skillIcons",
      start: "top 60%", 
      end: "bottom 60%",
    }
    });


gsap.from("#twUKImg", { 
    x:-800,
    opacity:0,
    duration: 0.5, 
    scrollTrigger: {
        trigger: "#twUKImg",
        start: "top 85%", 
        toggleActions: "restart none none none", 
        once: true,
        ease: "power3",
      }
});

ScrollTrigger.batch(".certificate-img", {
    onEnter: (elements, triggers) => {
        gsap.fromTo(elements, 
            {
                opacity: 0,
                x: 100  // 起始位置在右側
            },
            {
                opacity: 1,
                x: 0,  // 移動到原始位置
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
                overwrite: 'auto'
            }
        );
        // 顯示父容器
        gsap.to(".certificates", {
            opacity: 1,
            duration: 0.3
        });
    },
    once: true,
    start: "top 80%",
    marker:true
});

