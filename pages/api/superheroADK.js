// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const apiKey = '465a18e7-120e-4d95-805e-1f8bc6256c50';
const baseUrl = 'https://superhero-api.adkalpha.com';
const endPoint = '/superhero';
const requestParams = '/getAll?page=0&limit=8';
const method = 'POST';

const Superhero = {
  search: async () => {
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;
    try {
      const response = await fetch(urlToFetch, {
        headers: {
          apiKey: `${apiKey}`,
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: `${method}`,
      });

      console.log(response);
      if (response.ok) {
        const jsonResponse = await response.json();

        if (jsonResponse.data) {
          return jsonResponse.data.map((superhero) => ({
            id: superhero.id,
            name: superhero.name,
            intelligence: superhero.powerstats.intelligence,
            strength: superhero.powerstats.strength,
            speed: superhero.powerstats.speed,
            durability: superhero.powerstats.durability,
            power: superhero.powerstats.power,
            combat: superhero.powerstats.combat,
            fullName: superhero.biography.fullName,
            alterEgos: superhero.biography.alterEgos,
            placeOfBirth: superhero.biography.placeOfBirth,
            firstAppearance: superhero.biography.firstAppearance,
            publisher: superhero.biography.publisher,
            alignment: superhero.biography.alignment,
            imageXs: superhero.images.xs,
            imageSm: superhero.images.sm,
            imageMd: superhero.images.md,
            imageLg: superhero.images.lg,
            occupation: superhero.work.occupation,
            base: superhero.work.base,
          }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Superhero;
