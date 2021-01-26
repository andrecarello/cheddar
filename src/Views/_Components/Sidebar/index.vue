<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet
      color="purple darken-4"
      class="d-flex justify-center align-center"
      height="64"
      width="auto"
    >
      <v-img
        contain
        lazy-src="https://fator.ag/assets/images/logo-fator.svg"
        max-height="80"
        max-width="150"
        src="https://fator.ag/assets/images/logo-fator.svg"
      ></v-img>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="[icon, text, url, model] in links"
        :key="icon"
        :to="url"
        link
        exact
        @click.native="select(model)"
      >
        <v-list-item-icon>
          <v-icon aria-hidden="false" aria-label="My Account" role="img">{{
            icon
          }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
