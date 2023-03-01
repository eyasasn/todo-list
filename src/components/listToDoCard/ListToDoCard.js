import './ListToDoCard.css'

function ListToDoCard({ text, status }) {
    return (
        <div>
            {text}
            {status}
        </div>
    )
}

export default ListToDoCard