import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Bookster
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Gérez votre collection de livres et partagez vos découvertes littéraires avec vos amis.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Téléchargez l'application iOS
            </h2>
            <p className="text-gray-600 mb-6">
              Bookster est disponible gratuitement sur l'App Store
            </p>
            <a
              href="https://apps.apple.com/app/bookster"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Télécharger sur l'App Store
            </a>
          </div>

          <div className="text-sm">
            <Link
              to="/policies"
              className="text-gray-600 hover:text-green-600 underline transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
