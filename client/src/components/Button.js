const Button = ({text, color}) => {
    
    const onClick = () => {
        console.log(text)
    }

    return (
        <button 
        onClick={onClick}
        style={{backgroundColor:color}} >
            {text}
        </button>
    )
}

export default Button
