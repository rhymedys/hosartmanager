import { createRouter, createWebHashHistory } from 'vue-router'
import Workspace from '../views/Workspace'

const routes = [
  {
    path: '/',
    name: 'workspace',
    component: Workspace
  },
  {
    path: '/workspace',
    name: 'workspace',
    component: Workspace
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
