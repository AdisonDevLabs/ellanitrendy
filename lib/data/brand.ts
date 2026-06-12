// lib/data/brand.ts
import { Truck, MessageCircle, Star, Sparkles, Tag, CheckCircle, ShieldCheck } from 'lucide-react';

export const brand = {
  name: "Ellani Trendy Collections",
  shortName: "Ellani Trendy",
  logo: "/elani-trendy-logo.jpeg",
  tagline: "Look effortlessly elegant and classy 🌸",
  description:
    "Premium ladies' fashion boutique and designer footwear collection. Specializing in elegant pantsuits, matching co-ord sets, premium chunky platform sneakers, luxury loafers, and high-quality thrifted ladies' clothes.",
  location: "Tamasha Business Centre, Kahawa West, Nairobi",
  seo: {
    title: "Ellani Trendy Collections | Premium Ladies Outfits & Chunky Sneakers",
    description: "Shop elegant ladies' pantsuits, matching sets, chunky platform sneakers, luxury loafers, and thrifted fashion. Visit us at Tamasha Business Centre in Kahawa West or order via WhatsApp.",
  },

  hero: {
    badge: "7K+ Followers on TikTok ✨",
    headlineTop: "STEP OUT IN",
    headlineHighlight: "ELEGANCE",
    backgroundImage: "/Nike Air Sport Sneaker.png", 
    ctaPrimary: "Order on WhatsApp",
    ctaSecondary: "Shop Collection",
  },

  sections: {
    featured: {
      title: "Featured Collections",
      subtitle: "Find your perfect look. Browse through structured pantsuits, cozy co-ord sets, and statement platform sneakers."
    },
    flashDeals: {
      badge: "Live Offers",
      title: "Flash Deals",
      subtitle: "Grab customer favorites like our Creme White Chunky Sneakers at unbeatable prices before stocks run out.",
      cta: "View All Deals"
    },
    newArrivals: {
      badge: "Just Dropped",
      title: "Latest Styles",
      subtitle: "Fresh items added weekly directly from our TikTok catalog — be the first to own the trendiest drops.",
      cta: "View All Arrivals",
      trendingBadgePrefix: "Trending in" 
    },
    bestSellers: {
      badge: "Customer Favorites",
      title: "BEST SELLERS",
      subtitle: "Highly reviewed and loved by style enthusiasts in Kahawa West and across Kenya.",
      cta: "View All Favorites"
    },
    whyUs: {
      badge: "Trust & Reliability",
      titleTop: "WHY SHOP WITH",
      subtitle: "We offer top-tier design curation, reliable sizing guidance, and an easy localized boutique shopping experience."
    },
    reviews: {
      badge: "Real Feedback from TikTok & WhatsApp",
      titleTop: "WHAT OUR",
      titleBottom: "CUSTOMERS SAY"
    },
    whatsappCta: {
      badge: "We Are Active",
      titleTop: "START YOUR",
      titleBottom: "ORDER NOW",
      subtitle: "Chat with us directly on WhatsApp to secure your size and confirm store pickup or countrywide delivery details."
    }
  },

  whatsappNumber: "254797088638",
  whatsappMessage: {
    general:
      "Hello Ellani Trendy Collections,\n\nI would like to place an order.\n\nItem Screenshot/Name:\n\nSize:\nPreferred Colour:\n\nDelivery/Pickup Location:\n\nPlease confirm availability. Thank you!",
  },
  socialLinks: {
    instagram: "https://instagram.com/ellani_trendy_collections",
    facebook: "https://facebook.com/ellani_trendy_collections",
    tiktok: "https://tiktok.com/@ellanitrendycollections21",
  },
  deliveryInfo: {
    standard: "Countrywide delivery via safe courier services",
    nairobi: "Store pickup available at Tamasha Business Centre, Kahawa West, Nairobi",
  },
  trustStatements: [
    "17K+ TikTok Community",
    "Premium Quality Guaranteed",
    "Easy WhatsApp Ordering",
    "Effortlessly Elegant & Classy",
  ],
  features: [
    {
      title: "Elegant Apparel & Sets",
      description: "Carefully selected pantsuits, co-ords, and premium thrifted items that prioritize exquisite detailing, quality fabrics, and daily comfort."
    },
    {
      title: "Chunky & Premium Footwear",
      description: "From aesthetic platform sneakers to sleek suede loafers and strappy gladiator sandals, we have options to elevate any look."
    },
    {
      title: "Locally Trusted Boutique",
      description: "Ditch the online guesswork—visit our physical retail location directly at Tamasha Business Centre in Kahawa West."
    },
    {
      title: "Instant WhatsApp Support",
      description: "No complex dynamic checkout flows—just forward a screenshot of the outfit or shoes you spotted on TikTok to lock down your fit."
    }
  ],
  whatsappTrustSignals: [
    "Replies within minutes",
    "Secure payment on confirmation",
    "Fast parcel delivery across Kenya",
    "Verified Kahawa West Fashion Hub"
  ],
  whatsappMockChat: [
    {
      sender: "user",
      text: `Hello Ellani Trendy Collections!

I'd like to order:

• Creme White Chunky Platform Sneakers
Size: 38

Pickup: Tamasha Business Centre

Subtotal: KSh 2,600

Are these still in stock for pickup today?`,
      time: "02:14 PM"
    },
    {
      sender: "brand",
      text: `Hello! Yes, size 38 is fully stocked at our Tamasha Business Centre boutique. 

We can hold them for you. You can pay via cash or M-Pesa upon arrival. See you soon! 😊`,
      time: "02:16 PM"
    }
  ],
  salesCallout: "Look Effortlessly Elegant & Classy 🌸",
  
  featuredImages: [
    "1000678458.png",
    "1000678459.png",
    "1000678464.png",
    "1000678465.png",
    "1000678468.png",
    "1000678469.png",
    "1000678471.png",
    "1000678486.png",
    "1000678487.png",
    "1000678488.png",
    "1000678489.png"
  ]
};

export const announcementMessages = [
  { text: "Visit Us at Tamasha Business Centre, Kahawa West", icon: Star },
  { text: "Order Easily Via WhatsApp (0797088638)", icon: MessageCircle },
  { text: "7K+ Followers on TikTok Portfolio", icon: Sparkles },
  { text: "Premium Matching Sets & Chunky Sneakers Available", icon: Tag },
  { text: "Reliable Shipping Countrywide", icon: Truck },
];

export const cartTrustFeatures = [
  { text: "Countrywide Shipping / Store Pickup", icon: Truck },
  { text: "Premium Curation Selection", icon: CheckCircle },
  { text: "Secure Direct Checkout Support", icon: ShieldCheck },
  { text: "WhatsApp Store Management", icon: MessageCircle },
];

export const footerQuickShopLinks = [
  { label: "Matching Sets & Co-ords", href: "/shop?category=matching-sets" },
  { label: "Elegant Pantsuits", href: "/shop?category=pantsuits" },
  { label: "Chunky Platform Sneakers", href: "/shop?category=sneakers" },
  { label: "Loafers & Gladiator Sandals", href: "/shop?category=footwear" },
  { label: "Thrifted Ladies Clothes", href: "/shop?category=thrift" },
];

export const footerSupportLinks = [
  { label: "How to Order", href: "/how-to-order" },
  { label: "Delivery Info", href: "/delivery" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];