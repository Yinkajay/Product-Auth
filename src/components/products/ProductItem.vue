<template>
    <li>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <p>{{ price }}</p>
    </li>
</template>


<script>
export default {
    props: ['title', 'description', 'price']
}
</script>

<style scoped>
li{
    vertical-align: text-bottom;
    display: inline-block;
    box-shadow: 0px 0px 2px #00000087;
    width: 200px;
    height: 200px;
    border-radius: 5px;
}
</style>