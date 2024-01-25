import React from 'react'
import "./coreConcepts.css"
import { CORE_DATA } from '../../data';
import NavBar from '../NavBar/NavBar';
import { SubCoreComponentProps } from '../../types/componentsTypes/subCore';


const SubCoreComponent:React.FC<SubCoreComponentProps> = (props) => {
    const { title, description, image } = props.object;
    return (

        <div id="sub-component">
            <h1 style={{ color: "skyblue", textAlign: "center" }}>{title}</h1>
            <p style={{ textAlign: "center",color:"white" }}>{description}</p>
            <img id='sub-img' src={image} />
        </div>


    );

}

export default function CoreConcepts() {
    return (
        <>
        <div id='core-concepts'>
            {/* <SubCoreComponent  object={{title:props.title,desc:props.desc,img:props.img}} />
            <SubCoreComponent  object={{title:props.title,desc:props.desc,img:props.img}}/>
            <SubCoreComponent  object={{title:props.title,desc:props.desc,img:props.img}}/>
            <SubCoreComponent  object={{title:props.title,desc:props.desc,img:props.img}}/> */}

            {
                CORE_DATA.map((ele, index) => {
                    return <SubCoreComponent key={index} object={{ title: ele.title, description: ele.description, image: ele.image }} />

                })
            }
        </div>
         <NavBar />
         </>

    );
}
