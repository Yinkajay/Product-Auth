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