import styles from '../../styles/Product.module.css'
import Image from 'Next/image'
import { useState } from 'react'

const Product = () => {
  const [SIZE, SETSIZE] = useState(0)
  const PIZZA = {
    id: 1,
    img: '/img/pizza.png',
    name: 'Campagnola',
    price: [19.9, 23.9, 27.9],
    desc:
      'lorem Ipsum dolor sit amet, consectetur adipiscing elit lorem Ipsum dolor sit amet, consectetur adipiscing elit',
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={PIZZA.img} layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <h1 className={styles.title}>{PIZZA.name}</h1>
          <span className={styles.price}>${PIZZA.price[SIZE]}</span>
          <p className={styles.desc}>{PIZZA.desc}</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div className={styles.small} onClick={() => SETSIZE(0)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Small</span>
            </div>
            <div className={styles.medium}onClick={() => SETSIZE(1)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.large} onClick={() => SETSIZE(2)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Large</span>
            </div>
          </div>
          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
             <div className={styles.option}>
                 <input type="checkbox" id="double" name="double" className={styles.checkbox}/>
                 <label htmlFor='double'>Double Ingredients</label>
             </div> 
             <div className={styles.option}>
                 <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox}/>
                 <label htmlFor='cheese'>Cheese</label>
             </div> 
         
             <div className={styles.option}>
                 <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox}/>
                 <label htmlFor='spicy'>Spicy</label>
             </div> 
          
          
             <div className={styles.option}>
                 <input type="checkbox" id="sauce" name="sauce" className={styles.checkbox}/>
                 <label htmlFor='sauce'>Sauce</label>
             </div> 
         
             <div className={styles.option}>
                 <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox}/>
                 <label htmlFor='garlic'>Garlic</label>
             </div> 
          </div>
          <div className={styles.add}><input className={styles.quantity} type="number" defaultValue={1}/>
          <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
