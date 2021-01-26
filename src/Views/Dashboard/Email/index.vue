<template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      show-select
      :headers="headers"
      :items="users"
      :items-per-page="5"
      :search="search"
      :loading="false"
      loading-text="Carregando... Aguarde por favor"
    >
      <!-- <template v-slot:item.company="{ item }">
        {{ item.company.catchPhrase }},
      </template> -->

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="select('update', item.id)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="select('delete', item.id)"> mdi-delete </v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-container v-if="loading.request">
          <v-card-text>
            <h3>Aguarde...</h3>
          </v-card-text>
          <v-progress-linear
            indeterminate
            color="purple"
            class="mb-0"
          ></v-progress-linear>
        </v-container>
        <v-container v-else>
          <v-card-title class="headline">Excluir</v-card-title>
          <v-card-text>
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }}</p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click.prevent.stop="dialog = false">Cancelar</v-btn>
            <v-btn
              color="error"
              @click.prevent.stop="remove(user.id)"
              :loading="loading.remove"
              >Excluir</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      Excluído com sucesso
    </v-snackbar>
  </v-card>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
