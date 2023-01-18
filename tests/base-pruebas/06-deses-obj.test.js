import { usContext } from "../../src/base-pruebas/06-deses-obj"


describe('Prubas en el archivo 06-deses-obj.js', () => {

    test('usContext debe de retornar un ojeto', () => {

        // 1.- Inicializacion
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        }

        // 2.- Estímulo
        const result = usContext( persona )


        // 3.- Observar el comportamiento
        expect( result ).toEqual({
            nombreClave: persona.clave,
            anios: persona.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })


    })

})