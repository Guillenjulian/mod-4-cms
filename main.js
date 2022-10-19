function addWordCard(params = {}) {
  const template = document.querySelector("#porfofolio-card-template");
  const conteiner = document.querySelector(".porfolio-content");

  template.content.querySelector(".portafolio-card-title").textContent =
    params.title;

  template.content.querySelector(".portafolio-card-text").textContent =
    params.description;

  template.content.querySelector(".portafolio-card-img").src = params.imagen;
  template.content.querySelector(".portafolio-card-link").href = params.url;

  var clone = document.importNode(template.content, true);
  conteiner.appendChild(clone);
}
function getWord() {
  return fetch(
    " https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries?access_token=vaS1bF8J0--5XkX33qLd-5o_qmrr992V7QzOj1GkCKA&content_type=works"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description,
          imagen: data.includes.Asset[0].fields.file.url,
          url: item.fields.url.content[0].content[0].value,
        };
      });
      return fieldsCollection;
    });
  // .then((assets) => {
  //   assets.items.map(function (asset) {
  //     var imageURL = "https:" + asset.fields.file.url;
  //     console.log(imageURL);
  //   });
  // });
}

function main() {
  getWord().then(function (works) {
    for (const w of works) {
      addWordCard(w);
    }
  });
}
main();

//https://cdn.contentful.com/spaces/{space_id}/environments/{environment_id}/entries/{entry_id}?access_token={access_token}
//vaS1bF8J0--5XkX33qLd-5o_qmrr992V7QzOj1GkCKA   access token
// kwnz86dm90rc id space
// 1hzYt723JzaROJF6FDz5AR id entri (imagen)

//https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries/1hzYt723JzaROJF6FDz5AR?access_token=vaS1bF8J0--5XkX33qLd-5o_qmrr992V7QzOj1GkCKA

// https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries?access_token=vaS1bF8J0--5XkX33qLd-5o_qmrr992V7QzOj1GkCKA
