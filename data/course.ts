export interface Course {
    id: string;
    title: string;
    slug: string;
    image: string;
    category: string;
    author: {
        name: string;
        avatar?: string;
        href: string;
    };
    lessonsCount: number | string;
    duration: string;
    commentsCount: number | string;
    rating: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    enrolledStudents: {
        avatars: string[];
        count: string;
    };
    price: number;
    pricePeriod: string;
    href: string;
    featured?: boolean;
}

export const coursesData: Course[] = [
    {
        id: "1",
        title: "Learn Figma from Basic",
        slug: "learn-figma-from-basic",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
        category: "UI/UX Design",
        author: {
            name: "purepearl studio",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
            href: "/creators/purepearl",
        },
        lessonsCount: "17 Lessons",
        duration: "2 hours 16 mins",
        commentsCount: "59 Comments",
        rating: 4.5,
        level: "Beginner",
        enrolledStudents: {
            avatars: [
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
            ],
            count: "26+",
        },
        price: 25,
        pricePeriod: "lifetime",
        href: "/courses/learn-figma-from-basic",
        featured: true,
    },
    {
        id: "2",
        title: "Mastering Modern Next.js & React",
        slug: "mastering-modern-nextjs-react",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        category: "Web Development",
        author: {
            name: "Alex Devlin",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
            href: "/creators/alex-devlin",
        },
        lessonsCount: "32 Lessons",
        duration: "6 hours 45 mins",
        commentsCount: "128 Comments",
        rating: 4.9,
        level: "Intermediate",
        enrolledStudents: {
            avatars: [
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80",
            ],
            count: "84+",
        },
        price: 49,
        pricePeriod: "lifetime",
        href: "/courses/mastering-modern-nextjs-react",
        featured: true,
    },
    {
        id: "3",
        title: "Design Systems with Tailwind & Figma",
        slug: "design-systems-with-tailwind-figma",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        category: "UI/UX Design",
        author: {
            name: "Sophia Carter",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
            href: "/creators/sophia-carter",
        },
        lessonsCount: "24 Lessons",
        duration: "4 hours 10 mins",
        commentsCount: "94 Comments",
        rating: 4.8,
        level: "Intermediate",
        enrolledStudents: {
            avatars: ["https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80"],
            count: "45+",
        },
        price: 35,
        pricePeriod: "lifetime",
        href: "/courses/design-systems-with-tailwind-figma",
        featured: true,
    },
    {
        id: "4",
        title: "Digital Illustration: Character Design",
        slug: "digital-illustration-character-design",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        category: "Digital Illustration",
        author: {
            name: "Kenji Sato",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
            href: "/creators/kenji-sato",
        },
        lessonsCount: "19 Lessons",
        duration: "3 hours 40 mins",
        commentsCount: "42 Comments",
        rating: 4.7,
        level: "Beginner",
        enrolledStudents: {
            avatars: [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
            ],
            count: "38+",
        },
        price: 30,
        pricePeriod: "lifetime",
        href: "/courses/digital-illustration-character-design",
    },
    {
        id: "5",
        title: "Graphic Design Fundamentals: Branding",
        slug: "graphic-design-fundamentals-branding",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
        category: "Graphic Design",
        author: {
            name: "Elena Rostova",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            href: "/creators/elena-rostova",
        },
        lessonsCount: "22 Lessons",
        duration: "4 hours 30 mins",
        commentsCount: "76 Comments",
        rating: 4.6,
        level: "Beginner",
        enrolledStudents: {
            avatars: [
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80",
            ],
            count: "61+",
        },
        price: 29,
        pricePeriod: "lifetime",
        href: "/courses/graphic-design-fundamentals-branding",
    },
    {
        id: "6",
        title: "Professional Studio Photography",
        slug: "professional-studio-photography",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        category: "Photography",
        author: {
            name: "Marcus Vance",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            href: "/creators/marcus-vance",
        },
        lessonsCount: "15 Lessons",
        duration: "3 hours 15 mins",
        commentsCount: "35 Comments",
        rating: 4.8,
        level: "Advanced",
        enrolledStudents: {
            avatars: [
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80",
            ],
            count: "19+",
        },
        price: 40,
        pricePeriod: "lifetime",
        href: "/courses/professional-studio-photography",
    },
    {
        id: "7",
        title: "Data Science & Machine Learning Bootcamp",
        slug: "data-science-machine-learning-bootcamp",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        category: "Data Science",
        author: {
            name: "Dr. David Wu",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
            href: "/creators/david-wu",
        },
        lessonsCount: "45 Lessons",
        duration: "10 hours 20 mins",
        commentsCount: "210 Comments",
        rating: 4.9,
        level: "Advanced",
        enrolledStudents: {
            avatars: [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80",
            ],
            count: "120+",
        },
        price: 65,
        pricePeriod: "lifetime",
        href: "/courses/data-science-machine-learning-bootcamp",
    },
    {
        id: "8",
        title: "Growth Marketing & Social Ads Strategy",
        slug: "growth-marketing-social-ads-strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        author: {
            name: "Clara Bennett",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
            href: "/creators/clara-bennett",
        },
        lessonsCount: "18 Lessons",
        duration: "3 hours 50 mins",
        commentsCount: "67 Comments",
        rating: 4.7,
        level: "Intermediate",
        enrolledStudents: {
            avatars: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80"],
            count: "52+",
        },
        price: 32,
        pricePeriod: "lifetime",
        href: "/courses/growth-marketing-social-ads-strategy",
    },
];
