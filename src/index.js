import sum from './modules/sum'

const rootNode = document.getElementById('root')

rootNode.textContent = `Hello world! ${sum(2, 2)}`