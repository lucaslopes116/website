import { getDictionary, Locale } from '@/lib/dictionaries'
import Link from 'next/link'

export default async function Home({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale)
  const otherLocale = params.locale === 'pt' ? 'en' : 'pt'

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-medium text-sm tracking-tight">lucaslopes.dev</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{dict.nav.about}</a>
              <a href="#skills" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{dict.nav.skills}</a>
              <a href="#project" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{dict.nav.project}</a>
              <a href="#experience" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{dict.nav.experience}</a>
              <a href="#contact" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{dict.nav.contact}</a>
            </div>
            <Link
              href={`/${otherLocale}`}
              className="text-xs font-medium px-3 py-1.5 border border-zinc-200 rounded-md text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-[3px] border-zinc-900 pl-6">
            <p className="text-sm text-zinc-400 mb-2">{dict.hero.greeting}</p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-3">{dict.hero.name}</h1>
            <p className="text-xl text-zinc-500">{dict.hero.role}</p>
          </div>
          <p className="mt-8 text-zinc-500 max-w-xl leading-relaxed">{dict.hero.description}</p>
          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 transition-colors"
            >
              {dict.hero.cta}
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-fernando-dos-santos-lopes-1495b6ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-200 text-sm font-medium rounded-md text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 transition-colors"
            >
              {dict.hero.resume}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium mb-8">{dict.about.title}</h2>
          <div className="max-w-2xl space-y-4 text-zinc-600 leading-relaxed">
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium mb-10">{dict.skills.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard title={dict.skills.mobile} items={dict.skills.mobileItems} />
            <SkillCard title={dict.skills.web} items={dict.skills.webItems} />
            <SkillCard title={dict.skills.tools} items={dict.skills.toolsItems} />
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="project" className="py-20 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium mb-10">{dict.project.title}</h2>
          <div className="border border-zinc-200 rounded-lg bg-white overflow-hidden">
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium px-3 py-1 bg-amber-50 text-amber-700 rounded-md">{dict.project.badge}</span>
                <span className="text-sm text-zinc-400">{dict.project.partnership}</span>
              </div>
              <h3 className="text-xl font-medium mb-3">{dict.project.name}</h3>
              <p className="text-zinc-500 leading-relaxed max-w-2xl mb-8">{dict.project.description}</p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <FeatureCard
                  title={dict.project.features.monitoring.title}
                  description={dict.project.features.monitoring.description}
                />
                <FeatureCard
                  title={dict.project.features.detection.title}
                  description={dict.project.features.detection.description}
                />
                <FeatureCard
                  title={dict.project.features.compliance.title}
                  description={dict.project.features.compliance.description}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex items-center gap-3 bg-zinc-50 rounded-md px-4 py-3">
                  <div className="w-10 h-10 bg-zinc-900 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.45 0m0 0v4.022" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{dict.project.award.title}</p>
                    <p className="text-xs text-zinc-500">{dict.project.award.event}</p>
                    <p className="text-xs text-zinc-400">{dict.project.award.category}</p>
                  </div>
                </div>
                <a
                  href="https://protecao.com.br/noticias/geral/trabalho-em-altura-prata-monitoramento-remoto-de-atividades-em-altura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors self-center"
                >
                  {dict.project.readMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                </a>
              </div>
            </div>
            <div className="border-t border-zinc-100 px-8 py-4 bg-zinc-50">
              <p className="text-sm text-zinc-500">{dict.project.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium mb-10">{dict.experience.title}</h2>
          <div className="border-l-[3px] border-zinc-200 pl-6">
            <div className="relative">
              <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-zinc-900 border-2 border-white"></div>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="text-lg font-medium">{dict.experience.arkium.company}</h3>
                <span className="text-xs font-medium px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded">{dict.experience.arkium.period}</span>
              </div>
              <p className="text-sm text-zinc-500 mb-3">{dict.experience.arkium.role}</p>
              <p className="text-zinc-600 leading-relaxed max-w-2xl">{dict.experience.arkium.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium mb-2">{dict.contact.title}</h2>
          <p className="text-zinc-500 mb-10">{dict.contact.subtitle}</p>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">{dict.contact.name}</label>
                <input
                  type="text"
                  placeholder={dict.contact.namePlaceholder}
                  className="w-full px-4 py-2.5 border border-zinc-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">{dict.contact.email}</label>
                <input
                  type="email"
                  placeholder={dict.contact.emailPlaceholder}
                  className="w-full px-4 py-2.5 border border-zinc-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">{dict.contact.message}</label>
                <textarea
                  rows={4}
                  placeholder={dict.contact.messagePlaceholder}
                  className="w-full px-4 py-2.5 border border-zinc-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 transition-colors"
              >
                {dict.contact.send}
              </button>
            </form>
            <div className="flex flex-col justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/lucas-fernando-dos-santos-lopes-1495b6ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-zinc-200 rounded-md bg-white hover:border-zinc-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-md flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
                  <svg className="w-5 h-5 text-zinc-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">LinkedIn</p>
                  <p className="text-xs text-zinc-400">linkedin.com/in/lucas-fernando</p>
                </div>
                <svg className="w-4 h-4 text-zinc-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </a>
              <a
                href="mailto:contato@lucaslopes.dev"
                className="flex items-center gap-4 p-4 border border-zinc-200 rounded-md bg-white hover:border-zinc-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-md flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
                  <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Email</p>
                  <p className="text-xs text-zinc-400">contato@lucaslopes.dev</p>
                </div>
                <svg className="w-4 h-4 text-zinc-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-zinc-400">© {new Date().getFullYear()} Lucas Lopes. {dict.footer.rights}</span>
          <Link
            href={`/${otherLocale}`}
            className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            {otherLocale === 'en' ? 'English' : 'Português'}
          </Link>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-zinc-50 rounded-lg p-6">
      <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="text-sm px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-zinc-700">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-zinc-50 rounded-md p-4">
      <h4 className="text-sm font-medium mb-1.5">{title}</h4>
      <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
    </div>
  )
}
