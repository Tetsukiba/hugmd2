import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
		path: '/',
		name: 'Home',
		component: () => import('../src/components/HomePage.vue'),
	},
    {
		path: '/chat',
		name: 'Chat',
		component: () => import('../src/components/ChatPage.vue'),
	},
    {
		path: '/settings',
		name: 'Settings',
		component: () => import('../src/components/SettingsPage.vue'),
	},
]
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})
export default router