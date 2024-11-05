import axios from "axios";
let baseUrl: string;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_DEV_API_BASE_URL || "";
} else {
  baseUrl =
    process.env.REACT_APP_PROD_API_BASE_URL ||
    "https://deskzone-backend.onrender.com/api";
}

export const getCurrentLoggedInUser = async () => {
  try {
    const response = await axios.get(`${baseUrl}/user/logged-in-user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("a_t")}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
