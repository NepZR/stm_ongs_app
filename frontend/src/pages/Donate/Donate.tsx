import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { authContext } from "../../AuthContext/AuthContext";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import { getLocalToken } from "../../utils/getLocalToken/getLocalToken";
import { BASE_URL_API_LOCAL } from "../../utils/requests";
import brCode from './../../assets/profile/uniaoanimalv2.png';
import './styles.css'


const Contate = styled.p`
    font-size: 1em;
    font-weight: bold;
    text-align: left;
    color: var(--title-grey);
`;

interface ICamp {
    title: string;
    description: string;
    campaignTypeId: number;
    campaign_cover: string;
    date_limit: "2022-01-22"
    id: string
    value: number | null | undefined | '';
}

export default function Donate() {

    const bearerToken = `${getLocalToken()}`;
    const { user } = useContext(authContext)
    const [campaing, setCampaing] = useState({} as ICamp)
    const { id }: any = useParams()
    const campaign = useState({})
    const [date, setDate] = useState('');


    useEffect(() => {
        async function getCampaign() {
            await axios.get(`${BASE_URL_API_LOCAL}/campaign/${id}`)
                .then((response) => {
                    console.log(response.data)
                    setCampaing(response.data)
                    setDate(formatData(response.data.date_limit))
                })
        }

        getCampaign()
    }, [])

    const link = 'entrar nesse link aqui -> https://picpay.github.io/picpay-docs-digital-payments'
    // https://picpay.github.io/picpay-docs-digital-payments/

    const formatData = (data: string) => {
        const listData = data.split('-')
        return `${listData[2]}/${listData[1]}/${listData[0]}`
    }

    const qr = "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGbAAAACXBIWXMAAA7EAAAOxAGVKw4bAAALB0lEQVR4nO3dwW7kOJZA0cpG\/f8nJ2Y\/LQMssB\/JW3nO2hGSFfaFAL0gf\/3+\/fsvgIL\/3D4BgFWCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpDx98Sb\/uc\/z3Xw9+\/fiz\/5efLrL7\/7nuv+fb\/Rp81T+nTsyq9f5PR\/3D\/y3O8J8BPBAjIEC8gQLCBDsIAMwQIyRsYaPg095vxv6494H5xgWD\/59cfbEw\/Cjz1cP3ag9Uu3+WkeG0F48D\/uf3CsY0cC2CRYQIZgARmCBWQIFpAhWEDGubGGT3eXHHhw2uCYzXGBY\/MTm1d+8z3XXz4xADHh7n\/cPndYQIZgARmCBWQIFpAhWECGYAEZl8ca7tqcNpj4yYmXT0wGrB9oc9bh7lITx36jzZ\/8c7jDAjIEC8gQLCBDsIAMwQIyBAvI+KPHGo49YD625MCx85x4z82PY3MEYWKGwATD\/5w7LCBDsIAMwQIyBAvIECwgQ7CAjMtjDXef5m4+3p5Y7OHBLRsmXr6+NML60Y8tNbHp7o4k9fkJd1hAhmABGYIFZAgWkCFYQIZgARnnxhomVgI4ZmIlgPRPfro753Hs6McmAybGbur+hb8S8G8lWECGYAEZggVkCBaQIVhAxshYQ+Ub4Xc3oZg4emXPhQcd29Rj4jNKX\/l\/xB0WkCFYQIZgARmCBWQIFpAhWEDGr2PL7E+Y2MfhwSfE6eu56dieIOvvuWliuYUHF\/kY4g4LyBAsIEOwgAzBAjIEC8gQLCBjZKzh08S0wcQq\/ce2bPh0d6ji7vzEurvTBp+O\/SneffnmpMU+d1hAhmABGYIFZAgWkCFYQIZgARnnVmuorOc\/cUrrL5\/w4Bf0H1xZ4cFJi3UPnryxBuBPJ1hAhmABGYIFZAgWkCFYQMaLm1C8+TXxHekBiE3Hfvdji2c8OATw4CkNcYcFZAgWkCFYQIZgARmCBWQIFpBxbhOKdYYAVg5093n\/ugdHJdbf864HdyS5novnPiSAnwgWkCFYQIZgARmCBWQIFpDx4iYUx3YTqGyvsGliv4m7i2dUZjIe3A9l4n\/z5J+3OywgQ7CADMECMgQLyBAsIEOwgIwXN6FYd2wZg4knxMdUVr\/49OBEyKdjAxB3V6q4\/o\/gDgvIECwgQ7CADMECMgQLyBAsIOPv2yewZWJ1gU3HZgjufhf\/T16H4PMnj53nxJ\/3g7M4P3GHBWQIFpAhWECGYAEZggVkCBaQMTLWcHe\/iYlZh83zfPBJ9uaBHjylTw+uqHFsx4djwzQnucMCMgQLyBAsIEOwgAzBAjIEC8gYGWtYfxx7dxmDdXef4q\/\/5OZCAusq13PdxLjAuvT4xcnzdIcFZAgWkCFYQIZgARmCBWQIFpBxebWGTxNLI3w6tqrE+ns++Lz\/04PrOnw6tgnFMXcHIK6v6\/DcfwLATwQLyBAsIEOwgAzBAjIEC8j4lf7q+cSj6ImXf6oMK2x68DNad3dA567r+018Cl9Q4E8jWECGYAEZggVkCBaQIVhAxshYw6fNWYeJXQ+Oqeyg8eDRP6VPaWIBiQkP7ovxlzssIESwgAzBAjIEC8gQLCBDsICMkU0oJnaROPZsfuKp890n2Q+ulzAxWLB+oE0PTjAc++Cuzzq4wwIyBAvIECwgQ7CADMECMgQLyBgZa\/h0bC5hYuX\/B99zc6hi4uibP7lpYgCiMmUycfS77\/njsSbeFGCCYAEZggVkCBaQIVhAhmABGSNjDce+vT3xOHb9QKHvuC8efWIdgk\/Hxlkm1kvYPNCDV\/7Bv8+fuMMCMgQLyBAsIEOwgAzBAjIEC8g4t1rDMcee0d7d4GD95ZWVAO7OOkzMJRybDDg2aXF91sEdFpAhWECGYAEZggVkCBaQIVhAxshYw8Tj7XV3FxLY3AZi4iodm3W4\/sx70ZsP7Hc8uHjGEHdYQIZgARmCBWQIFpAhWECGYAEZv+4+zb3+lHTRxJID6y\/ftDlU8eBn9ODqAhMTIceu\/MTf59CVf+5vEeAnggVkCBaQIVhAhmABGYIFZJzbhGJiFYRjT7KPba9w9+QnHlpvvufErhzrHpw2mPibn1h3ZIg7LCBDsIAMwQIyBAvIECwgQ7CAjHNjDQ9+b379lCZ+ct2xiZAHTVzPY3+K61c+Pb1xcsWXxl8twF+CBYQIFpAhWECGYAEZggVkXF6tYdOxGYIJx1aqmJh1OHaVJh7Yrx\/o2CoId1fUWH\/59WkYd1hAhmABGYIFZAgWkCFYQIZgARm\/HpwMuLvBwcSD8PSX6Y\/Nozy4TcmD+3fc3Y3l08mju8MCMgQLyBAsIEOwgAzBAjIEC8gYGWuYcPcpfnrSYvPom+4uTnB39GTC3VUljp3Sj8eaeFOACYIFZAgWkCFYQIZgARmCBWSMbEJR+e74sRmCCXc3I9j04Mdxd7+J9VOqTNgMcYcFZAgWkCFYQIZgARmCBWQIFpBxeROKu1s23F0e4JhjKxasqxz9wb\/PT6HlFja5wwIyBAvIECwgQ7CADMECMgQLyBhZraGym8Cxp7nHHoRvvvzYgdZNPJs\/tp7HpmP7TUy83CYUwJ9OsIAMwQIyBAvIECwgQ7CAjJHVGjYde3Sa\/or8sWmDY4MF6+7OT3y6OyJTOfl97rCADMECMgQLyBAsIEOwgAzBAjJGVmtYd3cNhgcXZph4z4mXr1\/P69\/vXzzQsS0wPj24JMbdMZGfuMMCMgQLyBAsIEOwgAzBAjIEC8i4vFrDsZ0UNk+psoTDprvLLWx68IP79ODKCpVdOf5yhwWECBaQIVhAhmABGYIFZAgWkHFurOHY49gJdx\/tPzgqcffTfPDSPbilSOXo\/4g7LCBDsIAMwQIyBAvIECwgQ7CAjMtjDevufh99\/ZQqB0qf\/OaB1l\/+Kb2ixvW5hE3usIAMwQIyBAvIECwgQ7CADMECMkbGGh6cYJjw73veP7Eoxaa7m49MnNLd6\/kpNOvw3LUD+IlgARmCBWQIFpAhWECGYAEZ51ZreNCDAxB390eYWNvg08Tgy93rua5y5e+e50\/cYQEZggVkCBaQIVhAhmABGYIFZPw98aaV76Nv\/uSxRSnuTjCsm\/h+\/7GFBCorK3zavCCh2abG5wHwl2ABIYIFZAgWkCFYQIZgARkjYw2fjj06PfZ99M33nLggd5\/NP7ihyeYfw7HtPzZNLOEwcUH2ucMCMgQLyBAsIEOwgAzBAjIEC8g4N9bw6diCB8eOfmyC4dOxB8wPPpvfPNDEBzexeMaxK\/\/mShUvnhPAJ8ECMgQLyBAsIEOwgAzBAjIujzU8aP0R77G9Ie7OT2we6O4OGsc2Yqis6\/Dpwb+6n7jDAjIEC8gQLCBDsIAMwQIyBAvIMNbw\/90dF1j\/yc3Bgk\/H3vPuYg8PrtJRWeTj5ATDJ3dYQIZgARmCBWQIFpAhWECGYAEZl8carj8l\/W8TX7uv\/JrH3nNiBOHu7gx3P+IHpyKGju4OC8gQLCBDsIAMwQIyBAvIECwg49xYw7EV9Y85tu\/AsY0Y1l9+bNqgsmLBxAf3aWKG4O4WGP\/Ii+cE8EmwgAzBAjIEC8gQLCBDsICMXw8uJADwyR0WkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWT8H08Q4Lh3a77zAAAAAElFTkSuQmCC"


    return (
        <>
            <NavBar />

            <div className="card-container-donate">

                <div className="card-donate">
                    <div className="info-campanha">

                        <img
                            className="camp-cover"
                            src={campaing.campaign_cover}
                            alt="Foto da campanha"
                        />
                        {campaing.campaignTypeId === 1 ? <h3 className="type-campaing">Online</h3> : <h3 className="type-campaing">Presencial</h3>}
                        <h1 className="title-campaing">{campaing.title}</h1>
                        <Contate>{user.email}</Contate>
                        <Contate>Data limite {date}</Contate>
                        <div
                            className="description-campaing"
                        >
                            {campaing.description}
                        </div>

                    </div>
                    <div className="brcode-container">
                        <img
                            className="brcode"
                            src={brCode}
                            alt="brcode"
                        />

                    </div>

                </div>


            </div>
        </>
    )
}