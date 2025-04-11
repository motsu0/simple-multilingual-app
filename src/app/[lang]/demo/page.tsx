'use client';
import { useParams } from 'next/navigation';
import { i18nText, LangType } from '@/components/Language';
import Container from '@/components/Container';
import Link from 'next/link';

export default function Page() {
  const params = useParams<{ lang: LangType }>();
  const { lang } = params;
  const t = i18nText[lang];

  return (
    <Container lang={lang}>
      <div className='bg-white p-2'>
        <h1 className='text-center text-2xl'>{t.demo.head}</h1>
        <p>{t.demo.body}</p>
        <Link href={`/${lang}/`} className='text-sky-600'>
          {t.demo.home}
        </Link>
      </div>
    </Container>
  );
}
