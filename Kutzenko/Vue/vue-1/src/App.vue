<template>
  <!-- <router-view></router-view> -->
  <div>
    <button type="button" @click="openModal">Open modal window</button>
    <modal-window ref="confirmationModal"
      ><template #main> <div>Доброго ранку</div> </template
      ><template #footer="{ confirm }">
        <div>
          Fill <input v-model="inputConfirmation" placeholder="OK" type="text" />
          <button
            :class="{
              'bg-gray-300 text-gray-700 cursor-not-allowed opacity-50': !isConfirmationCorrect,
              'bg-blue-500 hover:bg-blue-700 text-white': isConfirmationCorrect
            }"
            :disabled="!isConfirmationCorrect"
            type="button"
            @click="confirm"
          >
            OK
          </button>
        </div>
      </template></modal-window
    >
  </div>
</template>

<script>
import ModalWindow from './components/ModalWindow.vue'
export default {
  components: {
    ModalWindow
  },

  CONFIRMATION_TEXT: 'OK',

  data() {
    return {
      inputConfirmation: ''
    }
  },

  computed: {
    isConfirmationCorrect() {
      return this.inputConfirmation === this.$options.CONFIRMATION_TEXT
    }
  },

  methods: {
    async openModal() {
      this.inputConfirmation = ''

      const confirmationResult = await this.$refs.confirmationModal.open()

      if (confirmationResult) {
        alert('Success')
      }
    }
  }
}
</script>

<style scoped></style>
