import balconyMakeoverImage from '@/assets/home/balcony-makeover.jpg'
import indoorPlantsImage from '@/assets/home/indoor-plants.webp'
import plantCareImage from '@/assets/home/plant-care.webp'
import plantersImage from '@/assets/home/planters-accessories.webp'
import { HomeContent } from '@/features/home/components/HomeContent'
import { Carousel } from '@/shared/components/ui/Carousel'
import styles from './HomePage.module.css'

const featuredSlides = [
  {
    id: 'balcony-makeovers',
    image: balconyMakeoverImage,
    imageAlt:
      'A balcony makeover with a vertical green wall, hanging planters, and a cosy seating corner',
    eyebrow: 'Balcony makeovers',
    title: 'Transforming spaces into green heavens',
    contentPosition: 'bottom',
    overlayTone: 'soft',
  },
  {
    id: 'indoor-plants',
    image: indoorPlantsImage,
    imageAlt: 'A curated collection of lush indoor plants in a modern room',
    eyebrow: 'Fresh arrivals',
    title: 'Bring nature home',
    description:
      'Discover healthy, handpicked indoor plants selected to thrive in your space.',
  },
  {
    id: 'plant-care',
    image: plantCareImage,
    imageAlt: 'A plant-care expert repotting a healthy houseplant',
    eyebrow: 'Expert support',
    title: 'Plant care, made simple',
    description:
      'Get professional guidance, repotting, and maintenance for happier plants.',
  },
  {
    id: 'planters',
    image: plantersImage,
    imageAlt: 'Elegant planters, gardening tools, and thriving houseplants',
    eyebrow: 'Complete your space',
    title: 'Pots and essentials',
    description:
      'Find considered planters, tools, and care essentials for every plant.',
  },
]

export function HomePage() {
  return (
    <div className={styles.layout}>
      <Carousel slides={featuredSlides} ariaLabel="Featured collections" />
      <HomeContent />
    </div>
  )
}
