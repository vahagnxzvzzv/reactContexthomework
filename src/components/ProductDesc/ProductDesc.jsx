import React, { useContext } from 'react'
import { productsContext } from '../../App'
import classes from './ProductDesc.module.css';

function ProductDesc() {

    const product = useContext(productsContext)

  return (
    <div className={classes.products}>
        {
            product.map((p) => {
                return (
                    <div className={classes.productsCard}>
                        <h2>{p.title}</h2>
                        <h2>{p.description}</h2>
                        <img className={classes.productImage} src={p.image} />
                        <h3 className={classes.productPrice}>${p.price}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductDesc;