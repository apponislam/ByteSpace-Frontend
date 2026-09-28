import React from "react";
import Image from "next/image";

export default function TestimonialSection() {
    const testimonials = [
        {
            avatar: "/home/testimonial/person1.svg",
            name: "Sarah M.",
            role: "Enthusiastic Learner",
            quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
        },
        {
            avatar: "/home/testimonial/person2.svg",
            name: "James L.",
            role: "Lifelong Learner",
            quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
        },
        {
            avatar: "/home/testimonial/person3.svg",
            name: "Alex B.",
            role: "Inspired Creator",
            quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28 font-satoshi">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 90% 15%, rgba(212, 251, 32, 0.28) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgba(0, 82, 254, 0.12) 0%, transparent 45%)",
                }}
            />

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <h2 className="font-clash font-bold text-3xl sm:text-5xl lg:text-[52px] tracking-tight text-zinc-950 leading-[1.15]">
                        Discover What Our
                        <br />
                        Community Is Saying
                    </h2>

                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal pt-2">
                        At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                    </p>
                </div>

                <div className="mt-14 sm:mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((t) => (
                        <div key={t.name} className="bg-white/90 backdrop-blur-md rounded-[32px] p-7 sm:p-8 flex flex-col justify-start border border-zinc-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
                            <div className="size-16 rounded-full overflow-hidden shrink-0">
                                <Image src={t.avatar} alt={t.name} width={64} height={64} className="w-full h-full object-cover select-none pointer-events-none" />
                            </div>

                            <h4 className="font-clash font-bold text-lg text-zinc-950 mt-5">{t.name}</h4>

                            <p className="text-sm font-medium text-[#0052FE] mt-0.5">{t.role}</p>

                            <p className="mt-6 text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">{t.quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
