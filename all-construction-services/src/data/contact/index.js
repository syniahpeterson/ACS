import company from "../../data/company";
import services from "../../data/services";

const contactPage = {
  hero: {
    eyebrow: "Contact Us",

    title: "Let's Discuss Your Project",

    description:
      "Whether you need asbestos testing, demolition, mold remediation, lead abatement, or another environmental service, we're here to help. Contact us today to request your free estimate.",
  },

  info: [
    {
      title: "Phone",

      value: company.contact.phone,

      href: company.contact.phoneLink,
    },

    {
      title: "Email",

      value: company.contact.email,

      href: company.contact.emailLink,
    },

    {
      title: "Location",

      value: `${company.location.city}, ${company.location.state}`,

      href: null,
    },

    {
      title: "Business Hours",

      value: "Monday – Friday\n8:00 AM – 5:00 PM",

      href: null,
    },
  ],

  form: {
    title: "Request a Free Estimate",

    description:
      "Complete the form below and we'll get back to you as soon as possible.",

    submitText: "Request Free Estimate",

    fields: [
      {
        id: "name",
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "John Smith",
        required: true,
        autoComplete: "name",
      },

      {
        id: "phone",
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "(555) 555-5555",
        required: true,
        autoComplete: "tel",
      },

      {
        id: "email",
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "you@example.com",
        required: true,
        autoComplete: "email",
      },

      {
        id: "service",
        name: "service",
        label: "Service Needed",
        type: "select",
        placeholder: "Select a service",

        options: [
          ...services.map((service) => ({
            value: service.slug,
            label: service.title,
          })),
          {
            value: "other",
            label: "Other",
          },
        ],
      },

      {
        id: "message",
        name: "message",
        label: "Project Details",
        type: "textarea",
        placeholder: "Tell us about your project...",
        rows: 6,
        required: true,
      },
    ],
  },

  serviceArea: {
    title: "Proudly Serving",

    description:
      "Residential, commercial, industrial, and government clients throughout Chester, Pennsylvania and the surrounding communities.",
  },

  cta: {
    eyebrow: "Need Immediate Assistance?",

    title: "We're Ready to Help",

    description:
      "Call us today or submit your request online and we'll help you determine the best solution for your project.",

    primaryButton: {
      text: "Call Now",

      link: company.contact.phoneLink,
    },

    secondaryButton: {
      text: "Our Services",

      link: "/services",
    },
  },
};

export default contactPage;
