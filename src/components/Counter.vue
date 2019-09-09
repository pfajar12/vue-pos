<template>
  <div class="counter col-4">
    <div class="card">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="productOrdered.length<1">
                <td>No Data</td>
              </tr>
              <tr v-for="(item, index) in productOrdered" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.qty}}</td>
                <td>${{item.price}}</td>
                <td>
                  <button class="btn btn-danger btn-sm" @click="removeOrderedProduct(index)">x</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="2">Total</th>
                <th>${{priceTotal}}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["productOrdered", "priceTotal", "priceTotalHelper"])
  },
  methods: {
    ...mapActions(["removeOrderedProduct"])
  }
};
</script>

<style scoped>
.counter {
  /* flex: 1; */
}

table {
  text-align: left;
}
</style>