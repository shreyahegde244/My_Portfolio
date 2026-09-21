export const portfolioData = {
  personal: {
    name: "Shreya Hegde",
    role: "Product Designer & AI Experience Designer",
    tagline: "Designing experiences where people and AI work better together.",
    status: "Open to opportunities",
    location: "Bengaluru, India",
    email: "shreyahegde244@gmail.com",
    phone: "+91 (Available on Request)",
    bio: "I design intuitive interfaces and conversational AI experiences that simplify complex workflows and drive measurable business impact.",
    socials: {
      linkedin: "https://www.linkedin.com/in/shreyahegde01",
      behance: "https://www.behance.net/shreyahegde3",
      naukri: "https://www.naukri.com/mnjuser/profile",
      instagram: "https://www.instagram.com/artfulwaves__/",
      youtube: "https://www.youtube.com/@Artfulwaves001",
      email: "mailto:shreyahegde244@gmail.com"
    }
  },
  
  strengths: [
    { title: "Product Thinking", desc: "User needs + business goals into meaningful solutions" },
    { title: "UI/UX Design", desc: "Intuitive, accessible & engaging digital experiences" },
    { title: "AI Experiences", desc: "Conversational UX & AI-powered workflows" },
    { title: "Design Systems", desc: "Consistent, reusable & scalable components" },
    { title: "Prototyping", desc: "Rapid concepts, interactions & user flows" },
    { title: "Visual Design", desc: "Typography, layout & visual storytelling" }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Fine Art (BFA)",
      institution: "Government College of Fine Art, Dharwad, Karnataka",
      duration: "2020 — 2024",
      skills: ["Visual Composition", "Colour Theory", "Illustration", "Visual Communication"]
    },
    {
      id: 2,
      degree: "UI/UX Design Course",
      institution: "Bridge UX Design Studio, Bengaluru",
      duration: "2024",
      skills: ["User-Centered Design", "Wireframing", "Prototyping", "Interaction Design"]
    }
  ],

  experience: [
    {
      id: 1,
      role: "Product / UI/UX Designer",
      company: "InferWorks",
      type: "Full-Time",
      duration: "2025 — 2026",
      description: "Designing AI-powered conversational experiences, website revamps, and scalable design systems.",
      contributions: [
        "Designed AI-powered conversational experiences and intuitive chatbot workflows.",
        "Worked on website revamps, improving usability, responsive behavior, and visual hierarchy.",
        "Built reusable UI components and interactive prototypes for digital products.",
        "Collaborated with stakeholders to translate requirements into user-focused design solutions."
      ],
      skills: ["Figma", "AI UX", "Prototyping", "Design Systems", "UI/UX"]
    },
    {
      id: 2,
      role: "UI/UX Design Intern",
      company: "Bridge UX Design Studio",
      type: "Internship",
      duration: "2024",
      description: "Designed responsive website interfaces, marketing collateral, and wireframes for multiple client projects.",
      contributions: [
        "Designed responsive website interfaces and contributed to multiple client projects.",
        "Created email templates, marketing creatives, and logo/brand assets.",
        "Developed wireframes and high-fidelity UI designs based on project requirements.",
        "Collaborated with the design team to deliver consistent and engaging digital experiences."
      ],
      skills: ["Figma", "Wireframing", "UI Design", "Adobe Suite", "Canva", "Miro"]
    }
  ],

  tools: {
    design: [
      "Figma",
      "FigJam",
      "Figma Make",
      "Adobe Illustrator",
      "Design.com",
      "Canva"
    ],
    prototyping: [
      "Framer",
      "Lovable",
      "Miro",
      "HTML / CSS",
      "Figma Prototyping"
    ],
    ai: [
      "ChatGPT",
      "Claude",
      "AI Prototyping",
      "Conversational UX",
      "AI-Assisted Design",
      "Prompt Engineering",
      "Generative AI"
    ]
  },

  projects: [
    {
      id: 1,
      number: "01",
      category: "AI Experience",
      filterCategory: "ai",
      title: "Conversational AI Chatbot",
      tagline: "Context-aware conversational assistant with verifiable source citations.",
      role: "Lead UI/UX Designer",
      duration: "",
      tools: ["Antigravity", "Opencode", "Lovable", "Prompt UX"],
      hideCaseStudy: true,
      image: "/pai-mitra.png",
      overview: "An enterprise conversational assistant simplifying multi-source knowledge retrieval with verifiable inline citations.",
      problem: "Users faced cognitive overload searching fragmented enterprise documentation (>15 min queries).",
      objective: "Design a natural, trustworthy conversational interface with instant citations and smart fallbacks.",
      process: [
        "Stakeholder discovery & conversational branching maps",
        "Multi-modal response states (citations, tables, fallbacks)",
        "Interactive high-fidelity prototyping and usability testing"
      ],
      decisions: [
        {
          title: "Inline Source Verification",
          detail: "Document snippets and confidence ratings build immediate algorithmic trust."
        },
        {
          title: "Predictive Next Actions",
          detail: "Smart suggestion chips reduce typing effort by 60%."
        }
      ],
      outcome: "68% faster query resolution and 92% user satisfaction score during enterprise pilot.",
      screens: [
        { name: "Query & Multi-modal Output", desc: "Structured response with side citation drawer" },
        { name: "Context Suggestions", desc: "Adaptive prompt chips guiding complex inquiries" }
      ]
    },
    {
      id: 2,
      number: "02",
      category: "AI Experience",
      filterCategory: "ai",
      title: "Party Booking Chatbot",
      tagline: "Conversational booking concierge with real-time tier calculation.",
      role: "Product Designer",
      duration: "3 Months",
      tools: ["Figma", "Figma Make", "Lovable"],
      image: "/party-booking.png",
      overview: "A conversational booking engine replacing multi-step forms with dynamic, interactive package builders.",
      problem: "Traditional 14-step booking forms had an 82% abandonment rate.",
      objective: "Create a guided chat concierge that provides instant pricing and one-tap reservation holds.",
      process: [
        "Booking friction point analysis & conversation scriptwriting",
        "In-chat widget prototyping for sliders and date selectors",
        "A/B testing conversational flow against traditional forms"
      ],
      decisions: [
        {
          title: "In-Chat Dynamic Builder",
          detail: "Interactive guest and catering selector directly within message stream."
        }
      ],
      outcome: "+44% booking completion rate and 35% decrease in customer inquiries.",
      screens: [
        { name: "Venue Discovery", desc: "Instant filtering by party size and budget" },
        { name: "Package Builder", desc: "Live bill breakdown updating directly inside chat" }
      ]
    },
    {
      id: 3,
      number: "03",
      category: "Web Design",
      filterCategory: "web",
      title: "Sagar World Website Revamp",
      tagline: "Modernizing a legacy cultural media archive into a clean streaming portal.",
      role: "Lead UI/UX Designer",
      duration: "3.5 Months",
      tools: ["Figjam", "Figma", "Antigravity", "Opencode", "Lovable"],
      image: "/sagar-world.png",
      overview: "Comprehensive digital revamp of Sagar World's heritage media portal with responsive video archives.",
      problem: "Outdated navigation and poor mobile performance hindered media discoverability.",
      objective: "Deliver a clean, editorial layout optimized for media discovery and seamless playback.",
      process: [
        "Information architecture restructuring of 200+ media assets",
        "Atomic design system development with typography tokens",
        "Responsive desktop and mobile UI implementation"
      ],
      decisions: [
        {
          title: "Editorial Showcase Grid",
          detail: "Large typography and generous whitespace emphasizing rich visual assets."
        }
      ],
      outcome: "+85% session duration and bounce rate reduced from 64% to 28%.",
      screens: [
        { name: "Archive Showcase", desc: "Typography-led catalog with synopsis modal" },
        { name: "Mobile Portal", desc: "Fast-loading touch interface for streaming" }
      ]
    },
    {
      id: 4,
      number: "04",
      category: "Web Design",
      filterCategory: "web",
      title: "Website and OS platforms",
      tagline: "Conversion-focused landing pages and web apps for high-growth SaaS.",
      role: "Product Designer",
      duration: "Ongoing",
      tools: ["Figma", "FigJam", "Miro"],
      image: "/website-os-platforms.png",
      overview: "Strategic website redesigns prioritizing value clarity, typography hierarchy, and conversion rate optimization.",
      problem: "Cluttered interfaces and ambiguous value propositions led to low demo conversions.",
      objective: "Restructure above-the-fold layouts and scannability for fast recruiter/customer conversion.",
      process: [
        "Heuristic evaluations and visual hierarchy audits",
        "Modular component system creation in Figma",
        "Responsive prototyping and developer handoff"
      ],
      decisions: [
        {
          title: "Above-the-Fold Clarity",
          detail: "Crisp 5-second value proposition with high-contrast primary CTA."
        }
      ],
      outcome: "Average +38% increase in demo signups across revamped platforms.",
      screens: [
        { name: "SaaS Landing Page", desc: "Hero section with interactive product teaser" },
        { name: "Feature Matrix", desc: "Scannable transparent comparison grid" }
      ]
    },
    {
      id: 5,
      number: "05",
      category: "Marketing",
      filterCategory: "brand",
      title: "Email Templates & Brand Guidelines",
      tagline: "Modular, high-converting email framework and product launch assets.",
      role: "Visual Designer",
      duration: "2 Months",
      tools: ["Photoshop", "Canva"],
      image: "/email-brand-guidelines.png",
      overview: "A 12-component responsive email framework ensuring brand consistency and high readability across all devices.",
      problem: "Inconsistent visual branding and low email click-through rates.",
      objective: "Design a clean, single-column modular email system with clear visual CTAs.",
      process: [
        "Email metrics audit and click map review",
        "12-module responsive component library design",
        "Multi-client rendering testing (Apple Mail, Gmail)"
      ],
      decisions: [
        {
          title: "Single-Column Hierarchy",
          detail: "Large touch targets and crisp typography optimized for mobile reading."
        }
      ],
      outcome: "+42% lift in Click-Through Rate (CTR) across product onboarding series.",
      screens: [
        { name: "Product Launch", desc: "Hero-led email with mockup preview" },
        { name: "Onboarding Checklist", desc: "Scannable progressive account setup cards" }
      ]
    },
    {
      id: 6,
      number: "06",
      hidden: true,
      category: "Brand & Identity",
      filterCategory: "brand",
      title: "Logo & Visual Identity",
      tagline: "Distinctive brand marks, typography guidelines, and design tokens.",
      role: "Brand Designer",
      duration: "2.5 Months",
      tools: ["Illustrator"],
      overview: "Enduring identity systems and vector marks engineered on strict geometric grids for tech ventures.",
      problem: "Startups lacked cohesive visual systems across digital touchpoints.",
      objective: "Craft a scalable brand identity that communicates intelligence and clarity.",
      process: [
        "Brand discovery workshops and positioning matrix",
        "Vector mark exploration on precision pixel grids",
        "Digital brand guidelines kit development"
      ],
      decisions: [
        {
          title: "Geometric Precision",
          detail: "Scalable vector marks maintaining clarity down to 16px favicons."
        }
      ],
      outcome: "Comprehensive 40-page brand guidelines kit delivered and implemented.",
      screens: [
        { name: "Grid Construction", desc: "Geometric ratio and vector construct rules" },
        { name: "Digital Touchpoints", desc: "App icons, identity tokens, and collateral" }
      ]
    }
  ],

  designProcess: [
    { step: "01", title: "Understand", desc: "User empathy & discovery" },
    { step: "02", title: "Define", desc: "Scoping & user flows" },
    { step: "03", title: "Explore", desc: "Wireframes & branching" },
    { step: "04", title: "Design", desc: "UI systems & tokens" },
    { step: "05", title: "Prototype", desc: "Interactive testing" },
    { step: "06", title: "Refine", desc: "Handoff & launch KPIs" }
  ]
};
