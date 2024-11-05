import axios from "axios";
const API_URL = "https://cme-msdmps.firebaseio.com";

export const storeToken = async (token: string) => {
  try {
    const response = await axios.post(`${API_URL}/authData.json`, {
      accessToken: token,
    });

    localStorage.setItem("u_t", response.data.name);
    return response.data.name;
  } catch (error) {}
};

export const getToken = async () => {
  try {
    const id = localStorage.getItem("u_t");
    if (id) {
      const response = await axios.get(`${API_URL}/authData/${id}.json`);

      return response?.data?.accessToken;
    }
  } catch (error) {}
};

export const deleteToken = async () => {
  try {
    const id = localStorage.getItem("u_t");

    if (id) {
      await axios.delete(`${API_URL}/authData/${id}.json`);
      localStorage.removeItem("r_t");
      localStorage.removeItem("u_t");
    }
  } catch (error) {}
};

export const getRefreshToken = (token: string): string => {
  const refreshToken = localStorage.getItem("r_t");

  if (refreshToken) {
    return refreshToken;
  }

  return "";
};
