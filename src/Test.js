import {useEffect, useState} from 'react'
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
    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    },[lessonId])

    const lessons = [
        {
          id: 1,
          name: "ReactJS là gì? Tại sao nên học ReactJS"
        },
        {
          id: 2,
          name: "SPA/MPA là gì?"
        },
        {
          id: 3,
          name: "Arrow function"
        }
      ];
      
    return (
        <div>
            {lessons.map((lesson, index) =>(
                <li
                    key = {index}
                    style = {lessonId === lesson.id ? {color: 'red'}:{} }
                    onClick={()=>setLessonId(lesson.id)}
                   
                >{lesson.name}</li>
            ))}
        </div>
    )
}