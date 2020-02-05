export const getCharacters = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://last-airbender-api.herokuapp.com/api/v1/characters
    ?perPage=20?page=1`)
    .then(res => res.json())
    .then(characters => characters.map(({ name, photoUrl, affiliation }) => ({
      name,
      photoUrl,
      affiliation
    })));
};
  
