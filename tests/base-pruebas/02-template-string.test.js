import { getSaludo } from "../../src/base-pruebas/02-template-string"



describe('Pruebas en 02-templates-string', () => {

    test('getSaludo debe de retornar "Hola Ton J."', () => { 

        // 1.- Inicializacion
        const name = 'Ton J.'
        
        
        // 2.- Estímulo
        const message = getSaludo( name )


        // 3.- Observar el comportamiento
        expect( message ).toBe(`Hola ${ name }`)

    })

})