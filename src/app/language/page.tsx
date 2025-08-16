import { Metadata } from "next";
import React from "react";
import Language from "../components/Language";

export const metadata: Metadata = {
  title: "日本語",
};

const LanguagePage = () => {
  return <Language />;
};

export default LanguagePage;
