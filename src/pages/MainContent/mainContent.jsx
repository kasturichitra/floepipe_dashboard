import { FiBell, FiHelpCircle, FiPlusCircle } from "react-icons/fi"
import { useNavigate } from "react-router-dom"


const MainContent = () => {
    const navigate = useNavigate()
    return (
        <div>
            <main className="main-content">
                Dashboard
            </main>
        </div>
    )
}
export default MainContent