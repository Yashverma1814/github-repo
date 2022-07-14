import React from 'react'
import { Navbar } from './Navbar';

export const GithubRepo = () => {
  const [title,setTitle] = React.useState("");
  const [sItem,setSItem] = React.useState("");
  var data = [
        {
            id:1,
            repo:"react-usestate"
        },
        {
            id:2,
            repo:"react-useeffect"
        },
        {
            id:3,
            repo:"Redux"
        },
        {
            id:4,
            repo:"useeffect2"
        }
    ];
    console.log(sItem);
  return (
    <div>
      <div>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Search Repositries here...'/>
        <button onClick={()=>setSItem(title)}>Search</button>
      </div>
      <div>
        {
        data.filter((d)=>{return d.repo.includes(sItem)}).map((item)=>(
            <h5 key={item.id}>{item.repo}</h5>
        ))}
      </div>
    </div>
  )
}

