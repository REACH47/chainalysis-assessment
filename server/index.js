const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
// const videoRoute = require("./Routes/videos.js");
require("dotenv").config();

// PORT from .env
const { PORT } = process.env;

app.use(cors());
app.use(express.json());

// hosting static image of thumbnail
// app.use(express.static("./public"));

// Routed video.js here
// app.use("/Videos", videoRoute);

// Listening...
app.listen(PORT, () => console.log(`Running on https://localhost:${PORT}`));

// const data = () => {
//   try {
//     return axios.get(
//       "https://api.lunarcrush.com/v2?data=market&key=t7583msb2asugygjl8vcto"
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };

// const lunarCrush = async () => {
//   const lunar = await data();
//   .then((response) => {
//     if (response) {
//       return response.data;
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   let l = lunar.data();
//   console.log(l);
// };

// let lunar = "";

// axios
//   .get("https://api.lunarcrush.com/v2?data=market&key=t7583msb2asugygjl8vcto")
//   .then((res) => {
//     lunar = res;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// app.get("/", (_req, res) => {
//   res.send(JSON.stringify(lunar));
// });

const rp = require("request-promise");
const requestOptions = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs: {
    start: "1",
    limit: "5000",
    convert: "USD",
  },
  headers: {
    "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
  },
  json: true,
  gzip: true,
};

rp(requestOptions)
  .then((response) => {
    console.log("API call response:", response);
  })
  .catch((err) => {
    console.log("API call error:", err.message);
  });
