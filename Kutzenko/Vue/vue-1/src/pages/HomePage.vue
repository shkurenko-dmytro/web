<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div
      v-if="preload"
      class="fixed w-100 h-100 opacity-80 bg-purple-800 inset-0 z-50 flex items-center justify-center"
    >
      <svg
        class="animate-spin -ml-1 mr-3 h-12 w-12 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div class="container">
      <add-ticker @add-ticker="addTicker" />
      <button
        v-if="page > 1"
        @click="page = Number(page) - 1"
        class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Назад
      </button>
      <button
        v-if="hasNextPage"
        @click="page = Number(page) + 1"
        class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Вперед
      </button>
      <div>
        Фильтр:
        <input
          v-model="filter"
          class="block pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
          type="text"
        />
      </div>
      <template v-if="tickers.length">
        <hr class="w-full border-t border-gray-600 my-4" />
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            v-for="t in paginatedTickers"
            :key="t.name"
            @click="select(t)"
            :class="{
              'border-4': selectedTicker === t,
              'bg-white': t.isValidTicker,
              'bg-red-200': !t.isValidTicker
            }"
            class="overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
          >
            <div class="px-4 py-5 sm:p-6 text-center">
              <dt class="text-sm font-medium text-gray-500 truncate">
                {{ t.name }} - {{ t.symbolPrice }}
              </dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ formatPrice(t.price) }}</dd>
            </div>
            <div class="w-full border-t border-gray-200"></div>
            <button
              @click.stop="handleRemove(t)"
              class="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#718096"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              >Удалить
            </button>
          </div>
        </dl>
        <hr class="w-full border-t border-gray-600 my-4" />
      </template>
      <section v-if="selectedTicker" class="relative">
        <add-graph :tickerName="selectedTicker.name" :barData="graphPrice" @delete-graph="selectedTicker = null"/>
      </section>
    </div>
  </div>
</template>

<script>
import { subscribeToTicker, unSubscribeToTicker, getAllCoins } from '@/api'
import { getFromStorage, saveToStorage } from '@/storageManager'
import AddTicker from '@/components/AddTicker.vue'
import AddGraph from '@/components/AddGraph.vue'

export default {
  components: {
    AddTicker,
    AddGraph
  },

  data() {
    return {
      tickers: [],
      maxTickersOnPage: 6,

      selectedTicker: null,

      graphPrice: '',
      
      preload: true,

      coinList: [],

      filter: '',
      page: 1
    }
  },
  created() {
    const windowData = this.$route.query

    const VALID_KEYS = ['filter', 'page']

    VALID_KEYS.forEach((key) => {
      if (windowData[key]) {
        this[key] = windowData[key]
      }
    })

    const storageTickers = getFromStorage('tickers')

    if (storageTickers) {
      this.tickers = storageTickers
      this.tickers.forEach((ticker) => {
        subscribeToTicker(ticker.name, (newPrice, isValidSub, symbolPrice) => {
          this.updateTicker(ticker.name, newPrice, isValidSub, symbolPrice)
        })
      })
    }
  },
  computed: {
    startIndex() {
      return (this.page - 1) * this.maxTickersOnPage
    },

    endIndex() {
      return this.page * this.maxTickersOnPage
    },

    hasNextPage() {
      return this.filteredTickers.length > this.endIndex
    },

    filteredTickers() {
      return this.tickers.filter((t) => t.name.toUpperCase().includes(this.filter.toUpperCase()))
    },

    paginatedTickers() {
      return this.filteredTickers.slice(this.startIndex, this.endIndex)
    },

    // checkedTicker() {
    //   return this.tickers.find((t) => t.name.toUpperCase() === this.ticker.toUpperCase())
    // },

    // filteredHints() {
    //   return this.coinList
    //     .filter(
    //       (t) =>
    //         t.Symbol.toUpperCase().includes(this.ticker.toUpperCase()) &&
    //         this.ticker.toUpperCase() !== ''
    //     )
    //     .slice(0, 4)
    // },

    savedHistoryOptions() {
      return {
        filter: this.filter,
        page: this.page
      }
    }
  },
  methods: {
    updateTicker(tickerName, price, isValidSub, symbolPrice) {
      this.tickers
        .filter((t) => t.name === tickerName)
        .forEach((t) => {
          if (t === this.selectedTicker) {
            this.graphPrice = price
          }

          t.price = price ?? '-'
          t.isValidTicker = isValidSub
          t.symbolPrice = symbolPrice
        })
    },

    formatPrice(price) {
      if (price === '-') {
        return price
      }
      return price > 1 ? price.toFixed(2) : price.toPrecision(2)
    },

    addTicker(ticker) {
      const currentTicker = {
        name: ticker.toUpperCase(),
        price: '-',
        isValidTicker: true,
        symbolPrice: 'USD'
      }

      this.tickers = [...this.tickers, currentTicker]
      this.filter = ''

      subscribeToTicker(currentTicker.name, (newPrice, isValidSub, symbolPrice) => {
        this.updateTicker(currentTicker.name, newPrice, isValidSub, symbolPrice)
      })

      // if (!this.checkedTicker) {
      // }
    },

    handleRemove(tickerToRemove) {
      this.tickers = this.tickers.filter((t) => t !== tickerToRemove)

      if (this.selectedTicker === tickerToRemove) {
        this.selectedTicker = null
      }

      unSubscribeToTicker(tickerToRemove.name)
    },

    select(ticker) {
      this.selectedTicker = ticker
    },
  },
  mounted() {
    getAllCoins((coins) => {
      for (let coin in coins) {
        this.coinList.push(coins[coin])
      }

      this.preload = false
    })
  },
  watch: {
    tickers() {
      saveToStorage('tickers', this.tickers)
    },

    paginatedTickers() {
      if (this.paginatedTickers.length === 0 && this.page > 1) {
        this.page -= 1
      }
    },

    filter() {
      this.page = 1
    },

    savedHistoryOptions(v) {
      this.$router.push({ path: '/', query: { filter: v.filter, page: v.page } })
    }
  }
}
</script>

<style scoped></style>
