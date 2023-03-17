<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-left">
        <ul ref="dropDown" class="dropdown menu" data-dropdown-menu>
          <li class="menu-text">Документы</li>
        </ul>
      </div>
    </div>
    <div class="expanded row" id="content">
      <div class="columns small-12">
        <router-view></router-view>
      </div>
    </div>
    <install-p-w-a v-if="appInBrowser" />
  </div>
</template>

<script>
  import InstallPWA from '../components/InstallPWA'

  export default {
    components: {
      InstallPWA
    },
    data () {
      return {
        appInBrowser: false
      }
    },
    beforeMount () {
      this.appInBrowser = this.getPWADisplayMode() !== 'standalone';
      console.log(this.appInBrowser);
    },

    methods: {
      getPWADisplayMode: () => {
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        if (document.referrer.startsWith('android-app://')) {
          return 'twa';
        } else if (navigator.standalone || isStandalone) {
          return 'standalone';
        }
        return 'browser';
      }
    }
  }
</script>
