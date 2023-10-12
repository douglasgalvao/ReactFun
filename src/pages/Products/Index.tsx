import { Navbar } from "../../components/Navbar/Index"
import { Screen } from "../../components/Screen/Index"
export const ProductsPage = () => {
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Navbar />
        <Screen width="80%" height="80%" backgroundColor="#1e90ff" radius="15px" titleScreen="Products" titleColor="white" />
    </div>
}