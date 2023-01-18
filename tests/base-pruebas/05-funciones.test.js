import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"




describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe de retornar un objeto', () => {


        // 1.- Inicializacion
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        // 2.- Estímulo
        const user = getUser()

        // 3.- Observar el comportamiento
        expect( testUser ).toEqual( user )
    })


    test('getUsuarioActivo debe retornar un objeto', () => { 


        // 1.- Inicializacion
        const name = 'Brandon'
        const objetTest = {
            uid: 'ABC567',
            username: name
        }

        // 2.- Estímulo
        const user = getUsuarioActivo( name )


        // 3.- Observar el comportamiento
        expect( user ).toEqual( objetTest )

    })

})


