let progressLine = document.querySelector('.progress-line')
let resultProgress = document.querySelector('.result-progress')
let widthProgressLine = 0
let intervalLoad

function showLoad(){
    intervalLoad = setInterval(()=>{
        if(widthProgressLine < 94){
            widthProgressLine = widthProgressLine + Math.round(Math.random() * 4)
            progressLine.style.width = widthProgressLine + "%"
            resultProgress.innerHTML = `Loading: ${widthProgressLine}%`
        }
        else if(widthProgressLine >= 94 && widthProgressLine < 100){
            widthProgressLine = widthProgressLine + Math.round(Math.random() * 1)
            progressLine.style.width = widthProgressLine + "%"
            resultProgress.innerHTML = `Loading: ${widthProgressLine}%`
        }
        else if(widthProgressLine >= 100){
            widthProgressLine = 100
            resultProgress.innerHTML = `Loading finished!`
            clearInterval(intervalLoad)
        }
    }, Math.round(Math.random() * 500))
}

let buttonLoad = document.querySelector('.btn-load')

buttonLoad.addEventListener('click', ()=>{
    widthProgressLine = 0
    progressLine.style.width = widthProgressLine + "%"
    resultProgress.innerHTML = ''
    showLoad()
})