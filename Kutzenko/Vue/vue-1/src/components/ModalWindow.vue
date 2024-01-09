<template>
  <div v-if="isOpen" class="modal" @click="close">
    <div @click.stop class="modal__content">
      <slot name="main"></slot>
      <slot name="footer" :close="close" :confirm="confirm"></slot>
    </div>
  </div>
</template>

<script>
export default {
  promiseCurrentController: null,

  data() {
    return {
      isOpen: false
    }
  },

  mounted() {
    document.addEventListener('keydown', this.handlePressKey)
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.handlePressKey)
  },

  methods: {
    close() {
      this.$options.promiseCurrentController.resolve(false)
      this.isOpen = false
    },

    confirm() {
      this.$options.promiseCurrentController.resolve(true)
      this.isOpen = false
    },

    open() {
      let resolve
      let reject

      const modalPromise = new Promise((ok, fail) => {
        resolve = ok
        reject = fail
      })

      this.$options.promiseCurrentController = { resolve, reject }

      this.isOpen = true

      return modalPromise
    },

    handlePressKey(e) {
      if (this.isOpen && e.key === 'Escape') {
        this.close()
      }
    }
  }
}
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
