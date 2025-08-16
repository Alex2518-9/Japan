import React from "react";
import Geography from "../components/Geography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "日本の地理",
};

const GeographyPage = () => {
  return <Geography />;
};

export default GeographyPage;
