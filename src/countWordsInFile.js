const fs = require("fs");

function countWordsInFile(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const words = data.trim().split(/\s+/);

    const wordCount = words.length;

    console.log(`Total word count in ${filename}: ${wordCount}`);
  });
}

const filename = "data.txt";
countWordsInFile(filename);
