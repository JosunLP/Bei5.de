<template>
  <q-page class="flex flex-center">
    <div class="text-h1">Shop</div>
    <q-separator />
    <ProductList :productsInput="products" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Product } from '../models/product.model';
import ProductList from '../components/ProductList.vue';

const productList: Product[] = [
  new Product(
    'Classic',
    30,
    'The good old classic',
    'wood.jpg',
    'medical',
    10,
    5
  ),
  new Product(
    'Rubber Pipe',
    40,
    'The fancy new one',
    'wood.jpg',
    'medical',
    10,
    5
  ),
];

export default defineComponent({
  name: 'ShopPage',
  components: {
    ProductList,
  },
  setup() {
    return {
      products: ref(productList),
    };
  },
});
</script>

<style lang="sass" scoped></style>
