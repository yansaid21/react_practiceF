import { LinkedinPage } from "../components/Pages/LinkedinPage/LinkedinPage";
import { FacebookPage } from "../components/Pages/FacebookPage/FacebookPage";
import { InstagramPage } from "../components/Pages/InstagramPage/InstagramPage";
import { HomePage } from "../components/Pages/HomePage/HomePage"
const GeneralRoutes = [
    {path: '/',component: HomePage},
    {path: '/linkedin',component: LinkedinPage},
    {path: '/facebook',component: FacebookPage},
    {path: '/instagram',component: InstagramPage}
];

export default GeneralRoutes;