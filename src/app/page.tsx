'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const language: string =
      window.navigator.language || window.navigator.language[0];
    if (language.includes('ja')) {
      router.push('/ja/');
    } else {
      router.push('/en/');
    }
  }, [router]);
  return <></>;
}
