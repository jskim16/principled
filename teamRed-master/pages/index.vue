<template>
  <div id="app">
    <h1 id="store">The Model Store</h1>
    <blue-basket id="basket"></blue-basket>
    <div id="image">
      <div>
        <img :src="`${variant.image}`" :alt="`${variant.name}`" />
      </div>
    </div>
    <h2 id="name">
      {{ product.name }} <small>{{ variant.name }}</small>
    </h2>
    <div id="options">
      <button
        v-for="vari in product.variants"
        :key="`button-${vari.sku}`"
        @click="selectSku(vari.sku)"
      >
        <img :src="vari.thumb" :alt="vari.name" />
      </button>
    </div>
    <blue-buy id="buy" :sku="`${variant.sku}`"></blue-buy>
    <green-recos id="reco" :sku="`${variant.sku}`"></green-recos>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variant: {},
      product: {
        name: 'Tractor',
        variants: [
          {
            sku: 't_porsche',
            color: 'red',
            name: 'Porsche-Diesel Master 419',
            image: 'image/tractor-red.jpg',
            thumb: 'image/tractor-red-thumb.jpg',
            price: '66,00 €',
          },
          {
            sku: 't_fendt',
            color: 'green',
            name: 'Fendt F20 Dieselroß',
            image: 'image/tractor-green.jpg',
            thumb: 'image/tractor-green-thumb.jpg',
            price: '54,00 €',
          },
          {
            sku: 't_eicher',
            color: 'blue',
            name: 'Eicher Diesel 215/16',
            image: 'image/tractor-blue.jpg',
            thumb: 'image/tractor-blue-thumb.jpg',
            price: '58,00 €',
          },
        ],
      },
    }
  },
  mounted() {
    this.selectSku('t_porsche')
  },
  methods: {
    selectSku(sku) {
      this.variant = this.product.variants.find((car) => {
        return car.sku === sku
      })
    },
  },
}
</script>

<style>
@import '../assets/style/page.css';
</style>