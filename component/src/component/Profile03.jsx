// 챌린지 3 of 4: 실수를 찾아내세요 
// Profile 컴포넌트가 선언되고 사용되는 방식에 문제가 있습니다. 실수를 발견할 수 있을까요? (React가 컴포넌트를 일반 HTML 태그와 어떻게 구분하는지 기억해 보세요!)

// export default function Profile03() {
// return (
//         <img
//             src="https://i.imgur.com/QIrZWGIs.jpg"
//             alt="Alan L. Hart"
//         />
//     );
// }
const Profile03 = () => {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
};

export default Profile03;