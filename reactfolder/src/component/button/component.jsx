export const Button = ({ name, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>Button Name: {name}</button>
        </div>
    );
};