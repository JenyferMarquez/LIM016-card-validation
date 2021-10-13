

importar  validador  desde  '../src/validator' ;


describir ( 'validador' ,  ( )  =>  {
  it ( 'debería ser un objeto' ,  ( )  =>  {
    esperar ( typeof  validador ) . toBe ( 'objeto' ) ;
  } ) ;

  describe ( 'validator.isValid' ,  ( )  =>  {
    it ( 'debería ser una función' ,  ( )  =>  {
      esperar ( typeof  validador . isValid ) . toBe ( 'función' ) ;
    } ) ;

    it ( 'debería retornar true para "4083952015263"' ,  ( )  =>  {
      esperar ( validador . isValid ( '4083952015263' ) ) . toBe ( verdadero ) ;
    } ) ;

    it ( 'debería retornar true para "79927398713"' ,  ( )  =>  {
      esperar ( validador . isValid ( '79927398713' ) ) . toBe ( verdadero ) ;
    } ) ;

    it ( 'debería retornar false para "1234567890"' ,  ( )  =>  {
      esperar ( validador . isValid ( '1234567890' ) ) . toBe ( falso ) ;
    } ) ;
  } ) ;

  describe ( 'validator.maskify' ,  ( )  =>  {
    it ( 'debería ser una función' ,  ( )  =>  {
      esperar ( typeof  validador . maskify ) . toBe ( 'función' ) ;
    } ) ;

    it ( 'Debería retornar "############ 5616" para "4556364607935616"' ,  ( )  =>  {
      esperar ( validador . maskify ( '4556364607935616' ) ) . toBe ( '############ 5616' ) ;
    } ) ;

    it ( 'Debería retornar "1" para "1"' ,  ( )  =>  {
      esperar ( validador . maskify ( '1' ) ) . toBe ( '1' ) ;
    } ) ;

    it ( 'Debería retornar "###### orld" para "helloworld"' ,  ( )  =>  {
      esperar ( validador . maskify ( 'helloworld' ) ) . toBe ( ' ###### orld ' ) ;
    } ) ;
  } ) ;
} ) ;
© 2021 GitHub, Inc.
Condiciones
Intimidad
Seguridad
Estado
Docs