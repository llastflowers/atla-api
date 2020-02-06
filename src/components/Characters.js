import React from 'react';
import Character from './Character';
import { useCharacters } from '../hooks/characters';
import { Link } from 'react-router-dom';

const Characters = () => {
  const { characters } = useCharacters();
  console.log(characters);
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Link to={`/character/${character.name}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default Characters;

