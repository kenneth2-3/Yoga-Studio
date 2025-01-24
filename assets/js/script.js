// JavaScript code to ensure the Bootstrap mobile navbar collapses when navigating to in-page links
document
    .querySelectorAll(".navbar-collapse .nav-link")
    .forEach((link) => {
        link.addEventListener("click", function (e) {
            let section = document.querySelector(e.target.getAttribute("href"));
            if (section) {
                e.preventDefault(); // Prevent default anchor click behavior
                let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
                window.scroll({
                    top: section.offsetTop - navbarHeight, // Adjust for navbar height
                    behavior: "smooth",
                });
                document
                    .querySelector(".navbar-collapse")
                    .classList.remove("show"); // Collapse navbar
            }
        });
    });

// Smooth scroll for "Book Appointment" button
document.querySelector('.btn .btn2 .btn3').addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector('#book-appointment');
    const offset = 70; // Adjust for any fixed header
    const targetPosition = target.offsetTop - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// Smooth scroll for "Contact Info" button
document.querySelector('.btn[href=".contact-info"]').addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector('.contact-info');
    const offset = 100; // Adjust for fixed header height
    const targetPosition = target.offsetTop - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
    });
});
