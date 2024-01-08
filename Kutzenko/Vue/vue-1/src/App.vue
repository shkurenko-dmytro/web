<template>
  <!-- <router-view></router-view> -->
  <modal-window v-if="isOpen" @click="isOpen = false"
    ><template #main="{ item }">
      <div>Доброго ранку, {{ item }}</div> </template
    ><template #footer>
      <div><input type="text" /> <button type="button" @click="isOpen = false">OK</button></div>
    </template></modal-window
  >
</template>

<script>
import ModalWindow from './components/ModalWindow.vue'
export default {
  components: {
    ModalWindow
  },

  data() {
    return {
      isOpen: true
    }
  }
}
</script>

<style scoped></style>
