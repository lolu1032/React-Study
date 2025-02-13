function Item({ name, isPacked }) {
    return (
        <li className="item">
        {name} {isPacked ? '✅' : '❌'}
        </li>
    );
}

export default Item;