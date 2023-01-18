import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from '../../src/data/heroes'

describe('Pruebas en el archivo 08-imp-exp.js', () => {

    test('getHeroeById debe de regresar un heroe por ID', () => { 

        const idHero = 1


        const hero = getHeroeById( idHero )
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    
    })

    test('getHeroeById debe de regresar undefined sin no existe un heroe con ese id', () => { 

        const idHero = 6

        const hero = getHeroeById( idHero )
        
        expect( hero ).toBeFalsy()
    
    })



    
    test('getHeroesByOwner debe retornar un arreglos de heroes de DC', () => { 

        const owner = 'DC'

        const heroesDC = heroes.filter( hero => hero.owner === owner )

        const heroesResult = getHeroesByOwner( owner )


        expect( heroesResult[0].owner ).toEqual( owner )
        expect( heroesResult ).toEqual( heroesDC )
        expect( heroesResult.length ).toBe(3)
    })

    test('getHeroesByOwner debe retornar un arreglos de heroes de Marvel', () => {

        const owner = 'Marvel'

        const heroesMarvel = heroes.filter( hero => hero.owner === owner )

        const heroesResult = getHeroesByOwner(owner)

        expect( heroesResult[0].owner ).toEqual( owner )
        expect( heroesResult ).toEqual( heroesMarvel )
        expect( heroesResult.length ).toBe(2)

    })

})