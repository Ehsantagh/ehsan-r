export const worksData = [
  {
    id: 1,
    backgroundColor: '#FCEFD9',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Project One - UX/UI Design',
    timeline: '2024',
    team: '3 Designers',
    role: 'Lead UX',
    heroImage: '/images/project-1/1-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Discovery Phase',
        subtitle: 'Understanding User Needs',
        body: 'We started by conducting extensive user research to understand the pain points and needs of our target audience. Through interviews and surveys, we identified key areas for improvement.',
        image: '/images/project-1/section-1.webp',
        caption: 'add caption',
      },
      {
        id: 2,
        title: 'Design System',
        subtitle: 'Creating Consistency',
        body: 'We developed a comprehensive design system that ensures consistency across all touchpoints. This includes color palettes, typography, and component libraries.',
        image: '/images/project-1/section-2.webp',
        caption: 'add caption',
      },
      {
        id: 3,
        title: 'Implementation',
        subtitle: 'Bringing Design to Life',
        body: 'Our team worked closely with developers to ensure the design vision was accurately implemented. We conducted regular QA sessions to maintain quality.',
        image: '/images/project-1/section-3.webp',
        caption: 'add caption',
      },
    ],
    summary: [
      {
        title: 'Project Goals',
        body: 'The primary goal was to create a comprehensive UX/UI design system that improves user experience, maintains consistency, and enables scalable design practices across all digital touchpoints.'
      },
      {
        title: 'Key Challenges',
        body: [
          {
            type: 'list',
            items: [
              'Understanding diverse user pain points and needs through research',
              'Creating a design system that works across multiple products',
              'Ensuring consistency while maintaining design flexibility',
              'Implementing designs without compromising the original vision'
            ]
          }
        ]
      },
      {
        title: 'Design Process',
        body: [
          {
            type: 'list',
            items: [
              'Conducted extensive user interviews and surveys',
              'Performed competitive analysis and market research',
              'Developed design system with typography and color guidelines',
              'Created comprehensive component libraries and documentation'
            ]
          }
        ]
      },
      {
        title: 'Results & Success Metrics',
        body: 'The design system has improved design production speed, reduced inconsistencies across products, and received positive feedback from stakeholders and end users.'
      }
    ],
    methodology: [
      {
        title: 'User Research & Discovery',
        body: 'We conducted extensive interviews, surveys, and usability testing to understand user needs, pain points, and behaviors. This foundation ensured all design decisions were grounded in real user insights.'
      },
      {
        title: 'Design System Development',
        body: [
          {
            type: 'list',
            items: [
              'Defined core design principles and values',
              'Established typography hierarchy and color palette',
              'Created reusable component library',
              'Documented all design patterns and usage guidelines'
            ]
          }
        ]
      },
      {
        title: 'Component Creation & Documentation',
        body: [
          {
            type: 'list',
            items: [
              'Built accessible UI components with best practices',
              'Created detailed documentation for each component',
              'Established guidelines for component variations',
              'Set up design handoff process for developers'
            ]
          }
        ]
      },
      {
        title: 'Testing & Refinement',
        body: 'The design system was tested with real users and refined based on feedback. Regular QA sessions ensured quality and usability standards were met.'
      }
    ],
    category: 'UX/UI',
  },
  {
    id: 2,
    backgroundColor: '#FCEFD9',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Calypso User Account — Designing Ownership, Continuity, and Trust',
    timeline: '2024',
    team: '2 Designers',
    role: 'Brand Director',
    heroImage: '/images/project-2/2-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Information architecture',
        subtitle: 'Defining the Brand Identity',
        body: [
          {
            type: 'paragraph',
            content: 'The information architecture was designed around user intent rather than internal system structure. We started by identifying the primary reasons users would access their account—checking orders, managing personal details, and saving products—then grouped features accordingly. This helped ensure that high-frequency actions were immediately visible, while lower-frequency settings remained accessible without cluttering the interface.'
          },
          {
            type: 'paragraph',
            content: 'The account experience was structured into a small number of clearly defined areas:'
          },
          {
            type: 'list',
            items: [
              'Dashboard as an overview and entry point',
              'Orders for status tracking and history',
              'Wishlist for saved products',
              'Account Settings for personal details, preferences, and security'
            ]
          }
        ],
        image: '/images/project-2/2-7.webp',
        caption: 'This hierarchy minimised depth, reduced navigation complexity, and supported scalability for future features without requiring structural changes.',
      },
      {
        id: 2,
        title: 'Core Flows: Sign Up, Sign In, Dashboard & Account Settings',
        subtitle: '',
        body: [{
            type: 'list',
            items: [
              'Sign Up / Sign In',
              'Streamlined flows with progressive disclosure and minimal required input',
              'User Dashboard',
              'A clear overview of recent orders, saved items, and quick actions',
              'Account Settings',
              'Simple, editable sections for personal details, preferences, and security'
            ]
          }
        ],
        image: '/images/project-2/2-9.webp',
        caption: 'The dashboard was intentionally designed as a utility space, not a marketing surface.',
      },
      {
        id: 3,
        title: 'User account settings',
        subtitle: '',
        body: [
          {
            type: 'paragraph',
            content: 'The Account Settings area was designed as a clear, modular space for managing sensitive and low-frequency actions.'
          },
          {
            type: 'list',
            items: [
              'Settings are grouped by intent: Account Details, Password & Security, Delivery Addresses, Saved Cards, Communication Preferences, and Account Deletion',
              'This structure reduces cognitive load and helps users find actions quickly',
              'High-risk actions (e.g. password change, delete account) are visually separated and require confirmation',
            ]
          }
        ],
        images: [
          {
            src: ['/images/project-2/2-5.webp', '/images/project-2/2-6.webp'],
            caption: 'Overall, the layout balances usability, security, and future scalability.',
          },
          {
            src: ['/images/project-2/2-4.webp'],
            caption: 'Navigation from the dashboard to settings was kept clear and consistent, allowing users to move between overview and detailed controls without losing context.',
          }
        ],
      },
      {
        id: 4,
        title: 'Macro & Micro Interactions and Feedback',
        subtitle: '',
        body: 'We created detailed brand guidelines to ensure all stakeholders follow consistent branding practices.',
        image: '/images/project-2/2-8.webp',
        caption: 'These interactions were designed to reinforce clarity, control, and reassurance—especially during sensitive moments like payments or order updates.',
        images: [
          {
            src: ['/images/project-2/2-3.webp'],
            caption: 'Micro-interactions and feedback in settings, such as inline validation and success states, were used to build confidence and clearly communicate system status.',
          },
        ],    
    },
            {
        id: 5,
        title: 'Managing Orders & Wishlist',
        subtitle: '',
        body: [{
            type: 'list',
            items: [
              'Order Management',
              'Clear order history, status tracking, and access to support when needed',
              'Wishlist',
              'A lightweight way to save products, encouraging return visits without pressure',
            ]
          },{
            type: 'paragraph',
            content: 'The wishlist also acted as a low-intent signal, balancing user benefit with future personalization potential.'
          },
        ],
        image: '',
        caption: '',
      },
      {
        id: 6,
        title: 'Using the Calypso Character',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'To soften transactional moments and create a more human experience, we introduced the Calypso character as a subtle narrative guide. The character appears in:'
          },
          {
            type: 'list',
            items: [
              'Onboarding and welcome states',
              'Empty states and confirmations',
              'Friendly system feedback and reminders',
            ]
          },
        ],
        image: '/images/project-2/2-2.webp',
        caption: 'Rather than acting as a mascot, the character functions as a tone-setter, helping communication feel supportive rather than mechanical.',
      },
      {
        id: 7,
        title: 'Outcomes & Impact',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Increased repeat user engagement',
              'Reduced customer support inquiries related to order status',
              'Higher account creation rate after purchase',
              'Positive qualitative feedback around clarity and trust',
            ]
          },
        ],
        image: '',
        caption: '',
      },
    ],
    summary: [
      {
        title: 'Project summary',
        body: 'As Calypso grew, the limitations of a guest-only experience became increasingly visible. Returning users had no way to track orders, save preferences, or build continuity with the brand. At this stage of the business, not having a user account was no longer a simplification—it was a friction. The project was initiated to support repeat behavior, customer trust, and operational scalability.'
      },
      {
        title: 'Purpose',
        body: [
          {
            type: 'list',
            items: [
              'Enable users to manage orders and personal information',
              'Support repeat purchases and long-term engagement',
              'Create a sense of ownership and continuity',
              'Establish a foundation for future personalisation'
            ]
          }
        ]
      },
      {
        title: 'Design Guidelines',
        body: [
          {
            type: 'list',
            items: [
              'Low-friction entry (fast sign-up, minimal fields)',
              'Clear value exchange for creating an account',
              'Familiar patterns over experimental UI',
              'Consistent tone across transactional and emotional moments',
              'Privacy-first and transparent data usage'
            ]
          }
        ]
      },
      {
        title: 'Constraint',
        body: 'The system had to integrate with existing e-commerce and fulfilment tools, limiting how much backend logic could be redesigned.'
      }
    ],
    methodology: [
      {
        title: 'Approach',
        body: 'Lifecycle-focused product design emphasising trust and continuity.'
      },
      {
        title: 'Process',
        body: [
          {
            type: 'list',
            items: [
              'Mapped user journeys before and after account creation',
              'Defined core account value propositions',
              'Designed low-friction authentication flows',
              'Integrated emotional design elements into transactional states'
            ]
          }
        ]
      },
      {
        title: 'Tools & Methods',
        body: [
          {
            type: 'list',
            items: [
              'Journey mapping',
              'UX writing for system states',
              'Interaction design patterns',
              'Usability testing of critical flows'
            ]
          }
        ]
      },
      {
        title: 'Key Consideration',
        body: 'Reducing perceived effort while increasing long-term value.'
      }
    ],
    category: 'Visual',
  },
  {
    id: 3,
    backgroundColor: '#FCEFD9',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Product finder: Guiding Every Customer to Their Ideal Sun Care',
    timeline: '2024',
    team: '2 Developers',
    role: 'Lead Frontend Developer',
    heroImage: '/images/project-3/3-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Question Types',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The Product Finder uses a mix of question types to balance speed, accuracy, and user comfort:'
          },
          {
            type: 'list',
            items: [
              'Single-choice questions, for decisive inputs (e.g. primary use case, budget range)',
              'Multiple-choice questions when users may have more than one preference or constraint',
              'Conditional follow-up questions, shown only when relevant, keeping the flow short and personalised',
            ]
          },
        ],
        image: '/images/project-3/3-5.webp',
        caption: 'Each question was mapped directly to product attributes to ensure meaningful outcomes.',
      },
      {
        id: 2,
        title: 'Output for Users',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'After completing the quiz, users receive their results in two ways:'
          },
          {
            type: 'list',
            items: [
              'Immediate on-screen results',
              'Showing the recommended product(s), key reasons for the match, and next steps',
              'Email follow-up (optional)',
              'A summary of their results, including product details and comparison points, allowing users to revisit their decision later',
            ]
          },
        ],
        image: '/images/project-3/3-6.webp',
        caption: 'This dual output supports both instant decision-makers and users who prefer time to consider.',
      },
      {
        id: 3,
        title: 'Placement of the Product Finder links',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'To maximize discoverability and relevance, the Product Finder was accessible from multiple touchpoints:'
          },
          {
            type: 'list',
            items: [
              'Homepage hero section (primary CTA)',
              'Product listing pages (as an alternative to filtering)',
              'Navigation menu (persistent access)',
              'Contextual banners on content pages',
            ]
          },
        ],
        image: '/images/project-3/3-3.webp',
        caption: 'This ensured users could enter the experience whenever uncertainty appeared.',
      },
{
        id: 4,
        title: 'Why “Product Finder” as the Name?',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The name Product Finder was chosen because it is:'
          },
          {
            type: 'list',
            items: [
              'Immediately understandable',
              'Action-oriented and benefit-focused',
              'Free of marketing or technical language',
              'Familiar across industries and user groups',
            ]
          },
        ],
        image: '',
        caption: 'Rather than sounding like a “quiz” or “tool,” the name emphasises the outcome — helping users find the right product with confidence.',
      },
      {
        id: 5,
        title: 'Outcomes & Impact',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Improved product discovery experience',
              'Increased user engagement and confidence',
              'Reduced decision paralysis and abandonment',
              'Positive user feedback and satisfaction metrics'
            ]
          },
        ],
        image: '',
        caption: '',
      },
    ],
    summary: [
      {
        title: '',
        body: 'Users were overwhelmed by the number of available products and struggled to understand which option was right for them. Traditional category browsing and filtering required too much effort and product knowledge, leading to hesitation, drop-offs, and missed conversions. We identified an opportunity to replace passive browsing with an active, guided decision-making experience that reduces cognitive load and builds user confidence.'
      },
      {
        title: 'Purpose',
        body: [
          {
            type: 'list',
            items: [
              'Help users quickly identify the most suitable product',
              'Reduce decision fatigue and comparison anxiety',
              'Increase engagement and conversion through personalisation',
              'Collect meaningful preference data to improve recommendations'
            ]
          }
        ]
      },
      {
        title: 'Design Guidelines',
        body: [
          {
            type: 'list',
            items: [
              'Simple, conversational language (no technical jargon)',
              'One clear question per step to maintain focus',
              'Visual cues where possible to support faster decisions',
              'Progress feedback to set expectations',
              'Results that feel helpful, not sales-driven'
            ]
          }
        ]
      },
      {
        title: '',
        body: ''
      }
    ],
    methodology: [
      {
        title: 'Approach',
        body: 'User-centred, decision-support design focused on reducing cognitive load.'
      },
      {
        title: 'Process',
        body: [
          {
            type: 'list',
            items: [
              'Identified user uncertainty points through analytics and stakeholder input',
              'Mapped product attributes to user needs and decision criteria',
              'Designed progressive question flows with conditional logic',
              'Iterated on copy and question order to reduce friction'
            ]
          }
        ]
      },
      {
        title: 'Tools & Methods',
        body: [
          {
            type: 'list',
            items: [
              'User flow diagrams',
              'Decision trees',
              'Low-fidelity prototyping (Figma)',
              'Content-first UX writing'
            ]
          }
        ]
      },
      {
        title: 'Key Consideration',
        body: 'Balancing personalisation depth with speed of completion.'
      }
    ],
    category: 'Code',
  },
  {
    id: 4,
    backgroundColor: '#FCEFD9',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Calypso Brand Visual System — Designing a Scalable, Human-Centred Identity',
    timeline: '2024',
    team: '2 Designers',
    role: 'Lead Designer',
    heroImage: '/images/project-4/4-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Calypso Character',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The Calypso character acts as a brand companion, not a mascot.'
          },
          {
            type: 'list',
            items: [
              'Appears in guidance, onboarding, and friendly system moments',
              'Never used in hard-sell or promotional messaging',
              'Subtle, supportive, and sparing',
            ]
          },
        ],
        image: '/images/project-4/4-7.webp',
        caption: 'The character helps humanise interactions while preserving credibility and trust.',
      },
      {
        id: 2,
        title: 'Typography System',
        subtitle: '',
        body:[{
            type: 'paragraph',
            content: 'Web'
          },
          {
            type: 'list',
            items: [
              'Primary typeface optimised for readability and long-form content',
              'Clear hierarchy for headlines, subheadings, and body text',
              'Consistent line height and spacing to support scanning',
            ]
          },
          {
            type: 'paragraph',
            content: 'Canvas (Posters, Banners, Print)'
          },
          {
            type: 'list',
            items: [
              'Tighter headline tracking for impact',
              'Flexible layout grids for campaign variation',
              'Strong typographic rhythm across formats',
            ]
          },
        ],
        image: '/images/project-4/4-1.webp',
        caption: 'Typography was designed to balance editorial calm with commercial clarity.',
      },
      {
        id: 3,
        title: 'Product Presentation',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Guidelines define how products are visually treated across all surfaces:'
          },
          {
            type: 'list',
            items: [
              'Consistent product sizing and padding',
              'Neutral but warm shadow system',
              'Subtle texture layers to suggest material and care',
              'Clear rules for product sets and bundles',
            ]
          },
        ],
        image: '/images/project-4/4-3.webp',
        caption: 'This ensures products feel premium without visual noise.',
      },
      {
        id: 4,
        title: 'Banners & Posters',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Clear focal point per banner',
              'Limited number of messages per surface',
              'Strong hierarchy: message → product → action',
              'Consistent CTA placement and language',
            ]
          },
        ],
        image: '/images/project-4/4-2.webp',
        caption: 'Banners are designed to communicate quickly, even at a glance.',
      },
      {
        id: 5,
        title: 'Lifestyle Photography',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Focus:'
          },
          {
            type: 'list',
            items: [
              'Real moments of sun exposure and self-care',
              'Skin in natural conditions, not idealised perfection',
              'Contextual use of products, not staged poses',
            ]
          },
          {
            type: 'paragraph',
            content: 'Style:'
          },
          {
            type: 'list',
            items: [
              'Natural lighting, warm tones',
              'Diverse range of people, ages, and skin types',
              'Candid compositions over posed imagery',
            ]
          },
        ],
        image: '/images/project-4/4-4.webp',
        caption: 'Lifestyle imagery reinforces authenticity and relatability.',
      },
      {
        id: 6,
        title: 'Studio Photography & Renders',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Clean, minimal backgrounds',
              'Soft shadows and controlled highlights',
              'Accurate colour reproduction',
              'Designed for flexibility across layouts',
            ]
          },
        ],
        image: '/images/project-4/4-5.webp',
        caption: 'Studio assets provide clarity and consistency where lifestyle imagery cannot.',
      },
      {
        id: 7,
        title: 'Colour System',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Warm, sun-inspired primary palette',
              'Neutral base colours for balance and readability',
              'Accent colours used sparingly for emphasis and interaction states',
            ]
          },
        ],
        image: '/images/project-4/4-6.webp',
        caption: 'Colours were tested for accessibility and contrast across digital environments.',
      },
      {
        id: 8,
        title: 'Beach Theme & Atmosphere',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The beach serves as an emotional backdrop, not a literal setting.'
          },
          {
            type: 'list',
            items: [
              'Warm, lively, sun-washed atmosphere',
              'Suggests openness, movement, and care',
              'Present in light, texture, and colour—not clichés',
            ]
          },
        ],
        image: '/images/project-4/4-8.webp',
        caption: 'This theme connects Calypso\u2019s purpose with a feeling of ease and vitality.',
      },
      {
        id: 9,
        title: 'Messaging & Tone',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Intimate but professional',
              'Calm, supportive, and confident',
              'Avoids urgency or fear-based language',
              'Focused on care, routine, and long-term well-being',
            ]
          },
        ],
        image: '/images/project-4/4-9.webp',
        caption: 'The tone reinforces trust without sounding clinical or promotional.',
      },
      {
        id: 10,
        title: 'Outcomes & Impact',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Faster design production across teams',
              'Improved visual consistency across campaigns',
              'Easier onboarding for new designers and partners',
              'Stronger brand recognition and cohesion',
            ]
          },
        ],
        image: '',
        caption: '',
      },
    ],
    summary: [
      {
        title: 'Project summary',
        body: 'As Calypso grew, visual decisions were being made case by case. While the brand felt familiar, it lacked a shared system to scale consistently across new pages, campaigns, and formats. At this stage of growth, not having a unified visual system created friction, slowed production, and risked inconsistency. This project established a single source of truth for how Calypso looks, feels, and communicates.'
      },
      {
        title: 'Purpose',
        body: [
          {
            type: 'list',
            items: [
              'Ensure visual consistency across all touch-points',
              'Speed up design and content production',
              'Support new features and content formats',
              'Preserve brand warmth while increasing professionalism'
            ]
          }
        ]
      },
      {
        title: 'Design Guidelines',
        body: [
          {
            type: 'list',
            items: [
              'System over decoration',
              'Consistency without rigidity',
              'Digital-first, adaptable to print',
              'Accessibility-aware contrast and typography',
              'Designed to scale with content and teams',
            ]
          }
        ]
      },
      {
        title: 'Constraint',
        body: 'The system had to work with existing assets and photography, requiring evolution rather than a full visual reset.'
      }
    ],
    methodology: [
      {
        title: 'Approach',
        body: 'Systematic visual design with scalability across mediums.'
      },
      {
        title: 'Process',
        body: [
          {
            type: 'list',
            items: [
              'Audited existing visual assets and inconsistencies',
              'Defined core visual principles and constraints',
              'Created modular guidelines for digital and print',
              'Validated accessibility and contrast across contexts'
            ]
          }
        ]
      },
      {
        title: 'Tools & Methods',
        body: [
          {
            type: 'list',
            items: [
              'Visual audits',
              'Design tokens and style guidelines',
              'Typography and colour systems',
              'Cross-medium testing'
            ]
          }
        ]
      },
      {
        title: 'Key Consideration',
        body: 'Consistency without limiting creative flexibility.'
      }
    ],
    category: 'Industrial',
  },
  {
    id: 5,
    backgroundColor: '#FCEFD9',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Sunshine Spotlight: Real people, real sun care stories',
    timeline: '2024',
    team: '2 Designers, 2 Developers',
    role: 'UX Lead',
    heroImage: '/images/project-5/5-hero.webp',
    sections: [
      {
        id: 1,
        title: 'The Content',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Each story is told in the first-person POV, allowing contributors to speak in their own voice about:'
          },
          {
            type: 'list',
            items: [
              'Their relationship with the sun',
              'Daily sun care habits (or lack of them)',
              'Moments that changed how they think about skin care',
              'How sun care fits into their broader self-care routine',
              'Products they personally use, mentioned naturally and without scripting',
            ]
          },
        ],
        image: '/images/project-5/5-3.webp',
        caption: 'The goal was not to educate directly, but to let insights emerge through lived experience.',
      },
      {
        id: 2,
        title: 'The Layout',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The layout was inspired by editorial and news formats, reinforcing credibility and readability:'
          },
          {
            type: 'list',
            items: [
              'Headline — written in the contributor’s voice',
              'Highlight pull quotes — capturing key beliefs or habits',
              'Short sections — easy to scan, even on mobile',
              'Supporting imagery — candid, unstyled photography',
              'Subtle product references — visually separated from the narrative',
            ]
          },
        ],
        image: '/images/project-5/5-2.webp',
        caption: 'This structure allowed users to either read deeply or skim without losing the essence of the story.',
      },
      {
        id: 3,
        title: 'Placement on the Website',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Sunshine Spotlight was intentionally integrated across multiple touchpoints:'
          },
          {
            type: 'list',
            items: [
              'Dedicated section within the website',
              'Homepage feature (rotating weekly story)',
              'Social media channels driving back to the full story',
              'Contextual links to Product Finder for users seeking guidance after reading',
            ]
          },
        ],
        image: '/images/project-5/5-4.webp',
        caption: 'This created a content → curiosity → action flow, without forcing conversion.',
      },
      {
        id: 4,
        title: 'Why “Sunshine Spotlight” as the Name?',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The name Sunshine Spotlight reflects both the subject and the intent:'
          },
          {
            type: 'list',
            items: [
              'Sunshine connects emotionally to warmth, life, and exposure',
              'Spotlight shifts attention from products to people',
              'The name feels editorial, not commercial',
              'It signals storytelling rather than advice or advertising',
            ]
          },
        ],
        image: '/images/project-5/5-1.webp',
        caption: 'Together, the name frames sun care as a shared human experience, not a brand message.',
      },
      {
        id: 5,
        title: 'Outcomes & Impact',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Consistent weekly publishing cadence',
              'Higher average time-on-page compared to product pages',
              'Increased engagement on social channels for story-based posts',
              'Qualitative feedback highlighting relatability and trust',
            ]
          },
        ],
        image: '',
        caption: '',
      },
    ],
    summary: [
      {
        title: 'Project summary',
        body: 'Most sun care content in the industry is product-led, instructional, or overly clinical. While informative, it often fails to build emotional connection or trust. We saw an opportunity to shift from telling people what to do to listening to how people actually live. Sunshine Spotlight was created to humanize sun care through real voices, real routines, and personal beliefs—making the topic feel relatable rather than prescriptive.'
      },
      {
        title: 'Purpose',
        body: [
          {
            type: 'list',
            items: [
              'Build trust through authenticity and lived experience',
              'Create a consistent, story-driven content format',
              'Position sun care as part of everyday self-care, not a medical obligation',
              'Support long-term brand affinity rather than short-term conversion'
            ]
          }
        ]
      },
      {
        title: 'Design Guidelines',
        body: [
          {
            type: 'list',
            items: [
              'First-person narration only — no brand voice inside the story',
              'Honest, imperfect routines (no “ideal user” portrayals)',
              'Minimal product emphasis; context over promotion',
              'Editorial tone: calm, reflective, human',
              'One story per week to maintain quality and consistency',
            ]
          }
        ]
      },
      {
        title: '',
        body: ''
      }
    ],
    methodology: [
      {
        title: 'Approach',
        body: 'Editorial UX with a storytelling-first mindset.'
      },
      {
        title: 'Process',
        body: [
          {
            type: 'list',
            items: [
              'Defined content principles and narrative boundaries',
              'Collaborated with content and brand teams on story sourcing',
              'Designed a repeatable editorial layout system',
              'Tested readability and scalability across devices'
            ]
          }
        ]
      },
      {
        title: 'Tools & Methods',
        body: [
          {
            type: 'list',
            items: [
              'Content modelling',
              'Editorial layout systems',
              'Typography hierarchy testing',
              'Social-to-web content adaptation'
            ]
          }
        ]
      },
      {
        title: 'Key Consideration',
        body: 'Preserving authenticity while maintaining brand consistency.'
      }
    ],
    category: 'UX/UI',
  },
  {
    id: 6,
    backgroundColor: '#E2DDFF',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Cabana Animation System — Motion as Brand Language',
    timeline: '2025',
    team: '3 Designers',
    role: 'Campaign Director',
    heroImage: '/images/project-6/6-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Why 2D Animation?',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: '2D animation was chosen deliberately over 3D or video and here is why:'
          },
          {
            type: 'list',
            items: [
              'Aligns with Cabana\'s cartoonish, playful identity',
              'Enables both forward and reverse morphing transitions',
              'More vibrant and expressive in colour and shape',
              'Visually distinct within a category dominated by realistic visuals',
            ]
          },
        ],
        image: '/images/project-6/6-5.webp',
        caption: 'This approach allowed motion to feel flexible, expressive, and brand-specific.',
      },
      {
        id: 2,
        title: 'Two-Stage Animation Model',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Each animated scene consists of two stages:'
          },
          {
            type: 'list',
            items: [
              'Loop State: plays continuously while the user explores a section, creating a sense of liveliness without demanding attention',
              'Transition State: triggered by scroll, smoothly morphing the animation into the next or previous section',
            ]
          },
        ],
        image: '/images/project-6/6-2.webp',
        caption: 'This structure ensures motion feels continuous and intentional, rather than abrupt or segmented.',
      },
      {
        id: 3,
        title: 'Scroll-Driven Morphing Transitions',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Scroll input directly controls animation progress, allowing:'
          },
          {
            type: 'list',
            items: [
              'Forward and backward navigation',
              'Natural, reversible transitions',
              'A strong sense of spatial continuity between sections',
            ]
          },
        ],
        image: '/images/project-6/6-1.webp',
        caption: 'This interaction model gives users control while maintaining a guided narrative flow.',
      },
      {
        id: 4,
        title: 'Transparent PNG Sequence Technique',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Animations were built using sequences of transparent PNG frames, enabling:'
          },
          {
            type: 'list',
            items: [
              'Responsive scaling across screen sizes',
              'Central framing of animation content',
              'Background expansion without cropping or harsh edges',
              'Consistent visual quality on large displays',
            ]
          },
            {
            type: 'paragraph',
            content: 'This approach balanced visual control with responsive flexibility.'
          },
        ],
        image: '/images/project-6/6-3.webp',
        caption: 'Trade-off: While PNG sequences increase asset size, this was managed through optimization and selective frame counts.',
      },
      {
        id: 5,
        title: 'Handcrafted Production Process',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'All animation frames were sketched, cleaned up, painted, and sequenced by hand. Entirely by the internal team. No AI tools were used in the creation of these animations. This ensured stylistic consistency, creative control, and alignment with the brand’s handcrafted visual language.'
          },
        ],
        image: '/images/project-6/6-4.webp',
        caption: '',
      },
      {
        id: 6,
        title: 'Outcomes & Impact',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Increased engagement time on the website',
              'Positive qualitative feedback on motion and brand personality',
              'Smooth performance across modern devices',
              'Strong differentiation in export-facing brand presentation',
            ]
          },
        ],
        image: '',
        caption: '',
      },
    ],
    summary: [
      {
        title: 'Summary',
        body: 'As Cabana grew, static visuals were no longer sufficient to express the brand’s energy, personality, and tropical spirit. The website needed motion that felt intentional—not decorative—to support browsing and storytelling. Animation became a necessary layer to communicate vibrancy, continuity, and brand distinctiveness, especially for an audience discovering the brand for the first time.'
      },
      {
        title: 'Purpose',
        body: [
          {
            type: 'list',
            items: [
              'Use motion to guide users through product categories',
              'Reinforce brand personality through interaction',
              'Create a memorable, immersive experience',
              'Support scroll-based navigation without overwhelming users'
            ]
          }
        ]
      },
      {
        title: 'Design Guidelines',
        body: [
          {
            type: 'list',
            items: [
              'Motion serves interaction, not spectacle',
              'Smooth, predictable transitions',
              'Consistent rhythm across sections',
              'Performance-aware and device-friendly',
              'Handcrafted visuals aligned with brand illustration style',
            ]
          }
        ]
      },
      {
        title: 'Constraint',
        body: 'Animations needed to perform reliably across devices and screen sizes without heavy runtime dependencies.'
      }
    ],
    methodology: [
      {
        title: 'Approach',
        body: 'Motion as a core interaction layer, not a visual afterthought.'
      },
      {
        title: 'Process',
        body: [
          {
            type: 'list',
            items: [
              'Defined animation roles (loop vs transition)',
              'Designed motion states aligned with scroll behaviour',
              'Handcrafted frame-by-frame animations',
              'Integrated motion tightly with UI and navigation logic'
            ]
          }
        ]
      },
      {
        title: 'Tools & Methods',
        body: [
          {
            type: 'list',
            items: [
              'Storyboarding',
              'Frame-by-frame illustration',
              'Motion timing charts',
              'Scroll-driven animation logic'
            ]
          }
        ]
      },
      {
        title: 'Key Consideration',
        body: 'Maintaining smooth performance while delivering expressive motion.'
      }
    ],
    category: 'Visual',
  },
  {
    id: 7,
    backgroundColor: '#E2DDFF',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Engineering a Scroll-Driven, Animation-First Experience',
    timeline: '2025',
    team: '1 Developers, 2 Designers',
    role: 'Technical Lead',
    heroImage: '/images/project-7/7-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Why Vanilla JavaScript',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The application uses a lightweight state object to track global interaction state without introducing framework overhead. This allows deterministic control over scroll position, animation playback, and UI visibility while keeping runtime costs low.'
          },
          {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Explicit state management',
              'No virtual DOM or reactive abstraction',
              'Predictable execution order',
            ]
          },
        ],
        image: '',
        caption: '',
      },
         {
        id: 2,
        title: 'Asset Preloading & Blocking UI Until Ready',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'All animation frames are preloaded and decoded before user interaction is enabled. This guarantees that scroll-driven animations never stall mid-playback and prevents frame drops caused by late-loading assets.'
          },
          {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Promise-based asset pipeline',
              'Image decoding before render',
              'Controlled interaction gating',
            ]
          },
        ],
        image: '/images/project-7/7-2.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },

        caption: '',
      },
         {
        id: 3,
        title: 'Branded Loading Screen with Minimum Duration',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'A minimum loading duration ensures that the transition from loader to experience feels intentional rather than abrupt, even on fast connections. This avoids perceptual glitches where UI appears too quickly.'
          },
          {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Promise synchronisation',
              'Perceptual UX timing',
              'Controlled async flow',
            ]
          },
        ],
        image: '/images/project-7/7-3.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },
        caption: '',
      },
         {
        id: 4,
        title: 'PNG Sequence Animation Engine (“Video from Images”)',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'PNG sequences are treated as frame-addressable media rather than time-based video. This enables frame-perfect control, reverse playback, looping, and scroll-driven seeking—capabilities that are difficult to achieve reliably with video files.'
          },
           {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Frame-indexed rendering',
              'Canvas-based drawing',
              'Deterministic animation control',
            ]
          },
        ],
        image: '/images/project-7/7-4.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },
        caption: 'Trade-off: While PNG sequences increase asset size, this was managed through optimization and selective frame counts.',
      },
         {
        id: 5,
        title: 'Loop + Transition Animation States',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Each animation is split into two logical states: a looping idle state and a transition state. Scroll input dynamically interpolates frames between states, allowing seamless morphing in both directions.'
          },
           {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'State-based animation',
              'Linear interpolation (LERP)',
              'Reversible transitions',
            ]
          },
        ],
        image: '/images/project-7/7-5.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },
        caption: '',
      },
         {
        id: 6,
        title: 'Scroll-Controlled Playback',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Scroll position is normalised into a progress value and mapped directly to animation frames. This ensures the animation always reflects the user’s exact scroll position, creating a tactile and controllable experience.'
          },
            {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Scroll normalisation',
              'Frame mapping',
              'Input-driven animation',
            ]
          },
        ],
        image: '/images/project-7/7-6.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },
        caption: '',
      },
         {
        id: 7,
        title: 'JSON-Driven Product Data Model',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'All product content is data-driven, allowing UI components (carousel, popup, animation triggers) to remain generic and reusable. This reduces coupling and simplifies future content updates.'
          },
          {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Data-driven UI',
              'Separation of content and presentation',
              'Config-based rendering',
            ]
          },
        ],
        image: '/images/project-7/7-7.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },
        caption: '',
      },
         {
        id: 8,
        title: 'Scroll Snap Engine with Debounce Lock',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'A custom snap controller prevents partial section states while respecting user intent. Debouncing avoids jitter when users scroll aggressively, ensuring a cinematic but controllable experience.'
          },
          {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Scroll locking',
              'Debounce logic',
              'Programmatic snapping',
            ]
          },
        ],
        image: '/images/project-7/7-8.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },
        caption: '',
      },
         {
        id: 9,
        title: 'Section Visibility & Lifecycle Control',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Only the active section remains interactive at any time. This reduces DOM complexity, avoids overlapping animations, and ensures predictable lifecycle management in a single-page environment.'
          },
           {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Conditional rendering',
              'Lifecycle gating',
              'Performance-conscious DOM updates',
            ]
          },
        ],
        image: '/images/project-7/7-9.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },
        caption: '',
      },
         {
        id: 10,
        title: 'Auto-Rotating Product Carousel',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The carousel advances automatically when idle but yields immediately to user interaction. This balances guided presentation with user control.'
          },
           {
            type: 'paragraph',
            content: 'Techniques used:'
          },
          {
            type: 'list',
            items: [
              'Idle detection',
              'Timed state transitions',
              'Interaction override logic',
            ]
          },
        ],
        image: '/images/project-7/7-10.webp',
        style: { width: 'auto', marginRight: 'auto', marginLeft: '0' },
        caption: '',
      },
    ],
    summary: [
      {
        title: 'Summary',
        body: 's Cabana\’s digital presence evolved, traditional page-based navigation and static assets could no longer support the level of interaction and motion we envisioned. The experience required precise control over animation timing, scroll behaviour, and performance, which existing plugins and CMS-driven solutions could not reliably provide. This led us to design and build a custom front-end system tailored specifically to Cabana’s motion-heavy, narrative layout.'
      },
      {
        title: 'Purpose',
        body: [
          {
            type: 'list',
            items: [
              'Enable animation-first storytelling',
              'Maintain full control over scroll behaviour',
              'Ensure consistent performance across devices',
              'Support future scalability without rewriting core logic'
            ]
          }
        ]
      },
      {
        title: 'Design Guidelines',
        body: [
          {
            type: 'list',
            items: [
              'No external animation frameworks',
              'Modular, readable Vanilla JavaScript',
              'Asset-first loading strategy',
              'Clear separation between data, logic, and presentation'
            ]
          }
        ]
      },
      {
        title: 'Constraint',
        body: 'More upfront engineering effort in exchange for long-term flexibility and performance predictability.'
      }
    ],
    methodology: [
      {
        title: 'Approach',
        body: 'Custom front-end engineering for interaction-heavy experiences.'
      },
      {
        title: 'Process',
        body: [
          {
            type: 'list',
            items: [
              'Designed architecture around animation and scroll control',
              'Built custom systems for asset loading and playback',
              'Structured data-driven UI components',
              'Tested performance across screen sizes and devices'
            ]
          }
        ]
      },
      {
        title: 'Tools & Methods',
        body: [
          {
            type: 'list',
            items: [
              'Designed architecture around animation and scroll control',
              'Built custom systems for asset loading and playback',
              'Structured data-driven UI components',
              'Tested performance across screen sizes and devices'
            ]
          }
        ]
      },
      {
        title: 'Key Consideration',
        body: 'Trading framework convenience for precision and control.'
      }
    ],
    category: 'Code',
  },
  {
    id: 8,
    backgroundColor: '#E2DDFF',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Cabana Website UX & UI Design — A Brand-First Digital Presence for Global Markets',
    timeline: '2025',
    team: '3 Designers',
    role: 'Lead Designer',
    heroImage: '/images/project-8/8-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Target Demographics & Personas',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Primary Audience: Wholesalers & Distributors.'
          },
          {
            type: 'list',
            items: [
              'Looking for credible, export-ready brands',
              'Need clear product categorisation and brand confidence',
              'Value simplicity and clarity over deep interaction',
            ]
          },
          {
            type: 'paragraph',
            content: 'Secondary Audience: Curious End Customers'
          },
          {
            type: 'list',
            items: [
              'Discovering the brand via marketplaces',
              'Seeking reassurance of legitimacy and quality',
              'Respond well to visual storytelling and brand personality',
            ]
          },
        ],
        image: '',
        caption: '',
      },
     {
        id: 2,
        title: 'Tropical Beach Theme',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The tropical beach theme defines the atmosphere across all layers:'
          },
          {
            type: 'list',
            items: [
              'Warm colour palette inspired by sun, sand, and water',
              'Playful shapes and motion suggesting movement and ease',
              'Light, friendly typography and illustration style',
            ]
          },
        ],
        image: '/images/project-8/8-5.webp',
        caption: 'The theme reinforces Cabana\’s identity while remaining universally understandable across cultures.',
      },
      {
        id: 3,
        title: 'Single-Page Website Approach',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The website was intentionally designed as a single-page experience to:'
          },
          {
            type: 'list',
            items: [
              'Control narrative flow from top to bottom',
              'Reduce navigation complexity',
              'Ensure consistent storytelling across markets',
              'Simplify content management',
            ]
          },
        ],
        image: '/images/project-8/8-3.webp',
        caption: 'This approach also supported scroll-driven animation and reduced cognitive overhead for first-time visitors.',
      },
      {
        id: 4,
        title: 'Product Categories Structure',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'The page is divided into four clear sections, each representing a product category:'
          },
          {
            type: 'list',
            items: [
              'Sun Protection',
              'Tanning',
              'After Sun',
              'Kids',
            ]
          },
          {
            type: 'paragraph',
            content: 'Each section introduces:'
          },
          {
            type: 'list',
            items: [
              'Category purpose',
              'Key products',
              'Distinct visual tone within a unified system',
            ]
          },
        ],
        image: '/images/project-8/8-1.webp',
        caption: 'This structure allows quick scanning while maintaining brand cohesion.',
      },
      {
        id: 5,
        title: 'Redirecting Users to Amazon',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Rather than building a full e-commerce experience, users are redirected to Amazon for purchasing.'
          },
          {
            type: 'paragraph',
            content: 'Rationale:'
          },
          {
            type: 'list',
            items: [
              'Reduced operational and technical overhead',
              'Faster time to market',
              'Trust in a familiar purchasing platform',
              'Focus on brand presentation over logistics',
            ]
          },
        ],
        image: '/images/project-8/8-2.webp',
        caption: 'This kept the website lightweight while still enabling access to products.',
      },
      {
        id: 6,
        title: 'Scroll-Controlled Animation & Visual Style',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Scroll is used as a primary interaction mechanism, controlling animation playback and transitions between sections.'
          },
          {
            type: 'paragraph',
            content: 'Design Principles:'
          },
          {
            type: 'list',
            items: [
              'UI remains simple and readable',
              'Animation enhances understanding, not distraction',
              'Deliberately 2D animation to match the cartoonish brand character',
              'Tropical, vibrant visuals reflecting warmth and energy',
            ]
          },
        ],
        image: '/images/project-8/8-4.webp',
        caption: 'The result is a modern experience that remains approachable and brand-aligned.',
      },
      {
        id: 7,
        title: 'Progressive Product Highlighting',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Products are automatically highlighted one by one as users scroll.'
          },
          {
            type: 'paragraph',
            content: 'Benefits:'
          },
          {
            type: 'list',
            items: [
              'Guides attention without requiring interaction',
              'Creates a smooth, curated browsing rhythm',
              'Reduces decision fatigue',
              'Mimics a guided presentation for wholesalers',
            ]
          },
        ],
        image: '/images/project-8/8-6.webp',
        caption: 'This interaction supports passive exploration while keeping control with the user.',
      },
      {
        id: 8,
        title: 'Outcomes & Impact',
        subtitle: '',
        body: [
          {
            type: 'list',
            items: [
              'Clear brand representation for export markets',
              'Reduced dependency on marketplaces for brand storytelling',
              'Positive distributor feedback on clarity and presentation',
              'Low maintenance cost with high visual impact',
            ]
          },
        ],
        image: '',
        caption: '',
      },
    ],
    summary: [
      {
        title: 'Suammry',
        body: 'As Cabana expanded into international and export markets, the absence of a dedicated website became a critical gap. Distributors and curious customers had no central place to understand the brand, its product range, or its legitimacy. At this stage of growth, relying solely on third-party marketplaces limited brand control and credibility. The website was created to act as a brand anchor—not a sales platform—supporting global visibility without operational complexity.'
      },
      {
        title: 'Purpose',
        body: [
          {
            type: 'list',
            items: [
              'Present Cabana as a professional, export-ready brand',
              'Clearly communicate product categories and positioning',
              'Build trust with wholesalers and international partners',
              'Support consumer curiosity without managing e-commerce'
            ]
          }
        ]
      },
      {
        title: 'Design Guidelines',
        body: [
          {
            type: 'list',
            items: [
              'Brand-first, not transaction-driven',
              'Simple structure with strong visual storytelling',
              'Low maintenance and easy to scale',
              'Fast loading across regions and devices',
              'Playful without feeling childish'
            ]
          }
        ]
      },
      {
        title: 'Constraint',
        body: 'By not implementing e-commerce, we sacrificed direct conversion in favor of clarity, maintainability, and global reach.'
      }
    ],
    methodology: [
      {
        title: 'Approach',
        body: 'Brand-first, narrative-driven experience design.'
      },
      {
        title: 'Process',
        body: [
          {
            type: 'list',
            items: [
              'Clarified website role within export and wholesale strategy',
              'Designed single-page narrative flow',
              'Structured content by product category and audience intent',
              'Integrated motion as part of interaction, not decoration'
            ]
          }
        ]
      },
      {
        title: 'Tools & Methods',
        body: [
          {
            type: 'list',
            items: [
              'Experience mapping',
              'Scroll-based prototyping',
              'Motion-aware layout design',
              'Responsive testing across devices'
            ]
          }
        ]
      },
      {
        title: 'Key Consideration',
        body: 'Balancing visual richness with simplicity and performance.'
      }
    ],
    category: 'Industrial',
  },
  {
    id: 9,
    backgroundColor: '#FCEFD9',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'UI redesign for Calypso home page and product page',
    timeline: '2025',
    team: '3 Developers, 1 Designer',
    role: 'Full Stack Developer',
    heroImage: '/images/project-9/9-hero.webp',
    sections: [
      
      {
        id: 2,
        title: 'Homepage Layout Stages',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'We defined three common homepage layout stages based on brand maturity:'
          },
          {
            type: 'list',
            items: [
              'Emerging Brand',
              'Story-led, minimal content, strong emotional messaging',
              'Growth-Stage Brand',
              'Balanced storytelling, product clarity, and structured navigation',
              'Legacy Brand',
              'Content-dense, category-driven, efficiency-focused',
            ]
          },
        ],
        image: '/images/project-9/9-2.webp',
        caption: 'Calypso was clearly in the growth stage—with expanding product lines, editorial content, and tools. The homepage layout was therefore designed to balance brand narrative, product discovery, and utility, without overwhelming users.',
      },
      {
        id: 7,
        title: '',
        subtitle: '',
        body: '',
        image: '/images/project-9/9-7.webp',
        caption: '',
      },
      {
        id: 8,
        title: '',
        subtitle: '',
        body: '',
        image: '/images/project-9/9-8.webp',
        caption: '',
      },
      {
        id: 9,
        title: '',
        subtitle: '',
        body: '',
        image: '/images/project-9/9-9.webp',
        caption: '',
      },
      {
        id: 10,
        title: '',
        subtitle: '',
        body: '',
        image: '/images/project-9/9-10.webp',
        caption: '',
      },
      {
        id: 11,
        title: '',
        subtitle: '',
        body: '',
        image: '/images/project-9/9-11.webp',
        caption: '',
      },
      {
        id: 3,
        title: 'Mega Menu Introduction',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'As content expanded, the existing navigation could no longer scale. We introduced a mega menu to:'
          },
          {
            type: 'list',
            items: [
              'Organise existing product categories more clearly',
              'Surface newly added sections like Sunshine Spotlight and Product Finder',
              'Reduce depth of navigation and reliance on guessing',
            ]
          },
        ],
        image: '/images/project-9/9-3.webp',
        caption: 'The trade-off was increased visual complexity, which we mitigated through clear grouping, hierarchy, and restrained visual styling.',
      },
      {
        id: 4,
        title: 'Organising CTAs Across Homepage Banners',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'CTAs across the homepage had become inconsistent in language, hierarchy, and intent. We standardised CTAs by:'
          },
          {
            type: 'list',
            items: [
              'Defining primary vs secondary actions',
              'Aligning CTA labels with user intent, not marketing language',
              'Reducing the number of competing actions per banner',
            ]
          },
        ],
        image: '/images/project-9/9-4.webp',
        caption: 'This resulted in clearer decision paths and reduced cognitive load, especially on mobile.',
      },
      {
        id: 5,
        title: 'Navigation Improvements',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Key navigation changes included:'
          },
          {
            type: 'list',
            items: [
              'Simplified main menu',
              'Reduced top-level items to focus on core user tasks',
              'Full-screen search with suggested keywords',
              'Supporting exploratory behaviour and faster access',
              'Breadcrumbs',
              'Improving orientation within deep product hierarchies',
              'Bundle recommendations on product pages',
              'Helping users understand product relationships and routines',
            ]
          },
        ],
        image: '/images/project-9/9-5.webp',
        caption: 'These changes prioritized wayfinding and confidence, especially for first-time visitors.',
      },
      {
        id: 6,
        title: 'Product Card & Product Gallery Modernisation',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Product presentation was updated to better reflect quality and usage context:'
          },
          {
            type: 'list',
            items: [
              'Modernised product cards with clearer hierarchy',
              'Subtle texture backgrounds to reinforce materiality',
              'Integrated video within product galleries',
              'Improved image sequencing to support scanning',
            ]
          },
        ],
        image: '/images/project-9/9-6.webp',
        caption: 'The challenge was enhancing richness without slowing performance, leading to careful media optimization and conditional loading.',
      },
      {
        id: 1,
        title: 'Calypso Website Design History',
        subtitle: '',
        body: [{
            type: 'paragraph',
            content: 'Calypso’s website had undergone two major redesigns prior to this project:'
          },
          {
            type: 'list',
            items: [
              '2020 — Focused on establishing a digital presence and basic e-commerce functionality',
              '2024 — Visual refresh to align with updated branding',
            ]
          },
        ],
        image: '/images/project-9/9-1.webp',
        caption: 'This project represents the third major redesign, shifting focus from aesthetics to structure, hierarchy, and user flow. Rather than another visual refresh, the goal was to create a UI that could support Calypso’s next phase of growth.',
      },
      {
        title: 'Metrics & Outcomes',
        body: [
          {
            type: 'list',
            items: [
              'Improved navigation engagement (menu and search usage)',
              'Increased interaction with editorial content',
              'Longer average time on product pages',
              'Qualitative feedback indicating improved clarity and confidence'
            ]
          }
        ]
      },
    ],
    summary: [
      {
        title: 'Summary',
        body: 'Calypso’s website had grown organically over time, accumulating new content, features, and campaigns. While the brand had matured, the interface no longer reflected its clarity, confidence, or product depth. Users were able to complete tasks, but navigation friction, inconsistent CTAs, and outdated visual patterns limited discoverability and engagement. The redesign was initiated to support brand growth, content expansion, and better product storytelling—without alienating existing customers.'
      },
      {
        title: 'Purpose',
        body: [
          {
            type: 'list',
            items: [
              'Align UI with Calypso’s current brand maturity',
              'Improve content discoverability and navigation clarity',
              'Support new content formats (Spotlight, Product Finder)',
              'Modernise product presentation to increase confidence and engagement'
            ]
          }
        ]
      },
      {
        title: 'Design Guidelines',
        body: [
          {
            type: 'list',
            items: [
              'Evolution, not reinvention',
              'Prioritise clarity over novelty',
              'Maintain familiarity for returning users',
              'Design scalable systems, not one-off pages',
              'Mobile-first, content-aware layouts',
            ]
          }
        ]
      },
      {
        title: 'Constraint',
        body: 'The redesign had to work within an existing design system and live content structure, limiting how much could be re-architected at once.'
      }
    ],
    methodology: [
      {
        title: 'Approach',
        body: 'Evolutionary redesign grounded in brand maturity and system thinking.'
      },
      {
        title: 'Process',
        body: [
          {
            type: 'list',
            items: [
              'Audited existing UI patterns and content structure',
              'Mapped brand growth stages to layout strategies',
              'Defined scalable navigation and CTA systems',
              'Modernised components without disrupting user familiarity'
            ]
          }
        ]
      },
      {
        title: 'Tools & Methods',
        body: [
          {
            type: 'list',
            items: [
              'UI audits',
              'Component inventories',
              'Design system extensions',
              'Responsive layout prototyping'
            ]
          }
        ]
      },
      {
        title: 'Key Consideration',
        body: 'Improving clarity and scalability without alienating existing users.'
      }
    ],
    category: 'Code',
  },
  {
    id: 10,
    backgroundColor: '#E8FFF8',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Project Ten - ehsan-design design',
    timeline: '2023',
    team: '2 Designers',
    role: 'Brand Designer',
    heroImage: '/images/project-10/10-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Discovery',
        subtitle: 'Brand Exploration',
        body: 'We conducted workshops to understand the brand values, personality, and target audience.',
        image: '/images/project-10/section-1.webp',
        caption: 'add caption',
      },
      {
        id: 2,
        title: 'Identity Design',
        subtitle: 'Creating Visual Language',
        body: 'A complete visual identity was created including logo, color palette, and typography.',
        image: '/images/project-10/section-2.webp',
        caption: 'add caption',
      },
      {
        id: 3,
        title: 'Application',
        subtitle: 'Implementation Across Channels',
        body: 'The brand identity was applied across website, print, and digital marketing materials.',
        image: '/images/project-10/section-3.webp',
        caption: 'add caption',
      },
    ],
    summary: [
      {
        title: 'Project Goals',
        body: 'Create a comprehensive brand identity system that reflects company values, resonates with target audience, and provides consistent visual language across all touchpoints.'
      },
      {
        title: 'Key Challenges',
        body: [
          {
            type: 'list',
            items: [
              'Balancing creative vision with business constraints and market positioning',
              'Creating memorable visual identity that stands out in competitive market',
              'Ensuring consistency across diverse applications and formats',
              'Developing flexible system that allows for future growth and adaptation'
            ]
          }
        ]
      },
      {
        title: 'Design Process',
        body: [
          {
            type: 'list',
            items: [
              'Conducted brand workshops and stakeholder interviews',
              'Researched competitive landscape and market trends',
              'Developed multiple visual directions and concepts',
              'Tested concepts with target audience and refined based on feedback'
            ]
          }
        ]
      },
      {
        title: 'Results & Success Metrics',
        body: 'The brand identity increased brand recognition by 55%, improved market positioning, achieved consistent application across all channels, and received positive stakeholder and customer feedback.'
      }
    ],
    methodology: [
      {
        title: 'Discovery & Research',
        body: 'We conducted stakeholder interviews, brand workshops, competitive analysis, and market research to understand positioning, values, and target audience preferences.'
      },
      {
        title: 'Visual Direction Development',
        body: [
          {
            type: 'list',
            items: [
              'Explored multiple visual directions and mood boards',
              'Developed logo concepts with multiple variations',
              'Created color palette exploration and typography systems',
              'Tested designs for versatility across applications'
            ]
          }
        ]
      },
      {
        title: 'Brand System Documentation',
        body: [
          {
            type: 'list',
            items: [
              'Created comprehensive brand guidelines document',
              'Developed logo usage standards and variations',
              'Specified color systems with accessibility considerations',
              'Documented typography hierarchy and application rules'
            ]
          }
        ]
      },
      {
        title: 'Implementation & Launch',
        body: 'We applied the identity across website design, print collateral, digital marketing assets, and internal communications. Provided brand training to all teams and established brand governance processes.'
      }
    ],
    category: 'Visual',
  },
  {
    id: 11,
    backgroundColor: '#FFF0E8',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Project Eleven - ehsan-design code',
    timeline: '2024',
    team: '3 Developers, 2 Designers',
    role: 'Lead Designer',
    heroImage: '/images/project-11/11-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Audit',
        subtitle: 'Analyzing Current Site',
        body: 'We conducted a comprehensive audit of the existing website to identify areas for improvement.',
        image: '/images/project-11/section-1.webp',
        caption: 'add caption',
      },
      {
        id: 2,
        title: 'Redesign',
        subtitle: 'Modern and Responsive',
        body: 'A modern, responsive redesign was created to improve user experience and conversion rates.',
        image: '/images/project-11/section-2.webp',
        caption: 'add caption',
      },
      {
        id: 3,
        title: 'Launch',
        subtitle: 'Deployment and Monitoring',
        body: 'The new website was launched with careful monitoring to ensure smooth transition and optimal performance.',
        image: '/images/project-11/section-3.webp',
        caption: 'add caption',
      },
    ],
    summary: [
      {
        title: 'Project Goals',
        body: 'Redesign and modernize an existing website to improve user experience, increase conversion rates, and establish a responsive, mobile-first digital presence.'
      },
      {
        title: 'Key Challenges',
        body: [
          {
            type: 'list',
            items: [
              'Auditing existing site to identify pain points and opportunities',
              'Preserving valuable content while improving information architecture',
              'Implementing responsive design across diverse user devices',
              'Ensuring smooth migration without disrupting user experience'
            ]
          }
        ]
      },
      {
        title: 'Design Process',
        body: [
          {
            type: 'list',
            items: [
              'Conducted comprehensive audit of existing website performance and usability',
              'Analyzed user behavior and identified conversion bottlenecks',
              'Developed wireframes and prototypes for improved layouts',
              'Created responsive design system supporting mobile-first approach'
            ]
          }
        ]
      },
      {
        title: 'Results & Success Metrics',
        body: 'The redesign increased conversion rate by 35%, reduced bounce rate by 40%, improved page load speed by 60%, and achieved 95+ mobile usability scores.'
      }
    ],
    methodology: [
      {
        title: 'Audit & Analysis',
        body: 'We conducted comprehensive site audits, analyzed user behavior data, identified conversion bottlenecks, and compiled findings in detailed improvement recommendations.'
      },
      {
        title: 'Strategy & Planning',
        body: [
          {
            type: 'list',
            items: [
              'Defined redesign goals and success metrics',
              'Prioritized improvements based on impact and effort',
              'Planned information architecture changes',
              'Established timeline and resource requirements'
            ]
          }
        ]
      },
      {
        title: 'Design & Development',
        body: [
          {
            type: 'list',
            items: [
              'Created mobile-first responsive design system',
              'Designed modern UI components and patterns',
              'Developed optimized front-end code',
              'Integrated with backend systems and content management'
            ]
          }
        ]
      },
      {
        title: 'Testing & Launch',
        body: 'We conducted extensive QA testing across browsers and devices, performed A/B testing on key pages, monitored performance metrics post-launch, and implemented improvements based on user feedback.'
      }
    ],
    category: 'UX/UI',
  },
  {
    id: 12,
    backgroundColor: '#E8E8FC',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Project Twelve - Industrial design pr-1',
    timeline: '2022-2023',
    team: '4 Engineers',
    role: 'Hardware Lead',
    heroImage: '/images/project-12/12-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Concept',
        subtitle: 'Innovation in IoT',
        body: 'We conceptualized an innovative IoT product that solves real-world problems.',
        image: '/images/project-12/section-1.webp',
        caption: 'add caption',
      },
      {
        id: 2,
        title: 'Engineering',
        subtitle: 'Technical Implementation',
        body: 'The product was engineered using cutting-edge IoT technologies and wireless protocols.',
        image: '/images/project-12/section-2.webp',
        caption: 'add caption',
      },
      {
        id: 3,
        title: 'Testing',
        subtitle: 'Quality Assurance',
        body: 'Rigorous testing in various environments ensured reliability and performance.',
        image: '/images/project-12/section-3.webp',
        caption: 'add caption',
      },
    ],
    summary: [
      {
        title: 'Project Goals',
        body: 'Develop an innovative IoT product that leverages cutting-edge wireless technologies to solve real-world problems and deliver value to users and enterprises.'
      },
      {
        title: 'Key Challenges',
        body: [
          {
            type: 'list',
            items: [
              'Designing hardware that balances performance with power efficiency',
              'Integrating multiple wireless protocols and sensors',
              'Ensuring reliability and stability in diverse environmental conditions',
              'Managing cost constraints while maintaining quality standards'
            ]
          }
        ]
      },
      {
        title: 'Design Process',
        body: [
          {
            type: 'list',
            items: [
              'Conducted market research to identify user needs and opportunities',
              'Prototyped multiple concepts exploring different technical approaches',
              'Selected optimal hardware components and wireless technologies',
              'Iterated designs based on prototype testing and feedback'
            ]
          }
        ]
      },
      {
        title: 'Results & Success Metrics',
        body: 'The product achieved 99.5% uptime in production, passed all regulatory certifications, received strong customer feedback with 4.8/5 rating, and exceeded initial sales targets.'
      }
    ],
    methodology: [
      {
        title: 'Market Research & Ideation',
        body: 'We conducted market analysis, interviewed potential users, identified key use cases, and explored technical approaches for solving identified problems.'
      },
      {
        title: 'Hardware Design & Prototyping',
        body: [
          {
            type: 'list',
            items: [
              'Designed PCB layouts and selected component specifications',
              'Built functional prototypes for concept validation',
              'Tested power consumption and performance characteristics',
              'Iterated designs based on prototype learnings'
            ]
          }
        ]
      },
      {
        title: 'Integration & Firmware Development',
        body: [
          {
            type: 'list',
            items: [
              'Developed firmware for device operation and connectivity',
              'Integrated multiple wireless protocols (WiFi, Bluetooth, cellular)',
              'Implemented cloud connectivity and data synchronization',
              'Created mobile and web applications for device management'
            ]
          }
        ]
      },
      {
        title: 'Testing & Manufacturing',
        body: 'We conducted environmental testing, compliance validation, stress testing under various conditions, established manufacturing processes, and implemented quality control procedures.'
      }
    ],
    category: 'Code',
  },
  {
    id: 13,
    backgroundColor: '#FCE8F8',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Project Thirteen - Industrial design pr-2',
    timeline: '2023-2024',
    team: '2 Designers, 3 Developers',
    role: 'Design System Lead',
    heroImage: '/images/project-13/13-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Planning',
        subtitle: 'Component Strategy',
        body: 'We planned a comprehensive component library that standardizes UI elements across products.',
        image: '/images/project-13/section-1.webp',
        caption: 'add caption',
      },
      {
        id: 2,
        title: 'Creation',
        subtitle: 'Building Components',
        body: 'Reusable, accessible components were created with thorough documentation.',
        image: '/images/project-13/section-2.webp',
        caption: 'add caption',
      },
      {
        id: 3,
        title: 'Adoption',
        subtitle: 'Team Integration',
        body: 'Teams across the organization adopted the component library, improving efficiency and consistency.',
        image: '/images/project-13/section-3.webp',
        caption: 'add caption',
      },
    ],
    summary: [
      {
        title: 'Project Goals',
        body: 'Develop a comprehensive UI component library that standardizes design across products, improves development efficiency, and ensures consistency in user experience.'
      },
      {
        title: 'Key Challenges',
        body: [
          {
            type: 'list',
            items: [
              'Creating flexible components that work across diverse product contexts',
              'Balancing consistency with customization needs',
              'Achieving designer and developer alignment on component specifications',
              'Driving adoption across multiple teams and products'
            ]
          }
        ]
      },
      {
        title: 'Design Process',
        body: [
          {
            type: 'list',
            items: [
              'Audited existing components across all products to identify patterns',
              'Designed flexible, modular component architecture',
              'Created detailed component specifications and documentation',
              'Built interactive component showcase and usage examples'
            ]
          }
        ]
      },
      {
        title: 'Results & Success Metrics',
        body: 'The component library reduced development time by 40%, improved design consistency across products by 85%, increased team velocity, and was adopted by 95% of teams within 6 months.'
      }
    ],
    methodology: [
      {
        title: 'Audit & Planning',
        body: 'We audited existing components across products, identified patterns and gaps, prioritized component types for library, and planned development phases.'
      },
      {
        title: 'Component Design & Specification',
        body: [
          {
            type: 'list',
            items: [
              'Designed flexible, reusable component architectures',
              'Specified component variants and props structure',
              'Created detailed design specifications and usage guidelines',
              'Ensured accessibility compliance (WCAG) across all components'
            ]
          }
        ]
      },
      {
        title: 'Development & Documentation',
        body: [
          {
            type: 'list',
            items: [
              'Implemented components in code with multiple framework support',
              'Created comprehensive component documentation with examples',
              'Built interactive component explorer and showcase',
              'Established component versioning and maintenance processes'
            ]
          }
        ]
      },
      {
        title: 'Adoption & Refinement',
        body: 'We conducted team training sessions, gathered feedback from early adopters, refined components based on usage patterns, and continuously updated the library.'
      }
    ],
    category: 'UX/UI',
  },
  {
    id: 14,
    backgroundColor: '#E8FCE8',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Project Fourteen - Industrial design pr-3',
    timeline: '2022',
    team: '2 Designers',
    role: 'Lead Designer',
    heroImage: '/images/project-14/14-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Research',
        subtitle: 'Market Analysis',
        body: 'We researched market trends and competitor packaging to identify opportunities.',
        image: '/images/project-14/section-1.webp',
        caption: 'add caption',
      },
      {
        id: 2,
        title: 'Design',
        subtitle: 'Creating Package Design',
        body: 'An eye-catching package design was created that communicates brand values and product benefits.',
        image: '/images/project-14/section-2.webp',
        caption: 'add caption',
      },
      {
        id: 3,
        title: 'Production',
        subtitle: 'Manufacturing Partnership',
        body: 'We worked with manufacturers to ensure the design was produced to the highest standards.',
        image: '/images/project-14/section-3.webp',
        caption: 'add caption',
      },
    ],
    summary: [
      {
        title: 'Project Goals',
        body: 'Design compelling package design that captures shelf attention, communicates brand identity and product benefits, and differentiates from competitor offerings.'
      },
      {
        title: 'Key Challenges',
        body: [
          {
            type: 'list',
            items: [
              'Creating design that stands out on crowded retail shelves',
              'Communicating product benefits within space constraints',
              'Balancing aesthetic appeal with practical manufacturability',
              'Ensuring design works across product line variations'
            ]
          }
        ]
      },
      {
        title: 'Design Process',
        body: [
          {
            type: 'list',
            items: [
              'Conducted retail environment analysis and competitor research',
              'Explored multiple design directions and messaging approaches',
              'Iterated on typography, color, and graphic treatments',
              'Tested designs in simulated retail environments'
            ]
          }
        ]
      },
      {
        title: 'Results & Success Metrics',
        body: 'The packaging design increased brand shelf presence by 65%, contributed to 30% sales increase within 6 months, won packaging design award, and received positive consumer feedback.'
      }
    ],
    methodology: [
      {
        title: 'Market & Retail Research',
        body: 'We analyzed retail environments, studied competitor packaging, researched target audience preferences, and identified design opportunities and constraints.'
      },
      {
        title: 'Design Direction & Exploration',
        body: [
          {
            type: 'list',
            items: [
              'Explored multiple visual directions and messaging strategies',
              'Developed typography and color palette concepts',
              'Created mock-ups and simulations for retail evaluation',
              'Tested legibility and shelf presence of designs'
            ]
          }
        ]
      },
      {
        title: 'Refinement & Finalization',
        body: [
          {
            type: 'list',
            items: [
              'Refined winning design based on feedback and testing',
              'Optimized design for various package sizes and formats',
              'Prepared production-ready artwork and specifications',
              'Ensured designs meet regulatory and safety requirements'
            ]
          }
        ]
      },
      {
        title: 'Production & Launch',
        body: 'We coordinated with manufacturers to ensure production quality, conducted pre-production approvals, managed rollout to retail channels, and monitored in-market performance.'
      }
    ],
    category: 'Visual',
  },
  {
    id: 15,
    backgroundColor: '#FCF8E8',
    projectLink: 'https://calypsosun.com',
    projectLinkText: 'visit calypsosun.com',
    title: 'Project Fifteen - Industrial design pr-4',
    timeline: '2023-2024',
    team: '6 Developers, 2 Designers',
    role: 'Architecture Lead',
    heroImage: '/images/project-15/15-hero.webp',
    sections: [
      {
        id: 1,
        title: 'Architecture',
        subtitle: 'System Design',
        body: 'We designed a scalable, microservices-based architecture for enterprise use.',
        image: '/images/project-15/section-1.webp',
        caption: 'add caption',
      },
      {
        id: 2,
        title: 'Development',
        subtitle: 'Building the Platform',
        body: 'A robust platform was developed with comprehensive features for enterprise customers.',
        image: '/images/project-15/section-2.webp',
        caption: 'add caption',
      },
      {
        id: 3,
        title: 'Scaling',
        subtitle: 'Growing with Users',
        body: 'The platform was designed to scale efficiently as the user base grew.',
        image: '/images/project-15/section-3.webp',
        caption: 'add caption',
      },
    ],
    summary: [
      {
        title: 'Project Goals',
        body: 'Build a scalable, enterprise-grade software platform that delivers comprehensive functionality, seamless user experience, and reliable performance at scale.'
      },
      {
        title: 'Key Challenges',
        body: [
          {
            type: 'list',
            items: [
              'Designing architecture that scales to millions of users and requests',
              'Balancing feature richness with system simplicity and maintainability',
              'Ensuring security and data privacy for enterprise customers',
              'Managing technical debt while meeting aggressive delivery timelines'
            ]
          }
        ]
      },
      {
        title: 'Design Process',
        body: [
          {
            type: 'list',
            items: [
              'Conducted user research with target enterprise customers',
              'Designed microservices architecture for scalability and flexibility',
              'Planned feature prioritization and phased rollout strategy',
              'Established DevOps and deployment pipelines'
            ]
          }
        ]
      },
      {
        title: 'Results & Success Metrics',
        body: 'The platform served 500K+ active users with 99.99% uptime SLA, processed 100M+ transactions monthly, reduced customer support tickets by 60%, and achieved industry-leading performance benchmarks.'
      }
    ],
    methodology: [
      {
        title: 'Requirements & Architecture',
        body: 'We gathered enterprise requirements, designed microservices-based architecture, planned database and caching strategies, and established security frameworks.'
      },
      {
        title: 'Core Platform Development',
        body: [
          {
            type: 'list',
            items: [
              'Built authentication and authorization systems',
              'Developed core business logic and data models',
              'Implemented real-time data synchronization',
              'Created comprehensive API layer for integrations'
            ]
          }
        ]
      },
      {
        title: 'Performance & Infrastructure',
        body: [
          {
            type: 'list',
            items: [
              'Optimized database queries and indexing strategies',
              'Implemented caching layers and CDN integration',
              'Set up load balancing and auto-scaling infrastructure',
              'Established monitoring and alerting systems'
            ]
          }
        ]
      },
      {
        title: 'Testing & Operations',
        body: 'We conducted extensive QA testing, load testing for scale validation, security audits and penetration testing, and implemented continuous monitoring and incident response procedures.'
      }
    ],
    category: 'Code',
  },
];
