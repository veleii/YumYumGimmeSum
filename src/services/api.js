const API_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

// Hämta API-nyckel
export const getApiKey = async () => {
  try {
    const response = await fetch(`${API_URL}/keys`, { method: "POST" });

    if (!response.ok) throw new Error("Failed to fetch API key");

    const data = await response.json();

    return data.key;
  } catch (error) {
    console.error("Error fetching API key:", error);
    return null;
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

    if (!response.ok) throw new Error("Failed to fetch menu");

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return null;
  }
};
// Skapar min tenant
export const createTenant = async (tenantName) => {
  console.log("Creating tenant with name:", tenantName);

  try {
    const apiKey = await getApiKey();
    console.log("API key retrieved:", apiKey);

    if (!apiKey) {
      throw new Error("Could not get API key");
    }

    const response = await fetch(`${API_URL}/tenants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": apiKey,
      },
      body: JSON.stringify({ name: tenantName }),
    });

    console.log("Tenant creation response status:", response.status);

    const data = await response.json();
    console.log("Tenant creation response data:", data);

    if (!response.ok) {
      throw new Error(
        `Could not create tenant: ${data.error || response.statusText}`
      );
    }

    if (!data.id) {
      console.error(
        "API returned success but no tenant ID was provided:",
        data
      );
      throw new Error("No tenant ID was returned from the API");
    }

    return data.id;
  } catch (error) {
    console.error("Error creating tenant:", error);
    throw error;
  }
};

// Skicka order
export const sendOrder = async (tenantId, items) => {
  try {
    const apiKey = await getApiKey();

    if (!apiKey) {
      throw new Error("Kunde inte hämta API-nyckel");
    }

    const response = await fetch(`${API_URL}/${tenantId}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": apiKey,
      },
      body: JSON.stringify({ items: items }),
    });

    if (!response.ok) {
      throw new Error("Kunde inte skicka ordern");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fel vid skapande av order:", error);
    throw error;
  }
};
