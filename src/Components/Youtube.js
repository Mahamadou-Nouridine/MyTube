import React from 'react';
import axios from "axios"

export default axios.create({
    baseURL :  "https://www.googleapis.com/youtube/v3/",
    params: {
        part : "snippet",
        key: "AIzaSyB9f_b6y8eruHJ_EdrKt1-1R_B-qY0kCSQ",
        maxResults: 15
    }
})