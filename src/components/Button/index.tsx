interface ButtonProps {
    height : number;
    width : number;
    content : string;
}

const Button : React.FC<ButtonProps>  = ({ height, width, content }) => {
    return (
        <div className={ `bg-[#9EFF00] text-black text-[14px] h-[${height}px] w-[${width}px] rounded-[8px] flex items-center justify-center py-[12px] px-[18px]` }>
            {content}
        </div>
    );
}

export default Button;