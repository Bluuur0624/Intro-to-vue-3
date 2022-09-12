const app = Vue.createApp({
    data: function(){
        return{
            product: 'Socks',
            description: 'warm, comfy, feel like home',
            image: './assets/images/socks_blue.jpg',
            url: 'https://wavu.wiki/t/Main_Page',
            inventory: 100,
            onSale: true,
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id:2234, color:'green'},
                {id:2235, color:'blue'},
            ],
            sizes:['S','M','L','XL']
        }
    }
})
