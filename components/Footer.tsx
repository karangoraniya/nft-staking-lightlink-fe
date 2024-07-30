import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6 px-4">
      <div className="container flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          Made with <span className="text-red-500">❤</span> by LightPunk &copy;
          2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
