let stopTimer = null

const initAddress = () => {
    const params = new URLSearchParams(location.search)
    const name = params.get('name')

    document.querySelector('#address').textContent = name ? `${name}, вы` : 'Вы'
}

const toggleView = (sectionId) => {
    document.querySelector('#test').style.display = 'none'
    document.querySelector('#timeIsUp').style.display = 'none'
    document.querySelector('#thanks').style.display = 'none'

    document.querySelector(`#${sectionId}`).style.display = 'flex'
}

const initSubmitButton = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        stopTimer()
        setTimeout(() => {
            toggleView('thanks')
        }, 500)
    })
}

const startTimer = () => {
    const getMsFromSeconds = (n) => n * 1000
    const getMsFromMinutes = (n) => n * getMsFromSeconds(60)
    const getStringTimeFromMs = (ms) => new Date(ms).toLocaleTimeString('ru-RU', { timeZone: 'UTC' }).slice(3)

    const startTimeStamp = Date.now()
    const endTimeStamp = startTimeStamp + getMsFromMinutes(20)

    const timerHandle = setInterval(() => {
        const restMs = endTimeStamp - Date.now()

        if (restMs <= 0) {
            stopTimer()
            toggleView('timeIsUp')
        } else {
            document.querySelector('#time').textContent = `${getStringTimeFromMs(restMs)}`
        }
    }, 1000)

    stopTimer = () => clearInterval(timerHandle)
}

initAddress()
initSubmitButton()
startTimer()
