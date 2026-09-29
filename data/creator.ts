import { Course, coursesData } from "./course";

export interface Creator {
    id: string;
    slug: string;
    name: string;
    role: string;
    tagline: string;
    avatar: string;
    bio: string;
    bioSecondary?: string;
    productsCount: number;
    followersCount: number;
    rating: number;
    category: string;
    featured?: boolean;
}

export const creatorsData: Creator[] = [
    {
        id: "purepearl",
        slug: "purepearl",
        name: "PurePearl Studio",
        role: "Creator",
        tagline: "Passionate UI/UX, Web designer",
        avatar: "/creators/purepearl.png",
        bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
        bioSecondary: "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
        productsCount: 6,
        followersCount: 12,
        rating: 4.8,
        category: "UI/UX Design",
        featured: true,
    },
    {
        id: "alex-devlin",
        slug: "alex-devlin",
        name: "Alex Devlin",
        role: "Lead Instructor",
        tagline: "Senior Cloud & DevOps Architect",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        bio: "Hi! I'm Alex Devlin, a cloud architect with over 10 years of experience designing mission-critical enterprise infrastructure. I help developers bridge the gap to production-grade engineering.",
        bioSecondary: "Through practical, code-first courses, I teach microservices, Kubernetes, and scalable distributed architectures.",
        productsCount: 4,
        followersCount: 340,
        rating: 4.9,
        category: "Development",
        featured: true,
    },
    {
        id: "sophia-carter",
        slug: "sophia-carter",
        name: "Sophia Carter",
        role: "Creative Director",
        tagline: "Digital Art & Brand Strategist",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        bio: "Sophia is an award-winning creative director specializing in digital branding, visual narratives, and human-centered design for high-growth tech companies.",
        bioSecondary: "Her classes blend psychological research with bold aesthetic choices to help creators build timeless identities.",
        productsCount: 5,
        followersCount: 512,
        rating: 4.8,
        category: "Marketing",
        featured: true,
    },
    {
        id: "kenji-sato",
        slug: "kenji-sato",
        name: "Kenji Sato",
        role: "Animator & Illustrator",
        tagline: "Motion Designer & 3D Artist",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        bio: "Kenji Sato is a Tokyo-based motion director known for seamless 2D/3D hybrid animations in commercials, video games, and film.",
        bioSecondary: "He guides students through foundational keyframing, rigging, and dynamic physics in Blender and After Effects.",
        productsCount: 3,
        followersCount: 289,
        rating: 4.7,
        category: "Animation",
        featured: true,
    },
    {
        id: "elena-rostova",
        slug: "elena-rostova",
        name: "Elena Rostova",
        role: "Growth Strategist",
        tagline: "Social Media & Viral Content Expert",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
        bio: "Elena specializes in multi-channel organic distribution, audience monetization, and algorithm optimization across TikTok, YouTube, and Instagram.",
        bioSecondary: "Her frameworks have driven over 50M organic views and 6-figure revenue channels for emerging creators.",
        productsCount: 4,
        followersCount: 430,
        rating: 4.9,
        category: "Social Media",
        featured: true,
    },
    {
        id: "marcus-vance",
        slug: "marcus-vance",
        name: "Marcus Vance",
        role: "Fine Artist",
        tagline: "Contemporary Painter & Traditional Illustrator",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
        bio: "Marcus Vance combines traditional oil painting techniques with digital workflow solutions to help traditional artists thrive in the modern age.",
        bioSecondary: "His workshops emphasize mastery of light, atmospheric depth, and expressive brushwork.",
        productsCount: 3,
        followersCount: 195,
        rating: 4.6,
        category: "Drawing & Painting",
        featured: false,
    },
];

export function getCreatorBySlug(slug: string): Creator | undefined {
    return creatorsData.find((c) => c.slug.toLowerCase() === slug.toLowerCase() || c.id.toLowerCase() === slug.toLowerCase());
}

export function getCoursesByCreator(creatorSlug: string): Course[] {
    const creator = getCreatorBySlug(creatorSlug);
    const authorName = creator?.name.toLowerCase() || "";
    
    const matched = coursesData.filter((course) => {
        const cAuthor = course.author?.name?.toLowerCase() || "";
        const cHref = course.author?.href?.toLowerCase() || "";
        return cAuthor === authorName || cHref.includes(creatorSlug.toLowerCase()) || (creatorSlug === "purepearl" && (cAuthor.includes("purepearl") || course.id === "1" || course.id === "2" || course.id === "bda"));
    });

    if (matched.length >= 3) {
        return matched;
    }

    return coursesData.slice(0, 6);
}
