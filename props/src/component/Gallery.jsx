import { Profile } from "./Profile";
import { Profile02 } from "./Profile02";


export default function Gallery() {
    return (
        <>
            <Profile02 
                name = "jam"
            />
            <Profile
                name = "Katsuko Saruhashi"
                imageId = "YfeOqp2"
                size = {70}
                profession = "geochemist"
                awards = " (Miyake Prize for geochemistry, Tanaka Prize)"
                discoverd = "a method for measuring carbon dioxide in seawater"
            />
            <Profile
                name = "Maria Skłodowska-Curie"
                imageId = "szV5sdG"
                size = {70}
                profession = "physicist and chemist"
                awards = " (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
                discoverd = "polonium (chemical element)"
            />
        </>
    );
}
