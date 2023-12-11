import fs from "fs";

export const output = (filename: string, content: string) => {
  fs.writeFile(`./outputs/${filename}.txt`, content, (err) => {
    if (!err) return;

    console.error(`OUTPUT ERROR FOR ${filename}.js:`, err);
  });
};

export const config = (tool?: string) => {
  const data = fs.readFileSync("./config.json");
  const json = JSON.parse(data.toString());

  if (tool) {
    return json[tool];
  }

  return json;
};
