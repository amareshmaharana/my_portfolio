/* ++++++++++++++++ EMAIL JS ++++++++++++++++ */
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceId - templateId - #form - public-key
  emailjs
    .sendForm(
      "service_1ay1dmm",
      "template_uhn4lgj",
      "#contact-form",
      "pxgDOB_XUs4UAoLKA"
    )

    .then(
      () => {
        contactMessage.textContent =
          "✅ Message sent successfully. We will reach you soon.";

        // Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // clear input fields
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent = "❌ Message not sent (service error)";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);



/* ++++++++++++++++++ SCROLL UP ++++++++++++++++++ */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);



/* +++++++++++++++++ SCROLL SECTION ACTIVE LINK +++++++++++++++++ */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)



/* ++++++++++++++++++++ SCROLL REVEAL ANIMATION +++++++++++++++++++ */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // animation repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval : 100})