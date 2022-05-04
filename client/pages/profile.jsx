export function Profile({ user }) {

    if(user.google !== undefined) {
        const {name, email, picture} = user.google
        return (<div className={"CenterDiv"}>
                <h1>Profile</h1>
                <div>
                    <img src={picture}/>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        );
    }
    if (user.microsoft !== undefined) {
        const {name, email, picture} = user.microsoft
        return (<div className={"CenterDiv"}>
                <h1>Profile</h1>
                <div>
                    <img src={picture}/>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        );
    }
}