function log() {
  try {
    /**
     * Tenta fazer um log da mensagem ultilizando o método mais comum
     */
    console.log(console, arguments)

  } catch (e) {
    try {
      /**
       * Tenta fazer um log no estilo OPERA
       */
      opera.postError.apply(opera, arguments)
    } catch (e) {
      /**
       * Utiliza um alert caso tudo mais dê errado
       */
      alert(Array.prototype.join.call(arguments, ' '))
    }
  }
}