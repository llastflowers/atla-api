export const getCharacters = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://last-airbender-api.herokuapp.com/api/v1/characters/')
    .then(res => res.json());
};
  
