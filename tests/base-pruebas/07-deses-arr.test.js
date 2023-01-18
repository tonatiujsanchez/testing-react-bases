import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en el archivo 07-deses-arr.js', () => {

    test('Debe de retornar un strins y un nomero', () => {

        
        const [ letters, numbers ] = retornaArreglo()

        expect( letters ).toBe('ABC')
        expect( numbers ).toBe(123)

        // Validar typo
        expect( typeof letters ).toBe('string')
        expect( typeof numbers ).toBe('number')

        // Valida que el valor sea un string
        expect( letters ).toEqual( expect.any( String ) )


    })

})