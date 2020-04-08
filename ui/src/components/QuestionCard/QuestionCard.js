import React, {Component} from 'react';
import {
    Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuestionCard.scss';
import ButtonList from "../Inputs/ButtonList/ButtonList";
import Button from "../Inputs/ButtonList/Button";
import MultiSelect from "../Inputs/MultiSelect/MultiSelect";
import {INPUT_TYPES} from "../../config";
import loader from "./Lava Lamp-0.8s-200px.svg";

class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer_clicked: false
        };
        this.renderInputs = this.renderInputs.bind(this);
        this.loadDuringFunction = this.loadDuringFunction.bind(this);
    }

    loadDuringFunction(f) {
        this.setState({answer_clicked: true});
        f();
    }



    renderInputs() {
        if (this.props.question.input_type === INPUT_TYPES.BUTTON_LIST) {

            return (
                <ButtonList
                    nextQuestion={() => this.loadDuringFunction(this.props.nextQuestion)} // gets applied to each button
                    buttons={this.props.question.options} //list of text for buttons
                    custom_responses={this.props.question.custom_responses} //decides if we use custom responses in button list or just -1,0,1
                />
            )
        } else if (this.props.question.input_type === INPUT_TYPES.MULTISELECT) {
            return (
                <MultiSelect
                    nextQuestion={() => this.loadDuringFunction(this.props.nextQuestion)} // gets applied to "done" button
                    options={this.props.question.options}
                />
            )
        }
    }

    addGetRecIfNotStartup() {
        if(!this.props.startup) {
            return (
                <Button text={'Give me a recommendation!'} onClick={() => this.loadDuringFunction(this.props.giveRec)}/>
            )
        }
    }

    render() {
        if (this.state.answer_clicked) {
            return (
                <div>
                    <Container className={`question-card-component clicked`}>
                        <object type="image/svg+xml" className="loader" data={loader}>loading...</object>
                    </Container>
                </div>
            )
        }
        return (
            <div>
                <Container className={`question-card-component`}>
                    <div className="question-text">
                        {this.props.question.text}
                    </div>
                    <div className={"input-container"}>
                        {this.renderInputs()}
                    </div>
                </Container>
                <div className={'restart-container'}>
                    <Button text={'Start Over'} onClick={() => this.loadDuringFunction(this.props.reset)}/>
                    {
                        this.addGetRecIfNotStartup()
                    }
                </div>
            </div>
        );
    }
}

export default QuestionCard;

