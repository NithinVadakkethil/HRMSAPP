export const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd
  };

export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" }); // Aug
    const year = date.getFullYear();
  
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12 || 12; // convert to 12h format
  
    return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
  };
  // 👉 "26 Aug 2025 12:40 PM"

  export const seperatedDateTime = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" }); // Aug
    const year = date.getFullYear();
  
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12 || 12; // convert to 12h format
  
    // return an object with date and time separated
    return {
      date: `${day} ${month} ${year}`,   // e.g. "26 Aug 2025"
      time: `${hours}:${minutes} ${ampm}` // e.g. "12:40 PM"
    };
  };
  