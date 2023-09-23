<template>
  <section class="container create-survey">
    <h1 class="main-title">EncuestApp</h1>
    <p class="fw-bold text-center">"Crea tu propia encuesta ahora y obtén información valiosa. ¡Comienza ya!"</p>

    <label for="question" class="form-label fw-bold">Pregunta de la encuesta</label>
    <input type="text" class="form-control mb-3" placeholder="Escribe tu pregunta" id="question" v-model="question" required/>

    <div class="form-check form-switch several-answers mb-3">
      <label class="form-check-label fw-bold" for="flexSwitchCheckDefault">Permitir varias respuestas</label>
      <input class="form-check-input" type="checkbox" role="switch" v-model="severalAnswers" id="flexSwitchCheckDefault" required/>
    </div>

    <label for="" class="fw-bold">Fecha de vencimiento de la encuesta</label>
    <VueDatePicker v-model="date"></VueDatePicker>

    <form @submit.prevent="addOption">
      <label for="" class="mt-3 fw-bold">Escribe las opciones de respuesta</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Escribe tu opción" aria-describedby="button-addon2" v-model="option" required>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Agregar opción</button>
      </div>
    </form>

    <p>Opciones: </p>
    <ul class="options">
      <li v-for="(option, index) in options" :key="index">{{ option }}</li>
    </ul>

    <button class="btn btn-encuestapp btn-lg mt-5" @click="console.log(date)">Crear Encuesta</button>
  </section>
</template>

<script>
export default {

  data () {
    return {
      question: '',
      option: '',
      options: [],
      severalAnswers: true,
      date: null
    }
  },

  methods: {
    addOption () {
      this.options.push(this.option)
      this.option = ''
    }

  }
}
</script>

<style lang="scss" scoped>

.create-survey{
  text-align: left;
  padding-bottom: 3rem;
}

.several-answers{
  text-align: left;
}

.options{
  max-width: 95%;
}
</style>
