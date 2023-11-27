import React,{useState,useEffect} from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import AllBooks from './Components/AllBooks'
import ActiveBook from './Components/ActiveBook'

const App = () => {

  const [allBooks,setAllBooks]=useState([]);
  const [activeBook,setActiveBook]=useState(null)

  useEffect(()=>{
    let books=[]
    const fetchBooks=async()=>{
      const response1 = await fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
      const data1 = await response1.json();
      books=data1.items;
      
      const response2 = await fetch("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");
      const data2 = await response2.json();
      books=[...books,...data2.items]
      setAllBooks(books);
    }
    fetchBooks()
  },[])

  // console.log(books)



  return (
    <div>
        <Navbar setAllBooks={setAllBooks} setActiveBook={setActiveBook}/>
        <ActiveBook activeBook={activeBook}/>
        <AllBooks books={allBooks} setActiveBook={setActiveBook} activeBook={activeBook}/>
    </div>
  )
}

export default App
