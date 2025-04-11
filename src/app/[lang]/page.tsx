'use client';
import { use } from 'react';
import { i18nText, LangType } from '@/components/Language';
import Container from '@/components/Container';
import Link from 'next/link';

type Params = {
  lang: LangType;
};

export default function Page({ params }: { params: Promise<Params> }) {
  //
  const { lang } = use(params);
  const t = i18nText[lang];

  return (
    <Container lang={lang}>
      <div className='bg-white p-2'>
        <h1 className='text-center text-2xl'>{t.home.head}</h1>
        <p>{t.home.body}</p>
        <Link href={`/${lang}/demo/`} className='text-sky-600'>
          {t.home.demo}
        </Link>
      </div>
    </Container>
  );
}
