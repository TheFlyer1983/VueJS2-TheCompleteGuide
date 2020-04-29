<template>
  <div>
    <portfolio-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stocksPortfolio"
    })
  },
  components: {
    portfolioStock: Stock
  }
};
</script>
