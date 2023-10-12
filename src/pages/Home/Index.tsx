import { Navbar } from "../../components/Navbar/Index"
import { Screen } from "../../components/Screen/Index"
import img from '../../images/eu.png';
export const HomePage = () => {
    return <div style={{ width: '100vw', height: '100vh',display:'flex',flexDirection:'column',
    justifyContent:'center',alignItems:'center'}}>
        <Navbar avatarImagemPath={img}/>
        <div style={{width:"100%", height:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Screen width="80%" height="80%" backgroundColor="#1e90ff" radius="15px" titleScreen="Home" titleColor="white" />
        </div>
    </div>
}