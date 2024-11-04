import dynamic from 'next/dynamic'

const MacbookScrollSection = dynamic(() => import('@/components/MacbookScroll'), {
    loading: () => <p>Loading...</p>
})

const IntroduceSection = dynamic(() => import('@/components/Introduce'), {
    loading: () => <p>Loading...</p>
})

const AppleCardsCarouselDemo = dynamic(() => import('@/components/MyHobby').then((mod) => mod.AppleCardsCarouselDemo), {
    loading: () => <p>Loading...</p>
})

const CompareDemo = dynamic(() => import('@/components/Compare').then((mod) => mod.CompareDemo), {
    loading: () => <p>Loading...</p>
})

const HeroHighlightDemo = dynamic(() => import('@/components/Highlight').then((mod) => mod.HeroHighlightDemo), {
    loading: () => <p>Loading...</p>
})

const TimelineDemo = dynamic(() => import('@/components/TimeLind').then((mod) => mod.TimelineDemo), {
    loading: () => <p>Loading...</p>
})

const ThreeDCardDemo = dynamic(() => import('@/components/ThreeCard').then((mod) => mod.ThreeDCardDemo), {
    loading: () => <p>Loading...</p>
})

export default function App() {
    return (
        <div className="max-w-screen overflow-x-hidden dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
            {/* Macbook Herosection */}
            <MacbookScrollSection/>

            {/* Introduce */}
            <IntroduceSection/>

            <AppleCardsCarouselDemo/>

            <CompareDemo/>

            <HeroHighlightDemo/>

            <TimelineDemo/>

            <ThreeDCardDemo/>
        </div>
    )
}