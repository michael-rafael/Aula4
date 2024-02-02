# Obrigado ter nodeJs
## no caso de Debian/Ubuntu e derivados
https://deb.nodesource.com/

git clone https://github.com/michael-rafael/CHAT_Intensivao_JS.git
## dependencias a serem instaladas
# instala o express
npm install express

# instalar o socket.io 
npm install socket.io
# Roda o APP 
sudo node --watch ./servidor.js 

## Obs.: Atualmente esta rodando em localhost na porta 80
## Caso queira alterar, no arquivo servidor.js na linha servidorHttp.listen(80)
## informe a porta e o IP que deseja rodar: ex.: servidorHttp.listen(80, '192.168.0.2')
