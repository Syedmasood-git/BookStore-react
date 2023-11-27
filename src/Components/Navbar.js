import React,{useState} from 'react'
import { ReactComponent as Logo } from '../images/logo.svg'
import book from '../images/bx_bx-book-heart.svg'
import notificattion from '../images/ic_round-notifications-none.svg'
import premium from '../images/fluent_premium-person-20-regular.svg'
import acc from '../images/IMG20210528181544.svg'
const Navbar = ({setAllBooks,setActiveBook}) => {
    const [searchTerm,setSearchTerm]=useState('')

    const handleSearch=async()=>{
        const res=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        const data=await res.json();
        setAllBooks(data.items)
        setActiveBook(null)
    }

  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <Logo/>
        <p className='logo-name'>KeazoN</p>
        <p className='small-books'>BOOKS</p>
        </div>
        <div>
            <input className='search-bar' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'></input>
            <button className='nav-btn' onClick={handleSearch}>Search</button>
        </div>
        <div className='right-nav'>
            <img src={book} alt='logo'/>
            <img src={notificattion} alt='logo' />
            <img src={premium} alt='logo' />
            <img src={acc} alt='logo' />
        </div>
    </div>
    </>
  )
}

export default Navbar
