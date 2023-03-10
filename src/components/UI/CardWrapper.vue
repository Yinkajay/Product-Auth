<template>
    <div class="card">
        <slot></slot>
    </div>
</template>


<style scoped>
.card{
    padding: 1.5rem;
    border-radius: 9px;
    margin: 1rem auto;
    max-width: 50rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.193);
}
</style>