interface ButtonProps {
    height : number;
    width : number;
    content : string;
}

const Button2 : React.FC<ButtonProps>  = ({ height, width, content }) => {
    return (
        <div className={ `bg-[#333333] text-white border-2 border-[#262626] text-[14px] h-[${height}px] w-[${width}px] rounded-[8px] flex items-center justify-center py-[12px] px-[18px]` }>
            {content}
        </div>
    );
}

export default Button2;