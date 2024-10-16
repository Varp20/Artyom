const petro = document.getElementById('Petro')
const magadan = document.getElementById('Magadan')
const dallas = document.getElementById('Dallas')
const tokyo = document.getElementById('Tokyo')
const tucson = document.getElementById('Tucson')

async function Api() {
    const response_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const response_magadan = await fetch('https://api.open-meteo.com/v1/forecast?latitude=59.5638&longitude=150.8035&current=temperature_2m&hourly=temperature_2m')
    const response_dallas = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.7831&longitude=-96.8067&current=temperature_2m&hourly=temperature_2m')
    const response_tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m&hourly=temperature_2m')
    const response_tokyo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m')
    const data_petro = await response_petro.json()
    const data_magadan = await response_magadan.json()
    const data_dallas = await response_dallas.json()
    const data_tucson = await response_tucson.json()
    const data_tokyo = await response_tokyo.json()
    return [data_petro, data_magadan, data_dallas, data_tucson, data_tokyo]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        tucson.textContent = `Air temperature: ${out[3].current.temperature_2m} \u00B0C`
        tokyo.textContent = `Air temperature: ${out[4].current.temperature_2m} \u00B0C`
        magadan.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        dallas.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output()