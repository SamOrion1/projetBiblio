<template>
  <div>
    <h1>Livre</h1>
    <h1>{{ books }}</h1>
  </div>
</template>
 
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Livre-Livre",
  data: () => ({
    books : [] as any
  }),
  async mounted () {
    await this.$store.dispatch('getBooks');
    this.books = this.$store.getters.allBooks;
  }
}) 
</script>