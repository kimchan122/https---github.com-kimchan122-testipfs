import MDBox from "components/MDBox";
import GetListFromIPFS from "features/GetListFromIPFS";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ModalElement from "./ModalElement";
import { reactLocalStorage } from 'reactjs-localstorage';
import contract from '../../../contracts/RegisterAds.json';
import { useWeb3React } from "@web3-react/core";
import injected from "features/connector";
import { ConnectingAirportsOutlined, InfoSharp } from "@mui/icons-material";
import { ethers } from "ethers";
import  generateProof  from "./ad_js/proofGenerate";
import pinataClient from "@pinata/sdk";

const snarkjs = require('snarkjs');
// const groth16 = require('groth16');



function AdvertisementList() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [lgShow, setLgShow] = useState(false);
    const [mddata, setMddata] = useState(null);
    const [proof, setProof] = useState(null);
    const [acc, setAcc] = useState(false);
    const [arr, setArr] = useState(false);
    const contractAddress = "0x5293cbd6fe9A2981355eEe561c01fe513620f14A";
    const abi = contract.abi;

    function setModaldata(data) {
        setLgShow(true);
        setMddata(data);
    }
    console.log("test");

    const { account, active, activate } = useWeb3React();

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

    let arrfromedit = reactLocalStorage.getObject('arr');
    let sw = reactLocalStorage.get('sw');
    console.log(arrfromedit);
    console.log(sw);
    console.log(account);
    console.log(arrfromedit);
    console.log(arrfromedit.length);


    // calculateProof(arrfromedit, "contractaddresss");
    async function calculateProof() { 

        let wasmBuff = `https://gateway.pinata.cloud/ipfs/QmYAjZGHpeg1PT8rDXNHbN4kVW5V3rid346PHENW424ftR`;
        let zkeyBuff = `https://gateway.pinata.cloud/ipfs/QmUoB5pgRY9NYJRQT3AGbcZKKSiTm3yPbzkasmHS6QvykX`;

        let input = {
            "fashion": ["0", "0", "22", "0", "0", "0", "0", "0"],
            "food": ["0", "0", "22", "0", "0", "0", "0", "0"],
            "travel": ["0", "0", "22", "0", "0", "0", "0", "0"],
            "medical": ["0", "0", "42", "0", "0", "0", "0", "0"],
            "education": ["0", "0", "33", "0", "0", "0", "0", "0"],
            "exercise": ["0", "0", "5", "0", "0", "0", "0", "0"],
            "slotIndex": 2,
            "operator": 3,
            "valueFashion": [4],
            "valueFood": [11],
            "valueTravel": [4],
            "valueMedical": [4],
            "valueEducation": [4],
            "valueExercise": [6]
          }

        //   console.log(w);
        //   console.log(x);
          console.log(input);
          console.log(wasmBuff);
          console.log(zkeyBuff);

        // console.log(snarkjs.groth16.fullProve());

        // const { proof, publicSignals } = await snarkjs.groth16.fullProve(input, wasmBuff, zkeyBuff);
        const { proof, publicSignals } = await snarkjs.groth16.fullProve(input, wasmBuff, zkeyBuff);



        // let { proof, publicSignals } = await generateProof(wasmBuff, zkeyBuff, w, x);
        console.log(proof);
        setProof(proof);
    }
      
    async function callAds() {
      const { ethereum } = window;
      let provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      let contract = new ethers.Contract(contractAddress, abi, signer);
    
      console.log(proof);
      let a = proof[0];
      let b = proof[1];
      let c = proof[2];
      let pubInput = proof[3];
    
      try {
        let tx = await contract.callTargetAds(a, b, c, pubInput, adId);
        await tx.wait()
      } catch (error) {
        alert("fail : " + error)
      }
    }

    const Ads = async () => {

        const { ethereum } = window;
        let x;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);
    
            let fashion = await contract.showAdFashion(0);
            let food = await contract.getFood(0);
            let travel = await contract.getTravel(0);
            let medical = await contract.getMedical(0);
            let education = await contract.getEducation(0);
            let exercise = await contract.getExercise(0);

            x = [fashion, food, travel, medical, education, exercise];
        }

        console.log(x);

        calculateProof();

        // calculateProof(arrfromedit,x);
    }

    async function getFileBuffer(filename) {
        let req = await fetch(filename);
        return Buffer.from(await req.arrayBuffer());
    }


    return (
        <Container>
            {/* <Row><Button onClick={(e) => Ads()}>Button</Button></Row> */}
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