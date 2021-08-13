const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)
const PostList = () => import('./components/post/List.vue')
const PostCreate = () => import('./components/post/Add.vue')
const PostEdit = () => import('./components/post/Edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    },
    {
        name: 'postList',
        path: '/posts',
        component: PostList
    },
    {
        name: 'postAdd',
        path: '/post/add',
        component: PostCreate
    },
    {
        name: 'postEdit',
        path: '/post/:id/edit',
        component: PostEdit
    },
]