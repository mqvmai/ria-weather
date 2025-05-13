<template>
  <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <v-app-bar-title>Simple Weather</v-app-bar-title>
        <template v-slot:append>
          <v-btn icon="mdi-magnify"></v-btn>
        </template>
      </v-app-bar>
    </v-layout>
  </v-card>
  <slot />
</template>

<script setup lang="ts">
</script>