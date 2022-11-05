import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "./singleCharacter.css"

const SingleCharacter = () =>{
    const {id} = useParams()
    const [singleCharacter, setSingleCharacters] = useState({});
    const [loading, setLoading] = useState(true);

    const getCharacters = async (character) => {
        const response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${character}`);
        const data = await response.json();
        setLoading(false)
        return data
    };
    useEffect(()=>{
        const characterURL = id
        getCharacters(characterURL).then((data)=>{
            setSingleCharacters(data)
        })
    }, [])
    if (loading) {
        return (
            <section className='section loading'>
                <div className='circle'></div>
            </section>
        )
    }

    return (
        <div className="scountContainer">
            <img src="/img/counter.png" className="scouter" />
            <div className="scouter-background">
                <img src={singleCharacter.imageUrl} className="singleCharacter" />
            </div>
            <div className="descrContainer">
                <h2>Nome: {singleCharacter.name}</h2>
                <h3>Grupo: {singleCharacter.role}</h3>
                <h3>Planeta: {singleCharacter.originplanet}</h3>
                <h3>Especie: {singleCharacter.specie}</h3>
                <h3>Status: {singleCharacter.status}</h3>
                <h3>Transformação: {singleCharacter.transform}</h3>
                <h3>Universo: {singleCharacter.universe}</h3>
            </div>
        </div>
    )
}
export default SingleCharacter