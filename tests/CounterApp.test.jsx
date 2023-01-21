import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en el componente CounterApp', () => {
    
    const initialValue = 100
    
    test('Debe de hace match con el snapshot', () => {

        const { container } = render( <CounterApp value={initialValue} /> )
        expect( container ).toMatchSnapshot()

    })

    test('Debe de mostrar el valor inicial de 100', () => {
        

        render( <CounterApp value={initialValue} /> )
        
        expect( screen.getByText( initialValue ) ).toBeTruthy()
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( '100' )

    })


    test('Debe de incrementar con el boton +1', () => {

        render( <CounterApp value={initialValue} /> )

        fireEvent.click( screen.getByText('+1') )

        expect( screen.getByRole('heading',{ level: 2 }).innerHTML ).toContain('101')

    })


    test('Debe de decremetar con el boton -1', () => {
        render( <CounterApp value={ initialValue } /> )
        
        fireEvent.click( screen.getByText('-1') )

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('99')
    })

    test('Debe de funcionae el boton de reset', () => {

        render( <CounterApp value={ 100 } /> )

        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )

        // fireEvent.click( screen.getByText('Reset') )
        fireEvent.click( screen.getByRole('button',{ name: 'btn-reset' }) )
        
        screen.debug()

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100')


    })



})