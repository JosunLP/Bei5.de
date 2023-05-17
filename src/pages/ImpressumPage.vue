<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h2">Impressum</div>
    </div>
    <q-separator />
    <div class="content">
      <q-card class="c">
        <h3>Angaben gemäß § 5 TMG:</h3>
        <p>
          <strong>Verantwortlich für den Inhalt: Bei5.de Inhaber:</strong>
          Pferdinant Beiß
        </p>
        <h4>Kontakt:</h4>
        <p>
          <strong>Anschrift:</strong> Fiktive Straße 123, 12345 Fiktive Stadt
        </p>
        <p><strong>Telefon:</strong> +49 (0) 123 456789</p>
        <p><strong>E-Mail:</strong> kontakt@bei5.de</p>
        <h4>Umsatzsteuer-ID:</h4>
        <p><strong>Gemäß § 27a Umsatzsteuergesetz:</strong> DE123456789</p>
        <p>
          <strong>Haftungshinweis:</strong> Trotz sorgfältiger inhaltlicher
          Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren
          Betreiber verantwortlich. Urheberrecht: Die Inhalte und Werke auf
          dieser Website unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers. Hinweis zur Parodie:
          Bei5.de ist eine Parodie und dient reinen Unterhaltungszwecken. Die im
          Shop angebotenen Beißhölzer und Produkte sind fiktiv und dienen der
          Rollenspielserver-Parodie. Jegliche Ähnlichkeiten mit real
          existierenden Personen, Produkten oder Unternehmen sind rein zufällig.
          Wir distanzieren uns ausdrücklich von der Verwendung der Informationen
          für andere als parodistische Zwecke. Bitte beachten Sie, dass das oben
          genannte Impressum nur fiktiv ist und ausschließlich für den Zweck
          einer Parodie für einen Rollenspielserver erstellt wurde. Es hat
          keinerlei rechtliche Gültigkeit oder Bindung.
        </p>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImpressumPage',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped>
.content
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  margin-top: 1em
  max-width: 85%

  .c
    max-width: 90%
    margin-bottom: 1em
    padding: 1em
    font-size: 1.5em
    font-weight: 300
    font-family: 'Roboto', sans-serif
    text-align: center
</style>
