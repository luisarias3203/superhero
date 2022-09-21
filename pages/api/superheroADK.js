// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const baseUrl = 'https://superhero-api.adkalpha.com';
const endPoint = '/superhero';

const Superhero = {
  search: async (requestParams, pageValue, ...options) => {
    let urlToFetch = `${baseUrl}${endPoint}${requestParams}`;
    try {
      let response;
      if (requestParams == '/getAll?') {
        let page = `page=${pageValue}&`;
        const limit = `limit=8`;
        urlToFetch = `${urlToFetch}${page}${limit}`;
        response = await fetch(urlToFetch, {
          headers: {
            apiKey: `${process.env.API_KEY}`,
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          method: 'POST',
          body: JSON.stringify(options[0]),
        });
      }
      if (requestParams.includes('/getBySlug')) {
        response = await fetch(urlToFetch, {
          headers: {
            apiKey: `${process.env.API_KEY}`,
          },
          mode: 'cors',
          method: 'GET',
        });
      }

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
