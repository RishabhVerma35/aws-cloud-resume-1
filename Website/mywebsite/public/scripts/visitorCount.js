// Function to fetch visitor count from the server
async function fetchVisitorCount() {
    try {
      // Make an HTTP GET request to your API endpoint
      const response = await fetch("/myRestApi");
      
      // Check if the response is successful
      if (response.ok) {
        // Parse the JSON response
        const data = await response.json();
        return data.count; // Assuming the response contains the visitor count
      } else {
        throw new Error('Failed to fetch visitor count');
      }
    } catch (error) {
      console.error(error);
      return 0; // Default to 0 if there's an error
    }
  }
  
  // Function to update the HTML element with the visitor count
  async function updateVisitorCount() {
    const visitorCount = await fetchVisitorCount();
    document.getElementById("myRestApi").innerText = visitorCount;
  }
  
  // Call the function to update the visitor count when the page loads
  document.addEventListener("DOMContentLoaded", updateVisitorCount);
  