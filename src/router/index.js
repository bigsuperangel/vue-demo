import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TestTable from '@/components/TestTable'
import CustomTable from '@/components/CustomTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello2',
      name: 'hello2',
      component: TestTable
    },
    {
      path: '/table',
      name: 'table',
      component: CustomTable
    }
  ]
})
