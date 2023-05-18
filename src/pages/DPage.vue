<template>
  <q-page class="flex flex-center">
    <div class="text-h2">Datenschutz</div>
    <q-separator />
    <div class="content">
      <q-card class="c">
        <h4>Erhebung und Verwendung von Daten:</h4>
        <p>
          Wir erheben keine personenbezogenen Daten auf Bei5.de. Da es sich um
          eine Parodie handelt und keine tatsächlichen Dienste oder Produkte
          angeboten werden, ist die Angabe von persönlichen Daten nicht
          erforderlich.
        </p>
        <h4>Cookies:</h4>
        <p>
          Wir setzen auf Bei5.de keine Cookies ein. Es werden keine Daten über
          Ihren Besuch auf unserer Website gespeichert.
        </p>
        <h4>Externe Links:</h4>
        <p>
          Auf Bei5.de können Links zu externen Websites führen, auf die diese
          Datenschutzerklärung nicht anwendbar ist. Bitte beachten Sie die
          Datenschutzerklärungen der verlinkten Websites.
        </p>
        <h4>Datensicherheit:</h4>
        <p>
          Wir treffen angemessene technische und organisatorische Maßnahmen, um
          Ihre Daten gegen unbeabsichtigte oder unrechtmäßige Verarbeitung,
          Verlust oder Zerstörung zu schützen. Da wir jedoch keine
          personenbezogenen Daten erheben, werden keine entsprechenden
          Sicherheitsmaßnahmen benötigt.
        </p>
        <h4>Änderungen der Datenschutzerklärung:</h4>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern,
          um sie an rechtliche Anforderungen oder technische Entwicklungen
          anzupassen. Bitte überprüfen Sie diese Seite regelmäßig, um über
          etwaige Änderungen informiert zu bleiben.
        </p>
        <h4>Kontakt:</h4>
        <p>
          Wenn Sie Fragen oder Anliegen bezüglich unserer Datenschutzerklärung
          haben, können Sie uns gerne kontaktieren unter:
          <strong> Bei5.de </strong>
          <br />
          Jonas Pfalzgraf<br />
          Alter Heidberg 22,<br />
          22846 Norderstedt<br />
          E-Mail: info@josunlp.de <br />
        </p>
        <h4>SSL- bzw. TLS-Verschlüsselung</h4>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </p>
        <h4>Kontaktformular</h4>
        <p>
          Das Kontaktformular auf dieser Website speichert keine Daten. Es ist
          ein Dummy, welcher zu der entsprechenden Github Seite weiterleitet.
        </p>
        <h4>Anfrage per E-Mail, Telefon oder Telefax</h4>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde.
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
          bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres
          Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
          gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </p>
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
    text-align: left
</style>
