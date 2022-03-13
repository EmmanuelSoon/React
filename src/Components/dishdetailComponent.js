import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';


  class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDishdetails:this.props.dishdetail
        };
    }


    renderDish(dish) {
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

    renderComments(comments) {
        if (comments != null){
            const comt = comments.map(comment => {
                return (
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-GB', {
                        dateStyle: "long"

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


    render() {
            const dish = this.props.dish
            if(dish == null){
                return <div></div>
            }

            return (
                <div className='row'>
                {this.renderDish(dish)}
                {this.renderComments(dish.comments)}
            </div>
            )


        
    }

  }
export default Dishdetail