import React, { useEffect, useState } from "react";
// import ImgToIPFS from "features/ImgToIPFS";
import VideoToIPFS from "features/VideoToIPFS";
// import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { MDBCheckbox, MDBBtnGroup, MDBInput, MDBRadio } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import RangeSlider from 'react-bootstrap-range-slider';
import contract from '../../../contracts/RegisterAds.json';
import { ethers } from "ethers";
import { TravelExplore } from "@mui/icons-material";

//import Form from 'react-bootstrap/Form';
/* eslint-disable react/prop-types */
export default function VideoFromControl() {
    const [selected, setSelected] = useState(false);
    const [video, setVideo] = useState("");
    const [title, setTitle] = useState("");
    const [script, setScript] = useState("");
    const [category, setCategory] = useState([, , , , ,]);
    const [amount, setAmount] = useState(null);

    const [ value0, setValue0 ] = useState(0);
    const [ value1, setValue1 ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ value3, setValue3 ] = useState(0);
    const [ value4, setValue4 ] = useState(0);
    const [ value5, setValue5 ] = useState(0);

    const [ res, setRes ] = useState("");

    const contractAddress = "0x5293cbd6fe9A2981355eEe561c01fe513620f14A";
    const abi = contract.abi;

    
    const RegisterAds = async(url) => {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
            
        let tx = await contract.registerAds(
            url,
            title,
            value0,
            value1,
            value2,
            value3,
            value4,
            value5,
        );    
    }
    //const [object, setObject] = useState({});
    // console.log("video")    

    // function CategorySetting(index, value) {
    //     console.log(index, value);
    //     let cate = category;
    
    // console.log(value0);
    // console.log(value1);
    // console.log(value2);
    // console.log(value3);
    // console.log(value4);
    // console.log(value5);

    //     setCategory(cate);
    //     //console.log(value+">>>");
    //     //console.log(category);
    // }
    //let res;

    async function AdSubmit() {
        console.log("submit");
        let data = new Object();
        //data.name = "unchainad";
        //data.props = {"title": title, "script": script, "category": category, "amount": amount, ""};
        let cat = new Array([value0,value1,value2,value3,value4,value5]);
        data.title = title;
        data.script = script;
        data.category = cat;
        data.amount = amount;
        //data.video = "";
        //console.log(category);
        console.log("GO To IPFS");
        console.log(video);
        console.log(data);
        let res = await VideoToIPFS(video, data);
        setRes(res);
        console.log(res);
        if (res) {
            //console.log(res);
            RegisterAds(res);
            console.log("Object Success!");
        } else {
            //console.log(res);
            console.log("Object Failed!");
        }
    }

    const FileSelcted = () => {
        return (
            <div style={{ marginLeft: "20px", marginRight: "20px", backgroundColor: "#22292A", borderRadius: "10px", padding: "30px" }}>
                <Form.Group className="mb-3" controlId="Form.AdTitle" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control size="md" type="text" placeholder="Advertisement Title" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Form.AdScript">
                    <Form.Label>Script</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Input Advertisement Script" onChange={(e) => setScript(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Video Upload</Form.Label>
                    <Form.Control
                        type="file"
                        size="sm"
                        // value={video}
                        onChange={(e) => setVideo(e.target.files[0])}
                    />
                </Form.Group>
                <Form.Group>
                    <Row xxs={3} xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} xxxl={3} className="mb-3">
                        <Col>
                            <Form.Label>Fashion</Form.Label>
                            <RangeSlider
                                value={value0}
                                onChange={e => setValue0(e.target.value)}
                            />
                            <Form.Control value={value0} />
                        </Col>
                        <Col>
                            <Form.Label>Food</Form.Label>
                            <RangeSlider
                                value={value3}
                                onChange={e => setValue3(e.target.value, 3)}
                            />
                            <Form.Control value={value3} />
                        </Col>
                        <Col>
                            <Form.Label>Travel</Form.Label>
                            <RangeSlider
                                value={value4}
                                onChange={e => setValue4(e.target.value, 4)}
                            />
                            <Form.Control value={value4} />
                        </Col>
                        <Col>
                            <Form.Label>Medical</Form.Label>
                            <RangeSlider
                                value={value5}
                                onChange={e => setValue5(e.target.value, 5)}
                            />
                            <Form.Control value={value5} />
                        </Col>
                        <Col>
                            <Form.Label>Education</Form.Label>
                            <RangeSlider
                                value={value1}
                                onChange={e => setValue1(e.target.value, 1)}
                            />
                            <Form.Control value={value1} />
                        </Col>
                        <Col>
                            <Form.Label>Exercise</Form.Label>
                            <RangeSlider
                                value={value2}
                                onChange={e => setValue2(e.target.value, 2)}
                            />
                            <Form.Control value={value2} />
                        </Col>
                    </Row>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="Form.AmountPerPersom">
                            <Form.Label>Amount per person</Form.Label>
                            <Form.Control type="number" placeholder="Amount per person" onChange={(e) => setAmount(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <div style={{ marginTop: "30px" }}>
                    <Button variant="secondary" size="sm">
                        Reset
                    </Button>{' '}
                    <Button variant="primary" size="sm" onClick={AdSubmit} style={{ backgroundColor: "#7B4CE4", borderColor: "#7B4CE4" }}>
                        Submit
                    </Button>
                </div>
            </div>
        );
    };

    const FileNotSelected = () => {
        return (
            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Advertisement file input NOT!</Form.Label>
                <Form.Control
                    type="file"
                    size="sm"
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                />
            </Form.Group>
        );
    };

    return (
        <div>
            {FileSelcted()}
        </div>
    );
}
