import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en el coponente FirstApp', () => {

    const title="Hola, soy Goku"
    const subtitle="I'm a subtitle"


    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title } /> )
        expect( container ).toMatchSnapshot()

    })

    test('Debe de mostrar el mensahe "Hola, soy Goku"', () => {

        render( <FirstApp title={ title } /> )
        
        expect( screen.getByText(title) ).toBeTruthy()
        // expect( screen.getByText(title) ).not.toBeTruthy() //Para negar
    })


    test('Debe de mostar el titulo en un h1', () => {

        render( <FirstApp title={ title } /> )
        expect( screen.getByRole('heading',{ level: 1 }).innerHTML ).toContain( title )
    })

    

    test('Debe de mostrar el subtitulo enviado por props', () => {

        render( 
            <FirstApp 
                title={ title }
                subtitle= { subtitle }
            /> 
        )

        expect( screen.getAllByText(subtitle).length ).toBe(2)

    })


})