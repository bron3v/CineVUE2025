<template>
  <div class="upload-wrapper">
    <form @submit.prevent="handleSubmit">
      <!-- Titolo -->
      <label>
        Titolo:
        <input v-model="title" type="text" required />
      </label>

      <!-- Commento -->
      <label>
        Commento:
        <textarea v-model="comment" required></textarea>
      </label>

      <!-- File -->
      <label>
        Seleziona immagine:
        <input type="file" accept=".png,.jpg,.jpeg" @change="handleFileChange" required />
      </label>

      <!-- Anteprima -->
      <div v-if="preview" class="preview">
        <p>Anteprima:</p>
        <img :src="preview" />
      </div>

      <!-- Messaggio errore -->
      <p v-if="error" class="error">{{ error }}</p>

      <!-- Submit -->
      <button type="submit">Carica</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      comment: '',
      file: null,
      preview: null,
      error: ''
    }
  },
  methods: {
    handleFileChange(e) {
      const selected = e.target.files[0]
      if (!selected) return

      const validTypes = ['image/png', 'image/jpeg']
      if (!validTypes.includes(selected.type)) {
        this.error = 'Sono ammessi solo file PNG o JPG/JPEG.'
        this.file = null
        this.preview = null
        return
      }

      this.file = selected
      this.preview = URL.createObjectURL(selected)
    },
    handleSubmit() {
      if (!this.file) {
        this.error = 'Seleziona un file valido.'
        return
      }

      // Puoi ora creare un FormData per inviarlo via API
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('comment', this.comment)
      formData.append('image', this.file)

      // Simula chiamata API
      console.log('Invio dati:', {
        title: this.title,
        comment: this.comment,
        file: this.file.name
      })

      // Qui puoi usare: axios.post('/api/upload', formData)

      // Reset campi dopo invio
      this.title = ''
      this.comment = ''
      this.file = null
      this.preview = null
    }
  }
}
</script>

<style scoped>
.upload-wrapper {
  max-width: 500px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
label {
  display: block;
  margin-bottom: 1rem;
}
input[type='text'],
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
}
input[type='file'] {
  margin-top: 0.5rem;
}
.preview img {
  max-width: 100%;
  height: auto;
  margin-top: 0.5rem;
}
.error {
  color: red;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
