import PropTypes from 'prop-types'



export const FirstApp = ({ title, subtitle, name }) => {
    
    return (
        <div>
            <h1 data-testid="test-title" style={{ margin: 0 }}> { title } </h1>
            <h2 style={{ margin: 0 }}><strong>{ subtitle }</strong></h2>
            <h2 style={{ margin: 0 }}><strong>{ subtitle }</strong></h2>
            <p style={{ margin: 0 }}>{ name }</p>
        </div>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'Tonatiuj Sácnhez',
    subtitle: 'Sin subtítulo',
    // title: 'Sin título',
}
