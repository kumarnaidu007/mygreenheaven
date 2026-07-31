import balconyImage from '@/assets/home/balcony-plants.webp'
import indoorImage from '@/assets/home/indoor-plants.webp'
import officeImage from '@/assets/home/office-plants.webp'
import appImage from '@/assets/home/plant-app.webp'
import plantCareImage from '@/assets/home/plant-care.webp'
import giftingImage from '@/assets/home/plant-gifting.webp'
import plantersImage from '@/assets/home/planters-accessories.webp'
import { ConsultationForm } from '@/features/home/components/ConsultationForm'
import { CONSULTATION_SECTION_ID } from '@/shared/constants/sections'
import styles from './HomeContent.module.css'

const reasons = [
  {
    icon: 'care',
    title: 'Easy Maintenance',
    description:
      'Self-watering systems and regular check-ins keep your plants healthy and thriving.',
  },
  {
    icon: 'eco',
    title: 'Eco-Friendly Design',
    description:
      'Low-water plants, natural pots, and considered materials put the planet first.',
  },
  {
    icon: 'tailored',
    title: 'Tailored to Your Space',
    description:
      'From balconies to quiet corners, every design fits your lifestyle and personality.',
  },
  {
    icon: 'support',
    title: 'Ongoing Support',
    description:
      'Our subscription care model keeps your plants fresh long after installation.',
  },
]

const benefits = [
  ['Fresh Air, Naturally', 'Cleaner air, better sleep, and healthier living.'],
  ['Natural Beauty', 'Transform dull corners into vibrant, inspiring spaces.'],
  ['Daily Energy', 'Plants can lift your mood and support productivity.'],
  ['Peaceful Spaces', 'Create a private escape from city noise and stress.'],
]

const journeySteps = [
  {
    title: 'Consultation',
    description: 'We understand your vision, space, and inspiration.',
    image: plantCareImage,
    imageAlt: 'A plant expert preparing a plant-care consultation',
  },
  {
    title: 'Digital Design Preview',
    description: 'See your transformed space before work begins.',
    image: indoorImage,
    imageAlt: 'A styled indoor space filled with healthy plants',
  },
  {
    title: 'Expert Installation',
    description: 'Our team installs everything while you relax.',
    image: officeImage,
    imageAlt: 'A professionally installed office plant arrangement',
  },
  {
    title: 'One-Month Warranty',
    description: 'Enjoy hassle-free support from day one.',
    image: plantersImage,
    imageAlt: 'Healthy plants with professional plant-care essentials',
  },
  {
    title: 'Ongoing Care',
    description: 'Regular visits keep your plants healthy and alive.',
    image: balconyImage,
    imageAlt: 'A thriving balcony garden receiving ongoing care',
  },
]

const products = [
  {
    id: 'indoor-plants',
    title: 'Living Room Plants',
    image: indoorImage,
    alt: 'Lush indoor plants arranged in a living room',
  },
  {
    id: 'office-plants',
    title: 'Office Plants',
    image: officeImage,
    alt: 'A modern office filled with healthy green plants',
  },
  {
    id: 'balcony-plants',
    title: 'Balcony Plants',
    image: balconyImage,
    alt: 'A sunny urban balcony filled with potted plants',
  },
]

const seeds = ['Tomato', 'Cucumber', 'Basil', 'Marigold', 'Spinach']

