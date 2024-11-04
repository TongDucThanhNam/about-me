import {MacbookScroll} from "@/components/ui/macbook-scroll";
import {macbook} from "@/config/site";

export default function MacbookScrollSection() {
    return (
        <div className="overflow-hidden  w-full h-screen">
            <MacbookScroll
                title={macbook.content}
                src={macbook.image}
                showGradient={false}
            />
        </div>
    )
}