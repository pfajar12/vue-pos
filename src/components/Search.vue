<template>
  <div class="search">
    <!-- <div class="card mb-3">
      <div class="card-body">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Product Name" />
          <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
    </div>-->

    <div class="card mb-3">
      <div class="card-body">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a
              :class="['nav-link', activeCategory=='all' ? 'active' : '']"
              href="#"
              @click.prevent="showAllProduct()"
            >All</a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              :class="['nav-link', activeCategory=='food' ? 'active' : '']"
              @click.prevent="showProduct('food')"
            >Food</a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              :class="['nav-link', activeCategory=='beverage' ? 'active' : '']"
              @click.prevent="showProduct('beverage')"
            >Beverage</a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              :class="['nav-link', activeCategory=='coffee' ? 'active' : '']"
              @click.prevent="showProduct('coffee')"
            >Coffee</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["activeCategory"])
  },
  methods: {
    ...mapActions(["showProduct", "showAllProduct"])
  }
};
</script>

<style scoped>
.activelink {
  color: red !important;
}
</style>