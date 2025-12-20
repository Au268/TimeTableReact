const declineRequest = async (data) => {
  const apiUrl = "http://localhost:8082/request/decline"
    try {
      const response = await fetch(apiUrl,{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({data})
    });
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
      const result = await response.json();
        return result
    } catch (error) {
      console.error("Error submitting data:", error);
    }
};

export default declineRequest;
