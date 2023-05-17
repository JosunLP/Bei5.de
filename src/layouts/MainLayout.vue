<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title
          ><a href="/" class="title"> Bei5.de </a></q-toolbar-title
        >

        <div>Shop v.{{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-item-label footer class="dev-info">
        Developed by <a href="https://josunlp.de">JosunLP.de</a> <br />
        <a href="https://github.com/JosunLP/Bei5.de">Source Code</a>
      </q-item-label>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { version } from '../../package.json';

const linksList = [
  {
    title: 'Index',
    caption: 'Willkomen bei Bei5.de',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Shop',
    caption: 'Hier kannst du einkaufen',
    icon: 'shopping_cart',
    link: '#/shop',
  },
  {
    title: 'About',
    caption: 'Über uns',
    icon: 'info',
    link: '#/about',
  },
  {
    title: 'Kontakt',
    caption: 'Kontaktiere uns',
    icon: 'email',
    link: '#/contact',
  },
  {
    title: 'Impressum',
    caption: 'Impressum',
    icon: 'description',
    link: '#/impressum',
  },
  {
    title: 'Datenschutz',
    caption: 'Datenschutz',
    icon: 'description',
    link: '#/datenschutz',
  },
  {
    title: 'Login',
    caption: 'Login',
    icon: 'login',
    link: '#/um',
  },
  {
    title: 'Register',
    caption: 'Register',
    icon: 'login',
    link: '#/um',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      version: version,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="sass" scoped>

.title
  color: white
  text-decoration: none
  font-size: 1.5em
  font-weight: bold
  &:hover
    color: white
    text-decoration: none

header
  background-color: $secondary
  color: white
  min-height: 5rem

  .q-toolbar
    min-height: 5rem

.dev-info
  font-size: 0.8em
  text-align: center
  margin-top: 1rem
  bottom: 0
  left: 0
  right: 0

  a
    color: $secondary
    text-decoration: none
    &:hover
      color: $secondary
      text-decoration: underline
</style>
