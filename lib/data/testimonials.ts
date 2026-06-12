// lib/data/testimonials.ts

export interface Testimonial {
  id: string | number;
  name: string;
  location?: string;
  rating: number;
  text: string;
  product?: string;
  profile: string;
  date?: string;
  purchased?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mercy W. – Kahawa West",
    location: "Kahawa West",
    rating: 5,
    text: "The burgundy pantsuit is flawless. It fits beautifully, the fabric feels incredibly premium, and the statement buttons give it a very classy aesthetic. Got so many compliments!",
    product: "Elegant Burgundy Blazer Pantsuit",
    profile: "https://picsum.photos/seed/mercy/150/150",
  },
  {
    id: 2,
    name: "Faith K. – Roysambu",
    location: "Roysambu",
    rating: 5,
    text: "I love the creme white chunky sneakers! They look precisely like the TikTok catalog video and give a dramatic style boost. Store pickup at Tamasha Business Centre was smooth.",
    product: "Creme White Chunky Platform Sneakers",
    profile: "https://picsum.photos/seed/faith/150/150",
  },
  {
    id: 3,
    name: "Anita K. – Kasarani",
    location: "Kasarani",
    rating: 5,
    text: "Got the tie-dye oversized loungewear set. It is exceptionally cozy, heavy-duty fabric, and highly fashionable for effortless weekend styling. Absolute value for money.",
    product: "Tie-Dye Oversized Loungewear Set",
    profile: "https://picsum.photos/seed/antony/150/150",
  },
];

export const productReviews: Testimonial[] = [
  {
    id: 1,
    name: "Grace J.",
    location: "Kahawa West",
    rating: 5,
    date: "3 days ago",
    text: "Picked up the luxury suede loafers with the gold clasp hardware. They look very high-end and elegant in person. Perfect fit for daily classy casual outfits.",
    purchased: true,
    profile: "https://picsum.photos/seed/grace/150/150",
  },
  {
    id: 2,
    name: "Beatrice O.",
    location: "Githurai",
    rating: 5,
    date: "1 week ago",
    text: "The all-black chunky platform shoes are excellent quality. Size 38 fits perfectly, the deep traction layout feels solid, and it matches easily with any outfit layout.",
    purchased: true,
    profile: "https://picsum.photos/seed/brian/150/150",
  },
];

export const reviewAvatars = [
  "https://picsum.photos/seed/user1/100/100",
  "https://picsum.photos/seed/user2/100/100",
  "https://picsum.photos/seed/user3/100/100"
];

export const reviewStats = {
  averageRating: "4.9/5 Average Rating",
  totalCustomers: "1,500+ Happy Customers"
};