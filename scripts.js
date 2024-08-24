// scripts.js

function toggleLanguage() {
    const englishSections = document.querySelectorAll('.english');
    const spanishSections = document.querySelectorAll('.spanish');
    englishSections.forEach(section => section.classList.toggle('hidden'));
    spanishSections.forEach(section => section.classList.toggle('hidden'));
}
