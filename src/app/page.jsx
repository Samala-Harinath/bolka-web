import { Suspense } from 'react';
import HomePageContent from "@/components/HomePageContent/HomePageContent"

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent/>
    </Suspense>
  );
}
