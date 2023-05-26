const puppeteer = require("puppeteer");
const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;
const APP_URL = `http://localhost:${port}`;

const printPdf = async (url) => {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "/usr/bin/google-chrome",
    args: [
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
    ],
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });

  const bodyHandle = await page.$("#root");
  const height = await bodyHandle.evaluate((body) => body.clientHeight);
  const viewportHeight = Math.floor(height);

  console.log("height", viewportHeight);

  await page.setViewport({ width: 1920, height: viewportHeight });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await page.screenshot({
    path: "./screenshots/example.png",
  });

  await browser.close();

  return pdf;
};

app.use(cors());

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.get("/api/download-resume/", (req, res) =>
  printPdf(`${APP_URL}${req.query.path}`)
    .then((pdf) => {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Length", pdf.length);
      res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
      res.send(pdf);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    })
);

app.get(/.*/, (_, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
