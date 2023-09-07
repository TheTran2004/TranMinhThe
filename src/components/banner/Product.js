import React from 'react';

const Product = ({ product }) => {
  return (

    <div style={{ display:'inline-block',wordWrap:'break-word', padding:'10px', width:'250px', height:'250px', marginRight:'10px' }}>
      <img style={{ objectFit:'cover', width:'100%', height:'100%' }} src={product.image} alt={product.name} />
      <h3 style={{ maxWidth:'100%', maxHeight:'60px', display:'-webkit-flex', overflow:'auto', maxLines:3, textOverflow:'ellipsis', wordWrap:'break-word' }} >{product.name}</h3>
      
      <p>Mã đơn hàng: {product.id}</p>
      <p>Tên người mua: {product.name}</p>
      <p>Mẫu mã : {product.type}</p>
      <p>Mô tả : {product.desc}</p>
      <p>Gía tiền : {product.price}</p>
      <p>Thời gian : {product.createdDate} </p>
      <button >Thêm</button>
      <button >Sửa</button>
      <button >Xóa</button>
    </div>
    
  );
  
};

export default Product;