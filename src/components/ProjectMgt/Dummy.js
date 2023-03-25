import React from 'react'
//import './Dummy.css'




function Dummy() {

         const onSelectFile = (event) => {
         const selectedFile = event.target.file;
         console.log(selectedFile);

         const userimage=selectedFile.map((file))
     };
    
    

    return (

        <section>
            <label  className=" mt-5 align-middle
             border- outline-dotted cursor-default  text-md">
                + Add images
                <br />
                <input 
                    type="file"
                    name="images"
                    //onChange={onSelectFile} 
                    
                    
                    accept="image/png , image/jpeg , image/webp"
                    />
            </label>
        </section>
    );
}

export default Dummy