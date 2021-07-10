const Button = ({text, onClick}) => {
    return (
        <div onClick={ onClick } className="button">
            {text}
        </div>
    );
}
 
export default Button;