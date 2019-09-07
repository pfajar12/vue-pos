<template>
  <div id="app" class="container-fluid">
    <div id="top-side">
      <Search />
    </div>
    <div id="bottom-side" class="col-12">
      <div class="row">
        <ItemDisplay />
        <Counter />
      </div>
    </div>
  </div>
</template>

<script>
import ItemDisplay from "./components/ItemDisplay.vue";
import Counter from "./components/Counter.vue";
import Search from "./components/Search.vue";

export default {
  name: "app",
  components: {
    ItemDisplay,
    Counter,
    Search
  }
};
</script>

<style scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

#bottom-side {
  /* display: flex; */
}
</style>
