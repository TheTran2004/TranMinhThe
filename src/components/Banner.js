import React from 'react'
import ProductList from './banner/ProductList'

export const Banner = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row',
    width:'100%',overflowX:'scroll',
    whiteSpace:'nowrap',
    backgroundColor:'white' }}>

    <ProductList/><ProductList/>
    <ProductList/><ProductList/>
    </div>
  )
}
