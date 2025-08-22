<template>
  <component :is="selectedChild" />
</template>

<script>
export default {
  name: "SelectRandomChild",
  data() {
    return {
      selectedChild: null,
    };
  },
  mounted() {
    // Get all children passed into the default slot
    const children = this.$slots.default ? this.$slots.default() : [];

    if (children.length > 0) {
      // Pick a random child vnode
      const randomIndex = Math.floor(Math.random() * children.length);
      this.selectedChild = children[randomIndex];
    }
  },
};
</script>
