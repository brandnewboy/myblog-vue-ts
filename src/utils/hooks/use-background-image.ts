import { onMounted, onUnmounted } from 'vue'

export const useBackgroundImage = (imagePath: string) => {
  const old = 'url(./alone.png)'
  onMounted(() => {
    const app = document.getElementById('app')
    app!.style.backgroundImage = imagePath ? `url(${imagePath})` : 'url()'
  })
  onUnmounted(() => {
    const app = document.getElementById('app')
    app!.style.backgroundImage = old
  })
}
