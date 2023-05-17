<template>
  <q-page class="items-center justify-evenly">
    <div class="home-header">
      <q-img src="/svg/LogoStar.svg" class="q-ma-md Logo" />
      <h1 class="text-h1">Willkommen bei Bei5.de</h1>
      <h4 class="text-h4">
        Ihr Fachhandel für Medizinische Beißhölzer und mehr!
      </h4>

      <q-btn
        class="q-mt-md shop-button"
        color="primary"
        label="Zum Shop"
        to="/shop"
        v-close-popup
      />
    </div>
    <q-separator />
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      autoplay
      infinite
      autoplay-interval="3000"
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="slide-1" class="flex flex-center text-h6">
        <h3>Klassische Beißhölzer</h3>
      </q-carousel-slide>
      <q-carousel-slide name="slide-2" class="flex flex-center text-h6">
        <h3>Beißhölzer mit Geschmack</h3>
      </q-carousel-slide>
      <q-carousel-slide name="slide-3" class="flex flex-center text-h6">
        <h3>Innovationen!</h3>
      </q-carousel-slide>
      <q-carousel-slide name="slide-4" class="flex flex-center text-h6">
        <h3>Für den Spielerischen Ansatz!</h3>
      </q-carousel-slide>
    </q-carousel>
    <q-separator />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup() {
    return {
      slide: ref('slide-1'),
    };
  },
});
</script>

<style lang="sass" scoped>
@import '../css/_mixins'

.Logo
  margin-top: 2rem
  margin-bottom: 0
  overflow: visible
  @include respond-to(handhelds)
    height: 200px
    width: 200px
  @include respond-to(medium-screens)
    height: 300px
    width: 300px
  @include respond-to(large-screens)
    height: 400px
    width: 400px

.text-h1
  font-size: 3rem
  line-height: 1.2
  margin-top: 0
  @include respond-to(medium-screens)
    font-size: 4rem
  @include respond-to(large-screens)
    font-size: 5rem

.text-h4
  font-size: 1.5rem
  line-height: 1.2
  margin-top: 0
  @include respond-to(medium-screens)
    font-size: 2rem
  @include respond-to(large-screens)
    font-size: 2.5rem

.home-header
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 100vh

.shop-button
  width: 200px
  height: 50px
  font-size: 1.5rem
  font-weight: 500
  border-radius: 5px
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5)
  transition: box-shadow 0.2s ease-in-out

  &:hover
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5)
</style>
