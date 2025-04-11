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

  const title = t.demo.title;
  const description = t.demo.description;

  return {
    title,
    description,
  };
}

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
