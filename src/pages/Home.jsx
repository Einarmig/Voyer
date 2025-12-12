import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="lofi-header px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-lofi-textPrimary">Voyer</h1>
          <Button variant="secondary" disabled={true} className="cursor-not-allowed">
            Connect Wallet
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-12">
          {/* Logo/Brand */}
          <div className="space-y-4">
            <h2 className="text-6xl font-bold text-lofi-textPrimary tracking-tight">
              Voyer
            </h2>
            <p className="text-xl text-lofi-textSecondary max-w-md mx-auto">
              Descubre y monetiza contenido exclusivo en la blockchain
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 max-w-md mx-auto">
            <Button
              onClick={() => navigate('/voyer')}
              variant="primary"
              className="w-full text-lg py-4"
            >
              Voyer
            </Button>
            <p className="text-sm text-lofi-textLight -mt-2">
              Explorar contenido
            </p>

            <div className="pt-4">
              <Button
                onClick={() => navigate('/spied-on')}
                variant="secondary"
                className="w-full text-lg py-4"
              >
                Spied On
              </Button>
              <p className="text-sm text-lofi-textLight -mt-2">
                Soy creador de contenido
              </p>
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-8">
            <p className="text-sm text-lofi-textLight">
              Plataforma descentralizada sobre Movemment blockchain
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
