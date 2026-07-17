const services = [
  {
    id: 1,
    slug: "asbestos-testing",
    title: "Asbestos Testing",
    shortDescription:
      "Professional asbestos testing for residential and commercial properties.",

    description: [
      "Asbestos testing is the first step in identifying potentially hazardous materials before renovation, demolition, or property improvements. Our team collects representative samples and coordinates laboratory analysis to determine whether asbestos-containing materials are present.",

      "After testing is complete, we provide clear results and explain the next steps if asbestos is found. Whether you are a homeowner, business owner, contractor, or property manager, our testing services help you make informed decisions while maintaining compliance with applicable regulations and protecting the health of everyone on the property.",
    ],

    featured: true,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 2,
    slug: "air-monitoring",
    title: "Air Monitoring",
    shortDescription:
      "Air quality monitoring before, during, and after abatement projects.",

    description: [
      "Air monitoring helps verify that airborne contaminants remain at safe levels throughout environmental remediation projects. We perform monitoring before work begins, during active removal, and after completion to help confirm that containment measures are performing as intended.",

      "By carefully monitoring air quality throughout the project, we help property owners, contractors, and occupants gain confidence that work is being completed safely and according to established environmental standards.",
    ],

    featured: true,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 3,
    slug: "asbestos-abatement",
    title: "Asbestos Abatement",
    shortDescription:
      "Safe asbestos removal performed according to industry regulations.",

    description: [
      "Asbestos abatement requires careful planning, proper containment, and safe removal techniques to minimize exposure. Our team follows established procedures for isolating affected areas, removing asbestos-containing materials, and disposing of waste in accordance with applicable regulations.",

      "Every abatement project is completed with safety as the highest priority. We work efficiently while maintaining strict environmental controls to help protect occupants, neighboring areas, and the surrounding environment throughout the removal process.",
    ],

    featured: true,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 4,
    slug: "demolition",
    title: "Demolition",
    shortDescription:
      "Interior and full demolition services for residential and commercial projects.",

    description: [
      "We provide interior, selective, and full demolition services for residential, commercial, industrial, and government projects. Every demolition project begins with careful planning to ensure structures are removed safely while protecting surrounding property and utilities.",

      "From removing individual rooms to preparing an entire structure for redevelopment, our experienced team completes demolition efficiently while maintaining a clean, organized job site and following all applicable safety requirements.",
    ],

    featured: true,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 5,
    slug: "waste-disposal",
    title: "Waste Disposal",
    shortDescription:
      "Proper disposal of hazardous and construction-related materials.",

    description: [
      "Proper waste disposal is an important part of every environmental remediation and demolition project. We handle the collection, transportation, and disposal of approved materials using responsible practices that help meet environmental requirements.",

      "Our goal is to leave every project site clean, organized, and ready for the next phase of work while helping clients navigate proper disposal procedures for construction debris and regulated materials.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },
  {
    id: 6,
    slug: "lead-abatement",
    title: "Lead Abatement",
    shortDescription:
      "Professional lead removal services that prioritize safety and compliance.",

    description: [
      "Lead-based paint and other lead-containing materials can present serious health risks when they are disturbed during renovation, demolition, or maintenance work. Our lead abatement services focus on identifying hazardous materials and safely removing or stabilizing them using established industry procedures.",

      "Every project is completed with careful containment, proper cleanup, and responsible disposal practices. We work to minimize disruption while helping homeowners, businesses, schools, and commercial facilities maintain safer environments for occupants and workers.",
    ],

    featured: true,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 7,
    slug: "lead-testing",
    title: "Lead Testing",
    shortDescription:
      "Testing services to identify lead hazards before renovation or demolition.",

    description: [
      "Lead testing helps determine whether lead-containing materials are present before construction, renovation, or demolition begins. Early identification allows projects to move forward with the appropriate safety measures while reducing unnecessary delays.",

      "Our team performs thorough inspections and testing to help property owners understand potential hazards and determine the safest course of action. Clear reporting and professional guidance make it easier to plan the next steps with confidence.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 8,
    slug: "mold-removal",
    title: "Mold Removal",
    shortDescription:
      "Complete mold remediation for healthier indoor environments.",

    description: [
      "Mold growth can damage building materials and negatively impact indoor air quality if left untreated. Our mold remediation services focus on identifying affected areas, safely removing contaminated materials when necessary, and helping eliminate the conditions that allow mold to spread.",

      "Every remediation project is approached with attention to containment, cleanliness, and long-term prevention. Our goal is to restore a healthier environment while minimizing disruption to your home or business.",
    ],

    featured: true,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 9,
    slug: "power-washing",
    title: "Power Washing",
    shortDescription:
      "Exterior cleaning services for residential and commercial properties.",

    description: [
      "Power washing is an effective way to remove dirt, mildew, algae, stains, and surface contaminants from exterior building materials. Our services help improve the appearance of homes, commercial buildings, sidewalks, driveways, and other outdoor surfaces.",

      "Using professional equipment and appropriate cleaning methods, we restore curb appeal while helping prepare surfaces for painting, repairs, or routine maintenance. Every project is completed carefully to protect surrounding landscaping and property.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 10,
    slug: "concrete-prep-shot-blasting",
    title: "Concrete Prep & Shot Blasting",
    shortDescription:
      "Concrete surface preparation and shot blasting services.",

    description: [
      "Proper concrete surface preparation is essential before applying coatings, flooring systems, sealants, or other surface treatments. Our shot blasting services remove contaminants, coatings, and surface imperfections while creating the appropriate profile for strong adhesion.",

      "Whether preparing industrial floors, commercial facilities, or other concrete surfaces, we use proven equipment and techniques to produce consistent results that help improve the performance and longevity of finished flooring systems.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },
  {
    id: 11,
    slug: "junk-removal",
    title: "Junk Removal",
    shortDescription:
      "Removal of unwanted debris, materials, and general property cleanouts.",

    description: [
      "Our junk removal services help homeowners, businesses, landlords, and contractors quickly remove unwanted materials, debris, furniture, appliances, and general clutter. Whether you're preparing for renovations, moving, or simply reclaiming usable space, we provide dependable cleanup services tailored to your needs.",

      "We handle the heavy lifting, loading, and responsible disposal of approved materials while leaving your property clean and ready for its next use. Our goal is to make the cleanup process efficient, organized, and hassle-free from start to finish.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 12,
    slug: "biological-cleanup",
    title: "Biological Cleanup",
    shortDescription:
      "Professional cleanup of biohazard and contaminated environments.",

    description: [
      "Biological cleanup requires specialized procedures to safely remove contaminated materials while protecting occupants and workers. Our team follows established safety protocols and uses proper protective equipment throughout every stage of the cleanup process.",

      "Whether addressing accident scenes, hazardous contamination, or other situations requiring professional remediation, we work carefully and respectfully to restore the affected area while maintaining strict safety and sanitation standards.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 13,
    slug: "site-clearing",
    title: "Site Clearing",
    shortDescription:
      "Preparing residential and commercial sites for future development.",

    description: [
      "Site clearing prepares residential, commercial, and industrial properties for new construction, demolition, landscaping, or redevelopment projects. Our services include removing debris, unwanted structures, vegetation, and other obstacles that may interfere with future work.",

      "Every project is completed with careful planning and attention to safety to ensure the site is left clean, organized, and ready for the next phase of development.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 14,
    slug: "oil-tank-removal",
    title: "Oil Tank Removal",
    shortDescription: "Safe above-ground oil tank removal services.",

    description: [
      "Unused or aging oil tanks can create environmental concerns and complicate property improvements. Our oil tank removal services focus on safely disconnecting, removing, and disposing of above-ground tanks while following appropriate environmental procedures.",

      "We complete each removal carefully to help protect surrounding property and provide homeowners and businesses with peace of mind as they move forward with renovations, property sales, or other improvements.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },

  {
    id: 15,
    slug: "basement-cleanouts",
    title: "Basement Cleanouts",
    shortDescription:
      "Complete basement cleanout services for homes and businesses.",

    description: [
      "Basements often accumulate unwanted furniture, storage items, construction debris, and other materials over time. Our cleanout services help property owners reclaim valuable space while removing unwanted items quickly and efficiently.",

      "Whether you're preparing for renovations, selling a property, or simply organizing your space, our team handles the cleanup with professionalism and care while ensuring approved materials are removed and disposed of responsibly.",
    ],

    featured: false,
    image: "/images/placeholder-service.webp",
  },
];

export default services;
