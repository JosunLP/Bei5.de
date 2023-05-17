<template>
  <q-page class="flex flex-center">
    <div class="text-h2">Shop</div>
    <q-separator />
    <ProductList :productsInput="products" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Product } from '../models/product.model';
import ProductList from '../components/ProductList.vue';
import { InitData } from 'src/boot/initData';

const data = InitData.getInstance();

const productList: Product[] = data.products;

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
