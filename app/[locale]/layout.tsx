import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import getMessages, { locales } from '../../i18n';
import SideNav from '../../components/SideNav';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Get messages using our centralized i18n configuration
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex h-screen bg-gray-50">
            <SideNav />
            <main className="flex-1 overflow-auto">
              <div className="absolute top-4 right-4">
                <LanguageSwitcher locale={locale} />
              </div>
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
