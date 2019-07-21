import VueRouter from 'vue-router'

import HomeContainer from './component/tabbar/HomeContainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import CartContainer from './component/tabbar/CartContainer.vue'
import PersonalContainer from './component/tabbar/PersonalContainer.vue'
import NewsList from './component/news/NewsList.vue'
import NewsInfo from './component/news/NewsInfo.vue'
import PhotoList from './component/photos/PhotoList.vue'
import PhotoInfo from './component/photos/PhotoInfo.vue'
import ProductsList from './component/products/ProductsList.vue'
import ProductInfo from './component/products/ProductInfo.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer},
        { path: '/member', component: MemberContainer},
        { path: '/cart', component: CartContainer},
        { path: '/personal', component: PersonalContainer},
        { path: '/home/newslist', component: NewsList},
        { path: '/home/newsinfo/:id', component: NewsInfo},
        { path: '/home/photoslist', component: PhotoList},
        { path: '/home/photoinfo/:id', component: PhotoInfo},
        { path: '/home/productlist', component: ProductsList},
        { path: '/home/productinfo/:id', component: ProductInfo},
    ],
    linkActiveClass: 'mui-active'
})

export default router