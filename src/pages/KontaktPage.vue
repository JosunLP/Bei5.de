<template>
  <q-page class="flex flex-center">
    <div class="text-h2">Kontakt</div>
    <q-separator />
    <div class="content">
      <q-card class="c">
        <q-form>
          <div class="name">
            <q-input
              filled
              v-model="name"
              label="Name"
              lazy-rules
              required
              :rules="[(val) => !!val || 'Bitte gib deinen Namen ein']"
            />
          </div>
          <div class="email">
            <q-input
              filled
              v-model="email"
              label="E-Mail"
              lazy-rules
              type="email"
              required
              :rules="[(val) => !!val || 'Bitte gib deine E-Mail ein']"
            />
          </div>
          <div class="message">
            <q-input
              filled
              v-model="message"
              label="Nachricht"
              type="textarea"
              lazy-rules
              required
              :rules="[(val) => !!val || 'Bitte gib eine Nachricht ein']"
            />
          </div>
          <div class="button float-right">
            <q-btn
              color="primary"
              label="Absenden"
              type="submit"
              class="q-mt-md"
              @click="send()"
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { stm } from 'simple-toast-messages';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KontaktPage',
  components: {},
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    send() {
      const $toast = stm.getInstance();
      $toast.warning('Eine Weiterleitung erfolgt', 10000);
      window.location.replace('https://github.com/JosunLP/Bei5.de');
    },
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
  width: 100%

  .c
    max-width: 90%
    width: 100%
    margin-bottom: 1em
    padding: 1em
    font-size: 1.5em
    font-weight: 300
    font-family: 'Roboto', sans-serif
    text-align: center
</style>
