<template>
  <div>
    <h1>Design System</h1>
    <SimpleButton>Some button</SimpleButton>
  </div>
</template>
<script>
import SimpleButton from "./components/SimpleButton";
export default {
  name: "App",
  components: {
    SimpleButton
  }
};
</script>
<style lang="scss">
@import "./design";
</style>
