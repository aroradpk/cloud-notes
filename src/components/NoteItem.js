import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3' >            
            <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laborum ea perspiciatis excepturi maiores aut atque, eos tempore iure obcaecati voluptate quo mollitia explicabo aliquid facere numquam suscipit temporibus rerum? </p>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem