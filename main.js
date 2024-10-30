function showLanguageMenu(){
    const langMenu = document.querySelector('.lang-menu');
    langMenu.style.display = 'flex';
}

function closeLangMenu(){
    const langMenu = document.querySelector('.lang-menu');
    langMenu.style.display = 'none';
}
function showSidebarCloseLangMenu(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    const langMenu = document.querySelector('.lang-menu');
    langMenu.style.display = 'none';

    const icons = document.querySelector('.icons');
    icons.style.display = 'none';
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    const icons = document.querySelector('.icons');
    icons.style.display = 'flex';
}
// Function to check the current time and show/hide the element
function checkTime() {
const currentHour = new Date().getHours();
const startHour = 7; // Start hour (7 AM)
const endHour = 12; // End hour (2 PM)

const breakfastMenu = document.getElementById('breakfastMenu');

// Check if the current hour is within the specified range
if (currentHour >= startHour && currentHour < endHour) {
    breakfastMenu.style.display = 'flex'; // Show the element
} else {
    breakfastMenu.style.display = 'none'; // Hide the element
}
}

// Call the function on page load using window.onload
window.onload = function() {
checkTime();
};

// Optionally, you can set an interval to check every hour
setInterval(checkTime, 3600000); // Check every hour

//footer note
const EnglishNote = document.querySelector('.EnglishNote');
const SpanishNote = document.querySelector('.SpanishNote');
const italianNote = document.querySelector('.ItalianNote');
const FrenchNote = document.querySelector('.FrenchNote');
const ArabicNote = document.querySelector('.ArabicNote');

// menu
const englishMenu = document.querySelector('.EnglishContainer');
const spanishMenu = document.querySelector('.spanishContainer');
const italianMenu = document.querySelector('.italianContainer');
const frenchMenu = document.querySelector('.frenchContainer');
const arabicMenu = document.querySelector('.arabicContainer');

function switchEnglish() {
    EnglishNote.style.display = 'flex';
    SpanishNote.style.display = 'none';
    italianNote.style.display = 'none';
    FrenchNote.style.display = 'none';
    ArabicNote.style.display = 'none';
   
    englishMenu.style.display = 'flex';
    spanishMenu.style.display = 'none';
    italianMenu.style.display = 'none';
    frenchMenu.style.display = 'none';
    arabicMenu.style.display = 'none';


}

function switchSpanish(){
    EnglishNote.style.display = 'none';
    SpanishNote.style.display = 'flex';
    italianNote.style.display = 'none';
    FrenchNote.style.display = 'none';
    ArabicNote.style.display = 'none';

    englishMenu.style.display = 'none';
    spanishMenu.style.display = 'flex';
    italianMenu.style.display = 'none';
    frenchMenu.style.display = 'none';
    arabicMenu.style.display = 'none';
}

function switchItalian(){
    EnglishNote.style.display = 'none';
    SpanishNote.style.display = 'none';
    italianNote.style.display = 'flex';
    FrenchNote.style.display = 'none';
    ArabicNote.style.display = 'none';

    englishMenu.style.display = 'none';
    spanishMenu.style.display = 'none';
    italianMenu.style.display = 'flex';
    frenchMenu.style.display = 'none';
    arabicMenu.style.display = 'none';
}

function switchFrench(){
    EnglishNote.style.display = 'none';
    SpanishNote.style.display = 'none';
    italianNote.style.display = 'none';
    FrenchNote.style.display = 'flex';
    ArabicNote.style.display = 'none';

    englishMenu.style.display = 'none';
    spanishMenu.style.display = 'none';
    italianMenu.style.display = 'none';
    frenchMenu.style.display = 'flex';
    arabicMenu.style.display = 'none';
}

 function switchArabic(){
    EnglishNote.style.display = 'none';
    SpanishNote.style.display = 'none';
    italianNote.style.display = 'none';
    FrenchNote.style.display = 'none';
    ArabicNote.style.display = 'flex';

    englishMenu.style.display = 'none';
    spanishMenu.style.display = 'none';
    italianMenu.style.display = 'none';
    frenchMenu.style.display = 'none';
    arabicMenu.style.display = 'flex';
}