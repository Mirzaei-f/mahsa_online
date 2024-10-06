import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { usefetchuser } from '../components/usefetchuser';
import Entypo from 'react-native-vector-icons/Entypo';
import { RFValue } from "react-native-responsive-fontsize";

import { Issset } from "../components/isset"



const uploadFile = async (formdata) => {
    console.log("formdata333333",formdata)
    let fileName;
    let res = await fetch("https://mahsaonlin.com/admin/guest/main/upload",
        {
            method: "post",
            body: formdata,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    )

    let responsejson = await res.json()
    console.log("ffffff",responsejson)
    if (responsejson.error !== true && responsejson.error !== 1) {
        fileName = responsejson.data.file
     
    }
    
    return fileName
}

// const handleChoosePhoto = async (type) => {
//     let image;
//     const options = {
//         noData: true,
//     };
//     const images = await launchImageLibrary(options)
//     const formdata = new FormData();
//     formdata.append("data", {
//         uri: images.assets[0].uri,
//         type: images.assets[0].type,
//         name: images.assets[0].fileName,
//     });

//     formdata.append("fileType", type);
//     uploadFile(formdata).then(fileName => {
//         image = fileName
//     });

//     console.log("fileName========555=>", image)
//     return image;
// }





const handleChoosePhoto = (type) => {
    return new Promise(async (resolve, reject) => {
        let image;
        const options = {
            noData: true,
        };

        try {
            const images = await launchImageLibrary(options);
            const formdata = new FormData();
            formdata.append("data", {
                uri: images.assets[0].uri,
                type: images.assets[0].type,
                name: images.assets[0].fileName,
            });

            formdata.append("fileType", type);

            uploadFile(formdata)
                .then(fileName => {
                    image = fileName;
                    console.log("fileName========555=>", image);
                    resolve(image);    
                    
                })
                .catch(error => {
                    reject(error);
                });
        } catch (error) {
            reject(error);
        }
    });
};




const handleChooseaudio = (uri) => {
    console.log("Uploading " + uri);

    return new Promise(async (resolve, reject) => {
        let audio;
        const options = {
            noData: true,
        };

        try {
            // const images = await launchImageLibrary(options);
            // const formdata = new FormData();
            // formdata.append("data", {
            //     uri: images.assets[0].uri,
            //     type: images.assets[0].type,
            //     name: images.assets[0].fileName,
            // });

            let uriParts = uri.split('.');
            console.log("uriParts",uriParts)
            let fileType = uriParts[uriParts.length - 1];
            console.log("fileType",fileType)
          
            let formdata = new FormData();
            formdata.append('data', {
                uri:uri,
                name: `recording.${fileType}`,
                type: `video/mp4`,
            });
            formdata.append("fileType", "audio");

            uploadFile(formdata)
                .then(fileName => {
                    audio = fileName;
                    console.log("fileName========audiorecord=>",audio);
                    resolve(audio);
                })
                .catch(error => {
                    reject(error);
                });
        } catch (error) {
            reject(error);
        }
    });
};















export { handleChoosePhoto,handleChooseaudio };