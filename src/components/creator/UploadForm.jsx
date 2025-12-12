import { useState } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import TagInput from './TagInput'

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    tags: [],
    files: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // En MVP esto no hace nada, solo visual
    console.log('Formulario enviado:', formData)
  }

  const handleTagsChange = (newTags) => {
    setFormData({ ...formData, tags: newTags })
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-lofi-textPrimary mb-6">
        Nueva Publicacion
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre de publicacion */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-lofi-textPrimary mb-2"
          >
            Nombre de la publicacion
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Ej: Tutorial de fotografia nocturna"
            disabled={true}
            className="lofi-input w-full"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-lofi-textPrimary mb-2">
            Tags
          </label>
          <TagInput
            tags={formData.tags}
            onTagsChange={handleTagsChange}
            disabled={true}
          />
        </div>

        {/* Upload de contenido */}
        <div>
          <label className="block text-sm font-medium text-lofi-textPrimary mb-2">
            Contenido
          </label>
          <div className="border-2 border-dashed border-lofi-sand rounded-lofi p-12 text-center bg-lofi-bg hover:border-lofi-terracota transition-colors cursor-not-allowed opacity-60">
            <div className="space-y-2">
              <div className="text-4xl">📁</div>
              <p className="text-lofi-textSecondary">
                Arrastra archivos aqui o haz clic para seleccionar
              </p>
              <p className="text-sm text-lofi-textLight">
                Imagenes (JPG, PNG, GIF) o Videos (MP4, MOV)
              </p>
            </div>
          </div>
          <p className="text-xs text-lofi-textLight mt-2">
            El upload de archivos no es funcional en esta version MVP
          </p>
        </div>

        {/* Boton publicar */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            disabled={true}
            className="w-full text-lg"
          >
            Publicar Contenido
          </Button>
          <p className="text-xs text-lofi-textLight text-center mt-2">
            La publicacion no es funcional en esta version MVP
          </p>
        </div>
      </form>
    </Card>
  )
}

export default UploadForm
