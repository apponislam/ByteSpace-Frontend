import { Metadata } from "next";
import CoursesClient from "@/components/courses/CoursesClient";

export const metadata: Metadata = {
    title: "Explore Courses | ByteSpace",
    description: "Browse our extensive catalog of interactive online courses in design, development, data science, marketing, business, and animation.",
};

export default function CoursesPage() {
    return <CoursesClient />;
}
