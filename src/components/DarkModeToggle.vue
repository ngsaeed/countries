<script lang='ts'>
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'DarkModeToggle',
  setup () {
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
      applyTheme()
    }

    const applyTheme = () => {
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark-theme')
      } else {
        document.documentElement.classList.remove('dark-theme')
      }
    }

    // On mount, check if the user has a preferred theme and apply it
    onMounted(() => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark') {
        isDarkMode.value = true
        applyTheme()
      }
    })

    // Watch for changes and store the theme preference
    const watchTheme = () => {
      if (isDarkMode.value) {
        localStorage.setItem('theme', 'dark')
      } else {
        localStorage.setItem('theme', 'light')
      }
    }

    watch(isDarkMode, watchTheme)

    return {
      isDarkMode,
      toggleDarkMode,
      watchTheme
    }
  }
}
</script>

<style scoped>

.dark-mode-toggle:hover {
  opacity: 0.8;
}
</style>
<template>
  <div class='dark-mode-toggle cursor-pointer flex gap-2 text-xs sm:text-base' @click='toggleDarkMode'>
    <i class="pi pi-moon"></i>
    Dark Mode
  </div>
</template>
