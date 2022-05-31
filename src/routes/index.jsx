import Home from "../pages/Home"
import ForgotPassword from "../pages/ForgotPassword"
import Login from "../pages/Login"


// Public routes: don't need login
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: Login, layout: null},
    {path: '/forgot-password', component: ForgotPassword},
    
]
// Private routes: must login to access
const privateRoutes = [

]

export { publicRoutes, privateRoutes }