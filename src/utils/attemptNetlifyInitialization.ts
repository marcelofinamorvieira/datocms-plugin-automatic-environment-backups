const attemptNetlifyInitialization = async (netlifyURL: string) => {
  const fomratedURL = netlifyURL + "/.netlify/functions/initialization";

  const response = await fetch(fomratedURL, {
    method: "GET",
    headers: { Accept: "*/*" },
  });

  const parsedResponse = await response.json();

  if (parsedResponse.message !== "Initialization completed successfully!") {
    throw new Error("Couldn't initialize the netlify function");
  }
};

export default attemptNetlifyInitialization;
