export interface ResourceSection {
  heading: string;
  content: string;
  list?: string[];
}

export interface ResourceCTA {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface Resource {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  publishDate: string;
  tags: string[];
  relatedServices: string[];
  sections: ResourceSection[];
  cta: ResourceCTA;
}

export const resourceCategories = [
  "All",
  "Web Development",
  "SEO & Search",
  "Social Media",
  "Digital Strategy",
];

export const resources: Resource[] = [
  {
    slug: "essential-website-maintenance-checklist-2026",
    title: "The Essential Website Maintenance Checklist for 2026",
    metaTitle: "Website Maintenance Checklist 2026 | DustinTN",
    metaDescription: "Keep your website secure and fast with this essential 2026 maintenance checklist. Weekly, monthly, and quarterly tasks for small businesses. Free actionable guide.",
    category: "Web Development",
    excerpt:
      "Keep your website running smoothly with this comprehensive maintenance checklist covering security, performance, content, and more.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    readTime: "8 min read",
    publishDate: "January 15, 2026",
    tags: ["Maintenance", "Security", "Performance"],
    relatedServices: ["web-development", "web-consulting"],
    sections: [
      {
        heading: "Why Website Maintenance Matters",
        content:
          "Your website is a living, breathing part of your business. Just like a storefront needs regular upkeep, your website requires ongoing attention to stay secure, fast, and effective. Neglecting maintenance leads to security vulnerabilities, poor performance, broken features, and a frustrating experience for your visitors. A well-maintained website builds trust, ranks higher in search results, and converts more visitors into customers.",
      },
      {
        heading: "Weekly Maintenance Tasks",
        content:
          "These quick checks should become part of your weekly routine. They take just 15 to 20 minutes but can prevent major issues down the road.",
        list: [
          "Check that all pages load correctly and links work",
          "Review contact form submissions and test form functionality",
          "Monitor website uptime and page load speed",
          "Back up your website files and database",
          "Review analytics for any unusual traffic patterns or errors",
        ],
      },
      {
        heading: "Monthly Maintenance Tasks",
        content:
          "Once a month, set aside an hour for deeper maintenance tasks that keep your site in top shape.",
        list: [
          "Update your CMS, plugins, and themes to the latest versions",
          "Run a security scan for malware or vulnerabilities",
          "Check and optimize your site's loading speed",
          "Review and update content for accuracy",
          "Test your site on multiple devices and browsers",
          "Check for broken links and fix or redirect them",
        ],
      },
      {
        heading: "Quarterly Maintenance Tasks",
        content:
          "Every three months, take a broader look at your website's health and performance.",
        list: [
          "Review your SEO performance and keyword rankings",
          "Audit your website's accessibility compliance",
          "Check SSL certificate expiration and renew if needed",
          "Review and clean up unused media files and database entries",
          "Evaluate your hosting plan and performance needs",
          "Review user feedback and analytics to identify improvement areas",
        ],
      },
      {
        heading: "Annual Website Review",
        content:
          "Once a year, conduct a comprehensive review of your entire web presence. Evaluate whether your website still aligns with your business goals and brand identity. Consider design trends, new technologies, and shifting customer expectations. This is the time to plan major updates or a redesign if needed. Review your domain registration, hosting contracts, and any third-party service agreements to ensure everything is current and cost-effective.",
      },
      {
        heading: "Security Best Practices",
        content:
          "Security should be at the forefront of your maintenance strategy. Use strong, unique passwords and enable two-factor authentication for all admin accounts. Keep all software updated to patch known vulnerabilities. Implement a Web Application Firewall to block malicious traffic. Set up automated backups stored in a separate location so you can recover quickly if something goes wrong. Regularly review user accounts and remove access for anyone who no longer needs it.",
      },
    ],
    cta: {
      heading: "Need Help Keeping Your Website in Top Shape?",
      description:
        "Website maintenance can be time-consuming, especially when you're running a business. We offer ongoing maintenance plans that handle everything on this checklist and more, so you can focus on what you do best.",
      buttonText: "Get a Maintenance Plan",
      buttonHref: "/contact",
    },
  },
  {
    slug: "build-strong-online-presence-small-business",
    title: "How to Build a Strong Online Presence for Your Small Business",
    metaTitle: "Build Your Small Business Online Presence | DustinTN",
    metaDescription: "Learn how to establish a strong online presence for your small business. Step-by-step guide covering websites, SEO, social media, and content strategy.",
    category: "Digital Strategy",
    excerpt:
      "A step-by-step guide to establishing and growing your small business's online presence across websites, search, and social media.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    readTime: "10 min read",
    publishDate: "January 22, 2026",
    tags: ["Online Presence", "Small Business", "Growth"],
    relatedServices: ["digital-strategy"],
    sections: [
      {
        heading: "Your Online Presence Is Your Storefront",
        content:
          "For most small businesses today, your online presence is the first impression potential customers have of your brand. Before they walk through your door or pick up the phone, they search for you online. A strong online presence means being discoverable, credible, and engaging across the digital channels your customers use. It is not just about having a website. It is about creating a cohesive digital ecosystem that works together to attract, inform, and convert customers.",
      },
      {
        heading: "Start with a Professional Website",
        content:
          "Your website is the hub of your online presence. Everything else points back to it. Make sure your site clearly communicates who you are, what you offer, and how customers can reach you. Invest in professional design that reflects your brand values. Ensure your site is mobile-responsive since over 60 percent of web traffic comes from mobile devices. Include clear calls to action on every page, and make your contact information easy to find. Fast loading times are essential because visitors leave sites that take more than three seconds to load.",
      },
      {
        heading: "Claim and Optimize Your Business Listings",
        content:
          "Your Google Business Profile is one of the most powerful free tools available to local businesses. Claim your profile, fill out every field, add high-quality photos, and keep your hours and contact information up to date. Respond to every review, both positive and negative. Also claim your profiles on Yelp, Facebook, and any industry-specific directories. Consistency is key because your business name, address, and phone number should be identical everywhere they appear online.",
      },
      {
        heading: "Create Valuable Content",
        content:
          "Content marketing helps you attract visitors, establish expertise, and improve your search rankings. Start a blog on your website and publish articles that answer common questions your customers have. Share tips, guides, and insights related to your industry. You do not need to publish daily. One or two quality articles per month is a great starting point. Focus on being genuinely helpful rather than promotional. Over time, this content builds authority and drives organic traffic to your site.",
      },
      {
        heading: "Build a Social Media Strategy",
        content:
          "You do not need to be on every social media platform. Choose two or three platforms where your target customers are most active. For most local businesses, Facebook and Instagram are excellent starting points. Post consistently, engage with your followers, and share a mix of behind-the-scenes content, customer stories, tips, and promotions. Use your social media to drive traffic back to your website where visitors can learn more and take action.",
      },
      {
        heading: "Measure and Adjust",
        content:
          "Set up Google Analytics and Google Search Console to track how people find and interact with your website. Monitor which pages get the most traffic, where visitors come from, and what actions they take. Use this data to double down on what works and improve what does not. Review your metrics monthly and adjust your strategy accordingly. Online presence building is an ongoing process, not a one-time project.",
      },
    ],
    cta: {
      heading: "Ready to Build Your Online Presence?",
      description:
        "Building a strong online presence takes strategy and consistent effort. We help small businesses across Middle Tennessee create digital strategies that drive real results. Let us help you get found, build trust, and grow your business online.",
      buttonText: "Let's Build Your Strategy",
      buttonHref: "/contact",
    },
  },
  {
    slug: "social-media-strategy-local-businesses",
    title: "Social Media Strategy for Local Businesses: A Practical Guide",
    metaTitle: "Social Media Strategy for Local Businesses | DustinTN",
    metaDescription: "Create a social media strategy that drives results for your local business. Practical tips on platforms, content calendars, engagement, and tracking ROI.",
    category: "Social Media",
    excerpt:
      "Learn how to create an effective social media strategy that helps your local business connect with your community and drive results.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    readTime: "9 min read",
    publishDate: "February 1, 2026",
    tags: ["Social Media", "Local Business", "Strategy"],
    relatedServices: ["social-media"],
    sections: [
      {
        heading: "Why Social Media Matters for Local Businesses",
        content:
          "Social media is not just for big brands with massive budgets. For local businesses, it is one of the most effective and affordable ways to connect with your community, build relationships, and drive foot traffic. People use social media to discover local businesses, read reviews, and decide where to spend their money. If you are not showing up in their feed, your competitors are.",
      },
      {
        heading: "Choose the Right Platforms",
        content:
          "The biggest mistake local businesses make is trying to be everywhere at once. Instead, focus your energy on one or two platforms where your customers actually spend time. Facebook is excellent for local businesses because of its community groups, event features, and detailed business pages. Instagram works well for businesses with visual appeal like restaurants, salons, fitness studios, and retail shops. LinkedIn is ideal for B2B services and professional consulting. Pick the platforms that match your audience and commit to them fully before expanding.",
      },
      {
        heading: "Create a Content Calendar",
        content:
          "Consistency beats perfection on social media. Create a simple content calendar that outlines what you will post and when. Aim for three to five posts per week on your primary platform. Mix your content types to keep things interesting.",
        list: [
          "Behind-the-scenes looks at your business",
          "Customer spotlights and testimonials",
          "Tips and educational content related to your industry",
          "Local community events and involvement",
          "Promotions, offers, and new product or service announcements",
          "Team introductions and company culture",
        ],
      },
      {
        heading: "Engage, Don't Just Broadcast",
        content:
          "Social media is a two-way conversation. Respond to every comment and message promptly. Ask questions in your posts to encourage engagement. Share and comment on posts from other local businesses and community organizations. Join local Facebook groups and participate genuinely without being overly promotional. The businesses that succeed on social media are the ones that build real relationships, not just broadcast advertisements.",
      },
      {
        heading: "Use Local Hashtags and Geotags",
        content:
          "Make your content discoverable to local audiences by using location-specific hashtags and geotags. Include your city and neighborhood in relevant posts. Create a branded hashtag that customers can use when sharing their experiences. Research popular local hashtags in your area and incorporate them naturally into your posts. On Instagram, always tag your location to appear in local search results and the Explore page for your area.",
      },
      {
        heading: "Track Your Results",
        content:
          "Every social media platform offers built-in analytics tools. Review your metrics weekly to understand what content resonates with your audience. Pay attention to engagement rate rather than just follower count. Track which posts drive the most website clicks, phone calls, or direction requests. Use these insights to refine your strategy over time. Social media success is about continuous improvement, and the data will show you the way.",
      },
    ],
    cta: {
      heading: "Need Help With Your Social Media?",
      description:
        "Managing social media while running a business is a lot to handle. We help local businesses create and execute social media strategies that build community engagement and drive real business results.",
      buttonText: "Get Social Media Help",
      buttonHref: "/contact",
    },
  },
  {
    slug: "30-day-website-launch-action-plan",
    title: "Your 30-Day Website Launch Action Plan",
    metaTitle: "30-Day Website Launch Plan for Businesses | DustinTN",
    metaDescription: "Launch your website in 30 days with this free action plan. Day-by-day tasks covering planning, design, development, testing, and a successful go-live.",
    category: "Web Development",
    excerpt:
      "A day-by-day action plan to take your new website from concept to launch in 30 days, with practical steps for each phase.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80",
    readTime: "11 min read",
    publishDate: "February 5, 2026",
    tags: ["Website Launch", "Action Plan", "Planning"],
    relatedServices: ["web-development", "web-consulting"],
    sections: [
      {
        heading: "Why You Need a Launch Plan",
        content:
          "Launching a website without a plan is like opening a store without stocking the shelves. A structured approach ensures nothing falls through the cracks and your site makes the best possible first impression. This 30-day action plan breaks the entire process into manageable phases, whether you are building a brand-new website or redesigning an existing one. Follow it step by step, and you will launch with confidence.",
      },
      {
        heading: "Week 1: Foundation and Planning (Days 1-7)",
        content:
          "The first week is all about laying the groundwork. Rushed planning leads to costly changes later.",
        list: [
          "Day 1-2: Define your website goals and target audience in writing",
          "Day 3: Research five competitor websites and note what works and what does not",
          "Day 4: Create a sitemap listing every page your site needs",
          "Day 5: Write your unique value proposition and key messaging",
          "Day 6: Gather brand assets including logo, colors, fonts, and photos",
          "Day 7: Choose your domain name and hosting provider",
        ],
      },
      {
        heading: "Week 2: Content and Design (Days 8-14)",
        content:
          "With your foundation set, it is time to create the content and visual direction for your site.",
        list: [
          "Day 8-9: Write content for your homepage, about page, and contact page",
          "Day 10-11: Write content for your service or product pages",
          "Day 12: Select or create images and graphics for each page",
          "Day 13: Design wireframes or mockups for key pages",
          "Day 14: Review all content and design for consistency and accuracy",
        ],
      },
      {
        heading: "Week 3: Development and Build (Days 15-21)",
        content:
          "Now the build begins. Whether you are using a website builder or working with a developer, this is when your site comes to life.",
        list: [
          "Day 15-17: Build out page layouts and add content",
          "Day 18: Set up contact forms and test form submissions",
          "Day 19: Add SEO elements including title tags, meta descriptions, and alt text",
          "Day 20: Install analytics tracking with Google Analytics and Search Console",
          "Day 21: Set up your Google Business Profile and link it to your website",
        ],
      },
      {
        heading: "Week 4: Testing and Launch (Days 22-30)",
        content:
          "The final stretch focuses on thorough testing and a smooth launch.",
        list: [
          "Day 22-23: Test every page on desktop, tablet, and mobile devices",
          "Day 24: Test all forms, links, and interactive elements",
          "Day 25: Check page load speed and optimize images if needed",
          "Day 26: Review accessibility compliance and fix any issues",
          "Day 27: Set up website backups and security measures",
          "Day 28: Do a final content review for typos and accuracy",
          "Day 29: Launch your website and submit sitemap to Google",
          "Day 30: Announce your launch on social media and email",
        ],
      },
      {
        heading: "After Launch: Keep the Momentum Going",
        content:
          "Launching your website is just the beginning. In the weeks following your launch, monitor your analytics to see how visitors are finding and using your site. Gather feedback from customers and make adjustments based on real data. Start publishing blog content to attract organic traffic. Keep your content fresh and your software updated. Set a monthly maintenance schedule and stick to it. The most successful websites are the ones that evolve with the business they represent.",
      },
    ],
    cta: {
      heading: "Want Expert Help Launching Your Website?",
      description:
        "Building a website is a significant investment of time and energy. Our team handles everything from planning to launch and beyond, so you can focus on running your business while we build your digital presence.",
      buttonText: "Start Your Website Project",
      buttonHref: "/contact",
    },
  },
  {
    slug: "10-seo-tips-small-business-2026",
    title: "10 SEO Tips Every Small Business Needs in 2026",
    metaTitle: "10 SEO Tips for Small Businesses in 2026 | DustinTN",
    metaDescription: "Boost your search rankings with these 10 actionable SEO tips for small businesses. Covers local SEO, Google Business Profile, speed, content, and more.",
    category: "SEO & Search",
    excerpt:
      "Practical, actionable SEO tips that help small businesses improve their search visibility and attract more local customers.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    readTime: "9 min read",
    publishDate: "February 10, 2026",
    tags: ["SEO", "Small Business", "Search Rankings"],
    relatedServices: ["seo-content"],
    sections: [
      {
        heading: "SEO Is Not Optional Anymore",
        content:
          "Search engine optimization is no longer a nice-to-have. It is essential for any business that wants to be found online. When someone in your area searches for the products or services you offer, you need to show up. The good news is that effective SEO does not require a massive budget or technical expertise. These ten tips are practical, actionable, and designed specifically for small businesses that want to compete in local search results.",
      },
      {
        heading: "1. Optimize Your Google Business Profile",
        content:
          "Your Google Business Profile is arguably the most important SEO asset for local businesses. Fill out every single field. Add high-quality photos of your business, products, and team. Post updates regularly. Respond to every review. Keep your hours accurate, especially around holidays. A complete, active Google Business Profile dramatically improves your chances of appearing in the local map pack, which is the first thing many searchers see.",
      },
      {
        heading: "2. Focus on Local Keywords",
        content:
          "Think about how your customers search for businesses like yours. They do not search for just plumber or dentist. They search for plumber in Hendersonville TN or best dentist near Gallatin. Include your city and region in your page titles, headings, meta descriptions, and content. Create separate pages for each service you offer and include location-specific information on each one.",
      },
      {
        heading: "3. Make Your Website Fast",
        content:
          "Page speed is a ranking factor that directly affects your bottom line. Every second of delay reduces conversions by an average of seven percent. Optimize your images, use modern image formats like WebP, enable browser caching, and minimize unnecessary scripts. Test your site speed regularly using Google PageSpeed Insights and address any issues it identifies.",
      },
      {
        heading: "4. Create Helpful Content",
        content:
          "Google's helpful content system rewards websites that provide genuinely useful information. Write blog posts that answer questions your customers actually ask. Create guides, how-to articles, and resource pages related to your industry. Do not write for search engines. Write for people, and the rankings will follow. Aim for depth over quantity and make every piece of content the best resource available on its topic.",
      },
      {
        heading: "5. Optimize for Mobile First",
        content:
          "Google uses mobile-first indexing, which means it primarily uses the mobile version of your site for ranking. Make sure your website looks and works perfectly on phones and tablets. Use readable font sizes, ensure buttons are easy to tap, and avoid horizontal scrolling. Test your mobile experience regularly because what looks fine on your desktop may be frustrating on a small screen.",
      },
      {
        heading: "6. Build Quality Backlinks",
        content:
          "Backlinks from other reputable websites signal to Google that your site is trustworthy. Focus on earning links from local business directories, industry associations, local news outlets, and community organizations. Sponsor local events, join your chamber of commerce, and create shareable content that others naturally want to link to. Quality matters far more than quantity when it comes to backlinks.",
      },
      {
        heading: "7. Use Schema Markup",
        content:
          "Schema markup is structured data that helps search engines understand your content better. Add LocalBusiness schema to your website with your business name, address, phone number, hours, and services. This can lead to rich results in search listings, including star ratings, business hours, and other eye-catching details that improve click-through rates.",
      },
      {
        heading: "8. Optimize Your Title Tags and Meta Descriptions",
        content:
          "Your title tags and meta descriptions are your search result advertisements. Write compelling titles under 60 characters that include your primary keyword and location. Write meta descriptions under 160 characters that clearly explain what the page offers and include a reason to click. Each page on your site should have unique title tags and meta descriptions.",
      },
      {
        heading: "9. Get More Reviews",
        content:
          "Online reviews are a significant ranking factor for local SEO. Ask satisfied customers to leave reviews on Google, Yelp, and other relevant platforms. Make it easy by providing direct links to your review profiles. Always respond to reviews professionally because your responses show potential customers how you handle feedback. A steady stream of recent reviews signals to search engines that your business is active and trusted.",
      },
      {
        heading: "10. Monitor and Adapt",
        content:
          "SEO is an ongoing process, not a one-time project. Set up Google Search Console to monitor your search performance. Track which keywords drive traffic, which pages rank well, and where you are losing visibility. Review your metrics monthly and adjust your strategy based on what the data tells you. The search landscape changes constantly, and the businesses that stay on top are the ones that keep adapting.",
      },
    ],
    cta: {
      heading: "Want to Improve Your Search Rankings?",
      description:
        "SEO takes time and expertise to get right. Our team helps small businesses across Middle Tennessee improve their search visibility with proven strategies tailored to local markets. Let us help you get found by the customers who are already looking for you.",
      buttonText: "Get an SEO Consultation",
      buttonHref: "/contact",
    },
  },
  {
    slug: "digital-marketing-trends-2026",
    title: "Digital Marketing Trends That Matter in 2026",
    metaTitle: "Digital Marketing Trends 2026 That Matter | DustinTN",
    metaDescription: "Discover the digital marketing trends actually impacting businesses in 2026. AI personalization, short-form video, first-party data, and local SEO insights.",
    category: "Digital Strategy",
    excerpt:
      "Cut through the hype and focus on the digital marketing trends that will actually impact your business this year.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    readTime: "8 min read",
    publishDate: "February 14, 2026",
    tags: ["Digital Marketing", "Trends", "2026"],
    relatedServices: ["digital-strategy"],
    sections: [
      {
        heading: "Separating Signal from Noise",
        content:
          "Every year brings a flood of trend predictions, but not all of them matter for your business. Instead of chasing every new shiny object, smart businesses focus on the trends that align with their goals and their customers' behavior. Here are the digital marketing trends that are actually making a difference in 2026 and practical ways to put them to work for your business.",
      },
      {
        heading: "AI-Powered Personalization",
        content:
          "Artificial intelligence is making it easier than ever to deliver personalized experiences at scale. For small businesses, this means smarter email marketing that segments and personalizes automatically, chatbots that handle common customer questions around the clock, and website experiences that adapt to visitor behavior. You do not need to build custom AI tools. Many affordable marketing platforms now include AI features that small businesses can use right out of the box.",
      },
      {
        heading: "Short-Form Video Dominance",
        content:
          "Short-form video continues to be the most engaging content format across platforms. Instagram Reels, TikTok, and YouTube Shorts all favor quick, authentic video content over polished productions. For local businesses, this is great news because you can create effective short videos with just a smartphone. Show behind-the-scenes moments, share quick tips, introduce your team, or showcase your work. Authenticity resonates more than production value.",
      },
      {
        heading: "First-Party Data and Privacy",
        content:
          "As third-party cookies continue to disappear, businesses that collect and use their own customer data will have a significant advantage. Build your email list. Use your website analytics wisely. Create loyalty programs that incentivize customers to share their preferences. First-party data is more valuable and more reliable than third-party data, and it puts you in control of your marketing without depending on platforms that change their rules constantly.",
      },
      {
        heading: "Local SEO Gets More Competitive",
        content:
          "More businesses are investing in local SEO, which means the competition for local search visibility is increasing. Staying ahead requires consistent effort on your Google Business Profile, regular fresh content, a growing collection of positive reviews, and a mobile-optimized website that loads quickly. Businesses that treat local SEO as an ongoing strategy rather than a one-time setup will maintain their competitive edge.",
      },
      {
        heading: "Voice and Visual Search Growth",
        content:
          "People are increasingly using voice assistants and visual search to find local businesses. Optimize for voice search by including conversational, question-based content on your website. Use structured data markup to help search engines understand your content. For visual search, ensure your images are high quality, properly tagged with descriptive alt text, and relevant to your business. These search methods are growing steadily and favor businesses that prepare for them now.",
      },
      {
        heading: "What This Means for Your Business",
        content:
          "You do not need to adopt every trend at once. Start with the areas where you see the biggest opportunity for your business. If you have not optimized for local search yet, that should be your first priority. If your social media content is stale, experiment with short-form video. If you are still relying on third-party data, start building your email list today. The key is consistent progress, not perfection. Pick one or two areas to focus on each quarter and build from there.",
      },
    ],
    cta: {
      heading: "Need a Digital Strategy That Actually Works?",
      description:
        "Trends come and go, but a solid digital strategy gives your business a sustainable competitive advantage. We help businesses across Middle Tennessee build digital strategies that drive growth today and adapt to what comes tomorrow.",
      buttonText: "Build Your Digital Strategy",
      buttonHref: "/contact",
    },
  },
  {
    slug: "complete-guide-google-business-profile",
    title: "The Complete Guide to Optimizing Your Google Business Profile",
    metaTitle: "Google Business Profile Optimization Guide | DustinTN",
    metaDescription: "Optimize your Google Business Profile to attract more local customers. Complete guide to setup, photos, reviews, posts, and tracking your performance.",
    category: "SEO & Search",
    excerpt:
      "Everything you need to know about setting up and optimizing your Google Business Profile to attract more local customers.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    readTime: "10 min read",
    publishDate: "February 18, 2026",
    tags: ["Google Business", "Local SEO", "Reviews"],
    relatedServices: ["seo-content", "social-media"],
    sections: [
      {
        heading: "Your Most Important Free Marketing Tool",
        content:
          "Your Google Business Profile is likely the single most impactful free marketing tool available to local businesses. When someone searches for your type of business in your area, your Google Business Profile determines whether you appear in the local map pack, those prominent results at the top of the page. A well-optimized profile can drive more phone calls, website visits, and direction requests than any paid advertising campaign. Yet many businesses leave theirs incomplete or outdated.",
      },
      {
        heading: "Setting Up Your Profile",
        content:
          "If you have not claimed your Google Business Profile yet, start there. Go to business.google.com and either claim your existing listing or create a new one. Google will verify your ownership, usually through a postcard, phone call, or email. Once verified, you have control over how your business appears in Google Search and Maps.",
        list: [
          "Use your exact legal business name without extra keywords",
          "Choose the most accurate primary category for your business",
          "Add secondary categories that describe additional services",
          "Enter your complete street address or service area",
          "Add your phone number and website URL",
          "Set your regular and special hours accurately",
        ],
      },
      {
        heading: "Optimizing Your Business Description",
        content:
          "Your business description is your chance to tell potential customers what makes you unique. You have 750 characters, and the first 250 are the most important because they show before the Read More link. Lead with your most compelling selling point. Include your primary services, your service area, and what sets you apart from competitors. Use natural language that includes relevant keywords but reads well for humans. Do not stuff keywords or use all caps.",
      },
      {
        heading: "Photos Make a Huge Difference",
        content:
          "Businesses with photos receive 42 percent more requests for directions and 35 percent more clicks to their website than those without. Add high-quality photos of your storefront, interior, products, team, and work. Update photos regularly to show that your business is active. Include a clear logo and cover photo. Aim for at least 10 photos to start, and add new ones monthly. Let customers upload their own photos too, as user-generated content builds trust.",
      },
      {
        heading: "Managing Reviews Effectively",
        content:
          "Reviews are one of the strongest ranking factors for local search. Actively encourage satisfied customers to leave reviews by asking at the point of sale, including review links in follow-up emails, and making the process as simple as possible. Respond to every review within 24 to 48 hours. Thank positive reviewers specifically for what they mentioned. Address negative reviews professionally, acknowledge the concern, explain what you are doing about it, and offer to continue the conversation offline.",
      },
      {
        heading: "Google Posts and Updates",
        content:
          "Google Posts let you share updates, offers, events, and products directly on your profile. Post at least once a week to keep your profile active. Share seasonal promotions, new services, blog posts, upcoming events, or tips related to your business. Posts expire after seven days for most types, so regular posting keeps your profile fresh. Include a call-to-action button on every post to drive specific actions like calling your business, visiting your website, or making a booking.",
      },
      {
        heading: "Products and Services",
        content:
          "Take advantage of the Products and Services sections of your profile. List your key offerings with descriptions and prices where applicable. This gives potential customers immediate information without needing to visit your website. Keep this section updated as your offerings change. Well-organized products and services also help Google understand what your business does, which can improve your ranking for relevant searches.",
      },
      {
        heading: "Tracking Your Performance",
        content:
          "Google Business Profile provides built-in insights that show you how customers find your business, what actions they take, and how you compare to similar businesses. Review your insights monthly to understand which search queries drive the most visibility, whether customers are finding you through direct or discovery searches, and which photos generate the most engagement. Use these insights to refine your profile and your overall local marketing strategy.",
      },
    ],
    cta: {
      heading: "Want Expert Help With Your Google Presence?",
      description:
        "A fully optimized Google Business Profile can be a game-changer for local businesses. Our team helps businesses across Middle Tennessee set up, optimize, and manage their Google presence to maximize local visibility and customer engagement.",
      buttonText: "Optimize My Google Profile",
      buttonHref: "/contact",
    },
  },
  {
    slug: "30-day-social-media-action-plan",
    title: "Your 30-Day Social Media Action Plan",
    metaTitle: "30-Day Social Media Action Plan for Business | DustinTN",
    metaDescription: "Build your social media presence in 30 days with this free action plan. Daily tasks for auditing, content creation, engagement, and sustainable growth.",
    category: "Social Media",
    excerpt:
      "A practical, day-by-day plan to build your social media presence from scratch or breathe new life into existing accounts.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
    readTime: "10 min read",
    publishDate: "February 22, 2026",
    tags: ["Social Media", "Action Plan", "30 Days"],
    relatedServices: ["social-media"],
    sections: [
      {
        heading: "From Overwhelmed to Organized in 30 Days",
        content:
          "Social media can feel overwhelming, especially when you are managing it alongside running your business. This 30-day action plan gives you a structured, step-by-step approach to building or revitalizing your social media presence. Each day has a specific task that builds on the previous one, so by the end of the month you will have a solid foundation and a clear path forward.",
      },
      {
        heading: "Week 1: Audit and Strategy (Days 1-7)",
        content:
          "Before you post anything new, take stock of where you are and where you want to go.",
        list: [
          "Day 1: Audit your current social media accounts. Note follower counts, posting frequency, and engagement rates",
          "Day 2: Research your top five competitors on social media. Note what they do well and where they fall short",
          "Day 3: Define your target audience. Write down their demographics, interests, and which platforms they use",
          "Day 4: Set three specific, measurable goals for the next 90 days",
          "Day 5: Choose your primary platform and one secondary platform to focus on",
          "Day 6: Update your profile photos, bios, and contact information on all platforms",
          "Day 7: Create a content theme list with five to seven content categories you will rotate through",
        ],
      },
      {
        heading: "Week 2: Content Foundation (Days 8-14)",
        content:
          "Now build the content engine that will keep your social media running smoothly.",
        list: [
          "Day 8: Take 20 or more photos and videos of your business, team, products, and workspace",
          "Day 9: Write 10 caption drafts using your content themes",
          "Day 10: Create a simple content calendar for the next two weeks",
          "Day 11: Design three to five branded templates for posts using Canva or similar tools",
          "Day 12: Publish your first planned post and engage with 10 accounts in your community",
          "Day 13: Share a behind-the-scenes look at your business",
          "Day 14: Post a tip or educational piece related to your industry",
        ],
      },
      {
        heading: "Week 3: Engagement and Growth (Days 15-21)",
        content:
          "With content flowing, shift your focus to building relationships and growing your audience.",
        list: [
          "Day 15: Follow and engage with 20 local businesses and community accounts",
          "Day 16: Respond to every comment and message in your inbox",
          "Day 17: Share a customer story or testimonial with their permission",
          "Day 18: Post your first short-form video, even just 15 to 30 seconds",
          "Day 19: Join two to three local Facebook groups and participate in conversations",
          "Day 20: Cross-promote your social media on your website, email signature, and business cards",
          "Day 21: Run a simple engagement post like a question, poll, or this-or-that",
        ],
      },
      {
        heading: "Week 4: Optimize and Sustain (Days 22-30)",
        content:
          "The final week is about reviewing what works and setting up systems for long-term success.",
        list: [
          "Day 22: Review your analytics. Which posts got the most engagement?",
          "Day 23: Create a batch of content for the next two weeks based on your top-performing post types",
          "Day 24: Set up a posting schedule using a free scheduling tool like Meta Business Suite",
          "Day 25: Ask three happy customers to leave reviews on your Google or Facebook profile",
          "Day 26: Experiment with a new content format you have not tried yet",
          "Day 27: Plan a simple promotion or offer exclusive to your social media followers",
          "Day 28: Document your social media process so you or a team member can follow it consistently",
          "Day 29: Set goals for next month based on what you learned",
          "Day 30: Celebrate your progress and share a milestone post with your audience",
        ],
      },
      {
        heading: "Keeping the Momentum Going",
        content:
          "After 30 days, you will have a functioning social media system. The key to long-term success is consistency. Block 30 minutes each day for social media management: 15 minutes for creating and scheduling content, and 15 minutes for engaging with your community. Batch-create content weekly so you are never scrambling for something to post. Review your analytics monthly and adjust your strategy based on what the data shows. Social media is a marathon, not a sprint, and the businesses that show up consistently are the ones that win.",
      },
    ],
    cta: {
      heading: "Want Professional Social Media Management?",
      description:
        "Building a social media presence takes time and consistency. If you would rather focus on running your business, our team can manage your social media strategy, content creation, and community engagement for you.",
      buttonText: "Get Social Media Support",
      buttonHref: "/contact",
    },
  },
  {
    slug: "choose-right-website-platform-small-business",
    title: "How to Choose the Right Website Platform for Your Business",
    metaTitle: "Choose the Right Website Platform for Business | DustinTN",
    metaDescription: "Compare WordPress, Squarespace, Wix, Shopify, and custom-built websites. Find the best platform for your small business goals, budget, and growth plans.",
    category: "Web Development",
    excerpt:
      "WordPress, Squarespace, Wix, Shopify, or custom? Compare the most popular website platforms and find the right fit for your business goals and budget.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    readTime: "9 min read",
    publishDate: "February 28, 2026",
    tags: ["Platforms", "WordPress", "Small Business"],
    relatedServices: ["web-development", "web-consulting"],
    sections: [
      {
        heading: "Why Your Platform Choice Matters",
        content:
          "Choosing a website platform is one of the most important decisions you will make for your online presence. The wrong choice can cost you time, money, and opportunities down the road. The right platform aligns with your business goals, your technical comfort level, and your growth plans. There is no single best platform for every business, so understanding the strengths and trade-offs of each option is essential before you commit.",
      },
      {
        heading: "WordPress: The Most Flexible Option",
        content:
          "WordPress powers over 40 percent of all websites on the internet, and for good reason. It is incredibly flexible, with thousands of themes and plugins that can extend your site to do almost anything. WordPress is ideal for businesses that want full control over their website and plan to scale over time. However, it requires regular updates, security maintenance, and some technical knowledge to manage effectively. Hosting, backups, and security are your responsibility.",
        list: [
          "Best for: Blogs, business websites, membership sites, and complex projects",
          "Pros: Unlimited customization, massive plugin ecosystem, SEO-friendly",
          "Cons: Requires maintenance, steeper learning curve, hosting costs extra",
          "Cost: Free software plus hosting ($10 to $50 per month) and premium themes or plugins",
        ],
      },
      {
        heading: "Squarespace: Beautiful and Simple",
        content:
          "Squarespace is known for its stunning design templates and all-in-one simplicity. Everything is included: hosting, security, and a drag-and-drop editor. It is perfect for businesses that prioritize visual presentation and want a polished site without managing technical details. The trade-off is less flexibility than WordPress and limited third-party integrations. Customization beyond the template options can be challenging.",
        list: [
          "Best for: Portfolios, restaurants, creative businesses, and service providers",
          "Pros: Beautiful templates, all-in-one hosting, easy to use, built-in analytics",
          "Cons: Limited customization, fewer integrations, harder to migrate away from",
          "Cost: $16 to $49 per month depending on the plan",
        ],
      },
      {
        heading: "Wix: Quick and Beginner-Friendly",
        content:
          "Wix makes it easy for anyone to build a website quickly with its intuitive drag-and-drop editor and AI website builder. It is great for small businesses that need to get online fast without a steep learning curve. Wix offers a free tier with limitations and paid plans for more features. The downside is that Wix sites can be slower, SEO capabilities are more limited, and migrating to another platform later is difficult.",
        list: [
          "Best for: Very small businesses, personal sites, and getting started quickly",
          "Pros: Easy editor, AI builder, affordable, large app marketplace",
          "Cons: Slower performance, limited SEO, difficult to migrate, branded free tier",
          "Cost: Free with Wix branding, or $17 to $159 per month for premium plans",
        ],
      },
      {
        heading: "Shopify: Built for Selling",
        content:
          "If your primary goal is selling products online, Shopify is purpose-built for e-commerce. It handles inventory management, payment processing, shipping, and taxes out of the box. The platform is reliable, secure, and scales with your business. For businesses that also need robust content pages or blogging, Shopify is more limited. Its transaction fees and app costs can add up quickly.",
        list: [
          "Best for: Online stores, retail businesses, product-based businesses",
          "Pros: Powerful e-commerce tools, secure payments, inventory management, app ecosystem",
          "Cons: Transaction fees, limited content flexibility, costs add up with apps",
          "Cost: $39 to $399 per month plus transaction fees and app subscriptions",
        ],
      },
      {
        heading: "Custom-Built: Maximum Control and Performance",
        content:
          "A custom-built website using modern frameworks like Next.js, React, or similar technologies gives you complete control over every aspect of your site. Custom sites deliver the best performance, security, and user experience because they are built specifically for your business needs with no unnecessary bloat. The investment is higher upfront, but you own everything and are not locked into any platform. This is the ideal choice for businesses that need unique functionality, exceptional performance, or plan to scale significantly.",
        list: [
          "Best for: Growing businesses, unique requirements, performance-critical sites",
          "Pros: Complete control, best performance, no platform limitations, you own everything",
          "Cons: Higher upfront investment, requires a developer for changes",
          "Cost: Varies based on project scope, typically starts at $3,000 and up",
        ],
      },
      {
        heading: "How to Make Your Decision",
        content:
          "Start by listing your must-have features and your nice-to-haves. Consider your budget not just for building the site but for ongoing costs like hosting, plugins, and maintenance. Think about where your business will be in two to three years and whether your platform can grow with you. If you are not sure, a free consultation with a web professional can save you from an expensive mistake. The best platform is the one that fits your business today and can scale with you tomorrow.",
      },
    ],
    cta: {
      heading: "Need Help Choosing the Right Platform?",
      description:
        "Picking the wrong platform can cost your business time and money. We help small businesses evaluate their options and make the right choice based on their goals, budget, and growth plans. Let us take the guesswork out of it.",
      buttonText: "Get Platform Advice",
      buttonHref: "/free-consultation",
    },
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourcesForService(
  serviceSlug: string,
  limit?: number
): Resource[] {
  const filtered = resources.filter((r) =>
    r.relatedServices.includes(serviceSlug)
  );
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getRelatedResources(
  currentSlug: string,
  category?: string,
  limit = 3
): Resource[] {
  let related = resources.filter((r) => r.slug !== currentSlug);
  if (category) {
    const categoryMatches = related.filter((r) => r.category === category);
    if (categoryMatches.length >= limit) {
      return categoryMatches.slice(0, limit);
    }
    const rest = related.filter((r) => r.category !== category);
    related = [...categoryMatches, ...rest];
  }
  return related.slice(0, limit);
}
