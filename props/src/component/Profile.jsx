import { getImageUrl } from "./Utils"

export const Profile = ({name,imageId,size,profession,awards,discoverd}) => {
    console.log(imageId)
    return (
        <>
            <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt="Maria Skłodowska-Curie"
                width={size}
                height={size}
            />
            <ul>
                <li>
                <b>Profession: </b>
                {profession}
                </li>
                <li>
                <b>Awards: 4 </b>
                {awards}
                </li>
                <li>
                <b>Discovered: </b>
                {discoverd}
                </li>
            </ul>
            </section>
        </>
    )
}