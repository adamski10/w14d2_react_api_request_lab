import React, { Component } from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';
import './CharacterContainer.css'

class CharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacterDateOfBirth: ''
    };

    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  handleCharacterSelected(dateOfBirth){
    this.setState({ selectedCharacterDateOfBirth: dateOfBirth })
  }

  componentDidMount() {
    const url = 'https://hp-api.herokuapp.com/api/characters';

    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({ characters }))
    .catch(err => console.error);
  }

  render(){
    const selectedCharacter = this.state.characters.find(character => {
      return character.dateOfBirth === this.state.selectedCharacterDateOfBirth;
    })
    return (
      <div className="character-container">
        <h2>Harry Potter Characters</h2>
        <CharacterSelector 
        characters={this.state.characters}
        onCharacterSelected={this.handleCharacterSelected}/>
        <CharacterDetail character={selectedCharacter}/>
      </div>
    );
  }
}

export default CharacterContainer;
