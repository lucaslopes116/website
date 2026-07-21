import '../globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { getDictionary, Locale } from '@/lib/dictionaries'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  }
}

export async function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'en' }]
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
