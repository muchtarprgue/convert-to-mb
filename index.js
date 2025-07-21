export function convertMB(val = 0) {
  let res = "0 MB";
  try {
    if (val >= 1000000) {
      res = (val / 1000000).toFixed(2) + " MB";
    } else if (val >= 1000) {
      res = (val / 1000).toFixed(2) + " KB";
    } else {
      res = val.toFixed(2) + " B";
    }
    return res;
  } catch (error) {
    console.log("error on convert MB : ", error);
    return res;
  }
}


export function printMsg() {
  console.log("This is a message from the demo package");
}