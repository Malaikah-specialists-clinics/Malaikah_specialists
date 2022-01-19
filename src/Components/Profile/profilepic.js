import React, { useState } from 'react'

const Profilepic = () => {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("")
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Malaikah")
        data.append("cloud_name", "malaikah-specialists")
        fetch("https://api.cloudinary.com/v1_1/malaikah-specialists/image/upload", {
            method: "post",
            body:  data
        })
        .then(resp => resp.json())
        .then(data =>{
            setUrl(data.url)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>

            <div>
                <img src={url} alt='profilepic'  id="photo" />
            </div>
            <div>
                <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
                <label style={{fontWeight:'bold', cursor: 'pointer', fontSize:'20px'}} onClick={uploadImage}>Change Picture</label>
               
            </div>
        </div>
    )
}

export default Profilepic
