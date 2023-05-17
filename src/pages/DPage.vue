<template>
  <q-page class="flex flex-center">
    <div class="text-h2">Datenschutz</div>
    <q-separator />
    <div class="content">
      <q-card class="c">
        <p>
          <strong>Erhebung und Verwendung von Daten:</strong>
          Wir erheben keine personenbezogenen Daten auf Bei5.de. Da es sich um
          eine Parodie handelt und keine tatsächlichen Dienste oder Produkte
          angeboten werden, ist die Angabe von persönlichen Daten nicht
          erforderlich.
        </p>
        <p>
          <strong>Cookies:</strong> Wir setzen auf Bei5.de keine Cookies ein. Es
          werden keine Daten über Ihren Besuch auf unserer Website gespeichert.
        </p>
        <p>
          <strong>Externe Links:</strong> Auf Bei5.de können Links zu externen
          Websites führen, auf die diese Datenschutzerklärung nicht anwendbar
          ist. Bitte beachten Sie die Datenschutzerklärungen der verlinkten
          Websites.
        </p>
        <p>
          <strong>Datensicherheit:</strong> Wir treffen angemessene technische
          und organisatorische Maßnahmen, um Ihre Daten gegen unbeabsichtigte
          oder unrechtmäßige Verarbeitung, Verlust oder Zerstörung zu schützen.
          Da wir jedoch keine personenbezogenen Daten erheben, werden keine
          entsprechenden Sicherheitsmaßnahmen benötigt.
        </p>
        <p>
          <strong>Änderungen der Datenschutzerklärung:</strong> Wir behalten uns
          vor, diese Datenschutzerklärung jederzeit zu ändern, um sie an
          rechtliche Anforderungen oder technische Entwicklungen anzupassen.
          Bitte überprüfen Sie diese Seite regelmäßig, um über etwaige
          Änderungen informiert zu bleiben.
        </p>
        <p>
          <strong>Kontakt:</strong> Wenn Sie Fragen oder Anliegen bezüglich
          unserer Datenschutzerklärung haben, können Sie uns gerne kontaktieren
          unter:
          <strong> Bei5.de </strong>
          <br />
          <strong>Fiktive Straße 123</strong>
          <br />
          <strong>12345 Fiktive Stadt</strong>
          <br />
          <strong>E-Mail: datenschutz@bei5.de</strong>
        </p>
        <strong>
          Bitte beachten Sie, dass die oben genannte Datenschutzerklärung nur
          fiktiv ist und ausschließlich für den Zweck einer Parodie für einen
          Rollenspielserver erstellt wurde. Sie hat keinerlei rechtliche
          Gültigkeit oder Bindung.
        </strong>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrivacyPage',
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
