<template>
  <div>
    this is room haha
    <p>my p tag</p>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  middleware: ["mw1"],
  layout: "custom"
};
</script>

<style></style>
