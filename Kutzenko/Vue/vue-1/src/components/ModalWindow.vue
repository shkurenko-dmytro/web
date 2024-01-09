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
  props: {
    isOpen: {
      required: true,
      type: Boolean
    }
  },

  emits: {
    ok: null,
    close: null
  },

  mounted() {
    document.addEventListener('keydown', this.handlePressKey)
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.handlePressKey)
  },

  methods: {
    close() {
      this.$emit('close')
    },

    confirm() {
      this.$emit('ok')
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
