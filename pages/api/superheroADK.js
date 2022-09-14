// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const apiKey = '465a18e7-120e-4d95-805e-1f8bc6256c50';
const baseUrl = 'https://superhero-api.adkalpha.com';
const endPoint = '/superhero';

const Superhero = {
  search: async (requestParams = '/getAll?page=0&limit=8', ...options) => {
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;
    console.log(options);
    try {
      let response;
      if (requestParams == '/getAll?page=0&limit=8') {
        response = await fetch(urlToFetch, {
          headers: {
            apiKey: `${apiKey}`,
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          method: 'POST',
          body: JSON.stringify({ keyword: '' }),
        });
      } else {
        response = await fetch(urlToFetch, {
          headers: {
            apiKey: `${apiKey}`,
          },
          mode: 'cors',
          method: 'GET',
        });
      }

      // console.log(response);
      if (response.ok) {
        const jsonResponse = await response.json();

        console.log(jsonResponse);
        return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Superhero;
