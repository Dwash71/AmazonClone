import React from 'react';
// import ImageBox from '../imageBox/ImageBox';


const Book = (props) => {
  // display title, author and price
  const displayMsg = (title, author, price) => {
    alert( title, author, price);
  }

  const displayImg = (img) => {
    return (
      <img src={img} alt="" />
      )
    }

  const {  img, title, author, price } = props.book;
  return (
    <article className='book'>
      <img src={img} id="myImg" onClick={() => displayImg(img)}  alt="" />
      <div className="details" onClick={() => displayMsg(`${title} \n ${author} \n $${price}`)}>
        <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>${price}</h4>
      </div>
    </article>
  )
}



export default Book
