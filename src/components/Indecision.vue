<template>
    <img v-bind:src="img" alt="bg">
    <div class="bg-dark"></div>
    <div class="indecision-container">
        <input
            type="text"
            placeholder="Hazme una pregunta"
            v-model="pregunta"
        >
        <p>Recuerda terminar con un signo de interrogacion (?)</p>
        <div v-if="isValidQuestion">
            <h2>{{pregunta}}</h2>
            <h1>{{respuesta || '...Pensando'}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pregunta: null,
            respuesta: null,
            img: null,
            isValidQuestion: null
        }
    },
    methods: {
        async getAnswer() {
            const {image, answer} = await fetch('https://yesno.wtf/api').then(r=>r.json());
            this.respuesta = (answer === 'YES') ? 'SI' : 'NO!';
            this.img = image;
        }
    },
    watch: {
        pregunta(value, oldValue) {
            this.isValidQuestion = false
            console.log({value});
            if(!value.includes('?')) return
            this.isValidQuestion = true;
            this.getAnswer()
        }
    }
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>