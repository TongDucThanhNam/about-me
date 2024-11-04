import {Button} from "@nextui-org/button";
import Eventbadge from "@/components/EventBadge";
import {introduce} from "@/config/site";

export default function IntroduceSection() {
    return (
        <div className="h-screen flex flex-col md:flex-row">
            {/* Hero Section */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-start md:ml-20 space-y-6">
                {introduce.content}

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Điểm mạnh</h2>
                    <ul className="list-disc list-inside  space-y-2">
                        {introduce.strength.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="space-x-4">
                    <Button color={"primary"} variant={"shadow"}>
                        Hốt liền
                    </Button>

                    <Button color={"danger"} variant={"shadow"}>
                        Không hốt
                    </Button>
                </div>
            </div>

            {/* 3D Canvas Section */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-auto">
                <Eventbadge/>
            </div>
        </div>
    )
}