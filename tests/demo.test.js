
describe('Pruebas en el archivo demo.test.js', () => { 

    test('Este prueba no deb de fallar', ()=> {
        
        // 1.- Inicializacion
        const message1 = 'Hola Mundo!'
        
        // 2.- Estímulo
        const message2 = message1.trim()
    
        // 3.- Observar el comportamiento
        expect( message1 ).toBe( message2 )
        expect( 1 ).toBe( 1 )
    
    })

 })
