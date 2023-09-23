<template>
  <section class="container">
    <h1 class="main-title">EncuestApp</h1>
    <p class="fw-bold">¡Participa y haz que tu opinión cuente! Vota ahora para influir en el resultado.</p>
    <h3 class="survey-name">{{ survey.name }}</h3>
    <p>Selecciona una opción o más</p>

    <div v-if="survey.multiple" class="options-container">
      <div class="form-check" v-for="option in survey.options" :key="option.id">
        <input class="form-check-input" type="checkbox" :value="option.id" @click="addOption(option.id)">
        <label class="form-check-label">{{ option.name }}</label>
      </div>
    </div>

    <div v-else class="options-container">
      <div class="form-check" v-for="(option) in survey.options" :key="option.id">
        <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="radioResponse" :value="option.id"
          required>
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
/* eslint-disable */
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
      selectedCheck: [],
      survey: {
        id: null,
        name: '',
        multiple: true,
        created_at: '',
        options: []
      }
    }
  },

  methods: {
    vote () {

      this.axios.post('https://run.mocky.io/v3/693be6c7-9275-4d3a-92d1-561e8f08c542',{
        options: this.survey.multiple ? this.selectedCheck : this.radioResponse
      })
        .then(response => {
          this.$swal.fire({
            title: 'Exito',
            text: 'Encuesta votada correctamente',
            icon: 'success',
            confirmButtonText: '¡Entendido!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push({name: 'survey-list'})
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
    },

    addOption(id){
      let existingElement = this.selectedCheck.find(c => c == id); 
      if(existingElement){
        this.selectedCheck.splice(this.selectedCheck.indexOf(id), 1);
      }else{
        this.selectedCheck.push(id);
      }
    },

    getSurvey(){
      this.axios.get('https://run.mocky.io/v3/c0ee74fb-1270-4c0f-880f-f762faea2c68')
        .then(response => {
          this.survey = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mounted(){
    this.getSurvey();
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
