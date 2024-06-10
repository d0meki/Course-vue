import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landyng/pages/HomePage.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const route = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landyng/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landyng/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landyng/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landyng/pages/ContacPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          // props: true,
          props: (route) => {
            // console.log({ route });
            const id = +route.params.id;

            return isNaN(id) ? { id: 1 } : { id };
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
        {
          path: '/proyects',
          name: 'proyects',
          component: () => import('@/modules/projects/pages/ProyectsPage.vue'),
        },
        {
          path: '/project/:id',
          name: 'project',
          component: () => import('@/modules/projects/pages/ProjectView.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/auth',
      redirect: { name: 'login' }, //'/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
    // Not Found
    {
      path: '/:pathMatch(.*)*',
      // redirect: '/',
      component: NotFound404,
    },
  ],
});

export default route;
