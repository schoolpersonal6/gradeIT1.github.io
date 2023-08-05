import React from "react";
import { useAtom } from "jotai";
import { feedbackAtom } from "@/app/sharedState";

type Props = {};

export default function Feedback({}: Props) {
  const [feedback, setFeedback] = useAtom(feedbackAtom);
  return (
    <div className="w-full flex text-sm bg-darkpaco p-2 border rounded-lg rounded-t-none border-t-0">
      {feedback}
    </div>
  );
}
