import { ReactNode, Suspense } from 'react';
import { i18nText, LangType } from '@/components/Language';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  children: ReactNode;
  lang: LangType;
};

const LanguageSelect = ({ lang }: { lang: LangType }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query: string = searchParams.toString();
  return (
    <select
      value={lang}
      onChange={(e) => {
        if (e.target.value === lang) return;
        const regexp = new RegExp(`^\/${lang}\/`);
        const newPath: string =
          pathname.replace(regexp, `\/${e.target.value}\/`) + query;
        router.push(newPath);
      }}
      className='border border-slate-500 rounded p-1'
    >
      <option value='ja'>JP</option>
      <option value='en'>EN</option>
    </select>
  );
};

const Container = ({ children, lang }: Props) => {
  const t = i18nText[lang];

  return (
    <div className='max-w-screen-md mx-auto p-2 flex flex-col gap-y-2'>
      {children}
      <footer className='flex flex-col gap-y-2 p-2 items-center bg-slate-100'>
        <Suspense fallback={<div>{lang}</div>}>
          <LanguageSelect lang={lang} />
        </Suspense>
        {t.footer.footer}
      </footer>
    </div>
  );
};

export default Container;
