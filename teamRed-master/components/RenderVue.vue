<template>
  <div>
    <div v-html="renderPage()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: 'Tractor',
        variants: [
          {
            sku: 't_porsche',
            color: 'red',
            name: 'Porsche-Diesel Master 419',
            image: '@/tractor-red.jpg',
            thumb: '/tractor-red-thumb.jpg',
            price: '66,00 €',
          },
          {
            sku: 't_fendt',
            color: 'green',
            name: 'Fendt F20 Dieselroß',
            image: '/tractor-green.jpg',
            thumb: '/tractor-green-thumb.jpg',
            price: '54,00 €',
          },
          {
            sku: 't_eicher',
            color: 'blue',
            name: 'Eicher Diesel 215/16',
            image: '/tractor-blue.jpg',
            thumb: '/tractor-blue-thumb.jpg',
            price: '58,00 €',
          },
        ],
      },
    }
  },
  methods: {
    renderOption(variant, sku) {
      const active = sku === variant.sku ? 'active' : ''
      return `
    <a href="/${variant.sku}" class="${active}" type="button" data-sku="${variant.sku}">
      <img :src="${variant.thumb}" alt="${variant.name}" />
    </a>
  `
    },
    renderPage(sku = 't_porsche') {
      const variant = this.product.variants.find((v) => sku === v.sku)
      if (!variant) {
        return '<pre>no product not found</pre>'
      }
      return `
    <h1 id="store">The Model Store</h1>
    <blue-basket id="basket"><!--#include virtual="/blue-basket" --></blue-basket>
    <div id="image"><div><img :src="${variant.image}" alt="${
        variant.name
      }" /></div></div>
    <h2 id="name">${this.product.name} <small>${variant.name}</small></h2>
    <div id="options">${this.product.variants
      .map((v) => this.renderOption(v, sku))
      .join('')}</div>
    <blue-buy id="buy" sku="${
      variant.sku
    }"><!--#include virtual="/blue-buy?sku=${encodeURIComponent(
        variant.sku
      )}" --></blue-buy>
    <green-recos id="reco" sku="${
      variant.sku
    }"><!--#include virtual="/green-recos?sku=${encodeURIComponent(
        variant.sku
      )}" --></green-recos>
  `
    },
  },
}
</script>

<style lang="scss" scoped></style>
