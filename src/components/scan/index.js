import { Fragment } from "react";

const Scan = (props) =>{

    return(
        <div className="scanDisplay">
            <img src={props.src_img} alt={props.alt} className="detector"/>
            <div className="characterDescr" >
                <h4>{props.characterName}</h4>
            </div>
        </div>
    )

}

export default Scan