export const Card = ({about}) => {
    return (
        <>
        <div className="card">
            <div className="card-content">
            <h1>About</h1>
            <p>{about}</p>
            </div>
        </div>
        </>
    )
}