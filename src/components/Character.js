// Write your Character component here
export default function Character(props) {
    return (
        <div className='characters'>
            <h1>{props.photo.name}</h1>
        </div>
    );
}
