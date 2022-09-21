import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { StayApp } from './pages/stay-app.jsx'
import { ReviewApp } from './pages/review-app.jsx'
import { ChatApp } from './pages/chat-app.jsx'
import { AdminApp } from './pages/admin-app.jsx'
import { StayEdit } from './pages/stay-edit.jsx'
import { StayDetails } from './pages/stay-details.jsx'
import { UserDetails } from './pages/user-details.jsx'
import { Explore } from './cmps/explore.jsx'
import { LogInApp } from './pages/login.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: 'stay/edit/:id',
    component: <StayEdit />,
    label: 'Edit',
  },
  {
    path: 'stay/edit',
    component: <StayEdit />,
    label: 'Edit',
  },
  {
    path: 'stay/:id',
    component: <StayDetails />,
    label: 'Details',
  },
  {
    path: 'stay/explore/:filter',
    component: <Explore />,
    label: 'Explore',
  },
  {
    path: 'home',
    component: <HomePage />,
    label: 'Home 🏠',
  },
  {
    path: '',
    component: <StayApp />,
    label: 'Stays',
  },
  {
    path: 'review',
    component: <ReviewApp />,
    label: 'Reviews',
  },
  {
    path: 'chat',
    component: <ChatApp />,
    label: 'Chat',
  },
  {
    path: 'about',
    component: <AboutUs />,
    label: 'About us',
  },
  {
    path: 'admin',
    component: <AdminApp />,
    label: 'Admin Only',
  },
  {
    path: 'login',
    component: <LogInApp />,
    label: 'log in',
  },
]

export default routes
