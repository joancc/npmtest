<script>
export default {
  name: "SimpleIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    htmlTag: {
      type: String,
      default: "i"
    }
  }
};
</script>

<template>
  <component
    :is="htmlTag"
    class="material-icons-round  no-user-select select-none"
    :class="{ iconSize: htmlTag === 'i' }"
    :title="title"
    v-on="$listeners"
    >{{ icon }}</component
  >
</template>
<style lang="scss" scoped>
.iconSize {
  font-size: inherit;
}
.no-user-select {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
</style>
