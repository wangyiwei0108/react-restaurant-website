import React from 'react';

const Book = () => {
  return (
    <div className="book__container" id="book">
      <div className="book__content">
        <div className="book__intro">
          <h1>Book a Table</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
        </div>
        <form className="book__form">
          <input type="text" placeholder="Your Name"></input>
          <input type="email" placeholder="Your Email"></input>
          <input type="text" placeholder="Your Message"></input>
          <a className="book__btn" href="/"><div>Book Table</div></a>
        </form>
      </div>
    </div>
  )
}

export default Book;