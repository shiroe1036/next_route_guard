import Router from 'next/router';


const redirectToLogin = (res) => {
    if(res){
        console.log("res ito");
        res.writeHead(302, {Location: '/login'})
        res.end()
        res.finished = true
    }else{
        Router.push('/login');
    }
}

const Guard = ({props}) => {
    return (
        <>
            <p>Super test guard</p>
        </>
    )
}

Guard.getInitialProps = async ({req, res}) => {
    let dataTest = 1;
    console.log(res)
    if(dataTest == 0) redirectToLogin(res)
    return {}
}

export default Guard;