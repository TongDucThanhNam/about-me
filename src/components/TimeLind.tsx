import React from "react";
import {Timeline} from "@/components/ui/timeline";
import {timelineData} from "@/config/site";

export function TimelineDemo() {
    return (
        <div className="w-full h-full ">
            <Timeline data={timelineData}/>
        </div>
    );
}
