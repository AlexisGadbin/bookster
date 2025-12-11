import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation()

  const formattedDate = new Date().toLocaleDateString(
    i18n.language === 'fr' ? 'fr-FR' : 'en-US'
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Link
          to="/"
          className="mb-8 inline-block font-medium text-green-600 hover:text-green-700"
        >
          {t('privacy.backToHome')}
        </Link>

        <div className="rounded-lg bg-white p-8 shadow-sm md:p-12">
          <h1 className="mb-2 text-center text-4xl font-bold text-gray-900">
            {t('privacy.title')}
          </h1>
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">
            {t('privacy.subtitle')}
          </h2>
          <p className="mb-12 text-center text-gray-600">
            {t('privacy.lastUpdated', { date: formattedDate })}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.introduction.title')}
              </h3>
              <p className="mb-4 text-gray-700">
                {t('privacy.sections.introduction.content')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.storage.title')}
              </h3>
              <p className="mb-4 text-gray-700">
                {t('privacy.sections.storage.content')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.dataCollected.title')}
              </h3>
              <p className="mb-3 text-gray-700">
                {t('privacy.sections.dataCollected.intro')}
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('privacy.sections.dataCollected.items.account'),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('privacy.sections.dataCollected.items.library'),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('privacy.sections.dataCollected.items.social'),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('privacy.sections.dataCollected.items.photos'),
                  }}
                />
              </ul>
              <p className="mb-4 text-gray-700">
                {t('privacy.sections.dataCollected.deletion')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.dataNotCollected.title')}
              </h3>
              <p className="mb-3 text-gray-700">
                {t('privacy.sections.dataNotCollected.intro')}
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>{t('privacy.sections.dataNotCollected.items.navigation')}</li>
                <li>{t('privacy.sections.dataNotCollected.items.location')}</li>
                <li>{t('privacy.sections.dataNotCollected.items.cookies')}</li>
                <li>{t('privacy.sections.dataNotCollected.items.advertising')}</li>
                <li>{t('privacy.sections.dataNotCollected.items.technical')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.security.title')}
              </h3>
              <p className="mb-4 text-gray-700">
                {t('privacy.sections.security.content')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.rights.title')}
              </h3>
              <p className="mb-4 text-gray-700">
                {t('privacy.sections.rights.content')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.modifications.title')}
              </h3>
              <p className="mb-4 text-gray-700">
                {t('privacy.sections.modifications.content')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.contact.title')}
              </h3>
              <p className="mb-4 text-gray-700">
                {t('privacy.sections.contact.content')}{' '}
                <a
                  href="https://alaikssi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline hover:text-green-700"
                >
                  alaikssi.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t('privacy.sections.permissions.title')}
              </h3>
              <p className="mb-3 text-gray-700">
                {t('privacy.sections.permissions.intro')}
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('privacy.sections.permissions.items.camera'),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('privacy.sections.permissions.items.photos'),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('privacy.sections.permissions.items.notifications'),
                  }}
                />
              </ul>
              <p className="mb-4 text-gray-700">
                {t('privacy.sections.permissions.optional')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
