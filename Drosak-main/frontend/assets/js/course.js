let isDark = false;
let lang = 'en';

const courses = [
  {
    title: { en: "HTML & CSS Crash Course", ar: "دورة HTML و CSS" },
    image: "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    language: "English",
    price: "Free",
    rating: 5
  },
  {
    title: { en: "JavaScript Full Course", ar: "دورة JavaScript كاملة" },
    image: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    language: "English",
    price: "Free",
    rating: 4
  },
  {
    title: { en: "Python Programming", ar: "برمجة بايثون من الصفر" },
    image: "https://i.ytimg.com/vi/RvCBzhhydNk/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=RvCBzhhydNk",
    language: "Arabic",
    price: "Free",
    rating: 5
  },
  {
    title: { en: "Advanced React", ar: "ريآكت المتقدم" },
    image: "https://i.ytimg.com/vi/ScT4ElKd5eQ/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=ScT4ElKd5eQ",
    language: "English",
    price: "Paid",
    rating: 4
  }
];

function renderCourses() {
  const container = document.getElementById("courses");
  container.innerHTML = "";

  const langVal = document.getElementById("langFilter").value;
  const priceVal = document.getElementById("priceFilter").value;
  const ratingVal = document.getElementById("ratingFilter").value;

  const filtered = courses.filter(course => {
    return (
      (langVal === "all" || course.language === langVal) &&
      (priceVal === "all" || course.price === priceVal) &&
      (ratingVal === "all" || course.rating >= parseInt(ratingVal))
    );
  });

  filtered.forEach(course => {
    const card = document.createElement("div");
    card.className = "bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-all";

    card.innerHTML = `
      <img src="${course.image}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">${course.title[lang]}</h3>
        <p class="text-sm text-gray-500">${course.language} • ${course.price}</p>
        <div class="text-yellow-400 my-2">
          ${'★'.repeat(course.rating)}${'☆'.repeat(5 - course.rating)}
        </div>
        <a href="${course.link}" target="_blank" class="inline-block mt-2 bg-blue-600 text-white px-3 py-1 rounded">${lang === 'en' ? 'Watch' : 'مشاهدة'}</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("theme-toggle").onclick = () => {
  isDark = !isDark;
  document.body.classList.toggle("dark", isDark);
};

document.getElementById("lang-toggle").onclick = () => {
  lang = lang === 'en' ? 'ar' : 'en';
  document.getElementById("page-title") && (document.getElementById("page-title").innerText = lang === 'en' ? "📚 Technical Courses" : "📚 كورسات تقنية");
  document.getElementById("welcome-text").innerText = lang === 'en' ? "Welcome to Drosak – Your Gateway to Learning" : "مرحبًا بك في دروسك – بوابتك إلى التعلم";
  document.getElementById("description-text").innerText = lang === 'en'
    ? "Explore top-rated tech courses in Arabic and English, free and paid."
    : "استكشف أفضل الدورات التقنية باللغة العربية والإنجليزية، المجانية والمدفوعة.";
  renderCourses();
};

["langFilter", "priceFilter", "ratingFilter"].forEach(id => {
  document.getElementById(id).addEventListener("change", renderCourses);
});

renderCourses();
