import './ListToDoCard.css'

function ListToDoCard({ text, onClick }) {

    return (
        <div className='list-item'>
            <div className='text-checkbox'>
                <input
                    className='check-box'
                    type={'checkbox'}
                />
                <span className='text'>{text}</span>
            </div>
            <button className='delete-button' onClick={onClick}>X</button>
        </div>
    )
}

export default ListToDoCard