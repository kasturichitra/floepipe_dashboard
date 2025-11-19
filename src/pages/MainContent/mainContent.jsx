import { FiBell, FiHelpCircle, FiPlusCircle } from "react-icons/fi"


const MainContent = () => {
    return (
        <div>
            <main className="main-content">
                <div className="flex justify-end gap-3 mb-6">
                    <button className="top-bar-btn">₹ Balance</button>
                    <button className="top-bar-btn">
                        <FiHelpCircle /> Help
                    </button>
                    <button className="top-bar-btn">
                        <FiBell /> Updates
                    </button>
                </div>

                <button className="add-account-btn">
                    <FiPlusCircle /> Add Current Account
                </button>

                <div className="prev-transactions">
                    <h2 className="prev-transactions-title">Previous Transactions</h2>
                    <hr className="border-gray-200 mb-3" />
                    <p className="prev-transactions-text">
                        No payments have been made today
                    </p>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">
                    Our Recent Blogs
                </h2>
                <div className="blogs-grid">
                    {[1, 2, 3, 4].map((b) => (
                        <div key={b} className="blog-card">
                            <h3 className="blog-card-title">Blog Title {b}</h3>
                            <p className="blog-card-desc">
                                A short description of this blog post goes here.
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
export default MainContent