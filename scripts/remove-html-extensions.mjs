import fs from "fs";

const files = fs.readdirSync("out");

files.forEach((file) => {
  if (file.endsWith(".html") && file !== "index.html" && file !== "404.html") {
    // Remove the .html extension exept for index.html file
    const folderName = file.split(".")[0];
    const fileName = "index";

    if (!fs.existsSync(`out/${folderName}`)) {
      fs.mkdirSync(`out/${folderName}`);
    }

    fs.renameSync(
      `out/${folderName}.html`,
      `out/${folderName}/${fileName}.html`
    );
    fs.renameSync(`out/${folderName}.txt`, `out/${folderName}/${fileName}.txt`);
  }
});
