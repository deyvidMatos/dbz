import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import './home.css'


const Home = () => {


    const getCharacters = async () => {
        const response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters`);
        const data = await response.json();
        setLoading(false)
        return data
    };

    const [allCharacter, setCharacters] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCharacters().then(data => {
            setCharacters(data)
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
        <div>
            <h1 className="title">Personagens:</h1>
            <div className="cardContainer">
                {allCharacter.map((character) =>
                    <div className="cards">
                        <Link to={'/'+ character.name}>
                            <img className="cardImg" src={character.imageUrl}></img>
                        </Link>
                        <div className="descContainer">
                            <p className="desc">Nome: {character.name}</p>
                            <p className="desc">Status: {character.status}</p>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
export default Home