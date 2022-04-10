let res = document.querySelector('#res')
        let tab = document.querySelector('#seltab')
        let lista = []
        function analise(){
            let numero = document.querySelector('#numero')
            if(numero.value.length==0){
                alert('Campo Vazio')
            }else if(Number(numero.value)<1 || Number(numero.value>100)){
                alert('Numero fora de 1 a 100')
            }else{
                verificaLista()
            }
            numero.value = ''
        }

        function verificaLista(){
            n = Number(numero.value)
            let x = lista.indexOf(n)
            if(x == -1){
                adiciona(n)
            }else{
                alert('Número já foi adicionado')
            }
        }

        function adiciona(numeral){
            lista.push(numeral)
            let item = document.createElement('option')
            item.text = `Valor ${numeral} adicionado`
            tab.appendChild(item)
            res.innerHTML = ''
        }

        function finalizar(){
            if(lista.length==0){
                alert(`Favor adicionar números`)
            }else{
                res.innerHTML = `<p>Ao todo temos ${lista.length} números</p>`
                let maiorN = 0
                let menorN = lista[0]
                let soma = 0
                for(let x in lista){
                    if(lista[x]>=maiorN){
                        maiorN = lista[x]
                    }
                    if(lista[x]<= menorN){
                        menorN = lista[x]
                    }
                    soma += lista[x]
                }
                res.innerHTML += `<p>O maior valor é o ${maiorN}</p>`
                res.innerHTML += `<p>O menor valor é o ${menorN}</p>`
                res.innerHTML += `<p>A soma de tudo da ${soma}</p>`
                res.innerHTML += `<p>A media é de ${soma/lista.length}</p>`
            }
            
        }
        function limpar(){
            if(lista.length==0){
                alert(`Já esta vazio`)
            }else{
                lista = []
                tab.innerHTML = ''
                res.innerHTML = ''
            }    
        }