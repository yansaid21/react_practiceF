import { LinkedinPage } from "../components/Pages/LinkedinPage/LinkedinPage";
import { FacebookPage } from "../components/Pages/FacebookPage/FacebookPage";
import { InstagramPage } from "../components/Pages/InstagramPage/InstagramPage";
import { HomePage } from "../components/Pages/HomePage/HomePage"
import { TraslucentMenu } from "../components/TraslucentMenu/TraslucentMenu";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage/PrivacyPolicyPage"
import LogInPage from "../components/Pages/LogInPage/LogInPage";
const GeneralRoutes = [
    {path: '/Traslucent',component: TraslucentMenu},
    {path: '/',component: HomePage},
    {path: '/linkedin',component: LinkedinPage},
    {path: '/facebook',component: FacebookPage},
    {path: '/instagram',component: InstagramPage},
    {path: '/privacy',component: PrivacyPolicyPage},
    {path: '/LogIn',component: LogInPage},
];

export default GeneralRoutes;