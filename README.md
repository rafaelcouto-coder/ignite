**RF** => Requisitos funcionais<br>
**RNF** => Requisitos não funcionais<br>
**RN** => Regra de negócio<br>

# Cadastro de carro

**RF**<br>
Deve ser possível cadastrar um novo carro.<br>
Deve ser possível listar todas as categorias. <br>

**RN**<br>
Não deve ser possível cadastrar um carro com uma placa já existente. <br>
Não deve ser possível alterar a placa de um carro já cadastrado. <br>
O carro deve ser cadastrado por padrão como disponível. <br>
O usuário responsável pelo cadastro deve ser um usuário administrador. <br>

# Listagem de carros

**RF**<br>
Deve ser possível listar todos os carros disponíveis. <br>
Deve ser possível listar todos os carros disponíveis pelo nome da categoria. <br>
Deve ser possível listar todos os carros disponíveis pelo nome do carro. <br>

**RN**<br>
O usuário não precisa estar logado no sistema. <br>

# Cadastro de Especificação no carro

**RF**<br>
Deve ser possível cadastrar uma especificação para um carro.<br>
Deve ser possível listar todas os especificações. <br>
Deve ser possível listar todos os carros. <br>

**RN**<br>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado. <br>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro. <br>
O usuário responsável pelo cadastro deve ser um usuário administrador. <br>

# Cadastro de imagens do carro

**RF** <br>
Deve ser possível cadastrar a imagem do carro. <br>
Deve ser possível listar todos os carros. <br>

**RNF**<br>
Utilizar o multer para upload dos arquivos. <br>

**RN** <br>
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro. <br>
O usuário responsável pelo cadastro deve ser um usuário administrador.<br>

# Aluguel de carro

**RF** <br>
Deve ser possível cadastrar um aluguel. <br>

**RN**<br>
O aluguel deve ter duração mínima de 24 horas.<br>
Não deve ser posssível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.<br>
Não deve ser posssível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.<br>