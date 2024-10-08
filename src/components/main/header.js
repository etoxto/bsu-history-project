import {Button, Layout, Menu, Switch} from "antd";
import {CalculatorOutlined, DownOutlined, TableOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useThemeSwitcher} from "react-css-theme-switcher";
import {useState} from "react";
import {Dropdown} from "antd";
import '../../styles/button-collor.css'

const {Header} = Layout

export default function MyHeader({selectedMenuItem}){
    const [isDarkMode, setIsDarkMode] = useState();
    const { switcher, currentTheme, themes} = useThemeSwitcher();

    const rightStyle = {position: 'absolute', top: 0, right: 0}

    function toggleTheme(isChecked) { // added
        setIsDarkMode(isChecked);
        switcher({ theme: isChecked ? themes.dark : themes.light });
    }

    const employeeMenu = (
        <Menu>
            <Menu.Item key="man">
                <Link to="/man">Языджан Арсений Артурович</Link>
            </Menu.Item>
            <Menu.Item key="woman">
                <Link to="/woman">Сементеева Татьяна Михайловна</Link>
            </Menu.Item>
        </Menu>
    );

    const items = [
        {
            icon: <TableOutlined/>,
            label: (
                <Link to={"/home"}>
                    Главная
                </Link>
            ),
            key: "home"
        },
        {
            icon: <CalculatorOutlined/>,
            label: (
                <Link to={"/bio"}>
                    Биография
                </Link>
            ),
            key: "bio"
        },
        {
            icon: <CalculatorOutlined/>,
            label: (
                <Link to={"/domestic-policy"}>
                    Внутренняя политика
                </Link>
            ),
            key: "domestic-policy"
        },
        {
            icon: <CalculatorOutlined/>,
            label: (
                <Link to={"/foreign-policy"}>
                    Внешняя политика
                </Link>
            ),
            key: "foreign-policy"
        },
        {
            icon: <CalculatorOutlined/>,
            label: (
                <Link to={"/cultural-policy"}>
                    Культурная и идеологическая политика
                </Link>
            ),
            key: "cultural-policy"
        },
        {
            icon: <CalculatorOutlined/>,
            label: (
                <Link to={"/church-policy"}>
                    Церковная политика
                </Link>
            ),
            key: "church-policy"
        },
        {
            icon: <CalculatorOutlined/>,
            label: (
                <Link to={"/results"}>
                    Итоги правления
                </Link>
            ),
            key: "results"
        },
        {
            icon: <CalculatorOutlined />,
            label: (
                <Dropdown overlay={employeeMenu} trigger={['click']}>
                    <Button type="text" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Сотрудники <DownOutlined />
                    </Button>
                </Dropdown>
            ),
            key: "employees"
        },
    ];

    return (
        <>
            <Header>
                <Menu
                    theme={"dark"}
                    mode={"horizontal"}
                    items={items}
                    defaultSelectedKeys={[selectedMenuItem]}
                />
                <Menu selectable={false} theme={"dark"} mode='horizontal' style={rightStyle}>
                    <Menu.Item>
                        <Switch style={{width: 20}}
                            checkedChildren="🌜"
                            unCheckedChildren="🌞"
                            checked={isDarkMode || currentTheme === "dark"}
                            onChange={toggleTheme}
                        />
                    </Menu.Item>
                </Menu>
            </Header>
        </>
    )
}