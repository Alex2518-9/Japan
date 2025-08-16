import React from "react";
import History from "../components/History";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "日本の歴史",
};

const HistoryPage = () => {
  return <History />;
};

export default HistoryPage;
