<template>
    <h1>
        Hello World
    </h1>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created(){
        this.fetchProducts()
    },
    methods: {
       async fetchProducts(){
          const response =  await fetch('https://dummyjson.com/products/5')

          console.log(response)
          const responseData = await response.json()

          console.log(responseData)
        }
    }
}
</script>