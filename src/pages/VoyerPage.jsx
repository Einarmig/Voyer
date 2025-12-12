import { useState } from 'react'
import Header from '../components/common/Header'
import ChatInterface from '../components/user/ChatInterface'
import ChatInput from '../components/user/ChatInput'

const VoyerPage = () => {
  // Mensajes de ejemplo pre-cargados para visualizacion
  const [messages] = useState([
    {
      message: 'Hola! Soy tu asistente para descubrir contenido exclusivo. ¿Que tipo de contenido te interesa?',
      sender: 'agent',
      timestamp: '10:00'
    },
    {
      message: 'Puedo ayudarte a encontrar videos, fotos, tutoriales y mas. ¿Tienes alguna preferencia de categoria o creador?',
      sender: 'agent',
      timestamp: '10:00'
    }
  ])

  const handleSendMessage = (message) => {
    // En MVP esto no hace nada, solo es visual
    console.log('Mensaje enviado:', message)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton={true} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <ChatInterface messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} disabled={true} />
      </div>
    </div>
  )
}

export default VoyerPage
