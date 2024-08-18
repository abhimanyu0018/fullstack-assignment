import React from "react";

const Footer = () => (
  <footer className="bg-black text-white py-16 px-20">
    <div className="container mx-auto grid grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold mb-4">Abstract</h3>
        <ul>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Branches
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Resources</h3>
        <ul>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Blog
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Help Center
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Release Notes
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Status
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Community</h3>
        <ul>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Twitter
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Facebook
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Dribbble
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Podcast
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Company</h3>
        <ul>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Careers
            </a>
          </li>
          <li>
            <a href="" className="hover:underline underline-offset-2">
              Legal
            </a>
          </li>
        </ul>
        <h3 className="font-bold mt-4 mb-2">Contact Us</h3>
        <p>
          {" "}
          <a href="" className="hover:underline underline-offset-2">
            info@abstract.com
          </a>
        </p>
      </div>
    </div>
    <div className="container mx-auto mt-8 flex justify-end items-center">
      <div>
        © Copyright 2022
        <br />
        Abstract Studio Design, Inc.
        <br />
        All rights reserved
      </div>
    </div>
  </footer>
);

export default Footer;
