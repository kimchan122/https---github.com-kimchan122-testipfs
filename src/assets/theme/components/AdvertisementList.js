import MDBox from "components/MDBox";
import GetListFromIPFS from "features/GetListFromIPFS";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ModalElement from "./ModalElement";
import { reactLocalStorage } from 'reactjs-localstorage';
import { useWeb3React } from "@web3-react/core";
import injected from "features/connector";
import { InfoSharp } from "@mui/icons-material";

function AdvertisementList() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [lgShow, setLgShow] = useState(false);
    const [mddata, setMddata] = useState(null);
    const [acc, setAcc] = useState(false);
    const [arr, setArr] = useState(false);

    function setModaldata(data) {
        setLgShow(true);
        setMddata(data);
    }
    console.log("test");

    const { account, active, activate } = useWeb3React();

    // const connectWallet = async () => {
    //   try {
    //     await activate(injected, (error) => {
    //       // 크롬 익스텐션 없을 경우 오류 핸들링
    //       console.log(error);
    //       if ("/No Ethereum provider was found on window.ethereum/")
    //         throw new Error("Metamask 익스텐션을 설치해주세요");
    //     });
    //   } catch (err) {
    //     alert(err);
    //     window.open("https://metamask.io/download.html");
    //   }
    // };
    console.log(account);

    const AdvertisementComponents = async () => {
        try {
            setLoading(true);
            const pinataSDK = require('@pinata/sdk');
            const pinata = pinataSDK(process.env.REACT_APP_PINATA_API_KEY, process.env.REACT_APP_PINATA_API_SECRET);

            const metadataFilter = {
                name: 'unchainads',
            };

            const filters = {
                status: 'pinned',
                pageLimit: 20,
                pageOffset: 0,
                metadata: metadataFilter
            };

            const Find = await pinata.pinList(filters).then((result) => {
                //console.log(result);
                //console.log(result.count);
                //console.log(result.rows[0]);
                setLoading(true);
                setResults(result);
                return result;
            }).catch((err) => {
                console.log(err);
            });
        } catch (error) {
            console.log(error);
            console.log("Error Get List From IPFS: ");
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        console.log("effect");
        console.log(loading);
        console.log(results);
        if (!loading) {
            AdvertisementComponents();
        }
    });

    //const {state} = useLocation();
    //console.log(state);

    // let stateRef=null;
    // if(state){
    //     stateRef=useRef(state);
    //     console.log(stateRef.current);
    // }
    // console.log(stateRef);
    let arrfromedit = reactLocalStorage.getObject('arr');
    let sw = reactLocalStorage.get('sw');
    console.log(arrfromedit);
    console.log(sw);
    // if(arrfromedit!=undefined){
    //     console.log(arrfromedit);
    //     setArr(true);
    // }
    // if(account){
    //     console.log(account);
    //     setAcc(true);
    // }
    console.log(account);
    console.log(arrfromedit);
    console.log(arrfromedit.length);
    return (
        <Container>
            <Row xxs={1} xs={1} sm={1} md={2} lg={3} xl={3} xxl={4} xxxl={4} >
                {account ? (sw!=undefined ? (results != null ? results.rows.map((d, i) => {
                    return (
                        <Col key={i}>
                            {/* <div key={i}>{d.metadata.keyvalues.video}</div> */}
                            <Card onClick={() => setModaldata(d)} style={{ backgroundColor: "#22292A" }} className="mb-3">

                                <video style={{ width: "100%", height: "200px" }}>
                                    <source
                                        src={`${d.metadata.keyvalues.video}`}
                                        type="video/mp4"
                                    />
                                    <track default kind="captions" srcLang="en" src="/media/examples/friday.vtt" />
                                </video>
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            display: "-webkit-box",
                                            textOverflow: "ellipsis",
                                            overflow: "auto",
                                            WebkitLineClamp: "2",
                                            WebkitBoxOrient: "vertical",
                                        }}
                                    >
                                        {d.metadata.keyvalues.title}
                                    </Card.Title>
                                    <Card.Text style={{ fontsize: "5px" }}>{d.metadata.keyvalues.script}</Card.Text>
                                </Card.Body>
                            </Card>
                            <Modal
                                size="lg"
                                show={lgShow}
                                onHide={() => setLgShow(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                                style={{ backgroundColor: "#22292A" }}
                            >
                                <ModalElement data={mddata} style={{ backgroundColor: "#22292A" }} />
                            </Modal>
                        </Col>
                    )
                })
                    : <Card style={{ position: "absolute", left: "50%", top: "50%", transform: "translateX(-50%)", backgroundColor: "#22292A", fontSize: "15px", textAlign: "center", padding: "10px", paddingLeft: "30px", paddingRight: "30px" }}>
                        <span>Result loading error! Please refresh the screen!</span>
                    </Card>)
                    : <Card style={{ position: "absolute", left: "50%", top: "50%", transform: "translateX(-50%)", backgroundColor: "#22292A", fontSize: "15px", textAlign: "center", padding: "10px", paddingLeft: "30px", paddingRight: "30px" }}>
                        {reactLocalStorage.clear()}
                        <span>Please enter simple information through the EditInfo menu on the left side of our website!</span>
                    </Card>)
                    : <Card style={{ position: "absolute", left: "50%", top: "50%", transform: "translateX(-50%)", backgroundColor: "#22292A", fontSize: "15px", textAlign: "center", padding: "10px", paddingLeft: "30px", paddingRight: "30px" }}>
                        {reactLocalStorage.clear()}
                        <span>Please connect to MetaMask via the top right button on our website!</span>
                    </Card>
                }
            </Row>
        </Container>
        // <MDBox mb={3}>
        // </MDBox>
    )
}
export default AdvertisementList;