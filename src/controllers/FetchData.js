import Sleep from "./Sleep";

const FetchData = async (url) => {
  await Sleep(500);
  const resp = await window.fetch(url);
  const result = await resp.json();
  return result;
};

export default FetchData;