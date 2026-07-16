import horizontalLogo from "../assets/logos/horizontal-logo.webp";
import logo from "../assets/logos/logo.webp";
import iconLogo from "../assets/logos/icon-logo.webp";

const company = {
  name: "All Construction Services LLC",

  branding: {
    line1: "ALL CONSTRUCTION",
    line2: "SERVICES LLC",
  },

  shortName: "ACS",

  tagline: "A Dependable Asbestos Contractor With Solutions You Can Afford",

  founded: "2021",

  logos: {
    horizontal: horizontalLogo,
    primary: logo,
    icon: iconLogo,
  },

  contact: {
    phone: "(610) 673-0769",
    phoneLink: "tel:+16106730769",

    email: "info@example.com",
    emailLink: "mailto:info@example.com",
  },

  location: {
    city: "Chester",
    state: "PA",
    zip: "19013",

    serviceRadius: "30 Miles",
  },

  hours: [
    { day: "Monday", hours: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
    { day: "Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],

  payments: ["Cash"],

  social: {
    google: "https://goo.gl/maps/mUDphtKYTjKUUurT8",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

export default company;
