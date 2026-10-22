/* ============================================================
   Kingdom of God Centre — site script
   1. English / French text (edit the wording here)
   2. Language switch
   3. Menu, header and scroll effects
   ============================================================ */

const T = {
  en: {
    "nav.new": "New Here",
    "nav.welcome": "Welcome",
    "nav.expect": "What to Expect",
    "nav.beliefs": "What We Believe",
    "nav.contact": "Contact Us",
    "nav.ministries": "Ministries",
    "nav.watch": "Watch Online",
    "nav.events": "Events",
    "nav.give": "Give",

    "hero.eyebrow": "Kingdom of God Centre · Ottawa",
    "hero.title": "A church rooted in the love of God, helping people find and follow Jesus.",
    "hero.cta1": "Plan Your Visit",
    "hero.cta2": "Watch Live",

    "times.title": "Service Times",
    "times.sun": "Sunday", "times.sunHour": "9:00 a.m.", "times.sunWhat": "Worship Service · In person",
    "times.wed": "Wednesday", "times.wedHour": "7:00 p.m.", "times.wedWhat": "Midweek Service · On Zoom",
    "times.fri": "Friday", "times.friHour": "7:00 p.m.", "times.friWhat": "Friday Service · In person",

    "welcome.eyebrow": "Welcome Home",
    "welcome.title": "This world can feel lonely. Here, you don't walk the journey alone.",
    "welcome.p1": "Kingdom of God Centre is a family of worshippers in Ottawa. We gather to grow in our relationship with God and with one another through Bible teaching, heartfelt worship, prayer and real fellowship.",
    "welcome.p2": "Whatever your story, there is a place for you here. We can't wait to meet you.",
    "welcome.cta": "What to Expect",

    "beliefs.eyebrow": "Our Mission",
    "beliefs.title": "What we believe",
    "beliefs.b1t": "Jesus at the centre",
    "beliefs.b1": "We believe in one God — Father, Son and Holy Spirit — and that salvation is found in Jesus Christ alone.",
    "beliefs.b2t": "The Word of God",
    "beliefs.b2": "The Bible is our foundation. We teach it faithfully and apply it to everyday life.",
    "beliefs.b3t": "Healing and growth",
    "beliefs.b3": "God restores the heart. We walk together toward freedom, healing and maturity in Christ.",

    "min.eyebrow": "Ministries",
    "min.title": "There's a place for you in what God is doing in our house.",
    "min.worship": "Worship & Choir",
    "min.youth": "Youth",
    "min.kids": "Children",
    "min.women": "Women",
    "min.men": "Men",
    "min.media": "Media Team",
    "min.cta": "Get Involved",

    "watch.eyebrow": "Church Online",
    "watch.title": "Can't make it in person? Join us live.",
    "watch.p": "Our Sunday services are streamed live, and past messages are available any time on our YouTube channel.",
    "watch.cta1": "Watch Live",
    "watch.cta2": "Past Messages",
    "watch.latest": "Latest message",

    "events.eyebrow": "Happening at KGC",
    "events.title": "Upcoming events",
    "events.e1d": "Date to be announced", "events.e1t": "Event title", "events.e1": "Short description of the event. Replace this with real details.",
    "events.e2d": "Date to be announced", "events.e2t": "Event title", "events.e2": "Short description of the event. Replace this with real details.",
    "events.e3d": "Every Friday", "events.e3t": "Choir Practice", "events.e3": "After the Friday service, from 8:30 to 9 p.m. All voices welcome.",

    "give.eyebrow": "Generosity",
    "give.title": "Partner with what God is doing.",
    "give.p": "Your giving supports our services, ministries and outreach in Ottawa and beyond. Thank you for your generosity.",
    "give.etransfer": "Interac e-Transfer",

    "visit.eyebrow": "Plan Your Visit",
    "visit.title": "What to expect",
    "visit.p1": "Sunday service starts at 9 a.m. Expect joyful worship, prayer and a message from the Word. Come as you are — dress is casual.",
    "visit.p2": "Services are in English and French. Someone from our welcome team will be glad to greet you at the door.",

    "footer.contact": "Contact Us",
    "footer.times": "Service Times",
    "footer.timesList": "Sunday 9 a.m.<br>Wednesday 7 p.m. (Zoom)<br>Friday 7 p.m.",
    "footer.follow": "Follow Us",
    "footer.rights": "All rights reserved."
  },

  fr: {
    "nav.new": "Nouveau ici",
    "nav.welcome": "Bienvenue",
    "nav.expect": "À quoi s'attendre",
    "nav.beliefs": "Ce que nous croyons",
    "nav.contact": "Nous joindre",
    "nav.ministries": "Ministères",
    "nav.watch": "En ligne",
    "nav.events": "Événements",
    "nav.give": "Donner",

    "hero.eyebrow": "Kingdom of God Centre · Ottawa",
    "hero.title": "Une église enracinée dans l'amour de Dieu, qui aide chacun à trouver et à suivre Jésus.",
    "hero.cta1": "Planifier votre visite",
    "hero.cta2": "Regarder en direct",

    "times.title": "Heures des cultes",
    "times.sun": "Dimanche", "times.sunHour": "9 h", "times.sunWhat": "Culte d'adoration · Sur place",
    "times.wed": "Mercredi", "times.wedHour": "19 h", "times.wedWhat": "Culte de semaine · Sur Zoom",
    "times.fri": "Vendredi", "times.friHour": "19 h", "times.friWhat": "Culte du vendredi · Sur place",

    "welcome.eyebrow": "Bienvenue chez vous",
    "welcome.title": "Le monde peut sembler bien seul. Ici, vous ne marchez pas seul.",
    "welcome.p1": "Le Kingdom of God Centre est une famille d'adorateurs à Ottawa. Nous nous rassemblons pour grandir dans notre relation avec Dieu et les uns avec les autres, à travers l'enseignement de la Bible, une adoration sincère, la prière et une vraie communion fraternelle.",
    "welcome.p2": "Quelle que soit votre histoire, il y a une place pour vous ici. Nous avons hâte de vous rencontrer.",
    "welcome.cta": "À quoi s'attendre",

    "beliefs.eyebrow": "Notre mission",
    "beliefs.title": "Ce que nous croyons",
    "beliefs.b1t": "Jésus au centre",
    "beliefs.b1": "Nous croyons en un seul Dieu — Père, Fils et Saint-Esprit — et que le salut se trouve en Jésus-Christ seul.",
    "beliefs.b2t": "La Parole de Dieu",
    "beliefs.b2": "La Bible est notre fondement. Nous l'enseignons fidèlement et l'appliquons à la vie de tous les jours.",
    "beliefs.b3t": "Guérison et croissance",
    "beliefs.b3": "Dieu restaure le cœur. Ensemble, nous marchons vers la liberté, la guérison et la maturité en Christ.",

    "min.eyebrow": "Ministères",
    "min.title": "Il y a une place pour vous dans ce que Dieu fait dans sa maison.",
    "min.worship": "Louange et chorale",
    "min.youth": "Jeunesse",
    "min.kids": "Enfants",
    "min.women": "Femmes",
    "min.men": "Hommes",
    "min.media": "Équipe média",
    "min.cta": "S'impliquer",

    "watch.eyebrow": "L'église en ligne",
    "watch.title": "Vous ne pouvez pas venir? Rejoignez-nous en direct.",
    "watch.p": "Nos cultes du dimanche sont diffusés en direct, et les messages précédents sont disponibles en tout temps sur notre chaîne YouTube.",
    "watch.cta1": "Regarder en direct",
    "watch.cta2": "Messages précédents",
    "watch.latest": "Dernier message",

    "events.eyebrow": "À venir au KGC",
    "events.title": "Événements à venir",
    "events.e1d": "Date à confirmer", "events.e1t": "Titre de l'événement", "events.e1": "Courte description de l'événement. Remplacez ce texte par les vrais détails.",
    "events.e2d": "Date à confirmer", "events.e2t": "Titre de l'événement", "events.e2": "Courte description de l'événement. Remplacez ce texte par les vrais détails.",
    "events.e3d": "Chaque vendredi", "events.e3t": "Répétition de la chorale", "events.e3": "Après le culte du vendredi, de 20 h 30 à 21 h. Toutes les voix sont les bienvenues.",

    "give.eyebrow": "Générosité",
    "give.title": "Participez à ce que Dieu accomplit.",
    "give.p": "Vos dons soutiennent nos cultes, nos ministères et nos actions à Ottawa et ailleurs. Merci pour votre générosité.",
    "give.etransfer": "Virement Interac",

    "visit.eyebrow": "Planifier votre visite",
    "visit.title": "À quoi s'attendre",
    "visit.p1": "Le culte du dimanche commence à 9 h. Attendez-vous à une louange joyeuse, à la prière et à un message tiré de la Parole. Venez comme vous êtes — tenue décontractée.",
    "visit.p2": "Les cultes se déroulent en anglais et en français. Un membre de notre équipe d'accueil sera heureux de vous recevoir à la porte.",

    "footer.contact": "Nous joindre",
    "footer.times": "Heures des cultes",
    "footer.timesList": "Dimanche 9 h<br>Mercredi 19 h (Zoom)<br>Vendredi 19 h",
    "footer.follow": "Suivez-nous",
    "footer.rights": "Tous droits réservés."
  }
};

