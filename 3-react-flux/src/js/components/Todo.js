import  React from "react"

export default class Todo extends React.Component{
    constructor(){
        super();
    }
    render(){
        const { id,text,complete } = this.props;
        const icon = complete ? "\u2714" : "\u2716"
        return (
            <li>
            <span>{text}</span>
            <span>{icon}</span>
          </li>
        );
    }

}