import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { i18nText, LangType } from '@/components/Language';

type Params = {
  lang: LangType;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = i18nText[lang];

  const title = t.home.title;
  const description = t.home.description;

  return {
    title,
    description,
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
