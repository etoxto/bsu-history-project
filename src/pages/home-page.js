import {Divider, Layout, Space} from "antd";
import MyHeader from "../components/main/header";
import MyFooter from "../components/main/footer";
import {HomeText} from "../components/texts/home-text";

const {Content} = Layout;

export default function HomePage(){
    return (
        <>
            <Layout style={{minHeight: "100vh"}}>
                <MyHeader selectedMenuItem={'home'}/>
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
                                <HomeText/>
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