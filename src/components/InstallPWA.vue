<template>
  <div class="install-view">
    <button @click="installApp">Установить приложение</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        deferredPrompt: null
      }
    },
    created() {
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('before')
        e.preventDefault();
        this.deferredPrompt = e;
      });
    },
    beforeDestroy() {
      window.removeEventListener('beforeinstallprompt', () => {
      });
    },
    methods: {
      installApp: async function () {
        if (this.deferredPrompt !== null) {
          console.log(this.deferredPrompt);
          this.deferredPrompt.prompt();
          const { outcome } = await this.deferredPrompt.userChoice;
          if (outcome === 'accepted') {
            this.deferredPrompt = null;
          }
        }
      }
    }
  }
</script>

<style scoped>
.install-view {
  position: fixed;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
button {
  background: white;
  cursor: pointer;
  padding: 1rem;
}
</style>
