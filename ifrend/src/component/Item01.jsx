function Item01({ name, importance }) {
    return (
        <li className="item">
        {name} {importance > 0 && importance }
        </li>
    );
}

export default Item01;