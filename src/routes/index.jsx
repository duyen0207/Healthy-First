import Home from "../pages/Home"
import ForgotPassword from "../pages/ForgotPassword"


// Public routes: don't need login
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/forgot-password', component: ForgotPassword},
    
]
// Private routes: must login to access
const privateRoutes = [

]

export { publicRoutes, privateRoutes }