<template>
  <h1 class="main-title mb-3">Resultados de la encuesta</h1>
  <canvas id="myChart"></canvas>
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

  data(){
    return{
      survey: {
        id: null,
        name: '',
        multiple: true,
        created_at: null,
        expiration_date: null,
        options: []
      }
    }
  },

  computed: {
    data(){
      return this.survey.options.map(o => o.quantity)
    },
    labels(){
      return this.survey.options.map(o => o.name)
    },
  },

  methods: {
    createChart(){
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Total de votos',
            data: this.data,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }); 
    },
    getSurvey(){
      this.axios.get('https://run.mocky.io/v3/78bad750-2596-4e2f-92c3-9a113d71ae15')
        .then(response => {
          this.survey = response.data
          this.createChart()
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  created(){
    this.getSurvey()
  }

}
</script>

<style lang="scss" scoped>
#myChart{
  width: 90% !important;
  max-height: 500px;
  margin: 0 auto;
  max-width: 900px;
}
</style>
