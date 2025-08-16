import type { Metadata } from "next";
import Home from "./components/Home";

export const metadata: Metadata = {
  title: "日本の世界",
};

export default function HomePage() {
  return <Home />;
}
