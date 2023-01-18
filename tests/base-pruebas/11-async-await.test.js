import { getImagen } from "../../src/base-pruebas/11-async-await"



describe('Pruebas en el archivo 11-async-await.js', () => {

    test('getImagen debe de retornar una URL de imagen', async() => {

        const resp = await getImagen()
 
        expect( typeof resp ).toBe('string')

        // Cuando hay un error
        // expect( resp ).toBe('No se encontro la imagen')

    })


})