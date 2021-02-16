import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../../redux'
import '../../css/counter/index.css'
import useTitle from '../../hooks/useTitle'

const cursorCross = {
    cursor: 'not-allowed'
}

const userInput = 1;

function Counter(props) {
    useTitle('Counter App')

    return (
        <>
            <h1>Counter Value: {props.counterValue}</h1>
            <div>
                <button 
                    className="button-style increment-button"
                    onClick={()=>props.counterIncrement(userInput)}
                >
                    <strong>INCREMENT</strong>
                </button>

                <button 
                    className="button-style decrement-button"
                    onClick={props.counterDecrement}
                    disabled={props.counterValue <= 0?true:false}
                    style={props.counterValue<=0?cursorCross:null}
                >
                    <strong>DECREMENT</strong>
                </button>

                <button 
                    className="button-style reset-button"
                    onClick={props.counterReset}
                    disabled={props.counterValue <= 0?true:false}
                    style={props.counterValue===0?cursorCross:null}
                >
                    <strong>RESET</strong>
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        counterValue: state.counter.count
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        counterIncrement: (incrementvalue)=>dispatch(increment(incrementvalue)),
        counterDecrement: ()=>dispatch(decrement()),
        counterReset: ()=>dispatch(reset())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Counter)
