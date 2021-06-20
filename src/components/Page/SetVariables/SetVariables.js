import React, { Component } from 'react';
import Swal from 'sweetalert2';
import style from './SetVariables.module.scss'
import data from '../../../data/SetVariable.json'

export default class SetVariables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jaVar: [],
            values: [],
            result: "",
        }
    }

    onChange = (e) => {
        let name = e.nativeEvent.target.name;
        let value = e.target.value.split("\n");
        this.setState({
            [name]: value
        });
    }
    convert = () => {
        console.log(data);
        let {jaVar, values} = this.state;
        jaVar = jaVar.filter((el) => {
            return el != "";
        });
        values = values.filter((el) => {
            return el != "";
        });

        if (jaVar.length * values.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields must be entered',
              })
              return;
        }
        if ((jaVar.length + values.length)/(jaVar.length*3) !== 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Line numbers of fields do not match',
              })
            return;
        }
        

    }
    render() {
        let {jaVar, values } = this.state;
        jaVar = jaVar.join("\n");
        values = values.join("\n");
        return (
            <div className = {style.SetVariables}>
                <div className = "input-area d-flex">
                    <div className="japanese-variable input-variable">
                        <label>Japanese Variables</label>
                        <textarea name = "jaVar" value = {jaVar} onChange = {this.onChange}></textarea>
                    </div>
                    <div className="english-variable input-variable">
                        <label>Values</label>
                        <textarea name = "values" value = {values} onChange = {this.onChange}></textarea>
                    </div>
                    <div className="convert">
                        <button className = "btn btn-success" onClick = {this.convert}>Convert</button>
                        <button className = "btn btn-danger" onClick = {this.Clear}>Clear</button>
                    </div>
                </div>
                <div className = "result-area">
                    <div className = "d-flex justify-content-between">
                        <label>Result</label>
                        <button className = "btn btn-light btn-outline-secondary" onClick = {this.copy}>Copy</button>
                    </div>
                    <textarea value = {this.state.result} disabled>
                    </textarea>
                </div>
            </div>
        )
    }
}
