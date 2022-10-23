import './NextPageButton.css'

function NextPageButton(props){
    return(
        <div className="next-page-button">
            <div className='button-title'>
                {props.title}
            </div>
        </div>
    )
}

export default NextPageButton