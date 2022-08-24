import axios from 'axios';
import ObjectToIPFS from './ObjectToIPFS';

const VideoToIPFS = async (video, obj) => {
    if (video) {
        try {
            console.log(video);
            console.log(obj);
            //var fs = require('fs');
            const data = new FormData();
            data.append("file", video);
            //data.append("pinataMetadata", obj);
            //data.append("metadata", '{"name": "test", "key": "keyyy", "category": ["food", "fashion", "blockchain"]}');
            //console.log(data);
            console.log(video);
            const res = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                headers: {
                    "Content-Type": "multipart/form-data",
                    'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                    'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                },
                data: data,
            });

            //console.log(resFile);
            //setIhash(res.data.IpfsHash);
            const RealHash = res.data.IpfsHash;
            //setLogoHash(RealHash);
            const VideoHash = `https://api.pinata.cloud/data+${res.data.IpfsHash}`;
            //console.log(ImgHash);

            //console.log(res);
            //console.log(res.data);
            //console.log(RealHash);
            //console.log(VideoHash);
            //  setImgsrc(RealHash);

            //let ObjectData = obj;
            //obj.video = VideoHash;
            //console.log(ObjectData);
            //obj.video = RealHash;

            ObjectToIPFS(RealHash, obj);
            return VideoHash;
            //return true;

        } catch (error) {
            console.log("Error sending Video to IPFS: ")
            console.log(error)
            return false;
        }
    }
}

export default VideoToIPFS;
