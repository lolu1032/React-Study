import { getImageUrl } from "./Utils";

export function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person.imageId, 'b')}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}