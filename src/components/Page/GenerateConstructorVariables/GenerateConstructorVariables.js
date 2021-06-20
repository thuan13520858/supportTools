import React, { Component, useRef } from 'react';
import Swal from 'sweetalert2';
import style from './GenerateConstructorVariables.module.scss';
import data from '../../../data/SetVariable.json'

export default class GenerateConstructorVariables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jaVar: [],
            enVar: [],
            dataType: [],
            result: "",
        }
    }
    convert = () => {
        let {jaVar, enVar, dataType} = this.state;
        jaVar = jaVar.filter((el) => {
            return el != "";
        });
        enVar = enVar.filter((el) => {
            return el != "";
        });
        dataType = dataType.filter((el) => {
            return el != "";
        });
        if (jaVar.length * enVar.length * dataType.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields must be entered',
              })
              return;
        }
        if ((jaVar.length + enVar.length + dataType.length)/(jaVar.length*3) !== 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Line numbers of fields do not match',
              })
            return;
        }

        let result = "";
        let obj = data;

        for(let i = 0; i< jaVar.length ; i++) {
            if (enVar[i].indexOf('_') < 0) {
                switch (dataType[i]) {
                    case "string":
                        result += "/** " + jaVar[i] + " */" + "\n"
                                + "readonly " + enVar[i] + ": KnockoutObservable<string>;" + "\n"
                                + "/** " + jaVar[i] + "(focus) */" + "\n"
                                + "readonly focus" + enVar[i] + ": KnockoutObservable<boolean>;" + "\n"
                                + "/** " + jaVar[i] + "(disable) */" + "\n"
                                + "readonly disable" + enVar[i] + ": KnockoutObservable<boolean>;" + "\n";
                        break;
                    case "integer":
                        result += "/** " + jaVar[i] + " */" + "\n"
                                + "readonly " + enVar[i] + ": KnockoutObservable<number>;" + "\n"
                                + "/** " + jaVar[i] + "(focus) */" + "\n"
                                + "readonly focus" + enVar[i] + ": KnockoutObservable<boolean>;" + "\n"
                                + "/** " + jaVar[i] + "(disable) */" + "\n"
                                + "readonly disable" + enVar[i] + ": KnockoutObservable<boolean>;" + "\n";
                        break;
                    case "function":
                        result += "/** " + jaVar[i] + "(focus) */" + "\n"
                                + "readonly focus" + enVar[i] + ": KnockoutObservable<boolean>;" + "\n"
                                + "/** " + jaVar[i] + "(disable) */" + "\n"
                                + "readonly disable" + enVar[i] + ": KnockoutObservable<boolean>;" + "\n";
                    default:
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Data Type does not match',
                          })
                        break;
                }
            } else {
                result += "/** " + jaVar[i] + " */" + "\n"
                    + "private " + enVar[i] + ": " +  dataType[i] +";" + "\n"
            }
        }
        this.setState({
            result: result
        })
    }
    onChange = (e) => {
        let name = e.nativeEvent.target.name;
        let value = e.target.value.split("\n");
        this.setState({
            [name]: value
        });
    }

    copy = () => {
        const el = document.createElement('textarea');
        el.value = this.state.result;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    Clear = () => {
        this.setState({
            jaVar: [],
            enVar: [],
            dataType: [],
            result: ""
        });
    }

    render() {
        let {jaVar, enVar, dataType} = this.state;
        jaVar = jaVar.join("\n");
        enVar = enVar.join("\n");
        dataType = dataType.join("\n");
        return (
            <div className = {style.GenerateConstructorVariables}>
                <div className = "input-area d-flex">
                    <div className="japanese-variable input-variable">
                        <label>Japanese Variables</label>
                        <textarea name = "jaVar" value = {jaVar} onChange = {this.onChange}></textarea>
                    </div>
                    <div className="english-variable input-variable">
                        <label>English Variables</label>
                        <textarea name = "enVar" value = {enVar} onChange = {this.onChange}></textarea>
                    </div>
                    <div className="data-type input-variable">
                        <label>Data Type</label>
                        <textarea name = "dataType" value = {dataType} onChange = {this.onChange}></textarea>
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
