import {useEffect, useState, useRef} from 'react'
//1. useEffect(callback)
//- Gọi callback mỗi khi component re-render
//- gọi Callback sau khi them element vào DOM
//2. useEffect(callback,[])
// chỉ gọi callback 1 lần sau khi component mounted
//3. useEffect(callback,[deps])
//- callback đc gọi mỗi khi deps thay đổi
////////////////////////////////////////////////////////////////
//1. Gọi callback sau khi componet element thêm vào DOM
//2. Call back luôn được gọi sau component mounted
//3. Cleanup function luôn được gọi trước khi component unmounted
//4. Cleanup function luôn được gọi trước khi callback được gọi trừ lần mounted
export default function Content(){
  
    const [count, setCount] = useState(0)
    const upFucntion = () => {
        setCount(count +1)
    }
    const downFucntion = () => {
        setCount(count - 1)
    }
    return (
        <div>
            {count}<br/>
            <button type="button" onClick={downFucntion}>Down</button>
            <button type="button" onClick={upFucntion}>Up</button>
        </div>
    )
}