import React from 'react'

export default function Category({finalCategory,setCatname}) {

    let cat = finalCategory.map((v, i) => {
        return (
          <li onClick={()=>setCatname(v.name)} key={i} className='bg-slate-500 p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>
            {v.name}
          </li>
        );
      });
      

  return (
    <div>
       <h3 className='text-[25px] font-[500] p-[10px]'>product Category</h3> 

       <ul>
        {cat}
        
       </ul>
         


    </div>
  )
}
   