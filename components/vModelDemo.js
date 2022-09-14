app.component('v-model-demo',{
    template:`<input v-model="name" />`,
    data(){
        return{
            name:'Mary Smith'
        }
    }
})