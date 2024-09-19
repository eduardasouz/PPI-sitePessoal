import styles from '/Curiosidade.module.css'

function Curiosidade(){
    return(
        <div className={styles.container}>
        <section id="Curiosidade">
            <article>
            <h2>5 curiosidades sobre mim:</h2>
            <div>
                <p>Sou apaixonada por crianças, esse ai é meu zezé</p>
                <imag></imag>
                
                <p>Livros de romance são meus preferidos</p>
                <imag></imag>
               
                <p>Tenho duas melhores amigas espetaculares</p>
                <imag></imag>
                <p>Eletronica é meu hobby</p>
                <imag></imag>
                <p>Eu sou completamente apaixonada por cachorros</p>
                <imag></imag>
            </div>
            </article>
        </section>
    </div>    

    );
}

export default Curiosidade;