function ReasonIcon({ type }) {
  const paths = {
    care: (
      <>
        <path d="M12 3.5C9 7.3 6.5 10 6.5 13.5a5.5 5.5 0 0 0 11 0C17.5 10 15 7.3 12 3.5Z" />
        <path d="m9.5 13.5 1.7 1.7 3.6-3.7" />
      </>
    ),
    eco: (
      <>
        <path d="M19.5 4.5C11 4.5 6 8.1 6 13.4c0 3.1 2.2 5.1 5.2 5.1 5.2 0 8.3-5 8.3-14Z" />
        <path d="M4.5 20c2.2-4.8 5.8-8.2 10.5-10.5" />
      </>
    ),
    tailored: (
      <>
        <path d="M5 8V5h3M16 5h3v3M19 16v3h-3M8 19H5v-3" />
        <path d="M12 8.5c-2.1 2.5-3.3 4-3.3 5.7a3.3 3.3 0 0 0 6.6 0c0-1.7-1.2-3.2-3.3-5.7Z" />
      </>
    ),
    support: (
      <>
        <path d="M4.5 12a7.5 7.5 0 0 1 15 0v4" />
        <path d="M4.5 12v3a2 2 0 0 0 2 2h1v-6h-1a2 2 0 0 0-2 1ZM19.5 12v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1ZM16.5 17c0 2-1.5 3-4.5 3" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <header className={`${styles.sectionHeading} ${centered ? styles.centered : ''}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </header>
  )
}

export function HomeContent() {
  return (
    <div className={styles.content}>
      <section className={styles.section} aria-labelledby="why-title">
        <SectionHeading
          eyebrow="Designed around you"
          title="Why Choose mygreenheaven.in"
          description="From balcony gardens to plant gifting, we bring nature closer to you."
          centered
        />
        <div className={styles.reasonGrid}>
          {reasons.map((reason) => (
            <article key={reason.title} className={styles.reason}>
              <span className={styles.reasonIcon}>
                <ReasonIcon type={reason.icon} />
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="benefits-title">
        <SectionHeading
          eyebrow="Breathe better"
          title="Benefits of Bringing Greenery Home"
          description="Because home should breathe with you."
          centered
        />
        <div className={styles.benefitOrbit}>
          <div className={styles.benefitGrid}>
            {benefits.map(([title, description]) => (
              <article key={title}>
                <span aria-hidden="true">✦</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className={styles.benefitVisual}>
            <img
              src={indoorImage}
              alt="A calm home interior brought to life with greenery"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={styles.section} id="plant-services" aria-labelledby="journey-title">
        <SectionHeading
          eyebrow="How it works"
          title="Your Green Journey, Made Simple"
          centered
        />
        <ol className={styles.timeline}>
          {journeySteps.map((step, index) => (
            <li key={step.title}>
              <div className={styles.stepVisual}>
                <img src={step.image} alt={step.imageAlt} loading="lazy" />
              </div>
              <div className={styles.stepCopy}>
                <span>Step {String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="products-title">
        <SectionHeading
          eyebrow="Curated for every space"
          title="Explore Our Products"
          description="Plants, pots, and kits selected for beginners and experienced plant lovers."
        />
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article className={styles.productCard} id={product.id} key={product.title}>
              <img src={product.image} alt={product.alt} loading="lazy" />
              <div>
                <h3>{product.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.accessorySection}`} id="plant-care" aria-labelledby="care-title">
        <SectionHeading
          eyebrow="Everything they need"
          title="Plant Care & Accessories"
        />
        <div className={styles.splitCards}>
          <article>
            <img src={plantCareImage} alt="A plant being carefully repotted" loading="lazy" />
            <div>
              <h3>Plant Parenting & Care</h3>
              <p>Fertilizers, plant food, watering tools, and expert support.</p>
            </div>
          </article>
          <article id="planters-&-pots">
            <img src={plantersImage} alt="A collection of planters and plant accessories" loading="lazy" />
            <div>
              <h3>Pots & Customizable Pots</h3>
              <p>Decorative, self-watering, and personalized options.</p>
            </div>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.seedSection}`} aria-labelledby="seeds-title">
        <div>
          <SectionHeading
            eyebrow="Grow it yourself"
            title="Grow-Your-Own Seeds"
            description="From fresh tomato and spinach to fragrant basil, discover easy-to-grow seeds for your balcony or backyard."
          />
        </div>
        <div className={styles.seedList} id="seeds">
          {seeds.map((seed, index) => (
            <div key={seed}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{seed}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="guide-title">
        <SectionHeading
          eyebrow="Learn and grow"
          title="The Green Guide Reads"
          description="Plant care, balcony décor, and mindful living with nature."
        />
        <div className={styles.blogGrid}>
          <article>
            <img src={indoorImage} alt="Low-maintenance indoor plants" loading="lazy" />
            <div>
              <p>Plant care · 6 min read</p>
              <h3>5 Low-Maintenance Plants for Busy Professionals</h3>
            </div>
          </article>
          <article>
            <img src={plantCareImage} alt="Fresh herbs and plant-care tools" loading="lazy" />
            <div>
              <p>Growing · 8 min read</p>
              <h3>The Ultimate Guide to Growing Fresh Herbs at Home</h3>
            </div>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.testimonial}`} aria-labelledby="stories-title">
        <SectionHeading
          eyebrow="Stories growing with us"
          title="Every Space Has a Story"
        />
        <blockquote>
          “Our balcony feels like a mini forest now—so relaxing after work!”
        </blockquote>
      </section>

      <section
        className={`${styles.section} ${styles.consultation}`}
        id={CONSULTATION_SECTION_ID}
        aria-labelledby="consultation-title"
      >
        <div>
          <SectionHeading
            eyebrow="Let’s grow together"
            title="Ready to Welcome Greenery Into Your Life?"
            description="Share a few details and our team will get in touch to understand your space."
          />
        </div>
        <ConsultationForm />
      </section>

      <section className={`${styles.section} ${styles.appSection}`} aria-labelledby="app-title">
        <div>
          <SectionHeading
            eyebrow="Greenery at your fingertips"
            title="Download the mygreenheaven.in App"
            description="Explore, plan, and care for your plants with confidence."
          />
          <ul>
            <li>Easy ordering for curated plants and décor</li>
            <li>Smart watering and maintenance reminders</li>
            <li>Real-time delivery tracking</li>
          </ul>
          <span className={styles.badge}>Coming soon</span>
        </div>
        <img src={appImage} alt="mygreenheaven.in plant care app shown on a phone" loading="lazy" />
      </section>

      <section className={`${styles.section} ${styles.gifting}`} aria-labelledby="gifting-title">
        <img src={giftingImage} alt="Living plants wrapped as sustainable gifts" loading="lazy" />
        <div>
          <SectionHeading
            eyebrow="Gift life, not things"
            title="Thoughtful Green Gifting"
            description="Celebrate meaningful moments with living gifts that continue to grow."
          />
          <div className={styles.giftOptions}>
            <article>
              <span>01</span>
              <h3>Events</h3>
              <p>Living keepsakes for weddings, birthdays, and family milestones.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Corporate Gifting</h3>
              <p>Sustainable gifts that reflect your values to clients and teams.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <p>Turning everyday spaces into greener homes with mygreenheaven.in.</p>
        <h2 id="final-cta-title">Ready to bring nature closer?</h2>
        <a href={`#${CONSULTATION_SECTION_ID}`}>Book consultation</a>
      </section>
    </div>
  )
}
