import './loading.scss';
import React from 'react'

/**
 * Loading组件
 */
//
// class Loading extends React.Component {
//     render(){
//         let str = '加载中';
//         if (this.props.isend) {
//             str = '已完成';
//         }
//
//
//     }
//
// }
export default function Loading(props){
    let str = '加载中';
    if(props.isend){
        str = '已完成';
    }
    return (<div className="loading">{str}</div>)
}
