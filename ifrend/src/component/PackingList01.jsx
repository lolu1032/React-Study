import Item01 from "./Item01";

export default function PackingList01() {
    return (
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item01
            importance={9}
            name="Space suit"
            />
            <Item01
            importance={0}
            name="Helmet with a golden leaf"
            />
            <Item01
            importance={6}
            name="Photo of Tam"
            />
        </ul>
        </section>
    );
}
