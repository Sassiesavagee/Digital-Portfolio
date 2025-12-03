// ...existing code...
async function loadLocale(locale) {
  try {
    const res = await fetch(`locales/${locale}.json`);
    if (!res.ok) throw new Error('Locale not found: ' + locale);
    const translations = await res.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) el.textContent = translations[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[key]) el.placeholder = translations[key];
    });

    document.querySelectorAll('[data-i18n-value]').forEach(el => {
      const key = el.getAttribute('data-i18n-value');
      if (translations[key]) el.value = translations[key];
    });
  } catch (err) {
    console.error('i18n load error:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadLocale('en'); // default

  const switcher = document.getElementById('localeSwitcher');
  if (switcher) switcher.addEventListener('change', e => loadLocale(e.target.value));
});
// ...existing code...


function loadLocale(lang) {
  // your existing locale loading logic
  console.log("Loading locale:", lang);
}

// Save selected language
function changeLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang);
  loadLocale(lang);
}

// On page load, restore previous language
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  loadLocale(savedLang);

  // also set dropdown to saved language
  document.getElementById("languageSelect").value = savedLang;
});

// Hook dropdown change
document.getElementById("languageSelect").addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});
