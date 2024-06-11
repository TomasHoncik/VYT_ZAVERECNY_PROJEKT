const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click",() => {
        faq.classList.toggle("active");
    })
})

function redirect() {
    window.location.href = "https://github.com/TomasHoncik/VYT_ZAVERECNY_PROJEKT";
}