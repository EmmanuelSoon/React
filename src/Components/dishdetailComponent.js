import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';





    function RenderDish({dish}) {
        if (dish != null) 
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments({comments}) {
        if (comments != null){
            const comt = comments.map(comment => {
                return (
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-GB', {
                         year: 'numeric', 
                         month: 'short', 
                         day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
                )
            })

            return(
                <div className='col-12 col-md-5 m-1'>
                <h4> Comments. </h4>
                <ul className='list-unstyled'>
                    {comt}
                </ul>

            </div>
            );
        }
        else
            return(
                <div></div>
            );
    }


    const DishDetail = (props) => {
            
            if(props.dish == null){
                return <div></div>
            }

            return (
                <div className='row'>
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.dish.comments}/>
            </div>
            )


        
    }

  
export default DishDetail