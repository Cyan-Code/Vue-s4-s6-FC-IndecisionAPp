<template>
    <h1>{{ customTitle }}</h1>
    <p>{{ counter }} <sup>2</sup> = {{squareComputed}} </p>
    <p>{{ counter }}</p>
    <div>
        <button v-on:click="increse"> +1 </button>
        <button v-on:click="decrese"> -1 </button>
    </div>
</template>
<script>

export default {
    name: 'Counter',
    props: ['title'],
    data () {
        return {
            counter: 10,
        }
    },
    methods: {
        increse() {
            return this.counter++;
        },
        decrese() {
            return this.counter--;
        }
    },
    computed: {
        squareComputed() {
            return this.counter * this.counter;
        },
        customTitle () {
            return this.$props.title || 'CustomTitle'
        }
    }
}
</script>
<style>
    
</style>