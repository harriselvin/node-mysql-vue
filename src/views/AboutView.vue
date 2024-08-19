<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getFruits()">Get Fruit</button>
  </div>
</template>

<script>
  export default {
    methods: {
      getFruits() {
        this.$store.dispatch('getFruits')
      }
    }
  }
</script>
<style>

</style>
