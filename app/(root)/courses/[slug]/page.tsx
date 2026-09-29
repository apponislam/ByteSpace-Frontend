import React from "react";
import type { Metadata } from "next";
import { coursesData } from "@/data/course";
import CourseDetailsView from "@/components/courses/CourseDetails/CourseDetailsView";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course =
    coursesData.find((c) => c.slug === slug || c.id === slug) ||
    coursesData.find((c) => c.slug === "build-digital-asset") ||
    coursesData[0];

  return {
    title: `${course?.title || "Course Details"} - ByteSpace`,
    description: `Learn ${course?.title || "digital skills"} on ByteSpace with expert guidance.`,
  };
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const course =
    coursesData.find((c) => c.slug === slug || c.id === slug) ||
    coursesData.find((c) => c.slug === "build-digital-asset") ||
    coursesData[0];

  return <CourseDetailsView course={course} />;
}
