'use client';
import { useParams } from 'next/navigation';
import { i18nText, LangType } from '@/components/Language';
import Container from '@/components/Container';
import Link from 'next/link';

export default function Page() {
  const params: { lang: LangType } = useParams();
  const { lang } = params;
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
