<template>
    <h1>Counter App</h1>
    <p>{{ counter }} <sup>2</sup> = {{squareComputed}} </p>
    <div>
        <button v-on:click="increse"> +1 </button>
        <button v-on:click="decrese"> -1 </button>
    </div>
</template>
<script>

export default {
    name: 'Counter',
    data () {
        return {
            counter: 10,
        }
    },
    methods: {
        increse() {
            return this.counter = this.counter + 1;
        },
        decrese() {
            return this.counter =  this.counter - 1;
        }
    },
    computed: {
        squareComputed() {
            return this.counter * this.counter;
        }
    }
}
</script>
<style>
    
</style>