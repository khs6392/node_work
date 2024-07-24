import fs from "fs";

fs.writeFile("c:/temp/text.txt", "hello world", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("file write complete");
  }
});
