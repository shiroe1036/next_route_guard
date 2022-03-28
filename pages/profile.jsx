const Profile = () => {
    return (
        <>
            <h1>Your profiles</h1>
        </>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            protected: true
        }
    };
}

export default Profile;