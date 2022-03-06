
import FooterComponent from "../components/shared/footer";
import HeaderComponent from "../components/shared/header";


const HomeLayout = ({children}) => {

    return <>
    <HeaderComponent/>
    {children}
    <FooterComponent/>
    </>;
}

export default HomeLayout;