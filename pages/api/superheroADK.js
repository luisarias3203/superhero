// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const baseUrl = 'https://superhero-api.adkalpha.com';
export const endPoint = '/superhero';

const Superhero = {
  search: async (requestParams, pageValue, ...options) => {
    const page = `page=${pageValue}`;
    const urlToFetch =
      requestParams === '/getAll?'
        ? `${baseUrl}${endPoint}${requestParams}${page}`
        : `${baseUrl}${endPoint}${requestParams}`;
    try {
      const response =
        requestParams === '/getAll?'
          ? await fetch(urlToFetch, {
              headers: {
                apiKey: `${process.env.API_KEY}`,
                'Content-Type': 'application/json',
              },
              mode: 'cors',
              method: 'POST',
              body: JSON.stringify(options[0]),
            })
          : await fetch(urlToFetch, {
              headers: {
                apiKey: `${process.env.API_KEY}`,
              },
              mode: 'cors',
              method: 'GET',
            });

      if (typeof response !== 'undefined') {
        // console.log(response);
        if (response.ok) {
          const jsonResponse = await response.json();

          // console.log(jsonResponse);
          return jsonResponse;
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Superhero;
