import horizontalLogo from "../assets/logos/horizontal-logo.webp";
import logo from "../assets/logos/logo.webp";
import iconLogo from "../assets/logos/icon-logo.webp";

const company = {
  name: "All Construction Services LLC",

  shortName: "ACS",

  tagline: "Asbestos Removal and General Contracting",

  phone: "(610) 673-0769",

  phoneLink: "tel:+16106730769",

  email: "placeholder@example.com",

  emailLink: "mailto:placeholder@example.com",

  address: {
    city: "Chester",
    state: "PA",
    zip: "19013",
  },

  serviceRadius: "30 Mile Radius",

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
    facebook: "",
    instagram: "",
    linkedin: "",
    google: "https://goo.gl/maps/mUDphtKYTjKUUurT8",
  },

  logos: {
    horizontal: horizontalLogo,
    primary: logo,
    icon: iconLogo,
  },
};

export default company;
