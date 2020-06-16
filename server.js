require("dotenv").config();

const express = require("express");
const NetlifyAPI = require("netlify");

const NetlifyClient = new NetlifyAPI(process.env.NETLIFY_ACCESS_TOKEN);
const UNBUILT_DEPLOY_DIRECTORY = "folder-to-build-after-deploy";

const app = express();

app.post("/api/deploy", async (req, res) => {
  const { id: siteId } = await NetlifyClient.createSite({
    body: { name: `test-from-api ${Date.now()}` },
  });

  try {
    const response = await NetlifyClient.deploy(
      siteId,
      UNBUILT_DEPLOY_DIRECTORY,
      {
        message: `attempt to build netlify manually -
        ${Date.now()}`,
      }
    );
    return res.json({ response });
  } catch (error) {
    return res.json({ error });
  }
});

app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
