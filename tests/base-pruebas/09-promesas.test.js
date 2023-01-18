import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"


describe('Pruebas en el archivo 09-promesas.js', () => {

    test('getHeroeByIdAsync debe de retornar un heroe', ( done ) => {
        
        const idHero = 1

         getHeroeByIdAsync(idHero)
            .then( hero => {

                expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
                done()
            })

    })


    test('getHeroeByIdAsync debe de retornar un error si el heroe no existe', ( done ) => {
        
        const idHero = 100

         getHeroeByIdAsync(idHero)
            .then( hero =>{
                expect(hero).toBeFalsy()
                done()
            })
            .catch( error => {
                expect( error ).toBe(`No se pudo encontrar el héroe con el ID: ${idHero}`)    
                done()
            })

    })

})