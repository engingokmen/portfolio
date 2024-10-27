"use client";
import dynamic from "next/dynamic";

const MovieApp = dynamic(() => import("@engingokmen/movie-app"), {
  ssr: false,
});

export default function Chat() {
  return (
    <div>
      <div className="sticky-note">
        * Please enter an email and password to login. You don&apos;t need to
        register.
      </div>
      <MovieApp />
    </div>
  );
}
