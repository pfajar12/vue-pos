<template>
  <div class="item-display card col-8">
    <div class="card-body">
      <div class="item-content">
        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-xs-12 mb-4"
            v-for="(product, index) in showPercategory ? productsPercategory : products"
            :key="index"
          >
            <div class="card" :title="product.name">
              <div style="height: 200px;">
                <img :src="product.imgUrl" class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title text-truncate">{{product.name}}</h5>
                <a href="#" class="btn btn-primary" @click.prevent="orderProduct(product)">ORDER</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  // name: "ItemDisplay",
  computed: {
    ...mapGetters(["products", "showPercategory", "productsPercategory"])
  },
  methods: {
    ...mapActions(["orderProduct"])
  }
};
</script>

<style scoped>
.item-display {
  flex: 2;
}
.item-content {
  max-height: 800px;
  overflow: auto;
  overflow-x: hidden;
}
.item-display img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
