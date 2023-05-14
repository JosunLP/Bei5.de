<template>
  <q-item class="flex flex-center">
    <div class="text-h3">{{ productInput.name }}</div>
    <q-item-section> </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Product } from 'src/models/product.model';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductList',
  components: {},
  props: {
    productInput: {
      type: Product,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
