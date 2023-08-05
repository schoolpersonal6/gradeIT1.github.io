"use client";
import { Text, Type, Upload, Image } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { essayAtom } from "@/app/sharedState";
import { useAtom } from "jotai";
import axios from "axios";

type Props = {};

export default function UploadCont({}: Props) {
  const [fileName, setFileName] = React.useState<string>("");
  const [fileInput, setFileInput] = React.useState<any>();
  const [imageName, setImageName] = React.useState<string>("");
  const [imageInput, setImageInput] = React.useState<any>();
  const [textName, setTextName] = React.useState<string>("");
  const [textInput, setTextInput] = React.useState<string>("");

  const [essayValue, setEssayValue] = useAtom<string>(essayAtom);

  const handleFileChange = (event: any) => {
    if (event.target.files[0].type !== "application/pdf") {
      alert("Please upload a valid pdf file.");
      return;
    }
    axios
      .post(
        "https://grade-ai-ed153ea53b42.herokuapp.com/pdf",
        {
          file: event.target.files[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        //@ts-ignore
        setEssayValue(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setFileInput(undefined);
        setFileName("");
      });
  };

  const handleImageChange = (event: any) => {
    if (
      event.target.files[0].type !== "image/png" &&
      event.target.files[0].type !== "image/jpeg"
    ) {
      alert("Please upload a valid image file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    axios
      .post("https://grade-ai-ed153ea53b42.herokuapp.com/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        //@ts-ignore
        setEssayValue(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setImageInput(undefined);
        setImageName("");
      });
  };

  const handleTextChange = (event: any) => {
    const file = event.target.files[0];

    if (file.type !== "text/plain") {
      alert("Please upload a valid text file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      //@ts-ignore
      const contents = e.target.result;
      //@ts-ignore
      setEssayValue(contents);
    };

    reader.readAsText(file);
  };

  return (
    <div className="flex-col p-4 flex gap-3">
      <div className="flex gap-4 w-[600px] min-h-[200px]">
        <div className="flex flex-col gap-1 w-1/3">
          <Badge variant={"secondary"}>Upload Raw Text File</Badge>
          <label
            htmlFor="text-upload"
            className="flex h-full cursor-pointer items-center justify-center rounded-md border border-dashed w-full"
          >
            {textInput ? (
              <p className="text-ellipsis overflow-hidden p-4">{textName}</p>
            ) : (
              <>
                <Type size={48} />
              </>
            )}

            <input
              type="file"
              id="text-upload"
              className="hidden"
              onChange={handleTextChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-1 w-1/3">
          <Badge variant={"secondary"}>Upload PDF</Badge>
          <label
            htmlFor="file-upload"
            className="flex h-full cursor-pointer items-center justify-center rounded-md border border-dashed w-full"
          >
            {fileInput ? (
              <p className="text-ellipsis overflow-hidden p-4">{fileName}</p>
            ) : (
              <>
                <Upload size={48} />
              </>
            )}

            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-1  w-1/3">
          <Badge variant={"secondary"}>Upload Photo</Badge>
          <label
            htmlFor="image-upload"
            className="flex h-full cursor-pointer items-center justify-center rounded-md border border-dashed w-full"
          >
            {imageInput ? (
              <p className="text-ellipsis overflow-hidden p-4">{imageName}</p>
            ) : (
              <>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image size={48} />
              </>
            )}

            <input
              type="file"
              id="image-upload"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
      {/* <Button>Upload</Button> */}
    </div>
  );
}
