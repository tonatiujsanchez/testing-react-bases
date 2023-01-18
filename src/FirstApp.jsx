import PropTypes from 'prop-types'


const getLastname = () => 'Sánchez'
const name = 'Ton J.'
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


export const FirstApp = (props) => {

    return (
            <SecondApp 
                title="Hi! I'm Ton J." 
                subtitle="Developer and Martial artist"
            />
    )
}




export const SecondApp = ({ title, subtitle }) => {
    
    return (
        <div>
            <h1 style={{ margin: 0 }}>{title}</h1>
            <h3 style={{ margin: 0 }}><strong>{subtitle}</strong></h3>
            <p style={{ margin: 0 }}>{numbers}</p>
        </div>
    )
}

SecondApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

SecondApp.defaultProps = {
    title: 'Sin título',
    subtitle: 'Sin subtítulo'
}
