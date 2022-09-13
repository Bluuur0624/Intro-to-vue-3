const app = Vue.createApp({
    data(){
        return{
            cart: 0,
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
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
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
        }
    }
})
