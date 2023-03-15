<template>
    <div class="card">
        <slot></slot>
    </div>
</template>


<style scoped>
.card{
    background-color: white;
    padding: 1.5rem;
    border-radius: 9px;
    margin: 0rem auto;
    max-width: 50rem;
        /* display: flex;
        justify-content: center;
        align-items: center; */
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.193);
}
</style>