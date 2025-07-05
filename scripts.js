// Accordion Toggle
document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        // Close all other accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) item.style.display = 'none';
        });

        // Toggle current accordion
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});

// Language Toggle Functionality
let currentLang = 'en';

const langBtn = document.getElementById('langBtn');
langBtn.addEventListener('click', () => {
    // Toggle language state
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    // Update language button text
    langBtn.textContent = currentLang === 'en' ? 'العربية' : 'English';

    // Change page direction and alignment
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.body.style.textAlign = currentLang === 'ar' ? 'right' : 'left';

    // Update text based on data attributes
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
});

// Responsive Burger Menu
const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('active');
});
