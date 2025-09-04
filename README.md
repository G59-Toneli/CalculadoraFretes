# Calculadora de Frete MetalMecânico

Aplicação em JavaScript que calcula o frete para uma empresa do ramo metalmecânico, considerando quantidade de peças, região de entrega, distância e opção de rastreamento.

## Funcionalidades

- Leitura da quantidade de peças a serem transportadas.
- Seleção da região de entrega: Sul, Sudeste ou Centro-Oeste.
- Leitura da distância em quilômetros para cálculo do combustível.
- Opção de rastreamento da entrega (S/N) com taxa fixa de R$ 200,00.
- Aplicação de desconto para peças acima de mil unidades, de acordo com a região.
- Cálculo do valor total do frete somando peças, combustível e rastreamento.

## Exemplo de Cálculo

- Cliente envia 1.200 peças para a região Sudeste.
- Frete por peça até 1.000 unidades: R$ 1,20 cada.
- Frete por peça excedente (200 peças) com desconto de 12%: R$ 1,056 cada.
- Valor total do frete pelas peças: `(1000 * 1.2) + (200 * 1.056) = R$ 1.411,20`.
- Valor do combustível: distância em km * preço do litro de diesel.
- Taxa de rastreamento (opcional): R$ 200,00.

## Como Usar

1. Abra o arquivo `index.html` no navegador.
2. Preencha os campos:
   - Número de peças
   - Região de entrega
   - Distância em km
   - Deseja rastreamento? (S/N)
3. Clique no botão para calcular o frete.
4. O valor detalhado e total será exibido na tela.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Observações

- O sistema realiza entregas apenas para as regiões Sul, Sudeste e Centro-Oeste.
- O preço do combustível é considerado fixo (R$ 6,07 por litro).
- Descontos são aplicados automaticamente para peças que excederem 1.000 unidades.

# CalculadoraFretes
