import Header from '../components/common/Header'
import UploadForm from '../components/creator/UploadForm'

const SpiedOnPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton={true} />

      <main className="flex-1 px-6 py-8 bg-lofi-bg">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-lofi-textPrimary mb-2">
              Panel de Creador
            </h1>
            <p className="text-lofi-textSecondary">
              Comparte tu contenido exclusivo con la comunidad
            </p>
          </div>

          <UploadForm />
        </div>
      </main>
    </div>
  )
}

export default SpiedOnPage
