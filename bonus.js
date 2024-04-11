const express = require("express");

const app = express();

app.get("/", (req, res) => {
    const newReminder = {
        title: req.body.title,
        description: req.body.description,
        completed: false,
        bannerImage: keywordToImage(req.body.bannerImage)
    }
    database.cindy.push(newReminder);
});

async function keywordToImage (keyword) {
    const url = "https://api.unsplash.com/search"
    const data = fetch(url);
    const res = await fetch(url);
    return data.url;
}

function keywordToImage(keyword) {
    //use unsplash developers/API search photo by keyword
}

app.listen(8085, () => {
    console.log("Server is running...")
});