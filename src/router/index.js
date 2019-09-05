import RouterView from './RouterView'
import RouterLink from './RouterLink'

export default class Router {
  constructor (options) {
    this.routes = options.routes
  }

  getComponent(path) {
    const route = this.routes.filter(route => {
      return route.path === path
    })[0]
    return route ? route.component : null
  }
}

Router.install = (Vue) => {
  Vue.mixin({
    beforeCreate() {
      const router = this.$options.router

      if (!router) {
        this.$myrouter = this.$root.$myrouter
        this.$myroute = this.$root.$myroute
        // console.log(this)
        return
      }
      
      this.$myrouter = router
      const path = window.location.pathname
      const comp = router.getComponent(path)
      this.$myroute = Vue.observable({
        path,
        comp
      })

      this.popState = () => {
        const comp = this.$myrouter.getComponent(window.location.pathname)
        this.$myroute.comp = comp
      }

      window.addEventListener('popstate', this.popState)
    },

    beforeDestroy() {
      if (this.popState) {
        window.removeEventListener('popstate', this.popState)
      }
    }
  })

  Vue.component('router-view', RouterView)
  Vue.component('router-link', RouterLink)
}