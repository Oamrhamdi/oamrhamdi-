// تبديل اللغة
document.getElementById('lang-ar').addEventListener('click', () => {
    document.querySelectorAll('[data-lang="ar"]').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('[data-lang="en"]').forEach(el => el.classList.add('hidden'));
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
});

document.getElementById('lang-en').addEventListener('click', () => {
    document.querySelectorAll('[data-lang="en"]').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('[data-lang="ar"]').forEach(el => el.classList.add('hidden'));
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
});

// إظهار وإخفاء الأقسام
document.querySelectorAll('.section-item').forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(target).classList.remove('hidden');
    });
});

// إظهار القسم الرئيسي عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('main').classList.remove('hidden');
});