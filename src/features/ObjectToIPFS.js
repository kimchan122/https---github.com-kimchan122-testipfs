import axios from 'axios';

const ObjectToIPFS = async (video, obj) => {
    if (obj) {
        try {
            const pinataSDK = require('@pinata/sdk');
            const pinata = pinataSDK(`${process.env.REACT_APP_PINATA_API_KEY}`, `${process.env.REACT_APP_PINATA_API_SECRET}`);
            pinata.testAuthentication().then((result) => {
                //handle successful authentication here
                console.log(result);
            }).catch((err) => {
                //handle error here
                console.log(err);
            });

            const MyCustomName = "unchainads";

            console.log(video)
            console.log(obj);

            const body = {
                message: `${obj.title}`,
            };
            const options = {
                pinataMetadata: {
                    name: MyCustomName,
                    keyvalues: {
                        title: `${obj.title}`,
                        script: `${obj.script}`,
                        category: `${obj.category}`,
                        amount: `${obj.amount}`,
                        video: `http://unchainads.mypinata.cloud/ipfs/${video}`,
                    },
                },
                pinataOptions: {
                    cidVersion: 0,
                },
            };
            pinata.pinJSONToIPFS(body, options).then((result) => {
                //handle results here
                console.log(result);
            }).catch((err) => {
                //handle error here
                console.log(err);
            });
            //var fs = require('fs');
            // const data = new FormData();
            // data.append("file", video);
            // data.append("metadata", '{"name": "test", "key": "keyyy", "category": ["food", "fashion", "blockchain"]}');
            // console.log(data);
            // console.log(video);
            // const list = await axios({
            //     method: "get",
            //     url: 'https://api.pinata.cloud/data/pinList',
            //     headers: {
            //         'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
            //         'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
            //     }
            // });
            // console.log(list);
            // console.log(list.data);


            // let datas = JSON.stringify({
            //     "pinataOptions": {
            //         "cidVersion": 1
            //     },
            //     "pinataMetadata": {
            //         "name": "unchainads",
            //         "keyvalues": {
            //             "name": "unchainads",
            //             "title": obj.keyvalues.title,
            //             "script": obj.keyvalues.script,
            //             "category": obj.keyvalues.category,
            //             "amount": obj.keyvalues.amount,
            //             "video": obj.video
            //         }
            //     },
            //     "pinataContent": {
            //         "name": "unchainads",
            //         "title": obj.keyvalues.title,
            //         "script": obj.keyvalues.script,
            //         "category": obj.keyvalues.category,
            //         "amount": obj.keyvalues.amount,
            //         "video": obj.video
            //     },
            // });

            // console.log(datas);

            // const res = await axios({
            //     method: "post",
            //     url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
            //     data: datas,
            //     headers: {
            //         // 'Content-Type': 'application/json',
            //         'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
            //         'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
            //     },
            // });

            //console.log(resFile);
            //setIhash(res.data.IpfsHash);
            // const RealHash = res.data.IpfsHash;
            // //setLogoHash(RealHash);
            // //const ImgHash = `ipfs://${res.data.IpfsHash}`;
            // //console.log(ImgHash);

            // console.log(res);
            // console.log(res.data);
            // console.log(RealHash);
            // setImgsrc(RealHash);

            // let oneEV = {
            //     title: eventname,
            //     script: script,
            //     logohash: RealHash,
            //     props: property
            // }
            // console.log(oneEV);
            // setEvents([...events, oneEV]); // add event  
            // const jsonContent = JSON.stringify(oneEV);
            // console.log(jsonContent);
            // console.log("EVENT");
            // console.log(events);
            // sendEVENTJSONToIPFSPinata(jsonContent);
            return true;

        } catch (error) {
            console.log("Error sending Object to IPFS: ")
            console.log(error)
            return false;
        }
    }
}

export default ObjectToIPFS;
