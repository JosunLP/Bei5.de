<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h2">Willkommen bei Bei5.de</div>
      <div class="seccond-title">
        Ihrem führenden Anbieter für einzigartige Beißhölzer!
      </div>
    </div>

    <q-separator />
    <div class="content">
      <q-card class="c c-1"
        >Wir sind stolz darauf, Ihnen eine breite Palette von Beißholzvarianten
        anzubieten, die Ihren individuellen Bedürfnissen im medizinischen und
        Fetischbereich gerecht werden. Bei5.de ist mehr als nur ein gewöhnlicher
        Online-Shop. Wir sind eine leidenschaftliche Gruppe von Experten, die
        sich der Entwicklung und Herstellung innovativer Beißhölzer verschrieben
        haben.</q-card
      >
      <q-card class="c c-2">
        Unsere Produkte verkörpern Qualität, Funktionalität und ein hohes Maß an
        Kreativität. Unser Sortiment umfasst eine Vielzahl von
        Beißholzvarianten, die von modernen Versionen aus Gummi und Metall bis
        hin zu ungewöhnlichen Formen wie Ballbeißstangen mit fixierbarem Gurt
        reichen.</q-card
      >
      <q-card class="c c-1"
        >Jedes Beißholz wird sorgfältig entworfen, um ein einzigartiges
        Kauerlebnis zu bieten und gleichzeitig höchsten Komfort zu
        gewährleisten. Wir legen großen Wert auf Materialien von höchster
        Qualität, um sicherzustellen, dass unsere Produkte langlebig, hygienisch
        und sicher sind. Bei Bei5.de steht die Kundenzufriedenheit an erster
        Stelle. Wir bieten Ihnen nicht nur hochwertige Produkte, sondern auch
        einen exzellenten Kundenservice.</q-card
      >
      <q-card class="c c-2"
        >Unser Team steht Ihnen jederzeit zur Verfügung, um Fragen zu
        beantworten, Empfehlungen zu geben und sicherzustellen, dass Sie die
        perfekte Beißstange finden, die Ihren Anforderungen entspricht. Wir sind
        stets bestrebt, unsere Produktpalette zu erweitern und innovative
        Lösungen zu entwickeln, um Ihr Kauvergnügen zu maximieren. Bei5.de
        bleibt stets auf dem neuesten Stand der Trends und Technologien im
        Bereich der Beißhölzer, um Ihnen das Beste bieten zu können.</q-card
      >

      <q-card class="c c-3"
        >Entdecken Sie die Welt des Kauens mit Bei5.de! Besuchen Sie unsere
        Website, um unser umfangreiches Sortiment zu erkunden und Ihr perfektes
        Beißholz zu finden. Wir sind stolz darauf, Ihnen Produkte anzubieten,
        die nicht nur funktional sind, sondern auch einen Hauch von Spaß und
        Originalität mit sich bringen. Tauchen Sie ein in die vielfältige Welt
        der Beißhölzer und erleben Sie das Kauvergnügen in seiner besten Form
        mit Bei5.de!</q-card
      >
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped>
@import '../css/_mixins'

.seccond-title
  font-size: 5em
  @include respond-to('handhelds')
    font-size: 2em
  @include respond-to('medium-screens')
    font-size: 3em
  @include respond-to('wide-screens')
    font-size: 5em
  font-weight: 300
  font-family: 'Roboto', sans-serif
  text-align: center
  margin-bottom: 1em
  margin-top: 0.5em

.content
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  margin-top: 1em
  max-width: 85%

  .c
    max-width: 60rem
    margin-bottom: 1em
    padding: 1em
    font-size: 1.5em
    font-weight: 300
    font-family: 'Roboto', sans-serif
    text-align: center

  .c-1
    background-color: $secondary
    align-self: flex-start

  .c-2
    background-color: $accent
    align-self: flex-end

  .c-3
    background-color: $primary
    align-self: flex-start
    width: 100%
    max-width: 100%
</style>
