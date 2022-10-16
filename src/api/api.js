const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

const getDefinitions = async (word) => {
  let response;
  try {
    response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      requestOptions
    );
    
    const responseData = await response.json();
    
    if(!response.ok) {
      throw Error("Error");
    }
    return responseData[0];

  } catch (err) {
    console.log(err);
  }

};

export default getDefinitions;
