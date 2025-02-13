function Drink({ name }) {
    let teaHeader;
    let teaContent;
    let teaAge;
    if(name === 'tea') {
        teaHeader = 'tea'
        teaContent = '15–70 mg/cup'
        teaAge = '4,000+ years'
    }else {
        teaHeader = 'bean';
        teaContent = '80–185 mg/cup';
        teaAge = '1,000+ years';
    }
    return (
        <section>
        <h1>{name}</h1>
        <dl>
            <dt>Part of plant</dt>
            <dd>{teaHeader}</dd>
            <dt>Caffeine content</dt>
            <dd>{teaContent}</dd>
            <dt>Age</dt>
            <dd>{teaAge}</dd>
        </dl>
        </section>
    );
}

export default Drink;