// import { useState } from "react";
import "./userprofile.css";
// import { Link } from "react-router-dom";

function UserProfile() {
  // const [imgfile, uploadimg] = useState([]);
  // console.log("Image FIles", imgfile);
  // const imgFilehandler = (e) => {
  //   if (e.target.files.length !== 0) {
  //     uploadimg((imgfile) => [
  //       ...imgfile,
  //       URL.createObjectURL(e.target.files[0]),
  //     ]);
  //   }
  // };
  return (
    <>
      {/* <div className="App">
        <div>
          <center>
            <h2>Upload</h2>
            <input type="file" onChange={imgFilehandler} />
            <hr />
            <h2>Preview</h2>
            {imgfile.map((elem) => {
              return (
                <>
                  <span key={elem}>
                    <img src={elem} height="200" width="200" alt="med1" />
                  </span>
                </>
              );
            })}
          </center>
        </div>
      </div> */}

    </>
  );
}

export default UserProfile;
