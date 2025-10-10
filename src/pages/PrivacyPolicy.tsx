import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          to="/"
          className="inline-block mb-8 text-green-600 hover:text-green-700 font-medium"
        >
          ← Retour à l'accueil
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Conditions Générales d'Utilisation
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Politique de Confidentialité
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h3>
              <p className="text-gray-700 mb-4">
                Bookster accorde une importance primordiale à la protection de votre vie privée. Cette politique de confidentialité décrit comment nous gérons vos données personnelles lorsque vous utilisez notre application mobile iOS.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2. Stockage des données
              </h3>
              <p className="text-gray-700 mb-4">
                L'application suit une approche "privacy by design". Vos données sont stockées de manière sécurisée sur nos serveurs (Supabase) et sont liées à votre compte utilisateur.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. Données collectées
              </h3>
              <p className="text-gray-700 mb-3">
                Nous collectons uniquement les données nécessaires au fonctionnement de l'application :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Informations de compte</strong> : Nom, prénom, adresse e-mail (via Apple Sign In)</li>
                <li><strong>Bibliothèque personnelle</strong> : Livres ajoutés, notes, évaluations, statuts de lecture</li>
                <li><strong>Données sociales</strong> : Relations de suivi, paramètres de confidentialité</li>
                <li><strong>Photos</strong> : Photo de profil et couvertures de livres (optionnelles)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                La suppression de votre compte entraîne la suppression définitive de toutes vos données personnelles.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                4. Données que nous ne collectons PAS
              </h3>
              <p className="text-gray-700 mb-3">
                Bookster ne collecte pas :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Données de navigation ou d'utilisation détaillées</li>
                <li>Données de géolocalisation</li>
                <li>Cookies de tracking</li>
                <li>Identifiants publicitaires</li>
                <li>Informations techniques de votre appareil (sauf pour les rapports de crash)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5. Sécurité
              </h3>
              <p className="text-gray-700 mb-4">
                Aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. Bien que nous mettions en œuvre des mesures de sécurité appropriées (chiffrement, authentification via Apple Sign In, Row Level Security), vous êtes responsable de la protection de vos identifiants de connexion.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                6. Vos droits
              </h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez à tout moment accéder, modifier ou supprimer vos données directement depuis l'application. La suppression de votre compte entraîne la suppression définitive de toutes vos données.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                7. Modifications
              </h3>
              <p className="text-gray-700 mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications importantes vous seront notifiées via l'application.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                8. Contact
              </h3>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique, vous pouvez nous contacter via le formulaire de contact sur{' '}
                <a
                  href="https://alaikssi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  alaikssi.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                9. Permissions de l'application
              </h3>
              <p className="text-gray-700 mb-3">
                L'application peut demander l'accès à :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Appareil photo</strong> : Pour scanner les codes-barres ISBN et prendre des photos de couvertures</li>
                <li><strong>Bibliothèque de photos</strong> : Pour personnaliser votre profil et ajouter des couvertures de livres</li>
                <li><strong>Notifications</strong> : Pour recevoir des alertes sur les interactions sociales (demandes de suivi, etc.)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Ces permissions sont facultatives et peuvent être gérées dans les paramètres de votre appareil.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
