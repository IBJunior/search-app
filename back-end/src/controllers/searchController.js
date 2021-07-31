const { search } = require("../services/elasticsearch");

// effectuer la recherche sur elasticsearch
const perform_search = (req, res) => {
  search(search_params(req.params.search_input, req.params.page))
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
// obtenir des suggestions de recherche
const get_suggestion = (req, res) => {
  search({
    index: process.env.INDEX_NAME,
    body: get_suggest_query(req.params.query),
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
// construction du coprs de la requête à envoyer à elasticsearch
function search_params(search_input, page) {
  // on l'indique les informations du résultat qui nous intéressent via filter_path
  let filter_path = ["hits.hits", "hits.total"];
  // les paramètres de recherche
  let body = {
    query: get_search_query(search_input),
    from: page,
    size: 5,
    highlight: {
      pre_tags: "<b>",
      post_tags: "</b>",
      fields: {
        content_plain: {
          type: "plain",
        },
      },
    },
  };
  return {
    index: process.env.INDEX_NAME,
    filterPath: filter_path,
    body: body,
  };
}
// corps de la requête pour la recherche
function get_search_query(search_input) {
  return {
    bool: {
      must: [
        {
          multi_match: {
            query: search_input,
            fields: ["title^3", "content_plain"],
            type: "phrase",
          },
        },
      ],
      should: [
        {
          multi_match: {
            query: search_input,
            fields: ["title^3", "content_plain"],
          },
        },
      ],
    },
  };
}
// suggestion avec les ng-grams
function get_suggest_query(search_input) {
  return {
    query: {
      multi_match: {
        query: search_input,
        type: "bool_prefix",
        fuzziness: 1,
        fields: ["title", "title._2gram", "title._3gram"],
      },
    },
    _source: ["title", "publication-date", "url"],
    size: 5,
  };
}

// exports
module.exports = {
  perform_search,
  get_suggestion,
};
