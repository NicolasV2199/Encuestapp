import { createRouter, createWebHashHistory } from 'vue-router'
import IndexSurvey from '../views/Surveys/index-survey.vue'
import DetailSurvey from '../views/Surveys/detail-survey.vue'
import CreateSurvey from '../views/Surveys/create-survey.vue'
import AnswerSurvey from '../views/Surveys/answer-survey.vue'

const routes = [
  {
    path: '/survey',
    name: 'survey-list',
    component: IndexSurvey
  },
  {
    path: '/survey/create',
    name: 'survey-create',
    component: CreateSurvey
  },
  {
    path: '/survey-detail/:id',
    name: 'survey-detail',
    component: DetailSurvey
  },
  /* {
    path: '/survey-answer/:id',
    name: 'survey-answer',
    component: AnswerSurvey
  }, */
  {
    path: '/survey-answer/:id',
    name: 'survey-answer',
    component: AnswerSurvey,
    props: (route) => {
      return {
        id: route.params.id
      }
    }
  },
  {
    path: '',
    name: 'survey-redirect',
    redirect: { name: 'survey-list' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
