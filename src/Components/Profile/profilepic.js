import React, { useState } from "react";
const Profilepic = () => {
const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  

//   const uploadImage = () => {
//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "Malaikah");

//     axios
//       .post(
//         "https://api.cloudinary.com/v1_1/malaikah-specialists/image/upload",
//         formData
//       )
//       .then((res) => console.log(res))
//       .then((formData) => {
//         setPublicId(formData.public_id);
//       })
//   };
const uploadImage = async e=>{
    const files = e.target.files
    const data = new FormData();
        data.append("file", files[0]);
       data.append("upload_preset", "Malaikah");
       setLoading(true)

    //    const res = axios.post("https://api.cloudinary.com/v1_1/malaikah-specialists/image/upload",data)
    //         .then((res) => console.log(res))
            const res = await fetch("https://api.cloudinary.com/v1_1/malaikah-specialists/image/upload", {
                method: 'POST',
                body: data
            })
            const file = await res.json()
            console.log(file)

            setImage(file.secure_url)
            setLoading(false)
          }
        

  return (
 <div>
   <div id="photo">
       {
           loading? (
               <h3 style={{color: 'black'}}>Loading...</h3>
           ): (
               <img src={image} alt= '' style={{width: '200px'}} />
           )
       }
      </div>
 
        <input
          type="file"
          name="file"
          onChange={uploadImage}
        ></input>   
     </div>
  );
};

export default Profilepic;
