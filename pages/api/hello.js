// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const apiKey = '465a18e7-120e-4d95-805e-1f8bc6256c50';
const corsUrl = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://superhero-api.adkalpha.com/';
const endPoint = '/superhero';

export default async function handler(requestParams, method) {
  const urlToFetch = `${corsUrl}${baseUrl}${endPoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch, {
      headers: {
        apiKey: `${apiKey}`,
      },
      method: `${method}`,
    });

    console.log(response);

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);

      if (jsonResponse.superheroes) {
        return jsonResponse.superheroes.map((superhero) => ({
          id: superhero.id,
        }));
      }
    }
  } catch (error) {
    console.log(error);
  }
}
