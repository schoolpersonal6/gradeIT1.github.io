"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Submit from "./submit";
import { MouseEventHandler } from "react";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  rubricAtom,
  courseAtom,
  instructionsAtom,
  essayAtom,
} from "@/app/sharedState";

export default function Home() {
  // const [essayAct, setEssayAct] = useState<any>(undefined);
  const [course, _setCourse] = useAtom<string>(courseAtom);
  const [essayValue, setEssayValue] = useAtom<string>(essayAtom);
  const [instructions, _setInstructions] = useAtom<string>(instructionsAtom);
  const [rubric, _setRubric] = useAtom(rubricAtom);

  // Stringify Rubric
  let rubricInformation = `| Grades/Criteria | ${Array.from(
    { length: rubric.length - 1 },
    (_, i) => `Level ${i + 1}`
  ).join(" | ")} |\n`;

  for (let i = 0; i < rubric.length; i++) {
    const rowContent = rubric[i]
      .map((rowItem: any) => rowItem.trim())
      .join(" | ");

    rubricInformation +=
      `| ${rowContent} |` + (i == rubric.length - 1 ? "" : "\n");
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <Textarea
          value={essayValue}
          //@ts-ignore
          onChange={(e) => setEssayValue(e.target.value)}
          className="min-h-[80vh] resize-noneg text-2xl"
          autoFocus
          placeholder="Start writing here..."
        ></Textarea>
        <Submit
          studentEssay={essayValue}
          rubricInformation={rubricInformation}
          courseInformation={course}
          assignmentInstructions={instructions}
        />
      </div>
    </div>
  );
}
