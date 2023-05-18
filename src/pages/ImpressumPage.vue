<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h2">Impressum</div>
    </div>
    <q-separator />
    <div class="content">
      <q-card class="c">
        <article
          id="post-27"
          class="post-27 page type-page status-publish hentry"
        >
          <div class="hero-section" data-type="type-1">
            <header class="entry-header"></header>
          </div>
          <div class="entry-content">
            <h2 class="wp-block-heading">Angaben gemäß § 5 TMG</h2>
            <p>Jonas Pfalzgraf<br />Alter Heidberg 22<br />22846 Norderstedt</p>
            <h2 class="wp-block-heading">Kontakt</h2>
            <p>E-Mail: info@josunlp.de</p>
            <h3 class="wp-block-heading">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
            <h3 class="wp-block-heading">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
            <h3 class="wp-block-heading">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
            <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
          </div>
        </article>
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
    text-align: left
</style>
