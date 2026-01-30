export const project1Data = {
  id: 1,
  backgroundColor: '#FCEFD9',
  title: 'Calypso Digital Experience — A Comprehensive UX Redesign',
  timeline: '2024',
  team: '3 Designers',
  role: 'Lead UX',
  heroImage: '/images/project-1/1-hero.webp',
  sections: [
    {
      id: 1,
      type: 'html',
      html: `
        <div class="section-1">
          <img src="/images/project-1/1-1.webp" alt="section-1" class="section-1-image">
          <p class="section-1-text"></p>
        </div>
      `
    },
    {
      id: 2,
      type: 'html',
      html: `
        <div class="section-2">
          <img src="/images/project-1/1-2.webp" alt="section-2" class="section-2-image">
          <p class="section-2-text"></p>
        </div>
      `
    },
    {
      id: 3,
      type: 'html',
      html: `
        <div class="section-3">
          <img src="/images/project-1/1-3.webp" alt="section-3" class="section-3-image">
          <p class="section-3-text"></p>
        </div>
      `
    },
    {
      id: 4,
      type: 'html',
      html: `
        <div class="section-4">
          <img src="/images/project-1/1-4.webp" alt="section-4" class="section-4-image">
          <p class="section-4-text"></p>
        </div>
      `
    },
    {
      id: 5,
      type: 'html',
      html: `
        <div class="section-5">
          <img src="/images/project-1/1-5.webp" alt="section-5" class="section-5-image">
          <p class="section-5-text"></p>
        </div>
      `
    },
    {
      id: 6,
      type: 'html',
      html: `
        <div class="section-6">
          <img src="/images/project-1/1-6.webp" alt="section-6" class="section-6-image">
          <p class="section-6-text"></p>
        </div>
      `
    },
    {
      id: 7,
      title: 'Treasure-Hunting for User Clues',
      subtitle: 'User Data Sources & Methodology',
      body: '',
      image: '/images/project-1/1-8.webp',
      caption: ''
    },
      {
      id: 8,
      title: 'Designing for the Right Audience',
      subtitle: 'Aligning Brand Positioning with Target Audiences',
      body: '',
      image: '/images/project-1/1-9.webp',
      caption: '',
    },
    {
      id: 9,
      title: 'Who poke around our website?',
      subtitle: 'Visitor types - Based on our GA4 (2022-25)',
      body: '',
      image: '/images/project-1/1-10.webp',
      caption: '',
    },
    {
      id: 10,
      title: 'What do SPF superheroes really want?',
      subtitle: 'Users insights - From customer support report for over 5 years',
      body: '',
      image: '/images/project-1/1-11.webp',
      caption: '',
    },
    {
      id: 11,
      title: 'Meet our three protagonists',
      subtitle: 'Our estimate based on G4A, reviews and surveys',
      body: '',
      image: '/images/project-1/1-12.webp',
      caption: '',
    },
    {
      id: 12,
      title: 'British females on mobile are on fire!',
      subtitle: 'Users\’ context',
      body: '',
      image: '/images/project-1/1-13.webp',
      caption: '',
    },
    {
      id: 13,
      title: 'Comparative UX Patterns in the Market',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-14.webp',
      caption: '',
    },
    {
     id: 13,
     type: 'html',
     html: `
       <div class="section-6">
         <img src="/images/project-1/1-7.webp" alt="section-6" class="section-7-image">
         <p class="section-6-text"></p>
       </div>
     `
   },
     {
      id: 14,
      title: 'We conducted a set of interviews',
      subtitle: 'To identify experience gaps, hesitations, and expectations influencing user behaviour.',
      body: '',
      image: '',
      caption: '',
    },
    {
      id: 'tabs-1',
      type: 'tabs',
      tabs: [
        { label: 'Methodology', 
            content: [
          
            {
            type: 'list',
            items: [
                '8 semi-structured user interviews',
                '30\–40 minutes each, remote',
                'Mix of first-time and returning visitors',
                'Focused on how users browse, evaluate products, and make decisions',
                'Interview Themes (non-leading, exploratory):',
            ]
            },
            {
            type: 'paragraph',
            content: 'Questions:'
            },
            {
                type: 'paragraph',
                content: '1. First Impressions & Site Experience'
            },
            {
            type: 'list',
            items: [
                '“Walk me through what you typically do when you open the site.”',
                '“What caught your attention first?”',
                '“Was anything confusing or unexpected?”',
            ]
            },
            {
                type: 'paragraph',
                content: '2. Product Evaluation'
            },
            {
            type: 'list',
            items: [
                '“How do you usually decide if a product is right for you?”',
                '“What info do you look for before making a purchase?”',            ]
            },
             {
                type: 'paragraph',
                content: '3. Decision-Making & Hesitation'
            },
            {
            type: 'list',
            items: [
                '“Was there anything that made you hesitate?”',
                '“What would help you feel more confident buying this?”',            ]
            },
             {
                type: 'paragraph',
                content: '4. Closing'
            },
            {
            type: 'list',
            items: [
                '“How would you describe the overall experience?”',
                '“If you could change one thing on the site, what would it be?”',            ]
            },
        ],
        },
        { label: 'Insight', 
            content: [
            {
            type: 'paragraph',
            content: 'Across the 8 interviews, several insights emerged about how users navigate and evaluate our product. A moderate but consistent pattern pointed toward uncertainty about the brand itself — not just the product details.:'
            },
            {
                type: 'paragraph',
                content: '1. Users Lacked Familiarity With the Brand'
            },
            {
                type: 'paragraph',
                content: 'Most participants (5 out of 8) casually mentioned they had never heard of the brand before encountering the site.'
            },
            {
                type: 'paragraph',
                content: '2. Missing Information Made Unfamiliarity Feel Risky'
            },
            {
                type: 'paragraph',
                content: 'Several users indicated they were looking for reassurance — such as reviews, ratings, or credentials — but didn’t find enough.'
            },
             {
                type: 'paragraph',
                content: '3. Hesitation Became a Drop-Off Trigger'
            },
            {
                type: 'paragraph',
                content: 'Most participants (5 out of 8) casually mentioned they had never heard of the brand before encountering the site.'
            },
             {
                type: 'paragraph',
                content: '4. Trust Emerged Naturally as a Theme'
            },
        ],
        },
        { label: 'Voices', 
            content: [
            {
                type: 'paragraph',
                content: '1. Information Gaps'
            },
            {
                type: 'paragraph',
                content: 'Users struggled to find product details they considered important.'
            },
            {
            type: 'list',
            items: [
                '"I was looking for a comparison or something, but couldn\'t find it."',
                '"I wanted clearer info on what makes this different."',
            ]
            },
            {
                type: 'paragraph',
                content: '2. Hard-to-Scan Product Pages'
            },
             {
                type: 'paragraph',
                content: 'Some layouts and wording felt overwhelming or unclear.'
            },
            {
            type: 'list',
            items: [
                '“There\’s a lot of text but it doesn\’t tell me what I need.”',
                '“I kind of skimmed because I didn\’t know where to look first.”',            ]
            },
             {
                type: 'paragraph',
                content: '3. Price vs. Value Ambiguity'
            },
             {
                type: 'paragraph',
                content: 'Users weren’t sure if the price matched the perceived quality.'
            },
            {
                type: 'list',
                items: [
                    '"The price looks okay but I\'m not sure what I\'m getting exactly."',
                ]
            },
             {
                type: 'paragraph',
                content: '4. Checkout Uncertainty'
            },
            {
                type: 'paragraph',
                content: 'Small friction points made the process feel less smooth.'
            },
            {
                type: 'list',
                items: [
                    '"I didn\'t click through because I wasn\'t ready to commit."',
                ]
            }
        ],
        },
        { label: 'Themes', 
            content: [
          {
                type: 'paragraph',
                content: '4 of 8 participants brought it up unprompted through comments about unfamiliarity, hesitation, lack of validation, or doubts about reliability. This aligns with the behavioural patterns we saw in analytics, suggesting: Brand unfamiliarity — and insufficient trust-building content — is a significant contributor to the performance issues we observed.'
            },
           {
            type: 'list',
            items: [
                '“Uh… I haven’t really heard of this brand before. Are their products any good?”',
                '“I usually just stick to brands I already know for this kind of stuff.”',
                '“It looks okay, but I don’t know… is this brand legit?”',
                '“This seems fine, but I’ve never heard of them. How long have they been around?”',
                '“I’m not really sure I’d trust a new brand with something like this.”',
                '“I’d probably wanna see some reviews first before believing it actually works.”',
                '“Do people even buy from this brand? I don’t think I’ve seen it anywhere.”',
                '“When a brand’s unknown, I kinda just assume the quality might be lower.”',
                '“If it’s a new brand, why should I pick it over the ones everyone already knows?”',
                '“I like the idea, but I’m not super confident in this brand’s reliability yet.”',
                '“I usually check for certifications if I don’t recognise the brand.”',
                '“Feels a bit risky to try a brand I’ve never heard of.”',
            ]
            },
        ],
         },
      ]
    },
    {
      id: 14,
      title: 'We conducted an online survey',
      subtitle: 'To statistically validate and prioritise the findings across larger user base',
      body: '',
      image: '',
      caption: '',
    },
    {
      id: 'tabs-2',
      type: 'tabs',
      tabs: [
        { label: 'Methodology', content: [
          
            {
            type: 'list',
            items: [
                'Participants: 308 users who had subscribed our website',
                'Purpose: Identify barriers to purchase and understand perceptions of our product brand',
                'Distributed via website pop-up, email, and social media',
                'Anonymous, voluntary responses',
                'Survey length: ~5–7 minutes',
                'Question types: Multiple choice / Likert scale (1–5) and open-ended feedback',
                'Focus areas: Brand recognition and familiarity, trust and confidence in the product, purchase intent and hesitations',
            ]
            },
            {
            type: 'paragraph',
            content: 'Key Questions Asked:'
            },
            {
            type: 'list',
            items: [
                'Have you heard of this brand before? (Yes / No / Not sure)',
                'How confident are you in the quality of this brand’s products? (1 = Not confident, 5 = Very confident)',
                'How likely would you be to purchase from this brand? (1–5 scale)',
                'What concerns do you have about buying from this brand? (Open-ended)',
                'What would make you trust this brand more? (Open-ended / multiple choice: reviews, certifications, social proof, etc.)',
            ]
            },
        ], 
        },
        { label: 'Results', content: [
          {
            type: 'paragraph',
            content: 'Survey results'
          },
          {
            type: 'list',
            items: [
              'Brand Awareness: 68% of respondents had never heard of the brand',
              'Confidence in Product Quality: 55% rated confidence 2 or below (out of 5)inult',
              'Purchase Intent: 60% unlikely to purchase (ratings 1–2)',
              'Concerns: Most common: “Don’t know the brand,” “No reviews,” “Not sure about quality/safety”',
              'Trust Signals Wanted: Reviews / testimonials (72%), Certifications / guarantees (65%), Social proof / influencer recommendations (48%)',
            ]
          }
        ] },
        { label: 'Insights', content: [
          {
            type: 'paragraph',
            content: 'The survey results strongly indicate that the main barrier to user engagement and purchase is lack of trust in the brand.Users are hesitant because the brand is unfamiliar and lacks visible credibility signals.'
          },
          {
            type: 'paragraph',
            content: 'When reviewing the interview results, we noticed a recurring theme: many users showed uncertainty about the brand itself. It wasn’t usually their first complaint, but it came up consistently as they talked through product pages, decision-making, and what held them back from purchasing.'
          },
          {
            type: 'paragraph',
            content: 'Common Trust-Related Comments'
          },
          {
            type: 'list',
            items: [
              '“I haven’t really heard of this brand before… so I wasn’t totally sure.”',
              '“I’d need to see more reviews before buying.”',
              '“Is this brand new? I’ve never seen it anywhere else.”',
            ]
          },
        ] },
        { label: 'Conclusion', content: [
          {
            type: 'paragraph',
            content: 'Trust concerns tended to surface alongside other issues, such as:'
          },
          {
            type: 'list',
            items: [
              'Missing or unclear product information',
              'Lack of social proof',
              'Hard-to-scan content',
              'Unclear value or differentiation',
            ]
          },
          {
            type: 'paragraph',
            content: 'Together, these created a sense of uncertainty that slowed or blocked decision-making. While trust wasn’t the strongest issue on its own, the interviews revealed it as a consistent secondary friction point. Brand unfamiliarity, combined with limited reassurance on the site, contributed significantly to hesitation across participants.'
          },
        ] },
      ]
    },
    {
      id: 15,
      type: 'html',
      html: `
        <div class="section-15">
          <img src="/images/project-1/1-15.webp" alt="section-15" class="section-15-image">
          <p class="section-15-text"></p>
        </div>
      `
    },
    {
      id: 16,
      title: 'What kept users lingering, not shopping',
      subtitle: 'Summary of users\’ needs & pain points',
      body: '',
      image: '/images/project-1/1-18.webp',
      caption: '',
    },
    {
      id: 17,
      title: 'Business considerations',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-19.webp',
      caption: '',
    },
    {
      id: 18,
      title: 'The website is one channel among many',
      subtitle: 'The multi-channel strategic purpose map',
      body: '',
      image: '/images/project-1/1-20.webp',
      caption: '',
    },
    {
      id: 19,
      title: 'So we landed on these',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-21.webp',
      caption: '',
    },
    {
      id: 20,
      type: 'html',
      html: `
        <div class="section-16">
          <img src="/images/project-1/1-16.webp" alt="section-16" class="section-16-image">
          <p class="section-16-text"></p>
        </div>
      `
    },
     {
      id: 21,
      title: 'Reliability first: Built on What Users Already Know',
      subtitle: 'Information Architecture',
      body: '',
      image: '/images/project-1/1-22.webp',
      caption: '',
    },
     {
      id: 22,
      title: 'Then, add more to the mix',
      subtitle: 'Content types',
      body: '',
      image: '/images/project-1/1-23.webp',
      caption: '',
    },
       {
      id: 23,
      title: 'All Roads Lead to a Better Navigation',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-24.webp',
      caption: '',
    },
        {
      id: 24,
      title: 'Well-Considered Data, Better Decisions',
      subtitle: 'Hierarchy & Page Structure',
      body: '',
      image: '/images/project-1/1-25.webp',
      caption: '',
    },
    {
      id: 25,
      title: 'Making Words Work Harder',
      subtitle: 'UX writings',
      body: '',
      image: '/images/project-1/1-26.webp',
      caption: '',
    },
    {
      id: 26,
      type: 'html',
      html: `
        <div class="section-17">
          <img src="/images/project-1/1-17.webp" alt="section-17" class="section-17-image">
          <p class="section-17-text"></p>
        </div>
      `
    },
    {
      id: 27,
      type: 'html',
      html: `
        <div class="section-27">
          <img src="/images/project-1/1-27.webp" alt="section-27" class="section-27-image">
          <p class="section-27-text"></p>
        </div>
      `
    },
    {
      id: 28,
      title: 'Goal: User wants to find the right sunscreen and buy it.',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-28.webp',
      caption: '',
    },
    {
      id: 29,
      title: 'Goal: User is researching about sun protection, then decides to buy.',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-29.webp',
      caption: '',
    },
    {
      id: 30,
      title: 'Goal: User wants to quickly buy a product they\’ve used before.',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-30.webp',
      caption: '',
    },
    {
      id: 31,
      title: 'Turning the Homepage Into a Clear Starting Point',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-31.webp',
      caption: '',
    },
    {
      id: 32,
      title: 'Smoother Process Through Product pages',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-32.webp',
      caption: '',
    },
    {
      id: 33,
      type: 'html',
      html: `
        <div class="section-33">
          <img src="/images/project-1/1-44.webp" alt="section-33" class="section-33-image">
          <p class="section-33-text"></p>
        </div>
      `
    },
     {
      id: 34,
      title: 'Usability Testing Overview',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-45.webp',
      caption: '',
    },
    {
      id: 35,
      title: 'Key Tasks Tested',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-46.webp',
      caption: '',
    },
    {
      id: 36,
      title: 'Success Metrics',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-33.webp',
      caption: '',
    },
    {
      id: 37,
      title: 'Brand clarity rating',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-34.webp',
      caption: '',
    },
    {
      id: 38,
      title: 'Prototypes for usability test',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-35.webp',
      caption: '',
    },
    {
      id: 39,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-36.webp',
      caption: '',
    },
    {
      id: 40,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-47.webp',
      caption: '',
    },
     {
      id: 41,
      type: 'html',
      html: `
        <div class="section-41">
          <img src="/images/project-1/1-17.webp" alt="section-41" class="section-41-image">
          <p class="section-41-text"></p>
        </div>
      `
    },
    {
      id: 42,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-38.webp',
      caption: '',
    },
    {
      id: 43,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-39.webp',
      caption: '',
    },
    {
      id: 44,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-40.webp',
      caption: '',
    },
    {
      id: 45,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-48.webp',
      caption: '',
    },
    {
      id: 46,
      title: 'Project summary',
      subtitle: '',
      body: 'Over the course of a year, we rethought the end-to-end e-commerce experience to better support different user intentions and shopping behaviours. The project focused on reducing unnecessary steps, removing visual and cognitive clutter, and creating clearer, more consistent journeys across the site. We improved visual hierarchy and content relevance, introduced more confident and human brand communication, and reduced friction across browsing, product discovery, and checkout. Together, these changes strengthened trust, clarified value, and delivered a calmer, more intuitive experience while supporting both fast and exploratory shopping journeys.',
      image: '',
      caption: '',
    },
    {
      id: 47,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-41.webp',
      caption: '',
    },
    {
      id: 48,
      title: 'Quantitative outcomes',
      subtitle: '',
      body: 'After a 14-month redesign, the website achieved strong improvements across key customer behaviour metrics: retention rate reached 23%, newsletter subscribers grew to more than 5k, bounce rate dropped to 56%, conversion rate increased to 1.4%, and average engagement time rose to 2:45 minutes, reflecting higher user engagement and more effective interactions throughout the site.',
      image: '',
      caption: '',
    },
    {
      id: 49,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-42.webp',
      caption: '',
    },
    {
      id: 50,
      title: 'Qualitative outcomes',
      subtitle: '',
      body: 'User feedback highlighted practical improvements rather than dramatic reactions. Many users described the experience as easier to navigate and less overwhelming, particularly when comparing products. Others noted that checkout felt faster and more predictable, reducing hesitation at the final step. Several users also mentioned that the site felt more trustworthy and refined, with clearer messaging and visuals that supported confidence without feeling overly promotional.',
      image: '',
      caption: '',
    },
    {
      id: 51,
      title: '',
      subtitle: '',
      body: '',
      image: '/images/project-1/1-43.webp',
      caption: '',
    },
    {
      id: 52,
      title: 'Key Takeaways',
      subtitle: '',
      body: 'This project showed that accommodating different shopping mindsets requires clear prioritisation rather than separate experiences. Small, incremental reductions in friction had a greater impact than large feature additions. Consistency across the journey played a key role in building trust and encouraging return visits. The work also reinforced that UX impact emerges gradually and must be evaluated over time. Aligning clarity, brand expression, and usability proved essential in creating sustainable improvements rather than short-term gains.',
      image: '',
      caption: '',
    },
    // {
    //   id: 40,
    //   title: 'Actions',
    //   subtitle: '',
    //   body: [
    //     {
    //       type: 'list',
    //       items: [
    //         'Item 1',
    //         'Item 2',
    //         'Item 3',
    //       ]
    //     }
    //   ],
    //   image: '',
    //   caption: '',
    // },
  ],
  category: 'UX/UI',
};
