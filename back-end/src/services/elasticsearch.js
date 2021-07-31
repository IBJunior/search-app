const es = require("elasticsearch");
const dotenv = require("dotenv");
dotenv.config();

// instanciation du client es
const esClient = new es.Client({
  host: process.env.ELASTICSEARCH_HOST,
});

// la fonction qui permet d'effectuer de recherche sur elasticsearch
const search = (search_params) => {
  // la fonction est ansynchrone donc on retourne une Promesse
  return new Promise((resolve, reject) => {
    esClient.search(search_params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// exports
module.exports = {
  search,
};
