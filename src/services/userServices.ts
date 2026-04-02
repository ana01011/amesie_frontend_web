const BASE_URL = "http://76.13.17.48:8001/api/users/profile";

export const getUserProfile = async () => {

  const token = localStorage.getItem("accessToken");
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
};

export const updateUserProfile = async (data: any) => {
    const token = localStorage.getItem("accessToken");
  const res = await fetch(BASE_URL, {
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update profile");
  return res.json();
};