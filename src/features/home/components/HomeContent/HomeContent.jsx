import balconyImage from '@/assets/home/balcony-plants.webp'
import indoorImage from '@/assets/home/indoor-plants.webp'
import officeImage from '@/assets/home/office-plants.webp'
import appImage from '@/assets/home/plant-app.webp'
import plantCareImage from '@/assets/home/plant-care.webp'
import giftingImage from '@/assets/home/plant-gifting.webp'
import plantersImage from '@/assets/home/planters-accessories.webp'
import styles from './HomeContent.module.css'

const reasons = [
  {
    title: 'Easy Maintenance',
    description:
      'Self-watering systems and regular check-ins keep your plants healthy and thriving.',
  },
  {
    title: 'Eco-Friendly Design',
    description:
      'Low-water plants, natural pots, and considered materials put the planet first.',
  },
  {
    title: 'Tailored to Your Space',
    description:
      'From balconies to quiet corners, every design fits your lifestyle and personality.',
  },
  {
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
          {reasons.map((reason, index) => (
            <article key={reason.title} className={styles.reason}>
              <span>{String(index + 1).padStart(2, '0')}</span>
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
                <a href="#shop">Shop now <span aria-hidden="true">→</span></a>
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
              <a href="#plant-care">View all <span aria-hidden="true">→</span></a>
            </div>
          </article>
          <article id="planters-&-pots">
            <img src={plantersImage} alt="A collection of planters and plant accessories" loading="lazy" />
            <div>
              <h3>Pots & Customizable Pots</h3>
              <p>Decorative, self-watering, and personalized options.</p>
              <a href="#planters-&-pots">View all <span aria-hidden="true">→</span></a>
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
          <a className={styles.textLink} href="#seeds">View all seeds <span aria-hidden="true">→</span></a>
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
              <a href="#blog">Read full guide <span aria-hidden="true">→</span></a>
            </div>
          </article>
          <article>
            <img src={plantCareImage} alt="Fresh herbs and plant-care tools" loading="lazy" />
            <div>
              <p>Growing · 8 min read</p>
              <h3>The Ultimate Guide to Growing Fresh Herbs at Home</h3>
              <a href="#blog">Read full guide <span aria-hidden="true">→</span></a>
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
        <a className={styles.textLink} href="#stories">View all growing stories <span aria-hidden="true">→</span></a>
      </section>

      <section className={`${styles.section} ${styles.consultation}`} id="book-consultation" aria-labelledby="consultation-title">
        <div>
          <SectionHeading
            eyebrow="Let’s grow together"
            title="Ready to Welcome Greenery Into Your Life?"
            description="Share a few details and our team will get in touch to understand your space."
          />
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Mobile number
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>
          <label>
            Tell us about your space
            <textarea name="message" rows="3" />
          </label>
          <button type="submit">Book consultation</button>
        </form>
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
          <a className={styles.primaryLink} href="#download">Coming soon</a>
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
              <a href="#events">Explore event gifting <span aria-hidden="true">→</span></a>
            </article>
            <article>
              <span>02</span>
              <h3>Corporate Gifting</h3>
              <p>Sustainable gifts that reflect your values to clients and teams.</p>
              <a href="#corporate">Explore corporate gifting <span aria-hidden="true">→</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <p>Turning everyday spaces into greener homes with mygreenheaven.in.</p>
        <h2 id="final-cta-title">Ready to bring nature closer?</h2>
        <a href="#book-consultation">Book consultation</a>
      </section>
    </div>
  )
}
