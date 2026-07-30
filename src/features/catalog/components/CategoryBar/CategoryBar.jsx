import styles from './CategoryBar.module.css'

const categories = [
  ['Indoor Plants', 'indoor-plants'],
  ['Outdoor Plants', 'outdoor-plants'],
  ['Flowering Plants', 'flowering-plants'],
  ['Succulents & Cacti', 'succulents-&-cacti'],
  ['Planters & Pots', 'planters-&-pots'],
  ['Plant Care', 'plant-care'],
  ['Maintenance Services', 'plant-services'],
  ['Gardening Tools', 'gardening-tools'],
]

export function CategoryBar() {
  return (
    <nav className={styles.bar} aria-label="Plant categories">
      <div className={styles.inner}>
        {categories.map(([label, id]) => (
          <a key={id} href={`/#${id}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
