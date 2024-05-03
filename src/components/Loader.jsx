import StateContainer from "./StateContainer";

const Loader = (props) => {
    return (
        <StateContainer>
            <>{props.children}</>
            <div className='loader-container'>
                <div className='loader' />
            </div>
        </StateContainer>
    );
}

export default Loader;