<template>
  <v-container
    class="fill-height"
    fluid
    style="border:1px solid #fff"
  >
    <v-row
      align="center"
      justify="center"
      style="border: 1px solid #00F"
    >
      <v-col
        class=""
        style="border: 1px solid #0FF"
      >
        Inicio
        <app-pass-str v-model="passwordds"></app-pass-str>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  data: () => ({
    passwordds: 'A56b12a.'
  })
}
</script>
