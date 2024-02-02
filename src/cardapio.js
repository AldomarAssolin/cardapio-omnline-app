import imgXisCompleto from './assets/images-xis/xis-completo.jpeg'
import imgXisSimples from './assets/images-xis/simples.jpeg'
import imgXisFrango from './assets/images-xis/xis-frango.jpeg'
import imgXisBacon from './assets/images-xis/xis-bacon.jpeg'

const recheioPadrao = 'Alface, Tomate, Milho e Ervilha.'

const xisSimples = {
    nome: 'Xis Simples',
    descricao: `Pão de xis, Bife, Ovo, Queijo, Tomate`,
    preco: 'R$ 21,00',
    imagem: imgXisSimples
}

const xisCompleto = {
    nome: 'Xis Completo',
    descricao: `Pão de xis, Bife, Ovo, Queijo, ${recheioPadrao}`,
    preco: 'R$ 24,00',
    imagem: imgXisCompleto
}

const xisFrango = {
    nome: 'Xis Frango',
    descricao: `Pão de xis, Bife, Frango, Ovo, Queijo, Tomate`,
    preco: 'R$ 27,00',
    imagem: imgXisFrango
}

const xisBacon = {
    nome: 'Xis Frango',
    descricao: `Pão de xis, Bife, Frango, Ovo, Queijo, Tomate`,
    preco: 'R$ 27,00',
    imagem: imgXisBacon
}


export const condimentos = 'Todos os lanches contém, maionese, katchup e mostarda.'
export const xis = [
    xisCompleto,
    xisSimples,
    xisFrango,
    xisBacon
]