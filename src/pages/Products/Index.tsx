import { Navbar } from "../../components/Navbar/Index"
import { Screen } from "../../components/Screen/Index"
export const ProductsPage = () => {
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Navbar avatarImagemPath="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"/>
        <Screen width="80%" height="80%" backgroundColor="#1e90ff" radius="15px" titleScreen="Products" titleColor="white" />
    </div>
}