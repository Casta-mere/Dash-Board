"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="bf9xjxfb">
      {({ open }) => (
        <button className="btn btn-secondary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};
export default UploadPage;
