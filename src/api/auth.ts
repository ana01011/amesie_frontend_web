import axiosInstance from "./axios";

interface RegisterPayload {
  email: string;
  password: string;
  full_name: string;
  phone_number?: string;
}

export const registerUser = async (data: RegisterPayload) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};