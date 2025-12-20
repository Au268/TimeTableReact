const fetchCrs = async () => {
  const apiURL = "http://localhost:8082/cr/get";
  try {
    const response = await fetch(apiURL,{
      method:"GET"
    });
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
     const result = await response.json();
     return result.data;
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
};

export default fetchCrs;
