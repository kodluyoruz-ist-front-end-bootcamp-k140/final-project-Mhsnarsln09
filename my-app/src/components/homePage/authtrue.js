import { useNavigate } from "react-router-dom"
export function AuthTrue() {
    const navigate = useNavigate()
    return (
        <>
            <div className="authTrue" onClick={() => navigate(`/nutritionist`)}>
                <h2 className="hph2">Nutritionist</h2>
                <p>Contact your dietitian</p>
            </div>
            <div className="authTrue" onClick={() => navigate(`/training`)}>
                <h2 className="hph2">Training</h2>
                <p>Best gyms for you</p>
            </div>
        </>
    )
}