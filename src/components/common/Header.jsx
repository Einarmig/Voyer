import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ showBackButton = false }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <header className="lofi-header px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="text-lofi-textSecondary hover:text-lofi-textPrimary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <Link to="/" className="text-2xl font-bold text-lofi-textPrimary no-underline">
            Voyer
          </Link>
        </div>

        <Button
          variant="secondary"
          disabled={true}
          className="cursor-not-allowed"
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}

Header.propTypes = {
  showBackButton: PropTypes.bool
}

export default Header
