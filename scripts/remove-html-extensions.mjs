import fs from "fs";

const files = fs.readdirSync("out");

files.forEach((file) => {
  if (file.endsWith(".html") && file !== "index.html" && file !== "404.html") {
    // Remove the .html extension exept for index.html file
    const folderName = file.split(".")[0];
    const fileName = "index.html";

    console.log("fileName", fileName);
    console.log("folderName", folderName);
    console.log(
      "fs.existsSync(folderName)",
      fs.existsSync(`out/${folderName}`)
    );
    if (!fs.existsSync(`out/${folderName}`)) {
      fs.mkdirSync(`out/${folderName}`);
    }

    fs.renameSync(`out/${file}`, `out/${folderName}/${fileName}`);
  }
});
