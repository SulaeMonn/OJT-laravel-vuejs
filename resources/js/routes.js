const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const PostList = () => import('./components/post/List.vue')
const PostCreate = () => import('./components/post/Add.vue')
const PostEdit = () => import('./components/post/Edit.vue')
const PostUpload = () => import('./components/post/Upload.vue')
const UserList = () => import('./components/user/List.vue')
const UserCreate = () => import('./components/user/Add.vue')
const UserEdit = () => import('./components/user/Edit.vue')
const Login = () => import('./components/Login.vue')
const User = () => import('./components/User.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
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
    {
        name: 'postUpload',
        path: '/post/upload',
        component: PostUpload
    },
    {
        name: 'userList',
        path: '/users',
        component: UserList,
        beforeEnter: (to, from, next) => {
            
            let auth = localStorage.getItem('auth');
            if(auth){
                next();
            }else{
                next('/login');
            }

        }
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
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: "user",
        path: '/user',
        component: User,
        beforeEnter: (to, from, next) => {
            
            let auth = localStorage.getItem('auth');
            if(auth){
                next();
            }else{
                next('/login');
            }

        }
    }
]