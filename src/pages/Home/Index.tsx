import { Navbar } from "../../components/Navbar/Index"
import { Screen } from "../../components/Screen/Index"
export const HomePage = () => {
    return <div style={{ width: '100vw', height: '100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Navbar />
        <div style={{width:"100%", height:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Screen width="60%" height="60%" backgroundColor="#1e90ff" radius="15px" titleScreen="Home" titleColor="white" />
        </div>
    </div>
}