<template>
  <div v-if="isOpen" class="modal" @click="$emit('click')">
    <div @click.stop class="modal__content">
      <slot name="main" :item="item"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      item: 'Max'
    }
  },

  emits: {
    click: null
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
