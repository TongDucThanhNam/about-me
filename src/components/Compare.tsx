import React from "react";
import { Compare } from "@/components/ui/compare";
import {Spacer} from "@nextui-org/react";

export function CompareDemo() {
    return (
        <div
            className="h-screen w-screen px-1 md:px-8 flex flex-col items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
            <h1
                className={"text-2xl md:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "}
            >
                Tớ luôn cố gắng hoàn thị bản thân mỗi ngày
            </h1>

            <Spacer y={10}/>

            <div
                style={{
                    transform: "rotateX(15deg) translateZ(80px)",
                }}
                className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
            >
                <Compare
                    firstImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    secondImage="https://images.unsplash.com/photo-1656450552703-83ea08a43263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    firstImageClassName="object-cover object-left-top w-full"
                    secondImageClassname="object-cover object-left-top w-full"
                    className="w-full h-full rounded-[22px] md:rounded-lg"
                    slideMode="hover"
                    autoplay={true}
                />
            </div>
        </div>
    );
}
