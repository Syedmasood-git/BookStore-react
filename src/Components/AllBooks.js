import React from 'react'

const AllBooks = ({books,setActiveBook,activeBook}) => {

  return (
      <>
          <div style={{display:'flex',flexWrap:'wrap'}}>
      {activeBook==null && books.filter((_,idx)=>idx<3).map((book,index)=>{
        return(
        <div style={{display:"flex",flexWrap:'wrap'}} key={index} className="book-cards">
          <div className="book-card">
            <div className="book-img">
              <img src={book.volumeInfo.imageLinks.thumbnail} alt='book' />
            </div>
            <div className="card-details">
              <p className='h2'>{book.volumeInfo.title}</p>
              <div className='desc-div'>
              <p className="desc">{book.volumeInfo.description}</p>
              </div>
              <div className="card-btn">
                <button>Now Read</button>
              </div>
            </div>
          </div>
        </div>
        )
    })}
    </div>
    <h1 style={{color:'white'}}>More Books</h1>
    <div style={{display:'grid',gridTemplateColumns:'repeat( auto-fit, minmax(250px, 1fr)',gap:'30px'}}>
      {
        books.map((book)=>{
            return(
                <div className='hello'>
        <div key={book.id} onClick={()=>setActiveBook(book)} className='more-card'>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>
    </div>
            )
        })
    }
    </div>
    </>
  )
}

export default AllBooks
