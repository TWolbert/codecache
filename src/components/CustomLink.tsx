import { useNavigate } from "react-router-dom";

export function Link(props: { to: string; children: React.ReactNode, className?: string }) {
    const navigate = useNavigate();

    function redirectTo() {
        navigate(props.to);
    }
    return (    
        <button onMouseDown={redirectTo} className={props.className}>{props.children}</button>
    );
}