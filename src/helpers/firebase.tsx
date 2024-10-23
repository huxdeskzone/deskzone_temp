import axios from "axios";
// import { collection, addDoc } from "firebase/firestore";
// import db from "./firebaseConfig";

const API_URL = "https://cme-msdmps.firebaseio.com";

export const storeToken = async (token: string) => {
  try {
    const response = await axios.post(`${API_URL}/authData.json`, {
      accessToken: token,
    });

    return response.data.name;
  } catch (error) {}
};

export const getToken = async () => {
  try {
    const token = localStorage.getItem("a_t");

    // if (id) {
    //   const response = await axios.get(`${API_URL}/authData/${id}.json`);
    //   return response?.data?.accessToken;
    // }
    return token;
  } catch (error) {}
};

export const deleteToken = async () => {
  try {
    // const id = localStorage.getItem("u_t");

    // if (id) {
    //   await axios.delete(`${API_URL}/authData/${id}.json`);
    //   localStorage.removeItem("r_t");
    //   localStorage.removeItem("u_t");
    // }
    localStorage.removeItem("r_t");
    localStorage.removeItem("a_t");
  } catch (error) {}
};

export const getRefreshToken = (token: string): string => {
  const refreshToken = localStorage.getItem("r_t");

  if (refreshToken) {
    return refreshToken;
  }

  return "";
};

// const addDocument = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       username: "Abideen",
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

// const onAddUser = async () => {
//   await addDocument();
// };

// onAddUser();
