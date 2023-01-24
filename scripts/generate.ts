#!/usr/bin/env ts-node
import { execSync } from "child_process";
import path from "path";
import { readFileSync, writeFileSync } from "fs";

const execAt = (command: string, targetCwd: string): void => {
  execSync(command, {
    stdio: [0, 1, 2],
    cwd: path.resolve(__dirname, targetCwd),
  });
};

const generateSchema = () => {
  execAt("rm -rf tmp", "../");
  execAt(
    "git clone --depth=1 git@github.com:TheSpaceDevs/spaceflightnewsapi.git tmp/be",
    "../"
  );
  execAt(
    "cp -R ./tmp/be/api/article/documentation/3.4.0/article.json ./src/api/schemas/article.json",
    "../"
  );

  // 1. Parse the JSON object from the file
  // 2. Update the version to 3.0.0
  // 3. Write back to the file
  const articleData = readFileSync("./src/api/schemas/article.json", "utf8");
  const articleDataJson = JSON.parse(articleData);

  // Fixing the missing data from the fake openapi swagger file!
  articleDataJson.openapi = "3.0.0";
  articleDataJson.components.schemas.Error = 0;

  writeFileSync(
    "./src/api/schemas/article.json",
    JSON.stringify(articleDataJson, null, 2)
  );

  execAt(
    "openapi-typescript ./src/api/schemas/article.json -o ./src/api/schemas/article.generated.ts",
    "../"
  );
  execAt("rm -rf ./tmp", "../");
};

try {
  generateSchema();
} catch (error) {
  // eslint-disable-next-line no-console
  console.warn("Failed to create sdk with error:", error);
}
