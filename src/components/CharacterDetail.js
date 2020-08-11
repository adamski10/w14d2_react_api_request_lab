import React from 'react';
import './CharacterDetail.css';

const CharacterDetail = (props) => {
  if (!props.character) return null;

  return (
    <div className="character-detail">
      <h3>{props.character.name}</h3>
      <img src={props.character.image}></img>
      <p>Played by {props.character.actor}</p>
    </div>
  )
}

export default CharacterDetail;