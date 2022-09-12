const app = Vue.createApp({
    data: function(){
        return{
            cart: 0,
            product: 'Socks',
            image:'./assets/images/socks_green.jpg',
            description: 'warm, comfy, feel like home',
            url: 'https://wavu.wiki/t/Main_Page',
            inventory: 100,
            onSale: true,
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id:2234, color:'green', image:'./assets/images/socks_green.jpg'},
                {id:2235, color:'blue', image: './assets/images/socks_blue.jpg'},
            ],
            sizes:['S','M','L','XL']
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
