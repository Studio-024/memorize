export default function Status() {
    return(
        <section>
            {/* Left */}
            <div className="dashboard__header__left">
                <span>Revisado: </span>
            </div>
            {/* Right */}
            <div className="dashboard__header__right">
                <span>Falta: </span>  
                <span>Total: </span>
            </div>
        </section>
    )
}