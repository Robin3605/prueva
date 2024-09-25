import {
    mobile,
    backend,
    creator,
    web,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "MBA in Business Administration and Management",
      company_name: "Business School of Barcelona ENEB",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "I completed an MBA in Business Administration and Management, along with a Master's in Logistics and Supply Chain Management at the Business School of Barcelona. This comprehensive program equipped me with advanced skills in strategic decision-making, operational efficiency, and supply chain optimization. The curriculum emphasized real-world applications, allowing me to develop a deep understanding of business dynamics in a global context.",
      ],
    },
    {
      title: "European Master's in Executive Management",
      company_name: "IEAD - European Institute of High Management",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "At the IEAD, I pursued a European Master's in Executive Management. This program focused on enhancing leadership capabilities and strategic thinking necessary for high-level management roles. The coursework included modules on international business, organizational behavior, and change management, providing me with the tools to lead effectively in complex business environments.",
      ],
    },
    {
      title: "Full Stack Developer career program ",
      company_name: "Coderhouse",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "I completed a Full Stack Developer career program at Coderhouse. This intensive course covered both front-end and back-end development technologies, including HTML, CSS, JavaScript, and various frameworks. I gained practical experience in building dynamic web applications and learned best practices in software development, preparing me for a successful career in tech.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "FreeCodeCamp",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "I undertook a Full Stack Developer course at FreeCodeCamp, where I learned the fundamentals of web development. This self-paced program provided hands-on experience with JavaScript, React, Node.js, and other essential technologies. Through various projects, I developed my coding skills and built a portfolio that showcases my ability to create functional and responsive web applications",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://main--corporativa.netlify.app/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Robin3605/galeria",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://portfolio-r-nu.vercel.app/",
    },
  ];
  
  export  {services,  experiences, testimonials, projects} ;