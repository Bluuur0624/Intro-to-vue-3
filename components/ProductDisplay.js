app.component('product-display', {
  props:{
    cart:{
      type: Array,
      required: true
    },
    premium: {
      type: Boolean,
      required: true
    }
  },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" :class="{'out-of-stock-img': !inStock}">
      </div>
      <div class="product-info">
        <h1>{{ saleTitle }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <p v-if="onSale">On sale</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
        </div>
        <div>
          <p>Sizes:</p>
          <div v-for="size in sizes">{{size}}</div>
        </div>
        <a v-bind:href="url">Wavu Wiki here :)</a>

      <div>
        <button 
          class="button" 
          :class="{disabledButton: !inStock}"
          @click="addToCart"
          :disabled="!inStock">
          Add to Cart
        </button>

        <button 
          class="button" 
          :class="{disabledButton: cart.length <= 0}"
          @click="removeFromCart"
          :disabled="cart.length <= 0">
          Remove from Cart
        </button>
      </div>
        
      </div>
    </div>
  </div>`,
  data(){
    return{
        product: 'Socks',
        // image:'./assets/images/socks_green.jpg',
        selectedVariant: 0,
        description: 'warm, comfy, feel like home',
        url: 'https://wavu.wiki/t/Main_Page',
        // inStock: false,
        onSale: true,
        details:['50% cotton','30% wool','20% polyester'],
        variants:[
            {id:2234, color:'green', image:'./assets/images/socks_green.jpg', quantity: 50},
            {id:2235, color:'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
        ],
        sizes:['S','M','L','XL'],
        brand: 'Vue Mastery',
    }
},
methods:{
    addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart(){
        this.$emit('remove-from-cart')
    },
    updateVariant(index){
        this.selectedVariant = index
    }
},
computed:{
    title(){
        return this.brand + '\n' + this.product
    },
    image(){
        return this.variants[this.selectedVariant].image
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity
    },
    saleTitle(){
        let title = this.brand + ' ' + this.product
        if(this.onSale){
            return title + ' is on sale.'
        }
        else{
            return title
        }
    },
    shipping(){
      if(this.premium){
        return 'Free'
      }
      else{
        return 2.99
      }
    }
}
})