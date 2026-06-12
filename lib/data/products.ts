// lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    "id": "p1",
    "name": "Creme White Chunky Platform Sneakers",
    "price": 2600,
    "originalPrice": 3200,
    "image": "/Chunky Platform Sneaker creme white.png",
    "images": ["/Chunky Platform Sneaker creme white.png", "/Chunky Platform Sneaker creme whitE.png"],
    "category": "Sneakers",
    "rating": 4.9,
    "reviews": 42,
    "sizes": ["37", "38", "39", "40"],
    "colors": ["Creme White", "White"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Trendy chunky platform sneakers in a beautiful creme white color. Outfitted with comfortable thick cushion soles to level up your street style. Available at Tamasha Business Centre, Kahawa West."
  },
  {
    "id": "p2",
    "name": "All Black Chunky Platform Sneakers",
    "price": 2600,
    "originalPrice": 3200,
    "image": "/Chunky Platform Sneaker black.png",
    "images": ["/Chunky Platform Sneaker black.png"],
    "category": "Sneakers",
    "rating": 4.8,
    "reviews": 29,
    "sizes": ["37", "38", "39", "40"],
    "colors": ["Black"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": true,
    "description": "Sleek and versatile all-black chunky platform sneakers. Features deep tread traction and classic tone-on-tone styling, making them perfect for clean, high-level everyday aesthetic wear."
  },
  {
    "id": "p3",
    "name": "Nike Air Cream Tan Chunky Sneakers",
    "price": 3000,
    "originalPrice": 3600,
    "image": "/Nike Air Chunky Sneaker.png",
    "images": ["/Nike Air Chunky Sneaker.png"],
    "category": "Sneakers",
    "rating": 4.9,
    "reviews": 25,
    "sizes": ["38", "39", "40", "41"],
    "colors": ["Cream Blue"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Premium Nike Air design platform shoes featuring warm tan suede/leather overlays combined with sporty blue linear accents and deep, comfortable soles."
  },
  {
    "id": "p4",
    "name": "Nike Air Sport Multi-Color Sneakers",
    "price": 3000,
    "originalPrice": 3700,
    "image": "/Nike Air Sport Sneaker.png",
    "images": ["/Nike Air Sport Sneaker.png"],
    "category": "Sneakers",
    "rating": 4.7,
    "reviews": 18,
    "sizes": ["38", "39", "40", "41"],
    "colors": ["White"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "A striking white-base multi-color sneaker accented with a vibrant red swoosh and athletic blue lining details. Provides heavy-duty grip and peak daily walking comfort."
  },
  {
    "id": "p5",
    "name": "Elegant Burgundy Blazer Pantsuit",
    "price": 3800,
    "originalPrice": 4500,
    "image": "/Burgundy Pantsuit.png",
    "images": ["/Burgundy Pantsuit.png"],
    "category": "Pantsuits",
    "rating": 5.0,
    "reviews": 56,
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Burgundy"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "A sophisticated matching business-casual pantsuit set. Includes a sharp single-breasted blazer adorned with metallic statement buttons, paired with matching wide-leg high-waist trousers."
  },
  {
    "id": "p6",
    "name": "Monogram Silk-Style Satin Set",
    "price": 3200,
    "originalPrice": 4000,
    "image": "/Monogram Silk-Style Set.png",
    "images": ["/Monogram Silk-Style Set.png"],
    "category": "Matching Sets",
    "rating": 4.8,
    "reviews": 31,
    "sizes": ["M", "L", "XL"],
    "colors": ["Grey Silver"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Luxurious two-piece loungewear set crafted from smooth satin fabric in a grey finish. Includes a button-down shirt and matching long trousers featuring an all-over classic double-G monogram pattern."
  },
  {
    "id": "p7",
    "name": "Two-Tone Wedge Sport Sneakers",
    "price": 2800,
    "originalPrice": 3500,
    "image": "/Two-Tone Wedge Sneaker.png",
    "images": ["/Two-Tone Wedge Sneaker.png"],
    "category": "Sneakers",
    "rating": 4.6,
    "reviews": 14,
    "sizes": ["37", "38", "39", "40"],
    "colors": ["White Black"],
    "isNewArrival": false,
    "isBestSeller": false,
    "isFlashDeal": true,
    "description": "High-wedge athletic aesthetic shoes. Combines a clean mesh design base with crisp panel lines in black and silver accents to create a contemporary street profile."
  },
  {
    "id": "p8",
    "name": "Color-Block Sporty Tracksuit Set",
    "price": 3400,
    "originalPrice": 4200,
    "image": "/Color-Block Sporty Set.png",
    "images": ["/Color-Block Sporty Set.png"],
    "category": "Matching Sets",
    "rating": 4.9,
    "reviews": 22,
    "sizes": ["S", "M", "L"],
    "colors": ["Navy Blue"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Vibrant and comfortable zip-up tracksuit set. Showcases a modern color-block pattern with bright orange and clean white panels alongside high-grade navy performance fabrics."
  },
  {
    "id": "p9",
    "name": "Tie-Dye Oversized Loungewear Set",
    "price": 2500,
    "originalPrice": 3200,
    "image": "/Tie-Dye Casual Set.png",
    "images": ["/Tie-Dye Casual Set.png"],
    "category": "Matching Sets",
    "rating": 4.7,
    "reviews": 19,
    "sizes": ["M", "L", "XL"],
    "colors": ["Blue Purple"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Effortless casual comfort tailored for elite style. Features an oversized short-sleeve tee paired with loose wide-leg drawstring pants detailed in a premium blue and purple tie-dye wash fabric blend."
  },
  {
    "id": "p10",
    "name": "Luxury Suede Clasp Loafers",
    "price": 2900,
    "originalPrice": 3800,
    "image": "/Luxury Suede Loafers.png",
    "images": ["/Luxury Suede Loafers.png"],
    "category": "Footwear",
    "rating": 4.9,
    "reviews": 37,
    "sizes": ["37", "38", "39", "40"],
    "colors": ["Black"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Exquisite casual black suede leather loafers outlined neatly with white contrast piping. Finished with premium polished gold lock-hardware on the center upper band."
  },
  {
    "id": "p11",
    "name": "Strappy Gladiator Platform Sandals",
    "price": 2200,
    "originalPrice": 2800,
    "image": "/Strappy Gladiator Sandals.png",
    "images": ["/Strappy Gladiator Sandals.png"],
    "category": "Footwear",
    "rating": 4.8,
    "reviews": 15,
    "sizes": ["36", "37", "38", "39", "40"],
    "colors": ["Black"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": true,
    "description": "Edgy all-black gladiator sandals styling long wrap-around ankle ties, open-toe format, and an urban chunky textured rubber wedge base."
  }
];

export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getNewArrivals = () => products.filter((p) => p.isNewArrival);
export const getFlashDeals = () => products.filter((p) => p.isFlashDeal);
export const getProductById = (id: string) => products.find((p) => p.id === id);

export const colorMap: Record<string, string> = {
  'Black': '#000000',
  'White': '#ffffff',
  'Creme White': '#fdfaf2',
  'Red': '#ff0000',
  'Pink': '#ff1493',
  'Purple': '#800080',
  'Blue': '#0000ff',
  'Navy Blue': '#000080',
  'Orange': '#ff4500',
  'Gold': '#ffd700',
  'Silver': '#c0c0c0',
  'Burgundy': '#800020',
  'Grey': '#808080',
  'Cream': '#fffdd0',
  'Tan': '#d2b48c'
};

export const sizeGuideData = [
  // Kids Sizes
  {eu: 21, uk: 4.5, us: 5.5, cm: 13.0},
  {eu: 25, uk: 7.5, us: 8.5, cm: 15.5},
  {eu: 26, uk: 8.5, us: 9.5, cm: 16.0},
  {eu: 30, uk: 11.5, us: 12.5, cm: 18.5},
  {eu: 32, uk: 13, us: 1, cm: 20.0},
  {eu: 36, uk: 3.5, us: 4.5, cm: 22.5},
  // Adult Sizes
  {eu: 37, uk: 4, us: 5, cm: 23.0},
  {eu: 38, uk: 5, us: 6, cm: 24.0},
  {eu: 39, uk: 5.5, us: 6.5, cm: 24.5},
  {eu: 40, uk: 6, us: 7, cm: 25.0},
  {eu: 41, uk: 7, us: 8, cm: 26.0}
];