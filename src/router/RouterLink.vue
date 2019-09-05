<template>
  <span style="cursor: pointer;" @click="go()"><slot></slot></span>
</template>

<script>
export default {
  props: ["to"],
  created() {
    console.log(this.to)
  },

  methods: {
    go () {
      window.history.pushState({}, this.to, this.to)
      const comp = this.$myrouter.getComponent(this.to)
      this.$myroute.comp = comp

    }
  }
}
</script>