


const TicTecToe = ({onClick , value}) => {
    return (
        <>
        <div>
            <button onClick={onClick} className='square'>
                {value}
            </button>
        </div>
        </>
    );
};

export default TicTecToe;