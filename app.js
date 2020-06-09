Vue.config.devtools = true
let app = new Vue({
    el: '#app',
    data: {
        searchValue: '',
        data:[]
    },
    methods: {
        search() {
            console.log(this.searchValue)
            axios.get(`https://images-api.nasa.gov/search?q=${this.searchValue}&media_type=image`)
                .then((res) => {
                    let item = res.data.collection.items
                    this.data = item
                    console.log(item)
                }).catch((err) => {
                    console.log(err)
                })
        }
    }

})