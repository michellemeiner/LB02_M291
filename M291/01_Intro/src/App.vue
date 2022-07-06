<template>
  <div>
    <!-- Usage of: # router-view # -->
    <!-- router-view loads depending on the current URL the corresponding Vue component -->
    <router-view />
  </div>
</template>

<script>

export default {
  components: {
    // Empty due to the router-view handling the loading of components
  }
}
</script>

<style lang="scss">
@import 'styles/global';
</style>
