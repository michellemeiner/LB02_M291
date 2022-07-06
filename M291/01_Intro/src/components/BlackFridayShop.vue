<template>
  <div class="container">
    <h1>BLACK FRIDAY SALE</h1>
    <strike>Was {{ $store.getters.getOldDiscount }}%</strike><br />

    <!-- Usage of: # v-if #  AND # v-text # -->
    <!-- v-text defines the content displayed in the span tag -->
    <template v-if="$store.getters.getDiscount === '0'">
      <span v-text="discountEnd"></span>
    </template>

    <!-- Usage of: # v-else-if # -->
    <template v-else-if="$store.getters.getDiscount === '100'">
      <span v-text="discountFree"></span>
      <strong> Now {{ $store.getters.getDiscount }} % OFF</strong>
    </template>

    <!-- Usage of: # v-else # -->
    <template v-else>
      <span v-text="discountStart"></span>
      <strong> Now {{ $store.getters.getDiscount }}% OFF</strong>
    </template>

    <br />
    <!-- Calling mutations from the store -->
    <a href="#" @click="$store.commit('updateDiscount')">Increase discount by 10%</a>
    <a href="#" @click="$store.commit('resetDiscount')">Reset discount</a>

    <!-- Usage of: # v-for # -->
    <li v-for="productItem in products">
      {{ productItem }}
    </li>
    <br />

    <!-- Usage of: # Computed properties # -->
    <span v-if="ballsInSortiment === true">Hurray, today we have Basketballs in our sortiment!</span>
    <span v-else="ballsInSortiment === false">Unfortunately no Basketballs today in sortiment.</span>
    <br />

    <!-- Usage of: # router-link, router-view #   -->
    <!-- router-view loads depending on the current URL the corresponding Vue component -->
    <router-link to="/help">Help</router-link>

    <br />
    <label>Show authors? </label>
    <input placeholder="Enter yes to display authors" @input="setShowAuthor" />
    <p v-if="showAuthors">{{ authors }}</p>

    <p>Inspiring Quote of the day: {{ dailyQuote }}</p>

  </div>
</template>
<script>

export default {
  data() {
    return {
      dailyQuote: undefined,
      authors: "Michelle",
      showAuthors: false,
      discountFree: "EVERYTHING IS FOR FREE!!!",
      discountStart: "Discount started!!!",
      discountEnd: "Discount has not started yet.",
      products: ["Milk", "Bottle of water", "Toilet paper", "Toy cars", "Basketball", "Volleyball", "Football"],
    }
  },

  methods: {
    /** Usage of: # Methods # */
    setShowAuthor(event) {
      /** Validation of an input field */
      if (event.target.value === "yes")
        this.showAuthors = true;
      else
        this.showAuthors = false;
    },
  },

  /** Usage of: # Computed properties # */
  computed: {
    ballsInSortiment() {
      if (this.products.includes("Basketball"))
        return true;
    }
  },

  /** Getting data, preparing data and setting data */
  created() {
    fetch('https://quotes.rest/qod?language=en')
      .then(response => response.json())
      .then(data => {
        this.dailyQuote = data.contents.quotes[0].quote;
      });
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #e4e4e4d8;
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
}

a {
  margin: 20px;
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>