import { Container } from 'react-bootstrap';

interface IProps {
    data: {
        id: number;
        image: string;
        name: string;
        date: string;
        comment: string;
    }
}

const CommentCard = (props: IProps) => {
    const { image, name, date, comment } = props.data;

    return (

        <Container className="d-flex mb-3">
            <div>
                <img src={image} alt="" className="w-100 p-2" />
            </div>
            <div className="p-2">
                <h5 className="text-primary">{name}</h5>
                <p>{date}</p>
                <p className="text-secondary">{comment}</p>
                <button className="pink-btn py-1">Reply</button>
            </div>
        </Container>
    );
};

export default CommentCard;