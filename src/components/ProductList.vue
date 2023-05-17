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
              <q-card-title class="text-h4 item-title">{{
                product.name
              }}</q-card-title>
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
                  @click="showDetails(product)"
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
import { useQuasar } from 'quasar';
import { stm } from 'simple-toast-messages';

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
    const $q = useQuasar();
    const $toast = stm.getInstance();

    function showDetails(p: Product) {
      $q.dialog({
        title: 'ProductDetails',
        message: `<b>Product:</b> ${p.name} <br> <b>Price:</b> ${p.price} € <br> <b>Description:</b> ${p.description}`,
        persistent: true,
        html: true,
        class: 'bg-primary text-white q-pa-md text-h6',
        ok: {
          label: 'Buy?',
          color: 'primary',
        },
        cancel: {
          label: 'Cancel',
          color: 'negative',
        },
      })
        .onOk(() => {
          $toast.error('Ein fehler ist beim kauf aufgetreten!', 5000);
        })
        .onCancel(() => {
          $toast.info('Der kauf wurde abgebrochen!', 5000);
        });
    }
    return { showDetails };
  },
});
</script>

<style lang="sass" scoped>
@import '../css/_mixins'

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
  width: 100%
  padding: 0 10px

.item
  width: 30rem
  height: 18rem
  margin: 1rem
  display: flexbox
  justify-content: center
  align-items: center

  .item-title
    @include notouch

  .details-button
    width: 100%
    margin: 0 auto

  .price
    font-size: 1.5rem
    width: 100%
    font-weight: bold
    color: #1976d2
    text-align: right
    @include notouch

  .img
    width: 100%
    height: 100px
    overflow: hidden
    float: right
    margin: 0 auto
    @include notouch
</style>
