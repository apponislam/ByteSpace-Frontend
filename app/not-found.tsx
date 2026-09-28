import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-white">
      <div className="relative w-full overflow-hidden bg-[#0052FE] flex-1 flex flex-col justify-between min-h-[calc(100vh-200px)]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
            backgroundSize: "120px 120px",
          }}
        />

        <Header />

        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-[150px] pb-24">
          <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="text-[170px] sm:text-[250px] md:text-[330px] lg:text-[390px] font-black leading-none tracking-tight select-none bg-gradient-to-b from-[#D4FB20] via-[#C8F212]/80 to-[#80A800]/20 bg-clip-text text-transparent">
              404
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.15] -mt-14 sm:-mt-22 md:-mt-32 relative z-10 max-w-3xl">
              The page you are looking
              <br />
              for doesn&apos;t exist
            </h1>

            <p className="mt-6 text-sm sm:text-base text-white/80 font-normal max-w-md">
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#D4FB20] text-black font-semibold text-sm sm:text-base hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
