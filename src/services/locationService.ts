export function getExactLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported by browser");
      reject("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          source: "gps"
        };

        console.log("GPS Location:", location);
        resolve(location);
      },
      (error) => {
        console.log("GPS Error:", error.message);
        reject(error.message);
      },
      { timeout: 8000 }
    );
  });
}

export function getIpLocation() {
  return fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      const location = {
        lat: data.latitude,
        lon: data.longitude,
        source: "ip"
      };

      console.log("IP Location (Fallback):", location);
      return location;
    });
}

export async function getUserLocation() {
  try {
    console.log("Trying GPS...");
    return await getExactLocation();
  } catch (err) {
    console.log("GPS failed. Switching to IP fallback...");
    return await getIpLocation();
  }
}