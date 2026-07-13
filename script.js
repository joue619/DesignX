const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

function showTestimonial(){

    testimonials.forEach(t=>t.classList.remove("active"));

    testimonials[current].classList.add("active");

    current++;

    if(current>=testimonials.length){

        current=0;

    }

}

setInterval(showTestimonial,4000);
window.addEventListener("load", ()=>{

    setTimeout(()=>{

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display="none";

        },800);

    },2000);

});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});
const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
const popup = document.getElementById("servicePopup");
const popupTitle = document.getElementById("popupTitle");
const popupBody = document.getElementById("popupBody");
const closePopup = document.querySelector(".close-popup");

const services = {

website:{

title:"🌐 تصميم المواقع",

content:`

<ul>

<li>✅ تصميم احترافي وعصري</li>

<li>✅ متوافق مع جميع الأجهزة</li>

<li>✅ سرعة تحميل عالية</li>

<li>✅ تحسين SEO</li>

<li>✅ لوحة تحكم</li>

<li>✅ دعم فني</li>

</ul>

<a class="popup-btn"
href="https://wa.me/201118270369?text=السلام عليكم، أريد طلب خدمة تصميم المواقع."
target="_blank">

اطلب الخدمة

</a>

`

},

graphic:{

title:"🎨 التصميم الجرافيكي",

content:`

<ul>

<li>✅ تصميم الشعارات</li>

<li>✅ الهوية البصرية</li>

<li>✅ بوستات السوشيال ميديا</li>

<li>✅ الإعلانات</li>

<li>✅ المطبوعات</li>

<li>✅ تصميم احترافي بالكامل</li>

</ul>

<a class="popup-btn"
href="https://wa.me/201118270369?text=السلام عليكم، أريد طلب خدمة التصميم الجرافيكي."
target="_blank">

اطلب الخدمة

</a>
`

},

ai:{

title:"🤖 الذكاء الاصطناعي",

content:`

<ul>

<li>✅ إنشاء صور بالذكاء الاصطناعي</li>

<li>✅ إنشاء فيديوهات AI</li>

<li>✅ كتابة المحتوى</li>

<li>✅ التعليق الصوتي</li>

<li>✅ تحسين الصور</li>

<li>✅ تصميم الإعلانات</li>

</ul>

<a class="popup-btn"
href="https://wa.me/201118270369?text=السلام عليكم، أريد الاستفسار عن خدمات الذكاء الاصطناعي."
target="_blank">

اطلب الخدمة

</a>
`

}

};

document.querySelectorAll(".service-btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

const service = btn.dataset.service;

popupTitle.innerHTML = services[service].title;

popupBody.innerHTML = services[service].content;

popup.classList.add("show");

});

});

closePopup.onclick=()=>{

popup.classList.remove("show");

};

window.onclick=(e)=>{

if(e.target===popup){

popup.classList.remove("show");

}

};
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_xxxxx",
        "template_xxxxx",
        this
    )
    .then(() => {

        alert("✅ تم إرسال الرسالة بنجاح");
        contactForm.reset();

    })
    .catch((error)=>{

        console.log(error);
        alert("❌ حدث خطأ أثناء الإرسال");

    });

});
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();


        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            this
        )

        .then(function() {

            alert("✅ تم إرسال الرسالة بنجاح");

            contactForm.reset();

        })

        .catch(function(error) {

            console.log(error);

            alert("❌ حدث خطأ أثناء الإرسال");

        });

    });

}