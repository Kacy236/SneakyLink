import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

// Initialize Axios instance with development configurations
export const api = axios.create({
  baseURL: "https://sneaky-link-hazel.vercel.app/api",
  timeout: 10000,
});

// Universal error handler for Axios
const handleAxiosError = (error, defaultMessage = "Something went wrong") => {
  console.error("API Error:", error);
  toast.error(defaultMessage);
  throw error;
};

// GET all properties
export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd");
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// GET a specific property by ID
export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Create a new user
export const createUser = async (email, token) => {
  try {
    await api.post(
      "/user/register",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    handleAxiosError(error, "Something went wrong, please try again");
  }
};

// Book a visit
export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    handleAxiosError(error, "Something went wrong, please try again");
  }
};

// Remove a booking
export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/removeBooking/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    handleAxiosError(error, "Something went wrong, please try again");
  }
};

// Add a property to favorites
export const toFav = async (id, email, token) => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    handleAxiosError(error);
  }
};

// Get all favorite properties
export const getAllFav = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      "/user/allFav",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["favResidenciesID"];
  } catch (error) {
    handleAxiosError(error, "Something went wrong while fetching favorites");
  }
};

// Get all bookings
export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      "/user/allBookings",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["bookedVisits"];
  } catch (error) {
    handleAxiosError(error, "Something went wrong while fetching bookings");
  }
};

// Create a new residency
export const createResidency = async (data, token, userEmail) => {
  console.log("Creating residency with data:", data);
  // data = {...data,userEmail}
  // data['userEmail'] = "ndubuisik216@gmail.com"
  data['userEmail'] = JSON.parse(localStorage.getItem('user')).userEmail;

  // const residencyPayload = { data: { ...data, userEmail } };

  try {
    const res = await api.post(
      "/residency/create",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", 
        },
      }
    );
    return res.data;
  } catch (error) {
    handleAxiosError(error, "Error creating residency");
  }
};

