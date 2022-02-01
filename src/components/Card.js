import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={props.imageUrl}></img>
      </div>
      <div className='content-container'>
        <section>
          <h1>{props.title}</h1>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </section>
        <section>
          <h3>
            Developer:<small>{props.Developer}</small>
          </h3>
          <h3>
            Director:<small>{props.Director}</small>
          </h3>
          <h3>
            Release:<small>{props.Release}</small>
          </h3>
          <h3>
            Genre:<small>{props.Genre}</small>
          </h3>
        </section>
        <section>
          <p>{props.description}</p>
        </section>
      </div>
    </div>
  );
}

export default Card;
