"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function HttpClient() {
  const [welcome, setWelcome] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetchWelcome = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };
    const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);


  return (
    <div id="wd-http-client">
      <h3>HTTP Client</h3>
      <button
        id="wd-fetch-welcome"
        className="btn btn-primary"
        onClick={fetchWelcome}
      >
        Fetch Welcome
      </button>
      <div className="mt-2">{welcome}</div>
      <hr />
            <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
      <hr />
    </div>
  );
}

function setWelcomeOnClick(message: any) {
    throw new Error("Function not implemented.");
}
