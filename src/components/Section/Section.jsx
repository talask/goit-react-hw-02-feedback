export const Section = ({title, children}) => {
    return (
        <section>
            <div className="container">
                <p>{title}</p>
                {children}
            </div>
        </section>
    );
}