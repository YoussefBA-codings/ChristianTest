const axios = require("axios");

const getDataFromPage = (page) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
		query: `query($page: Int, $perPage: Int)  {
		Page(page: $page, perPage: $perPage) {
		  media {
			siteUrl
			title {
			  english
			  native
			}
			description
			idMal
			id
			type
			format
			tags {
			  id
			  name
			  description
			}
			episodes
			duration
			chapters
			volumes
			endDate {
			  year
			  month
			  day
			}
		  }
		}
	  }`,
		variables: {page,"perPage":50}
	  });

    const config = {
      method: "post",
      url: "https://graphql.anilist.co/",
      headers: {
        "content-type": "application/json",
        Cookie: "laravel_session=wzqXa4bBf2VrJgV09fOxOWNzpgSbyvvLTK9OGH1e",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data.data.Page.media);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const adaptData = (data) => {
	const adaptedData = []
}

const config = {
  perPage: 50,
  maxPages: 1854,
  apiUrl: "https://graphql.anilist.co/",
};

getDataFromPage(1).then(res => {
	adaptData(res[0])
}).catch(err => {
	console.error(err)
});
