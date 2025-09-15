import testimonialsData from '../data/testimonials.json';

export interface TestimonialData {
  id: number;
  quote: string;
  emphasizedWord: string;
  name: string;
  recoveryTime: string;
  headshotSrc: string;
  headshotAlt: string;
}

// Get a specific testimonial by ID
export function getTestimonialById(id: number): TestimonialData | undefined {
  return testimonialsData.find((t: TestimonialData) => t.id === id);
}

// Get all testimonials
export function getAllTestimonials(): TestimonialData[] {
  return testimonialsData as TestimonialData[];
}

// Get a random testimonial
export function getRandomTestimonial(): TestimonialData {
  const randomIndex = Math.floor(Math.random() * testimonialsData.length);
  return testimonialsData[randomIndex] as TestimonialData;
}

// Get multiple random testimonials
export function getRandomTestimonials(count: number): TestimonialData[] {
  const shuffled = [...testimonialsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count) as TestimonialData[];
}
