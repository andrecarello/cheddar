<template>
  <v-app>
    <fd-menu />
    <fd-sidebar />

    <v-main>
      <v-container fluid>
        <v-breadcrumbs divider="/" :items="breadcrumb"></v-breadcrumbs>
        <v-row>
          <v-col cols="12">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
