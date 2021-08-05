<template>
  <header class="app-header">
    <h1>SearchApp</h1>
    <div class="search-input-group">
      <span class="search-icon"
        ><img src="../assets/search_icon.png" alt=""
      /></span>
      <input
        type="text"
        name=""
        id="search-input"
        placeholder="Entrez un mot..."
        v-model="searchInput"
        v-on:keyup.enter="search"
        v-on:keyup="suggest"
      />
      <button @click="search">search</button>
    </div>
    <div class="suggestions" v-if="!isSuggestion">
      <ul class="suggest-list">
        <li v-for="sugg in get_suggestions" :key="sugg['_source']['title']">
          <a :href="sugg['_source']['url']" target="blank">
            {{ sugg["_source"]["title"] }}</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  props: ["resultReady"],
  data() {
    return {
      searchInput: "",
      suggestions: [],
      noSuggestion: true,
    };
  },
  methods: {
    search() {
      if (this.searchInput !== "") {
        this.suggestions = []; // initialise le tableau des suggestions
        this.$emit("perform_search", this.searchInput);
        this.noSuggestion = true;
      }
    },
    suggest(e) {
      if (e.key === "Enter") {
        this.search();
      } else if (this.searchInput.length >= 3) {
        let url = "http://localhost:3000/suggest/" + this.searchInput + "/";
        axios
          .get(url)
          .then((response) => {
            if (response.data["hits"]["hits"].length > 0) {
              this.suggestions = response.data["hits"]["hits"];
              this.noSuggestion = false;
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        this.suggestions = [];
        this.noSuggestion = true;
      }
    },
  },
  computed: {
    get_suggestions() {
      return this.suggestions.length > 0 ? this.suggestions : undefined;
    },
    isSuggestion() {
      return this.noSuggestion;
    },
  },
  watch: {
    resultReady(newResultReady) {
      if (newResultReady) {
        this.suggestions = [];
      }
    },
  },
};
</script>

<style>
.app-header {
  color: #3e30ff;
  text-align: center;
  font-size: 1em;
  opacity: 1.2;
  width: 100%;
}
.app-header h1 {
  font-size: 1.4em;
  padding-top: 1em;
}
.search-input-group input,
.search-input-group button {
  border: none;
  outline: none;
}
.search-input-group {
  position: relative;
  width: 300px;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 2em;
}
.search-icon img {
  width: 18px;
  margin-left: 0.8em;
  margin-top: 0.6em;
}
.search-icon {
  display: block;
  background: rgba(255, 255, 255, 0.7);
  margin: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}
input {
  height: 35px;
  width: 100%;
  padding-left: 0.5em;
  background: rgba(255, 255, 255, 0.7);
  color: #797979;
}
button {
  height: 37px;
  padding: 0.5em;
  width: 70px;
  border-radius: 25px;
  margin-left: -1.2em;
  color: #fff;
  background: #3e30ff;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.suggestions {
  width: 300px;
  background: rgba(255, 255, 255, 0.7);
  margin: auto;
  border-radius: 25px;
  margin-top: -37px;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 1em;
}
.suggest-list {
  margin: 0;
  padding: 0;
  text-align: left;
  padding-left: 2em;
  list-style-type: none;
}
.suggest-list li {
  margin-top: 0.3em;
}
.suggest-list li a {
  color: #797979;
  font-weight: 550;
  text-decoration: none;
  font-size: 0.9em;
}
.suggest-list li a:hover {
  font-weight: 600;
}
@media (min-width: 768px) {
  .search-input-group,
  .suggestions {
    width: 450px;
  }
  .search-input-group input {
    font-size: 0.9em;
  }
  .search-input-group input {
    height: 40px;
  }
  .search-input-group button {
    height: 42px;
    width: 90px;
  }
  .suggestions {
    margin-top: -42px;
  }
  .search-icon img {
    margin-top: 0.8em;
  }
  .app-header {
    font-size: 1.2em;
  }
  .app-header h1 {
    font-size: 1.3em;
    text-align: left;
    width: 450px;
    margin: auto;
    padding-top: 1.2em;
    padding-bottom: 0.4em;
  }
  .search-input-group {
    margin-top: 0.7em;
  }
}

@media (min-width: 1024px) {
  .search-input-group,
  .suggestions {
    width: 600px;
  }
  .search-input-group input {
    height: 45px;
  }
  .search-input-group button {
    height: 47px;
    width: 100px;
  }
  .suggestions {
    margin-top: -47px;
  }
  .search-icon img {
    margin-top: 0.8em;
  }
  .app-header {
    font-size: 1.2em;
  }
  .app-header h1 {
    width: 600px;
  }
}
</style>