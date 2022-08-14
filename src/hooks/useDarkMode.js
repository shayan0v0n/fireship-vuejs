import { ref } from "vue"

export default function useDarkMode() {
    localStorage.getItem('theme') ? null : localStorage.setItem('theme', JSON.stringify('light'))
    const currentStorage = JSON.parse(localStorage.getItem('theme'))
    let currentTheme = ref(currentStorage);
    
    const toggleTheme = () => {
        if (currentTheme.value == 'light') {
            localStorage.setItem('theme', JSON.stringify('dark'))
            currentTheme.value = 'dark'
            location.reload()
        }else {
            localStorage.setItem('theme', JSON.stringify('light'))
            currentTheme.value = 'light'
            location.reload()
        }
    }
    
    return {currentTheme, toggleTheme}
}