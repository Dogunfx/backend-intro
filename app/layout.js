import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Counter from "./store/counter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping Website by Dogunfx",
  description: "A Fake shopping website with fakestoreapi.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Counter>
            <NavBar />
            {children}
          </Counter>
        </AntdRegistry>
      </body>
    </html>
  );
}
