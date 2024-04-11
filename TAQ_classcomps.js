import React, {Component} from "react";


class TAQ_classcomps extends Component {
    constructor(props){
        super(props);
        // tao doi tuong du lieu
        this.state = {
            firstname:"truong",
            lastname:"anhquan",
            username:"quan",
        }
    }

    // arrrow func 
    member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3>xin chao : {props.fullname} - ban da {this.props.age} </h3>
            </div>
        )
    }

    listmember = ()=>{
        return (
            <>
            <This.member fullname="Nguyen van A" age ="20"/>
            <This.member fullname="Nguyen van B" age ="20"/>
            <This.member fullname="Nguyen van C" age ="20"/>
            <This.member fullname="Nguyen van D" age ="20"/>
            </>
        )
    }
    render() {
        return (
            <div className="alert alert - danger">
                <h2>Class comps demo</h2>
                <hr/>
                <h3>du lieu trong state</h3>
                <h4>xin chao : {this.state.firstname} {this.state.lastname} </h4>
                <hr/>
                <h3>du lieu tu props</h3>
                <p>Company : {this.props.company}</p>
                <p>course: {this.props.course}</p>

                <hr/>
                <this.member fullname="truong anh quan" age="20" />
                <hr/>
                {/* {this.listmember} */ }
                <this.listmember/>

            </div>
        );
    }
}

export default TAQ_classcomps;