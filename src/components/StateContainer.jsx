// Container component for states: Loading, Empty, Error, 404, etc

const StateContainer = (props) => {
    return (
        <div className='wrapper'>
            <div className='main-container state-container'>
                <>{props.children}</>
            </div>
        </div>
    );
}

export default StateContainer;