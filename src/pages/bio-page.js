import {Divider, Layout, Space} from "antd";
import MyHeader from "../components/main/header";
import MyFooter from "../components/main/footer";
import {BioText} from "../components/texts/bio-text";

const {Content} = Layout;

export default function BioPage(){
    return (
        <>
            <Layout style={{minHeight: "100vh"}}>
                <MyHeader selectedMenuItem={'bio'}/>
                <Layout>
                    <Layout
                        style={{
                            padding: '24px 24px 24px',
                        }}
                    >
                        <Content>
                            <Space style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                                   size={0}
                            >
                                <BioText/>
                                <Divider/>
                            </Space>
                        </Content>
                        <MyFooter/>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}