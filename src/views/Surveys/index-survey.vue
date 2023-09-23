<template>
  <section class="container">
    <h1 class="main-title">EncuestApp</h1>
    <p class="mb-5 fw-bold">Todas las encuestas</p>

    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="survey in surveys" :key="survey.id">
        <div class="card my-3">
          <div class="card-header">
            <span class="card-header-button" @click="$router.push({ name: 'survey-answer', params: { id: survey.id } })">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="25" color="#fff" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </span>
            <span class="card-header-button" @click="$router.push({ name: 'survey-detail', params: { id: survey.id } })">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="25" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </span>
            <span class="card-header-button" @click="deleteSurvey">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="25" color="#fff" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </span>

          </div>
          <div class="card-body">
            <p class="card-text">{{ survey.name }}</p>
          </div>
          <div class="card-footer"  :class="compareDates(survey.expirationDate) ? 'bg-red' : 'bg-green'">
            <small class="d-block">
              Creacion: {{ survey.createdAt.slice(0,10) }}
            </small>
            <small class="d-block">Expiración: {{ survey.expirationDate.slice(0,10) }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  data () {
    return {
      surveys: []
    }
  },

  methods: {
    getSurveys () {
      this.axios.get('https://run.mocky.io/v3/693be6c7-9275-4d3a-92d1-561e8f08c542')
        .then(response => {
          this.surveys = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    compareDates (expirationDate) {
      return new Date() > new Date(expirationDate)
    }
  },

  mounted () {
    this.getSurveys()
  }

}
</script>

<style lang="scss" scoped>
.bg-green {
  background-color: #50c28b;
}

.bg-red {
  background-color: #ff5757;
}

.card-header{
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.card-header-button{
  background-color: #8c6057;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg{
    color: #fff !important;
  }
}

.card-body{
  background-color: #a69f97;

  p{
    color: #fff;
  }
}

.card-footer{
  color: #fff;
  text-align: right;
  padding: 0.2rem 0.8rem;
}
</style>
