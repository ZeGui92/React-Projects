function Header() {
    return (
        <header className="main_header">
            <div className="text-container">
                <h1 className="header-title">
                    Look for <span>Banger</span> Food
                </h1>
                <p className="header-description">
                    Look for oportunities to take your time and pick our delicious, one must say, Banger food recipes to make your life even more colorful!
                </p>
                <div className="header-input-container">
                    <input type="text" placeholder='Find a receipe...' />
                    <button>Search</button>
                </div>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg" alt="" className="main_img" />
            </div>
        </header>
    )
}

export default Header;