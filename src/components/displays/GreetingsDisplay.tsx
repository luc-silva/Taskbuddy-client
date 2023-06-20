export const GreetingsDisplay = ({ user }: { user: IUser }) => {
    return (
        <>
            <h2>Hi {user.name}, how are you doing?</h2>
            <p>You currently have:</p>
        </>
    );
};
