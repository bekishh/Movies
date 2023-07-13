import ExpenseButton from "./ExpenseButton"

const Header = ({onClick}) => {
    return (
        <header>
            <nav>
                <h1 className="headerTitle">Favorite Movies</h1>
                <ExpenseButton onClick={onClick} />
            </nav>
        </header>
    )
}
export default Header