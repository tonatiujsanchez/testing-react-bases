import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en el coponente FirstApp', () => {

    // test('Debe de hacer match con el snapshot', () => {

    //     const title="Hola, soy Goku"
    //     const { container } = render( <FirstApp title={ title } /> )
    //     expect( container ).toMatchSnapshot()

    // })

    test('Debe de mostrar el título en un H1', () => {

        const title="Hola, soy Goku"
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> )
        expect( getByText(title) ).toBeTruthy()


        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toBe( title )
        // expect(h1.innerHTML).toContain( title )

        expect( getByTestId('test-title').innerHTML ).toContain( title )

    })


    test('Debe de mostrar el subtitulo por props', () => {

        const title="Hola, soy Goku"
        const subtitle="I'm a subtitle"

        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subtitle= { subtitle }
            /> 
        )

        expect( getAllByText(subtitle).length ).toBe(2)

    })


})