import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import Axios from "axios";
import { useSelector } from "react-redux";

export const ProfilePage = () => {
  const { id } = useSelector((state) => state.userSlice.value);
  const [image, setImage] = useState("");
  const [profile, setProfile] = useState(""); // "Public/namaFilenya"

  const handleChoose = (e) => {
    console.log("e.target.files", e.target.files);
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const data = new FormData();
    console.log(data);
    data.append("file", image);
    console.log(data.get("file"));

    const result = await Axios.post(
      `http://localhost:2000/users/single-uploaded/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(result.data);
    setProfile(result.data.profilePic);

    setImage({ images: "" });
  };

  console.log(image);
  console.log(profile);
  return (
    <div>
      <h1>Profile Page</h1>
      <div style={styles.profileContainer}>
        <div style={styles.profileBox}>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "blue",
              backgroundImage: `url(http://localhost:2000/${profile})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div style={styles.buttonProfile}>
            <form encType="multipart/form-data">
              <input
                type="file"
                accept="image/*"
                name="file"
                onChange={(e) => handleChoose(e)}
              />
            </form>
            <Button colorScheme="teal" onClick={handleUpload}>
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'violet'
  },
  profileBox: {
    width: "50vw",
    height: "75vh",
    // backgroundColor: 'yellowgreen',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2% 5%",
  },
  buttonProfile: {
    marginTop: "3%",
  },
};
