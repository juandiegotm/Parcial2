import axios from 'axios';

const getPokemonsSpanish = async () => {
    return await axios.get(
      "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json"
    );
  };
  
  const getPokemonsEnglish = async () => {
    return await axios.get(
      "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json"
    );
  };

export default {
    getPokemonsSpanish,
    getPokemonsEnglish
}