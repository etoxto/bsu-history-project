import {Layout} from "antd";

const {Footer} = Layout

export default function MyFooter(){
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                    width: '100%'
                }}
            >
                History project by Arseniy & Tatyana
            </Footer>
        </>
    )
}