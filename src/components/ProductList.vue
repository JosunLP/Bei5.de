<template>
  <q-item class="flex flex-center component">
    <q-item-section id="productList">
      <q-card
        v-for="product in productsInput"
        v-bind:key="product.id"
        class="item"
      >
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-card-title class="text-h5">{{ product.name }}</q-card-title>
              <q-card-main>
                <q-img
                  :src="'/images/' + product.image"
                  class="img"
                  spinner-color="white"
                  spinner-size="50"
                />
              </q-card-main>
              <q-card-separator />
              <label class="price">{{ product.price }} €</label>
              <q-card-separator />
              <q-card-actions>
                <q-btn
                  class="q-mt-md details-button"
                  color="primary"
                  label="Details"
                  v-close-popup
                />
              </q-card-actions>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Product } from 'src/models/product.model';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductList',
  components: {},
  props: {
    productsInput: {
      type: Array as () => Product[],
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped>

.component
  display: block
  margin: 0 auto
  width: 100%
  padding: 0 10px
  box-sizing: border-box

  #title
    text-align: center
    font-size: 2rem
    font-weight: bold
    margin: 10px 0

#productList
  display: flex
  flex-wrap: wrap
  flex-direction: row
  justify-content: center
  align-items: center
  margin: 0 auto
  max-width: 1000px
  width: 100%
  padding: 0 10px

.item
  width: 300px
  margin: 10px
  display: flexbox
  justify-content: center
  align-items: center

  .details-button
    width: 100%
    margin: 0 auto

  .price
    font-size: 1.5rem
    width: 100%
    font-weight: bold
    color: #1976d2
    text-align: right

  .img
    width: 100%
    height: 100px
    overflow: hidden
    float: right
    margin: 0 auto
</style>
