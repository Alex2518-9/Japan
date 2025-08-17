import React from "react";
import Culture from "../components/Culture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "日本の文化",
};

const CulturePage = () => {
  return <Culture />;
};

export default CulturePage;
