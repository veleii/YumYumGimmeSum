const API_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

// Hämta API-nyckel
export const getApiKey = async () => {
  try {
    const response = await fetch(`${API_URL}/keys`, { method: "POST" });
    console.log("Response status:", response.status); // Logga status

    if (!response.ok) throw new Error("Failed to fetch API key");

    const data = await response.json();
    console.log("API Key:", data.key); // Logga nyckeln
    return data.key; // Returnera endast API-nyckeln
  } catch (error) {
    console.error("Error fetching API key:", error);
    return null; // Returnera null vid fel
  }
};

// Hämta menyn
export const getMenu = async (apiKey) => {
  if (!apiKey) {
    console.error("Ingen API-nyckel tillgänglig.");
    return null;
  }

  try {
    const response = await fetch(`${API_URL}/menu`, {
      method: "GET",
      headers: { "x-zocom": apiKey },
    });

    console.log("Response status:", response.status); // Logga status

    if (!response.ok) throw new Error("Failed to fetch menu");

    const data = await response.json();
    console.log("Menu:", data); // Logga menydata
    return data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return null;
  }
};
