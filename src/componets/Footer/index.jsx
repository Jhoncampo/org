import './Footer.css'

const Footer = () =>{
    return <footer className='footer' style={{background: 'url(/img/footer.png)'}}>
        <div className='redes'>
            <a href="https://www.linkedin.com/feed/">
                <img src="/img/linkedin.png" alt="linkedin" />
            </a>

            <a href="https://github.com/Jhoncampo">
                <img src="/img/github.png" alt="github" />
            </a>

            <a href="https://www.instagram.com/chema___ll/" >
                <img src="/img/instagram.png" alt="isntagram" />
            </a>
        </div>
        <img src="/img/logo.png" alt=""className='img-logo' />
        <strong className='copyright'>Desarrollado por Jhon</strong>
    </footer>
}

export default Footer