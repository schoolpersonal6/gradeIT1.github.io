import "./page.css";
import Typing from "@/components/ui/typing";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Github } from "lucide-react";
import YoutubeVideo from "@/components/ytvid";
import { Badge } from "@/components/ui/badge";

export default function page() {
  return (
    <div className="flex flex-col w-full items-start justify-center gap-10">
      <div className="py-10 flex flex-col">
        <div className="whitespace-pre">
          <Typing />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex px-3 gap-5">
            <Link href="/essay" className={buttonVariants()}>
              Get Started
            </Link>
            <Link href="/#features" className={buttonVariants()}>
              Features
            </Link>
          </div>
          <div className="px-3">
            <div className="px-2 py-0.5 font-semibold border bg-gray-800 w-fit rounded-xl">
              Made by Meher Khurana
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr></hr>
      </div>
      <div className="w-full flex justify-center text-4xl font-bold tracking-tight flex-col items-center gap-5">
        Demo Video
        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-sm shadow-white">
          <YoutubeVideo />
        </div>
      </div>
      <div className="w-full">
        <hr></hr>
      </div>
      <div
        id="features"
        className="w-full flex justify-center text-4xl font-bold tracking-tight flex-col items-center gap-5"
      >
        Features
        <div className="flex gap-10">
          <div className="flex gap-8">
            <div className="flex flex-col flex-1">
              <Badge className="tracking-normal flex justify-center font-bold text-base border-b-none border border-paco rounded-b-none">
                Upload Rubrics
              </Badge>
              <div className="text-base font-normal tracking-normal flex-1 border bg-darkpaco p-4 rounded-xl  rounded-t-none">
                GradeIT can accept rubrics provided by the teacher to guide the
                grading system. This not only makes it less unlikely for grades
                to be completely random but also helps stay true to the rubric
                when evaluating the paper.
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <Badge className="tracking-normal flex justify-center font-bold text-base border-b-none border border-paco rounded-b-none">
                AI + Feedback
              </Badge>
              <div className="text-base font-normal tracking-normal flex-1 border bg-darkpaco p-4 rounded-xl  rounded-t-none">
                GradeIT can give feedback on each paper to explain why each
                essay has the grade it was assigned. This not only allows the
                teacher to understand the limitations of the students themselves
                but can give them insights on how to teach their students
                better.
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <Badge className="tracking-normal flex justify-center font-bold text-base border-b-none border border-paco rounded-b-none">
                Accepts Many Formats
              </Badge>
              <div className="text-base font-normal tracking-normal flex-1 border bg-darkpaco p-4 rounded-xl  rounded-t-none">
                GradeIT can accept many formats of essays, including text, pdfs
                & other readable files, and also images. With the power of text
                recognition and OCR models, GradeIT has flexibility when it
                comes to accepting essay formats.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
