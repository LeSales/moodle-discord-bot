# Moodle status checker bot
Bot do discord criado para checar se o site <a href="https://www.dcc.ufrrj.br/moodle/login/index.php">Moodle++</a> está online ou offline.

## Desenvolvimento
Para o desenvolvimento foi utilizado <strong>Node.js</strong> e as bibliotecas:</br>
 - <a href="https://discord.js.org/#/">discord.js</a> para integração com o <a href="https://discord.com/">Discord</a>
 - <a href="https://www.npmjs.com/package/is-reachable">is-reachable</a> para checar o status da URL à verificar
 
 ## Uso
 Para utilizar basta introduzir o token do seu bot do discord na propriedade "token" do arquivo config.json e inserir a URL que deseja consultar 
 o status na propriedade "url" do arquivo config.json.
 
 ## Status
 Ao estar ativo, o bot mostrará os seguintes status:
 - Site online - Status: online, Atividade: Jogando Moodle ON
 - Site offline - Status: Não perturbar, Atividade: Jogando Moodle OFF
 
 Obs: basta alterar o conteúdo de client.user.setActivity() (onde mostra Moodle ON/OFF) no arquivo index.js para adequar ao seu uso.
