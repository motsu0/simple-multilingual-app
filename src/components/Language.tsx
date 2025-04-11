const langType = ['ja', 'en'];

type LangType = (typeof langType)[number];

type Meta = {
  title: string;
  description: string;
};
type I18nText = {
  home: Meta & {
    head: string;
    body: string;
    demo: string;
  };
  demo: Meta & {
    head: string;
    body: string;
    home: string;
  };
  footer: {
    footer: string;
  };
};

const i18nText: Record<LangType, I18nText> = {
  ja: {
    home: {
      title: 'サイトタイトル',
      description: 'サイト説明文。',
      head: 'トップページ',
      body: 'ここはトップページです。',
      demo: 'デモページ',
    },
    demo: {
      title: 'ページ',
      description: 'ページ説明文。',
      head: 'デモページ',
      body: 'ここはデモページです。',
      home: 'ホームページ',
    },
    footer: {
      footer: 'フッター',
    },
  },
  en: {
    home: {
      title: 'Site Title',
      description: 'Site description.',
      head: 'Home Page',
      body: 'Here is Home Page',
      demo: 'Demo Page',
    },
    demo: {
      title: 'Page',
      description: 'Page description.',
      head: 'Demo Page',
      body: 'Here is Demo Page',
      home: 'Home Page',
    },
    footer: {
      footer: 'footer',
    },
  },
};

export { i18nText, langType };
export type { LangType };
