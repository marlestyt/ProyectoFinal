import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
//import "./styles.css"
import axios from 'axios'

function Books() {
    const params = useParams()
    const [data, setData] = useState({})
    useEffect(() =>{
        axios.get(`https://render-books-backend.onrender.com/${params.id}`)
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            console.log('Erros al obtener los datos', err)
        })
    })
  return (
    <div className="container">
    <h2>Biblioteca</h2>
                        <div>
                            <img src={data.image_url} alt={data.author} />
                            <h3>{data.title}</h3>
                            <p>{data.author}</p>
                            <p>{data.description}</p>
                        </div>
    </div>
                    )
}

export default Books