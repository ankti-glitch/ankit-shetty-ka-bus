import type { NextConfig } from "next";

// Kept deliberately empty: we want standard Next.js behavior so live
// Supabase data (bookings, seat status) works without Suspense wrappers.
// Do NOT enable cacheComponents / partialPrefetching for this project.
const nextConfig: NextConfig = {};

export default nextConfig;