const API_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

// Funktion för att hämta API-nyckel
export const getApiKey = async () => {
  try {
    const response = await fetch(`${API_URL}/keys`, { method: "POST" });
    if (!response.ok) throw new Error("Failed to fetch API key");
    const data = await response.json();
    console.log("API Key:", data);
    return data;
  } catch (error) {
    console.error("Error fetching API key:", error);
  }
};

// Funktion för att hämta hela menyn
export const getMenu = async (apiKey) => {
  try {
    const response = await fetch(`${API_URL}/menu`, {
      method: "GET",
      headers: { "x-zocom": apiKey },
    });
    if (!response.ok) throw new Error("Failed to fetch menu");
    const data = await response.json();
    console.log("Menu:", data);
    return data;
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};
