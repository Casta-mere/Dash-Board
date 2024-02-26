"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinrayResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt={"a picture"} />
      )}
      <CldUploadWidget
        uploadPreset="bf9xjxfb"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinrayResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-secondary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};
export default UploadPage;
