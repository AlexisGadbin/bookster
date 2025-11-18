import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">Bookster</h1>
          <p className="mb-12 text-xl text-gray-600">
            Gérez votre collection de livres et partagez vos découvertes
            littéraires avec vos amis.
          </p>

          <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Téléchargez l'application iOS
            </h2>
            <p className="mb-6 text-gray-600">
              Bookster est disponible gratuitement sur l'App Store
            </p>
            <a
              href="https://apps.apple.com/us/app/bookster-ma-biblioth%C3%A8que/id6743769341"
              className="inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              Télécharger sur l'App Store
            </a>
          </div>

          <div className="text-sm">
            <Link
              to="/policies"
              className="text-gray-600 underline transition-colors hover:text-green-600"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
