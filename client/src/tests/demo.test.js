test('esta prueba no debe de fallar', () => { 
    if(0 === 0){
        throw new Error('Error');
    }
  });