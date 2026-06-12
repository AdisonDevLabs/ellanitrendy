// lib/data/categories.ts

export interface Category {
  name: string;
  slug: string;
  label?: string;
  image: string;
  span?: string;
}

export const categories: Category[] = [
  {
    name: "MATCHING SETS",
    slug: "matching-sets",
    label: "Trending Now",
    image: "/Tie-Dye Casual Set.png", // Tie-Dye Oversized Loungewear Set
    span: "md:col-span-2",
  },
  {
    name: "CHUNKY SNEAKERS",
    slug: "sneakers",
    label: "Best Sellers",
    image: "/Chunky Platform Sneaker creme whitE.png", // Creme White Chunky Platform Sneakers
    span: "md:col-span-2",
  },
  {
    name: "ELEGANT PANTSUITS",
    slug: "pantsuits",
    label: "New Arrivals",
    image: "/Burgundy Pantsuit.png", // Elegant Burgundy Blazer Pantsuit
    span: "md:col-span-2",
  },
  {
    name: "PREMIUM FOOTWEAR",
    slug: "footwear",
    label: "Classy Looks",
    image: "/Luxury Suede Loafers.png", // Luxury Suede Clasp Loafers
    span: "md:col-span-2",
  },
];

export const heroCategories = categories.slice(0, 5);

export const discoveryChips = [
  { id: 'trending', label: '🔥 Trending', context: 'Trending Styles' },
  { id: 'best-sellers', label: '⭐ Best Sellers', context: 'Best Sellers' },
  { id: 'just-dropped', label: '🆕 Just Dropped', context: 'New Arrivals' },
  { id: 'sneakers', label: '👟 Sneakers', context: 'Chunky Platforms' },
  { id: 'pantsuits', label: '🧥 Pantsuits', context: 'Elegant Blazer Suits' },
  { id: 'matching-sets', label: '👗 Matching Sets', context: 'Co-ords & Loungewear' },
  { id: 'footwear', label: '🥿 Premium Footwear', context: 'Loafers & Sandals' },
];

export const filterCategories = ['All', 'Sneakers', 'Pantsuits', 'Matching Sets', 'Footwear'];

export const searchSuggestions = ['Creme White Chunky', 'Burgundy Pantsuit', 'Monogram Silk Set', 'Suede Clasp Loafers', 'Gladiator Sandals', 'Sporty Tracksuit'];

export const navSearchSuggestions = ['Sneakers', 'Pantsuits', 'Matching Sets', 'Footwear'];

export const navLinksData = [
  { label: "Shop All", href: "/shop", baseTextClass: "text-white", hoverTextClass: "hover:text-[#C6FF00]", underlineClass: "bg-[#C6FF00]", isLive: false },
  { label: "New Drops", href: "/shop?category=new-arrivals", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false },
  { label: "Trending", href: "/shop?category=trending", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false },
  { label: "Offers", href: "/shop?category=offers", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-[#FF0000]", underlineClass: "bg-[#FF0000]", isLive: true },
];

export const priceRanges = ['Under 2600', '2600 - 3200', 'Over 3200'];

export const filterSizes = ['S', 'M', 'L', 'XL', '37', '38', '39', '40', '41'];