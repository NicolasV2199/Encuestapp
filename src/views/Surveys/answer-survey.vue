<template>
  <section class="container">
    <h1 class="main-title">EncuestApp</h1>
    <p class="fw-bold">¡Participa y haz que tu opinión cuente! Vota ahora para influir en el resultado.</p>
    <h3 class="survey-name">{{ survey.name }}</h3>
    <p>Selecciona una opción o más</p>

    <div v-if="survey.multiple" class="options-container">
      <div class="form-check" v-for="option in survey.options" :key="option.id">
        <input class="form-check-input" type="checkbox" :value="option.id">
        <label class="form-check-label">{{ option.name }}</label>
      </div>
    </div>
    <div v-else class="options-container">
      <div class="form-check" v-for="(option, index) in survey.options" :key="option.id">
        <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="radioResponse"
          :checked="index == 0 && false">
        <label class="form-check-label">
          {{ option.name }}
        </label>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <button class="btn btn-encuestapp mt-5 mb-3" @click="vote">Votar</button>
      </div>
      <div class="col-12">
        <button class="btn btn-secondary">Ver resultados</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    id: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      radioResponse: '',
      survey: {
        id: 'id de la encuesta',
        name: '¿Quien es mas castigador?',
        status: true,
        multiple: false,
        created_at: 'Fecha de creación',
        options: [
          {
            id: 'ID de la opción',
            name: 'Jorge'
          },
          {
            id: 'ID de la opción',
            name: 'Jorge Villareal'
          },
          {
            id: 'ID de la opción',
            name: 'Jorge el castigador'
          },
          {
            id: 'ID de la opción',
            name: 'Jorge el rey de los castigos'
          }
        ]
      }
    }
  },

  methods: {
    vote () {
      this.$swal.fire({
        title: 'Exito',
        text: 'Encuesta votada correctamente',
        icon: 'success',
        confirmButtonText: '¡Entendido!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('confirmado')
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.options-container {
  width: 20rem;
  margin: 0 auto;
  max-width: 90%;
}

.survey-name {
  color: #8c6057;
  font-weight: bold;
}

.form-check {
  text-align: left;
}
</style>
