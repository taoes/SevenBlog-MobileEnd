import VueRouter from "vue-router";
import Index from "../components/Index";
import BlogList from "../components/BlogList";
import Work from "../components/Work";
import Book from "../components/Book";


const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
};


const router = new VueRouter({
    routes: [
        {
            path: '/',
            meta: {
                title: '首页'
            },
            component: Index
        }, {
            path: '/book',
            meta: {
                title: '知识库'
            },
            component: Book
        }, {
            path: '/blog',
            meta: {
                title: '博客首页'
            },
            component: BlogList
        }, {
            path: '/work',
            meta: {
                title: '我的作品'
            },
            component: Work
        }

    ]
});


router.beforeEach((to, from, next) => {

    document.title = to.meta.title ? to.meta.title + " ☘️ 燕归来兮" : "燕归来兮";

    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0

    next()
});

export default router;

