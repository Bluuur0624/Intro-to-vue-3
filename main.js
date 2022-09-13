const app = Vue.createApp({
    data(){
        return{
            cart: [],
            premium: true,
            details: ['warm','cozy','feel like home']
        }
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        },
        removeFromCart(){
            this.cart.pop()
        }
    },
    
})
