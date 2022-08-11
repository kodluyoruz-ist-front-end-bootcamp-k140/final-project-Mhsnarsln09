import { useNavigate } from "react-router-dom"
export function AuthTrue() {
    const navigate = useNavigate()
    return (
        <>
            <div className="authTrue" onClick={() => navigate(`/nutritionist`)}>
                <h2>Nutritionist</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis?</p>
            </div>
            <div className="authTrue" onClick={() => navigate(`/training`)}>
                <h2>Training</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis?</p>
            </div>
        </>
    )
}