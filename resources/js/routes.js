const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
// const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
// const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
// const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)
const PostList = () => import('./components/post/List.vue')
const PostCreate = () => import('./components/post/Add.vue')
const PostEdit = () => import('./components/post/Edit.vue')
const PostUpload = () => import('./components/post/Upload.vue')
const UserList = () => import('./components/user/List.vue')
const UserCreate = () => import('./components/user/Add.vue')
const UserEdit = () => import('./components/user/Edit.vue')


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    // {
    //     name: 'categoryList',
    //     path: '/category',
    //     component: CategoryList
    // },
    // {
    //     name: 'categoryEdit',
    //     path: '/category/:id/edit',
    //     component: CategoryEdit
    // },
    // {
    //     name: 'categoryAdd',
    //     path: '/category/add',
    //     component: CategoryCreate
    // },
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
    {
        name: 'postUpload',
        path: '/post/upload',
        component: PostUpload
    },
    {
        name: 'userList',
        path: '/users',
        component: UserList
    },
    {
        name: 'userAdd',
        path: '/user/add',
        component: UserCreate
    },
    {
        name: 'userEdit',
        path: '/user/:id/edit',
        component: UserEdit
    },
]