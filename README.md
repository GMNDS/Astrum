# Astrum

## Motivação
Esse é um projeto que comecei nas férias da faculdade e é derivado de um projeto que inicialmente a ideia era ser de fato apenas acadêmico o [Academy](https://github.com/GMNDS/academy_frontend) que basicamente era a concepção de um sistema educacional completo.

Porém durante as férias não satisfeito com oque a faculdade me proporcionou tentei correr atrás de mais conhecimento e ai que tive a ideia, ao invés de fazer algo acadêmico porque não fazer algo que realmente faça sentido e resolva um problema? E assim surgiu o Astrum que inicialmente teria o nome de Astra (por questões de domínio não disponível o nome não era viável).

Bom a ideia basicamente é pegar os dados do SIGA da FATEC a partir de scrapping e jogar em uma tela bonita, inicialmente web com React e posteriormente mobile com React Native. Sinceramente não sei quanto tempo isso vai demorar, pois já comecei desenvolver ele e percebi que correr muito pra aprender algo nem sempre é o melhor caminho e as vezes é necessário dar um passo para trás para poder dar dois para frente, oque é melhor que ficar parado no mesmo lugar.

## Pensamento do projeto
Inicialmente pensei em fazer esse projeto com backend em Rust que é uma linguagem que estudei por um tempo e comecei bastante, mas nem tudo e flores e nem sempre fazemos oque queremos e oque queremos nem sempre é aquilo que precisamos. Dito isso Rust foi descartado em pouco tempo. Pensei em fazer o projeto em React puro também, mas eu precisaria de um backend, como estava aprendendo Typescript em paralelo pensei em usar algo como ElysiaJS e parecia promissor. Mas o caminho mais rápido de fato era aprender NextJS que de fato combina com o ecossistema React, então depois de tentar várias coisas só comecei ele de fato poucos dias antes das férias acabarem, fiz e descartei muita coisa nesse meio tempo, inclusive até uns dias atrás o nome do projeto era Astra.

## Como eu pensei em fazer
Bom a ideia é bem simples eu preciso obter o cookie do usuário e a partir disso com a api fetch do navegador consigo fazer uma solicitação pegar os dados trata-los e retornar eles em json. Para obter o cookie vai ter um endpoint que vai receber o usuário e senha do estudante, fazer um scrapping do cookie pelo puppeteer, armazenar em algo que ainda não decidi mas provavelmente algo semelhante ao local storage ou pg-lite até porque não quero arriscar os dados de ninguém, por algum problema de segurança e partir disso vai fazer solicitações fetchs, pras páginas tratar os dados necessários devolver em um json pra api pro front end consumir.

Essa é a ideia básica, se vai funcionar ? Até esse momento sim.

