export function convertMBToBytes(val = 0) {
  let res = "0 B";
  try {
    res = val * 1000000; // Convert MB to bytes
    return res.toLocaleString() + " B";
  } catch (error) {
    console.log("error on convert MB : ", error);
    return res;
  }
}
