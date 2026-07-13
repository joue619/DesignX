import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKNTbjg0Wj2_jbfJmjK_HGNfMy6Q55_P0",
  authDomain: "designx-a6280.firebaseapp.com",
  projectId: "designx-a6280",
  storageBucket: "designx-a6280.firebasestorage.app",
  messagingSenderId: "973029859310",
  appId: "1:973029859310:web:bf5e4e9239300e276cb8ff"
};


// تشغيل Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// مكان عرض التقييمات
const reviewsContainer = document.getElementById("reviewsContainer");


// تحميل التقييمات
async function loadReviews() {

    if (!reviewsContainer) return;

    const querySnapshot = await getDocs(collection(db, "reviews"));

    reviewsContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {

        const review = doc.data();

        reviewsContainer.innerHTML += `

        <div class="testimonial">

            <div class="stars">
                ${"⭐".repeat(Number(review.rating))}
            </div>

            <p>${review.message}</p>

            <h3>${review.name}</h3>

            <span>${review.date}</span>

        </div>

        `;

    });

}


// تشغيل تحميل التقييمات
loadReviews();



// فورم إضافة تقييم
const reviewForm = document.getElementById("reviewForm");


if (reviewForm) {

reviewForm.addEventListener("submit", async (e) => {

    e.preventDefault();


    const name = document.getElementById("reviewName").value;

    const rating = document.getElementById("reviewRating").value;

    const message = document.getElementById("reviewMessage").value;


try {

    await addDoc(collection(db, "reviews"), {

        name: name,

        rating: Number(rating),

        message: message,

        date: new Date().toLocaleDateString("ar-EG")

    });


    alert("🎉 شكراً لك، تم إرسال رأيك بنجاح");


    reviewForm.reset();


    loadReviews();


} catch(error) {

    console.log(error);

    alert("حدث خطأ: " + error.message);

}

});
}