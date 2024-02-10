//IMGS XIS
import imgXisSimples from './assets/images-xis/simples.jpeg'
import imgXisCompleto from './assets/images-xis/xis-completo.jpeg'
import imgXisFrango from './assets/images-xis/xis-frango.jpeg'
import imgXisBacon from './assets/images-xis/xis-bacon.jpeg'

//IMGS DOGS
import imgDogSimples from './assets/images-dog/dog-simples.jpeg'
import imgDogCompleto from './assets/images-dog/dog-completo.jpeg'
import imgDogFrango from './assets/images-dog/dog-frango.jpeg'

//IMGS BEBIDAS
import imgCoca350ml from './assets/images-bebidas/coca350ml.jpeg'
import imgCoca1l from './assets/images-bebidas/coca1l.jpeg'
import imgCoca2l from './assets/images-bebidas/coca2l.jpeg'

const recheioPadrao = 'Alface, Tomate, Milho e Ervilha.'

//XIS
const menu = {
    xis: [
        {
            id:'1',
            nome: 'Xis Simples',
            descricao: `Pão de xis, Bife, Ovo, Queijo, Tomate`,
            preco: 'R$ 21,00',
            imagem: imgXisSimples
        },
        {
            id:'2',
            nome: 'Xis Completo',
            descricao: `Pão de xis, Bife, Ovo, Queijo, ${recheioPadrao}`,
            preco: 'R$ 24,00',
            imagem: imgXisCompleto
        },
        {
            id:'3',
            nome: 'Xis Frango',
            descricao: `Pão de xis, Bife, Frango, Ovo, Queijo, Tomate, ${recheioPadrao}`,
            preco: 'R$ 27,00',
            imagem: imgXisFrango
        },
        {
            id:'4',
            nome: 'Xis Frango',
            descricao: `Pão de xis, Bife, Frango, Ovo, Queijo, Tomate`,
            preco: 'R$ 27,00',
            imagem: imgXisBacon
        }
    ],
    dog: [
        {
            id:'1',
            nome: 'Dog Simples',
            descricao: `Pão de dog, salsicha, batata palha, ${recheioPadrao}`,
            preco: 'R$ 15,00',
            imagem: imgDogSimples
        },
        {
            id:'2',
            nome: 'Dog Completo',
            descricao: `Pão de dog, salsicha, Ovo, Queijo, batata palha, Tomate, ${recheioPadrao}`,
            preco: 'R$ 17,00',
            imagem: imgDogCompleto
        },
        {
            id:'3',
            nome: 'Dog Frango',
            descricao: `Pão de dog, Frango, Queijo, batata palha, Tomate, ${recheioPadrao}`,
            preco: 'R$ 22,00',
            imagem: imgDogFrango
        }
    ],
    bebidas: [
        {
            id:'1',
            nome: 'Coca-Cola',
            descricao: `350ml`,
            preco: 'R$ 6,00',
            imagem: imgCoca350ml
        },
        {
            id:'2',
            nome: 'Coca-Cola',
            descricao: `1l`,
            preco: 'R$ 9.50',
            imagem: imgCoca1l
        },
        {
            id:'3',
            nome: 'Coca-Cola',
            descricao: `2l`,
            preco: 'R$ 15,00',
            imagem: imgCoca2l
        }
    ]
}

export const condimentos = 'Todos os lanches contém, maionese, katchup e mostarda.'
export { menu }

/**
 * const xisSimples = {
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
    descricao: `Pão de xis, Bife, Frango, Ovo, Queijo, Tomate, ${recheioPadrao}`,
    preco: 'R$ 27,00',
    imagem: imgXisFrango
}

const xisBacon = {
    nome: 'Xis Frango',
    descricao: `Pão de xis, Bife, Frango, Ovo, Queijo, Tomate`,
    preco: 'R$ 27,00',
    imagem: imgXisBacon
}

//SOBREMESAS



const dogSimples = {
    nome: 'Dog Simples',
    descricao: `Pão de dog, salsicha, batata palha, ${recheioPadrao}`,
    preco: 'R$ 15,00',
    imagem: imgDogSimples
}

const dogCompleto = {
    nome: 'Dog Completo',
    descricao: `Pão de dog, salsicha, Ovo, Queijo, batata palha, Tomate, ${recheioPadrao}`,
    preco: 'R$ 17,00',
    imagem: imgDogCompleto
}

const dogFrango = {
    nome: 'Dog Frango',
    descricao: `Pão de dog, Frango, Queijo, batata palha, Tomate, ${recheioPadrao}`,
    preco: 'R$ 22,00',
    imagem: imgDogFrango
}

//BEBIDAS
const cocaLata = {
    nome: 'Coca Lata',
    descricao: `350ml`,
    preco: 'R$ 5,00',
    imagem: imgCoca350ml
}



    xisCompleto,
    xisSimples,
    xisFrango,
    xisBacon
]

export const dog = [
    dogSimples,
    dogCompleto,
    dogFrango
]

export const bebidas = [
    cocaLata
]
 */