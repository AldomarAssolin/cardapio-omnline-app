
Criar cardápio de Dog e Bebidas.
Cofigurar navegação para exibir cardápios.




#### Concluido #####
Criar um app de cardápio online, ex.: hastagTrainamentos no youtube.
Com React e Vite em vez de create-react-app.
Criar objetos no arquivo cardapio.js

#cardapio.js (Adaptar para lanches)
	pratosPrincipais
		nome, preço, descrição, imagem.
	sobremesas
		nome, preço, descrição, imagem.
	bebidas
		nome, preço, descrição, imagem.

#components
	App;
		Capa;
			Imagem de capa
		Navegacao;
			input=radio(pratosPrincipais, sobremesas, bebidas)
		Menu
			container-card
				card
					h2:nome, p:preço, p:descrição, img:imagem

