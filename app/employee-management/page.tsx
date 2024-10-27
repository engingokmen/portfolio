"use client";
import React, { useEffect } from "react";

import dynamic from "next/dynamic";
// @typescript-eslint/ban-ts-comment
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WebComponent = dynamic(import("@engingokmen/employee-management"), {
  ssr: false,
});

export default function EmployeeManagementRoute() {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      html {
        font-family: Arial, Helvetica, sans-serif;
        --primary-text-color: #333;
        color: var(--primary-text-color);

        --lighterBlue: rgb(244, 250, 255);
        --lightBlue: rgb(154, 210, 252);
        --blue: rgb(0, 140, 255);
        --warning: rgb(255, 140, 0);
        --white: white;
      }

      #dialog-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        dialog: {
          position: relative;
        }
      }

      .dialog {
        position: relative;
        background-color: var(--lighterBlue);
        }
    `;
    document.body.append(styleTag);
  }, []);
  return (
    <>
      {/* @typescript-eslint/ban-ts-comment */}
      <employee-management></employee-management>
    </>
  );
}
