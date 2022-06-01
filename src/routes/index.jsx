import Home from "../pages/Home"
import { Login, ForgotPassword, ResetPassword } from "../pages/Authentications";



// Public routes: don't need login
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: Login, layout: null},
    {path: '/forgot-password', component: ForgotPassword, layout: null},
    {path: '/reset-password', component: ResetPassword, layout: null},
    
]
// Private routes: must login to access
const privateRoutes = [

]

export { publicRoutes, privateRoutes }