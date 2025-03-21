// حساب العمر تلقائيًا
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const birthdate = "2004-04-12"; // تاريخ الميلاد
const ageElement = document.getElementById("age");
ageElement.textContent = calculateAge(birthdate);

// إظهار الأقسام عند النقر على الأيقونات
const navIcons = document.querySelectorAll(".nav-icon");
const sections = document.querySelectorAll("section");

navIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const target = icon.getAttribute("data-target");
        sections.forEach(section => {
            section.classList.remove("active");
            if (section.id === target) {
                section.classList.add("active");
            }
        });
    });
});

// إظهار قسم "الرئيسية" افتراضيًا
document.getElementById("welcome").classList.add("active");