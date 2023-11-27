import React from 'react'

const ActiveBook = ({activeBook}) => {
  return (
      <div style={{display:'flex'}}>
      {activeBook&&
        <div style={{display:"flex"}} className="book-cards">
          <div className="book-card" style={{width:'90vw'}}>
            <div className="book-img">
              <img src={activeBook.volumeInfo.imageLinks.thumbnail} alt='book' />
            </div>
            <div className="card-details">
              <p className='h2'>{activeBook.volumeInfo.title}</p>
              <div className='desc-div'>
              <p className="desc">{activeBook.volumeInfo.description}</p>
              </div>
              <div className="card-btn">
                <button>Now Read</button>
              </div>
            </div>
          </div>
        </div>
    }
    </div>
  )
}

export default ActiveBook
