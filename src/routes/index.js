import homePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";


const routes = [
    {
        path: '/',
        page: homePage,
        isShowHeader: true,
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true,

    },
    {
        path: '/oder123',
        page: OrderPage,
        isShowHeader: true,

    }
    ,
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true,

    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true,

    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true,

    },
    {
        path: '/product-detail',
        page: ProductDetailPage,
        isShowHeader: true,

    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: true,
    },
    
   
]

export default routes