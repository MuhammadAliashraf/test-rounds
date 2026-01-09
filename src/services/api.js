async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // Check if the response status is in the 200-299 range (ok)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response body as JSON
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export { fetchData };