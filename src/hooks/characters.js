import { useState, useEffect } from 'react';
import { getCharacters } from '../services/AtlaApi';

export const useCharacters = name => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(name)
      .then(characters => setCharacters(characters));
  }, [name]);

  return { characters };
};
