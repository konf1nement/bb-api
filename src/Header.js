import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import logo from '../src/img/logo.png'

function Header() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const bbURL = 'https://www.breakingbadapi.com/api'
    
    useEffect(() => {
        const fetchItems = async() => {
            const result = await axios(`${bbURL}/characters`)

            console.log(result.data)
            setItems(result.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])

    return (
        <header className="center">
            <img src={logo}/>
        </header>
    )
}

export default Header