/* ---------- Language ---------- */
function getSavedLang() {
  try { return localStorage.getItem("kgc-lang"); } catch (e) { return null; }
}
function saveLang(lang) {
  try { localStorage.setItem("kgc-lang", lang); } catch (e) { /* ignore */ }
}

function setLang(lang) {
  if (!T[lang]) lang = "en";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const value = T[lang][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  saveLang(lang);
}

// ?lang=fr in the URL wins, then the saved choice, then the browser language
const urlLang = new URLSearchParams(location.search).get("lang");
const startLang = urlLang || getSavedLang() || ((navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en");
setLang(startLang);

document.querySelectorAll(".lang-switch button").forEach(function (b) {
  b.addEventListener("click", function () { setLang(b.dataset.lang); });
});

/* ---------- Mobile menu ---------- */
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");

function closeMenu() {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}
toggle.addEventListener("click", function () {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
});
nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });

document.querySelectorAll(".sub-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () { btn.parentElement.classList.toggle("open"); });
});

/* ---------- Header background on scroll ---------- */
const header = document.querySelector(".site-header");
function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Reveal sections as they scroll in ---------- */
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".split, .belief-grid article, .m-card, .event-card, .time-card").forEach(function (el) {
    el.classList.add("reveal");
    io.observe(el);
  });
}

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
