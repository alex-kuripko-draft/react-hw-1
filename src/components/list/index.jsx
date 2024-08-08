import ListItem from './list-item';

const List = ({ ulItems, olItems }) => {
    return (
        <>
            <ul>
                {ulItems?.map((val, index) => <ListItem key={index}>{val}</ListItem>)}
            </ul>
            <ol>
                {olItems?.map((val, index) => <ListItem key={index}>{val}</ListItem>)}
            </ol>
        </>
    )
};

export default List;


