import React from 'react'

const Workitems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <p className="work__desc">{item.description}</p>
        <a href={item.link} target='_blank' className="work__button">
            Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        {/* <div className="workitems__modal active__modal">
            <div className="worktitems__modal-content">
                <i className="uil uil-times workitems__modal-close"></i>
                <img src={item.image} alt="" />
                <h3 className="workitems__modal-tittle">{item.title}</h3>
                <p className="workitems__modal-description">{item.description}</p>
                <a href={item.link} className="work__button">
                    View in github <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </div>
        </div> */}
    </div>
  )
}

export default Workitems
