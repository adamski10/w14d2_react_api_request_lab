import React from 'react';

const CharacterSelector = (props) =>{
  const options = props.characters.map(character => {
  return <option value={character.dateOfBirth} key={character.dateOfBirth}>{character.name}</option>
  })

  function handleChange(event) {
    props.onCharacterSelected(event.target.value);
  }

  return(
    <select id="character-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a character...</option>
      {options}
    </select>
  )
}

export default CharacterSelector;