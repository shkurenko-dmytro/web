<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-sm font-medium text-gray-700">Тикер</label>
        <div class="mt-1 relative rounded-md shadow-md">
          <input
            v-model="ticker"
            @keyup.enter="addTicker"
            type="text"
            name="wallet"
            id="wallet"
            class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
            placeholder="Например DOGE"
          />
        </div>
        <!-- <div v-if="filteredHints.length > 0" class="flex bg-white shadow-md p-1 rounded-md flex-wrap">
        <span
          v-for="hint in filteredHints"
          :key="hint.id"
          @click="(this.ticker = hint.Symbol), addTicker()"
          class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
        >
          {{ hint.Symbol }}
        </span>
      </div>
      <div v-if="checkedTicker" class="text-sm text-red-600">Такой тикер уже добавлен</div> -->
      </div>
    </div>
    <add-button @add="addTicker" />
  </section>
</template>

<script>
import AddButton from '@/components/AddButton.vue'

export default {
  components: {
    AddButton
  },

  data() {
    return {
      ticker: ''
    }
  },

  methods: {
    addTicker() {
      this.$emit('add-ticker', this.ticker)
      this.ticker = ''
    }
  }
}
</script>

<style scoped></style>
