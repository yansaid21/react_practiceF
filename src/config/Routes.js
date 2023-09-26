import { LinkedinPage } from "../components/Pages/LinkedinPage/LinkedinPage";
import { FacebookPage } from "../components/Pages/FacebookPage/FacebookPage";
import { InstagramPage } from "../components/Pages/InstagramPage/InstagramPage";
import { HomePage } from "../components/Pages/HomePage/HomePage"
import { TraslucentMenu } from "../components/TraslucentMenu/TraslucentMenu";
const GeneralRoutes = [
    {path: '/Traslucent',component: TraslucentMenu},
    {path: '/',component: HomePage},
    {path: '/linkedin',component: LinkedinPage},
    {path: '/facebook',component: FacebookPage},
    {path: '/instagram',component: InstagramPage}
];

export default GeneralRoutes;