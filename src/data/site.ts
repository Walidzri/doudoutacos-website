export const site = {
  brand: {
    name: "Doudou Tacos",
    tagline: "Good Food Good Mood",
  },

  location: {
    title: "Nous trouver",
    addressLine1: "Bougaa - Cité des Jardins",
    addressLine2: "Devant Laboratoire",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.03820507643957!2d5.090228940331044!3d36.33617787595077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d330eba3029a1%3A0x353f11bd81a5afdb!2sDoudou%20Tacos!5e1!3m2!1sfr!2sfr!4v1770126435098!5m2!1sfr!2sfr",
    directionsUrl:
      "https://www.google.com/maps/dir//Doudou+Tacos,+Cit%C3%A9+des+jardins,+Bougaa,+Alg%C3%A9rie/@36.3361779,5.0902289,99m/data=!3m1!1e3!4m17!1m7!3m6!1s0x128d330eba3029a1:0x353f11bd81a5afdb!2sDoudou+Tacos!8m2!3d36.3363014!4d5.0902567!16s%2Fg%2F11vkldg754!4m8!1m0!1m5!1m1!1s0x128d330eba3029a1:0x353f11bd81a5afdb!2m2!1d5.090311!2d36.3362906!3e0?entry=ttu",
  },

  hours: {
    title: "Horaires",
    items: [
      { label: "Lundi", value: "12:00 — 22:00" },
      { label: "Mardi", value: "12:00 — 22:00" },
      { label: "Mercredi", value: "12:00 — 22:00" },
      { label: "Jeudi", value: "12:00 — 22:00" },
      { label: "Vendredi", value: "12:00 — 22:00" },
      { label: "Samedi", value: "12:00 — 22:00" },
      { label: "Dimanche", value: "12:00 — 22:00" },
    ],
    // note: "Mets tes horaires réels dans src/data/site.ts",
  },

  heroVideos: [
    // Tu fournis les vidéos ici (chemins dans /public)
    { src: "/videos/hero-1.mp4", poster: "/poster/hero-1.jpg" },
    { src: "/videos/hero-2.mp4", poster: "/poster/hero-2.jpg" },
    { src: "/videos/hero-3.mp4", poster: "/poster/hero-3.jpg" },
  ],
};
